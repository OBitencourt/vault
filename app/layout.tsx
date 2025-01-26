import type { Metadata } from "next";
import { KoHo, Krub } from "next/font/google";
import "./globals.css";



const koho = KoHo({
  variable: "--font-koho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Adicione os pesos desejados
});

const krub = Krub({
  variable: "--font-krub",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Adicione os pesos desejados
});

export const metadata: Metadata = {
  title: "Vault",
  description: "Finance Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${koho.variable} ${krub.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
