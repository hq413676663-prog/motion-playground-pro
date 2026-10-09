# 4.2 上传与上线清单

## 发布前

最终清单已按本地截图确认，共47项（选项卡4、文字11、按钮7、卡片7、列表6、加载12），详见 `ANIMATION_CATALOG.md`。可上传本目录发布。

## GitHub 文件位置

上传本目录里面的内容到 `hq413676663-prog/motion-playground-pro` 的 `main` 分支根目录。不要再套一层“动效工坊4.2”文件夹。确保 `index.html`、`script.js` 及样式文件为同一次提交的新版本，保持资源相对路径。

GitHub网页上传只覆盖同路径文件，不会自动删除新目录中已经没有的旧文件。可在仓库清理旧根目录 `animations/` 和 `docs/reference/animations/`；它们没有被当前入口加载，清理它们本身不会减少动效卡片。不要删除 `assets/`、`vendor/` 或许可证。

排除 `.DS_Store` 等本机缓存；保留 `.gitignore`、`.nojekyll`。

## 实际托管

当前网站由 Cloudflare Pages 发布，不是 GitHub Pages。无需为此次更新另外启用 GitHub Pages。

提交后确认 Cloudflare Pages 部署成功，且对应最新提交；再打开 https://motion-playground-pro.pages.dev/ 。如果看到的仍是旧页面，强制刷新，并检查该次部署是否已经完成。

部署完成后，应分别用无痕窗口及有旧浏览器数据的窗口核对分类数量、删除项、白天/黑夜主题、卡片与弹窗和交互。浏览器保存的排序或个人删除状态仍可能导致个人可见数量不同，但发布停用清单中的动效不应重新出现。
