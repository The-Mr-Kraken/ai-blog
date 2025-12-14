// lib/scroll.ts
"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { useScroll, useSpring, MotionValue } from "framer-motion";

export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 1.4,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};

// Hook → sync Lenis scroll with Framer Motion
export const useLenisScroll = (): MotionValue<number> => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.5,
  });

  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);

  return smoothProgress;
};
