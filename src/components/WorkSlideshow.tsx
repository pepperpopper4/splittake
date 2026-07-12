"use client";

import { useCallback, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { VideoEmbed } from "@/components/VideoEmbed";

type WorkSlideshowProps = {
  id: string;
  eyebrow: string;
  title: string;
  projects: Project[];
};

export function WorkSlideshow({
  id,
  eyebrow,
  title,
  projects,
}: WorkSlideshowProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + projects.length) % projects.length);
    },
    [projects.length],
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 48) go(dx > 0 ? -1 : 1);
  };

  if (projects.length === 0) return null;

  const current = projects[index];

  return (
    <section id={id} className="scroll-mt-20 border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm">
          {eyebrow}
        </p>
        <h2 className="display mt-2 text-3xl text-ink md:text-5xl">{title}</h2>
      </div>

      <div
        className="slideshow-stage mt-8"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="slideshow-video relative">
          <VideoEmbed
            key={current.slug}
            vimeoId={current.vimeoId}
            title={current.title}
            className="absolute inset-0 h-full !aspect-auto"
          />
        </div>

        <div className="slideshow-controls">
          <button
            type="button"
            className="slideshow-btn"
            onClick={() => go(-1)}
            aria-label="Previous project"
          >
            Prev
          </button>
          <div className="flex items-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                aria-label={`Show ${p.title}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
                className={`slideshow-dot ${i === index ? "is-active" : ""}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="slideshow-btn"
            onClick={() => go(1)}
            aria-label="Next project"
          >
            Next
          </button>
        </div>

        <div className="slideshow-meta mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cool">
            {current.year}
          </p>
          <h3 className="display mt-1 text-2xl text-paper md:text-4xl">
            {current.title}
          </h3>
          <p className="mt-4 max-w-2xl text-paper/75 leading-relaxed">
            {current.description}
          </p>
          <p className="mt-3 text-sm text-muted">{current.credits}</p>
        </div>
      </div>
    </section>
  );
}
