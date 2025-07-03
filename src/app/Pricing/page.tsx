"use client";

import { motion } from "framer-motion";
import React from "react";
import SubscriptionCard from "../../../components/SubscriptionCard";
import {
  PhoneCall,
  BarChart2,
  Tv,
  BookOpenText,
  LineChart,
} from "lucide-react";
import { BackgroundGradient } from "../../../components/ui/background-gradient";
import { useLoading } from "@/app/context/LoadingContext";

const features = [
  { icon: <PhoneCall size={20} />, label: "3-4 Stock Option Calls Daily" },
  { icon: <BarChart2 size={20} />, label: "Chart Explanation with logic" },
  { icon: <Tv size={20} />, label: "Live Sessions" },
  { icon: <BookOpenText size={20} />, label: "Free Study Material" },
  { icon: <LineChart size={20} />, label: "Live Market Support" },
];

const PricingPage = () => {
  const { setIsLoading } = useLoading();
  return (
    <section className="py-14 bg-blue-50 min-h-[800px] text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="px-8 text-center"
      >
        <div className="inline-flex flex-col justify-center text-center mb-12">
          {/* Top Left Decorative Line */}
          <div className="w-24 h-1 bg-[#7ac678] rounded-full mb-2" />
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-[#1f2b5e] font-extrabold pb-3">
            Skip The Hype.{"  "}
            <span className="animate-gradient bg-gradient-to-l from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-clip-text text-transparent px-1">
              Learn The Why!
            </span>
          </h2>
          {/* Bottom Right Decorative Line */}
          <div className="w-24 h-1 bg-[#1f2b5e] rounded-full mt-2 ml-auto" />
        </div>
        <p className="text-base font-medium md:text-lg text-[#1f2b5e] max-w-2xl mx-auto mb-10">
          Helping the next generation of traders with educational insights and
          learning tools. Join now to access premium features.
        </p>
      </motion.div>
      <SubscriptionCard
        title="KP One Club"
        originalPrice="₹ 4,999"
        discountedPrice="₹ 2,999"
        validity="1 Month"
        features={features}
        buttonUrl="https://wealthfino.rpy.club/jcp/DEdQG6HRg9"
        badgeText="40% OFF"
      />
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            window.location.href = "/Subscription";
          }, 100); // slight delay to show the loader first
        }}
        className="cursor-pointer inline-flex justify-center items-center"
      >
        <BackgroundGradient
          className="rounded-full text-white px-6 py-2 bg-[#18181b] cursor-pointer"
          isButton
          innerContainer1ClassName="rounded-full"
          innerContainer2ClassName="rounded-full"
        >
          <span className="text-base md:text-lg font-medium">View Plans</span>
        </BackgroundGradient>
      </motion.span>
    </section>
  );
};

export default PricingPage;
