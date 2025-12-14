"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { Post } from "contentlayer/generated";

export default function BentoGrid({ posts }: { posts: Post[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        show: {
          transition: { staggerChildren: 0.12 }
        }
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
    >
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </motion.div>
  );
}
