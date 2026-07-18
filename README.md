# Jonny — Personal Website

一个简洁、双语、无需第三方依赖的在线简历，直接部署在 GitHub Pages。

## 页面结构

| 页面 | 英文 | 中文 |
| --- | --- | --- |
| 简短主页 | `/` | `/zh/` |
| 当前工作与 OneScience | `/work/` | `/zh/work/` |
| 研究、论文与专利 | `/research/` | `/zh/research/` |
| 工作、教育与荣誉 | `/experience/` | `/zh/experience/` |

主页只保留个人介绍、当前身份、联系方式和三个内容入口，详细履历放在子页面中。

## 日常修改

| 内容 | 文件 |
| --- | --- |
| 姓名、简介、链接、OneScience、论文、项目、经历、奖项 | `assets/js/content.js` |
| 版式、颜色、字号和移动端样式 | `assets/css/styles.css` |
| 移动端菜单 | `assets/js/main.js` |
| 页面生成结构与 SEO | `scripts/build-pages.mjs` |
| 头像与 Logo | `assets/images/` |

修改 `assets/js/content.js` 后，在仓库根目录运行：

```bash
node scripts/build-pages.mjs
```

脚本会重新生成全部 8 个中英文页面和 `sitemap.xml`。生成后的 HTML 需要与内容文件一起提交。

提交前可以检查生成结果是否与内容源一致：

```bash
node scripts/build-pages.mjs --check
```

仓库中的 GitHub Actions 也会自动执行这项检查，避免遗漏重新生成页面。

## 新增论文

在 `assets/js/content.js` 的 `publications` 数组中复制一项，填写年份、标题、期刊或会议、作者角色及 DOI。页面会自动把名称包含 `OCEANS` 的论文归入会议论文，其余归入期刊论文。

如果论文同时属于代表研究，请在 `selectedResearch` 中增加更完整的简介、量化结果和代码链接。

## 本地预览

```bash
python3 -m http.server 8000
```

访问 `http://localhost:8000`。页面为纯静态 HTML，关闭 JavaScript 后核心内容仍然完整；JavaScript 只负责移动端菜单。

## GitHub Pages

仓库设置：

- Source：`Deploy from a branch`
- Branch：`main`
- Folder：`/ (root)`

推送到 `main` 后会自动更新网站。

## 内容与隐私

`CV/`、`Paper/`、原始照片和临时文件已加入 `.gitignore`，不会正常提交。公开信息目前包括：

- 博士毕业年份：2024
- 联系邮箱：`zhaozhn@sugon.com`
- GitHub 与 OneScience 公开仓库

手机号、出生日期和籍贯均未公开。
