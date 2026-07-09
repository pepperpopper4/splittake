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

/** Header / footer wordmark: Split (paper) + Take (warm) + Media (cool). */
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
      ? "ml-2 text-sm uppercase tracking-[0.2em] text-cool md:text-base"
      : "ml-1 text-[10px] uppercase tracking-[0.2em] text-cool";

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className={titleClass}>
        <span className="text-paper">Split</span>
        <span className="text-warm">Take</span>
      </span>
      <span className={mediaClass}>Media</span>
    </span>
  );
}
