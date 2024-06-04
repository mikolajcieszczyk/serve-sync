import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";

const inter = PT_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ServeSync - Tennis Courts Management Application",
  description:
    "Manage tennis court reservations, tournament scheduling, and real-time court status tracking with ServeSync.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
