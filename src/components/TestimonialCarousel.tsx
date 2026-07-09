"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [items.length]);

  const current = items[index];
  if (!current) return null;

  return (
    <div className="grind-panel p-8 md:p-12">
      <div className="relative z-10">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-cool">
          Word on the cut
        </p>
        <blockquote className="display max-w-3xl text-3xl leading-tight text-paper md:text-5xl">
          “{current.quote}”
        </blockquote>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-warm">{current.client}</p>
            <p className="text-sm text-cool">{current.projectType}</p>
          </div>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === index ? "bg-warm" : "bg-paper/25 hover:bg-paper/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
