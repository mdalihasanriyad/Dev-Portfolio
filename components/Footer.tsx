export default function Footer() {
  return (
    <footer className="border-t border-slate/60 py-8">
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs text-paper-muted">
        <p>© {new Date().getFullYear()} Md Ali Hasan Riyad. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
