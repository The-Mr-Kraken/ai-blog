"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const textVariant = {
  hidden: { y: "100%", opacity: 0 },
  show: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" }
  })
};

export default function HeroSection() {
  const title = "AI News & Growth Insights for the Future";

  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6">
      <h1 className="font-grotesk text-6xl leading-[1.1] overflow-hidden">
        {title.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={textVariant}
            initial="hidden"
            animate="show"
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <div className="mt-10">
        <MagneticButton label="Explore Articles" href="/blog" />
      </div>
    </section>
  );
}
