"use client";

import React from "react";

type MediaType = "video" | "gif" | "image";

interface MediaContainerProps {
  type: MediaType;
  src: string;
  alt?: string;
  className?: string;
}

export const MediaContainer = ({
  type,
  src,
  alt = "",
  className = "",
}: MediaContainerProps) => {
  return (
    <div className={`w-full h-full overflow-hidden ${className}`}>
      {type === "video" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={src} type={`video/${src.split(".").pop()}`} />
          Your browser does not support videos.
        </video>
      ) : type === "gif" ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
};
