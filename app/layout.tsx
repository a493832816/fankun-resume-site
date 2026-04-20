import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const spaceGrotesk = Space_Grotesk({ variable: "--font-heading", subsets: ["latin"], weight: ["600", "700"] });
const inter = Inter({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = { title: "Frank Fan - Resume", description: "Enterprise IT Project Manager & Technical Architect" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen font-[family-name:var(--font-body)]">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
