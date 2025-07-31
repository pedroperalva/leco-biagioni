"use client";

import { useTranslations } from "next-intl";
import { servicesList } from "@/app/utils/servicesList";
import { ContactForm } from "@/components/forms/ContactForm";
import { useState } from "react";
import { ContactButtons } from "@/components/buttons/contactButtons";

export default function Servicos() {
  const t = useTranslations("services");
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen w-full pb-8 space-y-8 flex flex-col items-center">
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/imgs-home/banner-servicos.jpg`}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 h-[200px] bg-black/60 flex flex-col items-center justify-center text-white text-center px-4 gap-10">
          <h2 className="text-4xl tracking-widest font-light">{t("title")}</h2>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-4 max-w-[1024px] gap-30 my-20 md:my-30">
        {servicesList.map((service, index) => {
          const title = t(`items.${service.id}.title`);
          const description = t(`items.${service.id}.description`);
          return (
            <div
              key={index}
              className={`md:w-full max-w-[400px] md:max-w-full flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center justify-between gap-6 md:h-[400px]`}
            >
              <div className="relative w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={title}
                  className="h-[400px] object-cover object-[center_top] w-full"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <h2 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-4xl text-white px-4 py-2 uppercase z-10 text-center">
                  {title}
                </h2>
              </div>

              <div className="h-full flex flex-col items-center md:items-start text-md font-bold justify-between p-1 lg:max-w-[500px] md:max-w-[400px] gap-4">
                <p className="text-gray-700">{description}</p>
                <ContactButtons setOpen={setOpen} />
              </div>
            </div>
          );
        })}
        <ContactForm open={open} setOpen={setOpen} />
      </div>
    </main>
  );
}
