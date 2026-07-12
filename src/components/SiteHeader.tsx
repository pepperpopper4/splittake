"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandMark, ColorWords } from "@/components/ColorWords";
import { navLinks, site } from "@/data/site";

const navColors = ["text-warm", "text-cool", "text-violet", "text-pink", "text-lime"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header border-b border-paper/10 bg-surface-dark/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group relative" onClick={() => setOpen(false)}>
          <BrandMark size="sm" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-[0.14em] transition-opacity ${
                navColors[i % navColors.length]
              } opacity-80 hover:opacity-100`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-tight text-warm transition-colors hover:text-cool"
          >
            {site.social.instagramHandle}
          </a>
        </nav>

        <button
          type="button"
          className="display text-sm uppercase tracking-wider text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-paper/10 bg-surface-dark px-5 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display text-4xl"
                >
                  <ColorWords text={link.label} byLetter />
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-warm"
              >
                {site.social.instagramHandle}
              </a>
            </li>
            <li className="text-sm text-cool">{site.email}</li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
