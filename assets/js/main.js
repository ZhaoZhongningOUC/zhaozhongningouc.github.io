document.documentElement.classList.add("js");

const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");

const setMenuOpen = (open) => {
  if (!toggle || !menu) return;
  toggle.setAttribute("aria-expanded", String(open));
  menu.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
};

toggle?.addEventListener("click", () => {
  setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
});

menu?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
    toggle?.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!menu?.classList.contains("is-open")) return;
  if (!menu.contains(event.target) && !toggle?.contains(event.target)) setMenuOpen(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) setMenuOpen(false);
});
