import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/vinterior-logo.asset.json";

type NavItem = { label: string; to?: string; href?: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Collections", to: "/collections" },
  { label: "Journal", to: "/journal" },
  { label: "Showroom", href: "/#showroom" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const pathname = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (item: NavItem) => {
    if (item.to === "/") return pathname === "/";
    if (item.to) return pathname === item.to || pathname.startsWith(item.to + "/");
    return false;
  };

  // Glass surface classes — shared across desktop pill, mobile pill, mobile sheet.
  const glassBase =
    "backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-[0_8px_32px_-8px_rgba(29,29,29,0.18),inset_0_1px_0_rgba(255,255,255,0.6)] transition-[background-color,box-shadow,backdrop-filter] duration-500";
  const glassBg = scrolled
    ? "bg-white/25"
    : "bg-white/12";
  const glassBgStronger = scrolled ? "bg-white/35" : "bg-white/20";

  return (
    <>
      {/* No spacer — nav floats over page hero; pages without a hero add their own top padding. */}

      <header
        className="fixed inset-x-0 top-0 z-50 pointer-events-none"
        style={{ animation: "navFadeIn 700ms cubic-bezier(0.22,1,0.36,1) both" }}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 pt-4 md:px-8 md:pt-6">
          {/* Left: logo + wordmark, outside the glass */}
          <Link to="/" className="pointer-events-auto flex items-center gap-3 group">
            <img
              src={logoAsset.url}
              alt="Vinterior"
              width={44}
              height={44}
              className={`h-11 w-11 rounded-full object-cover ring-1 transition-all duration-500 group-hover:scale-105 ${
                scrolled ? "ring-charcoal/10" : "ring-white/60 shadow-[0_2px_16px_rgba(0,0,0,0.25)]"
              }`}
            />
            <span
              className={`hidden font-serif text-xl tracking-wide sm:block transition-colors duration-500 ${
                scrolled
                  ? "text-charcoal"
                  : "text-ivory [text-shadow:0_1px_14px_rgba(0,0,0,0.55),0_1px_2px_rgba(0,0,0,0.35)]"
              }`}
            >
              Vinterior
            </span>
          </Link>

          {/* Center: floating glass pill (desktop) */}
          <nav
            aria-label="Primary"
            className={`pointer-events-auto hidden lg:flex items-center gap-1 rounded-full px-3 py-2 ${glassBase} ${glassBg}`}
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              const cls = `relative rounded-full px-5 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal/80 hover:text-charcoal transition-all duration-300 ease-out hover:bg-white/40 hover:scale-[1.04] ${
                active ? "text-charcoal bg-white/35" : ""
              }`;
              return item.to ? (
                <Link key={item.label} to={item.to} className={cls}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className={cls}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Visit Showroom CTA */}
          <div className="pointer-events-auto hidden lg:flex items-center gap-4">
            <a
              href="https://www.instagram.com/vinteriorstoreindia/"
              target="_blank"
              rel="noreferrer"
              aria-label="Vinterior on Instagram"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal/80 hover:text-charcoal ${glassBase} ${glassBg}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="/#showroom"
              className={`inline-flex items-center rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal hover:text-charcoal ${glassBase} ${glassBgStronger} hover:bg-white/50 transition-all duration-300`}
            >
              Visit Showroom
            </a>
          </div>

          {/* Mobile: compact glass pill with hamburger */}
          <div className="pointer-events-auto lg:hidden flex items-center">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${glassBase} ${glassBg}`}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute inset-x-0 top-0 h-px bg-charcoal transition-transform duration-300 ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute inset-x-0 bottom-0 h-px bg-charcoal transition-transform duration-300 ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        <div
          className={`pointer-events-auto lg:hidden overflow-hidden px-4 transition-[max-height,opacity] duration-500 ease-out ${
            open ? "max-h-[520px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile"
            className={`mx-auto max-w-[1500px] rounded-3xl p-3 ${glassBase} ${glassBgStronger}`}
          >
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => {
                const cls =
                  "block rounded-2xl px-5 py-4 text-[12px] font-medium uppercase tracking-[0.24em] text-charcoal/85 hover:text-charcoal hover:bg-white/40 transition-colors";
                return (
                  <li key={item.label}>
                    {item.to ? (
                      <Link to={item.to} className={cls}>
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} className={cls}>
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
              <li className="mt-2 border-t border-white/40 pt-3">
                <a
                  href="https://wa.me/919664368841"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl px-5 py-4 text-[12px] font-medium uppercase tracking-[0.24em] text-charcoal hover:bg-white/40"
                >
                  Enquire · WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <style>{`
        @keyframes navFadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
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
              An Nasr (Sector 4), Mutton Street<br />
              Mumbai, Maharashtra 400008, India
            </address>
            <ul className="mt-4 space-y-1 text-sm text-ivory/85">
              <li><a href="tel:+919820649649" className="hover:text-gold">+91 98206 49649</a></li>
              <li><a href="mailto:info@vinteriorstore.in" className="hover:text-gold">info@vinteriorstore.in</a></li>
              <li>
                <a href="https://wa.me/919664368841" target="_blank" rel="noreferrer" className="hover:text-gold">
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
