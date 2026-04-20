const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-text-dim">
          © {currentYear} Frank Fan. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-text-dim">
          <a
            href="https://x.com/frank4938"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            𝕏
          </a>
          <a
            href="https://frank4938.feishu.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            飞书
          </a>
          <a
            href="mailto:frank@hk-it.hk"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
