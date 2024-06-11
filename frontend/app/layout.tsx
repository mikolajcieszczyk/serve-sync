import type { Metadata } from "next";
import "./globals.css";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  variable: "--main-font",
  weight: ["400", "500"],
  subsets: ["latin"],
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
    <html lang="en" className="h-screen w-screen bg-body-bg text-base">
      <body className={publicSans.className}>{children}</body>
    </html>
  );
}
