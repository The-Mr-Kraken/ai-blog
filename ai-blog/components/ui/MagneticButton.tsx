"use client";

import Link from "next/link";
import { useRef } from "react";

export default function MagneticButton({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const btn = ref.current!;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    const btn = ref.current!;
    btn.style.transform = "translate(0px, 0px)";
  };

  return (
    <Link
      href={href}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="
        inline-block px-6 py-3 rounded-lg bg-accent text-white 
        font-inter text-sm shadow-lg transition-all
      "
    >
      {label}
    </Link>
  );
}
