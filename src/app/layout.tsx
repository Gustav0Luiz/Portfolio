import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'; 

const inter = Inter({ subsets: ["latin"] });
const azonix = localFont({
  src: '../fonts/Azonix.otf',
})

export const metadata: Metadata = {
  title: "Portfolio | Gustavo Luiz",
  description: "Gustavo Luiz - Portfolio",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="scroll-smooth scrollbar-thin lg:scroll-p-12 ">
      <body className={''}>{children}</body>
    </html>
  );
}
