"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "zh" | "en";

type Translation = {
  zh: Record<string, string>;
  en: Record<string, string>;
};

const translations: Translation = {
  zh: {
    name: "范坤",
    role_zh: "企业级 IT 项目经理 & 技术架构师",
    role_en: "Enterprise IT Project Manager & Technical Architect",
    hero_intro: "企业级 IT 项目经理 & 技术架构师，专注于企业系统集成、数字化转型、云原生架构设计。拥有 10+ 年项目管理与技术架构经验，PMP 认证，擅长大型复杂项目的交付与管理。",
    email: "frank@hk-it.hk",
    twitter: "@frank4938",
    feishu: "飞书",
    years_experience: "年项目经验",
    max_budget: "最大项目预算",
    efficiency_improve: "效率提升",
    no_delay: "延期上线",
    work_experience: "工作经历",
    education: "教育背景 & 认证",
    skills: "技术能力",
    skills_management: "项目管理",
    skills_architecture: "技术架构",
    projects: "项目经验",
    project_full: "查看完整项目集 →",
    analysis: "行业分析",

    // Nav
    nav_home: "首页",
    nav_projects: "项目",
    nav_analysis: "行业洞察",

    // Skills bars
    skill_pmp: "PMP / 敏捷管理",
    skill_risk: "风险控制 / 利益相关者管理",
    skill_budget: "预算控制 / 交付管理",
    skill_ibm: "IBM MQ / ACE / API Connect",
    skill_k8s: "Kubernetes / Docker",
    skill_integration: "系统集成 / 大数据 / 云原生",

    // Radar chart skills
    radar_pm: "项目管理",
    radar_arch: "技术架构",
    radar_integration: "系统集成",
    radar_requirement: "需求分析",
    radar_leadership: "团队领导",
    radar_agile: "敏捷开发",

    // Work history
    work1_year: "2022 – 至今",
    work1_title: "高级项目经理 / 技术架构师",
    work1_company: "HK-IT Solutions",
    work1_desc: "负责企业级 iPaaS 平台架构设计与项目管理，主导金融企业集成平台、政务大数据平台、Kubernetes 容器化迁移等大型项目。",
    work2_year: "2018 – 2022",
    work2_title: "项目经理",
    work2_company: "系统集成公司",
    work2_desc: "负责企业内容管理系统(ECM)实施、IBM 中间件项目交付、跨部门系统集成，领导 8-15 人团队。",
    work3_year: "2014 – 2018",
    work3_title: "中间件顾问",
    work3_company: "IBM 合作伙伴",
    work3_desc: "负责 IBM MQ、ACE、API Connect 等中间件产品实施与咨询，为金融、政企客户提供技术方案。",

    // Projects (homepage cards)
    proj_ipaas_name: "大型金融企业 iPaaS 集成平台",
    proj_ipaas_org: "某大型银行",
    proj_ipaas_period: "2023.06 – 2024.08",
    proj_ipaas_r1: "打通 50+ 业务系统",
    proj_ipaas_r2: "日均 500万+ 消息处理",
    proj_ipaas_r3: "接口开发量减少 40%",
    proj_ipaas_r4: "系统集成周期缩短 30%",

    proj_bigdata_name: "政务大数据平台建设",
    proj_bigdata_org: "某省政府",
    proj_bigdata_period: "2022.03 – 2023.12",
    proj_bigdata_r1: "整合 20+ 数据源",
    proj_bigdata_r2: "日处理数据量 10TB+",
    proj_bigdata_r3: "构建统一数据治理体系",
    proj_bigdata_r4: "数据查询效率提升 60%",

    proj_ecm_name: "企业内容管理(ECM)系统实施",
    proj_ecm_org: "某制造业集团",
    proj_ecm_period: "2019.01 – 2020.06",
    proj_ecm_r1: "统一文档管理标准",
    proj_ecm_r2: "文档检索效率提升 80%",
    proj_ecm_r3: "支持 5000+ 并发用户",
    proj_ecm_r4: "合规性达标 100%",

    proj_k8s_name: "Kubernetes 容器化迁移",
    proj_k8s_org: "某互联网公司",
    proj_k8s_period: "2023.01 – 2023.08",
    proj_k8s_r1: "容器化率 100%",
    proj_k8s_r2: "资源利用率提升 40%",
    proj_k8s_r3: "部署效率提升 60%",
    proj_k8s_r4: "故障恢复时间缩短 70%",

    proj_mq_name: "IBM MQ 高可用架构升级",
    proj_mq_org: "某金融机构",
    proj_mq_period: "2018.06 – 2019.02",
    proj_mq_r1: "实现跨地域高可用",
    proj_mq_r2: "消息队列可靠性 99.999%",
    proj_mq_r3: "消息延迟降低 50%",
    proj_mq_r4: "成功通过等保三级认证",

    // Education
    edu_school: "湖北工程学院新技术学院",
    edu_major: "计算机科学与技术（本科）",
    edu_period: "2011.09 – 2015.06",

    // Certifications
    cert_pmp: "PMP",
    cert_pmp_title: "项目管理专业人士",
    cert_pmp_issuer: "PMI",
    cert_mq: "IBM Certified MQ Administrator",
    cert_mq_title: "IBM 消息队列管理员",
    cert_mq_issuer: "IBM",
    cert_cka: "CKA",
    cert_cka_title: "Certified Kubernetes Administrator",
    cert_cka_issuer: "CNCF",

    // Projects page
    proj_page_title: "项目集",
    proj_page_subtitle: "主要交付项目一览",
    proj_role: "角色",
    proj_key_results: "关键成果",
    proj_architecture: "系统架构",
    proj_tech_stack: "技术栈",

    // Projects page details
    proj_ipaas_role: "项目经理 / 技术架构师",
    proj_ipaas_desc: "主导设计并实施企业级 iPaaS（Integration Platform as a Service）集成平台，整合银行50+个业务系统，构建统一的消息总线与API管理平台。",
    proj_ipaas_r5: "通过等保三级认证，满足金融行业合规要求",

    proj_bigdata_role: "项目经理",
    proj_bigdata_desc: "构建省级政务大数据平台，整合全省 20+ 部委办局数据源，建立统一的数据治理体系与数据服务门户。",
    proj_bigdata_r5: "为全省 500+ 企事业单位提供数据服务",

    proj_ecm_role: "项目经理",
    proj_ecm_desc: "为大型制造业集团实施企业内容管理系统，建立统一的文档管理平台，实现文档全生命周期管理。",
    proj_ecm_r5: "通过 ISO 27001 信息安全认证",

    proj_k8s_role: "技术架构师",
    proj_k8s_desc: "主导企业应用容器化改造与 Kubernetes 迁移，构建云原生架构，提升系统弹性与运维效率。",
    proj_k8s_r5: "实现自动化扩缩容，应对流量峰值",

    proj_mq_role: "中间件顾问",
    proj_mq_desc: "为金融机构升级 IBM MQ 消息队列架构，构建跨地域高可用集群，确保消息传递的可靠性与实时性。",
    proj_mq_r5: "支持日均 1000万+ 消息处理",

    // Architecture labels
    arch_ipaas_title: "iPaaS 集成平台",
    arch_ipaas_engine: "集成引擎",
    arch_ipaas_engine_sub: "API 网关 · 事件总线 · 规则引擎",
    arch_bigdata_title: "大数据流水线",
    arch_bigdata_processing: "数据处理",
    arch_bigdata_etl: "ETL · 数据转换",
    arch_bigdata_warehouse: "数据仓库",
    arch_bigdata_analytics: "数据湖 · 分析",
    arch_ecm_title: "文档管理系统",
    arch_ecm_repo: "文档仓库",
    arch_ecm_store: "存储与组织",
    arch_ecm_users: "用户",
    arch_ecm_access: "访问",
    arch_ecm_workflow: "工作流",
    arch_ecm_approval: "审批 · 版本控制",
    arch_k8s_title: "Kubernetes 集群",
    arch_k8s_control: "控制面",
    arch_k8s_node: "节点",
    arch_k8s_pods: "Pods",
    arch_k8s_mesh: "服务网格 · 负载均衡",
    arch_mq_title: "消息队列集群",
    arch_mq_producer: "生产者",
    arch_mq_consumer: "消费者",
    arch_mq_cluster: "队列集群",
    arch_mq_ha: "轮询 · 高可用",

    // Analysis page
    analysis_title: "行业分析",
    analysis_subtitle: "关注 IT 服务、系统集成、数字化转型相关行业动态",
    analysis_tech_trend: "📈 技术趋势分析",
    analysis_chart_title: "全球 iPaaS 与 ECM 市场规模趋势（2020-2025）",
    analysis_chart_ipaas: "iPaaS 市场（亿美元）",
    analysis_chart_ecm: "ECM 市场（亿美元）",
    analysis_arch_evo: "🔧 架构演进趋势",
    analysis_arch_legacy_cloud: "传统架构 → 云原生",
    analysis_arch_esb_ipaas: "ESB → iPaaS",
    analysis_arch_mono_micro: "单体 → 微服务",
    analysis_insights: "🔍 行业洞察",
    analysis_takeaways: "💡 核心观点",
    analysis_market_forecast: "📊 市场规模预测",
    analysis_market_billion: "亿美元",

    insight_integration_title: "系统集成",
    insight_integration_desc: "企业级系统集成从传统 ESB 向云原生 iPaaS 演进，API 管理和事件驱动架构成为主流。Serverless 和边缘计算推动分布式架构创新。",
    insight_ecm_title: "企业内容管理",
    insight_ecm_desc: "ECM 正向智能内容平台转型，AI 驱动的文档理解、自动分类和知识图谱构建成为新增长点。RAG 技术在文档检索领域广泛应用。",
    insight_health_title: "医疗信息化",
    insight_health_desc: "智慧病房、互联互通评级推动医院信息系统集成需求，日均千万级消息处理成为常态。FHIR 标准加速医疗数据互通。",
    insight_bigdata_title: "大数据应用",
    insight_bigdata_desc: "选址分析、用户画像、供应链优化等场景落地加速，数据中台建设成为大型企业标配。实时计算和湖仓一体技术成熟。",
    insight_cloud_title: "云原生转型",
    insight_cloud_desc: "Kubernetes 成为企业容器编排标准，DevSecOps 理念深入人心。可观测性、服务网格成为微服务架构关键组件。",
    insight_mq_title: "消息中间件",
    insight_mq_desc: "消息队列在分布式系统中价值凸显，云原生消息服务快速增长。流处理与批处理融合，实时数据湖架构兴起。",

    trend_up: "↑ 增长",
    trend_stable: "→ 稳定",

    takeaway1_title: "云原生是标配",
    takeaway1_desc: "Kubernetes 已成为企业容器编排的事实标准，容器化、微服务化是企业数字化转型的必经之路。",
    takeaway2_title: "集成平台化",
    takeaway2_desc: "企业集成需求从点对点连接转向平台化、标准化，iPaaS 平台成为企业IT架构的核心组件。",
    takeaway3_title: "数据驱动决策",
    takeaway3_desc: "大数据平台从基础设施向业务价值转变，数据治理、数据质量、数据安全成为关键。",
    takeaway4_title: "AI 融合加速",
    takeaway4_desc: "AI 技术与各类应用场景深度融合，智能内容管理、智能运维、智能推荐等场景快速落地。",

    market_ipaas: "2025年 iPaaS 市场",
    market_ecm_label: "2025年 ECM 市场",
    market_cloud: "2025年云原生市场",
  },
  en: {
    name: "Frank Fan",
    role_zh: "Enterprise IT Project Manager & Technical Architect",
    role_en: "Enterprise IT Project Manager & Technical Architect",
    hero_intro: "Enterprise IT Project Manager & Technical Architect specializing in system integration, digital transformation, and cloud-native architecture. 10+ years of PM and architecture experience, PMP certified, skilled in delivering large-scale complex projects.",
    email: "frank@hk-it.hk",
    twitter: "@frank4938",
    feishu: "Feishu",
    years_experience: "Years Experience",
    max_budget: "Max Budget",
    efficiency_improve: "Efficiency",
    no_delay: "On-time Delivery",
    work_experience: "Work Experience",
    education: "Education & Certifications",
    skills: "Technical Skills",
    skills_management: "Project Management",
    skills_architecture: "Technical Architecture",
    projects: "Project Experience",
    project_full: "View All Projects →",
    analysis: "Industry Analysis",

    nav_home: "Home",
    nav_projects: "Projects",
    nav_analysis: "Insights",

    skill_pmp: "PMP / Agile Management",
    skill_risk: "Risk Control / Stakeholder Mgmt",
    skill_budget: "Budget Control / Delivery Mgmt",
    skill_ibm: "IBM MQ / ACE / API Connect",
    skill_k8s: "Kubernetes / Docker",
    skill_integration: "Integration / Big Data / Cloud Native",

    radar_pm: "Project Mgmt",
    radar_arch: "Architecture",
    radar_integration: "Integration",
    radar_requirement: "Requirements",
    radar_leadership: "Leadership",
    radar_agile: "Agile",

    work1_year: "2022 – Present",
    work1_title: "Senior PM / Technical Architect",
    work1_company: "HK-IT Solutions",
    work1_desc: "Responsible for enterprise iPaaS platform architecture design and project management, leading large-scale projects including financial integration platforms, government big data platforms, and Kubernetes containerization migration.",
    work2_year: "2018 – 2022",
    work2_title: "Project Manager",
    work2_company: "System Integration Co.",
    work2_desc: "Responsible for ECM system implementation, IBM middleware project delivery, cross-department system integration, leading 8-15 person teams.",
    work3_year: "2014 – 2018",
    work3_title: "Middleware Consultant",
    work3_company: "IBM Partner",
    work3_desc: "Responsible for IBM MQ, ACE, API Connect middleware implementation and consulting, providing technical solutions for financial and enterprise clients.",

    proj_ipaas_name: "Enterprise iPaaS Integration Platform",
    proj_ipaas_org: "Major Bank",
    proj_ipaas_period: "2023.06 – 2024.08",
    proj_ipaas_r1: "Connected 50+ business systems",
    proj_ipaas_r2: "5M+ daily message processing",
    proj_ipaas_r3: "40% reduction in API development",
    proj_ipaas_r4: "30% shorter integration cycles",

    proj_bigdata_name: "Government Big Data Platform",
    proj_bigdata_org: "Provincial Government",
    proj_bigdata_period: "2022.03 – 2023.12",
    proj_bigdata_r1: "Integrated 20+ data sources",
    proj_bigdata_r2: "10TB+ daily data processing",
    proj_bigdata_r3: "Unified data governance framework",
    proj_bigdata_r4: "60% faster data queries",

    proj_ecm_name: "Enterprise Content Management (ECM)",
    proj_ecm_org: "Manufacturing Group",
    proj_ecm_period: "2019.01 – 2020.06",
    proj_ecm_r1: "Unified document management standards",
    proj_ecm_r2: "80% faster document retrieval",
    proj_ecm_r3: "Support 5000+ concurrent users",
    proj_ecm_r4: "100% compliance achievement",

    proj_k8s_name: "Kubernetes Containerization Migration",
    proj_k8s_org: "Internet Company",
    proj_k8s_period: "2023.01 – 2023.08",
    proj_k8s_r1: "100% containerization rate",
    proj_k8s_r2: "40% resource utilization improvement",
    proj_k8s_r3: "60% faster deployment",
    proj_k8s_r4: "70% shorter recovery time",

    proj_mq_name: "IBM MQ HA Architecture Upgrade",
    proj_mq_org: "Financial Institution",
    proj_mq_period: "2018.06 – 2019.02",
    proj_mq_r1: "Cross-region high availability",
    proj_mq_r2: "99.999% message reliability",
    proj_mq_r3: "50% lower message latency",
    proj_mq_r4: "Passed Level 3 security certification",

    edu_school: "Hubei Engineering University",
    edu_major: "Computer Science & Technology (Bachelor)",
    edu_period: "2011.09 – 2015.06",

    cert_pmp: "PMP",
    cert_pmp_title: "Project Management Professional",
    cert_pmp_issuer: "PMI",
    cert_mq: "IBM Certified MQ Administrator",
    cert_mq_title: "IBM MQ Administrator",
    cert_mq_issuer: "IBM",
    cert_cka: "CKA",
    cert_cka_title: "Certified Kubernetes Administrator",
    cert_cka_issuer: "CNCF",

    proj_page_title: "Projects",
    proj_page_subtitle: "Overview of key project deliveries",
    proj_role: "Role",
    proj_key_results: "Key Results",
    proj_architecture: "System Architecture",
    proj_tech_stack: "Tech Stack",

    proj_ipaas_role: "PM / Technical Architect",
    proj_ipaas_desc: "Led the design and implementation of an enterprise iPaaS integration platform, connecting 50+ banking systems with a unified message bus and API management platform.",
    proj_ipaas_r5: "Passed Level 3 security certification for financial compliance",

    proj_bigdata_role: "Project Manager",
    proj_bigdata_desc: "Built a provincial government big data platform, integrating 20+ department data sources with unified data governance and data service portal.",
    proj_bigdata_r5: "Provided data services to 500+ enterprises",

    proj_ecm_role: "Project Manager",
    proj_ecm_desc: "Implemented an enterprise content management system for a large manufacturing group, establishing a unified document management platform with full lifecycle management.",
    proj_ecm_r5: "Passed ISO 27001 information security certification",

    proj_k8s_role: "Technical Architect",
    proj_k8s_desc: "Led enterprise application containerization and Kubernetes migration, building a cloud-native architecture for improved elasticity and ops efficiency.",
    proj_k8s_r5: "Implemented auto-scaling for traffic peak handling",

    proj_mq_role: "Middleware Consultant",
    proj_mq_desc: "Upgraded IBM MQ message queue architecture for a financial institution, building a cross-region HA cluster for reliable and real-time message delivery.",
    proj_mq_r5: "Supporting 10M+ daily message processing",

    arch_ipaas_title: "iPaaS Integration Platform",
    arch_ipaas_engine: "Integration Engine",
    arch_ipaas_engine_sub: "API Gateway · Event Bus · Rules Engine",
    arch_bigdata_title: "Big Data Pipeline",
    arch_bigdata_processing: "Processing",
    arch_bigdata_etl: "ETL · Transformation",
    arch_bigdata_warehouse: "Data Warehouse",
    arch_bigdata_analytics: "Data Lake · Analytics",
    arch_ecm_title: "Document Management",
    arch_ecm_repo: "Document Repository",
    arch_ecm_store: "Store & Organize",
    arch_ecm_users: "Users",
    arch_ecm_access: "Access",
    arch_ecm_workflow: "Workflow",
    arch_ecm_approval: "Approval · Versioning",
    arch_k8s_title: "Kubernetes Cluster",
    arch_k8s_control: "Control Plane",
    arch_k8s_node: "Node",
    arch_k8s_pods: "Pods",
    arch_k8s_mesh: "Service Mesh · Load Balancing",
    arch_mq_title: "Message Queue Cluster",
    arch_mq_producer: "Producer",
    arch_mq_consumer: "Consumer",
    arch_mq_cluster: "Queue Cluster",
    arch_mq_ha: "Round Robin · High Availability",

    analysis_title: "Industry Analysis",
    analysis_subtitle: "IT services, system integration, and digital transformation trends",
    analysis_tech_trend: "📈 Technology Trends",
    analysis_chart_title: "Global iPaaS & ECM Market Size (2020-2025)",
    analysis_chart_ipaas: "iPaaS Market ($B)",
    analysis_chart_ecm: "ECM Market ($B)",
    analysis_arch_evo: "🔧 Architecture Evolution",
    analysis_arch_legacy_cloud: "Legacy → Cloud Native",
    analysis_arch_esb_ipaas: "ESB → iPaaS",
    analysis_arch_mono_micro: "Monolith → Microservices",
    analysis_insights: "🔍 Industry Insights",
    analysis_takeaways: "💡 Key Takeaways",
    analysis_market_forecast: "📊 Market Forecast",
    analysis_market_billion: "$B",

    insight_integration_title: "System Integration",
    insight_integration_desc: "Enterprise integration evolves from traditional ESB to cloud-native iPaaS. API management and event-driven architecture become mainstream. Serverless and edge computing drive distributed architecture innovation.",
    insight_ecm_title: "Enterprise Content Mgmt",
    insight_ecm_desc: "ECM transforms into intelligent content platforms. AI-driven document understanding, auto-classification, and knowledge graphs are new growth areas. RAG is widely adopted in document retrieval.",
    insight_health_title: "Healthcare IT",
    insight_health_desc: "Smart wards and interoperability assessments drive hospital IS integration demand. 10M+ daily message processing becomes standard. FHIR standard accelerates medical data exchange.",
    insight_bigdata_title: "Big Data Applications",
    insight_bigdata_desc: "Location analysis, user profiling, supply chain optimization scenarios accelerate. Data midplatform construction becomes standard for large enterprises. Real-time computing and lakehouse architectures mature.",
    insight_cloud_title: "Cloud Native Transformation",
    insight_cloud_desc: "Kubernetes becomes the de facto standard for enterprise container orchestration. DevSecOps gains traction. Observability and service mesh become key microservices components.",
    insight_mq_title: "Message Middleware",
    insight_mq_desc: "Message queues gain prominence in distributed systems. Cloud-native messaging services grow rapidly. Stream-batch convergence and real-time data lake architectures emerge.",

    trend_up: "↑ Growing",
    trend_stable: "→ Stable",

    takeaway1_title: "Cloud Native is Standard",
    takeaway1_desc: "Kubernetes is the de facto standard for container orchestration. Containerization and microservices are essential for digital transformation.",
    takeaway2_title: "Platform-based Integration",
    takeaway2_desc: "Enterprise integration shifts from point-to-point to platform-based, standardized approaches. iPaaS platforms become core IT architecture components.",
    takeaway3_title: "Data-driven Decisions",
    takeaway3_desc: "Big data platforms shift from infrastructure to business value. Data governance, quality, and security become critical.",
    takeaway4_title: "AI Integration Accelerates",
    takeaway4_desc: "AI technology deeply integrates with application scenarios. Intelligent content management, AIOps, and smart recommendations rapidly deploy.",

    market_ipaas: "2025 iPaaS Market",
    market_ecm_label: "2025 ECM Market",
    market_cloud: "2025 Cloud Native Market",
  },
};

const I18nContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
} | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");
  const t = (key: string): string => translations[language][key as keyof typeof translations.zh] || key;
  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
