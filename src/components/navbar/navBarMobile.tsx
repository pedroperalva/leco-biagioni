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

export function NavbarMobile() {
  const scrollItems = menuItems.filter((item) => item.href.startsWith("#"));
  // const routeItems = menuItems.filter((item) => !item.href.startsWith("#"));
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

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
    <header className="flex items-center justify-between pr-6 h-[100px] bg-black fixed top-0 left-0 w-full z-50 font-semibold">
      <img
        src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/logos/_marca-preferencial.png`}
        alt="lecobiagioni"
        className="cursor-pointer w-[250px]"
        onClick={(e) => handleScroll(e as any, "#hero")}
      />
      <div className="flex gap-4 items-center">
        <SelectFlag />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <IoMenu className="text-3xl cursor-pointer text-[var(--gold)]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-black text-white border-none"
            align="start"
          >
            <DropdownMenuLabel>
              <a href="#hero">
                <img src="/logo.png" alt="lecobiagioni" className="w-[250px]" />
              </a>
            </DropdownMenuLabel>

            <DropdownMenuGroup>
              {scrollItems.map((item) => (
                <DropdownMenuItem key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="flex justify-between w-full font-bold"
                  >
                    {item.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            {/* <div className="my-2 border-t border-[var(--gold)] mx-2" />

          <DropdownMenuGroup>
          {routeItems.map((item) => (
            <DropdownMenuItem key={item.label}>
            <a
            href={`/${locale + "/" + item.href}`}
            className="flex justify-between w-full font-bold"
            >
            {item.label}
            </a>
            </DropdownMenuItem>
            ))}
            </DropdownMenuGroup> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
