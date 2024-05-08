
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { Header, Footer } from "./_components";
import { CartProvider } from "./_context/CartContext";
import React from "react";


const inter = Roboto({ subsets: ["latin"],weight: '700' });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "A simple e-commerce website",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider>
      <CartProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
            <Footer /> 
          </body>
        </html>
      </CartProvider>
    </ClerkProvider>
  );
}
