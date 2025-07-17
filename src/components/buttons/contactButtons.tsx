"use client";

import { useTranslations } from "next-intl";
import { MainButton } from "./mainButton";

export function ContactButtons({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) {
  const t = useTranslations("contact");
  return (
    <div className="flex items-center gap-4">
      <MainButton onClick={() => setOpen(true)}>
        {t("messageButton")}
      </MainButton>
      <a
        href="https://wa.me/5521999972025"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MainButton className="bg-[#75ff7a]">{t("whatsappButton")}</MainButton>
      </a>
    </div>
  );
}
