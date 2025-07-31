"use client";

import { SectionAboutUs } from "@/components/sections/sectionAboutUs";
import { SectionContact } from "@/components/sections/sectionContact";
import { SectionHero } from "@/components/sections/sectionHero";
import { SectionPortfolio } from "@/components/sections/sectionPortfolio";
import { SectionTendency } from "@/components/sections/sectionTendency";
// import { SectionTestimonials } from "@/components/sections/sectionTestimonials";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const hashFromSession = sessionStorage.getItem("scrollTo");

    if (hashFromSession) {
      sessionStorage.removeItem("scrollTo");

      setTimeout(() => {
        const element = document.querySelector(hashFromSession);
        if (element) {
          const yOffset = -100;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }

    const currentHash = window.location.hash;
    if (currentHash) {
      setTimeout(() => {
        const element = document.querySelector(currentHash);
        if (element) {
          const yOffset = -100;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen w-full ">
      <SectionHero />
      <SectionAboutUs />
      <SectionPortfolio />
      {/* <SectionTestimonials /> */}
      <SectionTendency />
      <SectionContact />
    </main>
  );
}
