"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

type SearchItem = {
  title: string;
  slug: string;
  category: string;
};

// Mock data – replace with CMS/Contentlayer later
const MOCK_POSTS: SearchItem[] = [
  { title: "AI Growth Trends for 2025", slug: "/blog/ai-growth-2025", category: "AI" },
  { title: "Lenis + Framer Motion Scroll Sync Guide", slug: "/blog/lenis-scroll-sync", category: "Animations" },
  { title: "Designing Awwwards-Level Interfaces", slug: "/blog/awwwards-design", category: "UI/UX" },
  { title: "Next.js 15 SEO Setup", slug: "/blog/next15-seo", category: "Dev" },
];

export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = MOCK_POSTS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  // Toggle search palette with CMD/CTRL + K
  const handleShortcut = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [handleShortcut]);

  return (
    <>
      {/* BUTTON (OPTIONAL) */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 hover:bg-black/80 transition"
      >
        <Search size={16} />
        Search
      </button>

      {/* OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-start justify-center p-5"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Search the blog</h2>
                <button onClick={() => setOpen(false)}>
                  <X className="w-6 h-6 text-gray-600 hover:text-black transition" />
                </button>
              </div>

              {/* INPUT */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search posts..."
                  className="w-full pl-10 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-black/30 text-black"
                />
              </div>

              {/* RESULTS */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06 } },
                }}
                className="space-y-2"
              >
                {results.length > 0 ? (
                  results.map((item) => (
                    <motion.a
                      key={item.slug}
                      href={item.slug}
                      variants={{
                        hidden: { opacity: 0, y: 6 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="block p-4 rounded-xl border hover:bg-gray-50 transition group"
                    >
                      <p className="font-medium text-black group-hover:text-blue-600 transition">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </motion.a>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-6">No results found.</p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
