"use client";

import { useTranslations } from "next-intl";
import { MainButton } from "@/components/buttons/mainButton";
import { Link } from "@/i18n/navigation";

export function SectionHero() {
  const t = useTranslations("hero");

  return (
    <section className="w-full" id="home">
      <div
        className="w-full bg-cover bg-no-repeat md:bg-[center_top] bg-[center] h-[675px]"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_SUPABASE_URL}/imgs-home/Capa/@pchufi-810.JPEG')`,
        }}
      ></div>

      <div className="w-full flex justify-center my-32 px-6">
        <div
          className="relative text-center max-w-[700px] pb-6 px-6 flex flex-col items-center justify-center gap-6 before:content-[''] before:absolute before:left-0 before:bottom-0
            before:w-30 before:h-[2px] before:bg-[var(--gold)]
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-30 after:w-[2px] after:bg-[var(--gold)]"
        >
          <h1 className="uppercase text-center text-3xl md:text-4xl max-w-[600px]">
            {t("title")}
          </h1>
          <p className="italic font-semibold whitespace-pre-line">
            {t("paragraph")}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-8 lg:gap-0">
        <img
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/imgs-home/service-home1.jpg`}
          alt=""
          className="w-[120px] md:w-[200px] lg:w-[389px]"
        />

        <div
          className="text-center flex flex-col items-center justify-center"
          id="servicos"
        >
          <h3 className="font-semibold text-sm mb-8">{t("servicesTitle")}</h3>
          <Link
            className="text-3xl lg:text-4xl mb-2 hover:underline hover:decoration-[var(--gold)] hover:underline-offset-4"
            href={"/servicos/cerimonial"}
          >
            {t("services.planning")}
          </Link>
          <Link
            className="text-3xl lg:text-4xl mb-2 hover:underline hover:decoration-[var(--gold)] hover:underline-offset-4"
            href={"/servicos/acessoria"}
          >
            {t("services.consulting")}
          </Link>
          <Link
            className="text-3xl lg:text-4xl mb-2 hover:underline hover:decoration-[var(--gold)] hover:underline-offset-4"
            href={"/servicos/celebridades"}
          >
            {t("services.celebrities")}
          </Link>
          <Link
            className="text-3xl lg:text-4xl mb-8 hover:underline hover:decoration-[var(--gold)] hover:underline-offset-4"
            href={"/servicos/destination"}
          >
            {t("services.destination")}
          </Link>
          <Link href={`/servicos`}>
            <MainButton>{t("cta")}</MainButton>
          </Link>
        </div>

        {/* Imagem da direita */}
        <img
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/imgs-home/service-home2.jpg`}
          alt=""
          className="w-[120px] md:w-[200px] lg:w-[389px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
