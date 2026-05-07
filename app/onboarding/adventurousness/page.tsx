"use client";

import Link from "next/link";
import { useState } from "react";

const levels = [
  { value: 1, label: "Quietly considered", hint: "Safe pairings I'll actually wear." },
  { value: 2, label: "A little playful", hint: "Mostly classic, a soft surprise here and there." },
  { value: 3, label: "Balanced", hint: "Mix the familiar with the unexpected." },
  { value: 4, label: "Bold", hint: "Push me — I want combinations I wouldn't reach for." },
  { value: 5, label: "Take risks", hint: "Show me the outfit I didn't know I owned." },
];

export default function AdventurousnessPage() {
  const [selected, setSelected] = useState<number>(3);
  const current = levels.find((l) => l.value === selected)!;

  return (
    <main className="min-h-screen flex flex-col px-8 py-12 bg-stone-50">
      <header className="max-w-md w-full mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
          Step 1 of 2
        </p>
      </header>

      <section className="flex-1 flex flex-col justify-center max-w-md w-full mx-auto space-y-12">
        <div className="space-y-6">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl leading-[1.15] text-stone-900">
            How adventurous should we be?
          </h1>
          <p className="text-base leading-relaxed text-stone-600">
            This sets the tone of every suggestion. You can change it any time
            in settings.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between gap-3">
            {levels.map((l) => (
              <button
                key={l.value}
                onClick={() => setSelected(l.value)}
                className={`flex-1 h-14 rounded-full border transition-all ${
                  selected === l.value
                    ? "bg-stone-900 border-stone-900 text-stone-50"
                    : "bg-transparent border-stone-300 text-stone-400 hover:border-stone-400"
                }`}
                aria-label={`Level ${l.value}`}
              >
                <span className="font-[family-name:var(--font-display)] text-xl">
                  {l.value}
                </span>
              </button>
            ))}
          </div>

          <div className="text-center space-y-2 min-h-[80px]">
            <p className="font-[family-name:var(--font-display)] text-2xl text-stone-900">
              {current.label}
            </p>
            <p className="text-sm text-stone-500 max-w-xs mx-auto leading-relaxed">
              {current.hint}
            </p>
          </div>
        </div>
      </section>

      <footer className="max-w-md w-full mx-auto pt-8">
        <Link
          href="/onboarding/favorites"
          className="block w-full text-center px-10 py-4 bg-stone-900 text-stone-50 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors"
        >
          Continue
        </Link>
      </footer>
    </main>
  );
}
