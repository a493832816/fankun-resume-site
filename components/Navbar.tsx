"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "简历" },
  { href: "/projects", label: "项目集" },
  { href: "/analysis", label: "行业分析" },
  { href: "/guestbook", label: "留言板" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 h-14">
        <Link href="/" className="font-bold text-lg">范坤</Link>
        <div className="flex gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors ${pathname === l.href ? "text-accent" : "text-text-secondary hover:text-accent"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <a href="mailto:frank@hk-it.hk" className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors">
          联系我
        </a>
      </div>
    </nav>
  );
}
