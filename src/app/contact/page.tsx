import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Split Take Media — custom quotes for commercial, social, and post.",
};

export default function ContactPage() {
  return (
    <section className="band-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Start a project"
              accent="pink"
              blot
            />
            <p className="mb-8 max-w-md -mt-6 text-paper/70">
              Tell us what you&apos;re making. We&apos;ll reply with next steps
              and a custom quote.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cool">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block text-lg text-warm transition-colors hover:text-lime"
                >
                  {site.email}
                </a>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cool">
                  Social
                </p>
                <ul className="flex flex-wrap gap-4">
                  <li>
                    <a
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper/80 hover:text-warm"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.social.vimeo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper/80 hover:text-warm"
                    >
                      Vimeo
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper/80 hover:text-warm"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grind-panel p-6 md:p-8">
            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
