import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { siteContent as content } from "../assets/js/content.js";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const siteOrigin = "https://zhaozhongningouc.github.io";
const lastModified = content.meta.lastUpdated;

if (!/^\d{4}-\d{2}-\d{2}$/.test(lastModified)) {
  throw new Error("meta.lastUpdated must use YYYY-MM-DD format");
}

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const text = (value, lang) => {
  if (typeof value === "string") return value;
  return value?.[lang] ?? value?.en ?? "";
};

const pagePath = (page, lang) => {
  const suffix = page === "home" ? "" : `${page}/`;
  return lang === "en" ? `/en/${suffix}` : `/${suffix}`;
};

const pageFile = (page, lang) => {
  const route = pagePath(page, lang).replace(/^\//, "");
  return resolve(projectRoot, route, "index.html");
};

const legacyChinesePath = (page) => {
  const suffix = page === "home" ? "" : `${page}/`;
  return `/zh/${suffix}`;
};

const legacyChineseFile = (page) => resolve(projectRoot, legacyChinesePath(page).replace(/^\//, ""), "index.html");

const pageMeta = {
  home: {
    title: content.meta.title,
    description: content.meta.description,
  },
  work: {
    title: { en: "Work — Jonny", zh: "工作｜Jonny" },
    description: {
      en: "Jonny’s current work on OneScience, Earth-system AI, and heterogeneous high-performance scientific software.",
      zh: "Jonny 目前负责 OneScience 整体推进，并开展气象海洋 AI4S 与异构高性能软件研发。",
    },
  },
  research: {
    title: { en: "Research — Jonny", zh: "研究｜Jonny" },
    description: {
      en: "Selected research, publications, and patents in marine spatiotemporal intelligence and multi-source data fusion.",
      zh: "聚焦海洋时空智能与多源数据融合的代表性研究、学术论文和发明专利。",
    },
  },
  experience: {
    title: { en: "Experience — Jonny", zh: "经历｜Jonny" },
    description: {
      en: "Jonny’s work, education, research programs, and selected recognition.",
      zh: "Jonny 的工作经历、教育背景、科研项目和荣誉奖励。",
    },
  },
};

const labels = {
  en: {
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    language: "中文",
    languageLabel: "切换为中文",
    current: "Current",
    email: "Email",
    github: "GitHub",
    repository: "OneScience repository",
    overview: "Overview",
    role: "My role",
    focus: "Focus",
    domains: "Domains",
    selectedResearch: "Selected research",
    publications: "Publications",
    journals: "Journal articles",
    conferences: "Conference papers",
    patents: "Patents",
    workExperience: "Work experience",
    education: "Education",
    programs: "Research programs",
    recognition: "Recognition",
    present: "Present",
    pageIntroWork: "Current work",
    pageIntroResearch: "Research record",
    pageIntroExperience: "Curriculum vitae",
  },
  zh: {
    skip: "跳到主要内容",
    menu: "菜单",
    close: "关闭",
    language: "EN",
    languageLabel: "切换到英文版",
    current: "重点项目",
    email: "邮件联系",
    github: "GitHub",
    repository: "OneScience 仓库",
    overview: "项目概览",
    role: "我的工作",
    focus: "重点方向",
    domains: "覆盖方向",
    selectedResearch: "代表性研究",
    publications: "学术论文",
    journals: "期刊论文",
    conferences: "会议论文",
    patents: "专利成果",
    workExperience: "工作经历",
    education: "教育经历",
    programs: "科研项目",
    recognition: "荣誉奖励",
    present: "至今",
    pageIntroWork: "当前工作",
    pageIntroResearch: "学术研究",
    pageIntroExperience: "个人经历",
  },
};

const externalLink = (url, label, className = "text-link") => `
  <a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">
    <span>${escapeHtml(label)}</span><span aria-hidden="true">↗</span>
  </a>`;

const header = (page, lang) => {
  const copy = labels[lang];
  const alternateLang = lang === "en" ? "zh" : "en";
  const navLinks = content.nav
    .map(
      (item) => `
        <a class="nav-link" href="${pagePath(item.page, lang)}"${item.page === page ? ' aria-current="page"' : ""}>
          ${escapeHtml(text(item.label, lang))}
        </a>`,
    )
    .join("");

  return `
    <a class="skip-link" href="#main-content">${copy.skip}</a>
    <header class="site-header">
      <div class="site-nav container">
        <a class="wordmark" href="${pagePath("home", lang)}" aria-label="Jonny — ${escapeHtml(text(content.nav[0].label, lang))}">Jonny</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu">
          <span class="nav-toggle__label">${copy.menu}</span>
          <span class="nav-toggle__icon" aria-hidden="true"><i></i><i></i></span>
        </button>
        <nav class="nav-menu" id="nav-menu" aria-label="${lang === "en" ? "Primary navigation" : "主要导航"}">
          ${navLinks}
          <a class="language-link" href="${pagePath(page, alternateLang)}" hreflang="${alternateLang === "zh" ? "zh-CN" : "en"}" aria-label="${copy.languageLabel}">${copy.language}</a>
        </nav>
      </div>
    </header>`;
};

const footer = (lang) => {
  const copy = labels[lang];
  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <p>© ${new Date().getFullYear()} Jonny</p>
        <div class="footer-links">
          <a href="mailto:${escapeHtml(content.person.email)}">${copy.email}</a>
          <a href="https://github.com/ZhaoZhongningOUC" target="_blank" rel="noreferrer">${copy.github}</a>
          <a href="https://gitee.com/onescience-ai/onescience" target="_blank" rel="noreferrer">OneScience</a>
        </div>
      </div>
    </footer>`;
};

const homePage = (lang) => {
  const copy = labels[lang];
  const routeLinks = content.nav
    .filter((item) => item.page !== "home")
    .map(
      (item, index) => `
        <a class="route-link" href="${pagePath(item.page, lang)}">
          <span class="route-link__index">0${index + 1}</span>
          <span class="route-link__copy">
            <strong>${escapeHtml(text(item.label, lang))}</strong>
            <small>${escapeHtml(text(item.description, lang))}</small>
          </span>
          <span class="route-link__arrow" aria-hidden="true">→</span>
        </a>`,
    )
    .join("");

  return `
    <main class="home-main" id="main-content">
      <div class="container home-layout">
        <section class="home-hero" aria-labelledby="home-title">
          <div class="home-copy">
            <p class="eyebrow">${escapeHtml(text(content.hero.eyebrow, lang))}</p>
            <h1 id="home-title">Jonny<span aria-hidden="true">.</span></h1>
            <p class="home-headline">${escapeHtml(text(content.hero.headline, lang))}</p>
            <p class="home-summary">${escapeHtml(text(content.hero.summary, lang))}</p>
            <div class="home-meta" aria-label="${lang === "en" ? "Current profile" : "基本信息"}">
              <span><strong>${escapeHtml(text(content.person.organization, lang))}</strong> · OneScience</span>
              <span><strong>${lang === "en" ? "OUC" : "中国海洋大学"}</strong> · ${lang === "en" ? "Ph.D. 2024" : "博士（2024）"}</span>
            </div>
            <div class="home-actions">
              <a class="primary-link" href="mailto:${escapeHtml(content.person.email)}">${copy.email}<span aria-hidden="true">↗</span></a>
              ${externalLink("https://github.com/ZhaoZhongningOUC", copy.github)}
              ${externalLink("https://gitee.com/onescience-ai/onescience", "OneScience")}
            </div>
          </div>
          <figure class="home-portrait">
            <img src="${content.person.portrait}" alt="${lang === "en" ? "Portrait of Jonny" : "Jonny 个人照片"}" width="480" height="600" fetchpriority="high">
          </figure>
        </section>
        <nav class="route-grid" aria-label="${lang === "en" ? "Explore the résumé" : "查看详细经历"}">
          ${routeLinks}
        </nav>
      </div>
    </main>`;
};

const pageHeading = ({ eyebrow, title, intro, lang }) => `
  <header class="page-heading">
    <div class="container page-heading__inner">
      <p class="eyebrow">${escapeHtml(eyebrow)}</p>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(intro)}</p>
    </div>
  </header>`;

const section = ({ label, title, body, className = "" }) => `
  <section class="resume-section ${className}">
    <h2 class="section-label">${escapeHtml(label)}</h2>
    <div class="section-body">
      ${title ? `<h3>${escapeHtml(title)}</h3>` : ""}
      ${body}
    </div>
  </section>`;

const workPage = (lang) => {
  const copy = labels[lang];
  const facts = content.oneScience.facts
    .map(
      (fact) => `
        <div class="fact-item"><dt>${escapeHtml(fact.value)}</dt><dd>${escapeHtml(text(fact.label, lang))}</dd></div>`,
    )
    .join("");
  const focus = content.focusAreas
    .slice(0, 3)
    .map(
      (item) => `
        <li class="simple-row">
          <span>${escapeHtml(item.index)}</span>
          <div><strong>${escapeHtml(text(item.title, lang))}</strong><p>${escapeHtml(text(item.description, lang))}</p></div>
        </li>`,
    )
    .join("");
  const domains = content.oneScience.domains.map((item) => `<li>${escapeHtml(text(item, lang))}</li>`).join("");

  return `
    <main id="main-content">
      ${pageHeading({
        eyebrow: copy.pageIntroWork,
        title: lang === "en" ? "Software for science, built to be used." : "围绕科研需求，研发易用、可复用的 AI4S 软件。",
        intro: lang === "en"
          ? text(content.hero.summary, lang)
          : "当前工作主要围绕 AI4S 框架建设、气象海洋模型研发和异构计算平台适配。",
        lang,
      })}
      <div class="container resume-content">
        ${section({
          label: copy.current,
          title: content.oneScience.title,
          body: `
            <div class="organization-line">
              <img src="${content.oneScience.organizationLogo.src}" alt="${escapeHtml(text(content.oneScience.organizationLogo.alt, lang))}">
              <span>${escapeHtml(text(content.oneScience.subtitle, lang))}</span>
            </div>
            <p class="section-lead">${escapeHtml(text(content.oneScience.description, lang))}</p>
            <div class="role-block"><span>${copy.role}</span><p>${escapeHtml(text(content.oneScience.role, lang))}</p></div>
            <dl class="fact-list">${facts}</dl>
            <div class="section-links">
              ${content.oneScience.links.map((link) => externalLink(link.url, text(link.label, lang))).join("")}
            </div>`,
        })}
        ${section({ label: copy.focus, body: `<ol class="simple-list">${focus}</ol>` })}
        ${section({ label: copy.domains, body: `<ul class="domain-plain-list">${domains}</ul>` })}
      </div>
    </main>`;
};

const selectedResearch = (lang) =>
  content.selectedResearch
    .map(
      (project) => `
        <article class="research-row">
          <div class="research-row__meta"><span>${project.year}</span><span>${escapeHtml(text(project.role, lang))}</span></div>
          <div class="research-row__content">
            <h3>${escapeHtml(project.title)}</h3>
            <p class="research-row__title">${escapeHtml(project.fullTitle)}</p>
            <p>${escapeHtml(text(project.summary, lang))}</p>
            <p class="research-result"><strong>${escapeHtml(text(project.metric.value, lang))}</strong> ${escapeHtml(text(project.metric.label, lang))}</p>
            <div class="section-links">${project.links.map((link) => externalLink(link.url, text(link.label, lang))).join("")}</div>
          </div>
        </article>`,
    )
    .join("");

const publicationRows = (items, lang) =>
  items
    .map(
      (paper) => `
        <a class="publication-row" href="${escapeHtml(paper.url)}" target="_blank" rel="noreferrer">
          <span class="publication-year">${paper.year}</span>
          <span class="publication-copy"><strong>${escapeHtml(paper.title)}</strong><small>${escapeHtml(paper.venue)} · ${escapeHtml(text(paper.role, lang))}</small></span>
          <span aria-hidden="true">↗</span>
        </a>`,
    )
    .join("");

const researchPage = (lang) => {
  const copy = labels[lang];
  const journals = content.publications.filter((paper) => !paper.venue.includes("OCEANS"));
  const conferences = content.publications.filter((paper) => paper.venue.includes("OCEANS"));
  const patents = content.patents
    .map(
      (patent, index) => `
        <article class="patent-row">
          <span>0${index + 1}</span>
          <div><h3>${escapeHtml(text(patent.title, lang))}</h3><p>${escapeHtml(text(patent.type, lang))}</p></div>
        </article>`,
    )
    .join("");

  return `
    <main id="main-content">
      ${pageHeading({
        eyebrow: copy.pageIntroResearch,
        title: lang === "en" ? "From ocean data to measurable research systems." : "围绕海洋时空数据开展建模、轨迹重建与分布预测。",
        intro: lang === "en"
          ? "My academic work focuses on multi-source ocean data, vessel trajectories, and fishing-effort forecasting."
          : "我的学术研究主要围绕多源海洋数据融合、渔船轨迹重建和捕捞努力量分布预测展开。",
        lang,
      })}
      <div class="container resume-content">
        ${section({ label: copy.selectedResearch, body: `<div class="research-list">${selectedResearch(lang)}</div>` })}
        ${section({
          label: copy.publications,
          body: `
            <div class="publication-group"><h3>${copy.journals} <span>${journals.length}</span></h3>${publicationRows(journals, lang)}</div>
            <div class="publication-group"><h3>${copy.conferences} <span>${conferences.length}</span></h3>${publicationRows(conferences, lang)}</div>`,
        })}
        ${section({ label: copy.patents, body: `<div class="patent-list">${patents}</div>` })}
      </div>
    </main>`;
};

const timelineRows = (items, lang) =>
  items
    .map(
      (item) => `
        <article class="timeline-row">
          <div class="timeline-period">${escapeHtml(text(item.period, lang))}</div>
          <div><h3>${escapeHtml(text(item.title, lang))}</h3><p class="timeline-subtitle">${escapeHtml(text(item.subtitle, lang))}</p><p>${escapeHtml(text(item.description, lang))}</p></div>
        </article>`,
    )
    .join("");

const experiencePage = (lang) => {
  const copy = labels[lang];
  const programRows = content.programs
    .map(
      (program) => `
        <article class="program-row">
          <span>${program.period}</span>
          <div><h3>${escapeHtml(text(program.title, lang))}</h3><p class="timeline-subtitle">${escapeHtml(text(program.sponsor, lang))}</p><p>${escapeHtml(text(program.contribution, lang))}</p></div>
        </article>`,
    )
    .join("");
  const awardRows = content.awards
    .map(
      (award) => `
        <article class="award-row"><span>${award.year}</span><div><h3>${escapeHtml(text(award.title, lang))}</h3><p>${escapeHtml(text(award.organization, lang))}</p></div></article>`,
    )
    .join("");

  return `
    <main id="main-content">
      ${pageHeading({
        eyebrow: copy.pageIntroExperience,
        title: lang === "en" ? "A continuous path from ocean research to AI4S." : "从海洋数据研究到 AI4S 软件研发。",
        intro: lang === "en"
          ? "Work, education, research programs, and selected recognition."
          : "这里整理了我的工作经历、教育背景、科研项目和荣誉奖励。",
        lang,
      })}
      <div class="container resume-content">
        ${section({
          label: copy.workExperience,
          body: `<div class="section-logo"><img src="${content.person.organizationLogo.src}" alt="${escapeHtml(text(content.person.organizationLogo.alt, lang))}"></div>${timelineRows(content.journey.slice(0, 1), lang)}`,
        })}
        ${section({
          label: copy.education,
          body: `<div class="section-logo section-logo--ouc"><img src="/assets/images/ouc-logo.jpg" alt="${lang === "en" ? "Ocean University of China logo" : "中国海洋大学标识"}"></div>${timelineRows(content.journey.slice(1), lang)}`,
        })}
        ${section({ label: copy.programs, body: `<div class="program-list">${programRows}</div>` })}
        ${section({ label: copy.recognition, body: `<div class="award-list">${awardRows}</div>` })}
      </div>
    </main>`;
};

const structuredData = (page, lang, canonical) => {
  const data =
    page === "home"
      ? {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jonny",
          url: `${siteOrigin}/`,
          image: `${siteOrigin}/assets/images/portrait.jpg`,
          jobTitle: text(content.person.role, lang),
          worksFor: { "@type": "Organization", name: text(content.person.organization, lang) },
          alumniOf: { "@type": "CollegeOrUniversity", name: lang === "en" ? "Ocean University of China" : "中国海洋大学" },
          sameAs: ["https://github.com/ZhaoZhongningOUC"],
        }
      : {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: text(pageMeta[page].title, lang),
          url: canonical,
          mainEntity: { "@type": "Person", name: "Jonny", url: `${siteOrigin}/` },
        };
  return JSON.stringify(data).replaceAll("<", "\\u003c");
};

const documentTemplate = (page, lang, body) => {
  const languageTag = lang === "zh" ? "zh-CN" : "en";
  const canonical = `${siteOrigin}${pagePath(page, lang)}`;
  const title = text(pageMeta[page].title, lang);
  const description = text(pageMeta[page].description, lang);

  return `<!doctype html>
<html lang="${languageTag}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="author" content="Jonny">
    <meta name="theme-color" content="#ffffff">
    <title>${escapeHtml(title)}</title>
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="en" href="${siteOrigin}${pagePath(page, "en")}">
    <link rel="alternate" hreflang="zh-CN" href="${siteOrigin}${pagePath(page, "zh")}">
    <link rel="alternate" hreflang="x-default" href="${siteOrigin}${pagePath(page, "zh")}">
    ${page === "home" ? '<link rel="preload" href="/assets/images/portrait.jpg" as="image" type="image/jpeg">' : ""}
    <link rel="stylesheet" href="/assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:image" content="${siteOrigin}/assets/images/og-v2.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="${lang === "en" ? "en_US" : "zh_CN"}">
    <meta property="og:locale:alternate" content="${lang === "en" ? "zh_CN" : "en_US"}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${siteOrigin}/assets/images/og-v2.png">
    <script type="application/ld+json">${structuredData(page, lang, canonical)}</script>
    <script defer src="/assets/js/main.js"></script>
  </head>
  <body data-page="${page}" data-lang="${lang}">
    ${header(page, lang)}
    ${body}
    ${footer(lang)}
  </body>
</html>
`;
};

const legacyRedirectTemplate = (page) => {
  const targetPath = pagePath(page, "zh");
  const targetUrl = `${siteOrigin}${targetPath}`;

  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=${targetPath}">
    <link rel="canonical" href="${targetUrl}">
    <title>页面已迁移｜Jonny</title>
  </head>
  <body>
    <main>
      <p>中文页面已迁移到 <a href="${targetPath}">${targetPath}</a>。</p>
    </main>
    <script>window.location.replace(${JSON.stringify(targetPath)} + window.location.search + window.location.hash);</script>
  </body>
</html>
`;
};

const renderPage = (page, lang) => {
  if (page === "home") return homePage(lang);
  if (page === "work") return workPage(lang);
  if (page === "research") return researchPage(lang);
  return experiencePage(lang);
};

const pages = ["home", "work", "research", "experience"];
const languages = ["zh", "en"];
const generatedFiles = new Map();

for (const page of pages) {
  for (const lang of languages) {
    const output = pageFile(page, lang);
    const generatedHtml = documentTemplate(page, lang, renderPage(page, lang)).replace(/[ \t]+$/gm, "");
    generatedFiles.set(output, generatedHtml);
  }
}

for (const page of pages) {
  generatedFiles.set(legacyChineseFile(page), legacyRedirectTemplate(page));
}

const sitemapEntries = pages
  .flatMap((page) =>
    languages.map(
      (lang) => `  <url>
    <loc>${siteOrigin}${pagePath(page, lang)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteOrigin}${pagePath(page, "en")}" />
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${siteOrigin}${pagePath(page, "zh")}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteOrigin}${pagePath(page, "zh")}" />
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === "home" ? (lang === "zh" ? "1.0" : "0.9") : "0.8"}</priority>
  </url>`,
    ),
  )
  .join("\n");

generatedFiles.set(
  resolve(projectRoot, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries}
</urlset>
`,
);

if (process.argv.includes("--check")) {
  const staleFiles = [];

  for (const [output, expected] of generatedFiles) {
    let actual = "";
    try {
      actual = await readFile(output, "utf8");
    } catch {
      staleFiles.push(relative(projectRoot, output));
      continue;
    }
    if (actual !== expected) staleFiles.push(relative(projectRoot, output));
  }

  if (staleFiles.length) {
    console.error(`Generated files are out of date:\n${staleFiles.map((file) => `- ${file}`).join("\n")}`);
    console.error("Run: node scripts/build-pages.mjs");
    process.exitCode = 1;
  } else {
    console.log(`Verified ${pages.length * languages.length} pages, ${pages.length} legacy redirects, and sitemap.xml`);
  }
} else {
  for (const [output, generatedText] of generatedFiles) {
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, generatedText, "utf8");
  }
  console.log(`Generated ${pages.length * languages.length} pages, ${pages.length} legacy redirects, and sitemap.xml`);
}
