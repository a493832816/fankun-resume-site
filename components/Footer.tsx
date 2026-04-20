export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 text-center text-text-dim text-sm">
      <p>© {new Date().getFullYear()} 范坤 · 用 Next.js &amp; Tailwind CSS 构建</p>
    </footer>
  );
}
