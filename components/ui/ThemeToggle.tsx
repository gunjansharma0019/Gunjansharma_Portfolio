"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const OPTIONS = [
  { value: "light" as const, icon: Sun, label: "Light theme" },
  { value: "dark" as const, icon: Moon, label: "Dark theme" },
  { value: "system" as const, icon: Monitor, label: "Match system theme" },
];

export function ThemeToggle() {
  const { preference, setPreference } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="flex items-center gap-0.5 rounded-full border border-border-light dark:border-border bg-card-light dark:bg-card p-1"
    >
      {OPTIONS.map(({ value, icon: Icon, label }) => {
        const active = preference === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setPreference(value)}
            className={`relative flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
              active
                ? "bg-signal-cyan/15 text-signal-cyan"
                : "text-muted-light dark:text-muted hover:text-ink-light dark:hover:text-ink"
            }`}
          >
            <Icon size={14} strokeWidth={2} />
          </button>
        );
      })}
    </div>
  );
}
