"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const LAYERS = [
  {
    key: "client",
    label: "UI / Client",
    tint: "border-amber text-amber",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux / Zustand"],
  },
  {
    key: "api",
    label: "API / Server",
    tint: "border-teal text-teal",
    skills: ["Node.js", "Express", "REST", "GraphQL", "Authentication & Authorization"],
  },
  {
    key: "data",
    label: "Data",
    tint: "border-rose text-rose",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma / ORM design"],
  },
  {
    key: "infra",
    label: "Infra / Tooling",
    tint: "border-paper-muted text-paper",
    skills: ["Docker", "GitHub Actions / CI-CD", "AWS / Vercel", "Testing (Jest/Playwright)"],
  },
];

export default function Skills() {
  const [active, setActive] = useState(LAYERS[0].key);
  const current = LAYERS.find((l) => l.key === active)!;

  return (
    <section id="stack" className="py-20 md:py-28 border-t border-slate/60 bg-ink-elevated/40">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-teal">02. STACK</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 max-w-xl">
            One product, four layers I'm comfortable in.
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-[0.45fr_0.55fr] gap-10 items-center">
          <Reveal delay={100} className="grid grid-cols-2 md:flex md:flex-col gap-3">
            {LAYERS.map((layer) => (
              <button
                key={layer.key}
                onClick={() => setActive(layer.key)}
                className={`relative w-full text-left px-5 py-4 rounded-md border transition-all duration-200 font-mono text-sm hover:translate-x-1 active:scale-[0.97] ${
                  active === layer.key
                    ? `bg-ink ${layer.tint} border-current`
                    : "border-slate/60 text-paper-muted hover:border-slate"
                }`}
              >
                {layer.label}
              </button>
            ))}
          </Reveal>

          <Reveal delay={200}>
            <div className="border border-slate/60 rounded-md p-8 bg-ink min-h-[220px] overflow-hidden">
              <div key={current.key} className="tab-content-fade">
                <p className={`font-mono text-xs tracking-[0.2em] ${current.tint}`}>
                  {current.label.toUpperCase()}
                </p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {current.skills.map((skill, i) => (
                    <li
                      key={skill}
                      className="text-sm md:text-base text-paper flex items-center gap-2 animate-fade-in"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <span className="w-1 h-1 rounded-full bg-paper-muted" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
