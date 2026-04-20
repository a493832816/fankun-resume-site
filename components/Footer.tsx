"use client";

import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t, language } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-text-dim">
          © {currentYear} {language === "zh" ? "范坤" : "Frank Fan"}. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-text-dim">
          <a href="mailto:493832816@qq.com" className="hover:text-accent transition-colors">✉️ {t("email")}</a>
          <span className="hover:text-accent transition-colors">📱 {t("phone")}</span>
        </div>
      </div>
    </footer>
  );
}
