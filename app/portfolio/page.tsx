"use client";

import { useI18n } from "@/lib/i18n";
import Link from "next/link";

interface PortfolioItem {
  slug: string;
  emoji: string;
  titleKey: string;
  descKey: string;
  tagsKey: string;
  year: string;
  type: "app" | "project";
}

const portfolioItems: PortfolioItem[] = [
  {
    slug: "xiyouji",
    emoji: "🗺️",
    titleKey: "portfolio_xiyouji_title",
    descKey: "portfolio_xiyouji_desc",
    tagsKey: "portfolio_xiyouji_tags",
    year: "2025",
    type: "app",
  },
];

export default function PortfolioPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-accent mb-2 font-[family-name:var(--font-heading)]">
        {t("portfolio_title")}
      </h1>
      <p className="text-text-secondary mb-12">{t("portfolio_subtitle")}</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <Link
            key={item.slug}
            href={`/portfolio/${item.slug}`}
            className="group bg-bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all card-hover"
          >
            <div className="text-4xl mb-4">{item.emoji}</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-text-dim bg-bg-primary px-2 py-0.5 rounded">
                {item.year}
              </span>
              <span className="text-xs text-text-dim bg-bg-primary px-2 py-0.5 rounded">
                {item.type === "app" ? t("portfolio_type_app") : t("portfolio_type_project")}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
              {t(item.titleKey)}
            </h3>
            <p className="text-sm text-text-secondary mb-4 line-clamp-3">
              {t(item.descKey)}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {t(item.tagsKey).split(",").map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
