import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const styles: Record<Variant, string> = {
  primary: "bg-clay text-white shadow-soft hover:-translate-y-0.5 hover:bg-clay/92",
  secondary: "bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:bg-ivory",
  ghost: "text-ink hover:bg-white/70",
  outline: "border border-clay/30 bg-white/55 text-ink hover:-translate-y-0.5 hover:border-clay/60"
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: Variant;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={cn(base, styles[variant], className)} {...props} />;
}

export function LinkButton({ className, variant = "primary", href, ...props }: LinkButtonProps) {
  return <Link className={cn(base, styles[variant], className)} href={href} {...props} />;
}
