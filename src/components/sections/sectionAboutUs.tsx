"use client";

import { useTranslations } from "next-intl";

export function SectionAboutUs() {
  const t = useTranslations("about");

  return (
    <section className="w-full flex flex-col" id="about">
      <h1 className="text-5xl text-black my-16 self-center">{t("who")}</h1>

      <div
        className="w-full h-[600px] bg-cover bg-no-repeat bg-[center_40%] mb-8 flex justify-center md:justify-end items-end px-16 pb-6 relative"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_SUPABASE_URL}/img-home/Jaluza_Luiz_(Solar_Real)_PREVIEW_122_resized.jpg`,
        }}
      >
        <div
          className="w-[330px] md:w-[425px] h-[285px] bg-white text-black p-4 text-center absolute bottom-[-50px] shadow-xl left-1/2 transform -translate-x-1/2 
        md:relative md:bottom-auto md:left-auto md:transform-none md:translate-x-0"
        >
          <h1 className="text-5xl mb-6">{t("familyTitle")}</h1>
          <p className="font-semibold text-sm md:text-md">{t("familyText")}</p>
        </div>
      </div>

      <div className="text-black w-full relative flex md:flex-row flex-col justify-center items-center gap-4 md:gap-10 md:mt-16 my-24 md:mb-48">
        <img
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/img-home/491873604_678467821466311_6535318492228136338_n.jpg`}
          alt=""
          className="w-[300px] h-[400px] object-cover"
        />

        <div className="max-w-[300px] md:max-w-[380px]">
          <h1 className="text-5xl font-bold">{t("philosophyTitle1")}</h1>
          <h1 className="text-4xl md:text-5xl">{t("philosophyTitle2")}</h1>

          <p className="text-sm md:text-xs font-semibold leading-loose mt-4">
            {t("philosophyText")}
          </p>
        </div>

        <div className="text-[#3236380F] text-8xl text-center mb-16 [letter-spacing:0.20em] absolute bottom-[-200px] font-semibold [line-height:0.7] hidden md:block">
          <p>
            {t("backgroundText1")}
            <br />
            {t("backgroundText2")}
          </p>
        </div>
      </div>
    </section>
  );
}
