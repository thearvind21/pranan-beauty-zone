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
  title: "Pranan Beauty Zone | Women's Beauty Parlour",
  description:
    "Your Beauty, Your Moment. Discover a welcoming women's beauty parlour offering expert facials, grooming, waxing, hair spas, and mehendi in a relaxing atmosphere.",
  keywords: [
    "Pranan Beauty Zone",
    "women beauty parlour",
    "facials",
    "hydra facial",
    "bridal facial",
    "hair spa",
    "eyebrow shaping",
    "waxing",
    "mehendi",
    "pedicure manicure",
  ],
  authors: [{ name: "Pranan Beauty Zone" }],
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
