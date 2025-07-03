"use client";

import { motion } from "framer-motion";
import React from "react";
import SubscriptionCard from "../../../components/SubscriptionCard";
import { CircleCheckBig } from "lucide-react";

const SubscriptionPage = () => {
  const indexOptionFeatures = [
    { icon: <CircleCheckBig size={20} />, label: "Daily 2-3 Index Insights " },
    { icon: <CircleCheckBig size={20} />, label: "Intraday / BTST Setups" },
    { icon: <CircleCheckBig size={20} />, label: "Chart Logic Explained" },
    { icon: <CircleCheckBig size={20} />, label: "Live Market Support" },
  ];

  const kpOneFeatures = [
    {
      icon: <CircleCheckBig size={20} />,
      label: "3-4 Stock Option Calls Daily",
    },
    {
      icon: <CircleCheckBig size={20} />,
      label: "Chart Explanation with logic",
    },
    { icon: <CircleCheckBig size={20} />, label: "Live Sessions" },
    { icon: <CircleCheckBig size={20} />, label: "Free Study Material" },
    { icon: <CircleCheckBig size={20} />, label: "Live Market Support" },
  ];

  const equityPlanFeatures = [
    { icon: <CircleCheckBig size={20} />, label: "2-3 Stock Insights" },
    { icon: <CircleCheckBig size={20} />, label: "Short / Long Term Trades" },
    {
      icon: <CircleCheckBig size={20} />,
      label: "BTST, Swing & Positional Trades",
    },
    {
      icon: <CircleCheckBig size={20} />,
      label: "Chart Explanation with Logic",
    },
    { icon: <CircleCheckBig size={20} />, label: "Real-time Market Queries" },
  ];

  return (
    <section className="pt-40 pb-20 bg-blue-50 min-h-screen text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="px-8 text-center"
      >
        <div className="inline-flex flex-col justify-center text-center mb-12">
          <div className="w-24 h-1 bg-[#7ac678] rounded-full mb-2" />
          <h2 className="text-4xl md:text-5xl text-[#1f2b5e] font-extrabold pb-3">
            Skip The Hype.{" "}
            <span className="animate-gradient bg-gradient-to-l from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-clip-text text-transparent px-1">
              Learn The Why!
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#1f2b5e] rounded-full mt-2 ml-auto" />
        </div>
        <p className="text-base font-medium md:text-lg text-[#1f2b5e] max-w-2xl mx-auto mb-10">
          Helping the next generation of traders with educational insights and
          learning tools. Join now to access premium features.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="space-y-10">
        <SubscriptionCard
          title="Index Option Plan"
          originalPrice="₹ 3,999"
          discountedPrice="₹ 1,999"
          validity="1 Month"
          features={indexOptionFeatures}
          buttonUrl="https://wealthfino.rpy.club/jcp/P17k88AHth?code=NIFTY"
          badgeText="50% OFF"
        />

        <SubscriptionCard
          title="KP One Club"
          originalPrice="₹ 4,999"
          discountedPrice="₹ 2,999"
          validity="1 Month"
          features={kpOneFeatures}
          buttonUrl="https://wealthfino.rpy.club/jcp/DEdQG6HRg9"
        />

        <SubscriptionCard
          title="Equity Plan Highlights"
          originalPrice="₹ 4,999"
          discountedPrice="₹ 2,999"
          validity="1 Month"
          features={equityPlanFeatures}
          buttonUrl="https://wealthfino.rpy.club/jcp/aEKMNUF1tp?code=KKK"
          badgeText="BEST VALUE"
        />
      </div>
    </section>
  );
};

export default SubscriptionPage;
