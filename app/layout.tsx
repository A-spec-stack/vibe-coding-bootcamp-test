import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400"],
  style: ["normal", "italic"],
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Vibe Coding Bootcamp",
  description: "Deployment & Hosting: Vom Laptop zur Live-App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${lato.variable}`}>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
