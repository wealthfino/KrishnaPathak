"use client";

import Image from "next/image";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { FlipWords } from "./ui/flip-words";
import Link from "next/link";

type FeatureCardProps = {
  name: string;
  quote: string;
  image: string;
  points: string[];
  ctaText?: string;
  flipWords?: string[];
};

export const FeatureCardVariant: React.FC<FeatureCardProps> = ({
  name,
  quote,
  image,
  points,
  ctaText = "",
  flipWords,
}) => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-10 py-4 sm:py-6">
      <BackgroundGradient containerClassName="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-full flex justify-center items-center mx-auto group/card">
        <div className="bg-[#18181b] rounded-[20px] w-full h-full flex flex-col justify-between items-center p-4 sm:p-5">
          {/* Top Content Container */}
          <div className="w-full">
            {/* Image Container */}
            <div className="w-full h-[120px] sm:h-[140px] md:h-[160px] mb-3 sm:mb-4">
              <div className="h-full flex justify-center items-center relative p-1 sm:p-2 bg-blue-200 rounded-lg overflow-hidden">
  <Image
    src={image}
    alt={name}
    width={180}
    height={120}
    className="rounded-xl object-fill w-full h-full"
  />
</div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-start items-center w-full px-2">
              <h2 className="text-lg sm:text-xl md:text-2xl text-center font-bold mb-3 sm:mb-4">
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
                            <span className="flex justify-center items-center text-center ml-1 sm:ml-2">
                              <FlipWords words={flipWords} />
                            </span>
                            {after}
                          </>
                        );
                      } else {
                        return name;
                      }
                    })()
                  : name}
              </h2>

              <div className="text-white text-xs sm:text-sm text-center mb-5 w-full">
                {quote}
              </div>
            </div>
          </div>

          {/* Bottom Content Container */}
          <div className="w-full flex flex-col justify-between flex-grow">
            <div className="w-full flex justify-center items-center mb-3">
              <ul className="space-y-1 list-disc text-left">
                {points.map((point, index) => (
                  <li key={index} className="text-xs sm:text-sm mb-3">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {ctaText && (
              <div className="w-full mt-auto">
                <Link href={"https://wealthfino.rpy.club/jcp/DEdQG6HRg9"}>
                  <BackgroundGradient
                    className="rounded-full flex justify-center items-center text-white w-full px-4 py-2 bg-[#18181b] cursor-pointer"
                    innerContainer1ClassName="rounded-full"
                    innerContainer2ClassName="rounded-full"
                    isButton
                  >
                    <span className="text-base md:text-lg font-medium">{ctaText}</span>
                  </BackgroundGradient>
                </Link>
              </div>
            )}
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};
