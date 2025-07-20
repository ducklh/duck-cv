import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lê Hồng Đức - Software Developer & Technical Team Lead",
  description: "Personal portfolio and resume website showcasing my skills, experience, and projects in software development, system optimization, and team leadership.",
  keywords: ["software developer", "technical team lead", "Java", "Spring Boot", "system optimization", "portfolio", "resume", "web development"],
  authors: [{ name: "Lê Hồng Đức" }],
  openGraph: {
    title: "Lê Hồng Đức - Software Developer & Technical Team Lead",
    description: "Personal portfolio and resume website showcasing my skills, experience, and projects in software development, system optimization, and team leadership.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
