"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import StaggerGroup from "./StaggerGroup";

const HISTORY = [
  {
    period: "2026 — Present",
    role: "Full-Stack Developer",
    org: "Betopia Group",
    detail:
      "Building and maintaining scalable web applications, APIs, and modern user interfaces while working across both frontend and backend systems.",
  },
  {
    period: "2025 — 2026",
    role: "Web Developer",
    org: "Creative Company",
    detail:
      "Developed responsive websites and web applications, implemented frontend and backend features, and collaborated on delivering reliable digital solutions.",
  },
  {
    period: "2024 — 2025",
    role: "Juior Web Developer",
    org: "Bindas Shopping Ltd",
    detail:
      "Worked on e-commerce and web development projects, focusing on responsive interfaces, website functionality, and improving the overall user experience.",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineScale, setLineScale] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const start = viewportH * 0.8;
      const total = rect.height + viewportH * 0.2;
      const progress = (start - rect.top) / total;
      setLineScale(Math.min(Math.max(progress, 0), 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate/60 bg-ink-elevated/40">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-teal">04. EXPERIENCE</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 max-w-xl">
            Where the work happened, in order.
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-12 max-w-2xl">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate/60 hidden md:block" />
          <div
            className="absolute left-0 top-0 w-px bg-amber origin-top hidden md:block transition-transform duration-150 ease-out"
            style={{ height: "100%", transform: `scaleY(${lineScale})` }}
          />

          <StaggerGroup>
            {HISTORY.map((entry) => (
              <div
                key={entry.period}
                className="flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-10 py-6 border-t border-slate/60 first:border-t-0 md:pl-8 relative"
              >
                <span className="absolute -left-[5px] top-9 w-[10px] h-[10px] rounded-full bg-amber hidden md:block" />
                <span className="font-mono text-sm text-amber shrink-0 sm:w-32">
                  {entry.period}
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg md:text-xl">
                    {entry.role}
                  </h3>
                  <p className="font-mono text-xs text-teal mt-1">{entry.org}</p>
                  <p className="text-paper-muted text-sm md:text-base mt-2 leading-relaxed">
                    {entry.detail}
                  </p>
                </div>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
