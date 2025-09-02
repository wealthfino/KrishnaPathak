"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BackgroundGradient } from "./ui/background-gradient";
import { useLoading } from "@/app/context/LoadingContext";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Blogs", path: "/Blogs" },
  { name: "Charts", path: "/Charts" },
  { name: "About", path: "/About" },
  { name: "Pricing", path: "/Subscription" },
  { name: "Policies", path: "/Policies" },
  { name: "Contact", path: "/Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { setIsLoading } = useLoading();

  // 👇 scroll state
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up → show navbar
        setShowNavbar(true);
      }

      // 👇 auto show after stop scrolling
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowNavbar(true);
      }, 500); // delay before showing again

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setIsLoading(false);
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -120 }} // 👈 slide up/down
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full md:h-[80px] fixed top-8 z-50 bg-white/70 backdrop-blur-3xl shadow-lg px-4 sm:px-8 py-2 md:py-4"
    >
      <div className="max-w-7xl md:h-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <span
          onClick={() => {
            setIsLoading(true);
            router.push("/");
          }}
          className="cursor-pointer"
        >
          <div className="text-2xl font-bold w-[80px]">
            <img src="/assets/logo-no-bg.png" alt="WealthFino logo" />
          </div>
        </span>

        {/* Desktop Nav Items */}
        <motion.div
          onMouseLeave={() => setHoveredIndex(null)}
          className="hidden md:flex relative lg:gap-4 gap-1 text-lg font-medium"
        >
          {navItems.map((item, idx) => (
            <span
              key={item.path}
              onClick={() => {
                if (pathname !== item.path) {
                  setIsLoading(true);
                  router.push(item.path);
                }
              }}
              className="cursor-pointer"
            >
              <motion.div
                onMouseEnter={() => setHoveredIndex(idx)}
                className="relative px-2 lg:px-4 py-1"
              >
                {/* Background hover animation */}
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-[#d9dfde] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div
                  className={`relative z-10 ${
                    pathname === item.path ||
                    (item.path === "/Policies" &&
                      pathname.startsWith("/Policies"))
                      ? "text-green-500"
                      : "text-[#1f2b5e]"
                  }`}
                >
                  {item.name}
                </div>
              </motion.div>
            </span>
          ))}
        </motion.div>

        {/* Download Button */}
        <div className="hidden md:block">
          <Link href={"https://wealthfino.rpy.club/"} rel="noopener noreferrer">
            <BackgroundGradient
              className="rounded-full flex justify-center items-center text-white w-full px-4 py-2 bg-[#18181b] cursor-pointer"
              innerContainer1ClassName="rounded-full"
              innerContainer2ClassName="rounded-full"
            >
              <span className="text-base font-medium">Download</span>
            </BackgroundGradient>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-[#1f2b5e] w-6 h-6 mt-[6px]" />
            ) : (
              <Menu className="text-[#1f2b5e] w-6 h-6 mt-[6px]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden flex flex-col text-center"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                className={`text-lg font-semibold py-2 mb-5 bg-transparent border rounded-lg shadow-lg ${
                  pathname === item.path ||
                  (item.path === "/Policies" &&
                    pathname.startsWith("/Policies"))
                    ? "text-green-500 border-green-500"
                    : "text-[#1f2b5e] border-[#1f2b5e]"}
                `}
              >
                <span
                  onClick={() => {
                    if (pathname !== item.path) {
                      setIsLoading(true);
                      router.push(item.path);
                    }
                  }}
                  className="block w-full cursor-pointer"
                >
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
