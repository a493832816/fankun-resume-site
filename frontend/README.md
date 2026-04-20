# 个人简历网站

中英双语个人简历网站，基于 Next.js 构建。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **样式**: Tailwind CSS 4
- **语言**: TypeScript
- **部署**: Vercel

## 功能

- 🌐 中英双语切换（导航栏按钮一键切换）
- 📊 技能进度条（带入场动画）
- 📅 工作经历时间线
- 🏗️ 项目架构图（纯 SVG）
- 📈 行业趋势分析（SVG 折线图）
- 🌙 深色主题（#0a0a0f + #00e5a0 accent）

## 页面

| 路由 | 说明 |
|------|------|
| `/` | 简历首页 — Hero、技能、经历、教育、认证 |
| `/projects` | 项目经验 — 架构图 + 技术栈 |
| `/analysis` | 行业分析 — 趋势图 + 洞察 |

## 本地开发

```bash
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
```
