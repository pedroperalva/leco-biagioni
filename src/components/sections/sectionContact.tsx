"use client";

import { useTranslations } from "next-intl";
import { MainButton } from "../buttons/mainButton";
import { useState } from "react";
import { ContactForm } from "../forms/ContactForm";

export function SectionContact() {
  const t = useTranslations("contact");
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full flex justify-center my-16" id="contact">
      <div className="w-[870px] flex items-center justify-between flex-col md:flex-row gap-6 px-6">
        <div className="space-y-6 flex flex-col w-[320px]">
          <h1 className="text-5xl text-black">{t("title")}</h1>
          <p className="text-xs font-semibold">{t("description")}</p>
          <div className="flex items-center gap-4">
            <MainButton onClick={() => setOpen(true)}>
              {t("messageButton")}
            </MainButton>
            <MainButton className="bg-[#75ff7a]">
              {t("whatsappButton")}
            </MainButton>
          </div>
        </div>
        <div className="h-[500px]">
          <img src="/contact/img_contato.png" alt="" className="w-[300px]" />
        </div>
      </div>
      <ContactForm open={open} setOpen={setOpen} />
    </section>
  );
}
