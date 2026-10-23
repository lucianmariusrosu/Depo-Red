import { ArrowLeft, ArrowRight, Check, FileText, Minus, Plus, Trash2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiteShell } from "@/components/site/SiteShell";
import { useQuote } from "@/lib/quote-context";
import { apiFetch } from "@/lib/api";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  deliveryLocality: string;
  comments: string;
};

const initialForm: FormState = { name: "", company: "", email: "", phone: "", deliveryLocality: "", comments: "" };

const QuoteRequestPage = () => {
  const { items, setQuantity, removeItem, clear } = useQuote();
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (!items.length) { setError("Adaugă cel puțin un produs înainte de trimitere."); return; }
    setSubmitting(true);
    try {
      const response = await apiFetch("/quote-requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, items }) });
      const payload = await response.json() as { ok?: boolean; data?: { reference?: string }; error?: { message?: string } };
      if (!response.ok || !payload.ok) throw new Error(payload.error?.message || "Cererea nu a putut fi trimisă.");
      clear();
      navigate(`/cerere-oferta/confirmare?ref=${encodeURIComponent(payload.data?.reference || "DEMO-0000")}`);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Cererea nu a putut fi trimisă. Încearcă din nou.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteShell>
      <section className="page-hero page-hero-quote"><div className="site-container page-hero-inner"><span className="eyebrow eyebrow-light">05 · Cerere de ofertă</span><h1>Lista ta.<br /><em>Următorul pas.</em></h1><p>Verifică produsele, completează datele de contact și trimite-ne contextul de care avem nevoie.</p></div></section>
      <section className="section quote-section">
        <div className="site-container">
          <div className="quote-layout">
            <div className="quote-list-panel">
              <div className="panel-heading"><div><span className="eyebrow">Produse selectate</span><h2>Ce intră în ofertă?</h2></div><span className="item-count-large">{items.reduce((sum, item) => sum + item.quantity, 0)} buc.</span></div>
              {!items.length ? <div className="quote-empty"><FileText size={30} /><h3>Lista este goală.</h3><p>Răsfoiește catalogul și adaugă produsele de care ai nevoie.</p><Link to="/produse" className="button button-dark">Vezi catalogul <ArrowRight size={16} /></Link></div> : <div className="quote-items">{items.map((item) => <div className="quote-item" key={item.productId}><div className="quote-item-index">01</div><div className="quote-item-copy"><Link to={`/produse/${item.productId}`}>{item.name}</Link><span>{item.unit} · produs demo</span></div><div className="quantity-stepper quantity-stepper-small"><button type="button" onClick={() => setQuantity(item.productId, item.quantity - 1)} aria-label={`Scade cantitatea pentru ${item.name}`}><Minus size={14} /></button><span>{item.quantity}</span><button type="button" onClick={() => setQuantity(item.productId, item.quantity + 1)} aria-label={`Crește cantitatea pentru ${item.name}`}><Plus size={14} /></button></div><button type="button" className="remove-item" onClick={() => removeItem(item.productId)} aria-label={`Elimină ${item.name}`}><Trash2 size={16} /></button></div>)}</div>}
              {items.length > 0 && <Link to="/produse" className="add-more-link"><Plus size={15} /> Adaugă alte produse</Link>}
              <div className="quote-disclaimer"><Check size={16} /><p>Nu există plăți online. Cantitățile și prețurile finale se confirmă în oferta transmisă de companie.</p></div>
            </div>
            <form className="quote-form-panel" onSubmit={submit}>
              <div className="panel-heading"><div><span className="eyebrow">Date de contact</span><h2>Unde te găsim?</h2></div><span className="required-note">* obligatoriu</span></div>
              <div className="form-grid">
                <label className="field"><span>Nume complet *</span><input required value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Ex. Andrei Popescu" /></label>
                <label className="field"><span>Companie <small>opțional</small></span><input value={form.company} onChange={(event) => update("company", event.target.value)} placeholder="Ex. Compania SRL" /></label>
                <label className="field"><span>Email *</span><input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="nume@exemplu.ro" /></label>
                <label className="field"><span>Telefon *</span><input required value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="+40 744 116 311" /></label>
                <label className="field field-full"><span>Localitate de livrare *</span><input required value={form.deliveryLocality} onChange={(event) => update("deliveryLocality", event.target.value)} placeholder="Ex. Cluj-Napoca, Cluj" /></label>
                <label className="field field-full"><span>Detalii suplimentare <small>opțional</small></span><textarea value={form.comments} onChange={(event) => update("comments", event.target.value)} placeholder="Spune-ne despre proiect, termen sau alte cerințe..." rows={5} /></label>
              </div>
              {error && <div className="form-error" role="alert">{error}</div>}
              <button className="button button-primary submit-quote" type="submit" disabled={submitting || !items.length}>{submitting ? "Se trimite..." : <>Trimite cererea de ofertă <ArrowRight size={17} /></>}</button>
              <p className="form-footnote">Prin trimitere, ești de acord ca datele să fie folosite pentru pregătirea răspunsului comercial. Endpointul de email trebuie configurat înainte de publicare.</p>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

export default QuoteRequestPage;
