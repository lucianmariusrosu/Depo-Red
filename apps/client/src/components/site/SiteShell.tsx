import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, Phone, ShoppingBasket, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { company } from "@/lib/catalog";
import { useQuote } from "@/lib/quote-context";

const navItems = [
  { to: "/", label: "Acasă" },
  { to: "/produse", label: "Produse" },
  { to: "/despre-noi", label: "Despre noi" },
  { to: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { itemCount } = useQuote();
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "ROT MAN CONSTRUCT — Materiale pentru proiecte solide",
      "/produse": "Catalog produse — ROT MAN CONSTRUCT",
      "/cerere-oferta": "Solicită ofertă — ROT MAN CONSTRUCT",
      "/despre-noi": "Despre noi — ROT MAN CONSTRUCT",
      "/contact": "Contact — ROT MAN CONSTRUCT",
      "/politica-confidentialitate": "Politica de confidențialitate — ROT MAN CONSTRUCT",
      "/termeni-si-conditii": "Termeni și condiții — ROT MAN CONSTRUCT",
    };
    document.title = titles[location.pathname] || "Detaliu produs — ROT MAN CONSTRUCT";
  }, [location.pathname]);

  return (
    <div className="site-frame">
      <div className="top-strip">
        <div className="site-container top-strip-inner">
          <span>Furnizor local pentru proiecte care țin.</span>
          <span className="top-strip-meta"><Phone size={14} /> {company.phone}</span>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container header-inner">
          <Link to="/" className="brand" aria-label="ROT MAN CONSTRUCT, acasă" onClick={() => setOpen(false)}>
            <span className="brand-mark">C<span>.</span></span>
            <span className="brand-copy"><strong>ROT MAN CONSTRUCT</strong><small>MATERIALE PENTRU PROIECTE SOLIDE</small></span>
          </Link>
          <button className="mobile-menu-button" type="button" aria-label={open ? "Închide meniul" : "Deschide meniul"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navigație principală">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className={({ isActive }: { isActive: boolean }) => `nav-link ${isActive ? "is-active" : ""}`} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/cerere-oferta" className="quote-nav-link" onClick={() => setOpen(false)}>
              <ShoppingBasket size={17} /> Cerere ofertă <span className="nav-count">{itemCount}</span>
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-container footer-grid">
          <div>
            <Link to="/" className="brand brand-footer">
              <span className="brand-mark">C<span>.</span></span>
              <span className="brand-copy"><strong>ROT MAN CONSTRUCT</strong><small>CATALOG PRODUSE</small></span>
            </Link>
            <p className="footer-intro">Un catalog modern pentru materiale de construcții, construit să transforme o nevoie clară într-o ofertă bine pregătită.</p>
            <span className="demo-note">Date demonstrative · înlocuiește înainte de publicare</span>
          </div>
          <div>
            <p className="footer-heading">Navigație</p>
            <div className="footer-links">
              <Link to="/produse">Toate produsele</Link>
              <Link to="/despre-noi">Despre noi</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/cerere-oferta">Solicită ofertă</Link>
            </div>
          </div>
          <div>
            <p className="footer-heading">Contact</p>
            <div className="footer-links">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <span>{company.address}</span>
              <span>{company.hours}</span>
            </div>
          </div>
          <div className="footer-callout">
            <span className="eyebrow">Ai un proiect?</span>
            <h3>Trimite-ne lista ta. Revenim cu pașii următori.</h3>
            <Link to="/cerere-oferta" className="text-link">Solicită ofertă <ArrowUpRight size={16} /></Link>
          </div>
        </div>
        <div className="site-container footer-bottom">
          <span>© 2026 ROT MAN CONSTRUCT · Proiect independent</span>
          <div><Link to="/politica-confidentialitate">Politica de confidențialitate</Link><Link to="/termeni-si-conditii">Termeni și condiții</Link></div>
        </div>
      </footer>
    </div>
  );
}
