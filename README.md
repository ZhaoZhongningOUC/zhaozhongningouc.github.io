# 赵中宁 / Jonny Chao — Personal Website

一个采用炭黑蓝灰主题、支持中英文且无需第三方依赖的在线简历，直接部署在 GitHub Pages。

完整的工程结构、内容维护、默认语言切换、发布检查和对外分享说明见 [`AGENTS.md`](./AGENTS.md)。后续人工维护或交给其他智能体修改时，建议先阅读该文档。

## 页面结构

| 页面 | 英文（默认） | 中文 |
| --- | --- | --- |
| 一页简历总览 | `/` | `/zh/` |
| 个人介绍与成果亮点 | `/about/` | `/zh/about/` |
| 工作、教育与荣誉 | `/experience/` | `/zh/experience/` |
| 研究、论文与专利 | `/research/` | `/zh/research/` |
| 当前工作与 OneScience | `/work/` | `/zh/work/` |

当前以英文为默认语言，右上角可切换至中文。主页以一页简历的方式汇总个人信息：工作与学历在同一条横向信息带中等权展示，学术研究、主要工作和代表荣誉分别使用全宽色块章节，并可继续进入对应子页面。默认语言由 `assets/js/content.js` 的 `routing.defaultLanguage` 控制；当前 `/en/` 系列地址会自动跳转到英文根路径。

## 日常修改

| 内容 | 文件 |
| --- | --- |
| 姓名、简介、链接、OneScience、论文、项目、经历、奖项 | `assets/js/content.js` |
| 版式、颜色、字号和移动端样式 | `assets/css/styles.css` |
| 移动端菜单与介绍复制按钮 | `assets/js/main.js` |
| 页面生成结构与 SEO | `scripts/build-pages.mjs` |
| 头像等静态图片 | `assets/images/` |

修改 `assets/js/content.js` 后，可以在仓库根目录先做本地生成和检查：

```bash
node scripts/build-pages.mjs
```

脚本会重新生成 10 个正式中英文页面、5 个旧默认语言前缀跳转页和 `sitemap.xml`。

提交前可以检查生成结果是否与内容源一致：

```bash
node scripts/build-pages.mjs --check
```

推送到 `main` 后，GitHub Actions 会自动重新生成页面、用机器人提交生成结果，并直接部署 GitHub Pages。因此通过 GitHub 网页只修改 `content.js` 也可以生效，无需手工编辑或提交 HTML。

## 新增论文

在 `assets/js/content.js` 的 `publications` 数组中复制一项，填写年份、标题、期刊或会议、作者角色、DOI、OpenAlex 地址及引用次数。引用次数为 0 时，可以填写 `metric` 与 `metricUrl`，改为展示期刊指标或收录信息。页面会自动把名称包含 `OCEANS` 的论文归入会议论文，其余归入期刊论文。主页最高学历由 `journey` 中的 `featuredOnHome: true` 决定。

如果论文同时属于代表研究，请在 `selectedResearch` 中增加更完整的简介，并确保 `fullTitle` 与 `publications` 中的标题完全一致。代表研究只展示论文原文和 Google Scholar；论文地址统一读取 `publications` 中的 DOI。页面展示的是 OpenAlex 引用次数，不展示论文内部实验指标。更新引用次数时，同时修改 `citationData.updated`。

## 本地预览

```bash
python3 -m http.server 8000
```

访问 `http://localhost:8000` 查看英文主页，访问 `http://localhost:8000/about/` 查看英文个人介绍页，中文位于 `http://localhost:8000/zh/`；`http://localhost:8000/en/` 会跳转到英文根路径。页面为纯静态 HTML，关闭 JavaScript 后核心内容仍然完整；JavaScript 负责移动端菜单和介绍页复制按钮。

## GitHub Pages

仓库设置：

- Source：`GitHub Actions`
- Workflow：`.github/workflows/deploy-pages.yml`

推送到 `main` 后，工作流会完成语法检查、页面生成、生成文件同步、精简发布产物打包和 Pages 部署。公开产物不包含 `assets/js/content.js`、生成脚本、README 或维护文档。

## 内容与隐私

`CV/`、`Paper/`、`reward/`、原始照片和临时文件已加入 `.gitignore`，不会正常提交。奖状原件仅用于核对公开文字，其中可能包含个人敏感信息，不应发布到 GitHub Pages。公开信息目前包括：

- 博士毕业年份：2024
- 联系邮箱：`zhaozhn@sugon.com`
- GitHub 与 OneScience 公开仓库

手机号、出生日期和籍贯均未公开。
