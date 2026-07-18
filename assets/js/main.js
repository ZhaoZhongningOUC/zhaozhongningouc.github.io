import { siteContent as content } from "./content.js";

const state = {
  language: document.documentElement.lang.toLowerCase().startsWith("zh") ? "zh" : "en",
  publicationsExpanded: false,
};

let revealObserver;
let sectionObserver;

const byId = (id) => document.getElementById(id);
const t = (value) => {
  if (typeof value === "string") return value;
  return value?.[state.language] ?? value?.en ?? "";
};

const externalLink = (link, className = "text-link") => `
  <a class="${className}" href="${link.url}" target="_blank" rel="noreferrer">
    <span>${t(link.label)}</span><span aria-hidden="true">↗</span>
  </a>
`;

const sectionHeading = ({ number, kicker, title, id }) => `
  <div class="section-heading" data-reveal>
    <div class="section-heading__meta">
      <span class="section-number">${number}</span>
      <span class="eyebrow eyebrow--ink">${t(kicker)}</span>
    </div>
    <h2 id="${id}">${t(title)}</h2>
  </div>
`;

function renderNav() {
  byId("primary-nav").innerHTML = content.nav
    .map(
      (item) => `
        <a class="nav-link" href="#${item.id}" data-section-link="${item.id}">${t(item.label)}</a>
      `,
    )
    .join("");

  const languageButton = byId("language-toggle");
  languageButton.textContent = state.language === "en" ? "中文" : "EN";
  languageButton.setAttribute(
    "aria-label",
    state.language === "en" ? "切换为中文" : "Switch to English",
  );
  languageButton.setAttribute("href", state.language === "en" ? "/zh/" : "/");
  languageButton.setAttribute("hreflang", state.language === "en" ? "zh-CN" : "en");
}

function renderHero() {
  byId("hero").innerHTML = `
    <div class="hero__field" aria-hidden="true">
      <div class="hero__grid"></div>
      <div class="hero__orbit hero__orbit--one"></div>
      <div class="hero__orbit hero__orbit--two"></div>
    </div>
    <div class="container hero__inner">
      <div class="hero__copy" data-reveal>
        <div class="hero__status">
          <span class="status-dot" aria-hidden="true"></span>
          <span>${t(content.hero.status)}</span>
        </div>
        <p class="eyebrow">${t(content.hero.eyebrow)}</p>
        <h1>${t(content.hero.headline)}</h1>
        <p class="hero__summary">${t(content.hero.summary)}</p>
        <div class="hero__actions">
          <a class="button button--primary" href="${content.hero.primaryCta.url}" target="_blank" rel="noreferrer">
            <span>${t(content.hero.primaryCta.label)}</span><span aria-hidden="true">↗</span>
          </a>
          <a class="button button--ghost" href="#${content.hero.secondaryCta.target}">
            <span>${t(content.hero.secondaryCta.label)}</span><span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div class="hero__portrait-wrap" data-reveal>
        <div class="portrait-orbit" aria-hidden="true"></div>
        <div class="portrait-frame">
          <img
            src="${content.person.portrait}"
            alt="${state.language === "en" ? "Portrait of Jonny" : "Jonny 的个人肖像"}"
            width="600"
            height="600"
            fetchpriority="high"
          >
        </div>
        <div class="portrait-note portrait-note--role">
          <img class="portrait-note__logo" src="${content.person.organizationLogo.src}" alt="${t(content.person.organizationLogo.alt)}">
          <div>
            <span class="portrait-note__label">${t(content.person.organization)}</span>
            <strong>${t(content.person.role)}</strong>
          </div>
        </div>
        <div class="portrait-note portrait-note--place">
          <span class="signal-bars" aria-hidden="true"><i></i><i></i><i></i></span>
          <strong>${t(content.person.location)}</strong>
        </div>
      </div>
    </div>
    <a class="hero__scroll" href="#focus" aria-label="${state.language === "en" ? "Scroll to introduction" : "滚动至简介"}">
      <span>${state.language === "en" ? "Scroll" : "向下"}</span><i aria-hidden="true"></i>
    </a>
  `;
}

function renderFocus() {
  byId("focus").innerHTML = `
    <div class="container">
      <div class="about-grid">
        <div class="about-grid__title" data-reveal>
          <p class="eyebrow eyebrow--ink">${t(content.about.kicker)}</p>
          <h2>${t(content.about.title)}</h2>
        </div>
        <div class="about-grid__copy" data-reveal>
          ${content.about.paragraphs.map((paragraph) => `<p>${t(paragraph)}</p>`).join("")}
        </div>
      </div>

      <div class="focus-heading">
        ${sectionHeading({ ...content.sectionCopy.focus, id: "focus-title" })}
      </div>
      <div class="focus-grid" aria-labelledby="focus-title">
        ${content.focusAreas
          .map(
            (area) => `
              <article class="focus-card" data-reveal>
                <span class="focus-card__index">${area.index}</span>
                <h3>${t(area.title)}</h3>
                <p>${t(area.description)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderOneScience() {
  byId("work").innerHTML = `
    <div class="container">
      <article class="onescience-card" data-reveal>
        <div class="onescience-card__visual" aria-hidden="true">
          <div class="model-field model-field--a"></div>
          <div class="model-field model-field--b"></div>
          <div class="model-core">
            <span>ONE</span>
            <strong>SCIENCE</strong>
          </div>
          <div class="domain-ring">
            ${content.oneScience.domains
              .map((domain, index) => `<span>${String(index + 1).padStart(2, "0")}</span>`)
              .join("")}
          </div>
        </div>

        <div class="onescience-card__content">
          <div class="onescience-card__brand">
            <img src="${content.oneScience.organizationLogo.src}" alt="${t(content.oneScience.organizationLogo.alt)}">
          </div>
          <p class="eyebrow">${t(content.oneScience.kicker)}</p>
          <h2>${content.oneScience.title}</h2>
          <p class="onescience-card__subtitle">${t(content.oneScience.subtitle)}</p>
          <p class="onescience-card__description">${t(content.oneScience.description)}</p>

          <div class="role-callout">
            <span>${t(content.oneScience.roleLabel)}</span>
            <p>${t(content.oneScience.role)}</p>
          </div>

          <div class="fact-grid">
            ${content.oneScience.facts
              .map(
                (fact) => `
                  <div class="fact">
                    <strong>${fact.value}</strong>
                    <span>${t(fact.label)}</span>
                  </div>
                `,
              )
              .join("")}
          </div>

          <div class="domain-list" aria-label="${state.language === "en" ? "Research domains" : "科研领域"}">
            ${content.oneScience.domains.map((domain) => `<span>${t(domain)}</span>`).join("")}
          </div>

          <div class="card-links">
            ${content.oneScience.links.map((link) => externalLink(link, "text-link text-link--light")).join("")}
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderResearch() {
  byId("research").innerHTML = `
    <div class="container">
      ${sectionHeading({ ...content.sectionCopy.research, id: "research-title" })}
      <div class="research-grid" aria-labelledby="research-title">
        ${content.selectedResearch
          .map(
            (project, index) => `
              <article class="research-card research-card--${index + 1}" data-reveal>
                <div class="research-card__topline">
                  <span>${t(project.type)} · ${project.year}</span>
                  <span>${t(project.role)}</span>
                </div>
                <div class="research-card__body">
                  <div>
                    <h3>${project.title}</h3>
                    <p class="research-card__full-title">${project.fullTitle}</p>
                    <p class="research-card__summary">${t(project.summary)}</p>
                  </div>
                  <div class="research-metric">
                    <strong>${project.metric.value}</strong>
                    <span>${t(project.metric.label)}</span>
                  </div>
                </div>
                <div class="research-card__footer">
                  <div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                  <div class="card-links">${project.links.map((link) => externalLink(link)).join("")}</div>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderPublications() {
  const visiblePublications = state.publicationsExpanded
    ? content.publications
    : content.publications.slice(0, 5);

  byId("publications").innerHTML = `
    <div class="container">
      <div class="subsection-heading" data-reveal>
        <p class="eyebrow eyebrow--ink">${t(content.sectionCopy.publications.kicker)}</p>
        <h2>${t(content.sectionCopy.publications.title)}</h2>
      </div>

      <div class="record-grid">
        <section aria-labelledby="papers-title" data-reveal>
          <div class="record-title-row">
            <h3 id="papers-title">${t(content.sectionCopy.publications.papersLabel)}</h3>
            <span>${content.publications.length.toString().padStart(2, "0")}</span>
          </div>
          <div class="publication-list" id="publication-list">
            ${visiblePublications
              .map(
                (paper) => `
                  <a class="publication-row" href="${paper.url}" target="_blank" rel="noreferrer">
                    <span class="publication-row__year">${paper.year}</span>
                    <span class="publication-row__main">
                      <strong>${paper.title}</strong>
                      <small>${paper.venue} · ${t(paper.role)}</small>
                    </span>
                    <span class="publication-row__arrow" aria-hidden="true">↗</span>
                  </a>
                `,
              )
              .join("")}
          </div>
          <button class="show-all" id="publications-toggle" type="button" aria-controls="publication-list" aria-expanded="${state.publicationsExpanded}">
            <span>${state.publicationsExpanded ? t(content.sectionCopy.publications.showLess) : t(content.sectionCopy.publications.showAll)}</span>
            <span aria-hidden="true">${state.publicationsExpanded ? "−" : "+"}</span>
          </button>
        </section>

        <section class="patent-panel" aria-labelledby="patents-title" data-reveal>
          <div class="record-title-row">
            <h3 id="patents-title">${t(content.sectionCopy.publications.patentsLabel)}</h3>
            <span>${content.patents.length.toString().padStart(2, "0")}</span>
          </div>
          <div class="patent-list">
            ${content.patents
              .map(
                (patent, index) => `
                  <article class="patent-item">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <h4>${t(patent.title)}</h4>
                    <p>${t(patent.type)}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      </div>
    </div>
  `;

  byId("publications-toggle").addEventListener("click", () => {
    state.publicationsExpanded = !state.publicationsExpanded;
    renderPublications();
    initRevealAnimations();
    requestAnimationFrame(() => byId("publications-toggle")?.focus());
  });
}

function renderJourney() {
  byId("journey").innerHTML = `
    <div class="container">
      ${sectionHeading({ ...content.sectionCopy.journey, id: "journey-title" })}
      <div class="journey-layout">
        <div class="timeline" aria-labelledby="journey-title">
          ${content.journey
            .map(
              (item) => `
                <article class="timeline-item" data-reveal>
                  <div class="timeline-item__marker" aria-hidden="true"></div>
                  <div class="timeline-item__period">${t(item.period)}</div>
                  <div class="timeline-item__content">
                    ${item.logo ? `<img class="timeline-item__logo" src="${item.logo.src}" alt="${t(item.logo.alt)}">` : ""}
                    <h3>${t(item.title)}</h3>
                    <p class="timeline-item__subtitle">${t(item.subtitle)}</p>
                    <p>${t(item.description)}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>

        <aside class="journey-aside">
          <section class="aside-panel" data-reveal>
            <div class="record-title-row">
              <h3>${t(content.sectionCopy.journey.programsLabel)}</h3>
              <span>${content.programs.length.toString().padStart(2, "0")}</span>
            </div>
            ${content.programs
              .map(
                (program) => `
                  <article class="program-item">
                    <span>${program.period}</span>
                    <h4>${t(program.title)}</h4>
                    <p class="program-item__sponsor">${t(program.sponsor)}</p>
                    <p>${t(program.contribution)}</p>
                  </article>
                `,
              )
              .join("")}
          </section>

          <section class="aside-panel" data-reveal>
            <div class="record-title-row">
              <h3>${t(content.sectionCopy.journey.awardsLabel)}</h3>
              <span>${content.awards.length.toString().padStart(2, "0")}</span>
            </div>
            <div class="award-list">
              ${content.awards
                .map(
                  (award) => `
                    <article class="award-item">
                      <span>${award.year}</span>
                      <div><h4>${t(award.title)}</h4><p>${t(award.organization)}</p></div>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </section>
        </aside>
      </div>
    </div>
  `;
}

function renderContact() {
  byId("contact").innerHTML = `
    <div class="container">
      <div class="contact-card" data-reveal>
        <div class="contact-card__copy">
          <p class="eyebrow">${t(content.contact.kicker)}</p>
          <h2>${t(content.contact.title)}</h2>
          <p>${t(content.contact.description)}</p>
        </div>
        <div class="contact-card__actions">
          <a class="button button--primary" href="mailto:${content.person.email}">
            <span>${t(content.contact.emailLabel)}</span><span aria-hidden="true">↗</span>
          </a>
          <a class="contact-email" href="mailto:${content.person.email}">${content.person.email}</a>
        </div>
        <div class="contact-card__links">
          ${content.person.links.map((link) => externalLink(link, "text-link text-link--light")).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();
  byId("site-footer").innerHTML = `
    <div class="container footer-inner">
      <div>
        <a class="footer-brand" href="#top">${content.person.name}</a>
        <p>${t(content.person.role)}</p>
      </div>
      <div class="footer-meta">
        <span>© ${year} ${content.person.name}</span>
        <span>${state.language === "en" ? "Last updated" : "最后更新"} · ${content.meta.lastUpdated}</span>
      </div>
    </div>
  `;
}

function updateMetadata() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.title = t(content.meta.title);
  document.querySelector('meta[name="description"]').setAttribute("content", t(content.meta.description));
  document.querySelector('meta[property="og:title"]').setAttribute("content", t(content.meta.title));
  document.querySelector('meta[property="og:description"]').setAttribute("content", t(content.meta.description));
  document.querySelector('meta[name="twitter:title"]').setAttribute("content", t(content.meta.title));
  document.querySelector('meta[name="twitter:description"]').setAttribute("content", t(content.meta.description));
}

function initRevealAnimations() {
  revealObserver?.disconnect();

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10%", threshold: 0.08 },
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
}

function initActiveNavigation() {
  sectionObserver?.disconnect();
  if (!("IntersectionObserver" in window)) return;
  const links = [...document.querySelectorAll("[data-section-link]")];
  const sections = content.nav.map((item) => byId(item.id)).filter(Boolean);

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.toggle("is-active", link.dataset.sectionLink === visible.target.id));
    },
    { rootMargin: "-25% 0px -65%", threshold: [0, 0.2, 0.5] },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function renderPage() {
  updateMetadata();
  renderNav();
  renderHero();
  renderFocus();
  renderOneScience();
  renderResearch();
  renderPublications();
  renderJourney();
  renderContact();
  renderFooter();
  initRevealAnimations();
  initActiveNavigation();
}

byId("language-toggle").addEventListener("click", (event) => {
  if (!window.location.hash) return;
  event.preventDefault();
  window.location.href = `${event.currentTarget.getAttribute("href")}${window.location.hash}`;
});

const header = byId("site-header");
const syncHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

renderPage();
