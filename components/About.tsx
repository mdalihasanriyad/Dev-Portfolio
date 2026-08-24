import Reveal from "./Reveal";
import StaggerGroup from "./StaggerGroup";

const FACTS = [
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Focus", value: "Full-stack web apps" },
  { label: "Experience", value: "4+ years building products" },
  { label: "Availability", value: "Freelance & full-time" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate/60">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-[0.4fr_0.6fr] gap-10 md:gap-16">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-teal">01. ABOUT</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            I like building things that hold up under real use.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-paper-muted leading-relaxed text-base md:text-lg">
            I'm a full-stack web developer focused on building modern, scalable web experiences from the ground up. I’ve worked on e-commerce platforms, business websites, and custom web applications, combining thoughtful architecture with clean, intuitive interfaces.
          </p>
          <p className="text-paper-muted leading-relaxed text-base md:text-lg mt-4">
            I enjoy turning complex ideas into reliable digital products that are fast, responsive, and easy to use. From planning the backend and APIs to crafting polished frontend experiences, I care about every part of the product journey.
          </p>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="border-l border-slate/70 pl-4 transition-all hover:translate-x-1 hover:border-amber"
              >
                <dt className="font-mono text-[11px] tracking-widest text-paper-muted">
                  {fact.label.toUpperCase()}
                </dt>
                <dd className="mt-1 text-sm md:text-base text-paper">
                  {fact.value}
                </dd>
              </div>
            ))}
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  );
}
