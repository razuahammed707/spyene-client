import services from "@/../content/services.json";

/**
 * Filters the baked services JSON, mimicking the Strapi API filter interface.
 * Supported filter strings (as used throughout the codebase):
 *   &filters[Category][$contains]=X
 *   &filters[Slug][$eq]=X
 *   &pagination[limit]=-1   (no-op: returns all)
 *   &pagination[pageSize]=5
 * Returns an array in the same shape as Strapi's data[] items.
 */
export const fetchServices = (filterStr) => {
  let results = [...services];

  if (!filterStr) return results;

  // Filter by Category contains
  const categoryMatch = filterStr.match(/filters\[Category\]\[\$contains\]=([^&]+)/);
  if (categoryMatch) {
    const cat = decodeURIComponent(categoryMatch[1]);
    results = results.filter((s) =>
      s.attributes?.Category?.includes(cat)
    );
  }

  // Filter by Slug eq
  const slugMatch = filterStr.match(/filters\[Slug\]\[\$eq\]=([^&]+)/);
  if (slugMatch) {
    const slug = decodeURIComponent(slugMatch[1]);
    results = results.filter((s) => s.attributes?.Slug === slug);
  }

  // Filter by Title in/notIn (used in nav-menus for batteries)
  const titleInMatches = [...filterStr.matchAll(/filters\[\$or\]\[\d+\]\[Title\]\[\$in\]=([^&]+)/g)];
  if (titleInMatches.length > 0) {
    const titles = titleInMatches.map((m) => decodeURIComponent(m[1]));
    results = results.filter((s) => titles.includes(s.attributes?.Title));
  }

  const titleNotInMatches = [...filterStr.matchAll(/filters\[\$or\]\[\d+\]\[Title\]\[\$notIn\]=([^&]+)/g)];
  if (titleNotInMatches.length > 0) {
    const titles = titleNotInMatches.map((m) => decodeURIComponent(m[1]));
    results = results.filter((s) => !titles.includes(s.attributes?.Title));
  }

  // Pagination pageSize (trim results)
  const pageSizeMatch = filterStr.match(/pagination\[pageSize\]=(\d+)/);
  if (pageSizeMatch) {
    const size = parseInt(pageSizeMatch[1]);
    results = results.slice(0, size);
  }

  return results;
};
