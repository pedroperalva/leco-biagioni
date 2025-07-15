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
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/img-home/port-felipe-juan40.jpg`,
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/img-home/port-ivy-aniver-21.jpg`,
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/img-home/port-mariana-mario06.jpg`,
  ];

  return (
    <section className="w-full flex flex-col" id="portfolio">
      <h1 className="text-5xl text-black my-16 self-center text-center">
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
            <a className="font-semibold hover:underline md:hidden" href="">
              {t("discover")}
            </a>
            <img
              src={images[index]}
              alt={item.title}
              className="w-[350px] h-[500px] object-cover shadow-2xl"
            />
            <div className="text-center md:space-y-4 space-y-2">
              <p className="text-xs border-b border-black font-bold inline-block pb-1">
                {item.title}
              </p>
              <p className="text-4xl md:text-5xl">{item.subtitle}</p>
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
