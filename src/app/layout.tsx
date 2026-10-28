import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAISON BELLE | Women's Beauty & Wellness Studio",
  description:
    "Quiet luxury for every kind of beauty. A bespoke sanctuary exclusively for women featuring tailored hair styling, skin wellness rituals, and editorial beauty care.",
  keywords: [
    "luxury beauty salon",
    "women beauty parlour",
    "boutique salon",
    "hair styling",
    "skincare facials",
    "bridal beauty",
    "quiet luxury",
  ],
  authors: [{ name: "Maison Belle" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-ivory text-charcoal font-sans antialiased selection:bg-blush selection:text-charcoal">
        {children}
      </body>
    </html>
  );
}
