import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QuotePopupWrapperSimple from "@/app/Components/QuotePopupWrapperSimple";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bright Edge Interiors - Premium Interior Design Services",
  description: "Transform your space with our expert interior design services. Get your free quote today and bring your vision to life with thoughtful design and timeless elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <QuotePopupWrapperSimple />
      </body>
    </html>
  );
}
