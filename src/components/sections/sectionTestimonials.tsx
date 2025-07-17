"use client";

import { useTranslations } from "next-intl";
import { MainButton } from "../buttons/mainButton";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

export function SectionTestimonials() {
  const t = useTranslations("testimonials");
  const testimonial = t.raw("items")[0];

  return (
    <section className="w-full flex flex-col" id="testimonials">
      <h1 className="text-5xl text-black my-16 self-center">{t("title")}</h1>

      {/* Desktop */}
      <div className="w-full md:flex justify-between max-w-[870px] self-center h-[400px] hidden">
        <img
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/img-home/port-rhayana-lucas17.jpeg`}
          alt=""
          className="w-[200px] object-cover h-[300px] self-end"
        />
        <div className="text-center flex flex-col items-center justify-center max-w-[300px] gap-20">
          <p className="text-black font-semibold mb-2">“{testimonial.quote}”</p>
          <p className="font-bold text-black text-sm mb-2">
            {testimonial.author}
          </p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <img
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/img-home/call-to-selling-2.jpg`}
            alt=""
            className="w-[200px] object-cover h-[300px] self-start"
          />
          <div className="flex gap-2 mb-4 text-black">
            <MainButton>
              <HiArrowLongLeft />
            </MainButton>
            <MainButton>
              <HiArrowLongRight />
            </MainButton>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="w-full flex justify-center">
        <div
          className="relative flex flex-col justify-center items-center self-center w-[350px] md:hidden gap-3 px-4 py-6
        before:content-[''] before:absolute before:left-0 before:bottom-0 
        before:w-30 before:h-[2px] before:bg-[var(--gold)]
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:w-[2px] after:h-30 after:bg-[var(--gold)]"
        >
          <div className="flex gap-2 mb-4 text-black">
            <MainButton>
              <HiArrowLongLeft />
            </MainButton>
            <MainButton>
              <HiArrowLongRight />
            </MainButton>
          </div>
          <p className="text-black font-semibold mb-2 max-w-[300px] text-center">
            “{testimonial.quote}”
          </p>
          <img
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/img-home/port-rhayana-lucas17.jpeg`}
            alt=""
            className="max-w-[300px] object-cover h-[300px]"
          />
          <p className="font-bold text-black text-sm mb-2">
            {testimonial.author}
          </p>
        </div>
      </div>
    </section>
  );
}
