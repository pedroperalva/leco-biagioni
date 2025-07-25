import { useState } from "react";
import { ContactForm } from "../forms/ContactForm";
import { ContactButtons } from "../buttons/contactButtons";

export function ConsultancyCard({
  title,
  description,
  image,
  info,
}: {
  title: string;
  description: React.ReactNode;
  image: string;
  info: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-black flex flex-col items-center justify-center w-[870px] p-4 text-center gap-6">
      <h1 className="text-4xl">{title}</h1>
      <p className="font-bold">{description}</p>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <p className="font-bold text-sm">{info}</p>
      <ContactButtons setOpen={setOpen} />
      <ContactForm open={open} setOpen={setOpen} />
    </div>
  );
}
