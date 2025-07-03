"use client";

import { cn } from "../../lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex min-h-[100vh] flex-col items-center justify-center bg-[#18181b] text-white",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `absolute -inset-[10px] pointer-events-none opacity-40 blur-[6px] filter`,
              showRadialGradient &&
                "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
            )}
            style={{
              backgroundImage: `repeating-linear-gradient(
                100deg,
                #1f2b5e 10%,
                #0d8bb6 20%,
                #7ac678 30%,
                #1f2b5e 40%
              )`,
            }}
          ></div>
        </div>

        {/* Content goes here */}
        {children}
      </div>
    </main>
  );
};
