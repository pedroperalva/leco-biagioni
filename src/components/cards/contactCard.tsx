"use client";

import { useTranslations } from "next-intl";
import { ContactForm } from "../forms/ContactForm";
import { useState } from "react";
import { ContactButtons } from "../buttons/contactButtons";

export function ContactCard() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("contactCard");

  return (
    <div className="lg:h-[500px] lg:w-full max-w-[1200px] border-[10px] md:border-[50px] border-[#ebeded] flex lg:flex-row flex-col justify-between mx-4">
      <img
        src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/img-home/card-cristo-asse-e.jpg`}
        alt="Contact"
        className="w-full h-full object-cover lg:w-1/2"
      />
      <div className="p-4 md:p-10 md:w-1/2 flex flex-col justify-between items-center gap-6 text-black">
        <h3 className="text-3xl font-semibold lg:text-start text-center">
          <span className="text-[var(--gold)]">Leco Biagioni</span>{" "}
          {t("headline")}
        </h3>
        <p className="font-bold text-center">{t("description")}</p>
        <ContactButtons setOpen={setOpen} />
        <ContactForm open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
