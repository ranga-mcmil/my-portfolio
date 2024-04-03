import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LocalFont from "next/font/local";


export const metadata: Metadata = {
  title: {
    default: "Ranga",
    template: "%s | Ranga",
  },
  description: "Full-stack developer",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.className].join(" ")}>
      <head>
        {/* <Analytics /> */}
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
