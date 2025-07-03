"use client";

import { useRouter, usePathname } from "next/navigation";
import { Calculator } from "lucide-react";
import { useLoading } from "@/app/context/LoadingContext";
import { useEffect, useRef, useState } from "react";

export default function CalculatorMenuButton() {
  const { setIsLoading } = useLoading();
  const router = useRouter();
  const pathname = usePathname();
  const [showLabel, setShowLabel] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Auto-hide loader after navigation
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  const handleNavigate = (url: string) => {
    if (pathname !== url) {
      setIsLoading(true);
      router.push(url);
    }
    setShowOptions(false); // close options panel
  };

  // Close everything on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowLabel(false);
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-18 right-4 md:bottom-23 md:right-6 z-50 flex flex-col items-end space-y-2"
    >
      {/* Options Panel */}
      {showOptions && (
        <div className="bg-[#18181b] p-4 rounded-xl shadow-xl space-y-3 transition-all w-48">
          <button
            onClick={() => handleNavigate("/SIPCalculator")}
            className="text-white bg-blue-600 hover:bg-blue-700 font-semibold px-4 py-2 rounded-lg w-full cursor-pointer"
          >
            SIP Calculator
          </button>
          <button
            onClick={() => handleNavigate("/ROICalculator")}
            className="text-white bg-purple-600 hover:bg-purple-700 font-semibold px-4 py-2 rounded-lg w-full cursor-pointer"
          >
            ROI Calculator
          </button>
          <button
            onClick={() => handleNavigate("/EMICalculator")}
            className="text-white bg-blue-600 hover:bg-blue-700 font-semibold px-4 py-2 rounded-lg w-full cursor-pointer"
          >
            EMI Calculator
          </button>
        </div>
      )}

      {/* Main Button */}
      <span
        onMouseEnter={() => {
          if (!showOptions) setShowLabel(true);
        }}
        onMouseLeave={() => {
          if (!showOptions) setShowLabel(false);
        }}
        onClick={() => {
          setShowOptions(!showOptions);
          setShowLabel(false);
        }}
        className="group flex items-center space-x-2 cursor-pointer"
      >
        {/* Label on Hover */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            showLabel ? "max-w-[160px]" : "max-w-0"
          }`}
        >
          <span className="bg-gradient-to-br from-purple-600 to-blue-600 text-white text-base md:text-lg text-center font-semibold px-4 py-2 rounded-l-full shadow-lg whitespace-nowrap">
            Calculators
          </span>
        </div>

        {/* Icon */}
        <div className="h-12 w-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_24px_#a855f7]">
          <Calculator className="w-6 h-6 text-white group-hover:rotate-6 transition-transform duration-300" />
        </div>
      </span>
    </div>
  );
}
