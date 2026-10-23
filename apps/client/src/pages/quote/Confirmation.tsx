import { ArrowRight, CheckCircle2, Copy } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { SiteShell } from "@/components/site/SiteShell";

const Confirmation = () => {
  const [params] = useSearchParams();
  const reference = params.get("ref") || "DEMO-0000";
  return (
    <SiteShell>
      <section className="confirmation-page">
        <div className="confirmation-card">
          <span className="confirmation-icon"><CheckCircle2 size={34} /></span>
          <span className="eyebrow">Cerere înregistrată</span>
          <h1>Mulțumim. Am primit lista ta.</h1>
          <p>În versiunea configurată pentru publicare, cererea va ajunge la adresa comercială a companiei. Păstrează numărul de referință pentru orice revenire.</p>
          <div className="reference-box"><span>Număr de referință</span><strong>{reference}</strong><Copy size={15} /></div>
          <div className="confirmation-actions"><Link to="/produse" className="button button-dark">Înapoi la produse <ArrowRight size={16} /></Link><Link to="/" className="text-link">Acasă</Link></div>
          <small className="prototype-label">Stare demo: notificarea prin email necesită configurare server-side înainte de publicare.</small>
        </div>
      </section>
    </SiteShell>
  );
};

export default Confirmation;
