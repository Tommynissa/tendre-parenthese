"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, CreditCard, Users } from "lucide-react";
import { Button, LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { reservationTypes } from "@/lib/site-data";

const slots = ["09:30", "10:30", "11:30", "14:00", "15:30", "17:00"];

export function ReservationFlow() {
  const [type, setType] = useState(reservationTypes[0]);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(slots[0]);
  const [people, setPeople] = useState(1);
  const [paid, setPaid] = useState(false);

  const estimate = useMemo(() => {
    if (type === "Garderie") return people * 10;
    if (type === "Atelier") return people * 18;
    if (type === "Massage") return 45;
    if (type === "Yoga") return people * 22;
    return null;
  }, [people, type]);

  return (
    <main className="px-6 pb-20 pt-32">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Réservation</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Choisir une parenthèse en quelques gestes.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">
            Ce tunnel prépare l'intégration Stripe: sélection du service, date, créneau,
            participants et récapitulatif de paiement.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["1", "Service"],
              ["2", "Créneau"],
              ["3", "Paiement"]
            ].map(([number, label]) => (
              <div key={label} className="rounded-[8px] bg-white/72 p-4 shadow-soft">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-soft text-sm font-semibold text-clay">
                  {number}
                </span>
                <p className="mt-3 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <Card className="p-5 md:p-7">
          <div className="grid gap-7">
            <section>
              <h2 className="mb-4 flex items-center gap-2 font-serif text-3xl">
                <CalendarDays className="text-clay" /> Je souhaite réserver
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {reservationTypes.map((item) => (
                  <label
                    key={item}
                    className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-[8px] border px-4 transition ${
                      type === item ? "border-clay bg-rose-soft/45" : "border-sand bg-white hover:border-clay/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={item}
                      checked={type === item}
                      onChange={() => setType(item)}
                      className="accent-clay"
                    />
                    <span className="font-medium">{item}</span>
                  </label>
                ))}
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              <label className="grid gap-2 text-sm text-ink/68">
                Date
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="min-h-12 rounded-[8px] border border-sand bg-white px-4 text-ink outline-none focus:border-clay"
                />
              </label>
              <label className="grid gap-2 text-sm text-ink/68">
                Créneau
                <select
                  value={slot}
                  onChange={(event) => setSlot(event.target.value)}
                  className="min-h-12 rounded-[8px] border border-sand bg-white px-4 text-ink outline-none focus:border-clay"
                >
                  {slots.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm text-ink/68">
                Nombre
                <span className="flex min-h-12 items-center rounded-[8px] border border-sand bg-white px-3">
                  <Users size={17} className="mr-2 text-clay" />
                  <input
                    type="number"
                    min={1}
                    max={8}
                    value={people}
                    onChange={(event) => setPeople(Number(event.target.value))}
                    className="w-full bg-transparent outline-none"
                  />
                </span>
              </label>
            </section>

            <section className="rounded-[8px] bg-ivory p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-clay">Récapitulatif</p>
                  <p className="mt-2 font-serif text-3xl">{type}</p>
                  <p className="mt-1 text-sm text-ink/62">
                    {date || "Date à choisir"} à {slot} · {people} personne{people > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm text-ink/58">Estimation</p>
                  <p className="font-serif text-4xl text-clay">
                    {estimate === null ? "Sur devis" : `${estimate} €`}
                  </p>
                </div>
              </div>
            </section>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="flex-1" onClick={() => setPaid(true)}>
                <CreditCard size={18} /> Préparer le paiement
              </Button>
              <LinkButton href="/contact" variant="secondary" className="flex-1">
                Demande spéciale <ArrowRight size={17} />
              </LinkButton>
            </div>
            {paid ? (
              <p className="rounded-[8px] border border-sage bg-sage/20 p-4 text-sm leading-6 text-ink/70">
                Paiement simulé. Le point d'intégration Stripe est prêt: créer une session checkout
                côté serveur, puis enregistrer la réservation en base.
              </p>
            ) : null}
          </div>
        </Card>
      </div>
    </main>
  );
}
