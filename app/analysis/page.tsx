"use client";

import { useI18n } from "@/lib/i18n";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

const marketTrends = [
  { year: "2020", ipaas: 12.8, monitoring: 15.2 },
  { year: "2021", ipaas: 15.2, monitoring: 17.8 },
  { year: "2022", ipaas: 18.5, monitoring: 20.5 },
  { year: "2023", ipaas: 22.4, monitoring: 23.8 },
  { year: "2024", ipaas: 27.8, monitoring: 27.2 },
  { year: "2025", ipaas: 34.5, monitoring: 31.0 },
];

const insightKeys = ["integration", "hospital", "observability", "container", "automation", "middleware"];

export default function AnalysisPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-accent mb-2 font-[family-name:var(--font-heading)]">{t("analysis_title")}</h1>
      <p className="text-text-secondary mb-12">{t("analysis_subtitle")}</p>

      {/* Technology Trend Chart */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-text-primary font-[family-name:var(--font-heading)]">{t("analysis_tech_trend")}</h2>
        <div className="bg-bg-card border border-border rounded-xl p-8">
          <svg viewBox="0 0 800 300" className="w-full h-auto">
            {[0, 25, 50, 75, 100].map((y) => (
              <g key={y}>
                <line x1="80" y1={250 - (y / 100) * 200} x2="760" y2={250 - (y / 100) * 200} stroke="#1e293b" strokeWidth="1" />
                <text x="70" y={250 - (y / 100) * 200 + 4} textAnchor="end" fill="#64748b" fontSize="12">{y}</text>
              </g>
            ))}
            {marketTrends.map((d, i) => (
              <text key={i} x={100 + i * 130} y="275" textAnchor="middle" fill="#64748b" fontSize="12">{d.year}</text>
            ))}
            <polyline
              points={marketTrends.map((d, i) => `${100 + i * 130},${250 - (d.ipaas / 60) * 200}`).join(" ")}
              fill="none" stroke="#10b981" strokeWidth="3"
            />
            {marketTrends.map((d, i) => (
              <circle key={i} cx={100 + i * 130} cy={250 - (d.ipaas / 60) * 200} r="5" fill="#10b981" />
            ))}
            <polyline
              points={marketTrends.map((d, i) => `${100 + i * 130},${250 - (d.monitoring / 40) * 200}`).join(" ")}
              fill="none" stroke="#3b82f6" strokeWidth="3"
            />
            {marketTrends.map((d, i) => (
              <circle key={i} cx={100 + i * 130} cy={250 - (d.monitoring / 40) * 200} r="5" fill="#3b82f6" />
            ))}
            <g transform="translate(580, 40)">
              <rect x="0" y="0" width="170" height="70" fill="#0c0c14" stroke="#1e293b" strokeWidth="1" rx="4" />
              <line x1="20" y1="20" x2="50" y2="20" stroke="#10b981" strokeWidth="3" />
              <circle cx="35" cy="20" r="4" fill="#10b981" />
              <text x="60" y="24" fill="#f1f5f9" fontSize="11">{t("analysis_chart_ipaas")}</text>
              <line x1="20" y1="50" x2="50" y2="50" stroke="#3b82f6" strokeWidth="3" />
              <circle cx="35" cy="50" r="4" fill="#3b82f6" />
              <text x="60" y="54" fill="#f1f5f9" fontSize="11">{t("analysis_chart_monitoring")}</text>
            </g>
            <text x="400" y="30" textAnchor="middle" fill="#f1f5f9" fontSize="16" fontWeight="bold">{t("analysis_chart_title")}</text>
          </svg>
        </div>
      </section>

      {/* Architecture Evolution */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-text-primary font-[family-name:var(--font-heading)]">{t("analysis_arch_evo")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-accent mb-4 text-lg">{t("analysis_arch_legacy_cloud")}</h3>
            <ArchitectureDiagram type="hk" />
          </div>
          <div>
            <h3 className="font-bold text-accent mb-4 text-lg">{t("analysis_arch_container")}</h3>
            <ArchitectureDiagram type="hospital" />
          </div>
          <div>
            <h3 className="font-bold text-accent mb-4 text-lg">{t("analysis_arch_mono_micro")}</h3>
            <ArchitectureDiagram type="bmw" />
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-text-primary font-[family-name:var(--font-heading)]">{t("analysis_insights")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {insightKeys.map((key) => (
            <div key={key} className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors card-hover">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-semibold text-lg">{t(`insight_${key}_title`)}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${["integration", "hospital", "observability", "container"].includes(key) ? "bg-green-400/10 text-green-400" : "bg-yellow-400/10 text-yellow-400"}`}>
                  {["integration", "hospital", "observability", "container"].includes(key) ? t("trend_up") : t("trend_stable")}
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed">{t(`insight_${key}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-text-primary font-[family-name:var(--font-heading)]">{t("analysis_takeaways")}</h2>
        <div className="bg-bg-card border border-border rounded-xl p-8">
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full ${i % 2 === 1 ? "bg-accent/20" : "bg-accent-secondary/20"} flex items-center justify-center flex-shrink-0 mt-1`}>
                  <span className={`${i % 2 === 1 ? "text-accent" : "text-accent-secondary"} font-bold`}>{i}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-text-primary">{t(`takeaway${i}_title`)}</h3>
                  <p className="text-text-secondary leading-relaxed">{t(`takeaway${i}_desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Size Forecast */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary font-[family-name:var(--font-heading)]">{t("analysis_market_forecast")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <div className="text-4xl font-bold text-accent-secondary mb-2 font-[family-name:var(--font-heading)]">34.5</div>
            <div className="text-text-secondary mb-2">{t("analysis_market_billion")}</div>
            <div className="text-text-dim text-sm">{t("market_ipaas")}</div>
            <div className="text-accent-secondary text-sm mt-2">↑ 24% YoY</div>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <div className="text-4xl font-bold text-accent-secondary mb-2 font-[family-name:var(--font-heading)]">31.0</div>
            <div className="text-text-secondary mb-2">{t("analysis_market_billion")}</div>
            <div className="text-text-dim text-sm">{t("market_monitoring")}</div>
            <div className="text-accent-secondary text-sm mt-2">↑ 14% YoY</div>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <div className="text-4xl font-bold text-accent-secondary mb-2 font-[family-name:var(--font-heading)]">540</div>
            <div className="text-text-secondary mb-2">{t("analysis_market_billion")}</div>
            <div className="text-text-dim text-sm">{t("market_container")}</div>
            <div className="text-accent-secondary text-sm mt-2">↑ 32% YoY</div>
          </div>
        </div>
      </section>
    </div>
  );
}
