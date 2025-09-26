import { poppins, zenDots } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";

import Aside from "./components/Aside";

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
      <body 
        className={`bg-[#090909] ${zenDots.variable} ${poppins.variable}  font-poppins text-white`}
      >
        <Aside />
        {children}
      </body>
    </html>
  );
}
