"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import {
  IconChartLine,
  IconCurrencyRupee,
  IconStarFilled,
  IconLiveView,
  IconTrendingUp,
  IconChartCandle,
  IconUsers,
  IconSearch,
} from "@tabler/icons-react";

export default function BentoGridCharts() {
  return (
    <div className="w-full min-h-screen overflow-y-auto py-[140px] md:py-[160px] relative overflow-hidden">
      {/* Radial Gradient Circles */}
      <div className="absolute size-150 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(186,230,253,0.1),#60a5fa,rgba(49,46,129,1)_40%)] blur-3xl z-0 top-140 -left-60"></div>
      <div className="absolute size-200 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(233,213,255,0.1),#a855f7,rgba(76,29,149,1)_40%)] blur-3xl z-0 top-1/2 md:bottom-160 md:-right-50"></div>
      <div className="absolute size-180 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(186,230,253,0.1),#60a5fa,rgba(49,46,129,1)_40%)] blur-3xl z-0 -bottom-0 -left-80"></div>

      {/* Image container */}
      <div className="relative pt-10 px-4 z-10 max-w-6xl mx-auto mb-12 md:mb-16">
        <div className="w-full flex justify-center rounded-xl overflow-hidden bg-gradient-to-br from-black to-green-500 p-2">
          <img
            className="w-full h-auto object-cover rounded-lg max-h-[300px] md:max-h-[400px]"
            src="/assets/charts-heading.png"
            alt="Stock charts visualization"
            loading="lazy"
          />
        </div>
      </div>
      <div className="relative max-w-3xl mx-auto text-center px-6 mb-12 md:mb-16 z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
          Stock Analysis
        </h2>
        <p className="text-lg md:text-xl text-neutral-300">
          Unlock powerful analytics for NSE and BSE listed stocks. Track
          real-time trends, technical patterns, and fundamental metrics to make
          informed investment decisions in the Indian equity markets. Powered By
          ScanX.
        </p>
      </div>
      {/** */}
      <div className="px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 relative z-10 max-w-3xl mx-auto">
        {/* Search Box */}
        <a
          href="https://scanx.trade/"
          className="block group transition-all duration-200"
        >
          <div className="flex flex-col justify-center items-center border-2 border-gray-600 rounded-2xl py-4 px-6 hover:border-gray-300 transition-colors backdrop-blur-3xl">
            <div className="flex items-center gap-3 w-full max-w-md justify-center">
              <IconSearch className="size-6 text-gray-400" />
              <span className="font-bold text-lg sm:text-xl text-gray-200">
                Search Stock
              </span>
            </div>
          </div>
        </a>

        {/* Popular Stocks */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 w-full">
          <a
            href="https://scanx.trade/company/tcs-tata-consultancy-services-ltd"
            className="border-3 border-gray-600 hover:border-gray-300 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 text-white font-medium text-sm sm:text-base backdrop-blur-3xl"
          >
            TCS
          </a>
          <a
            href="https://scanx.trade/company/adani-power-ltd"
            className="border-3 border-gray-600 hover:border-gray-300 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 text-white font-medium text-sm sm:text-base backdrop-blur-3xl"
          >
            ADANI
          </a>
          <a
            href="https://scanx.trade/company/itc-ltd"
            className="border-3 border-gray-600 hover:border-gray-300 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 text-white font-medium text-sm sm:text-base backdrop-blur-3xl"
          >
            ITC
          </a>
          {/* Add more stocks as needed */}
        </div>
      </div>
      {/** */}
      <BentoGrid className="relative max-w-[1400px] p-8 mx-auto z-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            imagePosition={item.imagePosition}
            icon={item.icon}
            className={
              i === 3 || i === 6
                ? "md:col-span-2 cursor-pointer"
                : "cursor-pointer"
            }
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Tata Consultancy Services",
    description: "India's IT giant performance metrics",
    image: "/assets/Bento_Grid_items/bento-grid-item-1.png",
    imagePosition: "left-top",
    icon: <IconChartLine className="h-4 w-4 text-blue-500" />, // Company performance
  },
  {
    title: "Investment Returns",
    description: "ROI analysis across timeframes",
    image: "/assets/Bento_Grid_items/bento-grid-item-2.png",
    imagePosition: "top",
    icon: <IconCurrencyRupee className="h-4 w-4 text-green-500" />, // Financial returns
  },
  {
    title: "Analyst Rating",
    description: "Buy/Sell/Hold recommendations",
    image: "/assets/Bento_Grid_items/bento-grid-item-3.png",
    imagePosition: "left-top",
    icon: <IconStarFilled className="h-4 w-4 text-yellow-500" />, // Star ratings
  },
  {
    title: "Live Stock Chart",
    description: "Real-time price movements",
    image: "/assets/Bento_Grid_items/bento-grid-item-4.png",
    imagePosition: "center",
    icon: <IconLiveView className="h-4 w-4 text-red-500" />, // Live data
  },
  {
    title: "Forecast",
    description: "Price target projections",
    image: "/assets/Bento_Grid_items/bento-grid-item-5.png",
    imagePosition: "right",
    icon: <IconTrendingUp className="h-4 w-4 text-purple-500" />, // Growth trend
  },
  {
    title: "Technical Indicators",
    description: "RSI, MACD, Bollinger Bands",
    image: "/assets/Bento_Grid_items/bento-grid-item-6.png",
    imagePosition: "left-top",
    icon: <IconChartCandle className="h-4 w-4 text-orange-500" />, // Technical charts
  },
  {
    title: "Peer Comparison",
    description: "Industry benchmarking tool",
    image: "/assets/Bento_Grid_items/bento-grid-item-7.png",
    imagePosition: "top",
    icon: <IconUsers className="h-4 w-4 text-cyan-500" />, // Comparison
  },
];
