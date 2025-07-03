"use client";

import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { Users, Star, BriefcaseBusiness, Download } from "lucide-react";
import { useInView } from "framer-motion";

interface CounterStatProps {
  to: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat().format(num);
};

const CounterStat = ({ to, suffix = "", label, icon }: CounterStatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // slight preload before entering
  const [number, setNumber] = useState(0);

  const springs = useSpring({
    from: { val: 0 },
    to: { val: number },
    config: { mass: 1, tension: 170, friction: 26 },
    reset: true,
  });

  useEffect(() => {
    if (isInView) {
      setNumber(to);
    }
  }, [isInView, to]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="mb-2 flex justify-center text-[#18181b]">{icon}</div>
      <animated.div className="text-3xl md:text-5xl font-bold text-[#18181b] mb-4">
        {springs.val.to((val) => `${formatNumber(Math.floor(val))}${suffix}`)}
      </animated.div>
      <p className="text-sm md:text-base font-medium text-gray-700 mt-1">
        {label}
      </p>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <div className="w-full mt-20">
      <div className="w-full bg-blue-50 rounded-xl py-8 px-6 md:px-10 lg:px-16 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <CounterStat
            to={30}
            suffix="K+"
            label="App Download"
            icon={<Download size={32} />}
          />
          <CounterStat
            to={1000}
            suffix="+"
            label="Customer Reviews"
            icon={<Star size={32} />}
          />
          <CounterStat
            to={9}
            suffix="+"
            label="Work Experience"
            icon={<BriefcaseBusiness size={32} />}
          />
          <CounterStat
            to={200}
            suffix="K+"
            label="Trading Community"
            icon={<Users size={32} />}
          />
        </div>
      </div>
    </div>
  );
};
