import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site/SiteShell";
import { company } from "@/lib/catalog";

const ContactPage = () => {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return (
    <SiteShell>
      <section className="page-hero page-hero-contact"><div className="site-container page-hero-inner"><span className="eyebrow eyebrow-light">07 · Contact</span><h1>Hai să vorbim<br /><em>despre proiect.</em></h1><p>Datele de mai jos sunt placeholder și se înlocuiesc înainte de publicare.</p></div></section>
      <section className="section contact-section"><div className="site-container contact-layout"><div className="contact-info"><span className="eyebrow">Date configurabile</span><h2>Scrie-ne exact ce ai nevoie.</h2><div className="contact-info-list"><a href={`tel:${company.phone.replace(/\s/g, "")}`}><span><Phone size={18} /></span><div><small>Telefon</small><strong>{company.phone}</strong></div></a><a href={`mailto:${company.email}`}><span><Mail size={18} /></span><div><small>Email</small><strong>{company.email}</strong></div></a><div><span><MapPin size={18} /></span><div><small>Adresă</small><strong>{company.address}</strong></div></div></div><div className="contact-hours"><span>Program</span><strong>{company.hours}</strong></div><Link to="/cerere-oferta" className="text-link">Ai deja lista? Solicită ofertă <Send size={16} /></Link></div><form className="contact-form" onSubmit={submit}><div className="panel-heading"><div><span className="eyebrow">Mesaj</span><h2>Lasă-ne un rând.</h2></div></div><label className="field"><span>Nume *</span><input required placeholder="Numele tău" /></label><label className="field"><span>Email *</span><input required type="email" placeholder="nume@exemplu.ro" /></label><label className="field"><span>Mesaj *</span><textarea required rows={6} placeholder="Cu ce te putem ajuta?" /></label>{sent ? <div className="inline-success"><span><Mail size={16} /> Mesajul este pregătit.</span><small>Formularul de contact este prototip și necesită un endpoint de email înainte de publicare.</small></div> : <button className="button button-primary" type="submit">Trimite mesajul <Send size={16} /></button>}</form></div></section>
    </SiteShell>
  );
};

export default ContactPage;
