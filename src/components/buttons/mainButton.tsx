import { ReactNode } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function MainButton({
  children,
  className,
  onClick,
  type,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <Button
      className={cn(
        "bg-transparent border border-black h-10 text-xs cursor-pointer text-black font-semibold uppercase rounded-none !px-4",
        className
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
}
