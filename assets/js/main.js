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

const fallbackCopy = (value) => {
  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.append(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();
  return copied;
};

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    const label = button.querySelector(".copy-button__label");
    const icon = button.querySelector("[aria-hidden='true']");
    if (!target || !label) return;

    const paragraphs = [...target.querySelectorAll("[data-copy-text]")];
    const value = (paragraphs.length ? paragraphs.map((item) => item.textContent.trim()).join("\n\n") : target.textContent.trim());
    const originalLabel = label.textContent;
    const originalIcon = icon?.textContent;

    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        copied = true;
      } else {
        copied = fallbackCopy(value);
      }
    } catch {
      copied = fallbackCopy(value);
    }

    if (copied) {
      label.textContent = button.dataset.copySuccess;
      if (icon) icon.textContent = "✓";
    } else {
      label.textContent = button.dataset.copyFailure;
      if (icon) icon.textContent = "!";
    }

    button.disabled = true;
    window.setTimeout(() => {
      label.textContent = originalLabel;
      if (icon) icon.textContent = originalIcon;
      button.disabled = false;
    }, 1800);
  });
});
