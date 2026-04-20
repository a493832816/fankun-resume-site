"use client";

import { useEffect, useRef } from "react";
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

function useSkillBars() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const bar = e.target as HTMLElement;
          const w = bar.dataset.width;
          if (w) bar.style.width = w;
          bar.classList.add("visible");
          obs.unobserve(bar);
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".skill-bar").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-24 px-4 max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-accent fade-in font-[family-name:var(--font-heading)]">{title}</h2>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-bg-card border border-border rounded-xl p-6 mb-6 fade-in card-hover ${className}`}>
    {children}
  </div>
);

const SkillRow = ({ label, value, color }: { label: string; value: number; color: "accent" | "accent-secondary" }) => {
  const c = color === "accent" ? "#3b82f6" : "#10b981";
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-text-secondary">{label}</span>
        <span className="text-sm font-medium" style={{ color: c }}>{value}%</span>
      </div>
      <div className="w-full bg-bg-primary rounded-full h-2">
        <div className="skill-bar h-2 rounded-full" style={{ backgroundColor: c }} data-width={`${value}%`} />
      </div>
    </div>
  );
};

export default function Home() {
  useFadeIn();
  useSkillBars();
  const { t, language } = useI18n();

  const skills = [
    { name: t("radar_pm"), value: 95 },
    { name: t("radar_arch"), value: 90 },
    { name: t("radar_integration"), value: 92 },
    { name: t("radar_requirement"), value: 88 },
    { name: t("radar_leadership"), value: 90 },
    { name: t("radar_agile"), value: 85 },
  ];

  const workHistory = [
    { year: t("work1_year"), title: t("work1_title"), company: t("work1_company"), description: t("work1_desc") },
    { year: t("work2_year"), title: t("work2_title"), company: t("work2_company"), description: t("work2_desc") },
    { year: t("work3_year"), title: t("work3_title"), company: t("work3_company"), description: t("work3_desc") },
  ];

  const projects = [
    {
      name: t("proj_ipaas_name"), org: t("proj_ipaas_org"), period: t("proj_ipaas_period"),
      results: [t("proj_ipaas_r1"), t("proj_ipaas_r2"), t("proj_ipaas_r3"), t("proj_ipaas_r4")],
      tags: ["iPaaS", "IBM MQ", "API Connect", language === "zh" ? "金融" : "Finance"],
    },
    {
      name: t("proj_bigdata_name"), org: t("proj_bigdata_org"), period: t("proj_bigdata_period"),
      results: [t("proj_bigdata_r1"), t("proj_bigdata_r2"), t("proj_bigdata_r3"), t("proj_bigdata_r4")],
      tags: [language === "zh" ? "大数据" : "Big Data", language === "zh" ? "数据治理" : "Data Governance", language === "zh" ? "政府" : "Gov"],
    },
    {
      name: t("proj_ecm_name"), org: t("proj_ecm_org"), period: t("proj_ecm_period"),
      results: [t("proj_ecm_r1"), t("proj_ecm_r2"), t("proj_ecm_r3"), t("proj_ecm_r4")],
      tags: ["ECM", language === "zh" ? "文档管理" : "Doc Mgmt", language === "zh" ? "企业" : "Enterprise"],
    },
    {
      name: t("proj_k8s_name"), org: t("proj_k8s_org"), period: t("proj_k8s_period"),
      results: [t("proj_k8s_r1"), t("proj_k8s_r2"), t("proj_k8s_r3"), t("proj_k8s_r4")],
      tags: ["Kubernetes", "Docker", language === "zh" ? "云原生" : "Cloud Native"],
    },
    {
      name: t("proj_mq_name"), org: t("proj_mq_org"), period: t("proj_mq_period"),
      results: [t("proj_mq_r1"), t("proj_mq_r2"), t("proj_mq_r3"), t("proj_mq_r4")],
      tags: ["IBM MQ", language === "zh" ? "高可用" : "HA", language === "zh" ? "中间件" : "Middleware"],
    },
  ];

  const certifications = [
    { name: t("cert_pmp"), title: t("cert_pmp_title"), issuer: t("cert_pmp_issuer") },
    { name: t("cert_mq"), title: t("cert_mq_title"), issuer: t("cert_mq_issuer") },
    { name: t("cert_cka"), title: t("cert_cka_title"), issuer: t("cert_cka_issuer") },
  ];

  return (
    <>
      {/* Hero */}
      <header id="about" className="pt-32 pb-16 px-4 max-w-6xl mx-auto">
        <div className="fade-in">
          <p className="text-accent text-sm font-medium mb-3">{t("role_zh")}</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight font-[family-name:var(--font-heading)]">
            {language === "zh" ? "范坤" : "Frank Fan"}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-secondary">
            {t("role_en")}
          </h2>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
            {t("hero_intro")}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-text-dim">
            <a href="mailto:frank@hk-it.hk" className="hover:text-accent transition-colors">✉️ {t("email")}</a>
            <a href="https://x.com/frank4938" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">𝕏 {t("twitter")}</a>
            <a href="https://frank4938.feishu.cn" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">🐦 {t("feishu")}</a>
          </div>
        </div>

        {/* Stats - 2x2 grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 fade-in max-w-2xl">
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
            <h3 className="text-xl font-bold mb-4 text-text-primary font-[family-name:var(--font-heading)]">{t("skills_management")}</h3>
            <Card>
              <div className="space-y-3">
                <SkillRow label={t("skill_pmp")} value={95} color="accent" />
                <SkillRow label={t("skill_risk")} value={92} color="accent" />
                <SkillRow label={t("skill_budget")} value={90} color="accent" />
              </div>
            </Card>

            <h3 className="text-xl font-bold mb-4 mt-8 text-text-primary font-[family-name:var(--font-heading)]">{t("skills_architecture")}</h3>
            <Card>
              <div className="space-y-3">
                <SkillRow label={t("skill_ibm")} value={90} color="accent-secondary" />
                <SkillRow label={t("skill_k8s")} value={88} color="accent-secondary" />
                <SkillRow label={t("skill_integration")} value={85} color="accent-secondary" />
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
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">{tag}</span>
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
            <h3 className="font-semibold text-lg mb-1">{t("edu_school")}</h3>
            <p className="text-text-secondary text-sm">{t("edu_major")}</p>
            <p className="text-text-dim text-sm mt-1">{t("edu_period")}</p>
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
