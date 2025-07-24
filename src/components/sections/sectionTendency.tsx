"use client";

import { useLocale, useTranslations } from "next-intl";
import { MainButton } from "../buttons/mainButton";
import { Link } from "@/i18n/navigation";

export function SectionTendency() {
  const t = useTranslations("tendency");
  const locale = useLocale();
  return (
    <section className="w-full flex flex-col items-center mt-16" id="tendency">
      <h1 className="text-5xl text-black self-center text-center">
        {t("title")}
      </h1>
      <img
        src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/tendencias/vest_color_fuzzy_01.jpg`}
        alt=""
        className="w-[870px] my-16"
      />
      <Link href={`${locale}/dicas`}>
        <MainButton>{t("button")}</MainButton>
      </Link>
    </section>
  );
}
