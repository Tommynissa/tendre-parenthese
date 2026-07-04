import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { LinkButton } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image
            src="/images/logo.jpg"
            alt="Tendre Parenthèse"
            width={190}
            height={75}
            className="mb-6 h-14 w-auto rounded-full object-cover"
          />
          <p className="max-w-md text-balance text-sm leading-7 text-white/72">
            La pause que tous les parents méritent. Un café poussette avec espace jeux,
            une halte-garderie, des ateliers et du bien-être dans un même lieu lumineux.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href="/reserver" variant="secondary">
              Réserver
            </LinkButton>
            <LinkButton href="/contact" variant="outline" className="border-white/25 bg-white/10 text-white">
              Contact
            </LinkButton>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Explorer</h2>
          <div className="mt-5 grid gap-3">
            {navItems.slice(1, 8).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/72 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Infos</h2>
          <div className="mt-5 grid gap-3 text-sm text-white/72">
            <span className="flex gap-2"><MapPin size={16} /> France</span>
            <span className="flex gap-2"><Mail size={16} /> bonjour@tendre-parenthese.fr</span>
            <span className="flex gap-2"><Instagram size={16} /> @tendreparenthese</span>
          </div>
          <div className="mt-7 grid gap-2 text-xs text-white/48">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/cgu">CGU</Link>
            <Link href="/politique-de-confidentialite">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
