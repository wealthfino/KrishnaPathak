"use client";

import React from "react";
import { motion } from "framer-motion";
import TradingViewWidgetHeatmap from "./Trading_Widgets/TradingViewWidgetHeatmap";
import { BackgroundGradient } from "./ui/background-gradient";
import { useIsLargeScreen } from "../hooks/useIsLargeScreen";

const StocksHeatmap = () => {
  const isLargeScreen = useIsLargeScreen();
  const motionProps = isLargeScreen
    ? {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: "easeInOut" },
        viewport: { once: false },
      }
    : {};

  return (
    <div className="w-full flex justify-center items-center px-4 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 bg-blue-50">
      <div className="w-full flex justify-center items-center bg-[#18181b] py-8 px-4 md:p-10 lg:p-16 xl:p-20 rounded-3xl">
        <motion.div {...motionProps} className="w-full max-w-[1200px]">
          {" "}
          {/* You can increase this value as needed */}
          <BackgroundGradient className="w-full h-full flex justify-center items-center mx-auto">
            <div className="bg-[#0f1117] rounded-[20px] w-full h-full flex flex-col justify-between gap-10 items-center p-4 sm:p-5 md:p-8">
              <div className="relative flex justify-center items-center rounded-lg overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-l from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-[length:200%_auto] animate-gradient rounded-lg" />
                {/* Content with solid background (adjust color as needed) */}
                <div className="relative z-10 bg-transparent px-4 lg:px-10 rounded-md">
                  <h1 className="text-center text-[#0f1117] text-[30px] md:text-[50px] font-bold">
                    STOCKS HEATMAP
                  </h1>
                </div>
              </div>
              <div className="bg-gradient-to-tl from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] rounded-xl shadow-lg h-[500px] lg:h-[600px] p-[6px] w-full">
                <TradingViewWidgetHeatmap />
              </div>
            </div>
          </BackgroundGradient>
        </motion.div>
      </div>
    </div>
  );
};

export default StocksHeatmap;
