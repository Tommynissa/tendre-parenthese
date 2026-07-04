import type { Metadata } from "next";
import { AdminConsole } from "./admin-console";

export const metadata: Metadata = {
  title: "Administration",
  description: "Back-office de gestion Tendre Parenthèse."
};

export default function AdminPage() {
  return <AdminConsole />;
}
