import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/vinterior-logo.asset.json";

export function SiteHeader() {
  return (
    <header className="border-b border-charcoal/10 bg-warm-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Vinterior"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-serif text-xl tracking-wide">Vinterior</span>
        </Link>
        <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal/75 lg:flex">
          <Link to="/" className="hover:text-charcoal">Gallery</Link>
          <Link to="/about" className="hover:text-charcoal">About</Link>
          <Link to="/collections" className="hover:text-charcoal">Collections</Link>
          <Link to="/journal" className="hover:text-charcoal">Journal</Link>
          <a href="/#showroom" className="hover:text-charcoal">Visit</a>
        </nav>
        <a
          href="https://wa.me/919820649649"
          target="_blank"
          rel="noreferrer"
          className="text-[10px] font-medium uppercase tracking-[0.24em] text-charcoal border-b border-charcoal/40 pb-1 hover:border-charcoal"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-charcoal pt-20 pb-10 text-ivory/70">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-14 border-b border-ivory/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="Vinterior" className="h-11 w-11 rounded-full object-cover" />
              <span className="font-serif text-2xl tracking-wide text-ivory">Vinterior</span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-ivory/60">
              A third-generation family gallery of authenticated antique furniture and heritage
              décor, established in Mumbai in 1955.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="eyebrow text-gold">Explore</h4>
            <ul className="mt-6 space-y-3 font-serif text-lg text-ivory/85">
              <li><Link to="/" className="hover:text-gold">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/collections" className="hover:text-gold">Collections</Link></li>
              <li><Link to="/journal" className="hover:text-gold">Journal</Link></li>
            </ul>
          </div>
          <div className="md:col-span-5">
            <h4 className="eyebrow text-gold">Visit &amp; Contact</h4>
            <address className="mt-6 not-italic text-sm font-light leading-relaxed text-ivory/70">
              Vinterior — G-74 / G-75 / G-76<br />
              An Nasr (Sector 4), Mutton Street, Chor Bazaar<br />
              Mumbai, Maharashtra 400008, India
            </address>
            <ul className="mt-4 space-y-1 text-sm text-ivory/85">
              <li><a href="tel:+919820649649" className="hover:text-gold">+91 98206 49649</a></li>
              <li>
                <a href="https://wa.me/919820649649" target="_blank" rel="noreferrer" className="hover:text-gold">
                  WhatsApp
                </a>
                <span className="mx-2 text-ivory/30">·</span>
                <a href="https://www.instagram.com/vinteriorstoreindia/" target="_blank" rel="noreferrer" className="hover:text-gold">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory/45 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Vinterior Furniture's — Est. 1955, Mumbai.</p>
          <p>Antique Furniture · Period · Vintage · Heritage</p>
        </div>
      </div>
    </footer>
  );
}
