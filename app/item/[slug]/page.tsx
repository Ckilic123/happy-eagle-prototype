import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findItem } from "@/lib/wardrobe";

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = findItem(slug);
  if (!item) notFound();

  const tags = [
    item.subcategory,
    item.primaryColor,
    item.pattern,
    `Formality ${item.formality}/5`,
    `Warmth ${item.warmth}/5`,
  ];

  return (
    <main className="min-h-screen flex flex-col px-6 py-10 bg-stone-50">
      <header className="max-w-md w-full mx-auto flex items-center justify-between mb-6">
        <Link
          href="/wardrobe"
          className="text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-700"
        >
          ← Wardrobe
        </Link>
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
          Item
        </p>
      </header>

      <section className="flex-1 max-w-md w-full mx-auto space-y-8">
        <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 relative">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-8"
          />
        </div>

        <div className="space-y-3">
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-stone-900 leading-tight">
            {item.name}
          </h1>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-xs text-stone-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="max-w-md w-full mx-auto pt-10">
        <Link
          href={`/suggest/${item.slug}`}
          className="block w-full text-center px-10 py-4 bg-stone-900 text-stone-50 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors"
        >
          Find matches
        </Link>
      </footer>
    </main>
  );
}
