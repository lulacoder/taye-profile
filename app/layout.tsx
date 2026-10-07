import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

// Free stand-in for Neue Haas Grotesk / Neue Montreal. globals.css lists the licensed fonts first.
const grotesk = Inter_Tight({ variable: "--font-grotesk", subsets: ["latin"], display: "swap" });

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

// Runs before first paint so the saved or system theme applies without a flash.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}document.documentElement.classList.add('js')})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={grotesk.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
