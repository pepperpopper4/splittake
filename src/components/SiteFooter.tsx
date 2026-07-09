import Link from "next/link";
import { navLinks, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-paper/10">
      <div className="grind-panel">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
          <div>
            <p className="blot-text display text-5xl md:text-6xl">Split Take</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-paper/80 transition-colors hover:text-warm"
                  >
                    {link.label}
                  </Link>
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
                  className="text-paper/80 transition-colors hover:text-warm"
                >
                  Instagram
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
        <p>© {new Date().getFullYear()} {site.name}</p>
        <a href="#top" className="transition-colors hover:text-warm">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
