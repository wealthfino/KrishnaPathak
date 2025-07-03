"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const logos = [
  {
    src: "/assets/Media_Presence/media-presence-8.png",
    alt: "MENAFN",
    link: "https://menafn.com/1109670065/DAM-Capital-Advisors-Near-Breakout-Level-SEBI-RA-Krishna-Pathak-Highlights-Bullish-Technical-Setup",
  },
  {
    src: "/assets/Media_Presence/media-presence-9.png",
    alt: "BOROK Times",
    link: "https://boroktimes.com/krishna-pathak-29-is-transforming-stock-market-analysis-to-provide-better-insights-and-reliable-guidance-for-investors",
  },
  {
    src: "/assets/Media_Presence/media-presence-1.png",
    alt: "Economic Times",
    link: "https://economictimes.indiatimes.com/markets/confidence-to-take-a-trade-comes-from-knowledge-of-the-subject-better-focus-on-learning/articleshow/105551518.cms?from=mdr",
  },
  {
    src: "/assets/Media_Presence/media-presence-10.png",
    alt: "CNBC",
    link: "",
  },
  {
    src: "/assets/Media_Presence/media-presence-7.png",
    alt: "inshorts",
    link: "https://shrts.in/VwRG8",
  },
  {
    src: "/assets/Media_Presence/media-presence-2.png",
    alt: "Money Control",
    link: "",
  },
  {
    src: "/assets/Media_Presence/media-presence-4.png",
    alt: "MSN",
    link: "https://www.msn.com/en-us/money/topstocks/bajaj-electricals-near-key-breakout-zone-sebi-ra-krishna-pathak-sees-strong-potential-upside/ar-AA1GyUjn?ocid=finance-verthp-feeds&cvid=c2a5c71b5eaa475da12170b7a5c7cb81&ei=22",
  },
  {
    src: "/assets/Media_Presence/media-presence-11.png",
    alt: "Asianet News",
    link: "https://newsable.asianetnews.com/markets/rec-stock-at-crucial-zone-sebi-ra-krishna-pathak-sees-buying-opportunity-multi-level-targets/articleshow-46fh1f0",
  },
  {
    src: "/assets/Media_Presence/media-presence-3.png",
    alt: "GapUp by Rigi",
    link: "",
  },
  {
    src: "/assets/Media_Presence/media-presence-5.png",
    alt: "Investing.com",
    link: "https://in.investing.com/news/stock-market-news/nifty-ends-lower-on-weekly-expiry-financials-autos-it-lead-broad-market-selloff-4873602",
  },
  {
    src: "/assets/Media_Presence/media-presence-6.png",
    alt: "Stocktwits",
    link: "https://stocktwits.com/news-articles/markets/equity/asian-paints-eyes-reversal-from-support-sebi-ra-krishna-pathak-sees-accumulation-opportunity/chl7hgiRbzJ",
  },
];

const MediaPresence = () => {
  return (
    <section className="py-16 bg-blue-50 relative overflow-hidden">
      {/* Accent Glow & Heading */}
      <motion.div
        className="relative z-10 text-center mb-14 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <div className="inline-flex flex-col justify-center text-center mb-12">
          {/* Top Left Decorative Line */}
          <div className="w-24 h-1 bg-[#1f2b5e] rounded-full mb-2" />

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-[#1f2b5e] font-extrabold pb-3">
            <span className="animate-gradient bg-gradient-to-r from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-clip-text text-transparent px-1">
              Featured
            </span>
            {"  "}In
          </h2>

          {/* Bottom Right Decorative Line */}
          <div className="w-24 h-1 bg-[#7ac678] rounded-full mt-2 ml-auto" />
        </div>

        {/* Subheading */}
        <p className="text-base font-medium md:text-lg text-[#1f2b5e] max-w-2xl mx-auto">
          We're proud to be recognized by leading business & financial
          platforms. Our Insights are making headlines - featured by the most
          trusted business and financial platforms.
        </p>
      </motion.div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 pr-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex-shrink-0">
              {logo.link ? (
                <Link
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={45}
                    className="h-auto w-auto object-contain transition duration-500 cursor-pointer"
                  />
                </Link>
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={45}
                  className="h-auto w-auto object-contain transition duration-500 cursor-pointer"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaPresence;
