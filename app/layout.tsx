import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin", "cyrillic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat-var",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "отделка16.рф — внутренняя отделка помещений",
  description: "Премиальная отделка под ключ с фиксированной сметой",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-base leading-relaxed text-muted">
        {children}
      </body>
    </html>
  );
}
