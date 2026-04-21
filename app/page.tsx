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
        if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
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
  <div className={`bg-bg-card border border-border rounded-xl p-6 mb-6 fade-in card-hover ${className}`}>{children}</div>
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

  const radarSkills = [
    { name: t("radar_pm"), value: 92 },
    { name: t("radar_req"), value: 90 },
    { name: t("radar_arch"), value: 85 },
    { name: t("radar_lead"), value: 88 },
    { name: t("radar_risk"), value: 87 },
    { name: t("radar_cross"), value: 90 },
  ];

  const workHistory = [
    { year: t("work1_year"), title: t("work1_title"), company: t("work1_company"), description: t("work1_desc") },
    { year: t("work2_year"), title: t("work2_title"), company: t("work2_company"), description: t("work2_desc") },
    { year: t("work3_year"), title: t("work3_title"), company: t("work3_company"), description: t("work3_desc") },
  ];

  const projects = [1, 2, 3, 4, 5].map((i) => ({
    name: t(`proj${i}_name`), org: t(`proj${i}_org`), period: t(`proj${i}_period`), role: t(`proj${i}_role`),
    team: t(`proj${i}_team`), budget: t(`proj${i}_budget`), method: t(`proj${i}_method`),
    results: [t(`proj${i}_r1`), t(`proj${i}_r2`), t(`proj${i}_r3`), t(`proj${i}_r4`)],
    tags: t(`proj${i}_tags`).split(","),
  }));

  const certifications = [
    { name: t("cert_pmp"), desc: t("cert_pmp_title") },
    { name: t("cert_filenet"), desc: t("cert_filenet_title") },
    { name: t("cert_was"), desc: t("cert_was_title") },
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
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-3xl mb-8">{t("hero_intro")}</p>
          <div className="flex flex-wrap gap-6 text-sm text-text-dim">
            <a href="mailto:frank@hk-it.hk" className="hover:text-accent transition-colors">✉️ {t("email")}</a>
            <a href="https://x.com/frank4938" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">𝕏 {t("twitter")}</a>
            <span className="hover:text-accent transition-colors">💬 {t("weixin")}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 fade-in">
          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <Counter target={5} suffix="+" />
            <div className="text-text-dim text-sm mt-2">{t("years_experience")}</div>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <Counter target={1000} suffix="万+" />
            <div className="text-text-dim text-sm mt-2">{t("max_budget")}</div>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <Counter target={20} suffix="+" />
            <div className="text-text-dim text-sm mt-2">{t("team_size")}</div>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-6 text-center card-hover">
            <Counter target={0} suffix="延期" />
            <div className="text-text-dim text-sm mt-2">{language === "zh" ? "零" : "Zero"}</div>
          </div>
        </div>
      </header>

      {/* Skills Radar Chart */}
      <Section id="skills" title={t("skills")}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4 text-text-primary font-[family-name:var(--font-heading)]">{t("skills_ai")}</h3>
            <Card>
              <div className="space-y-3">
                <SkillRow label={t("skill_ai_llm")} value={85} color="accent" />
                <SkillRow label={t("skill_ai_poc")} value={88} color="accent" />
                <SkillRow label={t("skill_ai_prompt")} value={90} color="accent" />
                <SkillRow label={t("skill_ai_design")} value={82} color="accent" />
              </div>
            </Card>

            <h3 className="text-xl font-bold mb-4 mt-8 text-text-primary font-[family-name:var(--font-heading)]">{t("skills_backend")}</h3>
            <Card>
              <div className="space-y-3">
                <SkillRow label={t("skill_java")} value={88} color="accent-secondary" />
                <SkillRow label={t("skill_esql")} value={90} color="accent-secondary" />
                <SkillRow label={t("skill_ace")} value={87} color="accent-secondary" />
                <SkillRow label={t("skill_apiconnect")} value={82} color="accent-secondary" />
              </div>
            </Card>

            <h3 className="text-xl font-bold mb-4 mt-8 text-text-primary font-[family-name:var(--font-heading)]">{t("skills_data")}</h3>
            <Card>
              <div className="space-y-3">
                <SkillRow label={t("skill_oracle")} value={85} color="accent" />
                <SkillRow label={t("skill_sqlserver")} value={83} color="accent" />
                <SkillRow label={t("skill_elk")} value={88} color="accent" />
                <SkillRow label={t("skill_prometheus")} value={82} color="accent" />
                <SkillRow label={t("skill_docker")} value={80} color="accent" />
              </div>
            </Card>
          </div>
          <div className="flex justify-center">
            <SkillRadarChart skills={radarSkills} />
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
                <div className="text-xs text-accent mb-2">{project.role}</div>
                <div className="flex flex-wrap gap-2 text-xs text-text-dim mb-3">
                  <span>{project.org}</span><span>·</span><span>{project.period}</span>
                </div>
                <div className="flex flex-wrap gap-1 text-xs mb-3">
                  <span className="bg-accent/10 text-accent px-2 py-0.5 rounded">{project.team}</span>
                  <span className="bg-accent-secondary/10 text-accent-secondary px-2 py-0.5 rounded">{project.budget}</span>
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
                    <span key={tag} className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">{tag.trim()}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/projects" className="inline-block mt-8 text-accent text-sm hover:underline">{t("project_full")}</Link>
      </Section>

      {/* Education & Certifications */}
      <Section id="education" title={t("education")}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold text-lg mb-1">{t("edu_school")}</h3>
            <p className="text-text-secondary text-sm">{t("edu_major")}</p>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg mb-4">{language === "zh" ? "认证" : "Certifications"}</h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="text-text-secondary flex items-start gap-2">
                  <span className="text-accent-secondary mt-0.5">✓</span>
                  <div>
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-text-dim text-sm">{cert.desc}</div>
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
