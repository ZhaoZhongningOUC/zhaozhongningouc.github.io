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
  about: {
    title: { en: "About — Jonny Chao", zh: "个人介绍｜赵中宁" },
    description: {
      en: "Profile of Jonny Chao, covering education, research output, recognition, and current work.",
      zh: "赵中宁个人介绍，涵盖教育背景、学术成果、代表荣誉与主要工作。",
    },
  },
  work: {
    title: { en: "Work — Jonny Chao", zh: "工作｜赵中宁" },
    description: {
      en: "OneScience development, Earth-system AI, OneSkills and Agent support, and heterogeneous high-performance scientific software.",
      zh: "OneScience 研发、气象海洋 AI4S、OneSkills 与 Agent 支持及异构高性能软件工作。",
    },
  },
  research: {
    title: { en: "Research — Jonny Chao", zh: "研究｜赵中宁" },
    description: {
      en: "Selected research, publications, and patents in marine spatiotemporal intelligence and multi-source data fusion.",
      zh: "聚焦海洋时空智能与多源数据融合的代表性研究、学术论文和发明专利。",
    },
  },
  experience: {
    title: { en: "Experience — Jonny Chao", zh: "经历｜赵中宁" },
    description: {
      en: "Work, education, research programs, and selected doctoral recognition.",
      zh: "工作经历、教育背景、科研项目与博士阶段代表性荣誉。",
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
    current: "Product development",
    email: "Email",
    github: "GitHub",
    about: "About",
    repository: "OneScience repository",
    overview: "Overview",
    role: "Core responsibilities",
    focus: "Areas of work",
    domains: "Capability areas",
    selectedResearch: "Selected research",
    publications: "Publications",
    journals: "Journal articles",
    conferences: "Conference papers",
    patents: "Patents",
    workExperience: "Work experience",
    education: "Education",
    programs: "Research programs",
    recognition: "Doctoral research recognition",
    present: "Present",
  },
  zh: {
    skip: "跳到主要内容",
    menu: "菜单",
    close: "关闭",
    language: "EN",
    languageLabel: "切换到英文版",
    current: "产品研发",
    email: "邮件联系",
    github: "GitHub",
    about: "个人介绍",
    repository: "OneScience 仓库",
    overview: "项目概览",
    role: "主要工作",
    focus: "工作方向",
    domains: "覆盖领域与能力",
    selectedResearch: "代表性研究",
    publications: "学术论文",
    journals: "期刊论文",
    conferences: "会议论文",
    patents: "专利成果",
    workExperience: "工作经历",
    education: "教育经历",
    programs: "科研项目",
    recognition: "博士研究相关荣誉",
    present: "至今",
  },
};

const externalLink = (url, label, className = "text-link") => `
  <a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">
    <span>${escapeHtml(label)}</span><span aria-hidden="true">↗</span>
  </a>`;

const internalLink = (url, label, className = "text-link") => `
  <a class="${className}" href="${escapeHtml(url)}">
    <span>${escapeHtml(label)}</span><span aria-hidden="true">→</span>
  </a>`;

const googleScholarUrl = (title) =>
  `https://scholar.google.com/scholar?q=${encodeURIComponent(`"${title}"`)}`;

const header = (page, lang) => {
  const copy = labels[lang];
  const alternateLang = lang === "en" ? "zh" : "en";
  const displayName = text(content.person.name, lang);
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
        <a class="wordmark" href="${pagePath("home", lang)}" aria-label="${escapeHtml(displayName)} — ${escapeHtml(text(content.nav[0].label, lang))}">${escapeHtml(displayName)}</a>
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

const footer = (page, lang) => {
  const copy = labels[lang];
  const displayName = text(content.person.name, lang);
  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <p>© ${new Date().getFullYear()} ${escapeHtml(displayName)}</p>
        <div class="footer-links">
          <a href="mailto:${escapeHtml(content.person.email)}">${copy.email}</a>
          <a href="https://github.com/ZhaoZhongningOUC" target="_blank" rel="noreferrer">${copy.github}</a>
          ${page === "home" ? "" : '<a href="https://gitee.com/onescience-ai/onescience" target="_blank" rel="noreferrer">OneScience</a>'}
        </div>
      </div>
    </footer>`;
};

const homeFeatureSection = ({ className, href, label, title, summary, details, linkLabel }) => `
  <section class="home-feature-section ${className}">
    <a class="container home-feature-inner" href="${escapeHtml(href)}">
      <div class="home-feature-copy">
        <span class="home-card-label">${escapeHtml(label)}</span>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(summary)}</p>
        <span class="home-feature-link">${escapeHtml(linkLabel)}<span aria-hidden="true">→</span></span>
      </div>
      ${details}
    </a>
  </section>`;

const homePage = (lang) => {
  const copy = labels[lang];
  const displayName = text(content.person.name, lang);
  const highestEducation = content.journey.find((item) => item.featuredOnHome);
  if (!highestEducation) throw new Error("One education entry must set featuredOnHome: true");
  const leadAuthorTotal = content.publications.filter((paper) => paper.leadAuthor).length;
  const workHighlights = content.focusAreas
    .slice(0, 3)
    .map(
      (item) => `
        <li><strong>${escapeHtml(text(item.title, lang))}</strong><span>${escapeHtml(item.index)}</span></li>`,
    )
    .join("");
  const recognitionHighlights = content.awards
    .filter((award) => award.featuredOnHome)
    .map(
      (award) => `
        <li><strong>${escapeHtml(text(award.title, lang))}</strong><span>${award.year}</span></li>`,
    )
    .join("");
  const recognitionCount = content.awards.filter((award) => award.featuredOnHome).length;
  if (recognitionCount !== 3) throw new Error("Exactly three awards must set featuredOnHome: true");

  return `
    <main class="home-main" id="main-content">
      <section class="home-hero" aria-labelledby="home-title">
        <div class="container home-hero__inner">
          <div class="home-copy">
            <p class="eyebrow">${escapeHtml(text(content.hero.eyebrow, lang))}</p>
            <h1 id="home-title">${escapeHtml(displayName)}<span aria-hidden="true">.</span></h1>
            <p class="home-headline">${escapeHtml(text(content.hero.headline, lang))}</p>
            <div class="home-actions">
              <a class="primary-link" href="mailto:${escapeHtml(content.person.email)}">${copy.email}<span aria-hidden="true">↗</span></a>
              ${internalLink(pagePath("about", lang), copy.about)}
            </div>
          </div>
        </div>
        <figure class="home-portrait">
          <img src="${content.person.portrait}" alt="${lang === "en" ? "Portrait of Jonny Chao outdoors" : "赵中宁户外照片"}" width="1672" height="941" fetchpriority="high">
        </figure>
      </section>
      <section class="home-status-section" aria-labelledby="resume-overview-title">
        <div class="container home-status-row">
          <h2 class="sr-only" id="resume-overview-title">${lang === "en" ? "Résumé overview" : "简历概览"}</h2>
          <a class="home-status-item" href="${pagePath("work", lang)}">
            <span class="home-card-label">${lang === "en" ? "Work" : "工作"}</span>
            <div class="home-status-main">
              <strong>${escapeHtml(text(content.person.organization, lang))}</strong>
              <p>${escapeHtml(text(content.person.department, lang))}</p>
            </div>
            <span class="home-status-link">${lang === "en" ? "Work experience" : "工作经历"}<span aria-hidden="true">→</span></span>
          </a>
          <a class="home-status-item" href="${pagePath("experience", lang)}#education">
            <span class="home-card-label">${lang === "en" ? "Education" : "学历"}</span>
            <div class="home-status-main">
              <strong>${escapeHtml(text(highestEducation.subtitle, lang))}</strong>
              <p>${escapeHtml(text(highestEducation.homeDegree, lang))}</p>
            </div>
            <span class="home-status-link">${lang === "en" ? "Education" : "教育经历"}<span aria-hidden="true">→</span></span>
          </a>
        </div>
      </section>
      ${homeFeatureSection({
        className: "home-feature-section--research",
        href: pagePath("research", lang),
        label: text(content.homepageFeatures.research.label, lang),
        title: text(content.homepageFeatures.research.title, lang),
        summary: text(content.homepageFeatures.research.summary, lang),
        linkLabel: lang === "en" ? "View research and publications" : "查看研究与论文",
        details: `<dl class="home-feature-details home-feature-stats">
          <div><dt>${content.publications.length}</dt><dd>${lang === "en" ? "publications" : "篇论文"}</dd></div>
          <div><dt>${leadAuthorTotal}</dt><dd>${lang === "en" ? "first / co-first" : "篇第一 / 共同第一作者"}</dd></div>
          <div><dt>${content.patents.length}</dt><dd>${lang === "en" ? "patents" : "项发明专利"}</dd></div>
        </dl>`,
      })}
      ${homeFeatureSection({
        className: "home-feature-section--work",
        href: pagePath("work", lang),
        label: text(content.homepageFeatures.work.label, lang),
        title: text(content.homepageFeatures.work.title, lang),
        summary: text(content.homepageFeatures.work.summary, lang),
        linkLabel: lang === "en" ? "View OneScience and current work" : "了解 OneScience 与主要工作",
        details: `<ol class="home-feature-details home-feature-list">${workHighlights}</ol>`,
      })}
      ${homeFeatureSection({
        className: "home-feature-section--recognition",
        href: `${pagePath("experience", lang)}#recognition`,
        label: text(content.homepageFeatures.recognition.label, lang),
        title: text(content.homepageFeatures.recognition.title, lang),
        summary: text(content.homepageFeatures.recognition.summary, lang),
        linkLabel: lang === "en" ? "View recognition" : "查看荣誉经历",
        details: `<ol class="home-feature-details home-feature-list">${recognitionHighlights}</ol>`,
      })}
    </main>`;
};

const copyButton = ({ target, label, copiedLabel, copyFailedLabel }) => `
  <button class="copy-button" type="button" aria-controls="${escapeHtml(target)}" data-copy-target="${escapeHtml(target)}" data-copy-success="${escapeHtml(copiedLabel)}" data-copy-failure="${escapeHtml(copyFailedLabel)}">
    <span class="copy-button__label" aria-live="polite">${escapeHtml(label)}</span><span aria-hidden="true">＋</span>
  </button>`;

const aboutPage = (lang) => {
  const bio = content.about;
  const displayName = text(content.person.name, lang);
  const leadAuthorTotal = content.publications.filter((paper) => paper.leadAuthor).length;
  const dissertationHonorTotal = content.awards.filter((award) => award.featured).length;
  const metrics = [
    { value: content.publications.length, label: lang === "en" ? "published papers" : "篇学术论文" },
    { value: leadAuthorTotal, label: lang === "en" ? "first / co-first author" : "篇第一 / 共同第一作者" },
    { value: content.patents.length, label: lang === "en" ? "invention patents" : "项发明专利" },
    { value: dissertationHonorTotal, label: lang === "en" ? "dissertation honors" : "项优秀博士论文荣誉" },
  ]
    .map((item) => `<div class="about-metric"><dt>${item.value}</dt><dd>${escapeHtml(item.label)}</dd></div>`)
    .join("");
  const highlights = bio.highlights.items
    .map(
      (item) => `
        <article class="bio-highlight">
          <span>${escapeHtml(item.index)}</span>
          <div><h3>${escapeHtml(text(item.title, lang))}</h3><p>${escapeHtml(text(item.text, lang))}</p></div>
        </article>`,
    )
    .join("");
  const detailedParagraphs = bio.detailed.paragraphs
    .map(
      (paragraph) => `
        <article class="bio-paragraph">
          <header class="bio-paragraph__heading"><span>${escapeHtml(paragraph.index)}</span><h3>${escapeHtml(text(paragraph.label, lang))}</h3></header>
          <p data-copy-text>${escapeHtml(text(paragraph.text, lang))}</p>
        </article>`,
    )
    .join("");

  return `
    <main class="about-main" id="main-content">
      <header class="about-hero">
        <div class="container about-hero__inner">
          <p class="eyebrow">${escapeHtml(text(bio.eyebrow, lang))}</p>
          <h1>${escapeHtml(displayName)}</h1>
          <p class="about-hero__role">${escapeHtml(text(bio.role, lang))}</p>
          <div class="about-hero__bio" id="bio-brief-copy"><p data-copy-text>${escapeHtml(text(bio.brief.text, lang))}</p></div>
          ${copyButton({
            target: "bio-brief-copy",
            label: text(bio.brief.copyLabel, lang),
            copiedLabel: text(bio.brief.copiedLabel, lang),
            copyFailedLabel: text(bio.brief.copyFailedLabel, lang),
          })}
        </div>
      </header>
      <section class="about-metrics-section" aria-label="${lang === "en" ? "Profile highlights" : "个人成果概览"}">
        <div class="container"><dl class="about-metrics">${metrics}</dl></div>
      </section>
      <section class="bio-section bio-section--highlights" aria-labelledby="bio-highlights-title">
        <div class="container bio-section__inner">
          <div class="bio-section__meta">
            <p class="home-card-label">${escapeHtml(text(bio.highlights.label, lang))}</p>
            <h2 id="bio-highlights-title">${escapeHtml(text(bio.highlights.title, lang))}</h2>
          </div>
          <div class="bio-highlights">${highlights}</div>
        </div>
      </section>
      <section class="bio-section bio-section--detailed" aria-labelledby="bio-detailed-title">
        <div class="container bio-section__inner bio-section__inner--detailed">
          <div class="bio-section__meta">
            <p class="home-card-label">${escapeHtml(text(bio.detailed.label, lang))}</p>
            <h2 id="bio-detailed-title">${escapeHtml(text(bio.detailed.title, lang))}</h2>
            ${copyButton({
              target: "bio-detailed-copy",
              label: text(bio.detailed.copyLabel, lang),
              copiedLabel: text(bio.detailed.copiedLabel, lang),
              copyFailedLabel: text(bio.detailed.copyFailedLabel, lang),
            })}
          </div>
          <div class="bio-copy bio-copy--detailed" id="bio-detailed-copy">${detailedParagraphs}</div>
        </div>
      </section>
    </main>`;
};

const pageHeading = ({ eyebrow = "", title, intro = "" }) => `
  <header class="page-heading${intro ? "" : " page-heading--compact"}">
    <div class="container page-heading__inner">
      ${eyebrow ? `<p class="eyebrow">${escapeHtml(eyebrow)}</p>` : ""}
      <h1>${escapeHtml(title)}</h1>
      ${intro ? `<p>${escapeHtml(intro)}</p>` : ""}
    </div>
  </header>`;

const section = ({ label, title, body, className = "", id = "" }) => `
  <section class="resume-section${className ? ` ${className}` : ""}"${id ? ` id="${escapeHtml(id)}"` : ""}>
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
        title: lang === "en" ? "Work" : "工作",
        intro: lang === "en"
          ? "AI for Science frameworks, weather and ocean models, data pipelines, OneSkills and Agent support, and heterogeneous platform adaptation."
          : "主要开展 AI4S 框架建设、气象海洋模型研发、数据流程开发、OneSkills 与 Agent 支持和异构计算平台适配。",
      })}
      <div class="container resume-content">
        ${section({
          label: copy.current,
          title: content.oneScience.title,
          className: "panel--blue",
          id: "current-work",
          body: `
            <div class="organization-line">
              <strong>${escapeHtml(text(content.person.organization, lang))}</strong>
              <span aria-hidden="true">·</span>
              <span>${escapeHtml(text(content.person.department, lang))}</span>
            </div>
            <p class="section-lead">${escapeHtml(text(content.oneScience.description, lang))}</p>
            <div class="role-block"><span>${copy.role}</span><p>${escapeHtml(text(content.oneScience.role, lang))}</p></div>
            <dl class="fact-list">${facts}</dl>
            <div class="section-links">
              ${content.oneScience.links.map((link) => externalLink(link.url, text(link.label, lang))).join("")}
            </div>`,
        })}
        ${section({ label: copy.focus, body: `<ol class="simple-list">${focus}</ol>`, className: "panel--white" })}
        ${section({ label: copy.domains, body: `<ul class="domain-plain-list">${domains}</ul>`, className: "panel--soft" })}
      </div>
    </main>`;
};

const publicationMetric = (paper, lang) => {
  if (Number(paper.citations) > 0 && paper.openAlexUrl) {
    return {
      label: lang === "en"
        ? `${paper.citations} OpenAlex citation${paper.citations === 1 ? "" : "s"}`
        : `OpenAlex 引用 ${paper.citations} 次`,
      url: paper.openAlexUrl,
    };
  }
  if (paper.metric) return { label: text(paper.metric, lang), url: paper.metricUrl || paper.url };
  return null;
};

const selectedResearch = (lang) =>
  content.selectedResearch
    .map((project) => {
      const paper = content.publications.find((item) => item.title === project.fullTitle);
      if (!paper) throw new Error(`Missing publication metadata for selected research: ${project.fullTitle}`);
      const impact = publicationMetric(paper, lang);

      return `
        <article class="research-row">
          <div class="research-row__meta"><span>${project.year}</span><span>${escapeHtml(text(project.role, lang))}</span></div>
          <div class="research-row__content">
            <h3>${escapeHtml(project.title)}</h3>
            <p class="research-row__title">${escapeHtml(project.fullTitle)}</p>
            <p>${escapeHtml(text(project.summary, lang))}</p>
            ${impact ? `<span class="research-impact">${escapeHtml(impact.label)}</span>` : ""}
            <div class="section-links">
              ${externalLink(paper.url, lang === "en" ? "Paper" : "论文原文")}
              ${externalLink(googleScholarUrl(project.fullTitle), "Google Scholar")}
            </div>
          </div>
        </article>`;
    })
    .join("");

const publicationRows = (items, lang) =>
  items
    .map((paper) => {
      const impact = publicationMetric(paper, lang);
      return `
        <a class="publication-row" href="${escapeHtml(paper.url)}" target="_blank" rel="noreferrer">
          <span class="publication-year">${paper.year}</span>
          <span class="publication-copy"><strong>${escapeHtml(paper.title)}</strong><small>${escapeHtml(paper.venue)} · ${escapeHtml(text(paper.role, lang))}${impact ? ` · ${escapeHtml(impact.label)}` : ""}</small></span>
          <span aria-hidden="true">↗</span>
        </a>`;
    })
    .join("");

const researchPage = (lang) => {
  const copy = labels[lang];
  const journals = content.publications.filter((paper) => !paper.venue.includes("OCEANS"));
  const conferences = content.publications.filter((paper) => paper.venue.includes("OCEANS"));
  const citationTotal = content.publications.reduce((total, paper) => total + paper.citations, 0);
  const leadAuthorTotal = content.publications.filter((paper) => paper.leadAuthor).length;
  const researchOverview = `
    <dl class="research-overview" aria-label="${lang === "en" ? "Research summary" : "研究概览"}">
      <div><dt>${content.publications.length}</dt><dd>${lang === "en" ? "publications" : "篇论文"}</dd></div>
      <div><dt>${leadAuthorTotal}</dt><dd>${lang === "en" ? "first / co-first author" : "篇第一 / 共同第一作者"}</dd></div>
      <div><dt>${citationTotal}</dt><dd>${lang === "en" ? "OpenAlex citations" : "次 OpenAlex 引用"}</dd></div>
    </dl>
    <p class="citation-note">${escapeHtml(text(content.citationData.note, lang))} <a href="${escapeHtml(content.citationData.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(content.citationData.source)}</a> · ${escapeHtml(text(content.citationData.updated, lang))}</p>`;
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
        title: lang === "en" ? "Research" : "研究与论文",
        intro: lang === "en"
          ? "Selected studies, a complete publication list, verifiable research indicators, and patents in marine spatiotemporal intelligence."
          : "围绕海洋时空智能，集中展示代表性研究、完整论文清单、可核验指标与专利成果。",
      })}
      <div class="container resume-content">
        ${section({ label: copy.selectedResearch, body: `${researchOverview}<div class="research-list">${selectedResearch(lang)}</div>`, className: "panel--blue", id: "selected-research" })}
        ${section({
          label: copy.publications,
          className: "panel--white",
          id: "publications",
          body: `
            <div class="publication-group"><h3>${copy.journals} <span>${journals.length}</span></h3>${publicationRows(journals, lang)}</div>
            <div class="publication-group"><h3>${copy.conferences} <span>${conferences.length}</span></h3>${publicationRows(conferences, lang)}</div>`,
        })}
        ${section({ label: copy.patents, body: `<div class="patent-list">${patents}</div>`, className: "panel--soft", id: "patents" })}
      </div>
    </main>`;
};

const timelineRows = (items, lang) =>
  items
    .map(
      (item) => {
        const subtitle = text(item.subtitle, lang);
        const description = text(item.description, lang);
        return `
        <article class="timeline-row">
          <div class="timeline-period">${escapeHtml(text(item.period, lang))}</div>
          <div><h3>${escapeHtml(text(item.title, lang))}</h3>${subtitle ? `<p class="timeline-meta">${escapeHtml(subtitle)}</p>` : ""}${description ? `<p>${escapeHtml(description)}</p>` : ""}</div>
        </article>`;
      },
    )
    .join("");

const experiencePage = (lang) => {
  const copy = labels[lang];
  const programRows = content.programs
    .map(
      (program) => `
        <article class="program-row">
          <span>${program.period}</span>
          <div><h3>${escapeHtml(text(program.title, lang))}</h3><p class="timeline-meta">${escapeHtml(text(program.sponsor, lang))}</p><p>${escapeHtml(text(program.contribution, lang))}</p></div>
        </article>`,
    )
    .join("");
  const featuredAwards = content.awards
    .filter((award) => award.featured)
    .map(
      (award, index) => `
        <article class="featured-award${index === 0 ? " featured-award--primary" : ""}">
          <div class="featured-award__meta"><span>${escapeHtml(text(award.tier, lang))}</span><span>${award.year}</span></div>
          <h3>${escapeHtml(text(award.title, lang))}</h3>
          <p>${escapeHtml(text(award.description, lang))}</p>
          <small>${escapeHtml(text(award.organization, lang))}</small>
        </article>`,
    )
    .join("");
  const awardRows = content.awards
    .filter((award) => !award.featured)
    .map(
      (award) => `
        <article class="award-row"><span>${award.year}</span><div><h3>${escapeHtml(text(award.title, lang))}</h3><p>${escapeHtml(text(award.organization, lang))}</p></div></article>`,
    )
    .join("");

  return `
    <main id="main-content">
      ${pageHeading({
        title: lang === "en" ? "Experience" : "经历",
        intro: lang === "en"
          ? "Current work, complete education, selected recognition, and research programs."
          : "集中展示目前工作、完整教育背景、代表荣誉与科研项目经历。",
      })}
      <div class="container resume-content">
        ${section({
          label: copy.workExperience,
          body: timelineRows(content.journey.slice(0, 1), lang),
          className: "panel--white",
          id: "work-experience",
        })}
        ${section({
          label: copy.education,
          body: timelineRows(content.journey.slice(1), lang),
          className: "panel--blue",
          id: "education",
        })}
        ${section({
          label: copy.recognition,
          body: `<div class="featured-award-grid">${featuredAwards}</div><div class="award-list award-list--compact">${awardRows}</div><p class="earlier-recognition">${escapeHtml(text(content.earlierRecognition, lang))}</p>`,
          className: "panel--soft",
          id: "recognition",
        })}
        ${section({ label: copy.programs, body: `<div class="program-list">${programRows}</div>`, className: "panel--white", id: "programs" })}
      </div>
    </main>`;
};

const structuredData = (page, lang, canonical) => {
  const displayName = text(content.person.name, lang);
  const alternateName = lang === "en" ? text(content.person.name, "zh") : text(content.person.name, "en");
  const data =
    page === "home"
      ? {
          "@context": "https://schema.org",
          "@type": "Person",
          name: displayName,
          alternateName,
          url: `${siteOrigin}/`,
          image: `${siteOrigin}${content.person.portrait}`,
          worksFor: {
            "@type": "Organization",
            name: text(content.person.organization, lang),
            department: { "@type": "Organization", name: text(content.person.department, lang) },
          },
          alumniOf: { "@type": "CollegeOrUniversity", name: lang === "en" ? "Ocean University of China" : "中国海洋大学" },
          sameAs: ["https://github.com/ZhaoZhongningOUC"],
        }
      : {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: text(pageMeta[page].title, lang),
          url: canonical,
          mainEntity: { "@type": "Person", name: displayName, alternateName, url: `${siteOrigin}/` },
        };
  return JSON.stringify(data).replaceAll("<", "\\u003c");
};

const documentTemplate = (page, lang, body) => {
  const languageTag = lang === "zh" ? "zh-CN" : "en";
  const canonical = `${siteOrigin}${pagePath(page, lang)}`;
  const title = text(pageMeta[page].title, lang);
  const description = text(pageMeta[page].description, lang);
  const displayName = text(content.person.name, lang);

  return `<!doctype html>
<html lang="${languageTag}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="author" content="${escapeHtml(displayName)}">
    <meta name="theme-color" content="#0f171d">
    <title>${escapeHtml(title)}</title>
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="en" href="${siteOrigin}${pagePath(page, "en")}">
    <link rel="alternate" hreflang="zh-CN" href="${siteOrigin}${pagePath(page, "zh")}">
    <link rel="alternate" hreflang="x-default" href="${siteOrigin}${pagePath(page, "zh")}">
    ${page === "home" ? `<link rel="preload" href="${content.person.portrait}" as="image" type="image/jpeg">` : ""}
    <link rel="stylesheet" href="/assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:image" content="${siteOrigin}/assets/images/og-v6.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="${lang === "en" ? "en_US" : "zh_CN"}">
    <meta property="og:locale:alternate" content="${lang === "en" ? "zh_CN" : "en_US"}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${siteOrigin}/assets/images/og-v6.png">
    <script type="application/ld+json">${structuredData(page, lang, canonical)}</script>
    <script defer src="/assets/js/main.js"></script>
  </head>
  <body data-page="${page}" data-lang="${lang}">
    ${header(page, lang)}
    ${body}
    ${footer(page, lang)}
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
    <title>页面已迁移｜赵中宁</title>
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
  if (page === "about") return aboutPage(lang);
  if (page === "work") return workPage(lang);
  if (page === "research") return researchPage(lang);
  return experiencePage(lang);
};

const pages = ["home", "about", "experience", "research", "work"];
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
