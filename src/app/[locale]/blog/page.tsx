"use client";

import { tendencyList } from "@/app/utils/tendencyList";
import { ContactCard } from "@/components/cards/contactCard";
import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations("blog");

  return (
    <main className="min-h-screen w-full px-4 pt-[100px] pb-[200px] flex flex-col items-center text-black space-y-12">
      <div className="md:w-2xl w-full space-y-6 my-10 font-bold text-black">
        <h1 className="text-4xl text-center">{t("header.title")}</h1>

        <h3 className="text-2xl font-bold">
          {t("header.subtitle1")}
          <span className="text-[var(--gold)] ml-2">
            {t("header.subtitle2")}
          </span>
        </h3>

        <p>{t("header.intro1")}</p>
        <p>{t("header.intro2")}</p>

        <h3 className="text-xl mt-10">{t("header.peachFuzzTitle")}</h3>

        <img
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/tendencias/vest_color_fuzzy_03.jpg`}
          alt="Peach Fuzz vestido"
        />
        <p>{t("header.peachFuzzPhotoCredit")}</p>

        <img
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/tendencias/vest_color_fuzzy_01.jpg`}
          alt="Peach Fuzz vestido 2"
        />

        <p>{t("header.peachFuzzText")}</p>

        <div>
          <img
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/tendencias/cake_wedding_2024l.jpg`}
            alt="Bolo Peach Fuzz"
          />
        </div>
      </div>

      {tendencyList.map((color) => (
        <div key={color.key} className="space-y-4 md:w-2xl w-full">
          <h3 className="text-xl font-bold">
            {t(`colors.${color.key}.title`)}
          </h3>
          <p className="text-sm font-bold">{t(`colors.${color.key}.text`)}</p>
          <img src={color.image} alt={color.key} />
          <p className="text-xs font-bold text-center">Foto: {color.credit}</p>
        </div>
      ))}

      <ContactCard />
    </main>
  );
}
