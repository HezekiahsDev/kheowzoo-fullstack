import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource/inter"; // Inter font
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Load any additional local fonts (if needed)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kheowzoo",
  description: "Welcome to Kheowzoo - Discover Wildlife and Nature",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-inter overflow-x-hidden`}
      >
        <Header />
        <main className="mx-auto max-w-screen-lg ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
