"use client";

import { consultancyList } from "@/app/utils/consultancyList";
import { ConsultancyCard } from "../cards/consultancyCard";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getSectionList } from "@/app/utils/sectionList";
import { ContactCard } from "../cards/contactCard";

export function SectionLists() {
  const pathname = usePathname();
  const [section, setSection] = useState<any>(null);
  useEffect(() => {
    const section = pathname.split("/").pop();
    if (section) {
      const data = getSectionList(section);
      setSection(data);
    }
  }, [pathname]);

  return (
    <main className="min-h-screen w-full pb-8 pt-[100px] space-y-8 flex flex-col items-center">
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={"/home/noiva.jpg"}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 h-[100px] bg-black/60 flex flex-col items-center justify-center text-white text-center px-4 gap-10">
          <h2 className="text-5xl tracking-widest font-light">
            {section?.title}
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <h1 className="text-2xl text-black my-16 self-center text-center uppercase font-bold max-w-[870px]">
          {section?.subtitle}
        </h1>
        <p className="text-lg text-black my-8 self-center text-center px-4 md:px-0 font-bold max-w-[870px]">
          {section?.description}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-8">
        {consultancyList.map((card, index) => (
          <ConsultancyCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            info={card.info}
          />
        ))}
      </div>
      <ContactCard />
    </main>
  );
}
