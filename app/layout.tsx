import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import AOSInit from "./components/AOSInit";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MochiLinux",
  description: "Smooth, Small and Sweet Rolling Linux Distribution with a Custom Filesystem Hierarchy",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <AOSInit />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
