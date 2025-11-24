"use client";

import { useEffect, useState } from "react";

// Tailwind default breakpoints (px)
type TailwindBreakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

const breakpoints: Record<TailwindBreakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useIsMobile(breakpoint: TailwindBreakpoint | number = "md") {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const breakpointValue =
      typeof breakpoint === "string" ? breakpoints[breakpoint] : breakpoint;

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpointValue);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakpoint]);

  return isMobile;
}
