import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://najwa-portfolio.vercel.app"),

  title: {
    default: "Najwa Azizi | Portfolio",
    template: "%s | Najwa Azizi",
  },

  description:
    "Portfolio of Najwa Azizi — Informatics Engineering Student and Aspiring Software Engineer specializing in Web Development, Artificial Intelligence, Networking, and UI/UX.",

  keywords: [
    "Najwa Azizi",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "Artificial Intelligence",
    "Web Development",
    "Networking",
    "UI UX",
  ],

  authors: [
    {
      name: "Najwa Azizi",
    },
  ],

  creator: "Najwa Azizi",

  openGraph: {
    title: "Najwa Azizi Portfolio",
    description:
      "Engineering software that solves real-world problems.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Najwa Azizi",
    description:
      "Engineering software that solves real-world problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}