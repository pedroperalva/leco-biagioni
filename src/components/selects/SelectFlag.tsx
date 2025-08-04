"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import clsx from "clsx";

const locales = [
  { code: "pt", label: "Português", flag: "br" },
  { code: "en", label: "Inglês", flag: "us" },
];

export function SelectFlag() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("language");

  const handleChange = (locale: string) => {
    if (locale !== currentLocale) {
      router.replace(pathname, { locale });
    }
  };

  return (
    <div className="flex gap-4">
      {locales.map(({ code, flag }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          title={t(code)}
          className={clsx(
            "overflow-hidden border-2 transition-all",
            `fi fi-${flag}`,
            code === currentLocale
              ? "border-white"
              : "border-transparent opacity-60 hover:opacity-100"
          )}
        />
      ))}
    </div>
  );
}
