import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Leovido - Senior Software Engineer",
  description:
    "Portfolio of Christian Leovido, a senior software engineer with 8+ years of experience in full-stack development, blockchain technology, and scalable cloud architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
