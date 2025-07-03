"use client";

import { motion } from "framer-motion";
import SideTabs from "../../../components/SidebarTabs";
import { policies } from "../../../components/PolicyData";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ScrollToTop from "../../../components/ScrollToTop";

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="bg-blue-50 pt-40">
      <ScrollToTop />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="text-center px-8"
      >
        <div className="inline-flex flex-col justify-center text-center mb-12">
          {/* Decorative Lines */}
          <div className="w-24 h-1 bg-[#7ac678] rounded-full mb-2" />
          <h2 className="text-4xl md:text-5xl text-[#1f2b5e] font-extrabold pb-3">
            Our{" "}
            <span className="animate-gradient bg-gradient-to-l from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-clip-text text-transparent px-1">
              Policies
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#1f2b5e] rounded-full mt-2 ml-auto" />
        </div>
        <p className="text-base font-medium md:text-lg text-[#1f2b5e] max-w-2xl mx-auto mb-14">
          Explore our comprehensive set of policies that ensure transparency,
          compliance, and protection for all our clients. Stay informed about
          our terms, regulatory guidelines, grievance redressal procedures, and
          investor rights.
        </p>
      </motion.div>

      {/* Main Layout Section */}
      <div className="flex flex-col lg:flex-row min-h-screen bg-blue-50 text-white">
        {/* Sidebar */}
        <div className="lg:w-1/4 w-full bg-blue-50 lg:border-r-2 border-t-2 border-[#18181b] px-4 py-6 space-y-4 max-h-[300px] lg:max-h-none overflow-y-auto scroll-hidden">
          <SideTabs items={policies} />
        </div>

        {/* Content Area */}
        <div className="lg:w-3/4 p-6 w-full border-t-2 border-[#18181b]">
          <div
            ref={contentRef}
            className="bg-[#18181b] text-blue-50 p-6 rounded-md overflow-y-auto h-[100vh] scroll-hidden"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
