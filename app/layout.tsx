import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mbuyiselo Thiya | Software Developer",
  description:
    "Portfolio of Mbuyiselo (Bob) Thiya, a junior software developer specialising in Java, backend development, cloud and blockchain technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}