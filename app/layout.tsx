import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import "./globals.css";

const editorial = Bodoni_Moda({ variable: "--font-editorial", subsets: ["latin"], display: "swap", weight: "400" });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });

const title = "Taye Bezabih Fino | Attorney & Legal Consultant in Addis Ababa";
const description = "Taye Bezabih Fino is an Ethiopian attorney and former Senior Federal Public Prosecutor with more than 28 years of legal-sector experience across prosecution, courtroom advocacy, legal advisory work, and institutional training.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Taye Bezabih Fino" }],
  robots: { index: true, follow: true },
  openGraph: { title, description, type: "website", locale: "en_US", siteName: "Taye Bezabih Fino" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={`${editorial.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
