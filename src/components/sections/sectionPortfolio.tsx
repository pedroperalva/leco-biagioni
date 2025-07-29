"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { MainButton } from "../buttons/mainButton";

export function SectionPortfolio() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const portfolioOptions = t.raw("options") as {
    title: string;
    subtitle: string;
    description: string;
    folder: string;
  }[];

  const images = [
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/portfolio/casamento-louhayne-e-charles---igreja-sao-francisco-de-paula/IMG_6826.JPG`,
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/portfolio/casamento-felipe-e-juan-alem-do-sonho/0714_0714-casamento-felipe-e-juan-alem-do-sonho-guaratiba-rj-13-10-2024.jpg`,
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/portfolio/Sarah-e-Rodrigo-Santa-Teresa-MGallery%20/sarah-rodrigo-wed-87.jpg`,
  ];

  return (
    <section className="w-full flex flex-col px-6" id="realizacoes">
      <h1 className="text-4xl text-black my-16 self-center text-center">
        {t("title")}
      </h1>
      <div className="w-full flex flex-col items-center">
        {portfolioOptions.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 !== 0
                ? "md:flex-row-reverse flex-col-reverse"
                : "md:flex-row flex-col-reverse"
            } justify-between items-center gap-6 mb-16 w-full md:w-[870px]`}
          >
            <Link
              className="font-semibold hover:underline md:hidden"
              href={`${locale}/portfolio/${item.folder}`}
            >
              {t("discover")}
            </Link>
            <img
              src={images[index]}
              alt={item.title}
              className="w-full max-w-[350px] h-[500px] object-cover shadow-2xl"
            />
            <div className="text-center md:space-y-4 space-y-2">
              <p className="text-xs border-b border-black font-bold inline-block pb-1">
                {item.title}
              </p>
              <p className="text-3xl">{item.subtitle}</p>
              <p className="font-semibold">{item.description}</p>
              <Link
                className="font-semibold hover:underline hidden md:block"
                href={`${locale}/portfolio/${item.folder}`}
              >
                {t("discover")}
              </Link>
            </div>
          </div>
        ))}
        <Link href={`${locale}/portfolio`} className="my-8">
          <MainButton>Veja Mais</MainButton>
        </Link>
      </div>
    </section>
  );
}
