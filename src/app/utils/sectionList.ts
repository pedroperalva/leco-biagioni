export function getSectionList(section: string) {
  if (section === "assessoria") {
    return {
      title: "Assessoria",
      subtitle:
        "Temos parcerias exclusivas com os melhores espaços para o seu casamento.",
      description:
        "Para cada local, desenvolvemos pacotes personalizados que incluem tudo o que você precisa — do planejamento à execução. Com os nosso Planos, Leco Biagioni reune fornecedores de excelência para oferecer o melhor custo-benefício, sem que você precise se preocupar com nenhum detalhe. Escolha o lugar que mais te encanta — do resto, cuidamos nós.",
      image: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/imgs-home/assessoria.JPG`,
    };
  }

  if (section === "celebridades") {
    return {
      title: "Celebridades",
      subtitle:
        "Temos parcerias exclusivas com os melhores espaços para o seu casamento.",
      description:
        "Para cada local, desenvolvemos pacotes personalizados que incluem tudo o que você precisa — do planejamento à execução. Com os nosso Planos, Leco Biagioni reune fornecedores de excelência para oferecer o melhor custo-benefício, sem que você precise se preocupar com nenhum detalhe. Escolha o lugar que mais te encanta — do resto, cuidamos nós.",
      image: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/imgs-home/Celebridades%20/01133572.JPG`,
    };
  }

  if (section === "cerimonial") {
    return {
      title: "Cerimonial",
      subtitle:
        "Temos parcerias exclusivas com os melhores espaços para o seu casamento.",
      description:
        "Para cada local, desenvolvemos pacotes personalizados que incluem tudo o que você precisa — do planejamento à execução. Com os nosso Planos, Leco Biagioni reune fornecedores de excelência para oferecer o melhor custo-benefício, sem que você precise se preocupar com nenhum detalhe. Escolha o lugar que mais te encanta — do resto, cuidamos nós.",
      image: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/imgs-home/Cerimonial/IMG_6866.JPG`,
    };
  }

  if (section === "wedding-destination") {
    return {
      title: "Wedding Destination",
      subtitle:
        "Temos parcerias exclusivas com os melhores espaços para o seu casamento.",
      description:
        "Para cada local, desenvolvemos pacotes personalizados que incluem tudo o que você precisa — do planejamento à execução. Com os nosso Planos, Leco Biagioni reune fornecedores de excelência para oferecer o melhor custo-benefício, sem que você precise se preocupar com nenhum detalhe. Escolha o lugar que mais te encanta — do resto, cuidamos nós.",
      image: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/imgs-home/Destination%20Wedding/Casamento%20Daiana%20e%20Lucas_1051.jpg`,
    };
  }

  return null;
}
