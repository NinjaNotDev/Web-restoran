import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taketama Coffee & Roastery (タケタマ) - Japanese Cafe in Sidoarjo",
  description: "Welcome to Tokyo — Cabang Sidoarjo! Japanese-themed cafe with torii gates, authentic Japanese food, premium coffee, and Instagrammable spots. Halal ramen, cozy ambiance.",
  keywords: ["Taketama", "Japanese Cafe", "Sidoarjo", "Coffee Shop", "Ramen", "Japanese Food", "Instagrammable Cafe", "Halal Ramen", "Torii Gate"],
  authors: [{ name: "Taketama Coffee" }],
  openGraph: {
    title: "Taketama Coffee & Roastery (タケタマ)",
    description: "Welcome to Tokyo — Cabang Sidoarjo! Japanese-themed cafe experience in Indonesia.",
    url: "https://taketama.coffee",
    siteName: "Taketama Coffee",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taketama Coffee & Roastery (タケタマ)",
    description: "Welcome to Tokyo — Cabang Sidoarjo! Japanese-themed cafe experience.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
