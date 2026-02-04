import type { Metadata } from "next";
import { Karla, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin']
})

const karla = Karla({
  variable: "--font-karla",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Challenge 8",
  description: "Tenzies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} ${inter.variable} antialiased flex justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
