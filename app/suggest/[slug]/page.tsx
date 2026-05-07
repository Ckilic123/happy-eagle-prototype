import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findItem, items, outfitsBySeed } from "@/lib/wardrobe";

export default async function SuggestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const seed = findItem(slug);
  if (!seed) notFound();

  const outfits = outfitsBySeed[slug] ?? [];

  return (
    <main className="min-h-screen flex flex-col px-6 py-10 bg-stone-50">
      <header className="max-w-md w-full mx-auto flex items-center justify-between mb-8">
        <Link
          href={`/item/${seed.slug}`}
          className="text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-700"
        >
          ← Back
        </Link>
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
          Matches
        </p>
      </header>

      <section className="max-w-md w-full mx-auto space-y-2 mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
          Styling your
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-stone-900 leading-tight">
          {seed.name.toLowerCase()}
        </h1>
      </section>

      <section className="max-w-md w-full mx-auto space-y-8">
        {outfits.length === 0 && (
          <p className="text-stone-500 text-sm">
            No outfit ideas yet for this piece.
          </p>
        )}

        {outfits.map((outfit, idx) => {
          const outfitItems = outfit.itemSlugs
            .map((s) => items.find((i) => i.slug === s))
            .filter(Boolean);

          return (
            <article
              key={idx}
              className="bg-white rounded-2xl border border-stone-200/70 overflow-hidden"
            >
              <div className="bg-stone-100 px-5 py-3 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  Outfit {idx + 1}
                </p>
                <p className="text-xs text-stone-500">
                  {outfitItems.length} pieces
                </p>
              </div>

              <div
                className={`grid gap-2 p-5 bg-stone-50 ${
                  outfitItems.length === 1
                    ? "grid-cols-1"
                    : outfitItems.length === 2
                    ? "grid-cols-2"
                    : "grid-cols-3"
                }`}
              >
                {outfitItems.map((it) => (
                  <div
                    key={it!.slug}
                    className="aspect-[3/4] rounded-xl bg-white relative overflow-hidden"
                  >
                    <Image
                      src={it!.image}
                      alt={it!.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                ))}
              </div>

              <div className="p-6 space-y-5">
                <p className="font-[family-name:var(--font-display)] text-xl leading-snug text-stone-900">
                  {outfit.reasoning}
                </p>

                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">
                    Styling tips
                  </p>
                  <ul className="space-y-1.5">
                    {outfit.stylingTips.map((tip, i) => (
                      <li
                        key={i}
                        className="text-sm text-stone-700 leading-relaxed flex gap-2"
                      >
                        <span className="text-stone-400 mt-0.5">·</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-3 border-t border-stone-100">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">
                    A small addition
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {outfit.accessoryHint.suggestion}
                  </p>
                  {outfit.accessoryHint.retailerNote && (
                    <button className="text-xs uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 underline-offset-4 hover:underline mt-1">
                      {outfit.accessoryHint.retailerNote} →
                    </button>
                  )}
                </div>

                <div className="flex gap-2 pt-3">
                  <button className="flex-1 px-5 py-3 bg-stone-900 text-stone-50 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors">
                    Save outfit
                  </button>
                  <button className="flex-1 px-5 py-3 border border-stone-300 text-stone-900 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-stone-100 transition-colors">
                    I wore this
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <footer className="max-w-md w-full mx-auto pt-10 pb-4">
        <Link
          href="/wardrobe"
          className="block text-center text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-700 py-3"
        >
          Back to wardrobe
        </Link>
      </footer>
    </main>
  );
}
