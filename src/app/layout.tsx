import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeremy Ansellino Gunawan - Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in Laravel, React, and Cloud Computing. Master's degree graduate with expertise in web development and system architecture.",
  keywords: [
    "Full Stack Developer",
    "Laravel",
    "React",
    "Next.js",
    "Cloud Computing",
    "Indonesia",
  ],
  authors: [{ name: "Jeremy Ansellino Gunawan" }],
  openGraph: {
    title: "Jeremy Ansellino Gunawan - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in Laravel, React, and Cloud Computing.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
