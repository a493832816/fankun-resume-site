"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export default function Counter({ target, suffix = "", className = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    startTimeRef.current = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTimeRef.current!) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  }, [target, duration]);

  return (
    <div className={className}>
      <span className="text-2xl md:text-4xl font-bold text-accent-secondary">{count.toLocaleString()}{suffix}</span>
    </div>
  );
}
