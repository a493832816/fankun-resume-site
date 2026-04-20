import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "范坤 | Frank Fan - Enterprise IT Project Manager & Technical Architect",
  description: "企业级 IT 项目经理 & 技术架构师 | PMP 认证 | IBM MQ | Kubernetes | iPaaS | 大数据",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <I18nProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
