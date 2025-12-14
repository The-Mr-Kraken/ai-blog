"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Post } from "contentlayer/generated";

export default function BlogCard({ post }: { post: Post }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect
  const handleMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `rotateX(${-y / 25}deg) rotateY(${x / 25}deg)`;
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      className="bg-white p-6 rounded-xl shadow-lg cursor-pointer transition-all"
    >
      <Link href={`/blog/${post.slug}`}>
        <h3 className="font-grotesk text-xl">{post.title}</h3>
        <p className="text-gray-600 mt-2">{post.excerpt}</p>
        <span className="text-accent mt-4 block">Read More →</span>
      </Link>
    </motion.div>
  );
}
