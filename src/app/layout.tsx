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
    "Providing stock market analysis, research-based recommendations and model portfolios.",
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
