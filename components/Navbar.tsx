"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const navItems = [
    { href: "/", labelKey: "nav_home" },
    { href: "/projects", labelKey: "nav_projects" },
    { href: "/analysis", labelKey: "nav_analysis" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-accent hover:text-accent-secondary transition-colors font-[family-name:var(--font-heading)]">
            {language === "zh" ? "范坤" : "Frank Fan"}
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                className={`text-sm font-medium transition-colors ${pathname === item.href ? "text-accent" : "text-text-secondary hover:text-text-primary"}`}>
                {t(item.labelKey)}
              </Link>
            ))}
            <button onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-primary border border-border hover:border-accent/50 transition-all">
              <span className="text-xl">{language === "zh" ? "🇺🇸" : "🇨🇳"}</span>
              <span className="text-sm font-medium">{language === "zh" ? "English" : "中文"}</span>
            </button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-text-secondary hover:text-text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                className={`block py-2 text-sm font-medium ${pathname === item.href ? "text-accent" : "text-text-secondary hover:text-text-primary"}`}>
                {t(item.labelKey)}
              </Link>
            ))}
            <button onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
              className="flex items-center gap-2 w-full px-3 py-2 mt-2 text-sm font-medium text-text-secondary">
              <span>{language === "zh" ? "🇺🇸" : "🇨🇳"}</span>
              <span>{language === "zh" ? "切换到英文" : "Switch to Chinese"}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
