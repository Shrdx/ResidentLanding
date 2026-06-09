import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Horizon Grove | Residential",
  description: "Welcome to Horizon Grove. A unique space where modern design meets unparalleled convenience.",
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
      </body>
    </html>
  );
}
