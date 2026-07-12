import { BrandMark } from "@/components/ColorWords";
import { site } from "@/data/site";

export function HomeHero() {
  return (
    <section className="hero-band">
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-10 md:px-8 md:pb-16 md:pt-14">
        <BrandMark size="lg" />
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/70">
          {site.tagline}
        </p>
      </div>
    </section>
  );
}
