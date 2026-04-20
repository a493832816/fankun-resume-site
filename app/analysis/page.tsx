import ArchitectureDiagram from "@/components/ArchitectureDiagram";

const industryInsights = [
  {
    title: "系统集成",
    desc: "企业级系统集成从传统 ESB 向云原生 iPaaS 演进，API 管理和事件驱动架构成为主流。Serverless 和边缘计算推动分布式架构创新。",
    trend: "up",
  },
  {
    title: "企业内容管理",
    desc: "ECM 正向智能内容平台转型，AI 驱动的文档理解、自动分类和知识图谱构建成为新增长点。RAG 技术在文档检索领域广泛应用。",
    trend: "up",
  },
  {
    title: "医疗信息化",
    desc: "智慧病房、互联互通评级推动医院信息系统集成需求，日均千万级消息处理成为常态。FHIR 标准加速医疗数据互通。",
    trend: "up",
  },
  {
    title: "大数据应用",
    desc: "选址分析、用户画像、供应链优化等场景落地加速，数据中台建设成为大型企业标配。实时计算和湖仓一体技术成熟。",
    trend: "stable",
  },
  {
    title: "云原生转型",
    desc: "Kubernetes 成为企业容器编排标准，DevSecOps 理念深入人心。可观测性、服务网格成为微服务架构关键组件。",
    trend: "up",
  },
  {
    title: "消息中间件",
    desc: "消息队列在分布式系统中价值凸显，云原生消息服务快速增长。流处理与批处理融合，实时数据湖架构兴起。",
    trend: "stable",
  },
];

const marketTrends = [
  { year: "2020", ipaas: 12.8, ecm: 18.5, cloud: 120 },
  { year: "2021", ipaas: 15.2, ecm: 20.3, cloud: 165 },
  { year: "2022", ipaas: 18.5, ecm: 22.1, cloud: 225 },
  { year: "2023", ipaas: 22.4, ecm: 24.2, cloud: 305 },
  { year: "2024", ipaas: 27.8, ecm: 26.5, cloud: 410 },
  { year: "2025", ipaas: 34.5, ecm: 29.0, cloud: 540 },
];

export default function AnalysisPage() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-accent mb-2">行业分析</h1>
      <p className="text-text-secondary mb-12">关注 IT 服务、系统集成、数字化转型相关行业动态</p>

      {/* Technology Trend Chart */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">📈 技术趋势分析</h2>
        <div className="bg-bg-card border border-border rounded-xl p-8">
          <svg viewBox="0 0 800 300" className="w-full h-auto">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <g key={y}>
                <line
                  x1="80"
                  y1={250 - (y / 100) * 200}
                  x2="760"
                  y2={250 - (y / 100) * 200}
                  stroke="#1f1f2e"
                  strokeWidth="1"
                />
                <text x="70" y={250 - (y / 100) * 200 + 4} textAnchor="end" fill="#6b7280" fontSize="12">
                  {y}
                </text>
              </g>
            ))}

            {/* X-axis labels */}
            {marketTrends.map((d, i) => (
              <text key={i} x={100 + i * 130} y="275" textAnchor="middle" fill="#6b7280" fontSize="12">
                {d.year}
              </text>
            ))}

            {/* iPaaS line */}
            <polyline
              points={marketTrends.map((d, i) => `${100 + i * 130},${250 - (d.ipaas / 60) * 200}`).join(" ")}
              fill="none"
              stroke="#00e5a0"
              strokeWidth="3"
            />
            {marketTrends.map((d, i) => (
              <circle
                key={i}
                cx={100 + i * 130}
                cy={250 - (d.ipaas / 60) * 200}
                r="5"
                fill="#00e5a0"
              />
            ))}

            {/* ECM line */}
            <polyline
              points={marketTrends.map((d, i) => `${100 + i * 130},${250 - (d.ecm / 40) * 200}`).join(" ")}
              fill="none"
              stroke="#6366f1"
              strokeWidth="3"
            />
            {marketTrends.map((d, i) => (
              <circle
                key={i}
                cx={100 + i * 130}
                cy={250 - (d.ecm / 40) * 200}
                r="5"
                fill="#6366f1"
              />
            ))}

            {/* Legend */}
            <g transform="translate(600, 40)">
              <rect x="0" y="0" width="160" height="70" fill="#111118" stroke="#1f1f2e" strokeWidth="1" rx="4" />
              <line x1="20" y1="20" x2="50" y2="20" stroke="#00e5a0" strokeWidth="3" />
              <circle cx="35" cy="20" r="4" fill="#00e5a0" />
              <text x="60" y="24" fill="#e8e8ed" fontSize="12">iPaaS 市场（亿美元）</text>
              <line x1="20" y1="50" x2="50" y2="50" stroke="#6366f1" strokeWidth="3" />
              <circle cx="35" cy="50" r="4" fill="#6366f1" />
              <text x="60" y="54" fill="#e8e8ed" fontSize="12">ECM 市场（亿美元）</text>
            </g>

            {/* Title */}
            <text x="400" y="30" textAnchor="middle" fill="#e8e8ed" fontSize="16" fontWeight="bold">
              全球 iPaaS 与 ECM 市场规模趋势（2020-2025）
            </text>
          </svg>
        </div>
      </section>

      {/* Architecture Evolution */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">🔧 架构演进趋势</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-accent mb-4 text-lg">传统架构 → 云原生</h3>
            <ArchitectureDiagram type="k8s" />
          </div>
          <div>
            <h3 className="font-bold text-accent mb-4 text-lg">ESB → iPaaS</h3>
            <ArchitectureDiagram type="ipaas" />
          </div>
          <div>
            <h3 className="font-bold text-accent mb-4 text-lg">单体 → 微服务</h3>
            <ArchitectureDiagram type="mq" />
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">🔍 行业洞察</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {industryInsights.map((item) => (
            <div key={item.title} className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    item.trend === "up"
                      ? "bg-green-400/10 text-green-400"
                      : "bg-yellow-400/10 text-yellow-400"
                  }`}
                >
                  {item.trend === "up" ? "↑ 增长" : "→ 稳定"}
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">💡 核心观点</h2>
        <div className="bg-bg-card border border-border rounded-xl p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-accent font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-text-primary">云原生是标配</h3>
                <p className="text-text-secondary leading-relaxed">
                  Kubernetes 已成为企业容器编排的事实标准，容器化、微服务化是企业数字化转型的必经之路。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-accent-secondary font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-text-primary">集成平台化</h3>
                <p className="text-text-secondary leading-relaxed">
                  企业集成需求从点对点连接转向平台化、标准化，iPaaS 平台成为企业IT架构的核心组件。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-accent font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-text-primary">数据驱动决策</h3>
                <p className="text-text-secondary leading-relaxed">
                  大数据平台从基础设施向业务价值转变，数据治理、数据质量、数据安全成为关键。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-accent-secondary font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-text-primary">AI 融合加速</h3>
                <p className="text-text-secondary leading-relaxed">
                  AI 技术与各类应用场景深度融合，智能内容管理、智能运维、智能推荐等场景快速落地。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Size Forecast */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">📊 市场规模预测</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <div className="text-4xl font-bold text-accent mb-2">34.5</div>
            <div className="text-text-secondary mb-2">亿美元</div>
            <div className="text-text-dim text-sm">2025年 iPaaS 市场</div>
            <div className="text-accent text-sm mt-2">↑ 24% YoY</div>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <div className="text-4xl font-bold text-accent-secondary mb-2">29.0</div>
            <div className="text-text-secondary mb-2">亿美元</div>
            <div className="text-text-dim text-sm">2025年 ECM 市场</div>
            <div className="text-accent-secondary text-sm mt-2">↑ 10% YoY</div>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <div className="text-4xl font-bold text-accent mb-2">540</div>
            <div className="text-text-secondary mb-2">亿美元</div>
            <div className="text-text-dim text-sm">2025年云原生市场</div>
            <div className="text-accent text-sm mt-2">↑ 32% YoY</div>
          </div>
        </div>
      </section>
    </div>
  );
}
