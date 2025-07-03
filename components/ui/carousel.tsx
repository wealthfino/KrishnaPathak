"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title?: string;
  button?: string;
  src: string;
  href?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (current === index) {
        videoRef.current
          .play()
          .catch((e) => console.log("Autoplay prevented:", e));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [current, index]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const videoLoaded = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    // Only navigate if clicking directly on the video container (not title/button)
    if (slide.href && e.currentTarget === e.target) {
      window.location.href = slide.href;
    }
  };

  const { src, button, title, href } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        {/* Title and Button Container - Positioned at Top */}
        {(title || button) && (
          <article
            className={`absolute top-0 left-0 w-full p-[4vmin] transition-opacity duration-1000 ease-in-out z-20 ${
              current === index ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="flex flex-col items-center">
              {title && (
                <h2 className="text-lg md:text-2xl lg:text-4xl text-[#18181b] font-semibold relative mb-1 md:mb-4">
                  {title}
                </h2>
              )}
              {button && (
                <button
                  className="px-2 md:px-4 md:py-2 w-fit mx-auto sm:text-base md:text-lg text-[#18181b] bg-[#13B5E8] h-6 md:h-12 border-none text-xs flex justify-center items-center rounded-lg hover:shadow-lg cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (href) window.location.href = href;
                  }}
                >
                  {button}
                </button>
              )}
            </div>
          </article>
        )}

        {/* Video Container */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
          onClick={handleVideoClick}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            muted
            loop
            playsInline
            onLoadedData={videoLoaded}
            src={src}
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 cursor-pointer ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-blue-50" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function VideoCarousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearAndResetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    clearAndResetTimeout();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, slides.length]);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={() => {
            handlePreviousClick();
            clearAndResetTimeout(); // Reset timer on click
          }}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={() => {
            handleNextClick();
            clearAndResetTimeout(); // Reset timer on click
          }}
        />
      </div>
    </div>
  );
}
