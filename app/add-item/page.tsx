"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Stage = "before" | "processing" | "after";

export default function AddItemPage() {
  const [stage, setStage] = useState<Stage>("before");

  return (
    <main className="min-h-screen flex flex-col px-6 py-10 bg-stone-50">
      <header className="max-w-md w-full mx-auto flex items-center justify-between">
        <Link
          href="/onboarding/favorites"
          className="text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-700"
        >
          ← Back
        </Link>
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
          Item 1 of 10
        </p>
      </header>

      <section className="flex-1 flex flex-col justify-center max-w-md w-full mx-auto py-8">
        {stage === "before" && (
          <div className="space-y-8">
            <div className="space-y-3 text-center">
              <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-stone-900">
                Take a photo of one favourite.
              </h1>
              <p className="text-sm text-stone-500 leading-relaxed">
                Lay it flat on a plain surface or hang it in front of a wall.
                We'll handle the rest.
              </p>
            </div>

            <button
              onClick={() => {
                setStage("processing");
                setTimeout(() => setStage("after"), 1600);
              }}
              className="block w-full aspect-[3/4] rounded-2xl border-2 border-dashed border-stone-300 bg-stone-100/60 hover:bg-stone-100 transition-colors flex items-center justify-center"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Tap to take photo
              </span>
            </button>
          </div>
        )}

        {stage === "processing" && (
          <div className="space-y-6">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200">
              {/* faux raw photo: tinted + slightly shifted to feel uncropped */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-200" />
              <div className="absolute inset-0 flex items-center justify-center opacity-90">
                <Image
                  src="/wardrobe/striped-blouse.png"
                  alt=""
                  width={400}
                  height={500}
                  className="object-contain max-h-full mix-blend-multiply"
                />
              </div>
              <div className="absolute inset-0 bg-stone-900/30 backdrop-blur-[1px] flex items-center justify-center">
                <div className="bg-stone-50 rounded-full px-5 py-3 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-700 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-stone-700 rounded-full animate-pulse" />
                    Identifying item
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center text-xs uppercase tracking-[0.25em] text-stone-500">
              Removing background · reading colour & cut
            </p>
          </div>
        )}

        {stage === "after" && (
          <div className="space-y-6">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/wardrobe/striped-blouse.png"
                alt="Striped blouse"
                fill
                className="object-contain p-8"
              />
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-1">
                  We think this is
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-stone-900">
                  Long-sleeve blouse
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Top",
                  "Navy",
                  "Vertical stripes",
                  "Smart-casual",
                  "All-season",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-xs text-stone-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-xs text-stone-500 leading-relaxed">
                Tap any tag to edit. Or save as-is — you can refine later.
              </p>
            </div>
          </div>
        )}
      </section>

      <footer className="max-w-md w-full mx-auto pt-4">
        {stage === "after" ? (
          <Link
            href="/wardrobe"
            className="block w-full text-center px-10 py-4 bg-stone-900 text-stone-50 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors"
          >
            Save to wardrobe
          </Link>
        ) : (
          <div className="h-14" />
        )}
      </footer>
    </main>
  );
}
