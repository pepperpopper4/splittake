import Link from "next/link";
import { BrandMark } from "@/components/ColorWords";
import { navLinks, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-ink/10">
      <div className="panel mx-auto max-w-7xl rounded-none border-x-0 border-b-0">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
          <div>
            <Link href="/" className="inline-block">
              <BrandMark size="lg" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
              {site.tagline}
            </p>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-warm transition-colors hover:text-cool"
            >
              Instagram {site.social.instagramHandle}
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cool">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-paper/80 transition-colors hover:text-warm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-pink">
              Connect
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-paper/80 transition-colors hover:text-warm"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-warm transition-colors hover:text-cool"
                >
                  {site.social.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={site.social.vimeo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/80 transition-colors hover:text-warm"
                >
                  Vimeo
                </a>
              </li>
              <li>
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/80 transition-colors hover:text-warm"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-xs text-muted md:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#top" className="text-ink/60 transition-colors hover:text-warm">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
