export function scrollToSection(href: string): void {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
