"use client";

import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[24rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  imagePosition = "center",
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string;
  imagePosition?: string;
}) => {
  const handleClick = () => {
    window.location.href =
      "https://scanx.trade/company/tcs-tata-consultancy-services-ltd";
  };

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border-1 border-neutral-200 p-4 transition duration-200 hover:shadow-xl bg-black shadow-none",
        className
      )}
      onClick={() => handleClick()}
    >
      {image ? (
        <div className="flex-1 w-full h-full min-h-[10rem] rounded-xl overflow-hidden">
          <img
            src={image}
            alt={typeof title === "string" ? title : ""}
            className={cn("w-full h-full object-cover", {
              "object-left": imagePosition === "left",
              "object-left-top": imagePosition === "left-top",
              "object-left-bottom": imagePosition === "left-bottom",
              "object-right": imagePosition === "right",
              "object-right-top": imagePosition === "right-top",
              "object-right-bottom": imagePosition === "right-bottom",
              "object-center": imagePosition === "center",
              "object-top": imagePosition === "top",
              "object-bottom": imagePosition === "bottom",
            })}
          />
        </div>
      ) : (
        header
      )}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans text-lg font-bold text-white">
          {title}
        </div>
        <div className="font-sans text-md font-normal text-white">
          {description}
        </div>
      </div>
    </div>
  );
};
