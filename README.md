# Motion Playground Pro

UI 动画参数测试与参考工具，专为设计师在制作 Figma 高保真 Demo 时快速测试、查看、复制动画参数。

## 使用

双击 `index.html` 在浏览器打开即可。

## 功能

- **Tab** — 10 种 Tab 切换动画
- **Text** — 10 种文字入场动画
- **Button** — 8 种按钮交互动画
- **Card** — 6 种卡片悬浮/状态动画
- **List** — 3 种列表 Stagger 动画

每个 Demo 展示：
- 实时动画效果（可点击/悬浮体验）
- 参数：Duration、Delay、Curve
- 一键复制 CSS 代码

## 项目结构

```
Motion-Playground-Pro/
├── index.html       ← 入口
├── style.css        ← 样式
├── script.js        ← 主逻辑
├── animations/      ← 各分类动画数据
│   ├── tab.js
│   ├── text.js
│   ├── button.js
│   ├── card.js
│   └── list.js
└── README.md
```

## 设计参考

- Figma — 暗色主题、卡片式布局
- Linear — 简洁导航、参数标签
- Apple Design — 动画曲线、质感
- ChatGPT — 清晰的信息层级

## 技术

纯 HTML + CSS + JavaScript，无第三方依赖，双击即可运行。
