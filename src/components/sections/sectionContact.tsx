"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ContactForm } from "../forms/ContactForm";
import { ContactButtons } from "../buttons/contactButtons";

export function SectionContact() {
  const t = useTranslations("contact");
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full flex justify-center my-16" id="contact">
      <div className="w-[870px] flex items-center justify-between flex-col md:flex-row gap-6 px-6">
        <div className="space-y-6 flex flex-col w-[320px]">
          <h1 className="text-4xl text-black">{t("title")}</h1>
          <p className="text-xs font-semibold">{t("description")}</p>
          <ContactButtons setOpen={setOpen} />
        </div>
        <div className="h-[500px]">
          <img
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/imgs-home/img_contato.png`}
            alt=""
            className="w-[300px]"
          />
        </div>
      </div>
      <ContactForm open={open} setOpen={setOpen} />
    </section>
  );
}
