import { Zen_Dots, Poppins } from "next/font/google";

export const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "block",
  variable: "--font-zen",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  style: "normal",
  display: "block",
  variable: "--font-poppins",
});
