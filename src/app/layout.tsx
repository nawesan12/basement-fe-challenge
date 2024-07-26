import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./animations.css";
import LenisController from "@/components/lenis";

const grotesque = localFont({
  src: [
    {
      path: "./fonts/BasementGrotesque-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/BasementGrotesque-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/BasementGrotesque-Black.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Supply | Basement Studio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={grotesque.className}>
        <LenisController>{children}</LenisController>
      </body>
    </html>
  );
}
