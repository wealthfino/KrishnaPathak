"use client";

import Script from "next/script";
import HeroSection from "../../components/HeroSection";
import StocksHeatmap from "../../components/StocksHeatmap";
import StockChart from "../../components/StockChart";
import PricingPage from "./Pricing/page";
import YoutubeSection from "../../components/YoutubeSection";
import MediaScroll from "../../components/MediaScroll";
import WhyChooseUs from "../../components/WhyChooseUs";
import AboutUs from "../../components/AboutUs";
import FeatureSection from "../../components/FeatureSection";
import ResourceFormPage from "./resources/page";

export default function HomePage() {
  return (
    <main className="relative min-h-screen font-sans">
      <HeroSection />
      <MediaScroll />
      <StockChart />
      <WhyChooseUs />
      <FeatureSection />
      <StocksHeatmap />    

      <YoutubeSection />
      <PricingPage />
      <AboutUs />
      <ResourceFormPage />
    </main>
  );
}
