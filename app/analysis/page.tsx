const stocks = [
  { code: "AAPL", name: "苹果", price: 178.52, change: +2.34, pct: 1.33 },
  { code: "MSFT", name: "微软", price: 415.60, change: -1.20, pct: -0.29 },
  { code: "GOOGL", name: "谷歌", price: 141.80, change: +0.95, pct: 0.67 },
  { code: "NVDA", name: "英伟达", price: 875.30, change: +12.45, pct: 1.44 },
  { code: "BABA", name: "阿里巴巴", price: 78.90, change: -0.65, pct: -0.82 },
  { code: "TCEHY", name: "腾讯", price: 42.15, change: +0.38, pct: 0.91 },
];

const news = [
  { title: "iPaaS 市场规模预计 2028 年突破 120 亿美元", tag: "行业报告", date: "2025-04" },
  { title: "企业数字化转型加速，系统集成需求持续增长", tag: "市场趋势", date: "2025-04" },
  { title: "AI 驱动的企业知识管理：从 ECM 到智能内容平台", tag: "技术前沿", date: "2025-03" },
  { title: "医疗信息化政策利好，智慧医院建设提速", tag: "政策解读", date: "2025-03" },
  { title: "大数据在零售选址中的应用：从经验决策到数据驱动", tag: "案例分析", date: "2025-02" },
  { title: "IBM MQ 与现代 iPaaS 平台的融合之路", tag: "技术分析", date: "2025-02" },
];

const industryInsights = [
  { title: "系统集成", desc: "企业级系统集成从传统 ESB 向云原生 iPaaS 演进，API 管理和事件驱动架构成为主流。", trend: "up" },
  { title: "企业内容管理", desc: "ECM 正向智能内容平台转型，AI 驱动的文档理解、自动分类和知识图谱构建成为新增长点。", trend: "up" },
  { title: "医疗信息化", desc: "智慧病房、互联互通评级推动医院信息系统集成需求，日均千万级消息处理成为常态。", trend: "up" },
  { title: "大数据应用", desc: "选址分析、用户画像、供应链优化等场景落地加速，数据中台建设成为大型企业标配。", trend: "stable" },
];

export default function AnalysisPage() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-accent mb-2">行业分析</h1>
      <p className="text-text-secondary mb-12">关注 IT 服务、系统集成、数字化转型相关行业动态</p>

      {/* Stock Simulation */}
      <section className="mb-16">
        <h2 className="text-xl font-bold mb-6 text-text-primary">📊 行情模拟数据</h2>
        <p className="text-text-dim text-sm mb-4">以下为模拟数据，仅供参考，不构成投资建议</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stocks.map((s) => (
            <div key={s.code} className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <div className="font-bold text-sm">{s.code}</div>
              <div className="text-text-dim text-xs">{s.name}</div>
              <div className="text-lg font-semibold mt-2">${s.price}</div>
              <div className={`text-xs mt-1 ${s.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                {s.change >= 0 ? "+" : ""}{s.change} ({s.pct >= 0 ? "+" : ""}{s.pct}%)
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Insights */}
      <section className="mb-16">
        <h2 className="text-xl font-bold mb-6 text-text-primary">🔍 行业洞察</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {industryInsights.map((item) => (
            <div key={item.title} className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">{item.title}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${item.trend === "up" ? "bg-green-400/10 text-green-400" : "bg-yellow-400/10 text-yellow-400"}`}>
                  {item.trend === "up" ? "↑ 增长" : "→ 稳定"}
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News Cards */}
      <section>
        <h2 className="text-xl font-bold mb-6 text-text-primary">📰 行业资讯</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((n) => (
            <div key={n.title} className="bg-bg-card border border-border rounded-xl p-5 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-accent/10 text-accent text-xs px-2 py-0.5 rounded-full">{n.tag}</span>
                <span className="text-text-dim text-xs">{n.date}</span>
              </div>
              <p className="text-text-primary text-sm leading-relaxed">{n.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
