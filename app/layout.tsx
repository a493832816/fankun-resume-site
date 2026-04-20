import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({ variable: "--font-heading", subsets: ["latin"], weight: ["600", "700"] });
const inter = Inter({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = { title: "范坤 / Frank Fan - DevOps Engineer", description: "11年IT经验，运维开发工程师，擅长系统架构、中间件调优、监控体系建设" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen font-[family-name:var(--font-body)]">
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
