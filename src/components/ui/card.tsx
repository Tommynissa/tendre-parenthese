import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[8px] border border-white/80 bg-white/72 shadow-soft backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}
