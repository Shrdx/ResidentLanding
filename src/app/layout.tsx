import type { Metadata } from "next";
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
      <body>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
