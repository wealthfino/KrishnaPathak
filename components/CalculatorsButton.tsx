"use client";

import { useRouter, usePathname } from "next/navigation";
import { Calculator } from "lucide-react";
import { useLoading } from "@/app/context/LoadingContext";
import { useEffect, useState } from "react";

export default function CalculatorMenuButton() {
  const { setIsLoading } = useLoading();
  const router = useRouter();
  const pathname = usePathname();
  const [showLabel, setShowLabel] = useState(false);

  // Auto-hide loader after navigation
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  const handleNavigate = () => {
    if (pathname !== "/calculators") {
      setIsLoading(true);
      router.push("/calculators"); // 👈 Update this to your desired route
    }
  };

  return (
    <div className="fixed bottom-18 right-4 md:bottom-23 md:right-6 z-50 flex flex-col items-end space-y-2">
      <span
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
        onClick={handleNavigate}
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
