import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Taye Bezabih Fino Law Office | Attorney at Law | Addis Ababa",
  description:
    "Experienced Ethiopian attorney with over 23 years of legal expertise. Former Federal Prosecutor offering criminal defense, civil litigation, and legal advisory services in Addis Ababa.",
  keywords: [
    "Ethiopian lawyer",
    "Addis Ababa attorney",
    "criminal defense Ethiopia",
    "civil litigation",
    "legal advisor",
    "Taye Bezabih Fino",
    "law office Ethiopia",
  ],
  authors: [{ name: "Taye Bezabih Fino" }],
  openGraph: {
    title: "Taye Bezabih Fino Law Office | Attorney at Law",
    description:
      "23+ years of dedicated legal service in Ethiopia. Former Federal Prosecutor, now your trusted advocate.",
    type: "website",
    locale: "en_US",
    siteName: "Taye Bezabih Fino Law Office",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taye Bezabih Fino Law Office",
    description: "Experienced Ethiopian attorney with over 23 years of legal expertise.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
