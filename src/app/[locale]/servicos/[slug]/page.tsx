"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";

import { supabase } from "@/lib/supabase";

// dados fixos por slug
const serviceData: Record<
  string,
  { title: string; description: string; imageUrl: string }
> = {
  assessoria: {
    title: "Assessoria",
    description: "Descrição da assessoria...",
    imageUrl: "/imgs-services/assessoria-banner.jpg",
  },
  cerimonial: {
    title: "Cerimonial",
    description: "Descrição do cerimonial...",
    imageUrl: "/imgs-services/cerimonial-banner.jpg",
  },
  "wedding-destination": {
    title: "Wedding Destination",
    description: "Descrição do destination wedding...",
    imageUrl: "/imgs-services/destination-banner.jpg",
  },
  celebridades: {
    title: "Celebridades",
    description: "Descrição da parte de celebridades...",
    imageUrl: "/imgs-services/celebridades-banner.jpg",
  },
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const [images, setImages] = useState<string[]>([]);

  const service = serviceData[slug];

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
        const urls = data.map(
          (file) =>
            `${process.env.NEXT_PUBLIC_SUPABASE_URL}/${slug}/${file.name}`
        );
        setImages(urls);
      }
    }

    fetchImages();
  }, [slug]);

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center text-xl">
        Serviço não encontrado
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full pb-8 space-y-8 flex flex-col items-center">
      {/* Hero */}
      <div className="relative w-full h-[350px] overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 h-[350px] bg-black/60 flex flex-col items-center justify-center text-white text-center px-4 gap-10">
          <h2 className="text-4xl tracking-widest font-light">
            {service.title}
          </h2>
        </div>
      </div>

      {/* Texto */}
      <div className="w-full flex flex-col items-center px-4 relative">
        <h1 className="text-2xl text-black my-16 self-center text-center uppercase font-bold max-w-[870px]">
          {service.title}
        </h1>
        <p className="text-lg text-black my-8 self-center text-center px-4 md:px-0 font-bold max-w-[870px] whitespace-pre-line">
          {service.description}
        </p>
        <Link
          href={"/servicos"}
          className="cursor-pointer text-black text-sm font-bold top-2 right-4 absolute flex items-center gap-2"
        >
          <FaArrowLeft />
          Voltar
        </Link>
      </div>

      {/* Grid de imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 px-4 md:px-0">
        {images.map((src, i) => (
          <div
            key={i}
            className="w-full h-64 relative rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={src}
              alt={`${service.title} ${i}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
