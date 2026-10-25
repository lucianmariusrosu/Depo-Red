import { products } from "./utils";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  image: string;
  unit: string;
  sampleSpecs: Array<{ label: string; value: string }>;
  priceRon?: number;
  isSample: true;
  featured?: boolean;
};

export const categories = [
  { slug: "ciment-mortare", name: "Ciment și mortare", note: "Pentru fundații, șape și reparații" },
  { slug: "adezivi-chituri", name: "Adezivi și chituri", note: "Fixare, placări și finisaje" },
  { slug: "polistiren-termoizolatii", name: "Polistiren și termoizolații", note: "Sisteme pentru eficiență energetică" },
  { slug: "vata-minerala", name: "Vată minerală", note: "Izolații pentru confort și protecție" },
  { slug: "gips-carton-profile", name: "Gips-carton și profile", note: "Compartimentări și tavane" },
  { slug: "vopsele-tencuieli", name: "Vopsele și tencuieli decorative", note: "Straturi finale cu personalitate" },
  { slug: "hidroizolatii", name: "Hidroizolații", note: "Protecție pentru suprafețe și fundații" },
  { slug: "zidarie", name: "Materiale pentru zidărie", note: "Soluții pentru pereți durabili" },
  { slug: "acoperisuri", name: "Acoperișuri", note: "Sisteme complete pentru învelitori" },
  { slug: "tabla", name: "Tablă", note: "Profile și accesorii pentru protecție" },
  { slug: "sisteme-scurgere", name: "Sisteme scurgere", note: "Colectare și evacuare controlată" },
  { slug: "usi-ferestre", name: "Uși și Ferestre", note: "Soluții pentru anvelopa clădirii" },
  { slug: "usi-garaj", name: "Uși garaj", note: "Acces practic și sigur" },
  { slug: "chimice-accesorii", name: "Chimice și accesorii", note: "Etanșare, montaj și întreținere" },
  { slug: "sarma-role-max", name: "Sârmă și Role MAX TWINTIER", note: "Legare și armare eficientă" },
  { slug: "iluminat", name: "Iluminat", note: "Lumină pentru spații de lucru și locuire" },
  { slug: "piatra-naturala", name: "Piatră naturală", note: "Texturi autentice pentru proiecte durabile" },
  { slug: "scule-accesorii", name: "Scule și accesorii", note: "Echipare pentru fiecare etapă" },
] as const;

export const imageFor = (slot: string) => `/assets/slots/${slot}.jpg`;

export const featuredProducts = products.filter((product) => product.featured);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export const company = {
  name: "ROT MAN CONSTRUCT",
  tagline: "MATERIALE DIVERSIFICATE PENTRU PROIECTE MARETE",
  phone: "+40 744 116 311",
  email: "angelica.dumbrava@yahoo.com",
  address: "Adresă placeholder, România",
  hours: "Luni–Vineri · 08:00–17:00",
};
