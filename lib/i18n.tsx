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
    hero_title_zh: "企业级 IT 项目经理 & 技术架构师",
    hero_title_en: "Enterprise IT Project Manager & Technical Architect",
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
    project_full: "查看完整项目集",
    analysis: "行业分析",
  },
  en: {
    name: "Frank Fan",
    role_zh: "企业级 IT 项目经理 & 技术架构师",
    role_en: "Enterprise IT Project Manager & Technical Architect",
    hero_title_zh: "企业级 IT 项目经理 & 技术架构师",
    hero_title_en: "Enterprise IT Project Manager & Technical Architect",
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
  },
};

const I18nContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
} | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
