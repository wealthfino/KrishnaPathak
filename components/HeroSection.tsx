"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import { AuroraBackground } from "./ui/aurora-background";
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { CardContainer, CardItem } from "./ui/3d-card";

export default function HeroSection() {
  const subheading =
    "Discover tools, insights, and a trader community to support your stock market learning and awareness.";

  return (
    <div>
      <AuroraBackground className="pt-20 md:pt-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

          {/* LEFT SECTION - TEXT */}
          <div className="flex-1 text-center md:text-left pt-20">
            {/* SEBI BADGES */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
            <BackgroundGradient
                 
                  className="rounded-full text-white px-4 py-2 bg-[#18181b]"
                  innerContainer1ClassName="rounded-full"
                  innerContainer2ClassName="rounded-full"
                >
                  <span className="text-sm md:text-base font-medium">
                    Krishna Pathak
                  </span>
                </BackgroundGradient>
                <BackgroundGradient
                 
                  className="rounded-full text-white px-4 py-2 bg-[#18181b]"
                  innerContainer1ClassName="rounded-full"
                  innerContainer2ClassName="rounded-full"
                >
                  <span className="text-sm md:text-base font-medium">
                   SEBI Registered Research Analyst
                  </span>
                </BackgroundGradient>
                <BackgroundGradient
                 
                  className="rounded-full text-white px-4 py-2 bg-[#18181b]"
                  innerContainer1ClassName="rounded-full"
                  innerContainer2ClassName="rounded-full"
                >
                  <span className="text-sm md:text-base font-medium">
                    SEBI Reg. No. INH300009914
                  </span>
                </BackgroundGradient>
                <BackgroundGradient
                 
                  className="rounded-full text-white px-4 py-2 bg-[#18181b]"
                  innerContainer1ClassName="rounded-full"
                  innerContainer2ClassName="rounded-full"
                >
                  <span className="text-sm md:text-base font-medium">
                   BSE Enlistment No : 5590
                  </span>
                </BackgroundGradient>
                
                
              
            </motion.div>

            {/* HEADLINE */}
            <motion.div
              className="mb-4 h-[120px] md:h-[160px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
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

            {/* SUBHEADING */}
            <motion.div
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <TextGenerateEffect words={subheading} />
            </motion.div>

            {/* CTA BUTTON */}
           <motion.div
  className="flex justify-center md:justify-start"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
>
  <Link href="https://wealthfino.rpy.club/jcp/DEdQG6HRg9" passHref>
    <BackgroundGradient
      className="rounded-full text-white px-6 py-3 w-full md:w-[150px] flex justify-center items-center"
      innerContainer1ClassName="rounded-full"
      innerContainer2ClassName="rounded-full"
    >
      <span className="text-base font-medium">Get Started</span>
    </BackgroundGradient>
  </Link>
</motion.div>


            {/* APP STORE LINKS */}
            <div className="flex justify-center md:justify-start gap-4 mt-5 mb-3">
              <Link
                href="https://play.google.com/store/apps/details?id=com.rpy.wealth_cAaGur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/googleplay.png"
                  height={120}
                  width={120}
                  alt="Google Play"
                  className="w-28 sm:w-32 lg:w-36 h-auto hover:scale-105 transition-all"
                />
              </Link>
              <Link
                href="https://apps.apple.com/in/app/wealthfino-stocks-trading/id6450156970"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/appstore.png"
                  height={120}
                  width={120}
                  alt="App Store"
                  className="w-28 sm:w-32 lg:w-36 h-auto hover:scale-105 transition-all"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT SECTION - IMAGE */}
          <div className="flex-1 flex justify-center items-center pt-20">
            <CardContainer>
              <CardItem translateZ={60} className="cursor-pointer">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="flex justify-center"
                >
                  <Image
                    src="/assets/mobile-mockup-kp.png"
                    width={300}
                    height={600}
                    alt="Mobile Mockup"
                    className="w-48 sm:w-56 md:w-64 h-auto"
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
