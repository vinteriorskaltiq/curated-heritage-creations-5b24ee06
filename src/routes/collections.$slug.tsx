import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCollection, collections } from "@/lib/collections";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const c = getCollection(params.slug);
    if (!c) throw notFound();
    return c;
  },
  component: CollectionDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-ivory">
      <div className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-6 font-serif text-4xl">Collection not found.</h1>
        <Link to="/collections" className="btn-ghost mt-8 inline-block">All Collections</Link>
      </div>
    </div>
  ),
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Vinterior" }, { name: "robots", content: "noindex" }] };
    }
    const url = `/collections/${params.slug}`;
    const c = loaderData;
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDescription },
        { name: "keywords", content: c.keywords.join(", ") },
        { property: "og:title", content: c.ogTitle },
        { property: "og:description", content: c.ogDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:title", content: c.ogTitle },
        { name: "twitter:description", content: c.ogDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Vinterior", item: "/" },
              { "@type": "ListItem", position: 2, name: "Collections", item: "/collections" },
              { "@type": "ListItem", position: 3, name: c.title, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Vinterior Furniture's",
            image: c.hero.image,
            url: "/",
            telephone: "+91-98206-49649",
            address: {
              "@type": "PostalAddress",
              streetAddress: "G-74 / G-75 / G-76, An Nasr, Mutton Street, Chor Bazaar",
              addressLocality: "Mumbai",
              postalCode: "400008",
              addressCountry: "IN",
            },
          }),
        },
      ],
    };
  },
});

function CollectionDetail() {
  const c = Route.useLoaderData();
  const relatedItems = c.related
    .map((slug) => collections.find((x) => x.slug === slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div className="min-h-screen bg-warm-white text-charcoal">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden bg-charcoal">
        <img src={c.hero.image} alt={c.hero.alt} className="absolute inset-0 h-full w-full object-cover slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 md:px-12 md:pb-20">
          <nav aria-label="Breadcrumb" className="text-[10px] uppercase tracking-[0.24em] text-ivory/70">
            <Link to="/" className="hover:text-ivory">Vinterior</Link>
            <span className="mx-2">/</span>
            <Link to="/collections" className="hover:text-ivory">Collections</Link>
            <span className="mx-2">/</span>
            <span className="text-ivory">{c.title}</span>
          </nav>
          <p className="eyebrow mt-8 text-ivory/80"><span className="hairline mr-3 bg-gold/80" /> {c.eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.08] text-ivory md:text-6xl">{c.h1}</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[860px] px-6 pt-20 pb-4 md:px-8 md:pt-28">
        <p className="font-serif text-2xl italic leading-[1.5] text-charcoal/90 md:text-[26px]">{c.intro}</p>
      </section>

      {/* BODY */}
      <article className="mx-auto max-w-[860px] px-6 pt-8 pb-20 md:px-8">
        <div className="space-y-6 font-serif text-[19px] leading-[1.7] text-charcoal/90 md:text-[20px]">
          {c.body.map((block, i) => (
            <div key={i}>
              {block.h && (
                <h2 className="mt-14 mb-5 font-serif text-2xl italic text-charcoal md:text-3xl">
                  {block.h}
                </h2>
              )}
              <p>{block.p}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24 border-t border-charcoal/15 pt-14">
          <p className="eyebrow"><span className="hairline mr-3" /> Frequently Asked</p>
          <h2 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">Questions collectors ask.</h2>
          <dl className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
            {c.faqs.map((f) => (
              <div key={f.q} className="py-8">
                <dt className="font-serif text-xl text-charcoal md:text-2xl">{f.q}</dt>
                <dd className="mt-4 text-base font-light leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA */}
        <div className="mt-16 border border-charcoal/15 bg-ivory p-8 md:p-12">
          <p className="eyebrow"><span className="hairline mr-3" /> Enquire</p>
          <h3 className="mt-4 font-serif text-2xl leading-snug md:text-3xl">
            See these pieces in person at our Mumbai gallery.
          </h3>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
            Vinterior is at G-74 / G-75 / G-76, An Nasr, Mutton Street, Chor Bazaar, Mumbai. Visits are
            welcomed by appointment; enquiries by WhatsApp are answered the same day.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/919820649649?text=${encodeURIComponent(`I would like to enquire about ${c.title} at Vinterior.`)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Enquire on WhatsApp
            </a>
            <Link to="/about" className="btn-ghost">About Vinterior</Link>
          </div>
        </div>

        {/* RELATED */}
        {relatedItems.length > 0 && (
          <div className="mt-20 border-t border-charcoal/15 pt-14">
            <p className="eyebrow"><span className="hairline mr-3" /> Related Collections</p>
            <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedItems.map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/collections/$slug"
                    params={{ slug: r.slug }}
                    className="group block border-t border-charcoal/15 pt-6"
                  >
                    <p className="text-[10px] uppercase tracking-[0.24em] text-bronze">{r.eyebrow}</p>
                    <h3 className="mt-3 font-serif text-2xl leading-snug text-charcoal group-hover:text-bronze">
                      {r.title}
                    </h3>
                    <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.24em] text-charcoal/60 border-b border-charcoal/30 pb-1 group-hover:border-charcoal">
                      Explore →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      <SiteFooter />
    </div>
  );
}
