import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: {
    default: "Tendre Parenthèse | La pause que tous les parents méritent",
    template: "%s | Tendre Parenthèse"
  },
  description:
    "Café poussette avec espace jeux, halte-garderie, ateliers et bien-être pour parents et enfants.",
  metadataBase: new URL("https://tendre-parenthese.fr"),
  openGraph: {
    title: "Tendre Parenthèse",
    description: "La pause que tous les parents méritent.",
    images: ["/images/hero-parenthese.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
