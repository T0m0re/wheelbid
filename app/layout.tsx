import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import localFont from 'next/font/local'
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ShneBreit = localFont({
  src: '../public/fonts/Shne Breit.woff',
  variable: '--font-shneBreit'
})

export const metadata: Metadata = {
  title: "WheelBid",
  description: "Bid for cars you love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${ShneBreit.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
