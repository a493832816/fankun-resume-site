"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Lang = "zh" | "en";

interface NavT { home: string; projects: string; analysis: string }
interface HeroT { greeting: string; name: string; title: string; subtitle: string; summary: string; cta: string }
interface Translations {
  nav: NavT;
  hero: HeroT;
  skills: { title: string; years: string };
  experience: { title: string };
  education: { title: string };
  certifications: { title: string };
  projects: { title: string; subtitle: string };
  analysis: { title: string; subtitle: string };
  footer: { built: string; copyright: string };
}

const translations: Record<Lang, Translations> = {
  zh: {
    nav: { home: "首页", projects: "项目经验", analysis: "行业分析" },
    hero: {
      greeting: "你好，我是",
      name: "陈志远",
      title: "企业级中间件架构师",
      subtitle: "15年+ 企业集成与中间件架构经验",
      summary: "专注于 IBM MQ、ACE、API Connect 等 IBM 中间件技术栈，结合 Kubernetes、Docker 等云原生技术，为大型金融机构设计和实施高可用、高性能的消息中间件解决方案。",
      cta: "查看项目经验",
    },
    skills: { title: "核心技能", years: "年经验" },
    experience: { title: "工作经历" },
    education: { title: "教育背景" },
    certifications: { title: "专业认证" },
    projects: {
      title: "项目经验",
      subtitle: "精选代表性项目，展示架构设计与技术实施能力",
    },
    analysis: { title: "行业技术趋势分析", subtitle: "基于多年实践的技术趋势洞察" },
    footer: { built: "使用 Next.js 构建", copyright: "© 2024 陈志远" },
  },
  en: {
    nav: { home: "Home", projects: "Projects", analysis: "Analysis" },
    hero: {
      greeting: "Hi, I'm",
      name: "Zhiyuan Chen",
      title: "Enterprise Middleware Architect",
      subtitle: "15+ Years in Enterprise Integration & Middleware Architecture",
      summary: "Specializing in IBM middleware stack (MQ, ACE, API Connect) combined with cloud-native technologies (Kubernetes, Docker) to design and implement high-availability, high-performance messaging middleware solutions for major financial institutions.",
      cta: "View Projects",
    },
    skills: { title: "Core Skills", years: "yrs exp" },
    experience: { title: "Work Experience" },
    education: { title: "Education" },
    certifications: { title: "Certifications" },
    projects: {
      title: "Project Experience",
      subtitle: "Selected projects showcasing architecture design and technical implementation",
    },
    analysis: { title: "Industry Technology Trends", subtitle: "Technology trend insights from years of practice" },
    footer: { built: "Built with Next.js", copyright: "© 2024 Zhiyuan Chen" },
  },
};

interface I18nContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");
  const toggleLang = useCallback(() => setLang((l) => (l === "zh" ? "en" : "zh")), []);
  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
