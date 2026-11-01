import { siteConfig } from "./config/site-config.js";
import { saveFeedback } from "./config/feedback-store.js";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const downloadStatus = document.querySelector(".download-status");
const feedbackForm = document.querySelector("#feedback-form");
const feedbackStatus = document.querySelector("#feedback-status");

document.querySelector("#current-year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  navLinks.classList.toggle("open", !isOpen);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    navLinks.classList.remove("open");
  }
});

document.querySelectorAll(".download-link").forEach((link) => {
  if (siteConfig.appDownloadUrl) {
    link.href = siteConfig.appDownloadUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();
    downloadStatus.textContent =
      "The Orbix download link is coming soon. Please check back when the app is officially released.";
    document.querySelector("#download").scrollIntoView({ behavior: "smooth" });
  });
});

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  feedbackStatus.textContent = "";

  if (!feedbackForm.reportValidity()) return;

  const formData = new FormData(feedbackForm);
  const entry = {
    name: String(formData.get("name")).trim(),
    topic: String(formData.get("topic")),
    message: String(formData.get("message")).trim(),
    submittedAt: new Date().toISOString(),
  };

  try {
    saveFeedback(entry);
    feedbackForm.reset();
    feedbackStatus.textContent =
      "Thanks for sharing! Your feedback has been saved in this browser.";
  } catch (error) {
    console.error("Could not save Orbix feedback.", error);
    feedbackStatus.textContent =
      "Feedback could not be saved. Check your browser storage settings and try again.";
  }
});
