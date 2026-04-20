"use client";

import { useI18n } from "@/lib/i18n";

const trends = [
  { name: "云原生中间件", nameEn: "Cloud-Native Middleware", data: [20, 30, 42, 55, 68, 78, 88] },
  { name: "API 经济", nameEn: "API Economy", data: [35, 42, 50, 60, 70, 80, 92] },
  { name: "事件驱动架构", nameEn: "Event-Driven Architecture", data: [25, 28, 38, 48, 58, 65, 75] },
  { name: "GitOps / DevOps", nameEn: "GitOps / DevOps", data: [15, 25, 40, 52, 62, 72, 82] },
  { name: "AI 运维 (AIOps)", nameEn: "AIOps", data: [5, 10, 18, 28, 40, 55, 70] },
];

const years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];

function TrendChart({ trend, index }: { trend: typeof trends[0]; index: number }) {
  const maxVal = 100;
  const w = 500;
  const h = 120;
  const padX = 40;
  const padY = 10;
  const chartW = w - padX - 10;
  const chartH = h - padY * 2;

  const points = trend.data
    .map((v, i) => `${padX + (i / (trend.data.length - 1)) * chartW},${padY + chartH - (v / maxVal) * chartH}`)
    .join(" ");

  const areaPoints = `${padX},${padY + chartH} ${points} ${padX + chartW},${padY + chartH}`;

  return (
    <div className="rounded-xl border border-surface-light bg-surface p-5">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">{trend.nameEn}</h3>
        <span className="text-accent font-mono text-sm">{trend.data[trend.data.length - 1]}%</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-28">
        <defs>
          <linearGradient id={`grad-${index}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00e5a0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00e5a0" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 25, 50, 75, 100].map((v) => (
          <line
            key={v}
            x1={padX}
            y1={padY + chartH - (v / maxVal) * chartH}
            x2={w - 10}
            y2={padY + chartH - (v / maxVal) * chartH}
            stroke="#1a1a25"
            strokeWidth="1"
          />
        ))}
        <polygon points={areaPoints} fill={`url(#grad-${index})`} />
        <polyline points={points} fill="none" stroke="#00e5a0" strokeWidth="2" strokeLinejoin="round" />
        {trend.data.map((v, i) => (
          <circle
            key={i}
            cx={padX + (i / (trend.data.length - 1)) * chartW}
            cy={padY + chartH - (v / maxVal) * chartH}
            r="3"
            fill="#0a0a0f"
            stroke="#00e5a0"
            strokeWidth="2"
          />
        ))}
        {years.map((yr, i) => (
          <text
            key={yr}
            x={padX + (i / (years.length - 1)) * chartW}
            y={h - 0}
            textAnchor="middle"
            fill="#888"
            fontSize="9"
          >
            {yr}
          </text>
        ))}
      </svg>
    </div>
  );
}

const insights = [
  {
    title: "中间件云原生化已成定局",
    titleEn: "Middleware Cloud-Native Adoption is Settled",
    desc: "传统中间件正在全面拥抱容器化和 Kubernetes。IBM MQ Uniform Cluster、ACE 的容器化部署方案已成熟，未来 2-3 年将是全面转型的关键窗口期。",
    descEn: "Traditional middleware is fully embracing containerization and Kubernetes. IBM MQ Uniform Cluster and ACE container deployment are mature — the next 2-3 years are critical for full transition.",
  },
  {
    title: "API 经济驱动架构演进",
    titleEn: "API Economy Drives Architecture Evolution",
    desc: "API 网关从简单的流量代理演变为全功能 API 生命周期管理平台。安全、可观测性、灰度发布成为标配能力。",
    descEn: "API gateways evolved from simple traffic proxies to full API lifecycle management platforms. Security, observability, and canary deployments are now standard capabilities.",
  },
  {
    title: "事件驱动架构重塑集成模式",
    titleEn: "Event-Driven Architecture Reshapes Integration",
    desc: "从同步请求-响应模式向异步事件驱动模式转变，Kafka + MQ 混合架构成为企业标配，消息中台概念兴起。",
    descEn: "Shift from sync request-response to async event-driven patterns. Kafka + MQ hybrid architecture becomes enterprise standard, messaging platform concept emerges.",
  },
];

export default function AnalysisPage() {
  const { lang, t } = useI18n();
  const l = lang === "zh";

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-bold">{t.analysis.title}</h1>
        <p className="mt-2 text-muted">{t.analysis.subtitle}</p>
      </div>

      <h2 className="mb-6 text-2xl font-bold">{l ? "技术趋势采纳度" : "Technology Trend Adoption"}</h2>
      <div className="grid gap-6 mb-16">
        {trends.map((tr, i) => (
          <div key={i} className="animate-fade-in-up">
            <TrendChart trend={tr} index={i} />
          </div>
        ))}
      </div>

      <h2 className="mb-6 text-2xl font-bold">{l ? "趋势洞察" : "Trend Insights"}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {insights.map((ins, i) => (
          <div
            key={i}
            className="animate-fade-in-up rounded-xl border border-surface-light bg-surface p-6 hover:border-accent/30 transition-colors"
          >
            <div className="mb-3 text-accent text-2xl">💡</div>
            <h3 className="mb-2 text-lg font-semibold">{l ? ins.title : ins.titleEn}</h3>
            <p className="text-sm text-muted leading-relaxed">{l ? ins.desc : ins.descEn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
