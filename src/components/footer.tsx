"use client";

import { FaInstagram } from "react-icons/fa6";
import { menuItems } from "@/app/utils/menuItems";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function Footer() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("menu");

  const scrollToHash = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

    if (isHome) {
      scrollToHash(href);
    } else {
      sessionStorage.setItem("scrollTo", href);
      router.push(`/${locale}`);
    }
  };

  return (
    <footer className="md:h-[300px] bg-[var(--gold-light)] w-full flex justify-center font-semibold">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-10 md:place-items-center md:w-[90%] text-[#7A7A7A]">
        <div className="flex md:flex-row flex-col justify-center ">
          <img
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/logos/_marca-preferencial.png
`}
            alt="logo"
            className="w-[200px] self-center md:self-start"
          />
          <div className="grid grid-cols-2 grid-rows-3 gap-y-3 gap-x-6 max-w-[275px] md:py-0 text-center md:text-start">
            {menuItems.map((item) => (
              <a
                key={item.label}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-[#7A7A7A] text-sm transition-colors duration-200 hover:underline font-bold"
              >
                {t(item.label)}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-[275px] text-sm gap-2 text-center mt-16 md:mt-0 md:text-start">
          <p className="text-sm text-[#7A7A7A]">
            Leco Biagioni Wedding Planner
          </p>
          <p className="text-sm text-[#7A7A7A]">2025- Rio de Janeiro, Brazil</p>
          <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/lecobiagioni"
              target="_blank"
              className="text-sm text-[#7A7A7A]"
            >
              @LECOBIAGIONI
            </a>
            <a
              href="https://www.instagram.com/lecobiagioni"
              target="_blank"
              className="w-10 h-10 rounded-full border border-[#7A7A7A] flex items-center justify-center cursor-pointer"
            >
              <FaInstagram className="text-[#7A7A7A] text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
