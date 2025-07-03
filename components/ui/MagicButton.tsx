"use client";

import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  otherClassesSpan,
  otherClassesButton,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  otherClassesSpan?: string;
  otherClassesButton?: string;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[3px] focus:outline-none ${otherClassesButton}`}
    >
      {/* Static gradient border */}
      <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#39FF14_0%,#ADFF2F_25%,#CCFF00_50%,#ADFF2F_75%,#39FF14_100%)]" />

      {/* Button inner content */}
      <span
        className={`relative inline-flex h-full w-full items-center justify-center rounded-lg bg-[#18181b] px-6 py-1 font-medium text-white backdrop-blur-3xl cursor-pointer ${otherClassesSpan}`}
      >
        <div className="flex flex-row justify-center items-center">
          <div className="-translate-x-[10px]">
            {position === "left" && icon}
          </div>
          <div className="-translate-y-[1px]">{title}</div>
          {position === "right" && icon}
        </div>
      </span>
    </button>
  );
};

export default MagicButton;
