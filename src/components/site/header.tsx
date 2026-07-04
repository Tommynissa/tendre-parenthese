"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-data";
import { Button, LinkButton } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/72 px-4 py-3 shadow-soft backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3" aria-label="Tendre Parenthèse">
          <Image
            src="/images/logo.jpg"
            alt="Tendre Parenthèse"
            width={136}
            height={54}
            className="h-10 w-auto rounded-full object-cover"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navItems.slice(1, 9).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-ink/72 transition hover:bg-rose-50 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <LinkButton href="/admin" variant="ghost" className="px-3">
            Admin
          </LinkButton>
          <LinkButton href="/reserver">Réserver</LinkButton>
        </div>
        <Button
          variant="secondary"
          className="h-11 w-11 px-0 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </Button>
      </div>
      {open ? (
        <div className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-[8px] border border-white/80 bg-white/92 p-3 shadow-soft backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[8px] px-4 py-3 text-sm text-ink/78 hover:bg-rose-50"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <LinkButton href="/reserver" className="w-full" onClick={() => setOpen(false)}>
            Réserver
          </LinkButton>
        </div>
      ) : null}
    </header>
  );
}
