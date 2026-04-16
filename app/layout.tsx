import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "范坤 | 项目经理",
  description: "资深 IT 项目交付管理 · PMP 认证 · 系统集成与数字化转型",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
