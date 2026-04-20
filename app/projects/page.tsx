"use client";

import { useI18n } from "@/lib/i18n";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

const projectConfigs = [
  { id: "1", archType: "hospital" },
  { id: "2", archType: "exam" },
  { id: "3", archType: "gac" },
  { id: "4", archType: "hk" },
  { id: "5", archType: "bmw" },
  { id: "6", archType: "bond" },
] as const;

export default function ProjectsPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-accent mb-2 font-[family-name:var(--font-heading)]">{t("proj_page_title")}</h1>
      <p className="text-text-secondary mb-12">{t("proj_page_subtitle")}</p>

      <div className="space-y-20">
        {projectConfigs.map(({ id, archType }) => {
          const stackStr = t(`proj${id}_stack`);
          const stack = stackStr.split(",").map((s: string) => s.trim());
          const solKeys = id === "1" || id === "3" ? [1, 2, 3, 4, 5] : id === "5" ? [1, 2, 3, 4] : [1, 2, 3, 4];

          return (
            <div key={id} className="border-b border-border pb-20 last:border-b-0 last:pb-0">
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-text-primary font-[family-name:var(--font-heading)]">{t(`proj${id}_name`)}</h2>
                  <div className="flex flex-wrap gap-2 text-sm text-text-dim mb-4">
                    <span className="text-accent">{t(`proj${id}_org`)}</span>
                    <span>·</span>
                    <span>{t(`proj${id}_period`)}</span>
                  </div>
                  <div className="mb-6">
                    <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full mr-2">{t(`proj${id}_role`)}</span>
                  </div>

                  {/* Background */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3 text-text-primary">{t("proj_background")}</h3>
                    <p className="text-text-secondary leading-relaxed">{t(`proj${id}_bg`)}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3 text-text-primary">{t("proj_solution")}</h3>
                    <ul className="space-y-2">
                      {solKeys.map((i) => (
                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                          <span className="text-accent-secondary mt-1">▸</span>
                          {t(`proj${id}_sol${i}`)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3 text-text-primary">{t("proj_key_results")}</h3>
                    <ul className="space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          {t(`proj${id}_r${i}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-text-primary">{t("proj_architecture")}</h3>
                  <ArchitectureDiagram type={archType} />

                  <div className="mt-6">
                    <h3 className="text-lg font-bold mb-3 text-text-primary">{t("proj_tech_stack")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.map((tech: string) => (
                        <span key={tech} className="bg-bg-primary border border-border text-text-secondary text-sm px-3 py-1.5 rounded-lg">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
