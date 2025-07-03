"use client";

import {
  CandlestickChart,
  Users,
  Lock,
  Layers,
  LineChart,
  Presentation,
  IndianRupee,
  MonitorPlay,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Stock Option",
    description: "Research-based stock ideas",
    icon: <IndianRupee size={32} />,
  },
  {
    title: "Live Session",
    description: "Live Market Insights",
    icon: <MonitorPlay size={32} />,
  },
  {
    title: "Chart Logic",
    description: "Chart Logic Explained",
    icon: <LineChart size={32} />,
  },
  {
    title: "Equity Insight",
    description: "Market Trend Overview",
    icon: <Presentation size={32} />,
  },
  {
    title: "Lock Trade",
    description: "Unlock New Insight",
    icon: <Lock size={32} />,
  },
  {
    title: "Model Portfolio",
    description: "Sector Allocation",
    icon: <Layers size={32} />,
  },
  {
    title: "Community",
    description: "Engage with smart traders",
    icon: <Users size={32} />,
  },
  {
    title: "Index Option",
    description: "Option Trend View",
    icon: <CandlestickChart size={32} />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="bg-blue-50 text-center py-20 px-6 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <div className="inline-flex flex-col justify-center text-center mb-12">
          {/* Top Left Decorative Line */}
          <div className="w-24 h-1 bg-[#7ac678] rounded-full mb-2" />
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-[#1f2b5e] font-extrabold pb-3">
            Why{"  "}
            <span className="animate-gradient bg-gradient-to-l from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-clip-text text-transparent px-1">
              WealthFino?
            </span>
          </h2>
          {/* Bottom Right Decorative Line */}
          <div className="w-24 h-1 bg-[#1f2b5e] rounded-full mt-2 ml-auto" />
        </div>
        <p className="text-base font-medium md:text-lg text-[#1f2b5e] max-w-2xl mx-auto mb-14">
          "Wealth<span className="text-[#7ac678]">Fino</span>" shares
          research-based buy, sell, and hold recommendations under SEBI RA
          guidelines. We promote market learning, risk awareness, and
          disciplined investing.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="group p-6 rounded-xl bg-[#1f2b5e] border-3 border-transparent hover:border-[#7ac678] hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={i}
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-black/50 via-blue-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />

            <div className="relative z-10 flex flex-col items-start gap-4">
              {/* Flip Icon */}
              <div className="bg-blue-50 p-3 rounded-full text-[#1f2b5e] shadow-md transition-transform duration-500 transform group-hover:rotate-y-180 [transform-style:preserve-3d]">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#7ac678]">
                {feature.title}
              </h3>
              <p className="text-sm text-white max-w-[90%]">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
