import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationTop from "@/components/Navbar/Navbar";
import BottomBar from "@/components/BottomBar/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A73 Studio",
  description: "A73 Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><NavigationTop />{children}<BottomBar /></body>
    </html>
  );
}
