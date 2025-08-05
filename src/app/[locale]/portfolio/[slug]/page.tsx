"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { getPortfolioList } from "@/app/utils/portfolioList";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "@/i18n/navigation";
import { FaArrowLeft } from "react-icons/fa6";

export default function PortfolioPage() {
  const t = useTranslations();
  const portfolioList = getPortfolioList(t);
  const [arquivos, setArquivos] = useState<any[]>([]);
  const params = useParams();
  const slug = params?.slug;
  const portfolioItem = portfolioList.find((item) => item.folder === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    <main className="min-h-screen w-full pb-8 space-y-8">
      <div className="relative w-full h-[800px] overflow-hidden">
        <img
          src={heroUrl}
          alt="Hero"
          className="w-full h-full object-cover object-[center_top]"
        />
        <div className="absolute inset-0 h-[400px] bg-black/60 flex flex-col items-center justify-center text-white text-center px-4 gap-10">
          <h2 className="text-4xl tracking-widest font-light">PORTFOLIO</h2>
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
          className="absolute inset-0 w-full h-full object-cover object-[center_top] md:object-center mx-auto"
        />
      </div>

      <div className="relative w-full">
        <Link
          href={"/portfolio"}
          className="cursor-pointer text-black text-sm font-bold top-0 right-4 absolute flex items-center gap-2"
        >
          <FaArrowLeft />
          Voltar
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 py-8">
          {gridImages.map((file) => {
            const url = getUrl(file.name);

            return (
              <Dialog
                key={file.name}
                onOpenChange={(open) => !open && setSelectedImage(null)}
              >
                <DialogTrigger asChild>
                  <div
                    className="relative aspect-[4/3] w-full cursor-pointer"
                    onClick={() => setSelectedImage(url)}
                  >
                    <img
                      src={url}
                      alt={file.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-5xl w-full max-h-screen bg-transparent p-0 overflow-hidden">
                  {selectedImage && (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="w-full object-contain"
                    />
                  )}
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </main>
  );
}
