"use client";

import Reveal from "./Reveal";
import StaggerGroup from "./StaggerGroup";
import TiltCard from "./TiltCard";

const PROJECTS = [
  {
    name: "Roc AI",
    role: "Full-stack",
    description:
      "Roc AI is a full-stack AI platform designed to help users write, code, research, and create with AI from a single interface. I built the platform with a focus on a smooth chat experience, scalable architecture, responsive UI, and seamless AI-powered workflows.",
    stack: ["Next.js", "PostgreSQL", "Tailwind"],
    href: "https://rocai.vercel.app/",
  },
  {
    name: "Testnix",
    role: "Frontend",
    description:
      "Testnix is a modern internet speed testing platform that measures download speed, upload speed, and network latency in real time. I built the application with a clean, responsive interface, test history, result sharing, and export functionality for a fast and user-friendly experience.",
    stack: ["React", "Redux", "REST API"],
    href: "https://testnix-net.vercel.app/",
  },
  {
    name: "Heaven Lira",
    role: "Backend",
    description:
      "Heaven Lira is a referral-based business platform focused on product distribution, referral tracking, and commission management. I worked on the backend architecture and business logic for managing referral products, distributor relationships, commission calculations, contributor data, and secure user workflows.",
    stack: ["Node.js", "Express", "MongoDB"],
    href: "https://www.heavenliramarketingltd.com/",
  },
  {
    name: "Speedy Typer",
    role: "Full-stack",
    description:
      "Speedy Typer is a real-time typing speed platform designed to help users measure and improve their typing performance. It provides multiple test modes, live WPM and accuracy tracking, keystroke statistics, error analysis, and account-based settings synchronization for a personalized experience.",
    stack: ["Next.js", "GraphQL", "Docker"],
    href: "https://speedy.ahriyad.top/",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-slate/60">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-teal">03. WORK</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 max-w-xl">
            A few things I've shipped.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.name}>
              <TiltCard
                href={project.href}
                
                className="group block h-full border border-slate/60 rounded-md overflow-hidden hover:border-amber/60 transition-colors bg-ink-elevated/40"
              >
                <div
                  className="relative h-36 md:h-40 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #16202C 0%, #1c2734 50%, #16202C 100%)",
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-amber/10 via-transparent to-teal/10" />
                  <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-3xl text-slate/70 group-hover:text-amber/30 transition-colors duration-500">
                    {project.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>

                <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] tracking-widest text-paper-muted">
                      {project.role.toUpperCase()}
                    </p>
                    <h3 className="font-display font-bold text-xl md:text-2xl mt-1 group-hover:text-amber transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <span className="font-mono text-amber opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all">
                    ↗
                  </span>
                </div>

                <p className="text-paper-muted text-sm md:text-base mt-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-sm border border-slate/60 text-paper-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
