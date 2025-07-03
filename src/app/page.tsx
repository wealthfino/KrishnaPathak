"use client";

import HeroSection from "../../components/HeroSection";
import StocksHeatmap from "../../components/StocksHeatmap";
import StockChart from "../../components/StockChart";
import PricingPage from "./Pricing/page";
import YoutubeSection from "../../components/YoutubeSection";
import MediaScroll from "../../components/MediaScroll";
import WhyChooseUs from "../../components/WhyChooseUs";
import AboutUs from "../../components/AboutUs";
import Reviews from "../../components/Reviews";
import FeatureSection from "../../components/FeatureSection";
import ResourceFormPage from "./resources/page";

export default function HomePage() {
  return (
    <main className="relative min-h-screen font-sans">
      <HeroSection />
      <MediaScroll />
      <FeatureSection />
      <WhyChooseUs />
      <StocksHeatmap />
      <StockChart />
      <Reviews />
      <YoutubeSection />
      <PricingPage />
      <AboutUs />
      <ResourceFormPage />
    </main>
  );
}
