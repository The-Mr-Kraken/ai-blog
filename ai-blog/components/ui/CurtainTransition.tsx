"use client";

import { motion } from "framer-motion";

export default function CurtainTransition() {
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
        className="fixed inset-0 bg-primary origin-bottom z-[9999]"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1], delay: 0.1 }}
        className="fixed inset-0 bg-primary origin-top z-[9998]"
      />
    </>
  );
}
