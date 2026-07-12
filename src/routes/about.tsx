import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import heroImg from "@/assets/hero-antique-interior.jpg";
import storyImg from "@/assets/story-craft.jpg";
import showroomImg from "@/assets/showroom.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const title = "About Vinterior — Antique Furniture Since 1955, Mumbai";
const description =
  "A third-generation family enterprise established in 1955, Vinterior sources, restores and curates authentic antique furniture, period pieces and heritage décor from Mumbai for collectors, designers and heritage homes across India.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Vinterior, Vinterior India, antique furniture Mumbai, antique furniture India, luxury antique furniture, antique furniture store Mumbai, period furniture, vintage furniture, heritage furniture, Anglo-Indian furniture, French furniture, Italian furniture, Art Deco furniture, antique clocks, antique marble, fine glassware, luxury interiors",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: title,
          description,
          mainEntity: {
            "@type": "LocalBusiness",
            name: "Vinterior Furniture's",
            foundingDate: "1955",
            url: "/",
            image: heroImg,
            address: {
              "@type": "PostalAddress",
              streetAddress: "G-74 / G-75 / G-76, An Nasr, Mutton Street",
              addressLocality: "Mumbai",
              postalCode: "400008",
              addressCountry: "IN",
            },
            telephone: "+91-98206-49649",
            sameAs: ["https://www.instagram.com/vinteriorstoreindia/"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Vinterior", item: "/" },
            { "@type": "ListItem", position: 2, name: "About", item: "/about" },
          ],
        }),
      },
    ],
  }),
});

const expertise = [
  { name: "Anglo-Indian Furniture", note: "Bombay, Madras & Ceylon schools", img: gallery1, slug: "anglo-indian-furniture" },
  { name: "French Furniture", note: "Louis XV, Louis XVI, Empire", img: gallery2, slug: "french-antique-furniture" },
  { name: "Italian Furniture", note: "Venetian, Tuscan, Baroque", img: gallery3, slug: "italian-antique-furniture" },
  { name: "Japanese Furniture", note: "Tansu, Meiji lacquerwork", img: gallery4, slug: "japanese-antique-furniture" },
  { name: "Chinese Furniture", note: "Qing dynasty & provincial", img: gallery5, slug: "chinese-antique-furniture" },
  { name: "Art Deco Furniture", note: "Bombay Deco & European originals", img: gallery6, slug: "art-deco-furniture" },
];

const pillars = [
  { year: "Since 1955", h: "Established in 1955", p: "Over seven decades of heritage, built on quiet relationships and unhurried curation." },
  { year: "III", h: "Third Generation", p: "A family enterprise, passed down and refined across three generations of the same house." },
  { year: "1 of 1", h: "Authentic Collections", p: "Carefully curated originals, each piece authenticated in-house and sold with written provenance." },
  { year: "Trusted", h: "Collectors & Designers", p: "Serving private homes, hospitality, architects and interior designers across India and abroad." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden bg-charcoal">
        <img
          src={heroImg}
          alt="Vinterior gallery interior, Mumbai — heritage antique furniture since 1955"
          className="absolute inset-0 h-full w-full object-cover slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 md:px-12 md:pb-28">
          <p className="eyebrow text-ivory/80"><span className="hairline mr-4 bg-gold/80" /> About Vinterior</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-ivory md:text-7xl">
            Preserving history <em className="italic font-normal">since 1955.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-ivory/80 md:text-xl">
            A third-generation family enterprise dedicated to sourcing, restoring and curating
            exceptional antique furniture and rare collectibles.
          </p>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="border-t border-charcoal/10 bg-ivory py-28 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="max-w-2xl">
            <p className="eyebrow"><span className="hairline mr-3" /> Our Expertise</p>
            <h2 className="mt-8 font-serif text-4xl leading-[1.1] md:text-5xl">
              Six traditions, one gallery.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((c) => (
              <Link
                key={c.slug}
                to="/collections/$slug"
                params={{ slug: c.slug }}
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden bg-charcoal/5">
                  <img
                    src={c.img}
                    alt={`${c.name} — Vinterior antique collection, Mumbai`}
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between border-t border-charcoal/15 pt-4">
                  <div>
                    <h3 className="font-serif text-2xl leading-snug text-charcoal group-hover:text-bronze">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {c.note}
                    </p>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-charcoal/60 group-hover:text-charcoal">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-16 max-w-3xl font-serif text-xl italic leading-[1.6] text-charcoal/85 md:text-2xl">
            Beyond period furniture, our curated collection also includes{" "}
            <Link to="/collections/$slug" params={{ slug: "antique-marble" }} className="link-underline">antique marble</Link>,{" "}
            <Link to="/collections/$slug" params={{ slug: "antique-clocks-horology" }} className="link-underline">horology</Link> and{" "}
            <Link to="/collections/$slug" params={{ slug: "fine-glassware" }} className="link-underline">fine glassware</Link>,
            each chosen for its timeless craftsmanship and historical significance.
          </p>
        </div>
      </section>

      {/* WHY VINTERIOR */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <div className="max-w-2xl">
          <p className="eyebrow"><span className="hairline mr-3" /> Why Vinterior</p>
          <h2 className="mt-8 font-serif text-4xl leading-[1.1] md:text-5xl">
            A house built on heritage.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-px bg-charcoal/10 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.h} className="bg-warm-white p-10 md:p-12">
              <p className="font-serif text-4xl text-gold md:text-5xl">{p.year}</p>
              <h3 className="mt-8 font-serif text-2xl leading-snug">{p.h}</h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">{p.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-charcoal/10 bg-ivory py-28 md:py-36">
        <div className="mx-auto max-w-[900px] px-6 text-center md:px-12">
          <p className="eyebrow"><span className="hairline mr-3" /> A Closing Word</p>
          <p className="mt-10 font-serif text-3xl leading-[1.35] text-charcoal md:text-4xl">
            Whether you are furnishing a luxury residence, a heritage property, a boutique hotel,
            or searching for an investment-worthy antique — Vinterior offers timeless pieces that
            become part of your family's legacy.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link to="/collections" className="btn-primary">View Collections</Link>
            <a href="https://wa.me/919820649649?text=I%20would%20like%20to%20visit%20Vinterior." target="_blank" rel="noreferrer" className="btn-ghost">
              Plan Your Visit
            </a>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow"><span className="hairline mr-3" /> Visit Our Gallery</p>
            <h2 className="mt-8 font-serif text-4xl leading-[1.1] md:text-5xl">
              Vinterior, <em className="italic font-normal">Mumbai.</em>
            </h2>
            <address className="mt-10 not-italic font-serif text-xl leading-[1.6] text-charcoal/90">
              Vinterior<br />
              G-74 / G-75 / G-76<br />
              An Nasr, Sector 4, Mutton Street<br />
              Kumbharwada<br />
              Mumbai 400008, Maharashtra, India
            </address>
            <div className="mt-10 space-y-2 text-sm text-charcoal/80">
              <p><a href="tel:+919820649649" className="link-underline">+91 98206 49649</a></p>
              <p>
                <a href="https://wa.me/919820649649" target="_blank" rel="noreferrer" className="link-underline">WhatsApp</a>
                <span className="mx-3 text-charcoal/30">·</span>
                <a href="https://www.instagram.com/vinteriorstoreindia/" target="_blank" rel="noreferrer" className="link-underline">Instagram</a>
              </p>
            </div>
            <div className="mt-10">
              <a
                href="https://wa.me/919820649649?text=I%20would%20like%20to%20plan%20a%20visit%20to%20Vinterior."
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Plan Your Visit
              </a>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="mb-6 overflow-hidden">
              <img src={showroomImg} alt="Vinterior showroom in Mumbai" className="h-[280px] w-full object-cover" />
            </div>
            <iframe
              title="Vinterior India location on Google Maps"
              src="https://www.google.com/maps?q=Vinterior+India+Mumbai&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-105 border border-charcoal/10"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
