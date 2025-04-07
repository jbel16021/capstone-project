"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "../globals.css";
import { usePathname } from "next/navigation"; // Import usePathname to get the current route
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current route

  // Hide the Header for the /dashboard route
  const hideHeader = pathname === "/dashboard";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wvi1wpy.css" />
        <script async src="//www.instagram.com/embed.js"></script>
      </head>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="dark"
        >
          {!hideHeader && <Header />} {/* Render Header only if not on /dashboard */}
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
