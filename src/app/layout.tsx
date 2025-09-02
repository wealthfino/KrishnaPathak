import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../../components/theme-provider";
import Navbar from "../../components/Navbar";
import TradingViewTicker from "../../components/Trading_Widgets/TradingViewWidget";
import Footer from "../../components/Footer";
import { LoadingProvider } from "./context/LoadingContext";
import Loader from "../../components/Loader";
import CalculatorMenuButton from "../../components/CalculatorsButton";
import WhatsAppButton from "../../components/WhatsAppButton";
import Script from "next/script"; // ✅ Import Script

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WealthFino",
  description:
    "Providing stock market analysis, research-based recommendations and model portfolios.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google AdSense script inside <head> */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5492599411813635"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <Loader />
            <CalculatorMenuButton />
            <WhatsAppButton />
            <div className="fixed w-full top-0 z-100">
              <TradingViewTicker />
            </div>
            <Navbar />
            {children}
            <Footer />
          </LoadingProvider>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
