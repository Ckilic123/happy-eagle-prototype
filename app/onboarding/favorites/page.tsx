import Link from "next/link";

export default function FavoritesIntroPage() {
  return (
    <main className="min-h-screen flex flex-col px-8 py-12 bg-stone-50">
      <header className="max-w-md w-full mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
          Step 2 of 2
        </p>
      </header>

      <section className="flex-1 flex flex-col justify-center max-w-md w-full mx-auto space-y-10">
        <div className="space-y-6">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl leading-[1.15] text-stone-900">
            Start with ten favourites.
          </h1>
          <p className="text-base leading-relaxed text-stone-600">
            Photograph the clothes you already love and reach for. Ten is enough
            for the first suggestions to feel right. Add more whenever the mood
            takes you.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-md border border-dashed border-stone-300 bg-stone-100/40"
            />
          ))}
        </div>

        <p className="text-sm text-stone-500 text-center">
          A plain wall and decent daylight are all you need.
        </p>
      </section>

      <footer className="max-w-md w-full mx-auto pt-8 space-y-3">
        <Link
          href="/add-item"
          className="block w-full text-center px-10 py-4 bg-stone-900 text-stone-50 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors"
        >
          Add my first item
        </Link>
        <Link
          href="/wardrobe"
          className="block w-full text-center text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-700 transition-colors py-3"
        >
          Skip — see a sample wardrobe
        </Link>
      </footer>
    </main>
  );
}
