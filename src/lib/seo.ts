import { SITE } from "./constants";

/**
 * Sets document title + meta description from SITE constants so the
 * head tags in index.html and the runtime stay in sync.
 */
export function initSeo(): void {
  document.title = `${SITE.name} — ${SITE.tagline}`;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", SITE.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", `${SITE.name} — ${SITE.tagline}`);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", SITE.description);
}
