'use client';

import { useEffect, useState } from "react";

export function BackToTop({ threshold = 400 }: { threshold?: number }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-neutral-900/80 text-white px-4 py-3 text-sm border border-white/10 backdrop-blur-md hover:bg-neutral-900"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
