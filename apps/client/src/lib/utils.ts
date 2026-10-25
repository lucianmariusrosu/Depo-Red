import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Product, imageFor } from "./catalog"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const products: Product[] = [
  {
    id: "ciment structo",
    slug: "ciment structo plus",
        name: "Ciment pentru lucrări generale",
    category: "Ciment și mortare",
    categorySlug: "ciment-mortare",
    shortDescription: "Exemplu de produs pentru fundații, șape și lucrări de reparații.",
    description: "Acesta este un produs demonstrativ, folosit pentru a ilustra structura catalogului. Înlocuiește conținutul cu fișa tehnică, producătorul și prețul reale înainte de publicare.",
    image: imageFor("ciment-structo-plus.webp"),
    unit: "sac",
    sampleSpecs: [
      { label: "Ambalare", value: "Exemplu de completat" },
      { label: "Utilizare", value: "Lucrări generale" },
      { label: "Clasă", value: "De completat cu date reale" },
    ],
    priceRon: 0,
    isSample: true,
    featured: true,
  },
  {
    id: "adeziv",
    slug: "adeziv",
    name: "Adeziv flexibil pentru placări",
    category: "Adezivi și chituri",
    categorySlug: "adezivi-chituri",
    shortDescription: "Exemplu de adeziv pentru placări interioare și exterioare.",
    description: "Produs demonstrativ. Specificațiile, consumul și compatibilitatea trebuie înlocuite cu informații verificate de la furnizor înainte de publicare.",
    image: imageFor("product.adeziv.card"),
    unit: "sac",
    sampleSpecs: [
      { label: "Suprafață", value: "Exemplu de completat" },
      { label: "Aplicare", value: "Interior / exterior" },
      { label: "Consum", value: "De completat cu date reale" },
    ],
    priceRon: 0,
    isSample: true,
    featured: true,
  },
  {
    id: "hidroizolatie",
    slug: "hidroizolatie",
    name: "Membrană pentru hidroizolație",
    category: "Hidroizolații",
    categorySlug: "hidroizolatii",
    shortDescription: "Exemplu de rolă pentru protecția fundațiilor și suprafețelor.",
    description: "Produse. Tipul membranei, dimensiunile, compatibilitățile și prețul se configurează după furnizarea datelor reale.",
    image: imageFor("product.hidro.card"),
    unit: "rolă",
    sampleSpecs: [
      { label: "Format", value: "Exemplu de completat" },
      { label: "Destinație", value: "Fundații și suprafețe" },
      { label: "Date tehnice", value: "De completat cu date reale" },
    ],
    priceRon: 0,
    isSample: true,
    featured: true,
  },
  {
    id: "termoizolatie",
    slug: "termoizolatie",
    name: "Placă termoizolantă — produs ",
    category: "Polistiren și termoizolații",
    categorySlug: "polistiren-termoizolatii",
    shortDescription: "Exemplu de soluție pentru anveloparea clădirilor.",
    description: "Exemplu de catalog. Grosimea, densitatea, conductivitatea și prețul trebuie completate pe baza datelor reale ale produsului.",
    image: imageFor("home.category.insulation"),
    unit: "m²",
    sampleSpecs: [
      { label: "Grosime", value: "Exemplu de completat" },
      { label: "Utilizare", value: "Anvelopare" },
      { label: "Format", value: "De completat cu date reale" },
    ],
    priceRon: 0,
    isSample: true,
    featured: true,
  },
];
