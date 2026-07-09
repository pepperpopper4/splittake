import Link from "next/link";
import type { Service } from "@/data/services";

const accentBorder: Record<Service["accent"], string> = {
  warm: "border-warm",
  cool: "border-cool",
  lime: "border-lime",
  pink: "border-pink",
};

const accentText: Record<Service["accent"], string> = {
  warm: "text-warm",
  cool: "text-cool",
  lime: "text-lime",
  pink: "text-pink",
};

export function ServiceBlock({ service }: { service: Service }) {
  return (
    <article
      className={`grind-panel border-l-4 p-6 md:p-8 ${accentBorder[service.accent]}`}
    >
      <div className="relative z-10">
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.16em] ${accentText[service.accent]}`}
        >
          Service
        </p>
        <h3 className="display mb-4 text-3xl text-paper md:text-4xl">
          {service.title}
        </h3>
        <p className="mb-6 max-w-xl text-paper/75 leading-relaxed">
          {service.description}
        </p>

        <dl className="mb-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-cool">
              Ideal client
            </dt>
            <dd className="mt-1 text-sm text-paper/80">{service.idealClient}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-cool">
              Turnaround
            </dt>
            <dd className="mt-1 text-sm text-paper/80">{service.turnaround}</dd>
          </div>
        </dl>

        <ul className="mb-8 space-y-2">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-paper/80">
              <span className={`${accentText[service.accent]}`} aria-hidden>
                ▣
              </span>
              {item}
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn-primary">
          Request a custom quote
        </Link>
      </div>
    </article>
  );
}
