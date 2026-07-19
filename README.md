# Jonny — Personal Website

一个简洁、双语、无需第三方依赖的在线简历，直接部署在 GitHub Pages。

## 页面结构

| 页面 | 中文（默认） | 英文 |
| --- | --- | --- |
| 简短主页 | `/` | `/en/` |
| 当前工作与 OneScience | `/work/` | `/en/work/` |
| 研究、论文与专利 | `/research/` | `/en/research/` |
| 工作、教育与荣誉 | `/experience/` | `/en/experience/` |

中文是默认语言。主页只保留个人介绍、当前身份、联系方式和三个内容入口，详细履历放在子页面中。原有 `/zh/` 系列地址会自动跳转到新的中文地址。

## 日常修改

| 内容 | 文件 |
| --- | --- |
| 姓名、简介、链接、OneScience、论文、项目、经历、奖项 | `assets/js/content.js` |
| 版式、颜色、字号和移动端样式 | `assets/css/styles.css` |
| 移动端菜单 | `assets/js/main.js` |
| 页面生成结构与 SEO | `scripts/build-pages.mjs` |
| 头像等静态图片 | `assets/images/` |

修改 `assets/js/content.js` 后，在仓库根目录运行：

```bash
node scripts/build-pages.mjs
```

脚本会重新生成 8 个正式中英文页面、4 个旧中文地址跳转页和 `sitemap.xml`。生成后的 HTML 需要与内容文件一起提交。

提交前可以检查生成结果是否与内容源一致：

```bash
node scripts/build-pages.mjs --check
```

仓库中的 GitHub Actions 也会自动执行这项检查，避免遗漏重新生成页面。

## 新增论文

在 `assets/js/content.js` 的 `publications` 数组中复制一项，填写年份、标题、期刊或会议、作者角色、DOI、OpenAlex 地址及引用次数。页面会自动把名称包含 `OCEANS` 的论文归入会议论文，其余归入期刊论文。

如果论文同时属于代表研究，请在 `selectedResearch` 中增加更完整的简介和代码链接，并确保 `fullTitle` 与 `publications` 中的标题完全一致。页面展示的是 OpenAlex 引用次数，并提供 Google Scholar 按论文题名实时检索的入口，不展示论文内部实验指标。更新引用次数时，同时修改 `citationData.updated`。

## 本地预览

```bash
python3 -m http.server 8000
```

访问 `http://localhost:8000` 查看默认中文主页，访问 `http://localhost:8000/en/` 查看英文版。原有 `http://localhost:8000/zh/` 会跳转到中文主页。页面为纯静态 HTML，关闭 JavaScript 后核心内容仍然完整；JavaScript 只负责移动端菜单。

## GitHub Pages

仓库设置：

- Source：`Deploy from a branch`
- Branch：`main`
- Folder：`/ (root)`

推送到 `main` 后会自动更新网站。

## 内容与隐私

`CV/`、`Paper/`、`reward/`、原始照片和临时文件已加入 `.gitignore`，不会正常提交。奖状原件仅用于核对公开文字，其中可能包含个人敏感信息，不应发布到 GitHub Pages。公开信息目前包括：

- 博士毕业年份：2024
- 联系邮箱：`zhaozhn@sugon.com`
- GitHub 与 OneScience 公开仓库

手机号、出生日期和籍贯均未公开。
