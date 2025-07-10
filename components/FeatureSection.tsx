"use client";

import React from "react";
import { motion } from "framer-motion";
import { TracingBeam } from "./ui/tracing-beam";
import { FeatureCard } from "./FeatureCard";
import { InfiniteMovingFeatureCards } from "./ui/moving-feature-cards";
import { FeatureCardVariant } from "./FeatureCardVariant";


const FeatureSection = () => {
  return (
    <div className="bg-[#18181b] pt-20">
      <TracingBeam>
        <motion.div
          className="text-center px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <div className="relative inline-flex justify-center items-center rounded-lg overflow-hidden mb-12">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-[length:200%_auto] animate-gradient rounded-lg" />
            {/* Content with solid background (adjust color as needed) */}
            <div className="relative z-10 bg-transparent px-4 lg:px-10 py-2 md:py-4 rounded-md">
              <h1 className="text-center text-neutral-800 text-[30px] md:text-5xl font-bold whitespace-nowrap">
                Our Features
              </h1>
            </div>
          </div>
          <p className="text-base font-medium md:text-xl md:whitespace-nowrap text-blue-50 max-w-2xl mx-auto mb-10">
            Learn and improve your trading knowledge with helpful tools and
            features.
          </p>
        </motion.div>

        <FeatureCard
          name="Real-time Market Insights"
          quote=""
          image="/assets/main-feature-1.png"
          points={[
            "Research-based Buy/Sell Recommendations",
            "Logical, Insight-Driven Analysis",
            "Timely Alerts with Rationale",
            "Alert on Model Portfolio",
          ]}
          imagePosition="right"
          ctaText="Join Now"
          flipWords={["Understanding", "Awareness", "Insights", "Knowledge"]}
        />
      </TracingBeam>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="text-center px-4"
      >
        <div className="relative inline-flex justify-center items-center rounded-lg overflow-hidden mt-10 mb-6">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-[length:200%_auto] animate-gradient rounded-lg" />
          {/* Content with solid background (adjust color as needed) */}
          <div className="relative z-10 bg-transparent px-4 lg:px-10 py-2 md:py-4 rounded-md">
            <h1 className="text-center text-neutral-800 text-[24px] md:text-4xl font-bold whitespace-nowrap">
              WealthFino Mobile App
            </h1>
          </div>
        </div>
        <p className="text-lg md:text-xl text-center font-medium text-blue-50 max-w-2xl mx-auto">
          Research, Trade and Charts.
        </p>
      </motion.div>

      <div className="flex justify-center items-center px-4 md:px-10 lg:px-40 min-h-[600px] py-10">
        <InfiniteMovingFeatureCards>
          <FeatureCardVariant
            name="Community Engagement"
            quote="Connect, discuss, and learn with a vibrant trading community."
            image="/assets/Imagess/comunity.jpg"
            points={[
              "Safe & respectful environment",
              "Live discussions",
              "Polls & Q&A sessions",
              "FREE Study Resources",
              "Share chart views & market logic",
            ]}
            ctaText="Get Started"
          />
          <FeatureCardVariant
            name="Trade with Logic"
            quote="Stay updated with research-based insights and market learning"
            image="/assets/Imagess/tradelogic1.jpg"
            points={[
              "Define Clear Entry & Exit Rules",
              "Rely on Data, Not Emotions",
              "Respect Stop Losses",
              "Avoid Overtrading",
              "Learn Continuously",
            ]}
            ctaText="Become a Member"
          />
          <FeatureCardVariant
            name="Daily Market View"
            quote="Improve your knowledge with daily educational content and insights."
            image="/assets/Imagess/marketview.jpg"
            points={[
              "Top Gainers & Losers",
              "Trends, Sectors & Movers",
              "Watchlist Highlights",
              "Event Calendar",
              "FII/DII Activity",
            ]}
            ctaText="Start Now"
          />
          <FeatureCardVariant
            name="WealthFino Mobile App"
            quote="Easily track your trades with a simple and user-friendly mobile interface."
            image="/assets/Imagess/mobileView2.jpg"
            points={[
              "Smart & Simple Interface",
              "Daily FREE Research Insight",
              "Learn from Live Examples",
              "Research-Based Chart Insight",
              "Quiz & Practice Section",
            ]}
            ctaText="Register Today"
          />
        </InfiniteMovingFeatureCards>
      </div>
    </div>
  );
};

export default FeatureSection;
