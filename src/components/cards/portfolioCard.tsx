"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

type PortfolioCardProps = {
  folder: string;
  title: string;
  subtitle: string;
  image: string;
};

export const PortfolioCard = ({
  folder,
  title,
  subtitle,
  image,
}: PortfolioCardProps) => {
  const locale = useLocale();
  const t = useTranslations("portfolioCard");

  return (
    <Link
      href={`/portfolio/${folder}`}
      locale={locale}
      className="relative w-full h-[300px] overflow-hidden shadow-md group"
    >
      <img
        src={image}
        alt={title}
        className="w-sm h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/40 px-4 text-center py-12 flex flex-col justify-between items-center">
        <h3 className="text-white text-xl uppercase tracking-wide">
          {subtitle}
        </h3>
        <p className="hidden group-hover:flex text-white text-sm font-bold uppercase tracking-wide transition">
          {t("discover")}
        </p>
      </div>
    </Link>
  );
};
