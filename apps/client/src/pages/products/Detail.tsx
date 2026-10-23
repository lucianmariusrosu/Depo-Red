import { ArrowLeft, ArrowRight, Check, Minus, Plus, Ruler, ShieldCheck } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { getProductBySlug } from "@/lib/catalog";
import { useQuote } from "@/lib/quote-context";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const navigate = useNavigate();
  const { addItem } = useQuote();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <SiteShell><div className="empty-state page-empty"><h1>Produsul nu a fost găsit.</h1><p>Revino la catalog pentru a vedea produsele disponibile.</p><Link to="/produse" className="button button-dark">Înapoi la catalog</Link></div></SiteShell>;
  }

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <SiteShell>
      <section className="section product-detail-section">
        <div className="site-container">
          <Link to="/produse" className="back-link"><ArrowLeft size={16} /> Înapoi la catalog</Link>
          <div className="product-detail-grid">
            <div className="product-detail-media">
              <img data-image-slot={`product.${product.id}.card`} src={product.image} alt={product.name} width="720" height="540" />
              <span className="sample-badge sample-badge-dark">PRODUS DEMO · ÎNLOCUIEȘTE DATELE</span>
            </div>
            <div className="product-detail-copy">
              <span className="eyebrow">{product.category}</span>
              <h1>{product.name}</h1>
              <p className="product-lead">{product.description}</p>
              <div className="detail-divider" />
              <div className="detail-meta-grid">
                <div><span>Unitate de măsură</span><strong>{product.unit}</strong></div>
                <div><span>Preț afișat</span><strong>{product.priceRon ? `${product.priceRon.toFixed(2)} RON` : "La cerere"}</strong></div>
              </div>
              <div className="specs-box">
                <div className="specs-heading"><Ruler size={17} /> Specificații de exemplu</div>
                {product.sampleSpecs.map((spec) => <div className="spec-row" key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}
              </div>
              <div className="quantity-row">
                <div><span className="field-label">Cantitate ({product.unit})</span><div className="quantity-stepper"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Scade cantitatea"><Minus size={16} /></button><span>{quantity}</span><button type="button" onClick={() => setQuantity((value) => value + 1)} aria-label="Crește cantitatea"><Plus size={16} /></button></div></div>
                <button className="button button-primary button-add-detail" type="button" onClick={handleAdd}>{added ? <><Check size={17} /> Adăugat în cerere</> : <>Adaugă la cererea de ofertă <ArrowRight size={17} /></>}</button>
              </div>
              {added && <div className="inline-success"><Check size={16} /> Produsul a fost adăugat. <button type="button" onClick={() => navigate("/cerere-oferta")}>Vezi cererea</button></div>}
              <div className="trust-row"><span><ShieldCheck size={16} /> Fără plăți online</span><span>Prețurile demo se configurează ulterior</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section product-detail-note"><div className="site-container"><div className="note-panel"><div><span className="eyebrow">Ai nevoie de mai multe produse?</span><h2>Adaugă produsele pe rând, apoi trimite o singură cerere.</h2></div><Link to="/produse" className="button button-outline">Continuă cumpărăturile <ArrowRight size={16} /></Link></div></div></section>
    </SiteShell>
  );
};

export default ProductDetail;
