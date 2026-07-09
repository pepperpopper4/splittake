import type { Metadata } from "next";
import Link from "next/link";
import { ColorWords } from "@/components/ColorWords";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceBlock } from "@/components/ServiceBlock";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand films, social content, and post-production — custom quotes, no public price list.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="band-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Services"
            title="What we make"
            accent="lime"
            blot
          />
          <p className="mb-12 max-w-xl -mt-6 text-paper/70">
            No public packages — every project gets a custom quote based on
            scope, timeline, and deliverables.
          </p>
          <div className="grid gap-6">
            {services.map((service) => (
              <ServiceBlock key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <TestimonialCarousel items={testimonials} />
      </section>

      <section className="band-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grind-panel p-8 md:p-12">
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <ColorWords
                  as="h2"
                  text={"Request a\ncustom quote"}
                  className="display blot-text text-4xl md:text-6xl"
                />
                <p className="mt-4 max-w-md text-paper/70">
                  Tell us the brief. We&apos;ll come back with a clear scope and
                  number — no mystery fees.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
