import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import "./globals.css";

const editorial = Bodoni_Moda({ variable: "--font-editorial", subsets: ["latin"], display: "swap", weight: "400" });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });

const title = "Taye Bezabih Fino | Attorney and legal consultant in Addis Ababa";
const description = "Learn about Taye Bezabih Fino, an Ethiopian attorney and former senior federal public prosecutor, and contact his Addis Ababa practice.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Taye Bezabih Fino" }],
  openGraph: { title, description, type: "website", locale: "en_US", siteName: "Taye Bezabih Fino" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${editorial.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
