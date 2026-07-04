import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, CalendarCheck, Heart, Mail, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { assetPath } from "@/lib/assets";
import { testimonials, universes, workshops } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden px-4 pb-10 pt-28 md:px-6">
        <Image
          src={assetPath("/images/hero-parenthese.png")}
          alt="Intérieur lumineux Tendre Parenthèse"
          fill
          priority
          sizes="100vw"
          className="soft-mask object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/92 via-cream/62 to-white/12" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory to-transparent" />
        <div className="container relative flex min-h-[calc(100vh-9rem)] items-center">
          <div className="max-w-3xl">
            <Image src={assetPath("/images/logo.jpg")} alt="Tendre Parenthèse" width={238} height={94} className="mb-8 h-20 w-auto rounded-full object-cover shadow-soft" priority />
            <h1 className="font-serif text-5xl leading-[0.95] text-ink md:text-6xl lg:text-7xl">
              La pause que tous les parents méritent.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72 md:text-xl">
              Un lieu lumineux où les enfants explorent, les parents respirent, et chaque détail
              rend la vie familiale un peu plus douce.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <LinkButton href="/reserver">
                <CalendarCheck size={18} /> Réserver
              </LinkButton>
              <LinkButton href="#univers" variant="secondary">
                <ArrowDown size={18} /> Découvrir
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section id="univers" className="section">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Les univers</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
              Un même lieu, plusieurs manières de souffler.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {universes.map((universe, index) => {
              const Icon = universe.icon;
              return (
                <Reveal key={universe.slug} delay={index * 0.05}>
                  <Link href={`/${universe.slug}`} className="group block h-full">
                    <Card className="h-full overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(68,58,54,0.16)]">
                      <div className="relative aspect-[1.35] overflow-hidden rounded-[8px]">
                        <Image
                          src={assetPath(universe.image)}
                          alt={universe.eyebrow}
                          fill
                          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-soft/65 text-clay">
                          <Icon size={22} />
                        </div>
                        <p className="text-sm uppercase tracking-[0.2em] text-clay">{universe.eyebrow}</p>
                        <h3 className="mt-2 font-serif text-3xl leading-tight">{universe.title}</h3>
                        <p className="mt-3 leading-7 text-ink/68">{universe.short}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-clay">
                          Explorer <ArrowRight size={16} />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Agenda</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Des rendez-vous qui donnent envie de venir.</h2>
            <p className="mt-6 leading-8 text-ink/70">
              Le calendrier est prêt pour accueillir intervenants, jauges, tarifs et réservations.
            </p>
            <LinkButton href="/les-ateliers" variant="outline" className="mt-7">Voir les ateliers</LinkButton>
          </Reveal>
          <div className="grid gap-4">
            {workshops.map((workshop, index) => (
              <Reveal key={workshop.title} delay={index * 0.06}>
                <Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-clay">{workshop.category}</p>
                    <h3 className="mt-2 font-serif text-3xl">{workshop.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-ink/68">
                    <span>{workshop.date}</span>
                    <span className="rounded-full bg-rose-soft/65 px-3 py-1 font-medium text-clay">{workshop.price}</span>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Ils imaginent déjà la parenthèse</p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">Une marque qui rassure dès les premières secondes.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.author} delay={index * 0.06}>
                <Card className="h-full p-7">
                  <Heart className="mb-5 text-clay" size={22} />
                  <p className="text-lg leading-8 text-ink/76">“{testimonial.quote}”</p>
                  <p className="mt-6 text-sm font-medium text-clay">{testimonial.author}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid items-center gap-8 rounded-[8px] bg-ink p-6 text-white shadow-soft md:grid-cols-[1fr_0.8fr] md:p-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">Instagram & newsletter</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
              Suivre l'ouverture, les ateliers et les premiers événements.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/70">
              Une présence sociale douce, lumineuse, centrée sur les coulisses du lieu et les ressources utiles aux parents.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <form className="rounded-[8px] bg-white/10 p-4 backdrop-blur">
              <label className="text-sm text-white/70" htmlFor="newsletter">Email</label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter"
                  type="email"
                  placeholder="votre@email.fr"
                  className="min-h-12 flex-1 rounded-full border border-white/20 bg-white px-4 text-ink outline-none"
                />
                <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rose-soft px-5 text-sm font-medium text-ink transition hover:bg-white">
                  <Mail size={17} /> S'inscrire
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
