import Link from "next/link";

const projects = [
  {
    name: "香港工商注册系统",
    org: "香港工商注册处",
    period: "2025.05 – 至今",
    desc: "香港工商注册材料审批系统优化，涵盖页面性能、文档上传、中文兼容性全面提升。",
    results: ["页面加载提升80%", "文档上传提升80%", "中文兼容率99%+"],
    tags: ["Next.js", "系统集成", "政府项目"],
  },
  {
    name: "智慧病房 iPaaS 平台",
    org: "吉林大学第一附属医院",
    period: "2024.10 – 2025.04",
    desc: "基于 iPaaS 架构的智慧病房集成平台，打通医院数十个业务系统的数据交互。",
    results: ["接口开发量减少60%", "交互效率提升40%", "日均15万+消息稳定运行"],
    tags: ["iPaaS", "IBM MQ", "医疗"],
  },
  {
    name: "大数据选址系统",
    org: "BMW",
    period: "2021.04 – 2024.05",
    desc: "大数据门店选址平台，整合多维度数据源，支撑企业战略选址决策。",
    results: ["提升选址准确率", "平台纳入企业市场战略参考框架"],
    tags: ["大数据", "选址分析", "汽车行业"],
  },
  {
    name: "企业知识库",
    org: "多家大型国企",
    period: "2017.04 – 2020.12",
    desc: "推动大型国企内容管理平台建设，主导跨系统集成与统一标准落地，建设企业服务总线及 iPaaS 平台。",
    results: ["统一内容管理标准", "ESB/iPaaS 平台落地", "跨系统集成打通"],
    tags: ["ECM", "iPaaS", "ESB"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-accent mb-2">项目集</h1>
      <p className="text-text-secondary mb-12">主要交付项目一览</p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Link key={p.name} href="#" className="block">
            <div className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 h-full">
              <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
              <div className="flex flex-wrap gap-2 text-xs text-text-dim mb-3">
                <span>{p.org}</span><span>·</span><span>{p.period}</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">{p.desc}</p>
              <ul className="space-y-1 mb-4">
                {p.results.map((r) => (
                  <li key={r} className="text-text-secondary text-sm flex items-start gap-2">
                    <span className="text-accent mt-1">▸</span>{r}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
