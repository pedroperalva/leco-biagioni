"use client";

import { useTranslations } from "next-intl";
import { MainButton } from "../buttons/mainButton";
import { Link } from "@/i18n/navigation";

export function SectionTendency() {
  const t = useTranslations("tendency");

  return (
    <section className="w-full flex flex-col items-center mt-16" id="tendency">
      <h1 className="text-4xl text-black self-center text-center">
        {t("title")}
      </h1>
      <img
        src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/tendencias/vest_color_fuzzy_01.jpg`}
        alt="tips"
        className="w-[870px] my-16"
        loading="lazy"
      />
      <Link href={"https://bloglecobiagioni.com/"} target="_blank">
        <MainButton>{t("button")}</MainButton>
      </Link>
    </section>
  );
}
