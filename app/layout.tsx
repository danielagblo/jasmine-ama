import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Jasmine Ama | Storyteller, Explorer, Entrepreneur",
  description: "A premium personal brand and platform by Jasmine Ama. Focusing on storytelling, relocation, and real estate in Ghana.",
  keywords: ["Jasmine Ama", "Ghana", "Storyteller", "Real Estate Ghana", "Relocation Ghana", "African Entrepreneur"],
};

import FloatingContact from "@/components/FloatingContact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
