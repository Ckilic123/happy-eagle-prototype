import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 py-16 bg-stone-50">
      <div className="max-w-md w-full text-center space-y-10">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
          Happy Eagle
        </p>

        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-[1.1] text-stone-900">
          Rediscover the wardrobe you already own.
        </h1>

        <p className="text-lg leading-relaxed text-stone-600 max-w-sm mx-auto">
          A quiet styling companion for the clothes already in your closet.
          Less shopping. More wearing.
        </p>

        <Link
          href="/onboarding/adventurousness"
          className="inline-block mt-4 px-10 py-4 bg-stone-900 text-stone-50 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors"
        >
          Begin
        </Link>
      </div>
    </main>
  );
}
