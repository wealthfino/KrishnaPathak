"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AuroraBackground } from "./ui/aurora-background";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { CardContainer, CardItem } from "./ui/3d-card";

export default function HeroSection() {
  const words = `Discover tools, insights, and a trader community to support your stock market learning and awareness.`;

  return (
    <div>
      <AuroraBackground className="pt-40 md:pt-10 h-auto min-h-[1000px]">
        <div className="max-w-7xl lg:w-5xl xl:w-7xl mx-auto px-4 sm:px-6 md:pl-14 lg:pl-20 flex flex-col md:flex-row items-center justify-between gap-10 py-10 md:py-0">
          {/* Text Section - Left on desktop */}
          <div className="flex-1 text-center min-h-[4rem] w-full md:w-auto">
            <motion.div
              className="flex justify-center items-center mb-4 md:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <BackgroundGradient
                className="rounded-full flex justify-center items-center text-white w-full px-6 py-2 bg-[#18181b] cursor-pointer"
                innerContainer1ClassName="rounded-full"
                innerContainer2ClassName="rounded-full"
              >
                <span className="text-base md:text-lg font-medium">
                  SEBI Reg. No. INH300009914
                </span>
              </BackgroundGradient>
            </motion.div>
            {/* Mobile mockup image - only shown on mobile before other content */}
            <div className="md:hidden relative flex justify-center mb-6">
              <CardContainer>
                <CardItem translateZ={60} className="cursor-pointer">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="flex justify-center"
                  >
                    <Image
                      src={"/assets/mobile-mockup-kp.png"}
                      height={240}
                      width={240}
                      alt="Mobile Mockup"
                      className="w-40 sm:w-48 h-auto"
                    />
                  </motion.div>
                </CardItem>
              </CardContainer>
            </div>
            <motion.div
              className="h-[140px] lg:h-[220px] xl:h-[240px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
            >
              <h1 className="text-4xl lg:text-6xl md:text-center font-extrabold text-white">
                <TypewriterComponent
                  options={{
                    strings: [
                      "Welcome to Stock Trading Hub",
                      "Your Trading Journey Starts Here",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </h1>
            </motion.div>
            <motion.div
              className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl text-gray-300 text-center mb-6 md:mb-12 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
            >
              <TextGenerateEffect words={words} />
            </motion.div>
            <motion.div
              className="mt-4 md:mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="flex flex-col mb-6 md:mb-12">
                <Link
                  href="https://wealthfino.rpy.club/jcp/DEdQG6HRg9"
                  rel="noopener noreferrer"
                >
                  <BackgroundGradient
                    className="rounded-full flex justify-center items-center text-white w-full px-4 py-2 bg-[#18181b] cursor-pointer"
                    innerContainer1ClassName="rounded-full"
                    innerContainer2ClassName="rounded-full"
                  >
                    <span className="text-base md:text-lg font-medium">
                      Get Started
                    </span>
                  </BackgroundGradient>
                </Link>
                <div className="flex justify-center items-center gap-6 sm:gap-8 xl:gap-10 mt-6 md:mt-10">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.rpy.wealth_cAaGur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer relative"
                  >
                    <Image
                      src="/assets/googleplay.png"
                      height={120}
                      width={120}
                      alt="Get it on Google Play"
                      className="w-[120px] sm:w-[136px] lg:w-[160px] h-auto hover:scale-105 hover:shadow-lg hover:shadow-black transition-all ease-in-out duration-200"
                    />
                  </Link>

                  <Link
                    href="https://apps.apple.com/in/app/wealthfino-stocks-trading/id6450156970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer relative"
                  >
                    <Image
                      src="/assets/appstore.png"
                      height={120}
                      width={120}
                      alt="Download on the App Store"
                      className="w-[120px] sm:w-[136px] lg:w-[160px] h-auto hover:scale-105 hover:shadow-lg hover:shadow-black transition-all ease-in-out duration-200"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Mockup Image Section - Right on desktop, hidden on mobile */}
          <div className="hidden md:block relative flex-col justify-center flex-1 w-full md:w-auto">
            <CardContainer>
              <CardItem translateZ={60} className="cursor-pointer">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="md:-translate-y-5 flex justify-center"
                >
                  <Image
                    src={"/assets/mobile-mockup-kp.png"}
                    height={240}
                    width={240}
                    alt="Mobile Mockup"
                    className="w-40 sm:w-48 md:w-60 h-auto"
                  />
                </motion.div>
              </CardItem>
            </CardContainer>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}
