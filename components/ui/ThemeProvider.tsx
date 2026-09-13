"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ThemePreference = "dark" | "light" | "system";
type ResolvedTheme = "dark" | "light";

interface ThemeContextValue {
  preference: ThemePreference;
  resolved: ResolvedTheme;
  setPreference: (preference: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "portfolio-theme";

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyThemeClass(theme: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>("dark");
  const [resolved, setResolved] = useState<ResolvedTheme>("dark");

  // Read persisted preference on mount (default stays "dark" until then).
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as
      | ThemePreference
      | null;
    const initial = stored ?? "dark";
    setPreferenceState(initial);
    const next = initial === "system" ? getSystemTheme() : initial;
    setResolved(next);
    applyThemeClass(next);
  }, []);

  // Track OS-level changes while preference is "system".
  useEffect(() => {
    if (preference !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const next = getSystemTheme();
      setResolved(next);
      applyThemeClass(next);
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [preference]);

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    const resolvedNext = next === "system" ? getSystemTheme() : next;
    setResolved(resolvedNext);
    applyThemeClass(resolvedNext);
  }, []);

  const value = useMemo(
    () => ({ preference, resolved, setPreference }),
    [preference, resolved, setPreference]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
