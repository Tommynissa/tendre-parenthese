import type { Metadata } from "next";
import { ReservationFlow } from "./reservation-flow";

export const metadata: Metadata = {
  title: "Réserver",
  description: "Réservez un créneau garderie, atelier, massage, yoga ou autre demande."
};

export default function ReservationPage() {
  return <ReservationFlow />;
}
