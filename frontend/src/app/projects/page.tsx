"use client";

import { useI18n } from "@/lib/i18n";

const projects = [
  {
    title: "企业级消息中台建设",
    titleEn: "Enterprise Messaging Platform",
    desc: "为某头部券商设计并实施统一消息中台，整合 IBM MQ 集群、Kafka 和 RabbitMQ，通过统一的 API 网关提供服务，支撑 200+ 业务系统的消息通信需求。",
    descEn: "Designed and implemented a unified messaging platform for a leading securities firm, integrating IBM MQ clusters, Kafka, and RabbitMQ with a unified API gateway, supporting 200+ business systems.",
    tags: ["IBM MQ", "Kafka", "Kubernetes", "API Connect", "Redis"],
    svg: "messaging",
  },
  {
    title: "API 网关高可用架构",
    titleEn: "API Gateway HA Architecture",
    desc: "基于 IBM API Connect 构建多活 API 网关集群，日均处理 5000 万+ API 请求，P99 延迟 < 50ms，实现自动限流、熔断和灰度发布能力。",
    descEn: "Built active-active API gateway cluster based on IBM API Connect, handling 50M+ daily API requests with P99 latency < 50ms, featuring auto rate-limiting, circuit breaking, and canary deployments.",
    tags: ["API Connect", "DataPower", "Docker", "Prometheus", "Grafana"],
    svg: "api",
  },
  {
    title: "中间件容器化迁移",
    titleEn: "Middleware Containerization Migration",
    desc: "将传统 VM 部署的 MQ、ACE 等中间件迁移至 Kubernetes 平台，使用 Helm Chart 管理配置，结合 GitOps 实现全自动化 CI/CD 流水线。",
    descEn: "Migrated traditional VM-deployed MQ, ACE middleware to Kubernetes, using Helm Charts for config management and GitOps for fully automated CI/CD pipelines.",
    tags: ["Kubernetes", "Helm", "IBM MQ Uniform Cluster", "ArgoCD", "Jenkins"],
    svg: "container",
  },
  {
    title: "跨系统消息集成平台",
    titleEn: "Cross-System Integration Platform",
    desc: "基于 IBM ACE 设计企业服务总线（ESB），实现核心银行系统、信贷系统、风控系统之间的实时消息路由和协议转换，日均处理 3000 万条消息。",
    descEn: "Designed ESB using IBM ACE for real-time message routing and protocol conversion between core banking, credit, and risk systems, processing 30M messages daily.",
    tags: ["IBM ACE", "MQ", "REST", "SOAP", "JSON/XML"],
    svg: "esb",
  },
  {
    title: "智能运维监控平台",
    titleEn: "Intelligent Ops Monitoring Platform",
    desc: "构建中间件统一监控平台，集成 Prometheus + Grafana + 自研 Python Agent，实现 MQ 队列深度、通道状态、ACE 消息流性能的实时监控和智能告警。",
    descEn: "Built unified middleware monitoring platform with Prometheus + Grafana + custom Python agents for real-time monitoring and intelligent alerting on MQ queue depth, channel status, and ACE message flow performance.",
    tags: ["Python", "Prometheus", "Grafana", "Bash", "MQ PCF API"],
    svg: "monitoring",
  },
];

function ArchitectureSVG({ type }: { type: string }) {
  const svgs: Record<string, React.ReactNode> = {
    messaging: (
      <svg viewBox="0 0 400 200" className="w-full h-40">
        <rect x="10" y="30" width="80" height="40" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="50" y="55" textAnchor="middle" fill="#00e5a0" fontSize="10">Producer</text>
        <rect x="10" y="90" width="80" height="40" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="50" y="115" textAnchor="middle" fill="#00e5a0" fontSize="10">Producer</text>
        <rect x="160" y="55" width="100" height="90" rx="8" fill="#1a1a25" stroke="#00e5a0" strokeWidth="2" />
        <text x="210" y="95" textAnchor="middle" fill="#ededed" fontSize="11" fontWeight="bold">MQ Cluster</text>
        <text x="210" y="115" textAnchor="middle" fill="#888" fontSize="9">HA + DR</text>
        <rect x="310" y="30" width="80" height="40" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="350" y="55" textAnchor="middle" fill="#00e5a0" fontSize="10">Consumer</text>
        <rect x="310" y="90" width="80" height="40" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="350" y="115" textAnchor="middle" fill="#00e5a0" fontSize="10">Consumer</text>
        <line x1="90" y1="50" x2="160" y2="80" stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
        <line x1="90" y1="110" x2="160" y2="100" stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
        <line x1="260" y1="80" x2="310" y2="50" stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
        <line x1="260" y1="100" x2="310" y2="110" stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
      </svg>
    ),
    api: (
      <svg viewBox="0 0 400 200" className="w-full h-40">
        <rect x="10" y="70" width="70" height="50" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="45" y="100" textAnchor="middle" fill="#00e5a0" fontSize="10">Client</text>
        <rect x="130" y="50" width="100" height="90" rx="8" fill="#1a1a25" stroke="#00e5a0" strokeWidth="2" />
        <text x="180" y="85" textAnchor="middle" fill="#ededed" fontSize="11" fontWeight="bold">API Connect</text>
        <text x="180" y="105" textAnchor="middle" fill="#888" fontSize="9">Rate Limit</text>
        <text x="180" y="120" textAnchor="middle" fill="#888" fontSize="9">Circuit Break</text>
        <rect x="280" y="30" width="70" height="35" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="315" y="52" textAnchor="middle" fill="#00e5a0" fontSize="9">Service A</text>
        <rect x="280" y="80" width="70" height="35" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="315" y="102" textAnchor="middle" fill="#00e5a0" fontSize="9">Service B</text>
        <rect x="280" y="130" width="70" height="35" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="315" y="152" textAnchor="middle" fill="#00e5a0" fontSize="9">Service C</text>
        <line x1="80" y1="95" x2="130" y2="95" stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
        <line x1="230" y1="75" x2="280" y2="48" stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
        <line x1="230" y1="95" x2="280" y2="98" stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
        <line x1="230" y1="115" x2="280" y2="148" stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
      </svg>
    ),
    container: (
      <svg viewBox="0 0 400 200" className="w-full h-40">
        <rect x="20" y="20" width="360" height="160" rx="10" fill="#1a1a25" stroke="#00e5a0" strokeWidth="2" />
        <text x="200" y="45" textAnchor="middle" fill="#ededed" fontSize="12" fontWeight="bold">Kubernetes Cluster</text>
        <rect x="40" y="60" width="90" height="50" rx="6" fill="#12121a" stroke="#00e5a0" strokeWidth="1" />
        <text x="85" y="82" textAnchor="middle" fill="#00e5a0" fontSize="9">IBM MQ</text>
        <text x="85" y="98" textAnchor="middle" fill="#888" fontSize="8">Pod × 3</text>
        <rect x="155" y="60" width="90" height="50" rx="6" fill="#12121a" stroke="#00e5a0" strokeWidth="1" />
        <text x="200" y="82" textAnchor="middle" fill="#00e5a0" fontSize="9">IBM ACE</text>
        <text x="200" y="98" textAnchor="middle" fill="#888" fontSize="8">Pod × 2</text>
        <rect x="270" y="60" width="90" height="50" rx="6" fill="#12121a" stroke="#00e5a0" strokeWidth="1" />
        <text x="315" y="82" textAnchor="middle" fill="#00e5a0" fontSize="9">API Connect</text>
        <text x="315" y="98" textAnchor="middle" fill="#888" fontSize="8">Pod × 2</text>
        <rect x="120" y="130" width="160" height="30" rx="6" fill="#12121a" stroke="#888" strokeWidth="1" />
        <text x="200" y="150" textAnchor="middle" fill="#888" fontSize="9">Helm + ArgoCD (GitOps)</text>
      </svg>
    ),
    esb: (
      <svg viewBox="0 0 400 200" className="w-full h-40">
        <rect x="10" y="20" width="70" height="35" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="45" y="42" textAnchor="middle" fill="#00e5a0" fontSize="8">核心银行</text>
        <rect x="10" y="70" width="70" height="35" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="45" y="92" textAnchor="middle" fill="#00e5a0" fontSize="8">信贷系统</text>
        <rect x="10" y="120" width="70" height="35" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="45" y="142" textAnchor="middle" fill="#00e5a0" fontSize="8">风控系统</text>
        <rect x="150" y="40" width="110" height="110" rx="10" fill="#1a1a25" stroke="#00e5a0" strokeWidth="2" />
        <text x="205" y="85" textAnchor="middle" fill="#ededed" fontSize="12" fontWeight="bold">IBM ACE</text>
        <text x="205" y="105" textAnchor="middle" fill="#888" fontSize="9">消息路由</text>
        <text x="205" y="120" textAnchor="middle" fill="#888" fontSize="9">协议转换</text>
        <rect x="320" y="20" width="70" height="35" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="355" y="42" textAnchor="middle" fill="#00e5a0" fontSize="8">ERP</text>
        <rect x="320" y="70" width="70" height="35" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="355" y="92" textAnchor="middle" fill="#00e5a0" fontSize="8">CRM</text>
        <rect x="320" y="120" width="70" height="35" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="355" y="142" textAnchor="middle" fill="#00e5a0" fontSize="8">数据平台</text>
        {[37, 87, 137].map((y) => (
          <line key={y} x1="80" y1={y + 17} x2="150" y2={y < 70 ? 70 : y > 110 ? 120 : 95} stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
        ))}
        {[37, 87, 137].map((y) => (
          <line key={y} x1="260" y1={y < 70 ? 70 : y > 110 ? 120 : 95} x2="320" y2={y + 17} stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
        ))}
      </svg>
    ),
    monitoring: (
      <svg viewBox="0 0 400 200" className="w-full h-40">
        <rect x="10" y="30" width="80" height="40" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="50" y="55" textAnchor="middle" fill="#00e5a0" fontSize="9">Python Agent</text>
        <rect x="10" y="90" width="80" height="40" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="50" y="115" textAnchor="middle" fill="#00e5a0" fontSize="9">MQ PCF API</text>
        <rect x="10" y="150" width="80" height="30" rx="6" fill="#1a1a25" stroke="#00e5a0" strokeWidth="1.5" />
        <text x="50" y="170" textAnchor="middle" fill="#00e5a0" fontSize="9">Bash Scripts</text>
        <rect x="150" y="60" width="90" height="70" rx="8" fill="#1a1a25" stroke="#00e5a0" strokeWidth="2" />
        <text x="195" y="90" textAnchor="middle" fill="#ededed" fontSize="10" fontWeight="bold">Prometheus</text>
        <text x="195" y="108" textAnchor="middle" fill="#888" fontSize="8">TSDB + Alerting</text>
        <rect x="290" y="60" width="90" height="70" rx="8" fill="#1a1a25" stroke="#00e5a0" strokeWidth="2" />
        <text x="335" y="90" textAnchor="middle" fill="#ededed" fontSize="10" fontWeight="bold">Grafana</text>
        <text x="335" y="108" textAnchor="middle" fill="#888" fontSize="8">Dashboard</text>
        <line x1="90" y1="50" x2="150" y2="80" stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
        <line x1="90" y1="110" x2="150" y2="100" stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
        <line x1="90" y1="165" x2="150" y2="115" stroke="#00e5a0" strokeWidth="1" strokeDasharray="4" />
        <line x1="240" y1="95" x2="290" y2="95" stroke="#00e5a0" strokeWidth="1.5" />
      </svg>
    ),
  };
  return <>{svgs[type]}</>;
}

export default function ProjectsPage() {
  const { lang, t } = useI18n();
  const l = lang === "zh";

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-bold">{t.projects.title}</h1>
        <p className="mt-2 text-muted">{t.projects.subtitle}</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="animate-fade-in-up group rounded-2xl border border-surface-light bg-surface p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
          >
            <div className="mb-4 overflow-hidden rounded-lg bg-background/50">
              <ArchitectureSVG type={p.svg} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
              {l ? p.title : p.titleEn}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">{l ? p.desc : p.descEn}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
