"use client";

import { useI18n } from "@/lib/i18n";

interface ArchitectureDiagramProps {
  type: "ipaas" | "bigdata" | "ecm" | "k8s" | "mq";
  className?: string;
}

export default function ArchitectureDiagram({ type, className = "" }: ArchitectureDiagramProps) {
  const { t } = useI18n();

  const defs = (
    <defs>
      <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#059669" stopOpacity="0.6" />
      </linearGradient>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
      </marker>
      <marker id="arrowheadGreen" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
      </marker>
      <filter id="nodeGlow">
        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#3b82f6" floodOpacity="0.15" />
      </filter>
      <filter id="greenGlow">
        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#10b981" floodOpacity="0.15" />
      </filter>
    </defs>
  );

  const Node = ({ x, y, w, h, label, sub, color = "#3b82f6" }: { x: number; y: number; w: number; h: number; label: string; sub?: string; color?: string }) => (
    <g filter="url(#nodeGlow)">
      <rect x={x} y={y} width={w} height={h} fill="url(#nodeGrad)" stroke={color} strokeWidth="1.5" rx="6" />
      <text x={x + w / 2} y={y + h / 2 - (sub ? 6 : 0)} textAnchor="middle" dominantBaseline="middle" fill="#f1f5f9" fontSize="12" fontWeight="600">{label}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 10} textAnchor="middle" dominantBaseline="middle" fill="#64748b" fontSize="9">{sub}</text>}
    </g>
  );

  const Curve = ({ x1, y1, x2, y2, color = "#3b82f6", green = false }: { x1: number; y1: number; x2: number; y2: number; color?: string; green?: boolean }) => {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const cx1 = mx - dy * 0.2;
    const cy1 = my + dx * 0.2;
    return <path d={`M${x1},${y1} Q${cx1},${cy1} ${x2},${y2}`} fill="none" stroke={color} strokeWidth="1.5" markerEnd={green ? "url(#arrowheadGreen)" : "url(#arrowhead)"} />;
  };

  const diagrams: Record<string, React.ReactNode> = {
    ipaas: (
      <svg viewBox="0 0 500 300" className="w-full h-auto" style={{ maxWidth: "560px" }}>
        {defs}
        <rect x="0" y="0" width="500" height="300" fill="#0c0c14" rx="12" />
        {/* Platform container */}
        <rect x="40" y="25" width="420" height="250" fill="none" stroke="#1e293b" strokeWidth="1" rx="8" strokeDasharray="4 4" />
        <text x="250" y="48" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold" filter="url(#greenGlow)">{t("arch_ipaas_title")}</text>

        {/* Source systems */}
        <Node x={50} y={75} w={80} h={40} label="CRM" color="#3b82f6" />
        <Node x={145} y={75} w={80} h={40} label="ERP" color="#3b82f6" />
        <Node x={240} y={75} w={80} h={40} label="HRM" color="#3b82f6" />
        <Node x={335} y={75} w={80} h={40} label="SCM" color="#3b82f6" />

        {/* Integration engine */}
        <Node x={120} y={155} w={260} h={55} label={t("arch_ipaas_engine")} sub={t("arch_ipaas_engine_sub")} color="#10b981" />

        {/* Curves from systems to engine */}
        <Curve x1={90} y1={115} x2={170} y2={155} green />
        <Curve x1={185} y1={115} x2={210} y2={155} green />
        <Curve x1={280} y1={115} x2={290} y2={155} green />
        <Curve x1={375} y1={115} x2={370} y2={155} green />

        {/* Output */}
        <Node x={120} y={230} w={120} h={35} label="Monitoring" color="#3b82f6" />
        <Node x={260} y={230} w={120} h={35} label="Analytics" color="#3b82f6" />
        <Curve x1={200} y1={210} x2={180} y2={230} />
        <Curve x1={300} y1={210} x2={320} y2={230} />
      </svg>
    ),

    bigdata: (
      <svg viewBox="0 0 500 300" className="w-full h-auto" style={{ maxWidth: "560px" }}>
        {defs}
        <rect x="0" y="0" width="500" height="300" fill="#0c0c14" rx="12" />
        <rect x="40" y="25" width="420" height="250" fill="none" stroke="#1e293b" strokeWidth="1" rx="8" strokeDasharray="4 4" />
        <text x="250" y="48" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold" filter="url(#greenGlow)">{t("arch_bigdata_title")}</text>

        <Node x={40} y={80} w={80} h={35} label="Database" color="#3b82f6" />
        <Node x={40} y={130} w={80} h={35} label="API" color="#3b82f6" />
        <Node x={40} y={180} w={80} h={35} label="Logs" color="#3b82f6" />

        <Node x={180} y={90} w={140} h={55} label={t("arch_bigdata_processing")} sub={t("arch_bigdata_etl")} color="#10b981" />
        <Node x={180} y={165} w={140} h={55} label={t("arch_bigdata_warehouse")} sub={t("arch_bigdata_analytics")} color="#10b981" />

        <Curve x1={120} y1={97} x2={180} y2={110} green />
        <Curve x1={120} y1={147} x2={180} y2={120} green />
        <Curve x1={120} y1={197} x2={180} y2={190} green />

        <Node x={370} y={90} w={80} h={55} label="Dashboard" color="#3b82f6" />
        <Node x={370} y={165} w={80} h={55} label="Data API" color="#3b82f6" />
        <Curve x1={320} y1={117} x2={370} y2={117} />
        <Curve x1={320} y1={192} x2={370} y2={192} />
      </svg>
    ),

    ecm: (
      <svg viewBox="0 0 500 300" className="w-full h-auto" style={{ maxWidth: "560px" }}>
        {defs}
        <rect x="0" y="0" width="500" height="300" fill="#0c0c14" rx="12" />
        <rect x="40" y="25" width="420" height="250" fill="none" stroke="#1e293b" strokeWidth="1" rx="8" strokeDasharray="4 4" />
        <text x="250" y="48" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold" filter="url(#greenGlow)">{t("arch_ecm_title")}</text>

        <Node x={50} y={90} w={80} h={55} label={t("arch_ecm_users")} color="#3b82f6" />
        <Node x={190} y={80} w={120} h={75} label={t("arch_ecm_repo")} sub={t("arch_ecm_store")} color="#10b981" />
        <Node x={370} y={90} w={80} h={55} label={t("arch_ecm_access")} color="#3b82f6" />

        <Curve x1={130} y1={117} x2={190} y2={117} green />
        <Curve x1={310} y1={117} x2={370} y2={117} />

        <Node x={140} y={190} w={220} h={45} label={t("arch_ecm_workflow")} sub={t("arch_ecm_approval")} color="#3b82f6" />
        <Curve x1={250} y1={155} x2={250} y2={190} />
      </svg>
    ),

    k8s: (
      <svg viewBox="0 0 500 300" className="w-full h-auto" style={{ maxWidth: "560px" }}>
        {defs}
        <rect x="0" y="0" width="500" height="300" fill="#0c0c14" rx="12" />
        <rect x="40" y="25" width="420" height="250" fill="none" stroke="#1e293b" strokeWidth="1" rx="8" strokeDasharray="4 4" />
        <text x="250" y="48" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold" filter="url(#greenGlow)">{t("arch_k8s_title")}</text>

        <Node x={175} y={65} w={150} h={40} label={t("arch_k8s_control")} color="#10b981" />

        <Node x={50} y={140} w={110} h={50} label={`${t("arch_k8s_node")} 1`} sub={t("arch_k8s_pods")} color="#3b82f6" />
        <Node x={195} y={140} w={110} h={50} label={`${t("arch_k8s_node")} 2`} sub={t("arch_k8s_pods")} color="#3b82f6" />
        <Node x={340} y={140} w={110} h={50} label={`${t("arch_k8s_node")} 3`} sub={t("arch_k8s_pods")} color="#3b82f6" />

        <Curve x1={210} y1={105} x2={105} y2={140} green />
        <Curve x1={250} y1={105} x2={250} y2={140} green />
        <Curve x1={290} y1={105} x2={395} y2={140} green />

        <Node x={100} y={225} w={300} h={35} label={t("arch_k8s_mesh")} color="#3b82f6" />
        <Curve x1={105} y1={190} x2={170} y2={225} />
        <Curve x1={250} y1={190} x2={250} y2={225} />
        <Curve x1={395} y1={190} x2={330} y2={225} />
      </svg>
    ),

    mq: (
      <svg viewBox="0 0 500 300" className="w-full h-auto" style={{ maxWidth: "560px" }}>
        {defs}
        <rect x="0" y="0" width="500" height="300" fill="#0c0c14" rx="12" />
        <rect x="40" y="25" width="420" height="250" fill="none" stroke="#1e293b" strokeWidth="1" rx="8" strokeDasharray="4 4" />
        <text x="250" y="48" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold" filter="url(#greenGlow)">{t("arch_mq_title")}</text>

        <Node x={50} y={90} w={90} h={40} label={`${t("arch_mq_producer")} 1`} color="#3b82f6" />
        <Node x={50} y={150} w={90} h={40} label={`${t("arch_mq_producer")} 2`} color="#3b82f6" />

        <Node x={200} y={105} w={110} h={55} label={t("arch_mq_cluster")} sub={t("arch_mq_ha")} color="#10b981" />

        <Node x={360} y={90} w={90} h={40} label={`${t("arch_mq_consumer")} 1`} color="#3b82f6" />
        <Node x={360} y={150} w={90} h={40} label={`${t("arch_mq_consumer")} 2`} color="#3b82f6" />

        <Curve x1={140} y1={110} x2={200} y2={125} green />
        <Curve x1={140} y1={170} x2={200} y2={140} green />
        <Curve x1={310} y1={125} x2={360} y2={110} />
        <Curve x1={310} y1={140} x2={360} y2={170} />
      </svg>
    ),
  };

  return <div className={className}>{diagrams[type]}</div>;
}
