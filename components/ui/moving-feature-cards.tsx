"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingFeatureCards = ({
  children,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  children: React.ReactNode[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    getDirection();
    getSpeed();
    setStart(true);
  }, []);

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    if (!containerRef.current) return;
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll-feature",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {React.Children.map(children, (child, idx) => (
          <li key={idx} className="shrink-0">
            {child}
          </li>
        ))}
        {React.Children.map(children, (child, idx) => (
          <li key={`clone-${idx}`} className="shrink-0">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};
