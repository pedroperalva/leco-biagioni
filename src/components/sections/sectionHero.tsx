"use client";

import { useTranslations } from "next-intl";
import { MainButton } from "@/components/buttons/mainButton";

export function SectionHero() {
  const t = useTranslations("hero");

  return (
    <section className="w-full" id="hero">
      <div
        className="w-full bg-cover bg-no-repeat bg-[center_top] h-[675px]"
        style={{ backgroundImage: "url('/home/noiva.jpg')" }}
      ></div>

      <div className="w-full flex justify-center my-32 px-6">
        <div
          className="relative text-center max-w-[700px] pb-6 px-6 flex flex-col items-center justify-center gap-6 before:content-[''] before:absolute before:left-0 before:bottom-0
            before:w-30 before:h-[2px] before:bg-[var(--gold)]
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-30 after:w-[2px] after:bg-[var(--gold)]"
        >
          <h1 className="uppercase text-center text-3xl md:text-5xl max-w-[600px]">
            {t("title")}
          </h1>
          <p className="italic font-semibold whitespace-pre-line">
            {t("paragraph")}
          </p>
        </div>
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-between relative">
        <img
          src="/home/services1.png"
          alt=""
          className="mt-16 absolute lg:static w-[100px] md:w-[200px] lg:w-auto top-[-150px] right-0 lg:top-auto lg:right-auto"
        />

        <div className="text-center flex flex-col items-center justify-center">
          <h3 className="font-semibold text-sm mb-8">{t("servicesTitle")}</h3>
          <p className="text-3xl lg:text-5xl mb-2">{t("services.planning")}</p>
          <p className="text-3xl lg:text-5xl mb-2">{t("services.design")}</p>
          <p className="text-3xl lg:text-5xl mb-2">
            {t("services.production")}
          </p>
          <p className="text-3xl lg:text-5xl mb-8">
            {t("services.coordination")}
          </p>
          <MainButton>{t("cta")}</MainButton>
        </div>

        <img
          src="/home/services2.png"
          alt=""
          className="mt-8 lg:mt-0 mb-16 w-[120px] md:w-[200px] lg:w-auto"
        />
      </div>
    </section>
  );
}
