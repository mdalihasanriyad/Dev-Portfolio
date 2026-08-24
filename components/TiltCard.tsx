"use client";

import { useRef, useState } from "react";

export default function TiltCard({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width;
    const my = (e.clientY - rect.top) / rect.height;
    setRot({ x: 8 - my * 16, y: -8 + mx * 16 });
  };

  const reset = () => setRot({ x: 0, y: 0 });

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        transform: `perspective(800px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
        transition: "transform 0.25s ease-out",
      }}
      className={className}
    >
      {children}
    </a>
  );
}
