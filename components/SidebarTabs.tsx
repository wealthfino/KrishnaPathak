"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideTabsProps {
  items: { title: string; slug: string }[];
}

export default function SideTabs({ items }: SideTabsProps) {
  const pathname = usePathname();

  return (
    <>
      {items.map(({ title, slug }) => {
        const isActive = pathname === `/Policies/${slug}`;

        return (
          <Link
            key={slug}
            href={`/Policies/${slug}`}
            className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer ${
              isActive
                ? "bg-[#7ac678] text-[#1f2b5e]"
                : "bg-[#18181b] text-gray-300 hover:bg-[#1f2b5e]"
            }`}
          >
            {title}
          </Link>
        );
      })}
    </>
  );
}
