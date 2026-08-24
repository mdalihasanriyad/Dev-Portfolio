"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Open to freelance & full-time roles",
  "Building fast, reliable web apps",
  "Turning ideas into shipped products",
];

export default function RoleTyping() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    const speed = deleting ? 30 : 45;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <p className="font-mono text-sm text-paper-muted">
      <span className="text-amber">$</span> status --current{" "}
      <span className="code-caret text-paper">{text}</span>
    </p>
  );
}
