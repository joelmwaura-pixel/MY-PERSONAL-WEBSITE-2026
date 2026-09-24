// script.js — this is where behavior lives: anything that responds
// to a click, a scroll, or runs logic. HTML = structure, CSS = look,
// JS = what happens.

// Example 1: auto-fill the copyright year in the footer,
// so you never have to update it by hand.
document.getElementById("year").textContent = new Date().getFullYear();

// Example 2: highlight the nav link for whichever section
// is currently in view as the visitor scrolls.
const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll("nav a[href^='#']");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.style.color = link.getAttribute("href") === `#${id}`
          ? "var(--teal)"
          : "";
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach((section) => observer.observe(section));