import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/page";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Habeebah Sulayman — Mobile Software Engineer",
  description:
    "Mobile software engineer specialising in Kotlin Multiplatform, Jetpack Compose, and cross-platform Android & iOS development.",
  openGraph: {
    title: "Habeebah Sulayman — Mobile Software Engineer",
    description:
      "Mobile software engineer specialising in Kotlin Multiplatform, Jetpack Compose, and cross-platform Android & iOS development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-darkreader-ignore>
      <head>
        {/* Tell Dark Reader this page is already dark — prevents it injecting
            data-darkreader-* attributes that cause React hydration mismatches */}
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        id="top"
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {/* Spacer to prevent fixed navbar from overlapping content */}
        <div className="h-16" aria-hidden />
        {children}
      </body>
    </html>
  );
}
