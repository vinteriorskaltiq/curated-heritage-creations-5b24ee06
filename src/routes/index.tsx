import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logoAsset from "@/assets/vinterior-logo.asset.json";
import heroImg from "@/assets/hero-antique-interior.jpg";
import showroomImg from "@/assets/showroom.jpg";
import storyImg from "@/assets/story-craft.jpg";
import productVitrine from "@/assets/product-vitrine.asset.json";
import productTable from "@/assets/product-table.asset.json";
import productChair from "@/assets/product-chair.asset.json";

const pageTitle =
  "Vinterior — Luxury Antique Furniture & Heritage Décor in Mumbai";
const pageDescription =
  "Discover museum-worthy antique furniture, vintage collectibles and heritage décor sourced from across the world. A private Mumbai gallery for discerning collectors.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const arrivals = [
  {
    img: productVitrine.url,
    name: "Louis XV Marquetry Vitrine",
    category: "Antique Cabinets · France, 19th Century",
    price: "On Request",
  },
  {
    img: productTable.url,
    name: "Anglo-Indian Carved Centre Table",
    category: "Heritage Furniture · Bombay, c. 1880",
    price: "On Request",
  },
  {
    img: productChair.url,
    name: "Burmese Rosewood Chair & Stool",
    category: "Carved Seating · Burma, 19th Century",
    price: "On Request",
  },
];

const pillars = [
  {
    n: "01",
    t: "Authenticated Provenance",
    d: "Every piece is examined, documented and dated. We stand behind its origin, era and materials — in writing.",
  },
  {
    n: "02",
    t: "Curated, Not Collected",
    d: "Fewer than one in forty pieces our sourcing team encounters is admitted into the Vinterior gallery.",
  },
  {
    n: "03",
    t: "Restoration in-House",
    d: "Master craftsmen in our Mumbai atelier restore each piece by hand — preserving patina, honouring age.",
  },
  {
    n: "04",
    t: "One-of-One",
    d: "Nothing is reproduced. Every acquisition is singular — a heritage object no two homes will ever share.",
  },
];

function Home() {
  return (
    <div className="bg-warm-white text-charcoal">
      <Nav />
      <Hero />
      <Arrivals />
      <Story />
      <Pillars />
      <Showroom />
      <Testimonials />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-sm border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-12">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Vinterior"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="hidden font-serif text-xl tracking-wide text-charcoal sm:block">
            Vinterior
          </span>
        </a>

        <nav className="hidden items-center gap-10 text-xs font-medium uppercase tracking-[0.22em] text-charcoal/80 lg:flex">
          <a href="#collections" className="hover:text-charcoal">Collections</a>
          <a href="#arrivals" className="hover:text-charcoal">New Arrivals</a>
          <a href="#story" className="hover:text-charcoal">Our Story</a>
          <a href="#gallery" className="hover:text-charcoal">Gallery</a>
          <a href="#showroom" className="hover:text-charcoal">Showroom</a>
        </nav>

        <a
          href="https://wa.me/919820649649"
          target="_blank"
          rel="noreferrer"
          className="hidden text-xs font-medium uppercase tracking-[0.22em] text-charcoal border-b border-charcoal/40 pb-1 hover:border-charcoal md:inline-block"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-charcoal">
      <img
        src={heroImg}
        alt="A curated antique interior featuring an ornate 19th-century console table and gilt mirror"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover slow-zoom"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-12 md:pb-32">
        <div className="max-w-3xl">
          <p className="eyebrow text-ivory/80 fade-in-up" style={{ animationDelay: "200ms" }}>
            <span className="hairline mr-4 bg-gold/80" /> Est. Mumbai
          </p>
          <h1
            className="mt-8 font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl md:text-7xl lg:text-[5.5rem] fade-in-up"
            style={{ animationDelay: "350ms" }}
          >
            Timeless Pieces.
            <br />
            <em className="font-normal italic text-ivory/95">Curated for Generations.</em>
          </h1>
          <p
            className="mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/80 md:text-lg fade-in-up"
            style={{ animationDelay: "550ms" }}
          >
            Discover museum-worthy antique furniture, vintage collectibles and heritage décor —
            sourced for discerning collectors, designers and homes with a sense of history.
          </p>
          <div
            className="mt-12 flex flex-wrap gap-4 fade-in-up"
            style={{ animationDelay: "750ms" }}
          >
            <a href="#collections" className="btn-primary bg-ivory text-charcoal border-ivory hover:bg-gold hover:border-gold hover:text-charcoal">
              Explore Collection
            </a>
            <a href="#showroom" className="btn-ghost-light">
              Visit Showroom
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] font-medium uppercase tracking-[0.4em] text-ivory/60">
        Scroll
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
      <p className="eyebrow">
        <span className="hairline mr-3" />
        {eyebrow}
      </p>
      <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-charcoal md:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}


function Arrivals() {
  return (
    <section id="arrivals" className="bg-warm-white py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionHeader
          eyebrow="Featured Arrivals"
          title={
            <>
              Newly acquired. <br />
              <em className="italic font-normal">Never to be repeated.</em>
            </>
          }
          intro="A rotating selection of the most singular pieces to enter our gallery this season — each authenticated, restored, and ready for its next century."
        />

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">
          {arrivals.map((p) => (
            <a key={p.name} href="#" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-8 flex items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-bronze">
                    {p.category}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-charcoal md:text-3xl">
                    {p.name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="font-serif text-lg italic text-charcoal">{p.price}</p>
                  <span className="mt-3 inline-block text-[10px] font-medium uppercase tracking-[0.28em] text-charcoal/70 border-b border-charcoal/30 pb-1 group-hover:border-charcoal group-hover:text-charcoal">
                    View Details
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="bg-ivory py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-20 md:px-12">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-warm-white">
            <img
              src={storyImg}
              alt="Vinterior master craftsman restoring an antique wood carving in the Mumbai atelier"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:col-span-6">
          <p className="eyebrow">
            <span className="hairline mr-3" />
            Our Story
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-charcoal md:text-5xl lg:text-[3.25rem]">
            A quiet gallery of things
            <br />
            <em className="italic font-normal">that outlive us.</em>
          </h2>
          <div className="mt-10 space-y-6 text-base font-light leading-relaxed text-muted-foreground md:text-[17px]">
            <p>
              Vinterior began on Mutton Street in Mumbai's Chor Bazaar — the oldest antique
              district in India — with a single premise: that a room furnished with history
              feels different from a room merely decorated.
            </p>
            <p>
              For over two decades, our founders have travelled the estates of Europe, the
              havelis of Rajasthan, the colonial homes of Goa and Bombay, and the ateliers of
              old craftsmen still working in walnut, teak, brass and gilt. What returns to our
              gallery has been authenticated, catalogued, and restored — never reimagined.
            </p>
            <p>
              We are not a furniture store. We are a private gallery of heritage objects,
              held in trust for the collectors who will one day pass them on.
            </p>
          </div>
          <div className="mt-12">
            <a href="#" className="btn-ghost">Read Our Story</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="bg-charcoal py-28 text-ivory md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">
            <span className="hairline mr-3 bg-gold" />
            The Vinterior Standard
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-ivory md:text-5xl lg:text-[3.25rem]">
            Why collectors <em className="italic font-normal">choose us.</em>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.n} className="border-t border-ivory/15 pt-8">
              <span className="font-serif text-sm italic text-gold">{p.n}</span>
              <h3 className="mt-8 font-serif text-2xl text-ivory">{p.t}</h3>
              <p className="mt-5 text-sm font-light leading-relaxed text-ivory/65">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-warm-white py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionHeader
          eyebrow="From the Gallery"
          title={
            <>
              A closer look at the <em className="italic font-normal">details.</em>
            </>
          }
          intro="Fragments, textures, and moments from inside our showroom and the private homes we have helped furnish."
          align="center"
        />

        <div className="mt-20 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {galleryImages.map((g, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden bg-ivory ${g.span}`}
            >
              <img
                src={g.src}
                alt="Vinterior gallery detail"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showroom() {
  return (
    <section id="showroom" className="relative min-h-[720px] w-full overflow-hidden bg-charcoal">
      <img
        src={showroomImg}
        alt="Vinterior showroom in Mumbai with antique cabinet, chandelier and vintage armchair"
        loading="lazy"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative mx-auto flex min-h-[720px] max-w-[1400px] items-center px-6 py-28 md:px-12 md:py-32">
        <div className="max-w-xl text-ivory">
          <p className="eyebrow text-gold">
            <span className="hairline mr-3 bg-gold" />
            Visit the Gallery
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-ivory md:text-5xl lg:text-[3.5rem]">
            An afternoon among <em className="italic font-normal">heirlooms.</em>
          </h2>
          <p className="mt-8 text-base font-light leading-relaxed text-ivory/80 md:text-lg">
            Our private showroom on Mutton Street welcomes collectors, designers and clients
            by appointment. Expect quiet rooms, natural light, and pieces you will not find
            anywhere else in India.
          </p>

          <address className="mt-10 not-italic font-serif text-lg leading-relaxed text-ivory/90">
            G-74 / G-75 / G-76
            <br />
            An Nasr (Sector 4), Mutton Street
            <br />
            Mumbai — 400003, India
          </address>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=An+Nasr+Sector+4+Mutton+Street+Mumbai+400003"
              target="_blank"
              rel="noreferrer"
              className="btn-primary bg-ivory text-charcoal border-ivory hover:bg-gold hover:border-gold"
            >
              Google Maps
            </a>
            <a
              href="https://wa.me/919820649649?text=I%20would%20like%20to%20schedule%20a%20visit%20to%20Vinterior."
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-light"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "There is a stillness to the pieces at Vinterior — you feel the weight of their history before you know a single thing about them.",
      name: "Interior Designer",
      city: "Mumbai",
    },
    {
      quote:
        "The only place in India where I have found antiques of a calibre worth flying home for. Truly museum-grade.",
      name: "Private Collector",
      city: "London / Delhi",
    },
    {
      quote:
        "A curation that would sit comfortably alongside 1stDibs or Phillips. Rare, and rarer still, honest.",
      name: "Boutique Hotel Owner",
      city: "Goa",
    },
  ];
  return (
    <section className="bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionHeader
          eyebrow="In Their Words"
          title={
            <>
              Quiet endorsements from
              <br />
              <em className="italic font-normal">those who know.</em>
            </>
          }
          align="center"
        />
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
          {items.map((t, i) => (
            <figure key={i} className="border-t border-charcoal/15 pt-10">
              <span className="font-serif text-5xl italic leading-none text-gold">"</span>
              <blockquote className="mt-4 font-serif text-xl italic leading-[1.5] text-charcoal md:text-2xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                {t.name} · {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  const tiles = [gallery3, gallery5, gallery1, gallery6, gallery4, gallery2];
  return (
    <section className="bg-warm-white py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Instagram"
            title={
              <>
                @vinterior.co.in
              </>
            }
          />
          <a
            href="https://www.instagram.com/vinterior.co.in/"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-xs font-medium uppercase tracking-[0.24em] text-charcoal"
          >
            Follow the Gallery
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {tiles.map((t, i) => (
            <a
              key={i}
              href="https://www.instagram.com/vinterior.co.in/"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden bg-ivory"
            >
              <img
                src={t}
                alt="Vinterior Instagram post"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal pt-24 pb-10 text-ivory/70">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 border-b border-ivory/10 pb-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="Vinterior"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="font-serif text-2xl tracking-wide text-ivory">Vinterior</span>
            </div>
            <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-ivory/60">
              A private gallery of authenticated antique furniture, vintage collectibles and
              heritage décor. Curated in Mumbai for collectors worldwide.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-gold">Gallery</h4>
            <ul className="mt-6 space-y-4 font-serif text-lg text-ivory/85">
              <li><a href="#collections" className="hover:text-gold">Collections</a></li>
              <li><a href="#arrivals" className="hover:text-gold">New Arrivals</a></li>
              <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
              <li><a href="#story" className="hover:text-gold">Our Story</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow text-gold">Visit &amp; Contact</h4>
            <address className="mt-6 not-italic text-sm font-light leading-relaxed text-ivory/70">
              G-74 / G-75 / G-76<br />
              An Nasr (Sector 4), Mutton Street<br />
              Mumbai — 400003, India
            </address>
            <ul className="mt-6 space-y-2 text-sm text-ivory/85">
              <li>
                <a href="tel:+919820649649" className="hover:text-gold">+91 98206 49649</a>
              </li>
              <li>
                <a
                  href="https://wa.me/919820649649"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vinterior.co.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow text-gold">The Journal</h4>
            <p className="mt-6 text-sm font-light leading-relaxed text-ivory/70">
              A quarterly letter on new acquisitions, private previews and the craft of restoration.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex items-center border-b border-ivory/30 pb-2 focus-within:border-gold"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-transparent py-2 text-sm text-ivory placeholder:text-ivory/40 outline-none"
              />
              <button
                type="submit"
                className="text-[10px] font-medium uppercase tracking-[0.24em] text-ivory hover:text-gold"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-ivory/45 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Vinterior Furniture's — All heirlooms reserved.</p>
          <p>Mumbai · India</p>
        </div>
      </div>
    </footer>
  );
}
