"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const portfolioMeta: Record<string, { emoji: string; titleKey: string }> = {
  xiyouji: { emoji: "🗺️", titleKey: "portfolio_xiyouji_title" },
};

export default function PortfolioItemPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useI18n();
  const meta = portfolioMeta[slug];

  if (!meta) {
    return (
      <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-text-primary mb-4">404</h1>
        <p className="text-text-secondary mb-8">{t("portfolio_not_found")}</p>
        <Link href="/portfolio" className="text-accent hover:underline">
          ← {t("portfolio_back")}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <div className="mb-6">
        <Link href="/portfolio" className="text-sm text-text-secondary hover:text-accent transition-colors">
          ← {t("portfolio_back")}
        </Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-accent mb-6 font-[family-name:var(--font-heading)]">
        {meta.emoji} {t(meta.titleKey)}
      </h1>
      <div className="w-full border border-border rounded-xl overflow-hidden" style={{ height: "calc(100vh - 200px)" }}>
        <iframe
          src={`/portfolio/${slug}/index.html`}
          className="w-full h-full border-0"
          title={t(meta.titleKey)}
        />
      </div>
    </div>
  );
}
