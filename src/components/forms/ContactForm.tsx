"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MainButton } from "../buttons/mainButton";
import { useTranslations } from "next-intl";

export function ContactForm({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const t = useTranslations("contactForm");
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_18tg3sf",
        "template_i05z0an",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        () => {
          setSent(true);
          formRef.current?.reset();
          setTimeout(() => {
            setSent(false);
            setOpen(false);
          }, 2000);
        },
        (error: any) => {
          console.error("Erro ao enviar e-mail:", error);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-[var(--gold-light)] rounded-none">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4 text-black font-bold"
        >
          <h2 className="text-xl font-bold mb-2 text-center">{t("title")}</h2>

          <input
            name="name"
            required
            placeholder={t("namePlaceholder")}
            className="w-full p-2 bg-[var(--gold-light)] border border-black"
          />
          <input
            name="email"
            type="email"
            required
            placeholder={t("emailPlaceholder")}
            className="w-full p-2 bg-[var(--gold-light)] border border-black"
          />
          <textarea
            name="message"
            required
            placeholder={t("messagePlaceholder")}
            className="w-full p-2 bg-[var(--gold-light)] border border-black h-32 resize-none"
          />

          <MainButton
            type="submit"
            className="bg-green-500 hover:bg-green-600 w-full p-2 font-semibold transition"
          >
            {isSending ? t("sending") : t("submit")}
          </MainButton>

          {sent && (
            <p className="text-green-400 text-center font-medium">
              {t("successMessage")}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
