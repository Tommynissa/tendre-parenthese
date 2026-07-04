"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, ImagePlus, Plus, Save, Settings2, TicketPercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { adminModules, reservationTypes, workshops } from "@/lib/site-data";

type Workshop = {
  title: string;
  category: string;
  date: string;
  price: string;
};

type Reservation = {
  id: string;
  service: string;
  date: string;
  slot: string;
  people: number;
  status: string;
};

const initialReservations: Reservation[] = [
  { id: "TP-001", service: "Garderie", date: "2026-09-12", slot: "10:30", people: 1, status: "Confirmée" },
  { id: "TP-002", service: "Atelier", date: "2026-09-14", slot: "15:30", people: 2, status: "A confirmer" }
];

export function AdminConsole() {
  const [items, setItems] = useState<Workshop[]>(workshops);
  const [reservations, setReservations] = useState<Reservation[]>(initialReservations);
  const [draft, setDraft] = useState<Workshop>({ title: "", category: "Parent-enfant", date: "", price: "" });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("tendre-admin");
    if (stored) {
      const parsed = JSON.parse(stored) as { items: Workshop[]; reservations: Reservation[] };
      setItems(parsed.items);
      setReservations(parsed.reservations);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tendre-admin", JSON.stringify({ items, reservations }));
  }, [items, reservations]);

  const csv = useMemo(() => {
    const rows = [["id", "service", "date", "slot", "people", "status"], ...reservations.map((item) => [
      item.id,
      item.service,
      item.date,
      item.slot,
      String(item.people),
      item.status
    ])];
    return rows.map((row) => row.join(",")).join("\n");
  }, [reservations]);

  function addWorkshop() {
    if (!draft.title || !draft.date || !draft.price) return;
    setItems((current) => [draft, ...current]);
    setDraft({ title: "", category: "Parent-enfant", date: "", price: "" });
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  }

  function addSlot() {
    const next: Reservation = {
      id: `TP-${String(reservations.length + 1).padStart(3, "0")}`,
      service: reservationTypes[reservations.length % reservationTypes.length],
      date: "2026-09-20",
      slot: "14:00",
      people: 1,
      status: "Nouveau"
    };
    setReservations((current) => [next, ...current]);
  }

  return (
    <main className="px-6 pb-20 pt-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Back-office</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
              Piloter le lieu sans toucher au code.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              Cette console locale pose les écrans et les flux: ateliers, horaires, créneaux,
              prix, photos, intervenants, événements, promotions, réservations et export.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {adminModules.map((module) => (
                <div key={module} className="rounded-[8px] bg-white/72 p-4 text-sm font-medium shadow-soft">
                  {module}
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-5">
            <Card className="p-5">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-serif text-3xl">
                  <Plus className="text-clay" /> Ajouter un atelier
                </h2>
                {saved ? <span className="text-sm text-clay">Enregistré</span> : null}
              </div>
              <div className="grid gap-3 md:grid-cols-4">
                <input
                  placeholder="Titre"
                  value={draft.title}
                  onChange={(event) => setDraft({ ...draft, title: event.target.value })}
                  className="min-h-12 rounded-[8px] border border-sand bg-white px-4 outline-none focus:border-clay"
                />
                <input
                  placeholder="Catégorie"
                  value={draft.category}
                  onChange={(event) => setDraft({ ...draft, category: event.target.value })}
                  className="min-h-12 rounded-[8px] border border-sand bg-white px-4 outline-none focus:border-clay"
                />
                <input
                  placeholder="Date"
                  value={draft.date}
                  onChange={(event) => setDraft({ ...draft, date: event.target.value })}
                  className="min-h-12 rounded-[8px] border border-sand bg-white px-4 outline-none focus:border-clay"
                />
                <input
                  placeholder="Prix"
                  value={draft.price}
                  onChange={(event) => setDraft({ ...draft, price: event.target.value })}
                  className="min-h-12 rounded-[8px] border border-sand bg-white px-4 outline-none focus:border-clay"
                />
              </div>
              <Button className="mt-4" onClick={addWorkshop}>
                <Save size={17} /> Enregistrer
              </Button>
            </Card>

            <div className="grid gap-5 lg:grid-cols-2">
              <Card className="p-5">
                <h2 className="mb-4 flex items-center gap-2 font-serif text-3xl">
                  <Settings2 className="text-clay" /> Paramètres rapides
                </h2>
                <div className="grid gap-3">
                  {["Garderie: 10 €/heure", "Café poussette: formules dès 6 €", "Photos: 9 médias", "Horaires: 9h-18h"].map((item) => (
                    <label key={item} className="flex items-center justify-between rounded-[8px] bg-ivory p-4 text-sm">
                      {item}
                      <input type="checkbox" defaultChecked className="accent-clay" />
                    </label>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="secondary"><ImagePlus size={17} /> Photos</Button>
                  <Button variant="secondary"><TicketPercent size={17} /> Promo</Button>
                </div>
              </Card>

              <Card className="p-5">
                <h2 className="mb-4 font-serif text-3xl">Réservations</h2>
                <div className="grid gap-3">
                  {reservations.map((item) => (
                    <div key={item.id} className="rounded-[8px] bg-white p-4 text-sm shadow-soft">
                      <div className="flex items-center justify-between gap-3">
                        <strong>{item.id}</strong>
                        <span className="rounded-full bg-sage/30 px-3 py-1 text-xs text-ink/70">{item.status}</span>
                      </div>
                      <p className="mt-2 text-ink/66">
                        {item.service} · {item.date} · {item.slot} · {item.people} pers.
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button onClick={addSlot} variant="secondary"><Plus size={17} /> Créneau</Button>
                  <a
                    href={`data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`}
                    download="reservations-tendre-parenthese.csv"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-clay px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5"
                  >
                    <Download size={17} /> Export CSV
                  </a>
                </div>
              </Card>
            </div>

            <Card className="p-5">
              <h2 className="mb-4 font-serif text-3xl">Ateliers publiés</h2>
              <div className="grid gap-3">
                {items.map((item) => (
                  <div key={`${item.title}-${item.date}`} className="grid gap-2 rounded-[8px] bg-ivory p-4 md:grid-cols-4">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-ink/62">{item.category}</span>
                    <span className="text-ink/62">{item.date}</span>
                    <span className="text-clay">{item.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
