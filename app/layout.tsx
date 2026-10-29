import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaggex Group | Construction, Civil Works & Infrastructure — Botswana",
  description:
    "Vaggex Group is a citizen-owned construction, civil works and infrastructure company in Botswana, led by directors with over 30 years of field experience on major water, civil and building projects.",
  keywords:
    "construction Botswana, civil works, infrastructure, building construction, rehabilitation, maintenance, project management, Gaborone",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Vaggex Group",
    description:
      "Citizen-owned construction, civil works and infrastructure solutions in Botswana.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body className="bg-concrete font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
