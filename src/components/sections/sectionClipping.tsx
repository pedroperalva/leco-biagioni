import { useState } from "react";
import { useTranslations } from "next-intl";
import { MainButton } from "../buttons/mainButton";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

export function SectionClipping() {
  const t = useTranslations("clipping");
  const clippings = t.raw("items");
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? clippings.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === clippings.length - 1 ? 0 : i + 1));

  const clipping = clippings[index];

  return (
    <section className="w-full flex flex-col" id="clipping">
      <h1 className="text-4xl text-black my-16 self-center text-center">
        {t("title")}
      </h1>

      {/* Desktop */}
      <div className="w-full md:flex justify-between max-w-[870px] self-center h-[420px] hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex w-full justify-between absolute top-0 left-0"
          >
            <img
              src={clipping.photos[0]}
              alt={clipping.author}
              className="w-[200px] object-cover h-[300px] self-end"
            />
            <div className="text-center flex flex-col items-center justify-center max-w-[300px] gap-6 mx-auto">
              <p className="text-black font-semibold mb-2">
                &ldquo;{clipping.quote}&rdquo;
              </p>
              <p className="font-bold text-black text-sm mb-2">
                {clipping.author}
              </p>
              <a
                href={clipping.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--gold)] text-white px-4 py-2 shadow-md hover:opacity-90 transition"
              >
                {t("viewArticle")}
              </a>
            </div>
            <div className="flex flex-col justify-between items-center">
              {clipping.photos[1] && (
                <img
                  src={clipping.photos[1]}
                  alt={clipping.author}
                  className="w-[200px] object-cover h-[300px] self-start"
                />
              )}
              <div className="flex gap-2 my-4 text-black">
                <MainButton onClick={prev}>
                  <HiArrowLongLeft />
                </MainButton>
                <MainButton onClick={next}>
                  <HiArrowLongRight />
                </MainButton>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile */}
      <div className="w-full flex justify-center md:hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-center items-center self-center w-[350px] gap-3 px-4 py-6
              before:content-[''] before:absolute before:left-0 before:bottom-0 
              before:w-30 before:h-[2px] before:bg-[var(--gold)]
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-[2px] after:h-30 after:bg-[var(--gold)]"
          >
            <div className="flex gap-2 mb-4 text-black">
              <MainButton onClick={prev}>
                <HiArrowLongLeft />
              </MainButton>
              <MainButton onClick={next}>
                <HiArrowLongRight />
              </MainButton>
            </div>
            <p className="text-black font-semibold mb-2 max-w-[300px] text-center">
              &ldquo;{clipping.quote}&rdquo;
            </p>
            <a
              href={clipping.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--gold)] text-white px-4 py-2 shadow-md hover:opacity-90 transition my-4"
            >
              {t("viewArticle")}
            </a>
            <img
              src={clipping.photos[0]}
              alt={clipping.author}
              className="max-w-[300px] object-cover h-[300px]"
            />
            <p className="font-bold text-black text-sm mb-2">
              {clipping.author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
