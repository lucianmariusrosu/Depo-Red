import { ArrowRight, Check, ChevronRight, Layers3, Ruler, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site/SiteShell";
import { categories, company, featuredProducts } from "@/lib/catalog";
import { useQuote } from "@/lib/quote-context";

const categoryHighlights = [
  { slug: "zidarie", title: "Materiale pentru zidărie", note: "Structură și rezistență", image: "/assets/slots/home.category.masonry.jpg", slot: "home.category.masonry" },
  { slug: "polistiren-termoizolatii", title: "Polistiren & termoizolații", note: "Confort pe termen lung", image: "/assets/slots/home.category.insulation.jpg", slot: "home.category.insulation" },
  { slug: "acoperisuri", title: "Acoperișuri", note: "Protecție de la fundație la coamă" },
];

const Index = () => {
  const { addItem } = useQuote();

  return (
    <SiteShell>
      <section className="hero-section">
        <div className="hero-media">
          <img data-image-slot="home.hero" src="/assets/slots/home.hero.jpg" alt="Șantier contemporan cu materiale de construcții pregătite pentru livrare" width="1440" height="680" />
        </div>
        <div className="hero-overlay" />
        <div className="site-container hero-content">
          <div className="hero-kicker"><span className="red-dot" /> CATALOG CU MATERIALE DE CONSTRUCȚII</div>
          <h1>Materiale care țin<br /><em>proiectele în picioare.</em></h1>
          <p>Un punct de pornire clar pentru constructori, echipe și proprietari: găsești rapid produsele potrivite, apoi ne trimiți lista pentru o ofertă personalizată.</p>
          <div className="hero-actions">
            <Link to="/produse" className="button button-primary">Vezi produsele <ArrowRight size={17} /></Link>
            <Link to="/cerere-oferta" className="button button-light">Solicită ofertă <ArrowRight size={17} /></Link>
          </div>
          <div className="hero-proof">
            <span><Check size={16} /> Catalog ușor de parcurs</span>
            <span><Check size={16} /> Cantități la alegere</span>
            <span><Check size={16} /> Fără plăți online</span>
          </div>
        </div>
        <span className="hero-index">01 / 04</span>
      </section>

      <section className="section section-intro">
        <div className="site-container intro-grid">
          <div>
            <span className="eyebrow">01 · De ce să alegi ROT MAN CONSTRUCT?</span>
            <h2>Mai puțin timp pierdut.<br /><span>Mai multă claritate.</span></h2>
          </div>
          <div className="intro-copy">
            <p>Construiește cu o listă bine pusă la punct. Catalogul nostru demo este organizat pentru a te ajuta să compari categorii, să alegi cantități și să trimiți o singură cerere completă.</p>
            <Link to="/despre-noi" className="text-link">Descoperă povestea noastră <ArrowRight size={16} /></Link>
          </div>
        </div>
        <div className="site-container benefit-grid">
          {[
            { icon: Layers3, title: "Categorii fără zgomot", text: "Structură logică pentru materialele folosite în proiecte reale." },
            { icon: Ruler, title: "Detalii utile", text: "Unități și specificații demo, pregătite pentru datele tale reale." },
            { icon: Truck, title: "Cerere într-un singur pas", text: "Adună produsele, adaugă cantități și trimite lista." },
            { icon: ShieldCheck, title: "Fără presiune", text: "Nu plătești online. Primești o discuție și o ofertă configurată." },
          ].map(({ icon: Icon, title, text }) => (
            <div className="benefit-item" key={title}>
              <span className="benefit-icon"><Icon size={20} /></span>
              <h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-categories">
        <div className="site-container">
          <div className="section-heading-row">
            <div><span className="eyebrow">02 · Găsește categoria</span><h2>Tot ce ai nevoie,<br /><span>într-un singur loc.</span></h2></div>
            <Link to="/produse" className="button button-outline">Vezi toate categoriile <ArrowRight size={16} /></Link>
          </div>
          <div className="category-grid">
            {categoryHighlights.map((category, index) => (
              <Link key={category.slug} to={`/produse?categorie=${category.slug}`} className="category-card">
                {category.image ? <div className="category-image"><img data-image-slot={category.slot} src={category.image} alt={category.title} width="640" height="480" /></div> : <div className="category-image category-image-placeholder"><span>03</span></div>}
                <div className="category-card-body"><span className="card-index">0{index + 1}</span><div><h3>{category.title}</h3><p>{category.note}</p></div><ChevronRight size={20} /></div>
              </Link>
            ))}
          </div>
          <div className="category-ribbon">
            <span>+ {categories.length - categoryHighlights.length} categorii disponibile</span>
            <Link to="/produse">Explorează catalogul complet <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-products">
        <div className="site-container">
          <div className="section-heading-row">
            <div><span className="eyebrow">03 · Selecție de pornire</span><h2>Produse pentru<br /><span>lista ta de ofertă.</span></h2></div>
            <span className="section-aside">Toate produsele sunt exemple<br />până la configurarea datelor reale.</span>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <Link to={`/produse/${product.slug}`} className="product-card-image">
                  <img data-image-slot={`product.${product.id}.card`} src={product.image} alt={product.name} width="720" height="540" />
                  <span className="sample-badge">PRODUS</span>
                </Link>
                <div className="product-card-content">
                  <span className="product-category">{product.category}</span>
                  <Link to={`/produse/${product.slug}`}><h3>{product.name}</h3></Link>
                  <p>{product.shortDescription}</p>
                  <div className="product-card-footer"><span className="product-price">{product.priceRon ? `${product.priceRon.toFixed(2)} RON` : "Preț la cerere"}</span><button className="mini-add" type="button" onClick={() => addItem(product, 1)} aria-label={`Adaugă ${product.name} la cererea de ofertă`}><ArrowRight size={16} /></button></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="promo-section">
        <div className="site-container promo-inner">
          <div><span className="eyebrow eyebrow-light">04 · Pentru proiectul tău</span><h2>Ai deja o listă?<br /><em>Hai să o punem în mișcare.</em></h2></div>
          <div><p>Trimite-ne produsele și cantitățile dorite. În versiunea finală, cererea ajunge la adresa comercială configurată de echipa ta.</p><Link to="/cerere-oferta" className="button button-light">Construiește cererea <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section contact-strip">
        <div className="site-container contact-strip-inner">
          <div><span className="eyebrow">Hai să vorbim</span><h2>Un proiect bun începe<br />cu o conversație clară.</h2></div>
          <div className="contact-strip-details"><span>{company.hours}</span><a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><Link to="/contact" className="text-link">Datele de contact <ArrowRight size={16} /></Link></div>
        </div>
      </section>
    </SiteShell>
  );
};

export default Index;
