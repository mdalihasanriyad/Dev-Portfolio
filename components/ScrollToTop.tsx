"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full border border-amber/50 bg-ink/90 backdrop-blur-md text-amber flex items-center justify-center font-mono transition-all duration-300 hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-4 scale-75 pointer-events-none"
      }`}
    >
      ↑
    </a>
  );
}
