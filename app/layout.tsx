import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-100 text-gray-700">{children}</body>
    </html>
  );
}
