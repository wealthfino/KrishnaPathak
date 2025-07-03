"use client";

import { cn } from "../../lib/utils";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  innerContainer1ClassName,
  innerContainer2ClassName,
  isButton = false,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  isButton?: boolean;
  innerContainer1ClassName?: string;
  innerContainer2ClassName?: string;
}) => {
  const hoverClass = isButton
    ? "group-hover/button:opacity-100"
    : "group-hover/card:opacity-100";

  return (
    <div
      className={cn(
        "relative p-[4px] group",
        isButton ? "group/button" : "group/card",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 transition duration-500 blur-xl",
          hoverClass,
          innerContainer1ClassName,
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
          innerContainer2ClassName,
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
