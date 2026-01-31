import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

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
        className={`${karla.variable} antialiased flex justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
