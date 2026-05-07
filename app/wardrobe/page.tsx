import Image from "next/image";
import Link from "next/link";
import { items } from "@/lib/wardrobe";

export default function WardrobePage() {
  return (
    <main className="min-h-screen flex flex-col px-6 py-10 bg-stone-50">
      <header className="max-w-md w-full mx-auto space-y-1 mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
          Wardrobe
        </p>
        <div className="flex items-baseline justify-between">
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-stone-900">
            Your closet
          </h1>
          <span className="text-sm text-stone-500">
            {items.length} items
          </span>
        </div>
      </header>

      <section className="max-w-md w-full mx-auto grid grid-cols-2 gap-4">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/item/${item.slug}`}
            className="group block"
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 relative group-hover:bg-stone-200 transition-colors">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="mt-3 space-y-0.5">
              <p className="text-sm text-stone-900 leading-tight">
                {item.name}
              </p>
              <p className="text-xs text-stone-500">{item.primaryColor}</p>
            </div>
          </Link>
        ))}
      </section>

      <footer className="max-w-md w-full mx-auto mt-12 space-y-3">
        <Link
          href="/add-item"
          className="block w-full text-center px-10 py-4 border border-stone-300 text-stone-900 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-stone-100 transition-colors"
        >
          Add another item
        </Link>
        <p className="text-center text-xs text-stone-500">
          Tap any item to find outfits.
        </p>
      </footer>
    </main>
  );
}
