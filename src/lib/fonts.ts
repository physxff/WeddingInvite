import { Geist, Caveat } from "next/font/google";
import localFont from "next/font/local";

export const geist = Geist({
  subsets: ["latin"],
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
});

export const hand = localFont({
  src: "../lib/GreatVibes-Regular.ttf",
  variable: "--font-great-vibes",
});