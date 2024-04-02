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
  openGraph: {
    title: "ranga.co.zw",
    description: "Ranga",
    url: "https://ranga.co.zw",
    siteName: "ranga.co.zw",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const calSans = LocalFont({
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
