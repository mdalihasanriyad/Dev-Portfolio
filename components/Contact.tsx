import Reveal from "./Reveal";
import StaggerGroup from "./StaggerGroup";
import MagneticButton from "./MagneticButton";

const SOCIALS = [
  {
    label: "Email",
    value: "ahriyadinfo@gmail.com",
    href: "mailto:ahriyadinfo@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/mdalihasanriyad",
    href: "https://github.com/mdalihasanriyad",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mdalihasanriyad",
    href: "https://linkedin.com/in/mdalihasanriyad",
  },
  {
    label: "WhatsApp",
    value: "+880 158-6055882",
    href: "https://wa.me/8801586055882",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-slate/60">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-teal">
            05. CONTACT
          </p>

          <h2 className="font-display font-bold text-4xl md:text-6xl mt-4 max-w-2xl leading-tight">
            Have a project in mind?
            <br />
            Let's build it right.
          </h2>

          <p className="mt-6 text-paper-muted max-w-md text-base md:text-lg">
            I'm currently open to freelance work and full-time roles.
            The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <MagneticButton
            href="mailto:ahriyadinfo@gmail.com"
            className="inline-flex items-center gap-3 mt-10 bg-amber text-ink font-mono text-sm md:text-base px-7 py-4 rounded-sm hover:bg-paper transition-colors"
          >
            ahriyadinfo@gmail.com ↗
          </MagneticButton>
        </Reveal>

        <StaggerGroup className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:-translate-y-1 transition-transform"
            >
              <p className="font-mono text-[11px] tracking-widest text-paper-muted group-hover:text-amber transition-colors">
                {social.label.toUpperCase()}
              </p>

              <p className="text-sm md:text-base text-paper mt-1">
                {social.value}
              </p>
            </a>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}