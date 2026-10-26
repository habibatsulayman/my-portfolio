import type { Metadata, Viewport } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/page";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  title: "Habeebah Sulayman — Mobile Software Engineer",
  description:
    "Mobile software engineer specialising in Kotlin Multiplatform, Jetpack Compose, and cross-platform Android & iOS development.",
  icons: {
    icon: "/favicon.svg",
  },
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
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try { const m = document.querySelector('meta[name="color-scheme"]'); if (m) m.content = localStorage.getItem("color-scheme") ?? "light dark"; } catch (e) {}`,
          }}
        />
      </head>
      <body
        id="top"
        className={`${poppins.variable} ${plusJakartaSans.variable} antialiased`}
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
