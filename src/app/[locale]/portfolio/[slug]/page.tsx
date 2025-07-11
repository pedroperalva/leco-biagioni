"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { getPortfolioList } from "@/app/utils/portfolioList";
import { useTranslations } from "next-intl";

export default function PortfolioPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const t = useTranslations();
  const portfolioList = getPortfolioList(t);
  const [arquivos, setArquivos] = useState<any[]>([]);
  const slug = params.slug;
  const portfolioItem = portfolioList.find((item) => item.folder === slug);

  useEffect(() => {
    async function listarArquivos() {
      const { data } = await supabase.storage
        .from("imagens-site-leco")
        .list(`portfolio/${slug}`, {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        });

      if (data) {
        const arquivosSomente = data.filter((item) => item.metadata !== null);
        setArquivos(arquivosSomente);
      }
    }

    listarArquivos();
  }, [slug]);

  if (arquivos.length === 0) return <p>Loading...</p>;

  const getUrl = (name: string) =>
    supabase.storage
      .from("imagens-site-leco")
      .getPublicUrl(`portfolio/${slug}/${name}`).data.publicUrl;

  const heroUrl = getUrl(arquivos[1]?.name);
  const bannerUrl = getUrl(arquivos[0]?.name);
  const gridImages = arquivos.slice(2);

  return (
    <main className="min-h-screen w-full py-8 space-y-8">
      <div className="relative w-full h-[800px] overflow-hidden">
        <img src={heroUrl} alt="Hero" className="w-full h-full object-cover" />

        <div className="absolute inset-0 h-[300px] bg-black/60 flex flex-col items-center justify-center text-white text-center px-4 gap-10">
          <h2 className="text-5xl tracking-widest font-light">PORTFOLIO</h2>
          <h1 className="font-bold uppercase">{portfolioItem?.title}</h1>
        </div>
      </div>

      <div className="w-full text-center flex justify-center text-black">
        <h1 className="font-bold uppercase">{portfolioItem?.subtitle}</h1>
      </div>

      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={bannerUrl}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover object-center mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
        {gridImages.map((file) => {
          const url = getUrl(file.name);
          return (
            <div className="relative aspect-[4/3] w-full" key={file.name}>
              <img
                src={url}
                alt={file.name}
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
