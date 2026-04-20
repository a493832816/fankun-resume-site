"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import Counter from "@/components/Counter";
import SkillRadarChart from "@/components/SkillRadarChart";
import ProjectTimeline from "@/components/ProjectTimeline";

function useFadeIn() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-20 px-4 max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-accent fade-in">{title}</h2>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-bg-card border border-border rounded-xl p-6 mb-6 fade-in hover:border-accent/40 transition-colors duration-300 ${className}`}>
    {children}
  </div>
);

export default function Home() {
  useFadeIn();
  const { t, language } = useI18n();

  const skills = [
    { name: "项目管理", value: 95 },
    { name: "技术架构", value: 90 },
    { name: "系统集成", value: 92 },
    { name: "需求分析", value: 88 },
    { name: "团队领导", value: 90 },
    { name: "敏捷开发", value: 85 },
  ];

  const workHistory = [
    { year: "2022 – 至今", title: "高级项目经理 / 技术架构师", company: "HK-IT Solutions", description: "负责企业级 iPaaS 平台架构设计与项目管理，主导金融企业集成平台、政务大数据平台、Kubernetes 容器化迁移等大型项目。" },
    { year: "2018 – 2022", title: "项目经理", company: "系统集成公司", description: "负责企业内容管理系统(ECM)实施、IBM 中间件项目交付、跨部门系统集成，领导 8-15 人团队。" },
    { year: "2014 – 2018", title: "中间件顾问", company: "IBM 合作伙伴", description: "负责 IBM MQ、ACE、API Connect 等中间件产品实施与咨询，为金融、政企客户提供技术方案。" },
  ];

  const projects = [
    {
      name: "大型金融企业 iPaaS 集成平台",
      org: "某大型银行",
      period: "2023.06 – 2024.08",
      results: ["打通 50+ 业务系统", "日均 500万+ 消息处理", "接口开发量减少 40%", "系统集成周期缩短 30%"],
      tags: ["iPaaS", "IBM MQ", "API Connect", "金融"],
    },
    {
      name: "政务大数据平台建设",
      org: "某省政府",
      period: "2022.03 – 2023.12",
      results: ["整合 20+ 数据源", "日处理数据量 10TB+", "构建统一数据治理体系", "数据查询效率提升 60%"],
      tags: ["大数据", "数据治理", "政府"],
    },
    {
      name: "企业内容管理(ECM)系统实施",
      org: "某制造业集团",
      period: "2019.01 – 2020.06",
      results: ["统一文档管理标准", "文档检索效率提升 80%", "支持 5000+ 并发用户", "合规性达标 100%"],
      tags: ["ECM", "文档管理", "企业"],
    },
    {
      name: "Kubernetes 容器化迁移",
      org: "某互联网公司",
      period: "2023.01 – 2023.08",
      results: ["容器化率 100%", "资源利用率提升 40%", "部署效率提升 60%", "故障恢复时间缩短 70%"],
      tags: ["Kubernetes", "Docker", "云原生"],
    },
    {
      name: "IBM MQ 高可用架构升级",
      org: "某金融机构",
      period: "2018.06 – 2019.02",
      results: ["实现跨地域高可用", "消息队列可靠性 99.999%", "消息延迟降低 50%", "成功通过等保三级认证"],
      tags: ["IBM MQ", "高可用", "中间件"],
    },
  ];

  const certifications = [
    { name: "PMP", title: "项目管理专业人士", issuer: "PMI" },
    { name: "IBM Certified MQ Administrator", title: "IBM 消息队列管理员", issuer: "IBM" },
    { name: "CKA", title: "Certified Kubernetes Administrator", issuer: "CNCF" },
  ];

  return (
    <>
      {/* Hero */}
      <header id="about" className="pt-32 pb-16 px-4 max-w-6xl mx-auto">
        <div className="fade-in">
          <p className="text-accent text-sm font-medium mb-3">{t("role_zh")}</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            {language === "zh" ? "范坤" : "Frank Fan"}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-secondary">
            {t("role_en")}
          </h2>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
            企业级 IT 项目经理 & 技术架构师，专注于企业系统集成、数字化转型、云原生架构设计。
            拥有 10+ 年项目管理与技术架构经验，PMP 认证，擅长大型复杂项目的交付与管理。
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-text-dim">
            <a href="mailto:frank@hk-it.hk" className="hover:text-accent transition-colors">✉️ {t("email")}</a>
            <a href="https://x.com/frank4938" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">𝕏 {t("twitter")}</a>
            <a href="https://frank4938.feishu.cn" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">🐦 {t("feishu")}</a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 fade-in">
          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <Counter target={10} suffix="+" />
            <div className="text-text-dim text-sm mt-2">{t("years_experience")}</div>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <Counter target={50} suffix="+" />
            <div className="text-text-dim text-sm mt-2">{t("max_budget")} (USD)</div>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <Counter target={15} suffix="+" />
            <div className="text-text-dim text-sm mt-2">{t("efficiency_improve")} %</div>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <Counter target={100} suffix="%" />
            <div className="text-text-dim text-sm mt-2">{t("no_delay")}</div>
          </div>
        </div>
      </header>

      {/* Skills Radar Chart */}
      <Section id="skills" title={t("skills")}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4 text-text-primary">{t("skills_management")}</h3>
            <Card>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">PMP / 敏捷管理</span>
                  <span className="text-sm font-medium text-accent">95%</span>
                </div>
                <div className="w-full bg-bg-primary rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">风险控制 / 利益相关者管理</span>
                  <span className="text-sm font-medium text-accent">92%</span>
                </div>
                <div className="w-full bg-bg-primary rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">预算控制 / 交付管理</span>
                  <span className="text-sm font-medium text-accent">90%</span>
                </div>
                <div className="w-full bg-bg-primary rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </Card>

            <h3 className="text-xl font-bold mb-4 mt-8 text-text-primary">{t("skills_architecture")}</h3>
            <Card>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">IBM MQ / ACE / API Connect</span>
                  <span className="text-sm font-medium text-accent-secondary">90%</span>
                </div>
                <div className="w-full bg-bg-primary rounded-full h-2">
                  <div className="bg-accent-secondary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">Kubernetes / Docker</span>
                  <span className="text-sm font-medium text-accent-secondary">88%</span>
                </div>
                <div className="w-full bg-bg-primary rounded-full h-2">
                  <div className="bg-accent-secondary h-2 rounded-full" style={{ width: "88%" }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">系统集成 / 大数据 / 云原生</span>
                  <span className="text-sm font-medium text-accent-secondary">85%</span>
                </div>
                <div className="w-full bg-bg-primary rounded-full h-2">
                  <div className="bg-accent-secondary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex justify-center">
            <SkillRadarChart skills={skills} />
          </div>
        </div>
      </Section>

      {/* Work History */}
      <Section id="experience" title={t("work_experience")}>
        <div className="max-w-4xl">
          <ProjectTimeline events={workHistory} />
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title={t("projects")}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.name} href="/projects" className="block">
              <div className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 h-full card-hover">
                <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                <div className="flex flex-wrap gap-2 text-xs text-text-dim mb-3">
                  <span>{project.org}</span><span>·</span><span>{project.period}</span>
                </div>
                <ul className="space-y-1 mb-4">
                  {project.results.map((r) => (
                    <li key={r} className="text-text-secondary text-sm flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>{r}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/projects" className="inline-block mt-8 text-accent text-sm hover:underline">
          {t("project_full")}
        </Link>
      </Section>

      {/* Education & Certifications */}
      <Section id="education" title={t("education")}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold text-lg mb-1">湖北工程学院新技术学院</h3>
            <p className="text-text-secondary text-sm">计算机科学与技术（本科）</p>
            <p className="text-text-dim text-sm mt-1">2011.09 – 2015.06</p>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg mb-4">{t("skills")}</h3>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.name} className="text-text-secondary flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <div>
                    <div>{cert.name}</div>
                    <div className="text-text-dim text-sm">{cert.title}</div>
                    <div className="text-text-dim text-xs">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
