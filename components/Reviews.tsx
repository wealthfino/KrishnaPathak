"use client";

import React, { useMemo } from "react";
import avatar1 from "../public/assets/Testimonials/priyanka-charan.webp";
import avatar2 from "../public/assets/Testimonials/padmakumar-n.webp";
import avatar3 from "../public/assets/Testimonials/Udit-Agarwal.webp";
import avatar5 from "../public/assets/Testimonials/Nandi-Mahara.webp";
import avatar6 from "../public/assets/Testimonials/Raviteja-Ragiphani.webp";
import avatar7 from "../public/assets/Testimonials/KS-Dhami.webp";
import avatar8 from "../public/assets/Testimonials/istiyaq-mansuri.webp";
import avatar9 from "../public/assets/Testimonials/Rajesh-Kumar.webp";
import avatar10 from "../public/assets/Testimonials/Arvind-Kushwaha.webp";
import avatar11 from "../public/assets/Testimonials/vijay-maurya.webp";
import avatar12 from "../public/assets/Testimonials/Archana-Mohite.webp";
import avatar13 from "../public/assets/Testimonials/Kishore-Kale.png";
import avatar14 from "../public/assets/Testimonials/avatar-A.png";
import avatar15 from "../public/assets/Testimonials/avatar-S.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type Testimonial = {
  text: string;
  imageSrc: any;
  name: string;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Personally, I feel that it is easy for beginners to get started, it is a very useful software, and you can accumulate experience later...I have invested many times and have recommended many friends, and their feedback is very good, safe, stable, reliable and the return on investment is very high. ..The platform for financial management is really important. A good platform will have good returns.",
    imageSrc: avatar1,
    name: "Priyanka Charan",
    date: "May 26, 2023",
  },
  {
    text: "Been with KP now for close to a year. Someone like me who has a day job, the recommendation provided by KP is a good way for an alternate income. Have seen 80% success rate on calls with relevant justification for the call. Very good association and looking forward to continue for a longer time",
    imageSrc: avatar2,
    name: "Padmakumar N",
    date: "March 5, 2025",
  },
  {
    text: "Learning material 1.0 is really good and clear all the basic concepts and terminology of trading and investing. Learning and earning going in parallel.",
    imageSrc: avatar3,
    name: "Udit Agarwal",
    date: "March 17, 2025",
  },
  {
    text: "Hi everyone, Krishna sir and this app is best for all. Honestly call to kahi bhi mil jayegi but proper sl target n full support sir ki USP hai. Don't waste ur time n money with any fake telegram group. Join Wealthfino n Krishna sir to Learn with Earn",
    imageSrc: avatar15,
    name: "Somdutt Yadav",
    date: "July 5, 2024",
  },
  {
    text: "Just started my journey with wealthfino and I would suggest to stick to trade plans. To wait till target is reached or stoploss is hit. Otherwise there will be randomness.",
    imageSrc: avatar5,
    name: "Nandi Mahara",
    date: "February 3, 2025",
  },
  {
    text: "Great service from Krishna. One of the best places to do trading. No need to run behind any of the expensive apps. Krishna recommendations are accurate and reliable.",
    imageSrc: avatar6,
    name: "Raviteja Ragiphani",
    date: "January 2, 2025",
  },
  {
    text: "I have joined krishna sir since April this year and the way he provide us trade is very informative. Every trade contains the logic and risk management is also good. Also provide the safe exist for small trader. The learning material is also helpful.",
    imageSrc: avatar14,
    name: "Arpit",
    date: "July 5, 2024",
  },
  {
    text: "I've been using WealthFino Capital stock market services for the past few months, and i must say, the experience has been excellent. As someone who was relatively new to trading, I truly appreciated the clarity and support provided by their team.",
    imageSrc: avatar14,
    name: "Ashish Kumar",
    date: "May 9, 2025",
  },
  {
    text: "Mr. Krish's technical analysis are game-changing! His sharp, clear analysis and app transformed my trading. A true mentor-about mastering the market, highly recommend him!",
    imageSrc: avatar13,
    name: "Kishore Kale",
    date: "June 6, 2025",
  },
  {
    text: "I have been KP sir recommendation from the time he was part of gap up team. He is one of the best Sebi registered RA I have ever come across and i wouldn't mind to say only two people can predict the market one is god other is KP sir.🙏🏻",
    imageSrc: avatar14,
    name: "Amit Saxena",
    date: "May 15, 2025",
  },
  {
    text: "Sir first of all thank you for providing excellent calls for small traders..aapse join hone ke baad trading journey smooth and stressfree ho gayi hai...aapke calls ki accuracy lajawaab hai...Thanks KP Sir",
    imageSrc: avatar15,
    name: "Shabbir A.V.",
    date: "May 9, 2025",
  },
  {
    text: "KP has great analysis techniques. He is perfect at his work. Providing so accurate trades in such volatile market is great. Keeps track on every client, whether small or big, risky or safe, index, equity or option. But app has some issues, so 4 stars",
    imageSrc: avatar15,
    name: "Shivam Singh",
    date: "June 11, 2025",
  },
  {
    text: "Great for all, specially for beginners. Risk reward ratio well managed and monitored timely.",
    imageSrc: avatar7,
    name: "KS Dhami",
    date: "January 5, 2025",
  },
  {
    text: "fantastic app and services given by KP.... Learning material 1.0 is very useful to understand the candlestick pattern. Thanks a lot krishna pathak ji. I need some option chain knowledge,if possible pls share it in the next learning material.",
    imageSrc: avatar8,
    name: "istiyaq mansuri",
    date: "March 17, 2025",
  },
  {
    text: "Your proper planning for Option call with SL and Target is super Hit🎯 Learning material is very easy to understand for scratch level to advance level.I learn & earn from WealthFino",
    imageSrc: avatar9,
    name: "Rajesh Kumar",
    date: "March 17, 2025",
  },
  {
    text: "I am using you and made profit by taking free trades. The app is good. You can learn a lot by using it. Thanks for Wealthfono.",
    imageSrc: avatar10,
    name: "Arvind Kushwaha",
    date: "February 27, 2025",
  },
  {
    text: "Very productive. If you wants to learning. Then this is very efctive. Not for only easy money.",
    imageSrc: avatar11,
    name: "vijay maurya",
    date: "March 6, 2025",
  },
  {
    text: "Krishna sirs levels are so perfect,they always achieve their targets. Very minimum stoplosses and maximum targets.superb analysis👌👌",
    imageSrc: avatar12,
    name: "Archana Mohite",
    date: "February 3, 2025",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="p-6 md:p-10 rounded-3xl shadow-lg border border-[#1f2b5e] max-w-md w-full bg-white cursor-pointer">
    <p className="text-sm md:text-base text-gray-800">{testimonial.text}</p>
    <div className="flex items-center gap-3 mt-5">
      <Image
        src={testimonial.imageSrc}
        alt={testimonial.name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="font-semibold">{testimonial.name}</span>
        <span className="text-sm text-gray-500">{testimonial.date}</span>
      </div>
    </div>
  </div>
);

const ScrollColumn = ({
  testimonials,
  direction = "up",
}: {
  testimonials: Testimonial[];
  direction?: "up" | "down";
}) => {
  return (
    <div className="relative overflow-hidden h-full">
      <div
        className={twMerge(
          "flex flex-col gap-6 pb-6 animate-scroll",
          direction === "down" ? "animate-scroll-reverse" : ""
        )}
        style={{
          animationDuration: "60s",
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const Reviews = () => {
  // Dynamically slice columns for responsiveness
  const columns = useMemo(() => {
    const colSize = Math.ceil(testimonials.length / 3);
    return [
      testimonials.slice(0, colSize),
      testimonials.slice(colSize, colSize * 2),
      testimonials.slice(colSize * 2),
    ];
  }, []);

  return (
    <section className="bg-blue-50 text-black py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
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
              <span className="animate-gradient bg-gradient-to-l from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-clip-text text-transparent px-1">
                Testimonials
              </span>
            </h2>
            {/* Bottom Right Decorative Line */}
            <div className="w-24 h-1 bg-[#1f2b5e] rounded-full mt-2 ml-auto" />
          </div>
          <p className="text-base font-medium md:text-lg text-[#1f2b5e] max-w-2xl mx-auto mb-14">
            Users talk about their journey of learning, research, and
            disciplined market knowledge with WealthFino
          </p>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 h-[800px] [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,1),rgba(0,0,0,1),transparent)] overflow-hidden">
          <ScrollColumn testimonials={columns[0]} direction="up" />
          <div className="hidden md:block">
            <ScrollColumn testimonials={columns[1]} direction="down" />
          </div>
          <div className="hidden lg:block">
            <ScrollColumn testimonials={columns[2]} direction="up" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
