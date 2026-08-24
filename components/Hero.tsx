"use client";

import { useEffect, useRef, useState } from "react";
import StackVisual from "./StackVisual";
import MagneticButton from "./MagneticButton";
import RoleTyping from "./RoleTyping";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [blobOffset, setBlobOffset] = useState({ a: 0, b: 0 });

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1);
      setBlobOffset({ a: progress * 120, b: progress * -80 });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stagger = (i: number) => ({
    transitionDelay: mounted ? `${1.7 + i * 0.12}s` : "0s",
  });

  return (
    <section ref={sectionRef} id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* ambient animated blobs */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 bg-teal/20 rounded-full blur-3xl animate-blob"
        style={{ transform: `translateY(${blobOffset.a}px)` }}
      />
      <div
        className="pointer-events-none absolute top-40 right-0 w-96 h-96 bg-amber/10 rounded-full blur-3xl animate-blob"
        style={{ transform: `translateY(${blobOffset.b}px)`, animationDelay: "2s" }}
      />

      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-8 items-center relative">
        <div>
          <p
            className="font-mono text-xs tracking-[0.25em] text-teal mb-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ ...stagger(0), opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(28px)" }}
          >
            FULL&nbsp;STACK&nbsp;WEB&nbsp;DEVELOPER
          </p>

          <h1
            className="font-display font-bold leading-[1.02] text-[13vw] md:text-[4.4rem] lg:text-[5rem] tracking-tight transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ ...stagger(1), opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(28px)" }}
          >
            Md Ali Hasan
            <br />
            <span className="text-amber">Riyad</span>
          </h1>

          <p
            className="mt-6 max-w-md text-paper-muted text-base md:text-lg leading-relaxed transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ ...stagger(2), opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(28px)" }}
          >
            I design and build complete web products — from the database
            schema to the pixel a user taps. Currently building reliable,
            fast interfaces with a strong backend underneath.
          </p>

          <div
            className="mt-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ ...stagger(3), opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(28px)" }}
          >
            <RoleTyping />
          </div>

          <div
            className="mt-9 flex flex-wrap gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ ...stagger(4), opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(28px)" }}
          >
            <MagneticButton
              href="#work"
              className="inline-flex items-center gap-2 bg-amber text-ink font-mono text-sm px-6 py-3 rounded-sm hover:bg-paper transition-colors"
            >
              View my work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 border border-slate text-paper font-mono text-sm px-6 py-3 rounded-sm hover:border-amber hover:text-amber transition-colors"
            >
              Get in touch
            </MagneticButton>
          </div>
        </div>

        <div
          className="transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transitionDelay: mounted ? "1.9s" : "0s",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0.9)",
          }}
        >
          <StackVisual />
        </div>
      </div>
    </section>
  );
}
