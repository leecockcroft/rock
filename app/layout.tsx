import type { Metadata } from "next";
import "./globals.css";

import { Geist, Geist_Mono, Comfortaa, Barlow } from "next/font/google";

// Comfortaa
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-comfortaa",
});

// Barlow
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

// Geist Sans
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// Geist Mono
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Rock Recruiters",
  description:
    "Rock Recruiters connects top talent with forward‑thinking companies, delivering fast, reliable and people‑focused recruitment solutions across multiple industries. We help businesses hire smarter and candidates find roles where they can thrive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${comfortaa.variable}
          ${barlow.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
