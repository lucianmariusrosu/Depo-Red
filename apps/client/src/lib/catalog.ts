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

const imageFor = (slot: string) => `/assets/slots/${slot}.jpg`;

export const products: Product[] = [
  {
    id: "ciment",
    slug: "ciment",
    name: "Ciment pentru lucrări generale",
    category: "Ciment și mortare",
    categorySlug: "ciment-mortare",
    shortDescription: "Exemplu de produs pentru fundații, șape și lucrări de reparații.",
    description:
      "Acesta este un produs demonstrativ, folosit pentru a ilustra structura catalogului. Înlocuiește conținutul cu fișa tehnică, producătorul și prețul reale înainte de publicare.",
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
    description:
      "Produs demonstrativ. Specificațiile, consumul și compatibilitatea trebuie înlocuite cu informații verificate de la furnizor înainte de publicare.",
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
    description:
      "Produse. Tipul membranei, dimensiunile, compatibilitățile și prețul se configurează după furnizarea datelor reale.",
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
    description:
      "Exemplu de catalog. Grosimea, densitatea, conductivitatea și prețul trebuie completate pe baza datelor reale ale produsului.",
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
