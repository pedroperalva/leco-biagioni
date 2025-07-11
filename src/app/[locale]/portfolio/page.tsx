"use client";

import { getPortfolioList } from "@/app/utils/portfolioList";
import { ContactCard } from "@/components/cards/contactCard";
import { PortfolioCard } from "@/components/cards/portfolioCard";
import { useTranslations } from "next-intl";

export default function Portfolio() {
  const t = useTranslations();
  const portfolioItems = getPortfolioList(t);

  return (
    <main className="min-h-screen w-full pb-8 pt-[100px] space-y-8 flex flex-col items-center">
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={"/home/noiva.jpg"}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 h-[200px] bg-black/60 flex flex-col items-center justify-center text-white text-center px-4 gap-10">
          <h2 className="text-5xl tracking-widest font-light">
            {t("portfolioPage.heroTitle")}
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-4">
        <h1 className="text-2xl text-black my-16 self-center text-center uppercase font-bold max-w-[870px]">
          {t("portfolioPage.sectionTitle")}
        </h1>
        <p className="text-lg text-black my-8 self-center text-center px-4 md:px-0 font-bold max-w-[870px] whitespace-pre-line">
          {t("portfolioPage.sectionText")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 px-4 md:px-0">
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={index} {...item} />
        ))}
      </div>

      <ContactCard />
    </main>
  );
}
