import ArchitectureDiagram from "@/components/ArchitectureDiagram";

const projects = [
  {
    id: "ipaas",
    name: "大型金融企业 iPaaS 集成平台",
    org: "某大型银行",
    period: "2023.06 – 2024.08",
    role: "项目经理 / 技术架构师",
    desc: "主导设计并实施企业级 iPaaS（Integration Platform as a Service）集成平台，整合银行50+个业务系统，构建统一的消息总线与API管理平台。",
    results: [
      "打通 50+ 业务系统，实现数据无缝流动",
      "日均 500万+ 消息处理，消息延迟 < 50ms",
      "接口开发量减少 40%，开发效率显著提升",
      "系统集成周期从 3 个月缩短至 2 个月",
      "通过等保三级认证，满足金融行业合规要求",
    ],
    techStack: ["IBM MQ", "IBM ACE", "API Connect", "Kubernetes", "Docker", "Spring Boot"],
    tags: ["iPaaS", "系统集成", "金融", "微服务"],
  },
  {
    id: "bigdata",
    name: "政务大数据平台建设",
    org: "某省政府",
    period: "2022.03 – 2023.12",
    role: "项目经理",
    desc: "构建省级政务大数据平台，整合全省 20+ 部委办局数据源，建立统一的数据治理体系与数据服务门户。",
    results: [
      "整合 20+ 数据源，日处理数据量 10TB+",
      "构建统一数据治理体系，数据质量提升 30%",
      "数据查询效率提升 60%，支持百万级并发",
      "为全省 500+ 企事业单位提供数据服务",
      "助力政府决策数字化，政务效率提升显著",
    ],
    techStack: ["Apache NiFi", "Kafka", "Hadoop", "Hive", "HBase", "Spark", "Flink"],
    tags: ["大数据", "数据治理", "政府", "Hadoop"],
  },
  {
    id: "ecm",
    name: "企业内容管理(ECM)系统实施",
    org: "某制造业集团",
    period: "2019.01 – 2020.06",
    role: "项目经理",
    desc: "为大型制造业集团实施企业内容管理系统，建立统一的文档管理平台，实现文档全生命周期管理。",
    results: [
      "统一文档管理标准，覆盖集团 50+ 子公司",
      "文档检索效率提升 80%，检索时间从分钟级降至秒级",
      "支持 5000+ 并发用户，系统可用性 99.9%",
      "通过 ISO 27001 信息安全认证",
      "合规性达标 100%，满足审计要求",
    ],
    techStack: ["IBM FileNet", "IBM Content Navigator", "LDAP", "Active Directory", "Java EE"],
    tags: ["ECM", "文档管理", "企业", "IBM FileNet"],
  },
  {
    id: "k8s",
    name: "Kubernetes 容器化迁移",
    org: "某互联网公司",
    period: "2023.01 – 2023.08",
    role: "技术架构师",
    desc: "主导企业应用容器化改造与 Kubernetes 迁移，构建云原生架构，提升系统弹性与运维效率。",
    results: [
      "容器化率 100%，成功迁移 100+ 应用服务",
      "资源利用率提升 40%，节省服务器成本显著",
      "部署效率提升 60%，从小时级降至分钟级",
      "故障恢复时间缩短 70%，从 30 分钟降至 10 分钟",
      "实现自动化扩缩容，应对流量峰值",
    ],
    techStack: ["Kubernetes", "Docker", "Helm", "Istio", "Prometheus", "Grafana", "Jenkins"],
    tags: ["Kubernetes", "Docker", "云原生", "DevOps"],
  },
  {
    id: "mq",
    name: "IBM MQ 高可用架构升级",
    org: "某金融机构",
    period: "2018.06 – 2019.02",
    role: "中间件顾问",
    desc: "为金融机构升级 IBM MQ 消息队列架构，构建跨地域高可用集群，确保消息传递的可靠性与实时性。",
    results: [
      "实现跨地域高可用，支持同城双活",
      "消息队列可靠性达到 99.999%",
      "消息延迟降低 50%，从 200ms 降至 100ms",
      "成功通过等保三级认证",
      "支持日均 1000万+ 消息处理",
    ],
    techStack: ["IBM MQ", "RDQM", "MQ Cluster", "SSL/TLS", "Linux", "Shell"],
    tags: ["IBM MQ", "高可用", "中间件", "金融"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-accent mb-2">项目集</h1>
      <p className="text-text-secondary mb-12">主要交付项目一览</p>

      <div className="space-y-20">
        {projects.map((project) => (
          <div key={project.id} className="border-b border-border pb-20 last:border-b-0 last:pb-0">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-text-primary">{project.name}</h2>
                <div className="flex flex-wrap gap-2 text-sm text-text-dim mb-4">
                  <span className="text-accent">{project.org}</span>
                  <span>·</span>
                  <span>{project.period}</span>
                </div>
                <div className="mb-6">
                  <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full mr-2">{project.role}</span>
                  <span className="bg-accent-secondary/10 text-accent-secondary text-xs px-2 py-1 rounded-full">{project.tags[0]}</span>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">{project.desc}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 text-text-primary">关键成果</h3>
                  <ul className="space-y-2">
                    {project.results.map((result) => (
                      <li key={result} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 text-text-primary">系统架构</h3>
                <ArchitectureDiagram type={project.id as any} />

                <div className="mt-6">
                  <h3 className="text-lg font-bold mb-3 text-text-primary">技术栈</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="bg-bg-primary border border-border text-text-secondary text-sm px-3 py-1.5 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
