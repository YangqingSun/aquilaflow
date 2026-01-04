// Helper function to extract locale from URL path
export function getLocaleFromPath(pathname: string): string {
  const supportedLocales = ["zh", "es", "ja", "ko", "fr", "de"];
  const pathParts = pathname.split("/").filter(Boolean);
  
  // Check if the first part of the path is a supported locale
  if (pathParts.length > 0 && supportedLocales.includes(pathParts[0])) {
    return pathParts[0];
  }
  
  // Default to English
  return "en";
}

// Helper function to get current locale from Astro
export function getCurrentLocale(): string {
  // Try Astro.currentLocale first (if i18n is configured)
  if (typeof Astro !== "undefined" && (Astro as any).currentLocale) {
    return (Astro as any).currentLocale;
  }
  
  // Fallback to extracting from URL path
  if (typeof Astro !== "undefined" && (Astro as any).url) {
    return getLocaleFromPath((Astro as any).url.pathname);
  }
  
  return "en";
}

