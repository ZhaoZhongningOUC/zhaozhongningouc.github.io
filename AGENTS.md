# 赵中宁个人主页：工程与维护指南

本文件既是网站维护手册，也是后续智能体进入仓库时的首要说明。修改网站前，请先读完本文件和 `README.md`。

## 1. 项目概况

- 线上地址：<https://zhaozhongningouc.github.io/>
- 仓库：`ZhaoZhongningOUC/zhaozhongningouc.github.io`
- 托管方式：GitHub Pages，从 `main` 分支根目录发布
- 技术形式：无框架、无第三方运行时依赖的静态 HTML、CSS 和 JavaScript
- 支持语言：中文、英文
- 当前默认语言：中文
- 页面顺序：主页、介绍、经历、研究、工作

当前页面：

| 页面 | 中文 | 英文 |
| --- | --- | --- |
| 主页 | `/` | `/en/` |
| 介绍 | `/about/` | `/en/about/` |
| 经历 | `/experience/` | `/en/experience/` |
| 研究 | `/research/` | `/en/research/` |
| 工作 | `/work/` | `/en/work/` |

## 2. 工程如何工作

网站遵循以下数据流：

```text
assets/js/content.js
        ↓
scripts/build-pages.mjs
        ↓
中英文 index.html + sitemap.xml
        ↓
提交并推送 main
        ↓
GitHub Pages 自动发布
```

最重要的原则：

1. `assets/js/content.js` 是个人信息和中英文文案的唯一内容源。
2. `scripts/build-pages.mjs` 负责页面结构、路由、SEO 和静态页面生成。
3. 各目录中的 `index.html` 是自动生成结果，不要直接编辑。
4. 修改内容源后必须重新运行生成器，并将源文件和生成文件一同提交。

## 3. 文件地图

| 文件或目录 | 作用 | 是否直接修改 |
| --- | --- | --- |
| `assets/js/content.js` | 姓名、简介、工作、论文、项目、荣誉等内容 | 是 |
| `scripts/build-pages.mjs` | 页面模板、语言路由、SEO 和生成逻辑 | 需要改变结构时修改 |
| `assets/css/styles.css` | 颜色、字体、间距、响应式布局 | 需要改变视觉时修改 |
| `assets/js/main.js` | 移动端菜单和介绍复制按钮 | 需要改变交互时修改 |
| `assets/images/` | 公开照片、Logo、分享预览图 | 是 |
| `index.html`、`about/` 等 | 默认语言的生成页面 | 否 |
| `en/` 或 `zh/` | 非默认语言页面或旧地址重定向 | 否 |
| `sitemap.xml` | 搜索引擎站点地图 | 否 |
| `.github/workflows/` | 自动检查生成页面 | 一般不修改 |
| `.gitignore` | 阻止简历、奖状原件和原始照片被公开提交 | 谨慎修改 |

## 4. 日常修改内容

### 4.1 修改个人简介

打开 `assets/js/content.js`，主要修改以下字段：

```js
about: {
  brief: {
    text: {
      en: "英文简要介绍",
      zh: "中文简要介绍",
    },
  },
  detailed: {
    paragraphs: [
      // 教育经历、学术研究、主要工作
    ],
  },
}
```

- `about.brief.text`：介绍页开头可直接复制的一段简介。
- `about.highlights.items`：三项核心亮点。
- `about.detailed.paragraphs`：教育、研究和主要工作的完整介绍。
- 中英文应分别自然撰写，中文不要逐句照译英文。

修改后运行：

```bash
node scripts/build-pages.mjs
node scripts/build-pages.mjs --check
```

### 4.2 修改姓名、邮箱、部门或头像

在 `assets/js/content.js` 中修改：

```js
person: {
  name: { en: "Jonny Chao", zh: "赵中宁" },
  portrait: "/assets/images/portrait-wide.jpg",
  email: "zhaozhn@sugon.com",
  organization: { en: "Sugon", zh: "中科曙光" },
  department: { en: "...", zh: "..." },
}
```

部门或单位发生变化时，还要搜索旧名称，并同步检查：

- `meta.description`
- `about.brief.text`
- `about.highlights.items`
- `about.detailed.paragraphs`
- `journey` 中的当前工作条目

替换照片时，优先把适合公开的压缩图放入 `assets/images/`。原始照片不要直接提交；发布前检查 EXIF 或其他元数据。

### 4.3 修改工作、论文、项目和荣誉

内容位置：

- OneScience 与主要工作：`oneScience`、`focusAreas`
- 首页三块摘要：`homepageFeatures`
- 代表性研究：`selectedResearch`
- 全部论文：`publications`
- 专利：`patents`
- 工作和教育经历：`journey`
- 科研项目：`programs`
- 荣誉：`awards`、`earlierRecognition`

论文维护规则：

1. `selectedResearch.fullTitle` 必须与 `publications.title` 完全一致。
2. 代表性研究的入口由生成器固定为“论文原文”和“Google Scholar”，不要增加代码仓库按钮。
3. `citations` 大于 0 时展示 OpenAlex 引用；为 0 时使用 `metric` 和 `metricUrl` 展示期刊指标或收录信息。
4. 引用数或期刊指标更新时，使用 OpenAlex、出版商或期刊官方来源核验，并更新 `citationData.updated`。
5. 不要用论文内部实验指标包装个人影响力。

首页规则：

- `journey` 中只能有一个最高学历条目设置 `featuredOnHome: true`。
- `awards` 中必须恰好有三项设置 `featuredOnHome: true`。
- 主页的工作信息只展示公司和部门，详细业务放在工作页。

## 5. 一行切换默认语言

默认语言由 `assets/js/content.js` 顶部控制：

```js
routing: {
  defaultLanguage: "zh",
},
```

如果希望英文成为默认页面，把 `"zh"` 改为 `"en"`，然后重新生成：

```bash
node scripts/build-pages.mjs
node scripts/build-pages.mjs --check
```

切换后的地址会自动变为：

| `defaultLanguage` | 根路径 `/` | 另一语言 | 旧默认前缀 |
| --- | --- | --- | --- |
| `"zh"` | 中文 | 英文在 `/en/` | `/zh/` 自动跳转到根路径 |
| `"en"` | 英文 | 中文在 `/zh/` | `/en/` 自动跳转到根路径 |

右上角语言按钮、canonical、`hreflang`、`x-default`、结构化数据和站点地图都会随配置自动调整。不要手工移动页面目录。

## 6. 生成、检查和本地预览

建议每次按以下顺序执行：

```bash
git status --short
node --check assets/js/content.js
node --check scripts/build-pages.mjs
node scripts/build-pages.mjs
node scripts/build-pages.mjs --check
git diff --check
```

本地预览：

```bash
python3 -m http.server 8000
```

然后访问 <http://localhost:8000/>。如果默认语言为中文，英文位于 `/en/`；如果默认语言为英文，中文位于 `/zh/`。

至少检查：

- 主页、介绍、经历、研究和工作五个页面
- 中文和英文各一遍
- 右上角语言切换
- 邮箱、论文、Google Scholar、GitHub 和 OneScience 链接
- 手机宽度下的导航、横幅照片和长部门名称
- 页面标题、分享预览和站点地图

## 7. 提交与发布

发布前先确认 `git status --short`，避免把简历、奖状、论文原件、临时文件或其他无关内容加入提交。

基本流程：

```bash
git add <本次修改的源文件和生成文件>
git commit -m "简要说明本次修改"
git push origin main
```

推送到 `main` 后，GitHub Pages 会自动发布。随后在 GitHub Actions 中确认：

- `Verify generated pages` 成功
- `pages build and deployment` 成功

最后访问线上主页，并在必要时强制刷新浏览器缓存。

如果交给智能体处理，可以直接说明：

> 修改 `assets/js/content.js` 中的个人简介，保持中英文自然表达；重新生成、校验、提交并发布到 GitHub Pages。

## 8. 对外分享方式

### 8.1 直接链接

常用链接：

- 通用主页：<https://zhaozhongningouc.github.io/>
- 个人介绍：<https://zhaozhongningouc.github.io/about/>
- 学术研究：<https://zhaozhongningouc.github.io/research/>
- 工作介绍：<https://zhaozhongningouc.github.io/work/>

聊天、邮件签名和在线材料优先使用可点击链接。讲座、申请书或专家信息场景可以直接提供 `/about/`。

### 8.2 二维码

二维码本质上只是把网址编码成图案，扫码后仍然访问同一个网页，因此网站仍需要互联网连接。

推荐使用“直接二维码”，即二维码中直接写入主页 URL。普通静态二维码自身不会过期；真正可能失效的是它所指向的网址。

可让智能体直接生成，也可以使用本地开源工具：

```bash
brew install qrencode
qrencode -t SVG -o zhaozhongning-home.svg -m 4 \
  "https://zhaozhongningouc.github.io/"
```

使用建议：

- PPT 封底：同时放文字链接和二维码，二维码边长至少约 25–30 mm。
- 名片：二维码至少约 20–25 mm，并保留可手动输入的网址。
- 邮件签名：以可点击文字链接为主，二维码为辅。
- 海报或会议胸牌：编码主页根链接，不要使用可能变动的深层页面。
- 印刷前使用微信、iPhone 和 Android 相机按实际尺寸测试。

不建议把长期印刷材料绑定到“动态二维码”或第三方短链接。这些方式依赖服务商、账户和续费，服务停止后无法修复已经印刷的二维码。

### 8.3 自定义域名

如果需要长期用于名片、海报和公开材料，最佳方式是购买一个简短的个人域名，再将它绑定到 GitHub Pages。以后即使迁移托管平台，只要保留域名并修改 DNS，已经印刷的二维码仍可继续使用。

配置自定义域名时：

1. 先购买并长期续费域名。
2. 在 GitHub 仓库 `Settings → Pages → Custom domain` 中添加域名。
3. 按 GitHub 要求配置 DNS，并验证域名所有权。
4. 启用 `Enforce HTTPS`。
5. 把 `assets/js/content.js` 中的 `meta.url` 改为新网址并重新生成网站。
6. 重新生成二维码，并保留旧地址跳转策略。

GitHub 官方文档：

- <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site>
- <https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https>

## 9. 隐私与公开边界

GitHub Pages 是公开网站，仓库中的公开文件也可能被搜索引擎或第三方缓存。

当前不应公开提交：

- `CV/`
- `Paper/`
- `reward/`
- 原始照片 `photo.jpg`、`photo.png`
- 临时目录 `tmp/`
- 手机号、出生日期、籍贯、证件号、签名
- 未公开的公司项目、产品计划、客户或内部数据
- SSH 私钥、访问令牌和其他凭据

这些目录目前通过 `.gitignore` 保护，但提交前仍要检查 `git status`。不要把 Deploy Key 私钥写入仓库、文档或聊天内容。

ResearchGate 当前不公开；除非用户明确要求，不要自行添加。

## 10. 视觉与内容约定

- 整体风格：简洁、低调、炭黑蓝灰，参考 Apple 的信息层级和留白方式。
- 中文字体优先使用苹方，英文使用系统 SF 字体栈。
- 主页使用横幅照片：桌面端文字叠加在左侧深色安全区，移动端展示完整 16:9 图片。
- 不增加无依据的 Logo、图标、时间状语或模板化副标题。
- 中文以自然、常用的职业介绍口吻撰写，避免英文翻译腔和不必要的第一人称。
- 荣誉重点围绕博士阶段，突出山东省和中国海洋大学优秀博士学位论文。
- 论文指标必须可核验；不展示不利的 `0` 引用占位。

## 11. 常见问题

### 修改后页面没有变化

通常是忘记运行生成器，或浏览器仍在使用缓存：

```bash
node scripts/build-pages.mjs
node scripts/build-pages.mjs --check
```

提交并发布后再强制刷新浏览器。

### `--check` 提示 generated files are out of date

运行：

```bash
node scripts/build-pages.mjs
```

然后重新检查并提交生成后的 HTML。

### 图片没有显示

检查：

- 文件是否位于 `assets/images/`
- 路径是否以 `/assets/images/` 开头
- 文件名大小写是否完全一致
- 图片是否已经加入 Git 提交

### 推送成功但线上还没更新

先查看 GitHub Actions。部署通常需要短暂时间；两个工作流成功后再强制刷新页面。

### 切换默认语言后路径混乱

不要手工移动目录。只修改 `routing.defaultLanguage`，运行生成器，并检查根路径、另一语言前缀、右上角切换和 `sitemap.xml`。

## 12. 后续智能体工作约定

1. 先阅读本文件和 `README.md`，再检查 `git status`。
2. 保留用户已有和无关改动，不覆盖、删除或回滚未知文件。
3. 优先修改内容源或模板，不直接编辑生成页面。
4. 不根据常识补全履历、单位官方译名、论文数字或荣誉等级。
5. 当前引用、期刊指标、GitHub Pages 配置等易变化信息必须用官方或一手来源核验。
6. 修改中文时优先保证中文自然；英文应独立润色。
7. 发布前完成语法检查、页面生成检查、差异检查和隐私检查。
8. 如果用户要求发布，推送后确认 GitHub Pages 部署成功，并报告线上地址。

## 13. 发布前清单

- [ ] 中英文内容均已同步且表达自然
- [ ] 姓名、部门、年份、论文、专利和荣誉准确
- [ ] 主页与各副页信息一致
- [ ] 代表性研究只有论文原文和 Google Scholar
- [ ] 没有出现 `0` 引用占位
- [ ] 邮箱和外部链接有效
- [ ] 未提交简历、奖状、论文原件、原始照片或凭据
- [ ] 已运行页面生成和 `--check`
- [ ] `git diff --check` 无错误
- [ ] GitHub Actions 与 Pages 部署成功
