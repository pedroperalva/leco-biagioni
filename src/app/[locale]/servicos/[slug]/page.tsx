"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { supabase } from "@/lib/supabase";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ContactCard } from "@/components/cards/contactCard";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const t = useTranslations("services");

  const service = slug
    ? {
        title: t(`${slug}.title`),
        subtitle: t(`${slug}.subtitle`),
        description: t(`${slug}.description`),
      }
    : null;

  useEffect(() => {
    async function fetchImages() {
      const { data, error } = await supabase.storage
        .from("imagens-site-leco")
        .list(`${slug}`, { limit: 50 });

      if (error) {
        console.error(error);
        return;
      }

      if (data) {
        const urls = data.map((file) => {
          const { data: publicUrl } = supabase.storage
            .from("imagens-site-leco")
            .getPublicUrl(`${slug}/${file.name}`);
          return publicUrl.publicUrl;
        });

        setImages(urls);
      }
    }

    fetchImages();
  }, [slug]);

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center text-xl">
        {t("notFound")}
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full pb-8 space-y-8 flex flex-col items-center">
      <div className="relative w-full h-[700px] overflow-hidden">
        <img
          src={images[0]}
          alt={service.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 h-[700px] bg-black/60 flex flex-col items-center justify-end text-white text-center px-4 pb-20 gap-10">
          <h2 className="text-5xl tracking-widest font-light uppercase">
            {service.title}
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-4 relative">
        <h1 className="text-2xl text-black my-16 self-center text-center uppercase font-bold max-w-[870px]">
          {service.subtitle}
        </h1>
        <p className="text-lg text-black my-8 self-center text-center px-4 md:px-0 font-bold max-w-[870px] whitespace-pre-line">
          {service.description}
        </p>
        <Link
          href={"/servicos"}
          className="cursor-pointer text-black text-sm font-bold top-2 right-4 absolute flex items-center gap-2"
        >
          <FaArrowLeft />
          {t("back")}
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 px-4">
        {images.map((src, i) => (
          <Dialog
            key={i}
            onOpenChange={(open) => !open && setSelectedImage(null)}
          >
            <DialogTrigger asChild>
              <div
                className="w-full h-100 relative rounded-2xl overflow-hidden shadow-md cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`${service.title} ${i}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-5xl w-full max-h-screen bg-transparent p-0 overflow-hidden">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="w-full h-full object-contain"
                />
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <div className="my-10">
        <ContactCard />
      </div>
    </main>
  );
}
