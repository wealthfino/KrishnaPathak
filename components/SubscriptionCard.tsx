"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type FeatureItem = {
  icon: React.ReactNode;
  label: string;
};

type SubscriptionCardProps = {
  title: string;
  originalPrice: string;
  discountedPrice: string;
  validity: string;
  features: FeatureItem[];
  buttonUrl: string;
  badgeText?: string;
};

const SubscriptionCard = ({
  title,
  originalPrice,
  discountedPrice,
  validity,
  features,
  buttonUrl,
  badgeText = "LIMITED OFFER",
}: SubscriptionCardProps) => {
  const handleClick = () => {
    window.location.href = buttonUrl;
  };

  return (
    <section className="flex justify-center items-center py-10 px-8 bg-transparent text-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-4xl w-full lg:p-4 bg-blue-50 rounded-xl shadow-xl border-3 border-black flex flex-col md:flex-row items-center overflow-hidden"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6 space-y-4 bg-blue-50 h-full">
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                boxShadow: "0 4px 10px 1px rgba(0, 0, 0, 0.3)",
              }}
              className={`flex items-center gap-4 px-4 py-4 rounded-lg text-md font-medium ${
                index % 2 === 0
                  ? "bg-yellow-500 text-black bg-gradient-to-br from-yellow-500 via-white/50 to-black/20"
                  : "bg-black text-yellow-500 bg-gradient-to-br from-black via-white/30 to-black/20"
              }`}
            >
              <span>{item.icon}</span>
              <span className="text-left">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-6 relative flex gap-3 flex-col items-start justify-center text-left h-full">
          {/* Logo top-right */}
          <div className="absolute top-4 right-4">
            <Image
              src="/assets/logo-no-bg.png"
              alt="WealthFino Logo"
              width={80}
              height={80}
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
          <p className="text-base mt-2">Subscription fees:</p>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xl md:text-2xl font-semibold line-through text-black">
              {originalPrice}
            </p>
            <p className="text-3xl md:text-4xl font-bold text-black">
              {discountedPrice}
            </p>
          </div>

          <p className="bg-yellow-200 text-sm px-3 py-1 rounded-md mb-6">
            Validity = {validity}
          </p>

          <button
            className="relative mt-2 px-6 py-2 bg-white text-black text-2xl border-2 border-black rounded-lg font-bold hover:bg-gray-100 transition w-full cursor-pointer"
            onClick={handleClick}
          >
            <span className="absolute top-0 left-8 -mt-3 -ml-6 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {badgeText}
            </span>
            Buy Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default SubscriptionCard;
