const WORD_COLORS = [
  "text-warm",
  "text-cool",
  "text-lime",
  "text-sun",
  "text-pink",
  "text-violet",
] as const;

type ColorWordsProps = {
  text: string;
  className?: string;
  /** Color each letter instead of each word (good for short titles / numbers). */
  byLetter?: boolean;
  as?: "span" | "h1" | "h2" | "h3" | "p";
};

/**
 * Renders text with one solid accent color per word (or per letter).
 * Cycles through the grind palette — more color, no Apple rainbow stripes.
 */
export function ColorWords({
  text,
  className = "",
  byLetter = false,
  as: Tag = "span",
}: ColorWordsProps) {
  // Single-word titles get letter colors so they still feel colorful
  const useLetters =
    byLetter || (!text.includes(" ") && !text.includes("\n") && text.length > 1);

  const parts = useLetters ? Array.from(text) : text.split(/(\s+)/);

  let colorIndex = 0;

  return (
    <Tag className={className}>
      {parts.map((part, i) => {
        if (part === "\n") {
          return <br key={`br-${i}`} />;
        }
        if (!useLetters && /^\s+$/.test(part)) {
          return <span key={`ws-${i}`}>{part}</span>;
        }
        if (useLetters && part === " ") {
          return <span key={`sp-${i}`}>{"\u00A0"}</span>;
        }
        if (!part.trim()) {
          return <span key={`empty-${i}`}>{part}</span>;
        }
        const color = WORD_COLORS[colorIndex % WORD_COLORS.length];
        colorIndex += 1;
        return (
          <span key={`${part}-${i}`} className={color}>
            {part}
          </span>
        );
      })}
    </Tag>
  );
}

/**
 * Locked Split Take Media wordmark — same mark across every design option.
 * Colors are hard-coded so theme CSS variables cannot recolor the logo.
 */
export function BrandMark({
  size = "sm",
  className = "",
}: {
  size?: "sm" | "lg";
  className?: string;
}) {
  const titleClass =
    size === "lg"
      ? "display text-5xl tracking-tight md:text-6xl"
      : "display text-xl tracking-tight md:text-2xl";
  const mediaClass =
    size === "lg"
      ? "ml-2 text-sm uppercase tracking-[0.2em] md:text-base"
      : "ml-1 text-[10px] uppercase tracking-[0.2em]";

  return (
    <span className={`brand-mark inline-flex items-baseline ${className}`}>
      <span className={titleClass}>
        <span className="brand-split">Split</span>
        <span className="brand-take">Take</span>
        <span className="brand-period" aria-hidden>
          .
        </span>
      </span>
      <span className={`brand-media ${mediaClass}`}>Media</span>
    </span>
  );
}
