import type { Metadata } from "next";
import "./globals.css";

import {Spline_Sans} from 'next/font/google'

const splinesans = Spline_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Gasto dos Senadores Brasileiros",
  description: "Visualizar gasto de Senadores Brasileiros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${splinesans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
