import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Kihuyu — Product Engineer",
  description:
    "Product Engineer building AI-native systems that work because they're designed around the humans inside them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}