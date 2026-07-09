"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

const projectTypes = [
  "Brand / commercial film",
  "Social / short-form",
  "Editing & post",
  "Not sure yet",
];

const budgetRanges = [
  "Prefer not to say",
  "Under $2k",
  "$2k – $5k",
  "$5k – $15k",
  "$15k+",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    try {
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Form submission failed");
      } else {
        // Dev / placeholder mode — still validates UX without a backend
        await new Promise((r) => setTimeout(r, 700));
        console.info("Contact form (no FORMSPREE_ID set):", payload);
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Email us directly instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="grind-panel p-8 md:p-10">
        <div className="relative z-10">
          <p className="blot-text display text-4xl md:text-5xl">Got it.</p>
          <p className="mt-4 max-w-md text-paper/75">
            Thanks for reaching out — we&apos;ll get back within a couple of
            business days. Or ping us at{" "}
            <a href={`mailto:${site.email}`} className="text-warm underline">
              {site.email}
            </a>
            .
          </p>
          <button
            type="button"
            className="btn-ghost mt-8"
            onClick={() => setStatus("idle")}
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="input-field"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input-field"
            placeholder="you@brand.com"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="label" htmlFor="projectType">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className="input-field"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="budget">
            Budget range (optional)
          </label>
          <select
            id="budget"
            name="budget"
            className="input-field"
            defaultValue={budgetRanges[0]}
          >
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="label" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input-field resize-y"
          placeholder="What are you making? Timeline? Any references?"
        />
      </div>

      {error ? <p className="text-sm text-pink">{error}</p> : null}

      <button
        type="submit"
        className="btn-primary"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Start a project"}
      </button>

      {!process.env.NEXT_PUBLIC_FORMSPREE_ID ? (
        <p className="text-xs text-muted">
          Form runs in demo mode until{" "}
          <code className="text-cool">NEXT_PUBLIC_FORMSPREE_ID</code> is set.
        </p>
      ) : null}
    </form>
  );
}
