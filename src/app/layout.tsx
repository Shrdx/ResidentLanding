import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import WhatsAppWidget from '@/components/WhatsAppWidget';

export const metadata: Metadata = {
  title: "The Amaryllis | Premium Residential New Delhi",
  description: "Welcome to The Amaryllis. A unique space where modern design meets unparalleled convenience, offering a lifestyle beyond expectations in Central Delhi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11002663060"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11002663060');
          `}
        </Script>
      </head>
      <body>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
