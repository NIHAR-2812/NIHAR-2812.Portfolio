"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }) {
  // We remove the mounted check completely. 
  // NextThemesProvider handles the SSR to Client handoff safely 
  // because of the suppressHydrationWarning on your HTML tag.
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}