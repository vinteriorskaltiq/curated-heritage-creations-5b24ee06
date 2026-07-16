import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-chrome";


import logoAsset from "@/assets/vinterior-logo.png";
import showroomImg from "@/assets/showroom.jpg";
import productVitrine from "@/assets/piece-cabinet.jpg";
import productTable from "@/assets/gallery-3.jpg";
import productChair from "@/assets/piece-armchair.jpg";
import showroomVitrines from "@/assets/gallery-1.jpg";
import showroomSeating from "@/assets/gallery-2.jpg";
import showroomMirror from "@/assets/piece-mirror.jpg";
import showroomCarved from "@/assets/gallery-4.jpg";

const pageTitle =
  "Vinterior — Antique Furniture Gallery in Mumbai | Heritage Décor";
const pageDescription =
  "Vinterior is a private antique furniture gallery on Mutton Street, Mumbai. Authenticated 18th & 19th-century European, Anglo-Indian, colonial and vintage furniture, chandeliers, mirrors, cabinets and heritage décor — restored in-house for collectors, interior designers and heritage homes across India.";
const pageKeywords = [
  "Vinterior",
  "Vinterior Mumbai",
  "Vinterior Furniture",
  "antique furniture Mumbai",
  "antique shop Mumbai",
  "antique dealers Mumbai",
  "Mutton Street Mumbai",
  "vintage furniture India",
  "colonial furniture Mumbai",
  "Anglo-Indian furniture",
  "Burmese teak furniture",
  "antique cabinets India",
  "antique chandeliers Mumbai",
  "antique mirrors India",
  "heritage décor Mumbai",
  "restored antique furniture",
  "luxury antique gallery India",
  "buy antique furniture online India",
].join(", ");

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { name: "keywords", content: pageKeywords },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_IN" },
      { name: "geo.region", content: "IN-MH" },
      { name: "geo.placename", content: "Mumbai" },
      { name: "geo.position", content: "18.9615;72.8352" },
      { name: "ICBM", content: "18.9615, 72.8352" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Where is Vinterior located in Mumbai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Vinterior is located at G-74 / G-75 / G-76, An Nasr, G-74/75/76, Mutton Street, Kumbharwada, Mumbai, Maharashtra 400008. Vinterior is one of Mumbai's longest-standing curated antique furniture galleries.",
              },
            },
            {
              "@type": "Question",
              name: "What kind of antiques does Vinterior sell?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Vinterior curates authenticated 18th and 19th-century European, Anglo-Indian, Burmese and colonial furniture, along with vintage chandeliers, gilt mirrors, marquetry cabinets, carved seating and heritage decorative objects. Every piece is one-of-one.",
              },
            },
            {
              "@type": "Question",
              name: "Are Vinterior's antiques authenticated and restored?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Every piece admitted into the gallery is examined, dated and documented, then restored by hand in our in-house Mumbai atelier — preserving patina and honouring age rather than refinishing over it.",
              },
            },
            {
              "@type": "Question",
              name: "Does Vinterior ship antique furniture across India and internationally?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Vinterior arranges crated, insured shipping for antique furniture across India and worldwide, working with specialist fine-art logistics partners. Enquire via WhatsApp for a quote.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

const arrivals = [
  {
    img: productVitrine,
    name: "Louis XV Marquetry Vitrine",
    category: "Antique Cabinets · France, 19th Century",
    price: "On Request",
    fit: "contain" as const,
  },
  {
    img: productTable,
    name: "Anglo-Indian Carved Centre Table",
    category: "Heritage Furniture · Bombay, c. 1880",
    price: "On Request",
    fit: "contain" as const,
  },
  {
    img: productChair,
    name: "Burmese Rosewood Chair & Stool",
    category: "Carved Seating · Burma, 19th Century",
    price: "On Request",
    fit: "contain" as const,
  },
  {
    img: showroomCarved,
    name: "Carved Rosewood Corner Cabinet",
    category: "Anglo-Indian · Late 19th Century",
    price: "On Request",
    fit: "cover" as const,
  },
  {
    img: showroomMirror,
    name: "Cast-Iron Weighing Scale & Dressing Mirror",
    category: "Industrial & Boudoir · Early 20th Century",
    price: "On Request",
    fit: "cover" as const,
  },
  {
    img: showroomVitrines,
    name: "European Vitrine Ensemble",
    category: "Cabinets & Display · 19th Century",
    price: "On Request",
    fit: "cover" as const,
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
      <SiteHeader />
      <Hero />
      <Arrivals />
      <Pillars />
      <Showroom />
      <Testimonials />
      <SeoContext />
      <JournalPreview />
      <Footer />
    </div>
  );
}

function SeoContext() {
  return (
    <section className="bg-warm-white py-24 md:py-32" aria-labelledby="about-vinterior">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <p className="eyebrow"><span className="hairline mr-3" />About Vinterior</p>
        <h2 id="about-vinterior" className="mt-6 font-serif text-3xl leading-[1.15] text-charcoal md:text-4xl">
          Mumbai's quiet address for <em className="italic font-normal">authenticated antique furniture.</em>
        </h2>
        <div className="mt-8 space-y-5 text-[15px] font-light leading-[1.85] text-muted-foreground md:text-base">
          <p>
            Vinterior is a private antique furniture gallery on Mutton Street in Mumbai. For over two decades our family has
            dealt in <strong className="font-medium text-charcoal">18th and 19th-century European antiques</strong>,
            <strong className="font-medium text-charcoal"> Anglo-Indian and colonial furniture</strong>,
            Burmese teak and rosewood, gilt mirrors, crystal chandeliers, marquetry cabinets, writing bureaus,
            campaign chests and one-of-a-kind heritage décor.
          </p>
          <p>
            Collectors, interior designers and heritage-home owners across Mumbai, Delhi, Bangalore, Goa,
            Hyderabad and internationally come to Vinterior for pieces that cannot be reproduced —
            each one authenticated, dated and restored by hand in our in-house atelier. We do not
            reproduce, we do not refinish over patina, and we do not stock what has already been
            catalogued a thousand times. If a piece enters the gallery, it has earned its place.
          </p>
          <p>
            Whether you are searching for a French Louis XV vitrine, an Anglo-Indian carved centre table,
            a Burmese rosewood chair, a Belgian cut-crystal chandelier or a colonial Bombay writing
            desk — you will find fewer, better things here than in any online catalogue.
            Visit our Mumbai showroom by appointment, or enquire on WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}

function JournalPreview() {
  const posts = [
    {
      slug: "how-to-authenticate-antique-furniture",
      title: "How to Authenticate an Antique",
      excerpt: "Patina, joinery, timber, hardware and provenance — the five things every buyer should examine before parting with money.",
    },
    {
      slug: "anglo-indian-furniture-history",
      title: "The Quiet Grandeur of Anglo-Indian Furniture",
      excerpt: "A short history of the furniture born from the meeting of European form and Indian craft — Bombay, Madras, and beyond.",
    },
    {
      slug: "buying-antique-furniture-mumbai",
      title: "Buying Antique Furniture in Mumbai",
      excerpt: "A practical guide to sourcing, authenticating and living with antique furniture in one of India's most active collecting cities.",
    },
  ];
  return (
    <section className="bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="The Journal"
            title={<>Notes from the <em className="italic font-normal">gallery.</em></>}
            intro="Occasional writing on antique furniture, restoration, provenance and the collectors who care."
          />
          <Link to="/journal" className="btn-ghost self-start md:self-end">All Writing</Link>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/journal/$slug"
              params={{ slug: p.slug }}
              className="group block border-t border-charcoal/15 pt-8"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-bronze">Essay</p>
              <h3 className="mt-4 font-serif text-2xl leading-snug text-charcoal group-hover:text-bronze">
                {p.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <span className="mt-6 inline-block text-[10px] font-medium uppercase tracking-[0.28em] text-charcoal/70 border-b border-charcoal/30 pb-1 group-hover:border-charcoal">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


const heroSlides = [
  { src: showroomVitrines, alt: "Vinterior gallery — European vitrines and antique cabinets in the Mumbai showroom" },
  { src: showroomSeating, alt: "Vinterior showroom — carved seating, Anglo-Indian chairs and vitrines" },
  { src: showroomMirror, alt: "Vinterior gallery — antique dressing mirror, vintage weighing scale and heritage cabinet" },
  { src: showroomCarved, alt: "Vinterior showroom — carved cabinets, colonial chairs and heritage collectibles" },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-charcoal">
      {heroSlides.map((s, idx) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={1920}
          height={1280}
          fetchPriority={idx === 0 ? "high" : "low"}
          loading={idx === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out ${
            idx === i ? "opacity-100 slow-zoom" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-12 md:pb-32">
        <div className="max-w-3xl">
          <p className="eyebrow text-ivory/80 fade-in-up" style={{ animationDelay: "200ms" }}>
            <span className="hairline mr-4 bg-gold/80" /> Est. Mumbai · Since 1955
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
            <a href="#arrivals" className="btn-primary bg-ivory text-charcoal border-ivory hover:bg-gold hover:border-gold hover:text-charcoal">
              View Selected Pieces
            </a>
            <a href="#showroom" className="btn-ghost-light">
              Visit Showroom
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Show slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-[2px] transition-all duration-500 ${
                idx === i ? "w-10 bg-gold" : "w-6 bg-ivory/40 hover:bg-ivory/70"
              }`}
            />
          ))}
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

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
          {arrivals.map((p) => (
            <a key={p.name} href="https://wa.me/919664368841" target="_blank" rel="noreferrer" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03] ${
                    p.fit === "cover" ? "object-cover" : "object-contain"
                  }`}
                />
              </div>
              <div className="mt-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-bronze">
                  {p.category}
                </p>
                <h3 className="mt-3 font-serif text-xl text-charcoal md:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-3 font-serif text-base italic text-charcoal/80">{p.price}</p>
                <span className="mt-4 inline-block text-[10px] font-medium uppercase tracking-[0.28em] text-charcoal/70 border-b border-charcoal/30 pb-1 group-hover:border-charcoal group-hover:text-charcoal">
                  Enquire via WhatsApp →
                </span>
              </div>
            </a>
          ))}
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
            An Nasr, G-74 / 75 / 76, Mutton Street
            <br />
            Kumbharwada
            <br />
            Mumbai, Maharashtra 400008, India
          </address>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.google.com/maps/place/Vinterior+India/data=!4m2!3m1!1s0x3be7cf993e0dd7b9:0x2ff98ec0d1470be"
              target="_blank"
              rel="noreferrer"
              className="btn-primary bg-ivory text-charcoal border-ivory hover:bg-gold hover:border-gold"
            >
              Open in Google Maps
            </a>
            <a
              href="https://wa.me/919664368841?text=I%20would%20like%20to%20schedule%20a%20visit%20to%20Vinterior."
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-light"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-24 md:px-12">
        <div className="overflow-hidden border border-ivory/15 bg-charcoal/40 shadow-2xl">
          <iframe
            title="Vinterior India — Mumbai showroom location on Google Maps"
            src="https://maps.google.com/maps?q=Vinterior%20India%20Mumbai&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full grayscale contrast-105"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "I walked in looking for one writing desk and left two hours later with an Anglo-Indian side table I hadn't planned on. The team took their time explaining the piece — the timber, the era, the small marks of age. It sits in our living room now and every guest asks about it.",
      city: "Mumbai",
      initials: "MU",
      rating: 5,
    },
    {
      quote:
        "I source antiques for residential and hospitality projects across India, and Vinterior has quietly become my first stop. The pieces are honest — no reproductions dressed up as antiques, no over-polished restorations. Prices are fair and shipping is handled properly.",
      city: "New Delhi",
      initials: "ND",
      rating: 5,
    },
    {
      quote:
        "My father collected Burmese teak all his life and I was nervous walking into an antique gallery on my own. The team was kind, unhurried, and even helped me identify a piece I already owned. I left with a beautiful old mirror and a great deal more confidence.",
      city: "Bengaluru",
      initials: "BE",
      rating: 5,
    },
    {
      quote:
        "We were restoring an old bungalow and needed period-correct furniture — not new pieces trying to look old. Vinterior understood immediately. Two vitrines, a carved centre table and a chandelier later, the house finally feels its age. In the best possible way.",
      city: "Goa",
      initials: "GO",
      rating: 5,
    },
    {
      quote:
        "I've been collecting quietly for a decade and it is rare to find a dealer who talks to you honestly about provenance and condition. Nothing is oversold here. The pieces speak for themselves, and the team lets them. That's the whole difference.",
      city: "Hyderabad",
      initials: "HY",
      rating: 5,
    },
    {
      quote:
        "We furnished a small boutique property with pieces from Vinterior — every room now has its own quiet story. Guests notice. Bookings mention the furniture in the reviews. It's the kind of detail that turns a hotel into somewhere people remember.",
      city: "Udaipur",
      initials: "UD",
      rating: 5,
    },
    {
      quote:
        "Shipped a French vitrine and a pair of colonial chairs to London — crated beautifully, arrived without a scratch. Communication throughout was gentle and precise. A rare experience in this trade.",
      city: "London",
      initials: "LN",
      rating: 5,
    },
    {
      quote:
        "As an architect I've been recommending Vinterior to clients across the country. The gallery has that increasingly rare thing — a point of view. You leave with a piece that means something, not just something that fills a corner.",
      city: "Chennai",
      initials: "CH",
      rating: 5,
    },
  ];

  const swatches = ["bg-bronze/15 text-bronze", "bg-charcoal/10 text-charcoal", "bg-gold/20 text-charcoal"];
  const loop = [...items, ...items];

  return (
    <section className="bg-ivory py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionHeader
          eyebrow="In Their Words"
          title={
            <>
              Reviews from our
              <br />
              <em className="italic font-normal">visitors &amp; collectors.</em>
            </>
          }
          align="center"
          intro="Unedited words from designers, homeowners and collectors who have spent an afternoon with us on Mutton Street."
        />
      </div>

      <div
        className="relative mt-20 group"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="flex w-max gap-6 md:gap-8 [animation:testimonial-marquee_90s_linear_infinite] group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <figure
              key={i}
              className="flex h-full w-[320px] shrink-0 flex-col border border-charcoal/10 bg-warm-white p-7 shadow-sm md:w-[380px] md:p-8"
            >
              <div className="flex items-center gap-1 text-gold" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 1.5l2.6 5.6 6 .7-4.4 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.4 7.8l6-.7L10 1.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-[16px] italic leading-[1.55] text-charcoal md:text-[17px]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-charcoal/10 pt-5">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-serif text-sm ${swatches[i % swatches.length]}`}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <div>
                  <p className="font-serif text-[15px] text-charcoal">{t.city}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    India · Google Review
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1400px] flex-col items-center justify-center gap-4 px-6 text-center md:px-12">
        <p className="text-sm font-light text-muted-foreground">
          Rated <span className="font-serif text-charcoal">5.0</span> on Google · Reviewed by clients across Mumbai, Delhi, Goa &amp; London
        </p>
        <a
          href="https://www.google.com/maps/place/Vinterior+India/data=!4m2!3m1!1s0x3be7cf993e0dd7b9:0x2ff98ec0d1470be"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          Read on Google
        </a>
      </div>

      <style>{`
        @keyframes testimonial-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
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
                src={logoAsset}
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

          <div className="md:col-span-3">
            <h4 className="eyebrow text-gold">Explore</h4>
            <ul className="mt-6 space-y-4 font-serif text-lg text-ivory/85">
              <li><a href="#arrivals" className="hover:text-gold">Pieces</a></li>
              <li><Link to="/collections" className="hover:text-gold">Collections</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/journal" className="hover:text-gold">Journal</Link></li>
              <li><a href="#showroom" className="hover:text-gold">Showroom</a></li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <h4 className="eyebrow text-gold">Visit &amp; Contact</h4>
            <address className="mt-6 not-italic text-sm font-light leading-relaxed text-ivory/70">
              G-74 / G-75 / G-76<br />
              An Nasr (Sector 4), Mutton Street<br />
              Mumbai, Maharashtra 400008, India
            </address>
            <ul className="mt-6 space-y-2 text-sm text-ivory/85">
              <li>
                <a href="tel:+919820649649" className="inline-flex items-center gap-2 hover:text-gold">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.35 1.84.59 2.8.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 98206 49649
                </a>
              </li>
              <li>
                <a href="https://wa.me/919664368841" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gold">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.67a11.9 11.9 0 0 0 5.65 1.44h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.15-3.39-8.44zM12.06 21.5h-.01a9.65 9.65 0 0 1-4.92-1.35l-.35-.21-3.8.99 1.02-3.7-.23-.38a9.66 9.66 0 0 1-1.48-5.11c0-5.34 4.35-9.68 9.7-9.68 2.59 0 5.02 1.01 6.85 2.84a9.63 9.63 0 0 1 2.84 6.85c0 5.34-4.35 9.75-9.62 9.75zm5.55-7.27c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.93-2.24-.25-.6-.5-.52-.68-.53l-.58-.01c-.2 0-.53.07-.8.38-.28.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.92 1.23 3.12.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.44.25-.71.25-1.31.18-1.44-.07-.13-.27-.2-.57-.35z" />
                  </svg>
                  +91 96643 68841
                </a>
              </li>
              <li>
                <a href="mailto:info@vinteriorstore.in" className="hover:text-gold">
                  info@vinteriorstore.in
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vinteriorstoreindia/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  Instagram
                </a>
              </li>
            </ul>

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
