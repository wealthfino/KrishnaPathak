"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // If using Next.js
import { StatsSection } from "./CounterStat";

const AboutUs = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header (Centered) */}
        <motion.div
          className="text-center"
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
                About WealthFino
              </h1>
            </div>
          </div>
          <p className="text-base font-medium md:text-lg text-blue-50 max-w-2xl mx-auto mb-14">
            Learn and trade with simple tools and Research Based Insights.
          </p>
        </motion.div>

        {/* Content Grid (Image on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content (Left Side - Animated) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1" // Ensures text comes first on mobile
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              <span className="text-[#13B5E8]">
                Insight. Discipline. Research.
              </span>
            </h3>
            <p className="text-zinc-300 mt-4">
              Our platform promotes insightful education, research-backed
              Recommendation, and a community driven by facts — not forecasts. A
              strong market journey begins with clear knowledge, ethical
              learning, and practical tools — not shortcuts.
            </p>

            <div className="space-y-6 mt-6">
              {/* Feature 1 */}
              <div className="relative group rounded-xl bg-zinc-800/50 text-white border-l-4 border-[#1f2b5e] p-4 overflow-hidden transition-shadow duration-300 shadow-lg hover:shadow-[0_0_40px_#7B61FF55] w-full cursor-pointer">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#1f2b5e] to-[#4a5896] clip-corner z-10 group-hover:shadow-[0_0_30px_#7B61FF] transition duration-300" />

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 z-20 relative flex items-center gap-2">
                  <span className="bg-[#1f2b5e] rounded-full h-2 w-2"></span>
                  Practice, Learn, Insights
                </h3>

                {/* Description */}
                <p className="text-base text-zinc-400 z-20 relative">
                  Improve your skills, learning, and real charts
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative group rounded-xl bg-zinc-800/50 text-white border-l-4 border-[#7AC678] p-4 overflow-hidden transition-shadow duration-300 shadow-lg hover:shadow-[0_0_40px_#b9f0a855] w-full cursor-pointer">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#7AC678] to-[#b9f0a8] clip-corner z-10 group-hover:shadow-[0_0_30px_#7B61FF] transition duration-300" />

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 z-20 relative flex items-center gap-2">
                  <span className="bg-[#7AC678] rounded-full h-2 w-2"></span>
                  Explore, Understand, Trade
                </h3>

                {/* Description */}
                <p className="text-base text-zinc-400 z-20 relative">
                  Stock markets with simple tools, charts, and insights
                </p>
              </div>

              {/* Feature 3 */}
              <div className="relative group rounded-xl bg-zinc-800/50 text-white border-l-4 border-[#13B5E8] p-4 overflow-hidden transition-shadow duration-300 shadow-lg hover:shadow-[0_0_40px_#89e2ff55] w-full cursor-pointer">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#13B5E8] to-[#89e2ff] clip-corner z-10 group-hover:shadow-[0_0_30px_#7B61FF] transition duration-300" />

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 z-20 relative flex items-center gap-2">
                  <span className="bg-[#13B5E8] rounded-full h-2 w-2"></span>
                  Learn with Logic, Not Luck
                </h3>

                {/* Description */}
                <p className="text-base text-zinc-400 z-20 relative">
                  Learning journey is transparent, responsible, and empowering
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image (Right Side - Animated) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center items-center h-full"
          >
            {/* Gradient Border Wrapper */}
            <div className="animate-gradient relative bg-gradient-to-br from-[#13B5E8] via-[#7ac678] to-[#1f2b5e] p-[5px] rounded-2xl shadow-lg shadow-[#1f2b5e]/30 w-full max-w-lg aspect-square">
              {/* Inner Content Box */}
              <div className="relative bg-gradient-to-br from-[#222] via-white/30 to-black w-full h-full bg-[#222] rounded-xl overflow-hidden">
                <Image
                  src="/assets/KP.png"
                  alt="TradeWise Analytics"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <StatsSection />
    </section>
  );
};

export default AboutUs;
