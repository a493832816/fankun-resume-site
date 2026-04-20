"use client";

import { useEffect } from "react";
import Link from "next/link";

function useFadeIn() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-20 px-4 max-w-4xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-accent fade-in">{title}</h2>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-bg-card border border-border rounded-xl p-6 mb-6 fade-in hover:border-accent/40 transition-colors duration-300 ${className}`}>{children}</div>
);

export default function Home() {
  useFadeIn();

  return (
    <>
      {/* Hero */}
      <header id="about" className="pt-32 pb-16 px-4 max-w-4xl mx-auto">
        <div className="fade-in">
          <p className="text-accent text-sm font-medium mb-3">项目经理 · PMP 认证</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">范坤</h1>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            资深 IT 项目交付管理，超5年系统集成与数字化转型经验。专注企业级集成解决方案（iPaaS）、内容管理（ECM）、大数据项目交付，擅长全生命周期管理与跨部门协调。
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-text-dim">
            <a href="mailto:frank@hk-it.hk" className="hover:text-accent transition-colors">✉️ frank@hk-it.hk</a>
            <a href="https://x.com/frank4938" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">𝕏 @frank4938</a>
            <a href="https://frank4938.feishu.cn" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">🐦 飞书</a>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 fade-in">
          {[
            { num: "5+", label: "年项目经验" },
            { num: "1000万+", label: "最大项目预算" },
            { num: "30%+", label: "效率提升" },
            { num: "0", label: "延期上线" },
          ].map((s) => (
            <div key={s.label} className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent">{s.num}</div>
              <div className="text-text-dim text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Experience */}
      <Section id="experience" title="工作经历">
        {[
          { company: "武汉汐鸣科技有限公司", role: "项目经理", period: "2021.01 – 至今", desc: "负责客户售前咨询、需求调研、蓝图设计、SOW制定及项目全生命周期管理。领导10–18人团队，成功交付多家制造业及政府客户的集成与平台项目。主导平台架构优化、流程重构及运维交付。" },
          { company: "南京宝科思人工智能科技有限公司", role: "开发实施顾问", period: "2017.04 – 2020.12", desc: "推动大型国企内容管理平台建设，主导跨系统集成与统一标准落地。主导企业服务总线（ESB）及 iPaaS 平台建设。" },
          { company: "克沃斯（北京）信息技术有限公司", role: "实施工程师", period: "2014.11 – 2017.03", desc: "负责陕煤化 IBM Portal 门户系统搭建，完成 LDAP、WebSeal、TIM 用户体系的统一集成。负责 IBM Optim 数据脱敏方案设计。" },
        ].map((job) => (
          <Card key={job.company}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg">{job.company}</h3>
                <p className="text-accent text-sm">{job.role}</p>
              </div>
              <span className="text-text-dim text-sm mt-1 sm:mt-0">{job.period}</span>
            </div>
            <p className="text-text-secondary leading-relaxed">{job.desc}</p>
          </Card>
        ))}
      </Section>

      {/* Projects Preview */}
      <Section id="projects" title="主要项目经验">
        {[
          { name: "香港工商注册材料审批系统优化", org: "香港工商注册处", period: "2025.05 – 至今", results: ["页面加载提升80%", "文档上传提升80%", "中文兼容率99%+"] },
          { name: "智慧病房 iPaaS 集成", org: "吉林大学第一附属医院", period: "2024.10 – 2025.04", results: ["接口开发量减少60%", "交互效率提升40%", "日均15万+消息稳定运行"] },
          { name: "大数据门店选址平台搭建", org: "BMW", period: "2021.04 – 2024.05", results: ["提升选址准确率", "平台纳入企业市场战略参考框架"] },
        ].map((p) => (
          <Card key={p.name}>
            <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
            <div className="flex flex-wrap gap-2 text-xs text-text-dim mb-3">
              <span>{p.org}</span><span>·</span><span>{p.period}</span>
            </div>
            <ul className="space-y-1">
              {p.results.map((r) => (
                <li key={r} className="text-text-secondary text-sm flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>{r}
                </li>
              ))}
            </ul>
          </Card>
        ))}
        <Link href="/projects" className="inline-block mt-4 text-accent text-sm hover:underline">
          查看完整项目集 →
        </Link>
      </Section>

      {/* Skills */}
      <Section id="skills" title="技术能力">
        <Card>
          {[
            { title: "AI 能力", items: ["AI/LLM 技术评估与选型", "POC 验证", "主流 AI 平台生态", "Prompt Engineering"] },
            { title: "后端与中间件", items: ["Java EE", "Spring Boot", "ESQL (IBM ACE)", "IBM MQ (RDQM)", "IBM ACE", "Apache NiFi", "IBM API Connect", "WPS 企业生态共创平台"] },
            { title: "数据与运维", items: ["Oracle", "PostgreSQL", "DB2", "SQL Server", "Redis", "ELK + Jaeger", "Prometheus + Grafana", "JMeter", "Docker", "Jenkins CI/CD"] },
          ].map((cat) => (
            <div key={cat.title} className="mb-6 last:mb-0">
              <h4 className="font-medium text-accent mb-3">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="bg-bg-primary border border-border rounded-lg px-3 py-1.5 text-sm text-text-secondary hover:border-accent/50 hover:text-text-primary transition-colors duration-200">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </Card>
      </Section>

      {/* Education & Certs */}
      <Section id="education" title="教育背景 & 认证">
        <Card>
          <h3 className="font-semibold text-lg mb-1">湖北工程学院新技术学院</h3>
          <p className="text-text-secondary text-sm">计算机科学与技术（本科）</p>
          <p className="text-text-dim text-sm mt-1">2011.09 – 2015.06</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-lg mb-4">认证证书</h3>
          <ul className="space-y-2">
            {[
              "PMP 项目管理专业认证（PMI）",
              "IBM FileNet Certified Professional",
              "IBM WebSphere Application Server Network Deployment",
            ].map((c) => (
              <li key={c} className="text-text-secondary flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>{c}
              </li>
            ))}
          </ul>
        </Card>
      </Section>
    </>
  );
}
