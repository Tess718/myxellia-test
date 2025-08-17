import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

import localFont from "next/font/local";

const myFont = localFont({
  src: "./fonts/Euclid Circular B Regular.ttf",
  display: "swap",
  variable: "--font-euclid",
});

export const metadata: Metadata = {
  title: "Myxellia Dashboard",
  description: "Myxellia frontend developer test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
