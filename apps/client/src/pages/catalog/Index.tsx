import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { categories } from "@/lib/catalog";
import { products } from "@/lib/utils";

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const activeCategory = searchParams.get("categorie") ?? "toate";

  const visibleProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = activeCategory === "toate" || product.categorySlug === activeCategory;
      const queryMatch = !normalized || `${product.name} ${product.category} ${product.shortDescription}`.toLowerCase().includes(normalized);
      return categoryMatch && queryMatch;
    });
  }, [activeCategory, query]);

  return (
    <SiteShell>
      <section className="page-hero page-hero-catalog">
        <div className="site-container page-hero-inner">
          <span className="eyebrow eyebrow-light">Catalog cu - 18 categorii</span>
          <h1>Produse pregătite<br /><em>pentru lista ta.</em></h1>
          <p>Explorează structura catalogului, filtrează după categorie și adaugă produse la cererea de ofertă.</p>
        </div>
      </section>
      <section className="section catalog-section">
        <div className="site-container">
          <div className="catalog-toolbar">
            <label className="search-box"><Search size={18} /><span className="sr-only">Caută în catalog</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Caută produse sau categorii..." /></label>
            
<div className="catalog-count"><span>{visibleProducts.length}</span></div>

          </div>
          <div className="catalog-layout">
            <aside className="catalog-sidebar">
              <div className="sidebar-heading"><SlidersHorizontal size={17} /> Filtrează catalogul</div>
              <button className={`category-filter ${activeCategory === "toate" ? "is-selected" : ""}`} type="button" onClick={() => setSearchParams({})}>Toate produsele <span>{products.length}</span></button>
              {categories.map((category) => (
                <button key={category.slug} className={`category-filter ${activeCategory === category.slug ? "is-selected" : ""}`} type="button" onClick={() => setSearchParams({ categorie: category.slug })}>{category.name}<span>›</span></button>
              ))}
              <div className="sidebar-note"><Filter size={17} /><p>Catalogul folosește momentan produse demonstrative. Datele reale se adaugă într-un singur modul de conținut.</p></div>
            </aside>
            <div className="catalog-results">
              <div className="results-heading"><p>Rezultate pentru <strong>{activeCategory === "toate" ? "toate categoriile" : categories.find((category) => category.slug === activeCategory)?.name}</strong></p><span>Prețurile sunt orientative sau „la cerere” până la configurare.</span></div>
              {visibleProducts.length ? (
                <div className="product-grid catalog-grid">
                  {visibleProducts.map((product) => (
                    <article className="product-card" key={product.id}>
                      <Link to={`/produse/${product.slug}`} className="product-card-image">
                        <img data-image-slot={`product.${product.id}.card`} src={product.image} alt={product.name} width="720" height="540" />
                        <span className="sample-badge">PRODUSE</span>
                      </Link>
                      <div className="product-card-content">
                        <span className="product-category">{product.category}</span>
                        <Link to={`/produse/${product.slug}`}><h3>{product.name}</h3></Link>
                        <p>{product.shortDescription}</p>
                        <div className="product-card-footer"><span className="product-price">{product.priceRon ? `${product.priceRon.toFixed(2)} RON` : "Preț la cerere"}</span><Link to={`/produse/${product.slug}`} className="mini-add" aria-label={`Vezi ${product.name}`}><span>Vezi</span> <span aria-hidden="true">↗</span></Link></div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="empty-state"><h2>Nu am găsit produse.</h2><p>Încearcă un alt termen sau revino la toate categoriile.</p><button className="button button-dark" type="button" onClick={() => { setQuery(""); setSearchParams({}); }}>Resetează filtrele</button></div>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

export default CatalogPage;
