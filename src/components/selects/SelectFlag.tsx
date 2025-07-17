"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const locales = [
  { code: "pt", label: "Português", flag: "br" },
  { code: "en", label: "Inglês", flag: "us" },
];

export function SelectFlag() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("language");

  const currentLocale = useLocale();

  const handleChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <Select onValueChange={handleChange} defaultValue={currentLocale}>
      <SelectTrigger className="w-14 h-14 p-0 bg-transparent border-none shadow-none hover:bg-transparent focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 relative [&>svg]:hidden  cursor-pointer">
        <SelectValue placeholder="" className="!m-0">
          <span
            className={clsx(
              "fi",
              `fi-${locales.find((l) => l.code === currentLocale)?.flag}`,
              "rounded-full w-14 h-14 block overflow-hidden"
            )}
          />
        </SelectValue>
      </SelectTrigger>

      <SelectContent className="bg-zinc-900 text-white rounded-xl font-bold">
        {locales.map(({ code, flag }) => (
          <SelectItem
            key={code}
            value={code}
            className="flex items-center gap-2"
          >
            <span
              className={`fi fi-${flag} rounded-full w-8 h-8 block overflow-hidden`}
            />
            {t(code)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
