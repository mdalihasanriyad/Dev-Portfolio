"use client";

import { useEffect, useRef, useState } from "react";

const LAYERS = [
  { label: "UI / CLIENT", detail: "React · Next.js · Tailwind", tint: "border-amber/50" },
  { label: "API", detail: "Node.js · REST · GraphQL", tint: "border-teal/60" },
  { label: "DATA", detail: "PostgreSQL · Redis", tint: "border-rose/50" },
  { label: "INFRA", detail: "Docker · CI/CD · Cloud", tint: "border-paper-muted/40" },
];

export default function StackVisual({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 48, z: -38 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setRot({ x: 48 - py * 14, z: -38 + px * 14 });
  };

  const reset = () => setRot({ x: 48, z: -38 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`relative ${compact ? "h-64" : "h-80 md:h-[26rem]"} w-full select-none`}
      style={{ perspective: "1200px" }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 md:gap-4 transition-transform duration-300 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rot.x}deg) rotateZ(${rot.z}deg)`,
        }}
      >
        {LAYERS.map((layer, i) => (
          <div
            key={layer.label}
            className={`stack-layer group w-56 md:w-64 rounded-md border ${layer.tint} bg-ink-elevated/90 px-4 py-3 shadow-[0_18px_30px_-12px_rgba(0,0,0,0.6)] animate-layer-drift hover:scale-105 transition-[opacity,transform] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]`}
            style={{
              animationDelay: `${i * 0.4}s`,
              transitionDelay: `${i * 0.12}s`,
              transform: `translateZ(${i * -26}px) ${visible ? "translateY(0)" : "translateY(-30px)"}`,
              opacity: visible ? 1 : 0,
            }}
          >
            <p className="font-mono text-[10px] tracking-[0.2em] text-paper-muted">
              {layer.label}
            </p>
            <p className="font-mono text-xs mt-1 text-paper/90">{layer.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
