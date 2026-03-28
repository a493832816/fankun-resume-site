# ComicFlow 前端 MVP 需求

## 项目概述
AI漫剧工具前端。用户输入故事 → 预览分镜 → 预览生图 → 预览漫画 → 导出。

## 技术栈
- Next.js 14+ (App Router)
- Tailwind CSS
- TypeScript
- pnpm

## 后端API（已由后端提供，localhost:8000）

```
POST   /api/projects                  # 创建项目 { title, style, aspect_ratio }
GET    /api/projects                  # 项目列表
GET    /api/projects/{id}             # 项目详情（含分镜列表）
DELETE /api/projects/{id}

POST   /api/projects/{id}/storyboard  # 生成分镜 { story_text, panel_count }
PUT    /api/storyboards/{id}          # 编辑分镜 { scene_description, dialogue, speaker, ... }

POST   /api/storyboards/{id}/image    # 生成单张图片（异步，返回task）
POST   /api/projects/{id}/images      # 批量生成

POST   /api/projects/{id}/layout      # 排版 { layout_type, bubble_style }
GET    /api/projects/{id}/export?format=png  # 导出
```

## 页面结构

### 1. 首页 (/)
- 项目列表（卡片式）
- 「新建项目」按钮
- 空状态引导

### 2. 创建项目页 (/create)
- 表单：标题、风格选择（日漫/美漫/Q版/写实）、画面比例（9:16/3:4/1:1）
- 创建后跳转到编辑页

### 3. 项目编辑页 (/project/[id]) — 核心页面
分三个步骤（Step导航）：

**Step 1: 写故事 & 生成分镜**
- 大文本框输入故事
- 风格和分镜数量选择
- 「生成分镜」按钮
- 分镜卡片列表（可展开编辑每格的场景描述、台词、角色动作等）

**Step 2: 生成图片**
- 每格分镜显示一张图片位
- 「生成全部」按钮 + 单张「重新生成」
- 生成中显示loading状态
- 可点击图片查看大图

**Step 3: 排版 & 导出**
- 布局选择（2格横/3格竖/4格田字/戏剧性/自动）
- 气泡风格选择（日漫/美漫/简约）
- 漫画页面实时预览
- 「导出 PNG」按钮

## UI风格
- 现代简洁，深色主题（漫画工具适合暗色）
- 卡片式布局，间距舒适
- 分镜卡片要直观：序号 + 缩略图 + 关键信息
- 响应式，但主要面向桌面使用

## 组件结构
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # 首页-项目列表
│   ├── create/page.tsx       # 创建项目
│   └── project/[id]/page.tsx # 项目编辑（核心）
├── components/
│   ├── ProjectCard.tsx       # 项目卡片
│   ├── StoryInput.tsx        # 故事输入
│   ├── StoryboardList.tsx    # 分镜列表
│   ├── StoryboardCard.tsx    # 单格分镜（可编辑）
│   ├── ImagePanel.tsx        # 图片生成面板
│   ├── LayoutPreview.tsx     # 漫画排版预览
│   └── StepNav.tsx           # 步骤导航
├── lib/
│   ├── api.ts                # API调用封装（fetch）
│   └── types.ts              # TypeScript类型定义
└── styles/
    └── globals.css
```

## 要求
1. API 调用封装到 lib/api.ts，baseURL 从环境变量读取
2. 加载状态、错误状态都要处理（不能白屏）
3. 分镜编辑支持 inline editing（直接在卡片上改）
4. 图片生成是异步的，要有进度反馈
5. 深色主题，用 Tailwind dark mode
6. 中文界面

请把完整代码写好，确保 pnpm install && pnpm dev 能直接跑起来。
