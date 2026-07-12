import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              Contact
            </p>
            <h2 className="display mt-2 text-3xl text-ink md:text-5xl">
              Start a project
            </h2>
            <p className="mt-6 max-w-md text-ink/70 leading-relaxed">
              Tell us what you&apos;re making. We&apos;ll reply with next steps
              and a custom quote.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cool">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block text-lg text-warm transition-colors hover:text-cool"
                >
                  {site.email}
                </a>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cool">
                  Instagram
                </p>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="display text-2xl text-warm transition-colors hover:text-cool"
                >
                  {site.social.instagramHandle}
                </a>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cool">
                  More
                </p>
                <ul className="flex flex-wrap gap-4">
                  <li>
                    <a
                      href={site.social.vimeo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink/70 hover:text-warm"
                    >
                      Vimeo
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink/70 hover:text-warm"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="panel p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
