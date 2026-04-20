import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "陈志远 | 企业级中间件架构师",
  description: "15年+ 企业集成与中间件架构经验",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="border-t border-surface-light py-8 text-center text-muted text-sm">
            <p>使用 Next.js 构建 · © 2024 陈志远</p>
          </footer>
        </I18nProvider>
      </body>
    </html>
  );
}
