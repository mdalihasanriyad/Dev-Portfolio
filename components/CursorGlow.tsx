"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const move = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[60] w-72 h-72 rounded-full transition-transform duration-300 ease-out"
      style={{
        background:
          "radial-gradient(circle, rgba(232,163,61,0.10) 0%, rgba(232,163,61,0) 70%)",
      }}
    />
  );
}
