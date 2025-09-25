import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import Aside from "./components/Aside";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MiMovie",
  description: "the best movie site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins text-white">
        <Aside />
        {children}
      </body>
    </html>
  );
}
