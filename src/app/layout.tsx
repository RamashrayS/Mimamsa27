import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { FloatingSidebar } from "@/components/home/FloatingSidebar";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MIMAMSA 2027 — IISER Pune",
  description:
    "India's national student science competition. Where curious minds gather.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <FloatingSidebar />
        {children}
      </body>
    </html>
  );
}
