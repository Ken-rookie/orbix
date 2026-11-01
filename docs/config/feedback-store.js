import { feedbackConfig } from "./feedback-config.js";

export function getFeedback() {
  const saved = localStorage.getItem(feedbackConfig.storageKey);
  if (!saved) return [];

  const entries = JSON.parse(saved);
  if (!Array.isArray(entries)) {
    throw new Error("Saved feedback has an invalid format.");
  }
  return entries;
}

export function saveFeedback(entry) {
  const entries = getFeedback();
  entries.unshift(entry);
  localStorage.setItem(
    feedbackConfig.storageKey,
    JSON.stringify(entries.slice(0, feedbackConfig.maxEntries)),
  );
}
