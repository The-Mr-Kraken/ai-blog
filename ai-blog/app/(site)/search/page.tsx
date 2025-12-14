"use client";

import { useState } from "react";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = allPosts.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-xl px-6 pt-40 z-[1000]">
      <input
        autoFocus
        type="text"
        placeholder="Search posts..."
        className="w-full border-b border-black/20 bg-transparent text-3xl font-grotesk outline-none pb-4"
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="mt-10 space-y-4">
        {results.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-4 border border-black/10 rounded-xl hover:border-black/30 transition"
          >
            <h3 className="font-grotesk text-xl">{post.title}</h3>
            <p className="text-gray-500">{post.excerpt}</p>
          </Link>
        ))}

        {results.length === 0 && (
          <p className="text-gray-500 mt-10 text-center">No results found.</p>
        )}
      </div>
    </div>
  );
}
