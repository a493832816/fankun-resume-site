"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const { lang, t, toggleLang } = useI18n();
  return (
    <nav className="sticky top-0 z-50 border-b border-surface-light bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-accent">
          {lang === "zh" ? "陈志远" : "Zhiyuan Chen"}
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">{t.nav.home}</Link>
          <Link href="/projects" className="text-sm text-muted hover:text-foreground transition-colors">{t.nav.projects}</Link>
          <Link href="/analysis" className="text-sm text-muted hover:text-foreground transition-colors">{t.nav.analysis}</Link>
          <button
            onClick={toggleLang}
            className="rounded-lg border border-surface-light px-3 py-1.5 text-sm hover:border-accent hover:text-accent transition-all"
          >
            🌐 {lang === "zh" ? "EN" : "中"}
          </button>
        </div>
      </div>
    </nav>
  );
}
