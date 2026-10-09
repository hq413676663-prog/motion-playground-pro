# 动效工坊 4.1

静态动效展示与编辑网站，无需安装依赖或构建。

## 本地使用

打开 `index.html` 即可使用。请保持各文件和目录的相对位置。

## GitHub Pages 部署

1. 将本文件夹内的项目内容上传到 GitHub 仓库根目录，包含 `.nojekyll`，排除 `.DS_Store` 等系统文件。
2. 在仓库 Settings → Pages 中选择 Deploy from a branch。
3. 选择对应分支及 `/ (root)` 目录，保存后等待部署完成。

## 文件结构

```text
动效工坊4.1/
├── index.html                 页面入口
├── style.css                  基础布局与样式
├── visual-system.css          组件视觉、主题和最终样式覆盖
├── script.js                  当前动效定义、交互和编辑功能
├── assets/                    界面图标
├── vendor/
│   ├── swiper/                当前使用的轮播库、样式及许可证
│   └── gsap/                  保留的库和插件，当前入口未加载
├── docs/
│   ├── CHANGELOG.md           4.1 最终修改记录
│   ├── RELEASE_CHECK.md       本次整理后的检查结果
│   ├── UPLOAD_CHECKLIST.md    GitHub 上传与上线步骤
│   ├── PREVIEW_PARITY.md      此前卡片与弹窗的检查记录
│   ├── preview-parity-*.png   此前检查截图
│   └── reference/animations/  归档的早期参考代码，当前入口未加载
├── AGENTS.md                  项目维护规则
├── .gitignore                 Git 忽略规则
└── .nojekyll                  GitHub Pages 静态资源标记
```

字体和 Font Awesome 图标通过外部 CDN 加载，需要网络连接。浏览器本地保存的数据不会随网站文件上传到 GitHub，也不会自动在不同设备间同步。

## 维护说明

修改动效定义和交互时编辑 `script.js`，修改视觉样式时编辑 `visual-system.css`。卡片预览和弹窗实时预览需同时检查。更新脚本或样式后，同步更新 `index.html` 引用中的版本参数，避免浏览器沿用缓存。

上传前可执行 `node --check script.js` 检查脚本语法，无需安装项目依赖。不要用 `docs/reference/animations/` 中的参考文件覆盖当前动效定义。

本目录是可直接上传的完整版本。最终行为见 `docs/CHANGELOG.md`，本次整理的验证范围见 `docs/RELEASE_CHECK.md`。文档中的早期检查截图不代表后续每一次视觉调整。
