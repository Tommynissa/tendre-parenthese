import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { cafeMenu, contactCards, legalPages, teamMembers, universes } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [
    ...universes.map((universe) => ({ slug: universe.slug })),
    { slug: "qui-sommes-nous" },
    { slug: "location-de-salle" },
    { slug: "notre-histoire" },
    { slug: "faq" },
    { slug: "contact" },
    ...Object.keys(legalPages).map((slug) => ({ slug }))
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const universe = universes.find((item) => item.slug === slug);
  const legal = legalPages[slug as keyof typeof legalPages];
  const standaloneTitles: Record<string, string> = {
    "qui-sommes-nous": "Qui sommes nous",
    "location-de-salle": "Location de salle",
    "notre-histoire": "Notre histoire",
    faq: "FAQ",
    contact: "Contact"
  };

  return {
    title: universe?.eyebrow ?? legal?.title ?? standaloneTitles[slug] ?? slug,
    description: universe?.short ?? legal?.content[0] ?? "Tendre Parenthèse"
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const universe = universes.find((item) => item.slug === slug);

  if (universe) {
    const Icon = universe.icon;

    return (
      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-32">
          <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-rose-soft text-clay">
                <Icon size={25} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">{universe.eyebrow}</p>
              <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">{universe.title}</h1>
              <p className="mt-6 text-lg leading-8 text-ink/72">{universe.short}</p>
              {universe.slug !== "le-cafe" ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/reserver">Réserver</LinkButton>
                </div>
              ) : null}
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative aspect-[1.05] overflow-hidden rounded-[8px] shadow-soft">
                <Image src={universe.image} alt={universe.eyebrow} fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Présentation</p>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl">Pensé dans le détail.</h2>
              <Card className="mt-6 border-clay/20 bg-rose-soft/45 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-clay">
                  {universe.tariff.label}
                </p>
                <p className="mt-3 font-serif text-5xl leading-none text-clay">{universe.tariff.value}</p>
                <p className="mt-2 text-lg font-medium text-ink/72">{universe.tariff.detail}</p>
              </Card>
            </Reveal>
            {["le-cafe", "halte-garderie", "les-ateliers", "bien-etre"].includes(universe.slug) ? (
              <Reveal delay={0.05}>
                <Card className="p-7">
                  <div className="grid gap-5">
                    {universe.sections.map((section) => (
                      <p key={section} className="text-lg leading-8 text-ink/72">
                        {section}
                      </p>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ) : (
              <div className="grid gap-4">
                {universe.sections.map((section, index) => (
                  <Reveal key={section} delay={index * 0.05}>
                    <Card className="p-7">
                      <p className="text-lg leading-8 text-ink/72">{section}</p>
                    </Card>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {universe.slug === "le-cafe" ? (
          <section className="section bg-ivory">
            <div className="container">
              <Reveal className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Menu / Carte</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                  Des boissons froides et snacks pour une vraie pause poussette.
                </h2>
                <p className="mt-5 text-lg leading-8 text-ink/68">
                  Une carte courte, lumineuse et facile à partager, pensée pour les parents,
                  les enfants et les moments où l'on veut juste se poser.
                </p>
              </Reveal>
              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                {cafeMenu.map((group, groupIndex) => (
                  <Reveal key={group.category} delay={groupIndex * 0.06}>
                    <Card className="h-full p-6 md:p-7">
                      <p className="text-sm uppercase tracking-[0.22em] text-clay">{group.category}</p>
                      <h3 className="mt-2 font-serif text-3xl">{group.note}</h3>
                      <div className="mt-7 grid gap-5">
                        {group.items.map((item) => (
                          <div key={item.name} className="border-b border-sand/70 pb-4 last:border-b-0 last:pb-0">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h4 className="font-medium text-ink">{item.name}</h4>
                                <p className="mt-1 text-sm leading-6 text-ink/60">{item.detail}</p>
                              </div>
                              <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-medium text-clay shadow-soft">
                                {item.price}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section bg-sage/24">
          <div className="container grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <Reveal>
              <HelpCircle className="mb-5 text-clay" />
              <h2 className="font-serif text-4xl md:text-5xl">FAQ</h2>
            </Reveal>
            <div className="grid gap-4">
              {universe.faq.map(([question, answer]) => (
                <Reveal key={question}>
                  <Card className="p-6">
                    <h3 className="font-medium">{question}</h3>
                    <p className="mt-2 leading-7 text-ink/68">{answer}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (slug === "notre-histoire") {
    return (
      <main className="px-6 pb-20 pt-32">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Notre histoire</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">Créer le lieu que les parents cherchent sans toujours le dire.</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="p-8">
              <p className="text-lg leading-9 text-ink/72">
                Tendre Parenthèse naît d'une intuition simple: la parentalité a besoin de lieux
                beaux, pratiques et profondément accueillants. Pas seulement un café. Pas seulement
                une garderie. Un endroit qui relie les besoins du quotidien avec le soin, la confiance
                et le plaisir de sortir.
              </p>
              <p className="mt-6 text-lg leading-9 text-ink/72">
                L'expérience est conçue pour évoluer: réservation, planning, événements,
                intervenants, promotions et gestion opérationnelle pourront être pilotés depuis
                un back-office.
              </p>
            </Card>
          </Reveal>
        </div>
      </main>
    );
  }

  if (slug === "qui-sommes-nous") {
    return (
      <main>
        <section className="px-6 pb-16 pt-32">
          <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Qui sommes nous</p>
              <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
                Pourquoi ce projet est né ?
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="p-7 md:p-9">
                <div className="grid gap-5 text-lg leading-9 text-ink/72">
                  <p>
                    En devenant maman de deux jeunes enfants, Lisa s’est rapidement rendu compte,
                    tout comme de nombreux parents de son entourage, qu’il était difficile de
                    trouver un endroit réunissant à la fois convivialité, bien-être et solutions
                    adaptées au quotidien des familles.
                  </p>
                  <p>
                    Aujourd’hui, les parents doivent souvent choisir entre prendre un café, occuper
                    leurs enfants, rencontrer d’autres parents ou simplement s’accorder un moment
                    pour elles. Très peu de lieux permettent de vivre tout cela au même endroit.
                  </p>
                  <p>
                    C’est de cette réflexion qu’est née Tendre Parenthèse : un espace pensé pour
                    répondre aux besoins réels des familles.
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">L’équipe</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                Trois parcours complémentaires au service des familles.
              </h2>
              <p className="mt-5 text-sm leading-7 text-ink/58">
                Portraits générés automatiquement en attendant les photos officielles.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {teamMembers.map((member, index) => (
                <Reveal key={member.name} delay={index * 0.06}>
                  <Card className="h-full overflow-hidden">
                    <div className="relative aspect-[0.86]">
                      <Image
                        src={member.image}
                        alt={`Portrait placeholder de ${member.name}`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm uppercase tracking-[0.22em] text-clay">{member.role}</p>
                      <h3 className="mt-2 font-serif text-3xl">{member.name}</h3>
                      <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink/68">
                        {member.credentials.map((credential) => (
                          <li key={credential} className="border-b border-sand/70 pb-3 last:border-b-0 last:pb-0">
                            {credential}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (slug === "location-de-salle") {
    const events = ["Anniversaire", "Baptême", "Baby shower", "Goûter privé", "Moment famille"];

    return (
      <main>
        <section className="px-6 pb-16 pt-32">
          <div className="container grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Location de salle</p>
              <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
                Privatiser Tendre Parenthèse le samedi.
              </h1>
              <p className="mt-6 text-lg leading-8 text-ink/70">
                Un lieu doux, lumineux et déjà pensé pour les familles, disponible le samedi
                pour célébrer les moments importants sans stress.
              </p>
              <Card className="mt-6 border-clay/20 bg-rose-soft/45 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-clay">
                  Privatisation du samedi
                </p>
                <p className="mt-3 font-serif text-5xl leading-none text-clay">Sur devis</p>
                <p className="mt-2 text-lg font-medium text-ink/72">
                  selon la durée, le nombre d’invités et les prestations choisies
                </p>
              </Card>
              <div className="mt-8">
                <LinkButton href="/reserver">Faire une demande</LinkButton>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative aspect-[1.05] overflow-hidden rounded-[8px] shadow-soft">
                <Image
                  src="/images/location-anniversaire.png"
                  alt="Salle décorée pour anniversaire, baptême ou baby shower"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Événements</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                Pour les anniversaires, baptêmes, baby showers et moments en famille.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {events.map((event) => (
                <span
                  key={event}
                  className="border-l-2 border-clay/45 bg-transparent py-2 pl-4 text-sm font-medium text-ink/72"
                >
                  {event}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-ivory">
          <div className="container">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Prestations en option</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                Composer une fête simple, belle et adaptée aux enfants.
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink/68">
                Selon vos envies, il est possible d’ajouter une décoration personnalisée,
                un gâteau ou buffet sucré, ainsi qu’une animation adaptée à l’âge des enfants.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    );
  }

  if (slug === "faq") {
    const faqs = universes.flatMap((item) => item.faq.map(([q, a]) => ({ q, a, universe: item.eyebrow })));
    return (
      <main className="px-6 pb-20 pt-32">
        <div className="container">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">FAQ</p>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl">Les réponses avant la première visite.</h1>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={`${faq.universe}-${faq.q}`} className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-clay">{faq.universe}</p>
                <h2 className="mt-2 font-medium">{faq.q}</h2>
                <p className="mt-2 leading-7 text-ink/68">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (slug === "contact") {
    return (
      <main className="px-6 pb-20 pt-32">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Contact</p>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl">Préparer votre parenthèse.</h1>
            <div className="mt-8 grid gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Card key={card.label} className="flex items-center gap-4 p-5">
                    <Icon className="text-clay" size={22} />
                    <div>
                      <p className="text-sm text-ink/54">{card.label}</p>
                      <p className="font-medium">{card.value}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="p-6">
              <form className="grid gap-4">
                {["Nom", "Email", "Sujet"].map((field) => (
                  <label key={field} className="grid gap-2 text-sm text-ink/70">
                    {field}
                    <input className="min-h-12 rounded-[8px] border border-sand bg-white px-4 outline-none focus:border-clay" />
                  </label>
                ))}
                <label className="grid gap-2 text-sm text-ink/70">
                  Message
                  <textarea className="min-h-36 rounded-[8px] border border-sand bg-white p-4 outline-none focus:border-clay" />
                </label>
                <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-clay px-5 text-sm font-medium text-white transition hover:-translate-y-0.5">
                  Envoyer <ArrowRight size={17} />
                </button>
              </form>
            </Card>
          </Reveal>
        </div>
      </main>
    );
  }

  const legal = legalPages[slug as keyof typeof legalPages];
  if (legal) {
    return (
      <main className="px-6 pb-20 pt-32">
        <div className="container max-w-3xl">
          <Reveal>
            <Clock className="mb-5 text-clay" />
            <h1 className="font-serif text-5xl md:text-7xl">{legal.title}</h1>
            <div className="mt-8 grid gap-4">
              {legal.content.map((paragraph) => (
                <Card key={paragraph} className="p-6">
                  <p className="leading-8 text-ink/70">{paragraph}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </main>
    );
  }

  notFound();
}
