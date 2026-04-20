"use client";

interface ArchitectureDiagramProps {
  type: "ipaas" | "bigdata" | "ecm" | "k8s" | "mq";
  className?: string;
}

export default function ArchitectureDiagram({ type, className = "" }: ArchitectureDiagramProps) {
  const diagrams: Record<string, React.ReactNode> = {
    ipaas: (
      <svg viewBox="0 0 400 250" className="w-full h-auto" style={{ maxWidth: "500px" }}>
        {/* Background */}
        <rect x="0" y="0" width="400" height="250" fill="#111118" rx="8" />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#0a0a0f", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#1a1a24", stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Platform */}
        <rect x="100" y="30" width="200" height="190" fill="url(#grad1)" stroke="#1f1f2e" strokeWidth="2" rx="6" />
        <text x="200" y="55" textAnchor="middle" fill="#00e5a0" fontSize="14" fontWeight="bold">iPaaS Integration Platform</text>

        {/* Systems */}
        <rect x="20" y="90" width="70" height="40" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="55" y="115" textAnchor="middle" fill="#e8e8ed" fontSize="11">CRM</text>

        <rect x="105" y="90" width="70" height="40" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="140" y="115" textAnchor="middle" fill="#e8e8ed" fontSize="11">ERP</text>

        <rect x="190" y="90" width="70" height="40" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="225" y="115" textAnchor="middle" fill="#e8e8ed" fontSize="11">HRM</text>

        <rect x="275" y="90" width="70" height="40" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="310" y="115" textAnchor="middle" fill="#e8e8ed" fontSize="11">SCM</text>

        {/* Arrow to platform */}
        <line x1="55" y1="130" x2="105" y2="130" stroke="#00e5a0" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="140" y1="130" x2="105" y2="130" stroke="#00e5a0" strokeWidth="1.5" />
        <line x1="140" y1="130" x2="190" y2="130" stroke="#00e5a0" strokeWidth="1.5" />
        <line x1="225" y1="130" x2="190" y2="130" stroke="#00e5a0" strokeWidth="1.5" />
        <line x1="310" y1="130" x2="275" y2="130" stroke="#00e5a0" strokeWidth="1.5" />
        <line x1="310" y1="130" x2="275" y2="130" stroke="#00e5a0" strokeWidth="1.5" />

        {/* Functions in platform */}
        <rect x="120" y="155" width="160" height="50" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="200" y="175" textAnchor="middle" fill="#00e5a0" fontSize="12" fontWeight="bold">Integration Engine</text>
        <text x="200" y="192" textAnchor="middle" fill="#9ca3af" fontSize="10">API Gateway · Event Bus · Rules Engine</text>
      </svg>
    ),

    bigdata: (
      <svg viewBox="0 0 400 250" className="w-full h-auto" style={{ maxWidth: "500px" }}>
        <rect x="0" y="0" width="400" height="250" fill="#111118" rx="8" />
        <rect x="100" y="30" width="200" height="190" fill="#111118" stroke="#1f1f2e" strokeWidth="2" rx="6" />
        <text x="200" y="55" textAnchor="middle" fill="#00e5a0" fontSize="14" fontWeight="bold">Big Data Pipeline</text>

        {/* Sources */}
        <rect x="30" y="80" width="60" height="30" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="60" y="100" textAnchor="middle" fill="#e8e8ed" fontSize="10">Database</text>

        <rect x="30" y="120" width="60" height="30" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="60" y="140" textAnchor="middle" fill="#e8e8ed" fontSize="10">API</text>

        <rect x="30" y="160" width="60" height="30" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="60" y="180" textAnchor="middle" fill="#e8e8ed" fontSize="10">Logs</text>

        {/* Processing */}
        <rect x="140" y="90" width="120" height="50" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="200" y="110" textAnchor="middle" fill="#00e5a0" fontSize="11" fontWeight="bold">Processing</text>
        <text x="200" y="125" textAnchor="middle" fill="#9ca3af" fontSize="9">ETL · Transformation</text>

        {/* Storage */}
        <rect x="140" y="155" width="120" height="50" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="200" y="175" textAnchor="middle" fill="#00e5a0" fontSize="11" fontWeight="bold">Data Warehouse</text>
        <text x="200" y="192" textAnchor="middle" fill="#9ca3af" fontSize="9">Data Lake · Analytics</text>

        {/* Arrows */}
        <line x1="90" y1="95" x2="140" y2="110" stroke="#00e5a0" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="90" y1="135" x2="140" y2="115" stroke="#00e5a0" strokeWidth="1.5" />
        <line x1="90" y1="175" x2="140" y2="180" stroke="#00e5a0" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="260" y1="115" x2="140" y2="180" stroke="#00e5a0" strokeWidth="1.5" />
      </svg>
    ),

    ecm: (
      <svg viewBox="0 0 400 250" className="w-full h-auto" style={{ maxWidth: "500px" }}>
        <rect x="0" y="0" width="400" height="250" fill="#111118" rx="8" />
        <rect x="100" y="30" width="200" height="190" fill="#111118" stroke="#1f1f2e" strokeWidth="2" rx="6" />
        <text x="200" y="55" textAnchor="middle" fill="#00e5a0" fontSize="14" fontWeight="bold">Document Management</text>

        {/* Repository */}
        <rect x="120" y="85" width="160" height="80" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="200" y="110" textAnchor="middle" fill="#e8e8ed" fontSize="12">Document Repository</text>
        <text x="200" y="128" textAnchor="middle" fill="#9ca3af" fontSize="9">Store & Organize</text>

        {/* Users */}
        <rect x="30" y="95" width="60" height="60" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="60" y="120" textAnchor="middle" fill="#e8e8ed" fontSize="10">Users</text>

        {/* Access */}
        <rect x="310" y="95" width="60" height="60" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="340" y="120" textAnchor="middle" fill="#e8e8ed" fontSize="10">Access</text>

        {/* Arrows */}
        <line x1="90" y1="125" x2="120" y2="125" stroke="#00e5a0" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="280" y1="125" x2="310" y2="125" stroke="#00e5a0" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Workflow */}
        <rect x="140" y="180" width="120" height="40" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="200" y="200" textAnchor="middle" fill="#00e5a0" fontSize="11" fontWeight="bold">Workflow</text>
        <text x="200" y="215" textAnchor="middle" fill="#9ca3af" fontSize="9">Approval · Versioning</text>
      </svg>
    ),

    k8s: (
      <svg viewBox="0 0 400 250" className="w-full h-auto" style={{ maxWidth: "500px" }}>
        <rect x="0" y="0" width="400" height="250" fill="#111118" rx="8" />
        <rect x="100" y="30" width="200" height="190" fill="#111118" stroke="#1f1f2e" strokeWidth="2" rx="6" />
        <text x="200" y="55" textAnchor="middle" fill="#00e5a0" fontSize="14" fontWeight="bold">Kubernetes Cluster</text>

        {/* Control Plane */}
        <rect x="150" y="85" width="100" height="35" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="200" y="108" textAnchor="middle" fill="#e8e8ed" fontSize="11">Control Plane</text>

        {/* Worker Nodes */}
        <rect x="30" y="135" width="80" height="50" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="70" y="155" textAnchor="middle" fill="#e8e8ed" fontSize="10">Node 1</text>
        <text x="70" y="172" textAnchor="middle" fill="#9ca3af" fontSize="8">Pods</text>

        <rect x="125" y="135" width="80" height="50" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="165" y="155" textAnchor="middle" fill="#e8e8ed" fontSize="10">Node 2</text>
        <text x="165" y="172" textAnchor="middle" fill="#9ca3af" fontSize="8">Pods</text>

        <rect x="220" y="135" width="80" height="50" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="260" y="155" textAnchor="middle" fill="#e8e8ed" fontSize="10">Node 3</text>
        <text x="260" y="172" textAnchor="middle" fill="#9ca3af" fontSize="8">Pods</text>

        {/* Arrows from control plane */}
        <line x1="150" y1="120" x2="70" y2="135" stroke="#00e5a0" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="150" y1="120" x2="165" y2="135" stroke="#00e5a0" strokeWidth="1.5" />
        <line x1="250" y1="120" x2="260" y2="135" stroke="#00e5a0" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Service Mesh */}
        <rect x="30" y="200" width="250" height="30" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="155" y="218" textAnchor="middle" fill="#9ca3af" fontSize="9">Service Mesh · Load Balancing</text>
      </svg>
    ),

    mq: (
      <svg viewBox="0 0 400 250" className="w-full h-auto" style={{ maxWidth: "500px" }}>
        <rect x="0" y="0" width="400" height="250" fill="#111118" rx="8" />
        <rect x="100" y="30" width="200" height="190" fill="#111118" stroke="#1f1f2e" strokeWidth="2" rx="6" />
        <text x="200" y="55" textAnchor="middle" fill="#00e5a0" fontSize="14" fontWeight="bold">Message Queue Cluster</text>

        {/* Producer 1 */}
        <rect x="30" y="85" width="70" height="40" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="65" y="105" textAnchor="middle" fill="#e8e8ed" fontSize="11">Producer 1</text>

        {/* Producer 2 */}
        <rect x="30" y="135" width="70" height="40" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="65" y="155" textAnchor="middle" fill="#e8e8ed" fontSize="11">Producer 2</text>

        {/* Queue Cluster */}
        <rect x="150" y="100" width="100" height="50" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="200" y="120" textAnchor="middle" fill="#00e5a0" fontSize="11" fontWeight="bold">Queue Cluster</text>
        <text x="200" y="138" textAnchor="middle" fill="#9ca3af" fontSize="9">Round Robin · High Availability</text>

        {/* Consumer 1 */}
        <rect x="270" y="85" width="70" height="40" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="305" y="105" textAnchor="middle" fill="#e8e8ed" fontSize="11">Consumer 1</text>

        {/* Consumer 2 */}
        <rect x="270" y="135" width="70" height="40" fill="#1a1a24" stroke="#6366f1" strokeWidth="1.5" rx="4" />
        <text x="305" y="155" textAnchor="middle" fill="#e8e8ed" fontSize="11">Consumer 2</text>

        {/* Arrows */}
        <line x1="100" y1="105" x2="150" y2="125" stroke="#00e5a0" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="100" y1="155" x2="150" y2="125" stroke="#00e5a0" strokeWidth="1.5" />
        <line x1="250" y1="125" x2="270" y2="105" stroke="#00e5a0" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="250" y1="125" x2="270" y2="155" stroke="#00e5a0" strokeWidth="1.5" />
      </svg>
    ),
  };

  return <div className={className}>{diagrams[type]}</div>;
}
