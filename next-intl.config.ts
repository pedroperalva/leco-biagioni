// next-intl.config.ts
const intlConfig = {
  locales: ["pt", "en"],
  defaultLocale: "pt",
  localePrefix: "as-needed", // ✅ hides "/pt", keeps just "/"
};

export default intlConfig;
