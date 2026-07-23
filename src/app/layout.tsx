"use client";

import { useState, useEffect } from "react";
import SplashScreen from "@/components/ui/SplashScreen";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {loading ? (
            <SplashScreen onComplete={() => setLoading(false)} />
          ) : (
            children
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}