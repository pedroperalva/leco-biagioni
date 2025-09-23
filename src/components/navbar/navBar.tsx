"use client";

import { menuItems } from "@/app/utils/menuItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { SelectFlag } from "../selects/SelectFlag";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function Navbar() {
  const scrollItems = menuItems.filter((item) => item.href.startsWith("#"));
  const redirectItems = menuItems.filter((item) => !item.href.startsWith("#"));
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("menu");

  const [showBg, setShowBg] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    setIsMenuOpen(false); // Fecha o menu ao clicar em um item
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundClass =
    showBg || isHovered || isMenuOpen ? "bg-black/70" : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${backgroundClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between md:pr-6 h-[100px] px-4 md:px-8 font-semibold">
        {/* Mobile: Bandeira à esquerda */}
        <div className="block md:hidden">
          <SelectFlag />
        </div>

        {/* Logo centralizada no mobile, à esquerda no desktop */}
        <img
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/logos/_marca-preferencial.png`}
          alt="lecobiagioni"
          className="cursor-pointer w-[200px] md:w-[250px] absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0"
          onClick={(e) => handleScroll(e as any, "#home")}
        />

        {/* Menu e bandeira (desktop) ou só menu (mobile) */}
        <div className="flex gap-4 items-center ml-auto md:ml-0">
          <div className="hidden md:block">
            <SelectFlag />
          </div>

          <DropdownMenu
            open={isMenuOpen}
            onOpenChange={(open) => setIsMenuOpen(open)} // NOVO: controlar abertura do menu
          >
            <DropdownMenuTrigger asChild>
              <IoMenu className="text-3xl cursor-pointer text-[var(--gold)]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-black text-white border-none"
              align="start"
            >
              <DropdownMenuLabel>
                <img
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/logos/_marca-preferencial.png`}
                  alt="lecobiagioni"
                  className="w-[250px]"
                />
              </DropdownMenuLabel>

              <DropdownMenuGroup>
                {scrollItems.map((item) => (
                  <DropdownMenuItem key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="flex justify-between w-full font-bold"
                    >
                      {t(item.label)}
                    </a>
                  </DropdownMenuItem>
                ))}
                <div className="border-t border-[var(--gold)] my-2 mx-2" />
                {redirectItems.map((item) => (
                  <DropdownMenuItem key={item.label}>
                    <a
                      href={item.href}
                      className="flex justify-between w-full font-bold"
                    >
                      {t(item.label)}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
