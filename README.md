# Jonny — Personal Website

这是一个无需构建工具的静态个人主页，可直接部署到 GitHub Pages。页面采用中英双语，重点展示 OneScience、AI4S / HPC 工作、代表性研究、论文专利与教育经历。

## 最常用的修改位置

| 想修改的内容 | 文件 |
| --- | --- |
| 姓名、简介、OneScience、论文、项目、经历、链接 | `assets/js/content.js` |
| 颜色、字号、间距与响应式布局 | `assets/css/styles.css` |
| 页面结构与交互 | `assets/js/main.js` |
| 英文 SEO 与社交分享信息 | `index.html` |
| 中文 SEO 与社交分享信息 | `zh/index.html` |
| 个人头像 | `assets/images/portrait.jpg` |
| 公司与学校 Logo | `assets/images/sugon-logo.png`、`assets/images/ouc-logo.jpg` |

绝大多数日常更新只需修改 `assets/js/content.js`。

中文页面位于 `/zh/`，语言切换会在英文首页与中文首页之间跳转。正文内容仍共用同一个 `content.js`，因此不需要维护两套个人资料。

## 新增一篇论文

在 `assets/js/content.js` 中找到 `publications` 数组，复制其中一项并替换内容：

```js
{
  year: "2026",
  title: "Paper title",
  venue: "Journal or Conference",
  role: { en: "First author", zh: "第一作者" },
  url: "https://doi.org/...",
},
```

默认只展示前五篇，点击“查看全部论文”后展示完整列表，因此建议按年份倒序排列。

## 新增一个代表项目

在 `selectedResearch` 数组中复制一个完整项目对象。每个项目支持：

- 中英文简介
- 作者角色
- 一个可量化结果
- 技术标签
- 论文、代码、数据或演示链接

## 更新 OneScience

编辑 `oneScience` 对象中的：

- `description`：项目整体介绍
- `role`：个人职责
- `facts`：可量化事实
- `domains`：覆盖领域
- `links`：仓库、文档和试用入口

## 本地预览

在本目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。由于页面使用 ES Modules，不建议直接双击 `index.html` 预览。

## GitHub Pages 发布

仓库名应为 `zhaozhongningouc.github.io`。在 GitHub 仓库设置中选择：

- Pages source：`Deploy from a branch`
- Branch：`main`
- Folder：`/ (root)`

提交到 `main` 后，GitHub Pages 会自动更新网站。

## 修改姓名、域名或对外标题时

正文数据集中在 `assets/js/content.js`，但搜索引擎和社交平台读取的是静态 HTML。修改姓名、域名、职位标题或分享文案时，请同步检查：

- `index.html`：英文 title、description、Open Graph 与 JSON-LD
- `zh/index.html`：中文 title、description、Open Graph 与 JSON-LD
- `sitemap.xml`、`robots.txt`：正式域名与语言页面地址
- `assets/images/og.png`：社交分享卡片中的姓名和标题

## 内容来源与隐私

`CV/`、`Paper/`、原始 `photo.jpg` 和临时文件已加入 `.gitignore`，不会在正常提交时上传。网站使用优化后的 `assets/images/portrait.jpg`，论文链接优先指向 DOI 或公开代码仓库。

当前已确认的公开信息：

- 博士毕业年份按 `2024` 展示
- 联系邮箱使用 `zhaozhn@sugon.com`

第二项专利的最新法律状态与专利号可在后续确认后补充。
