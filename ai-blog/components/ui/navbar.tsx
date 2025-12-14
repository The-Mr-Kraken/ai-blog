"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 80);
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <motion.nav
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        fixed top-0 left-1/2 -translate-x-1/2 z-50
        backdrop-blur-xl bg-white/40 border border-white/20
        rounded-xl px-6 py-3 shadow-lg 
      "
    >
      <div className="flex gap-8 font-inter text-sm">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/search">Search</Link>
      </div>
    </motion.nav>
  );
}
