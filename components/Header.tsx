"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [underline, setUnderline] = useState<{ left: number; width: number; visible: boolean }>({
    left: 0,
    width: 0,
    visible: false,
  });
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const nav = navRef.current;
    if (!nav) return;
    const navRect = nav.getBoundingClientRect();
    const rect = e.currentTarget.getBoundingClientRect();
    setUnderline({ left: rect.left - navRect.left, width: rect.width, visible: true });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-slate/70" : "bg-transparent"
      } ${mounted ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}
      style={{ transitionDelay: mounted ? "2s" : "0s" }}
    >
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a href="#top" className="font-mono text-sm tracking-wide text-paper">
          ahriyad<span className="text-amber"></span>
        </a>

        <nav
          ref={navRef}
          className="relative hidden md:flex items-center gap-8 font-mono text-[13px] text-paper-muted"
          onMouseLeave={() => setUnderline((u) => ({ ...u, visible: false }))}
        >
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={handleEnter}
              className="relative hover:text-amber transition-colors py-1"
            >
              <span className="text-amber/70">0{i + 1}.</span> {link.label}
            </a>
          ))}
          <span
            className="absolute -bottom-0.5 h-px bg-amber transition-all duration-300 ease-out"
            style={{
              left: underline.left,
              width: underline.width,
              opacity: underline.visible ? 1 : 0,
            }}
          />
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-amber/60 text-amber text-[13px] font-mono px-4 py-2 rounded-sm hover:bg-amber hover:text-ink hover:scale-105 active:scale-95 transition-all"
        >
          Hire me
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-paper w-8 h-8 flex flex-col justify-center gap-1.5"
        >
          <span className={`h-px w-full bg-paper transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-full bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-full bg-paper transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      <nav
        className={`md:hidden bg-ink-elevated border-t border-slate/70 flex flex-col gap-4 font-mono text-sm overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-out ${
          open ? "max-h-96 opacity-100 px-6 py-6" : "max-h-0 opacity-0 px-6 py-0"
        }`}
      >
        {LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-paper-muted hover:text-amber"
          >
            <span className="text-amber/70">0{i + 1}.</span> {link.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)} className="text-amber">
          Hire me →
        </a>
      </nav>
    </header>
  );
}
