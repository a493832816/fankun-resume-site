"use client";

import { useI18n } from "@/lib/i18n";
import Link from "next/link";

const skills = [
  { name: "IBM MQ", nameEn: "IBM MQ", pct: 95, yrs: 15 },
  { name: "IBM ACE (Integration Bus)", nameEn: "IBM ACE (Integration Bus)", pct: 90, yrs: 12 },
  { name: "IBM API Connect", nameEn: "IBM API Connect", pct: 88, yrs: 8 },
  { name: "Kubernetes", nameEn: "Kubernetes", pct: 85, yrs: 5 },
  { name: "Docker", nameEn: "Docker", pct: 87, yrs: 6 },
  { name: "Linux / AIX", nameEn: "Linux / AIX", pct: 92, yrs: 15 },
  { name: "Python", nameEn: "Python", pct: 80, yrs: 7 },
  { name: "Bash / Shell", nameEn: "Bash / Shell", pct: 88, yrs: 14 },
  { name: "CI/CD (Jenkins/GitLab)", nameEn: "CI/CD (Jenkins/GitLab)", pct: 82, yrs: 8 },
  { name: "Ansible / Terraform", nameEn: "Ansible / Terraform", pct: 75, yrs: 4 },
];

const experiences = [
  {
    period: "2020 - 至今",
    periodEn: "2020 - Present",
    company: "某大型金融科技公司",
    companyEn: "A Major FinTech Company",
    role: "中间件架构师",
    roleEn: "Middleware Architect",
    points: [
      "主导企业级消息中间件平台架构设计，服务 200+ 业务系统",
      "设计并实施 MQ 多集群高可用方案，实现 99.999% 可用性",
      "推动容器化转型，将 80% 中间件工作负载迁移至 Kubernetes",
      "建立中间件运维自动化体系，运维效率提升 60%",
    ],
    pointsEn: [
      "Led enterprise messaging middleware platform architecture serving 200+ business systems",
      "Designed MQ multi-cluster HA solution achieving 99.999% availability",
      "Drove containerization, migrating 80% middleware workloads to Kubernetes",
      "Built middleware ops automation framework, improving efficiency by 60%",
    ],
  },
  {
    period: "2015 - 2020",
    periodEn: "2015 - 2020",
    company: "某IT服务公司",
    companyEn: "An IT Services Company",
    role: "高级技术顾问",
    roleEn: "Senior Technical Consultant",
    points: [
      "为多家银行和保险客户提供 IBM 中间件技术咨询服务",
      "设计和实施 API 网关解决方案，日均处理 5000万+ API 调用",
      "负责 Integration Bus 消息流设计与性能优化",
      "带领 8 人技术团队，交付 20+ 企业集成项目",
    ],
    pointsEn: [
      "Provided IBM middleware consulting for banking and insurance clients",
      "Designed API gateway solution handling 50M+ daily API calls",
      "Led Integration Bus message flow design and performance tuning",
      "Managed 8-person team, delivering 20+ enterprise integration projects",
    ],
  },
  {
    period: "2010 - 2015",
    periodEn: "2010 - 2015",
    company: "某系统集成商",
    companyEn: "A System Integrator",
    role: "中间件工程师",
    roleEn: "Middleware Engineer",
    points: [
      "负责 WebSphere MQ 的安装、配置、运维和故障排除",
      "参与多个大型银行核心系统升级项目的中间件实施",
      "编写自动化运维脚本（Bash/Python），提升部署效率",
      "获得 IBM Certified MQ Administrator 认证",
    ],
    pointsEn: [
      "Responsible for WebSphere MQ installation, configuration, and troubleshooting",
      "Participated in middleware implementation for major banking core system upgrades",
      "Developed automation scripts (Bash/Python) for deployment efficiency",
      "Earned IBM Certified MQ Administrator certification",
    ],
  },
];

const education = {
  zh: { school: "华中科技大学", degree: "计算机科学与技术 · 学士", period: "2006 - 2010" },
  en: { school: "Huazhong University of Science and Technology", degree: "B.S. in Computer Science", period: "2006 - 2010" },
};

const certs = [
  { name: "IBM Certified MQ Administrator", date: "2012" },
  { name: "IBM Certified Solution Advisor - Middleware", date: "2016" },
  { name: "Certified Kubernetes Administrator (CKA)", date: "2021" },
  { name: "Red Hat Certified Engineer (RHCE)", date: "2014" },
];

export default function Home() {
  const { lang, t } = useI18n();
  const l = lang === "zh";

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Hero */}
      <section className="animate-fade-in-up mb-20 text-center">
        <p className="mb-2 text-accent text-sm font-mono tracking-widest uppercase">{t.hero.greeting}</p>
        <h1 className="mb-4 text-5xl font-bold">{t.hero.name}</h1>
        <p className="mb-2 text-2xl text-accent">{t.hero.title}</p>
        <p className="mb-6 text-muted">{t.hero.subtitle}</p>
        <p className="mx-auto max-w-2xl text-muted leading-relaxed">{t.hero.summary}</p>
        <Link
          href="/projects"
          className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-background font-semibold hover:bg-accent/80 transition-colors"
        >
          {t.hero.cta} →
        </Link>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="mb-8 text-3xl font-bold animate-fade-in-up">{t.skills.title}</h2>
        <div className="grid gap-5">
          {skills.map((s, i) => (
            <div key={s.name} className={`animate-fade-in-up delay-${(i % 5 + 1) * 100}`}>
              <div className="mb-1 flex justify-between text-sm">
                <span>{l ? s.name : s.nameEn}</span>
                <span className="text-muted">{s.pct}% · {s.yrs}{t.skills.years}</span>
              </div>
              <div className="h-2 rounded-full bg-surface-light overflow-hidden">
                <div
                  className="h-full rounded-full bg-accent animate-fill-bar"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-20">
        <h2 className="mb-10 text-3xl font-bold animate-fade-in-up">{t.experience.title}</h2>
        <div className="relative border-l-2 border-accent/30 pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative animate-fade-in-up">
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-accent font-mono text-sm">{l ? exp.period : exp.periodEn}</span>
              <h3 className="mt-1 text-xl font-semibold">{l ? exp.role : exp.roleEn}</h3>
              <p className="text-muted">{l ? exp.company : exp.companyEn}</p>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {(l ? exp.points : exp.pointsEn).map((p, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-accent mt-0.5">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <div className="grid gap-12 md:grid-cols-2">
        <section>
          <h2 className="mb-6 text-2xl font-bold animate-fade-in-up">{t.education.title}</h2>
          <div className="animate-fade-in-up rounded-xl border border-surface-light bg-surface p-6">
            <h3 className="text-lg font-semibold">{education[lang].school}</h3>
            <p className="text-muted">{education[lang].degree}</p>
            <p className="text-accent font-mono text-sm mt-1">{education[lang].period}</p>
          </div>
        </section>
        <section>
          <h2 className="mb-6 text-2xl font-bold animate-fade-in-up">{t.certifications.title}</h2>
          <div className="space-y-3">
            {certs.map((c, i) => (
              <div key={i} className="animate-fade-in-up flex items-center gap-3 rounded-lg border border-surface-light bg-surface p-4">
                <span className="text-accent text-xl">✓</span>
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-muted text-sm">{c.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
