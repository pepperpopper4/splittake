"use client";

import Link from "next/link";
import { BrandMark } from "@/components/ColorWords";
import { VideoEmbed } from "@/components/VideoEmbed";
import { useDesignOption } from "@/components/DesignOption";
import { site } from "@/data/site";

function CtaRow() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Link href="/contact" className="btn-primary">
        Start a project
      </Link>
      <Link href="/work" className="btn-ghost">
        See the work
      </Link>
    </div>
  );
}

function HeroGrind() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:gap-12 md:px-8 md:pb-24 md:pt-16">
      <div className="fade-up">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sun">
          {site.name}
        </p>
        <h1 className="display text-[clamp(3.2rem,11vw,6.5rem)] leading-[0.88]">
          <span className="text-paper">Split</span>
          <br />
          <span className="text-warm">Take</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/75">
          {site.tagline}
        </p>
        <CtaRow />
      </div>

      <div className="fade-up stagger-2 grind-panel p-2 md:p-3">
        <div className="relative z-10 overflow-hidden">
          <VideoEmbed
            vimeoId={site.showreelVimeoId}
            title="Split Take showreel"
            autoplay
            muted
          />
        </div>
      </div>
    </section>
  );
}

function HeroCinema() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-14">
      <div className="fade-up mb-10 max-w-3xl">
        <div className="mb-5">
          <BrandMark size="lg" />
        </div>
        <div className="hero-rule mb-6" />
        <h1 className="display text-[clamp(3.4rem,10vw,7rem)] leading-[0.9] text-paper">
          Commercial films.
          <br />
          <span className="text-warm">Social that sticks.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/70">
          {site.tagline}
        </p>
        <CtaRow />
      </div>

      <div className="fade-up stagger-2 hero-cinema-frame">
        <VideoEmbed
          vimeoId={site.showreelVimeoId}
          title="Split Take showreel"
          autoplay
          muted
        />
      </div>
    </section>
  );
}

function HeroStudio() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
      <div className="hero-studio-slash" aria-hidden />
      <div className="relative z-10 grid items-end gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
        <div className="fade-up">
          <div className="mb-6 inline-block bg-ink px-3 py-2 shadow-[4px_4px_0_#ff5a1f]">
            <BrandMark size="lg" />
          </div>
          <h1 className="display text-[clamp(3rem,9vw,5.8rem)] leading-[0.92] text-paper">
            Bold cuts.
            <br />
            Clear stories.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/75">
            {site.tagline}
          </p>
          <CtaRow />
        </div>

        <div className="fade-up stagger-2 hero-studio-block">
          <VideoEmbed
            vimeoId={site.showreelVimeoId}
            title="Split Take showreel"
            autoplay
            muted
          />
        </div>
      </div>
    </section>
  );
}

export function HomeHero() {
  const { option } = useDesignOption();

  if (option === "2") return <HeroCinema />;
  if (option === "3") return <HeroStudio />;
  return <HeroGrind />;
}
