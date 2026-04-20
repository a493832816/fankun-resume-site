"use client";

import { useEffect, useRef } from "react";

interface SkillData {
  name: string;
  value: number;
}

interface SkillRadarChartProps {
  skills: SkillData[];
  className?: string;
}

export default function SkillRadarChart({ skills, className = "" }: SkillRadarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    // Trigger animation by adding class
    const poly = svg.querySelector(".radar-polygon");
    if (poly) {
      (poly as SVGElement).classList.remove("radar-polygon");
      void (poly as SVGElement).getBoundingClientRect();
      (poly as SVGElement).classList.add("radar-polygon");
    }
  }, [skills]);

  const size = 400;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 130;
  const sides = skills.length;
  const angleStep = (Math.PI * 2) / sides;

  const getPoint = (i: number, r: number) => {
    const angle = i * angleStep - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  };

  // Hexagon grid points
  const gridLevels = [1, 2, 3];
  const dataPoints = skills.map((s, i) => getPoint(i, (s.value / 100) * radius));
  const dataPath = dataPoints.map((p, i) => (i === 0 ? "M" : "L") + `${p.x},${p.y}`).join(" ") + "Z";

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg ref={svgRef} viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[320px] h-auto">
        <defs>
          <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.15" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid hexagons */}
        {gridLevels.map((level) => {
          const r = (radius / 3) * level;
          const pts = Array.from({ length: sides }, (_, i) => {
            const p = getPoint(i, r);
            return `${p.x},${p.y}`;
          }).join(" ");
          return <polygon key={level} points={pts} fill="none" stroke="#1e293b" strokeWidth="1" />;
        })}

        {/* Axis lines */}
        {skills.map((_, i) => {
          const p = getPoint(i, radius);
          return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#1e293b" strokeWidth="1" />;
        })}

        {/* Data polygon */}
        <polygon
          className="radar-polygon"
          points={dataPoints.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="url(#radarGrad)"
          stroke="#3b82f6"
          strokeWidth="2"
          filter="url(#glow)"
        />

        {/* Data points */}
        {dataPoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="5" fill="#3b82f6" stroke="#0c0c14" strokeWidth="2" filter="url(#glow)" />
        ))}

        {/* Labels */}
        {skills.map((s, i) => {
          const labelR = radius + 30;
          const p = getPoint(i, labelR);
          return (
            <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill="#94a3b8" fontSize="13">
              {s.name}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
