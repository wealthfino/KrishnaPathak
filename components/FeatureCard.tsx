"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { FlipWords } from "./ui/flip-words";
import Link from "next/link";

type FeatureCardProps = {
  name: string;
  quote: string;
  image: string;
  points: string[];
  imagePosition?: "left" | "right";
  ctaText?: string;
  flipWords?: string[];
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  name,
  quote,
  image,
  points,
  imagePosition = "right",
  ctaText = "",
  flipWords,
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <motion.div
      className="relative w-full max-w-7xl mx-auto px-10 py-6 sm:py-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
    >
      <BackgroundGradient
        className="rounded-[50px]"
        containerClassName="group/card"
      >
        <div className="w-full bg-[#18181b] text-white rounded-[22px] py-6 px-4 sm:py-8 sm:px-6 md:px-10 md:py-12 flex flex-col lg:flex-row items-center gap-6 md:gap-10 shadow-2xl border border-[#18181b]">
          {/* Image container - always comes first on mobile and medium screens */}
          <div
            className={`w-full lg:w-1/2 flex justify-center items-center ${
              isImageLeft ? "lg:order-first" : "lg:order-last"
            }`}
          >
            <div className="relative p-2 max-w-[280px] sm:max-w-[380px] md:max-w-[480px] bg-gradient-to-tl from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] rounded-3xl shadow-lg">
              <Image
                src={image}
                alt={name}
                width={600}
                height={400}
                className="rounded-2xl object-contain"
              />
            </div>
          </div>

          {/* Content container - always comes second on mobile and medium screens */}
          <div className="flex flex-col justify-center items-center lg:items-start gap-3 sm:gap-4 w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-bold">
              {flipWords
                ? (() => {
                    const matchWord = flipWords.find((word) =>
                      name.toLowerCase().includes(word.toLowerCase())
                    );

                    if (matchWord) {
                      const matchIndex = name
                        .toLowerCase()
                        .indexOf(matchWord.toLowerCase());
                      const before = name.slice(0, matchIndex);
                      const after = name.slice(matchIndex + matchWord.length);
                      return (
                        <>
                          {before}
                          <br />
                          <span className="-ml-2">
                            <FlipWords words={flipWords} />
                          </span>
                          <br />
                          {after}
                        </>
                      );
                    } else {
                      return name;
                    }
                  })()
                : name}
            </h2>
            <p className="text-white text-base sm:text-lg text-center lg:text-left mt-3 sm:mt-5">
              {quote}
            </p>

            <ul className="mt-1 sm:mt-2 space-y-1 sm:space-y-2 list-disc text-left list-inside text-white">
              {points.map((point, index) => (
                <li key={index} className="text-sm sm:text-base mt-3">
                  {point}
                </li>
              ))}
            </ul>

            {ctaText && (
              <div className="w-full sm:w-[90%] mt-3 sm:mt-4">
                <Link href={"https://wealthfino.rpy.club/jcp/DEdQG6HRg9"}>
                  <BackgroundGradient
                    className="rounded-full flex justify-center items-center text-white w-full px-4 py-2 bg-[#18181b] cursor-pointer"
                    isButton
                    innerContainer1ClassName="rounded-full"
                    innerContainer2ClassName="rounded-full"
                  >
                    <span className="text-base md:text-lg font-medium">Get Started</span>
                  </BackgroundGradient>
                </Link>
              </div>
            )}
          </div>
        </div>
      </BackgroundGradient>
    </motion.div>
  );
};
