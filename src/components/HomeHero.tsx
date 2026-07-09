"use client";

import Link from "next/link";
import { BrandMark } from "@/components/ColorWords";
import { VideoEmbed } from "@/components/VideoEmbed";
import { useDesignOption } from "@/components/DesignOption";
import { site } from "@/data/site";

function CtaRow({ className = "" }: { className?: string }) {
  return (
    <div className={`mt-8 flex flex-wrap gap-3 ${className}`}>
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
          <span className="text-warm">
            Take<span className="brand-period">.</span>
          </span>
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

/** Option 3 — stacked editorial layout, full-bleed reel (not a side-by-side grid). */
function HeroMarquee() {
  return (
    <div className="hero-marquee">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-12 md:px-8 md:pb-12 md:pt-16">
        <div className="fade-up mx-auto max-w-4xl text-center">
          <BrandMark size="lg" className="justify-center" />
          <p className="hero-marquee-eyebrow mt-8">{site.name}</p>
          <h1 className="hero-marquee-title mt-4">
            Stories worth
            <br />
            <span className="text-cool">watching twice.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-paper/70">
            {site.tagline}
          </p>
          <CtaRow className="justify-center" />
        </div>
      </section>

      <section className="hero-marquee-reel fade-up stagger-2" aria-label="Showreel">
        <div className="hero-marquee-reel-bar hero-marquee-reel-bar--top" />
        <div className="hero-marquee-reel-inner">
          <VideoEmbed
            vimeoId={site.showreelVimeoId}
            title="Split Take showreel"
            autoplay
            muted
            className="aspect-[21/9] md:aspect-[2.4/1]"
          />
        </div>
        <div className="hero-marquee-reel-bar hero-marquee-reel-bar--bottom" />
      </section>

      <div className="hero-marquee-ticker" aria-hidden>
        <span>Commercial films</span>
        <span className="text-warm">·</span>
        <span>Social content</span>
        <span className="text-cool">·</span>
        <span>Post-production</span>
        <span className="text-warm">·</span>
        <span>Emerson-trained crew</span>
        <span className="text-cool">·</span>
        <span>Split Take Media</span>
      </div>
    </div>
  );
}

export function HomeHero() {
  const { option } = useDesignOption();

  if (option === "2") return <HeroCinema />;
  if (option === "3") return <HeroMarquee />;
  return <HeroGrind />;
}
