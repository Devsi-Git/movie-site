import "./globals.css";
import type { Metadata } from "next";
import { poppins, zenDots } from "@/lib/fonts";

import Aside from "./components/SideBar";

export const metadata: Metadata = {
  title: "WAVEFLIX",
  description: "the best movie site ever",
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
