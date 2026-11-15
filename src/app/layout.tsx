import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper"; // We will create this next

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Nihar Padave | Portfolio", // Update if needed
  description: "Full-Stack Developer and UI/UX Architect", // Update if needed
  verification: {
    google: "3i7Q7IGRaK60BGVxryj9NCoJ4C_1joFgvTxouY8Dz2k",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}