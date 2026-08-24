"use client";

import { useEffect, useState } from "react";

const LINES = [
  "$ installing dependencies...",
  "$ compiling components...",
  "$ optimizing for the web...",
  "$ ready — welcome",
];

export default function Preloader() {
  const [leaving, setLeaving] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((i) => (i < LINES.length - 1 ? i + 1 : i));
    }, 380);

    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 18, 100));
    }, 140);

    const startLeave = setTimeout(() => setLeaving(true), 1650);
    const finish = setTimeout(() => setRemoved(true), 2350);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      clearTimeout(startLeave);
      clearTimeout(finish);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className="fixed inset-0 z-[70] bg-ink flex items-center justify-center transition-transform duration-700"
      style={{
        transform: leaving ? "translateY(-100%)" : "translateY(0)",
        transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
      }}
    >
      <div className="font-mono text-sm md:text-base w-72 md:w-96">
        <p className="text-amber mb-4">ahriyad.dev</p>
        {LINES.slice(0, lineIndex + 1).map((line, i) => (
          <p key={i} className="text-paper-muted mb-1 animate-fade-in">
            {line}
          </p>
        ))}
        <div className="mt-4 h-[2px] w-full bg-slate/60 overflow-hidden rounded-full">
          <div
            className="h-full bg-amber transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
