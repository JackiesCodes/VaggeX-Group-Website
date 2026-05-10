import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaggex Group - Building Africa's Future",
  description:
    "Vaggex Group - Leading construction, infrastructure, and civil engineering company in Botswana. Building Africa's future with world-class solutions.",
  keywords:
    "construction Botswana, infrastructure development, civil engineering, building construction",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-700`}>
        {children}
      </body>
    </html>
  );
}
