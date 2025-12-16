import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import JsonLd from "@/components/json-ld";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://shah-jamal.vercel.app"
  ),
  title: "Md. Shah Jamal Basar | Business Portfolio",
  description:
    "Official Business Portfolio of Md. Shah Jamal Basar - Entrepreneur & Philanthropist. Leading Shah Jamal Basar Trust and various successful ventures.",
  keywords: [
    "Md. Shah Jamal Basar",
    "Shah Jamal Basar",
    "Business Portfolio",

    "Entrepreneur",
    "Philanthropist",
    "Bangladesh Business",
    "Shah Jamal Basar Trust",
  ],
  authors: [{ name: "Md. Shah Jamal Basar" }],
  creator: "Md. Shah Jamal Basar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shah-jamal.vercel.app",
    title: "Md. Shah Jamal Basar | Business Portfolio",
    description:
      "Entrepreneur & Philanthropist. Official Business Portfolio of Md. Shah Jamal Basar -  Leading Shah Jamal Basar Trust and various successful ventures.",
    siteName: "Md. Shah Jamal Basar",
    images: [
      {
        url: "/profileImage.png", // Using profile image as OG image for now
        width: 1200,
        height: 630,
        alt: "Md. Shah Jamal Basar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Shah Jamal Basar | Business Portfolio",
    description:
      "Official Business Portfolio of Md. Shah Jamal Basar -  Entrepreneur & Philanthropist.",
    images: ["/profileImage.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.png",
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <Providers>
          {children}
          <Toaster richColors position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
