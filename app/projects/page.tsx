"use client";

import { useI18n } from "@/lib/i18n";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

const techStackMap: Record<string, string[]> = {
  ipaas: ["IBM MQ", "IBM ACE", "API Connect", "Kubernetes", "Docker", "Spring Boot"],
  bigdata: ["Apache NiFi", "Kafka", "Hadoop", "Hive", "HBase", "Spark", "Flink"],
  ecm: ["IBM FileNet", "IBM Content Navigator", "LDAP", "Active Directory", "Java EE"],
  k8s: ["Kubernetes", "Docker", "Helm", "Istio", "Prometheus", "Grafana", "Jenkins"],
  mq: ["IBM MQ", "RDQM", "MQ Cluster", "SSL/TLS", "Linux", "Shell"],
};

const tagsMap: Record<string, string[]> = {
  ipaas: ["iPaaS", "System Integration", "Finance", "Microservices"],
  bigdata: ["Big Data", "Data Governance", "Government", "Hadoop"],
  ecm: ["ECM", "Document Management", "Enterprise", "IBM FileNet"],
  k8s: ["Kubernetes", "Docker", "Cloud Native", "DevOps"],
  mq: ["IBM MQ", "High Availability", "Middleware", "Finance"],
};

export default function ProjectsPage() {
  const { t } = useI18n();

  const projectIds = ["ipaas", "bigdata", "ecm", "k8s", "mq"] as const;

  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-accent mb-2 font-[family-name:var(--font-heading)]">{t("proj_page_title")}</h1>
      <p className="text-text-secondary mb-12">{t("proj_page_subtitle")}</p>

      <div className="space-y-20">
        {projectIds.map((id) => (
          <div key={id} className="border-b border-border pb-20 last:border-b-0 last:pb-0">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-text-primary font-[family-name:var(--font-heading)]">{t(`proj_${id}_name`)}</h2>
                <div className="flex flex-wrap gap-2 text-sm text-text-dim mb-4">
                  <span className="text-accent">{t(`proj_${id}_org`)}</span>
                  <span>·</span>
                  <span>{t(`proj_${id}_period`)}</span>
                </div>
                <div className="mb-6">
                  <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full mr-2">{t(`proj_${id}_role`)}</span>
                  <span className="bg-accent-secondary/10 text-accent-secondary text-xs px-2 py-1 rounded-full">{tagsMap[id][0]}</span>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">{t(`proj_${id}_desc`)}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 text-text-primary">{t("proj_key_results")}</h3>
                  <ul className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        {t(`proj_${id}_r${i}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 text-text-primary">{t("proj_architecture")}</h3>
                <ArchitectureDiagram type={id} />

                <div className="mt-6">
                  <h3 className="text-lg font-bold mb-3 text-text-primary">{t("proj_tech_stack")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStackMap[id].map((tech) => (
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
