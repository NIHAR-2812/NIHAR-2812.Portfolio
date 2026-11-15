"use client";

import { useState } from "react";
import SplashScreen from "@/components/ui/SplashScreen";
import { ThemeProvider } from "next-themes";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {loading ? (
        <SplashScreen onComplete={() => setLoading(false)} />
      ) : (
        children
      )}
    </ThemeProvider>
  );
}