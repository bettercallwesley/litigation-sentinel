"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type ThemeMode = "fortune500" | "insurance";

interface ThemeContextValue {
  theme: ThemeMode;
  toggleTheme: () => void;
  isWin95: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "fortune500",
  toggleTheme: () => {},
  isWin95: false,
});

export function useTheme() {
  return useContext(ThemeContext);
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>("fortune500");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "fortune500" ? "insurance" : "fortune500"));
  }, []);

  const isWin95 = theme === "insurance";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isWin95 }}>
      {children}
    </ThemeContext.Provider>
  );
}
