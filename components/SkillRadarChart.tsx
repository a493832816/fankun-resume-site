"use client";

import { useEffect, useRef } from "react";

interface SkillData {
  name: string;
  value: number;
  color?: string;
}

interface SkillRadarChartProps {
  skills: SkillData[];
  className?: string;
}

export default function SkillRadarChart({ skills, className = "" }: SkillRadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Setup canvas
    const size = 400;
    canvas.width = size;
    canvas.height = size;
    ctx.clearRect(0, 0, size, size);

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = 150;
    const sides = 6;
    const angleStep = (Math.PI * 2) / sides;

    // Draw background grid
    for (let level = 1; level <= 4; level++) {
      const levelRadius = (radius / 4) * level;
      ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + levelRadius * Math.cos(angle);
        const y = centerY + levelRadius * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.strokeStyle = "rgba(99, 102, 241, 0.3)";
      ctx.stroke();
    }

    // Draw axes and labels
    for (let i = 0; i < sides; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "rgba(99, 102, 241, 0.3)";
      ctx.stroke();

      // Labels
      const labelRadius = radius + 25;
      const labelX = centerX + labelRadius * Math.cos(angle);
      const labelY = centerY + labelRadius * Math.sin(angle);
      ctx.font = "14px DM Sans, sans-serif";
      ctx.fillStyle = "#9ca3af";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(skills[i]?.name || "", labelX, labelY);
    }

    // Draw data polygon
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const value = skills[i]?.value || 0;
      const r = (value / 100) * radius;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(0, 229, 160, 0.3)";
    ctx.fill();
    ctx.strokeStyle = "#00e5a0";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw data points
    for (let i = 0; i < sides; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const value = skills[i]?.value || 0;
      const r = (value / 100) * radius;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#00e5a0";
      ctx.fill();
      ctx.strokeStyle = "#111118";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }, [skills]);

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <canvas ref={canvasRef} className="max-w-full h-auto" />
    </div>
  );
}
