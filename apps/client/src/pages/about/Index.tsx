import { ArrowRight, BadgeCheck, Compass, Handshake, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site/SiteShell";

const AboutPage = () => (
  <SiteShell>
    <section className="page-hero page-hero-about"><div className="site-container page-hero-inner"><span className="eyebrow eyebrow-light">06 · Despre noi</span><h1>Un partener bun<br /><em>face loc lucrului bun.</em></h1><p>O prezentare de companie pregătită pentru informațiile reale ale furnizorului tău.</p></div></section>
    <section className="section about-intro"><div className="site-container about-intro-grid"><div><span className="eyebrow">Companie demo</span><h2>O fundație clară pentru o relație comercială corectă.</h2></div><div><p>CONSTRUMAT DEMO este un placeholder de brand pentru un furnizor de materiale de construcții. Structura de mai jos este pregătită pentru povestea, valorile, zona de livrare și experiența companiei tale.</p><p className="muted-copy">Nu am inventat ani de activitate, producători, autorizații sau certificări. Înlocuiește acest text cu informații verificate înainte de publicare.</p></div></div></section>
    <section className="section about-values"><div className="site-container"><div className="section-heading-row"><div><span className="eyebrow">Cum lucrăm</span><h2>Mai clar pentru tine.<br /><span>Mai bun pentru proiect.</span></h2></div></div><div className="value-grid">{[{icon: Compass, title: "Orientare pe proiect", text: "Pornim de la context, nu de la o listă generică de produse."},{icon: Handshake, title: "Comunicare directă", text: "Cererea de ofertă face loc întrebărilor care chiar contează."},{icon: Target, title: "Precizie în detalii", text: "Unitățile, cantitățile și datele reale stau la baza unei oferte bune."},{icon: BadgeCheck, title: "Date verificabile", text: "Fiecare specificație și preț trebuie confirmat înainte să devină public."}].map(({icon: Icon, title, text}) => <div className="value-card" key={title}><Icon size={22} /><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
    <section className="section about-cta"><div className="site-container about-cta-panel"><div><span className="eyebrow eyebrow-light">Pregătit pentru următorul pas?</span><h2>Transformă lista de materiale<br /><em>într-o conversație clară.</em></h2></div><Link to="/cerere-oferta" className="button button-light">Solicită ofertă <ArrowRight size={17} /></Link></div></section>
  </SiteShell>
);

export default AboutPage;
