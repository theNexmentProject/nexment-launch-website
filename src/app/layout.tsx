import type { Metadata } from "next";
import { IBM_Plex_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nexment — The Nexment Project",
  description:
    "The official launch website of The Nexment Project. Launching November 11, 2026 with the Nexment CLI.",
  keywords: [
    "Nexment",
    "Nexment CLI",
    "The Nexment Project",
    "developer tools",
    "CLI",
  ],
  authors: [{ name: "The Nexment Project" }],
  creator: "The Nexment Project",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSerif.variable}`}>
      <head>
        <link rel="preload" href="/hero-bg.webp" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
}