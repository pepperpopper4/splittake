"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type DesignOptionId = "1" | "2" | "3";

export const DESIGN_OPTIONS = [
  {
    id: "1" as const,
    label: "Option 1",
    name: "Grind",
    blurb: "Speckled bands, rainbow accents",
  },
  {
    id: "2" as const,
    label: "Option 2",
    name: "Cinema",
    blurb: "Dark reel, amber type",
  },
  {
    id: "3" as const,
    label: "Option 3",
    name: "Studio",
    blurb: "Bright cut, bold geometry",
  },
] as const;

const STORAGE_KEY = "splittake-design-option";

type DesignOptionContextValue = {
  option: DesignOptionId;
  setOption: (id: DesignOptionId) => void;
};

const DesignOptionContext = createContext<DesignOptionContextValue | null>(
  null,
);

function isDesignOptionId(value: string | null): value is DesignOptionId {
  return value === "1" || value === "2" || value === "3";
}

function applyDesign(option: DesignOptionId) {
  document.documentElement.setAttribute("data-design", option);
}

export function DesignOptionProvider({ children }: { children: ReactNode }) {
  const [option, setOptionState] = useState<DesignOptionId>("1");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const next = isDesignOptionId(stored) ? stored : "1";
    setOptionState(next);
    applyDesign(next);
  }, []);

  const setOption = useCallback((id: DesignOptionId) => {
    setOptionState(id);
    applyDesign(id);
    window.localStorage.setItem(STORAGE_KEY, id);
  }, []);

  return (
    <DesignOptionContext.Provider value={{ option, setOption }}>
      {children}
    </DesignOptionContext.Provider>
  );
}

export function useDesignOption() {
  const ctx = useContext(DesignOptionContext);
  if (!ctx) {
    throw new Error("useDesignOption must be used within DesignOptionProvider");
  }
  return ctx;
}

export function DesignSwitcher() {
  const { option, setOption } = useDesignOption();

  return (
    <div className="design-switcher border-b border-paper/15 bg-ink/95 text-paper backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/55">
          Design preview — pick a direction
        </p>
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Design options"
        >
          {DESIGN_OPTIONS.map((item) => {
            const active = option === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setOption(item.id)}
                className={`design-switcher-btn ${
                  active ? "is-active" : ""
                }`}
              >
                <span className="design-switcher-label">{item.label}</span>
                <span className="design-switcher-name">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
