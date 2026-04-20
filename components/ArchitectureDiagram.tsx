"use client";

import { useI18n } from "@/lib/i18n";

type ArchType = "hospital" | "hk" | "bmw" | "gac" | "bond";

interface ArchitectureDiagramProps {
  type: ArchType;
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

  const Arrow = ({ x1, y1, x2, y2, green = false }: { x1: number; y1: number; x2: number; y2: number; green?: boolean }) => {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const cx1 = mx - dy * 0.15;
    const cy1 = my + dx * 0.15;
    return <path d={`M${x1},${y1} Q${cx1},${cy1} ${x2},${y2}`} fill="none" stroke={green ? "#10b981" : "#3b82f6"} strokeWidth="1.5" markerEnd={green ? "url(#arrowheadGreen)" : "url(#arrowhead)"} />;
  };

  const Bidir = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const cx1 = mx - dy * 0.15;
    const cy1 = my + dx * 0.15;
    return <>
      <path d={`M${x1},${y1} Q${cx1},${cy1} ${x2},${y2}`} fill="none" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
      <path d={`M${x2},${y2} Q${cx1 + 5},${cy1 + 5} ${x1},${y1}`} fill="none" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrowheadGreen)" />
    </>;
  };

  const diagrams: Record<ArchType, React.ReactNode> = {
    // HK Business Registry: Frontend + FileNet
    hk: (
      <svg viewBox="0 0 500 260" className="w-full h-auto" style={{ maxWidth: "560px" }}>
        {defs}
        <rect x="0" y="0" width="500" height="260" fill="#0c0c14" rx="12" />
        <rect x="30" y="20" width="440" height="220" fill="none" stroke="#1e293b" strokeWidth="1" rx="8" strokeDasharray="4 4" />
        <text x="250" y="45" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold" filter="url(#greenGlow)">{t("arch_hk_title")}</text>

        <Node x={60} y={80} w={160} h={55} label={t("arch_hk_frontend")} sub={t("arch_hk_frontend_sub")} color="#10b981" />
        <Node x={280} y={80} w={160} h={55} label={t("arch_hk_filenet")} sub={t("arch_hk_filenet_sub")} color="#3b82f6" />

        <Bidir x1={220} y1={107} x2={280} y2={107} />

        <Node x={120} y={175} w={260} h={40} label="Maven + Chrome DevTools" color="#64748b" />
        <Arrow x1={140} y1={135} x2={180} y2={175} />
        <Arrow x1={360} y1={135} x2={320} y2={175} />
      </svg>
    ),

    // Hospital iPaaS: HIS/LIS/PACS/EMR → ACE → MQ
    hospital: (
      <svg viewBox="0 0 500 320" className="w-full h-auto" style={{ maxWidth: "560px" }}>
        {defs}
        <rect x="0" y="0" width="500" height="320" fill="#0c0c14" rx="12" />
        <rect x="30" y="20" width="440" height="280" fill="none" stroke="#1e293b" strokeWidth="1" rx="8" strokeDasharray="4 4" />
        <text x="250" y="45" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold" filter="url(#greenGlow)">{t("arch_hospital_title")}</text>

        <Node x={30} y={65} w={85} h={38} label={t("arch_hospital_his")} color="#3b82f6" />
        <Node x={135} y={65} w={85} h={38} label={t("arch_hospital_lis")} color="#3b82f6" />
        <Node x={240} y={65} w={85} h={38} label={t("arch_hospital_pacs")} color="#3b82f6" />
        <Node x={345} y={65} w={85} h={38} label={t("arch_hospital_emr")} color="#3b82f6" />

        <Node x={100} y={150} w={300} h={50} label={t("arch_hospital_ace")} sub={t("arch_hospital_ace_sub")} color="#10b981" />

        <Arrow x1={72} y1={103} x2={160} y2={150} green />
        <Arrow x1={177} y1={103} x2={210} y2={150} green />
        <Arrow x1={282} y1={103} x2={290} y2={150} green />
        <Arrow x1={387} y1={103} x2={380} y2={150} green />

        <Node x={100} y={240} w={300} h={45} label={t("arch_hospital_mq")} sub={t("arch_hospital_mq_sub")} color="#3b82f6" />
        <Arrow x1={250} y1={200} x2={250} y2={240} />
      </svg>
    ),

    // BMW: Data Source → Spark → Model → Tableau
    bmw: (
      <svg viewBox="0 0 500 300" className="w-full h-auto" style={{ maxWidth: "560px" }}>
        {defs}
        <rect x="0" y="0" width="500" height="300" fill="#0c0c14" rx="12" />
        <rect x="30" y="20" width="440" height="260" fill="none" stroke="#1e293b" strokeWidth="1" rx="8" strokeDasharray="4 4" />
        <text x="250" y="45" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold" filter="url(#greenGlow)">{t("arch_bmw_title")}</text>

        <Node x={30} y={75} w={100} h={55} label={t("arch_bmw_source")} sub={t("arch_bmw_source_sub")} color="#3b82f6" />
        <Node x={165} y={75} w={100} h={55} label={t("arch_bmw_spark")} color="#10b981" />
        <Node x={300} y={75} w={100} h={55} label={t("arch_bmw_model")} sub={t("arch_bmw_model_sub")} color="#10b981" />

        <Arrow x1={130} y1={102} x2={165} y2={102} green />
        <Arrow x1={265} y1={102} x2={300} y2={102} />

        <Node x={165} y={175} w={170} h={50} label={t("arch_bmw_tableau")} color="#3b82f6" />
        <Arrow x1={350} y1={130} x2={300} y2={175} />

        <Node x={30} y={175} w={100} h={40} label="Hadoop HDFS" color="#64748b" />
        <Node x={30} y={235} w={100} h={40} label="Airflow ETL" color="#64748b" />
      </svg>
    ),

    // GAC Honda: ESB → APISIX → K8s → Monitoring
    gac: (
      <svg viewBox="0 0 500 300" className="w-full h-auto" style={{ maxWidth: "560px" }}>
        {defs}
        <rect x="0" y="0" width="500" height="300" fill="#0c0c14" rx="12" />
        <rect x="30" y="20" width="440" height="260" fill="none" stroke="#1e293b" strokeWidth="1" rx="8" strokeDasharray="4 4" />
        <text x="250" y="45" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold" filter="url(#greenGlow)">{t("arch_gac_title")}</text>

        <Node x={30} y={75} w={100} h={50} label={t("arch_gac_esb")} color="#64748b" />
        <Node x={175} y={75} w={150} h={50} label={t("arch_gac_apisix")} sub={t("arch_gac_apisix_sub")} color="#10b981" />
        <Node x={370} y={75} w={100} h={50} label={t("arch_gac_k8s")} sub={t("arch_gac_k8s_sub")} color="#3b82f6" />

        <Arrow x1={130} y1={100} x2={175} y2={100} green />
        <Arrow x1={325} y1={100} x2={370} y2={100} />

        <Node x={140} y={180} w={220} h={50} label={t("arch_gac_monitor")} sub={t("arch_gac_monitor_sub")} color="#10b981" />
        <Arrow x1={250} y1={125} x2={250} y2={180} />

        <Node x={30} y={180} w={80} h={40} label="Jenkins" color="#64748b" />
        <Node x={390} y={180} w={80} h={40} label="Redis" color="#64748b" />
      </svg>
    ),

    // ChinaBond: Users → CAS/LDAP → FileNet → Lifecycle
    bond: (
      <svg viewBox="0 0 500 300" className="w-full h-auto" style={{ maxWidth: "560px" }}>
        {defs}
        <rect x="0" y="0" width="500" height="300" fill="#0c0c14" rx="12" />
        <rect x="30" y="20" width="440" height="260" fill="none" stroke="#1e293b" strokeWidth="1" rx="8" strokeDasharray="4 4" />
        <text x="250" y="45" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold" filter="url(#greenGlow)">{t("arch_bond_title")}</text>

        <Node x={30} y={80} w={100} h={50} label={t("arch_bond_user")} color="#3b82f6" />
        <Node x={175} y={80} w={150} h={50} label={t("arch_bond_cas")} sub={t("arch_bond_cas_sub")} color="#10b981" />

        <Arrow x1={130} y1={105} x2={175} y2={105} green />

        <Node x={370} y={80} w={100} h={50} label={t("arch_bond_filenet")} sub={t("arch_bond_filenet_sub")} color="#3b82f6" />
        <Arrow x1={325} y1={105} x2={370} y2={105} />

        <Node x={120} y={190} w={260} h={45} label={t("arch_bond_db")} color="#64748b" />
        <Arrow x1={250} y1={130} x2={250} y2={190} />
      </svg>
    ),
  };

  return <div className={className}>{diagrams[type]}</div>;
}
