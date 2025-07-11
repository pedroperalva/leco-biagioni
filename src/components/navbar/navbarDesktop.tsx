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
import { IoMenu } from "react-icons/io5";

export function NavbarDesktop() {
  // const pathname = usePathname();
  // const isHome = pathname === "/pt" || pathname === "/en";
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   if (!isHome) return;

  //   function handleScroll() {
  //     setIsScrolled(window.scrollY > 0);
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isHome]);

  // const shouldShowBackground = !isHome || isScrolled;

  return (
    <header
      // className={clsx(
      //   "fixed top-0 left-0 w-full z-50 transition-all px-4 h-[122px] hidden lg:flex items-center justify-between group font-semibold",
      //   shouldShowBackground
      //     ? "bg-black shadow-md backdrop-blur"
      //     : "bg-transparent hover:bg-black hover:shadow-md"
      // )}
      className="fixed top-0 left-0 w-full z-50 bg-black shadow-md px-4 h-[122px] hidden lg:flex items-center justify-between font-semibold"
    >
      <img src="/logo.png" alt="lecobiagioni" className="w-[250px]" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IoMenu className="text-3xl cursor-pointer text-[var(--gold)]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 bg-black text-white border-none"
          align="start"
        >
          <DropdownMenuLabel>
            <img src="/logo.png" alt="lecobiagioni" className="w-[250px]" />
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {menuItems.map((item) => (
              <DropdownMenuItem key={item.label}>
                <a href={item.href} className="flex justify-between w-full">
                  {item.label}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
