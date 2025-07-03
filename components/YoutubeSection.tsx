"use client";

import React from "react";
import { motion } from "framer-motion";
import { VideoCarousel } from "./ui/carousel";

const YoutubeSection = () => {
  const videoSlides = [
    {
      src: "/assets/Videos/video_2.mp4",
      href: "https://youtube.com/WealthFino",
      title: "Today's Stock Suggestion",
      button: "Watch Now",
    },
    {
      src: "/assets/Videos/video_2.mp4",
      href: "https://youtube.com/WealthFino",
      title: "Today's Stock Suggestion",
      button: "Watch Now",
    },
    {
      src: "/assets/Videos/video_2.mp4",
      href: "https://youtube.com/WealthFino",
      title: "Today's Stock Suggestion",
      button: "Watch Now",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20 mb-20 flex flex-col justify-center items-center gap-10 md:gap-20">
      <motion.div
        className="text-center px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <div className="relative inline-flex justify-center items-center rounded-lg overflow-hidden mb-12">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-[length:200%_auto] animate-gradient rounded-lg" />
          {/* Content with solid background (adjust color as needed) */}
          <div className="relative z-10 bg-transparent px-4 lg:px-10 py-2 md:py-4 rounded-md">
            <h1 className="text-center text-neutral-800 text-[30px] md:text-5xl font-bold whitespace-nowrap">
              See On Youtube!
            </h1>
          </div>
        </div>
        <p className="text-base font-medium md:text-lg text-blue-50 max-w-2xl mx-auto mb-10">
          Watch simplified market insights and educational sessions on our
          YouTube channel.
        </p>
      </motion.div>
      <VideoCarousel slides={videoSlides} />
    </div>
  );
};

export default YoutubeSection;
