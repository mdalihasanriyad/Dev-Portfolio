"use client";

const ITEMS = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "NODE.JS",
  "POSTGRESQL",
  "TAILWIND",
  "GRAPHQL",
  "DOCKER",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="relative border-y border-slate/60 py-5 overflow-hidden bg-ink-elevated/50">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-ink-elevated to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-ink-elevated to-transparent z-10" />
      <div className="flex w-max animate-marquee gap-10">
        {[...track, ...track].map((item, i) => (
          <span
            key={i}
            className="font-mono text-sm tracking-[0.2em] text-paper-muted flex items-center gap-10 shrink-0"
          >
            {item}
            <span className="text-amber">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
