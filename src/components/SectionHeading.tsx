import Link from "next/link";

type Accent = "warm" | "cool" | "lime" | "sun" | "pink" | "violet";

const accentText: Record<Accent, string> = {
  warm: "text-warm",
  cool: "text-cool",
  lime: "text-lime",
  sun: "text-sun",
  pink: "text-pink",
  violet: "text-violet",
};

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  blot?: boolean;
  accent?: Accent;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  blot = false,
  accent = "cool",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${accentText[accent]}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`bleed-title ${blot ? "blot-text" : "text-paper"} max-w-[12ch]`}
      >
        {title}
      </h2>
    </div>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="display inline-flex items-center gap-2 text-warm transition-colors hover:text-lime"
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
