import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Fallback for everyone not on an Apple device, who gets SF via -apple-system.
const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-inter",
  display: "swap",
});

// Applies a stored Light/Dark choice before paint so it never flashes the
// wrong palette. The key matches AppearanceSwitcher.tsx.
const appearanceScript = `try{var a=localStorage.getItem('appearance');if(a==='light'||a==='dark')document.documentElement.dataset.theme=a}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://michael-kihuyu.vercel.app"),
  title: {
    default: "Michael Kihuyu · Product Engineer",
    template: "%s · Michael Kihuyu",
  },
  description:
    "Product Engineer building AI-native systems that work because they're designed around the humans inside them.",
  openGraph: {
    type: "website",
    siteName: "Michael Kihuyu",
    images: ["/michael-about.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F5F7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: appearanceScript }} />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
