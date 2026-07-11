import { createFileRoute, Link } from "@tanstack/react-router";
import { collections } from "@/lib/collections";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

const title = "Antique Furniture Collections — Vinterior India";
const description =
  "Explore Vinterior's curated antique furniture collections — Anglo-Indian, French, Italian, Japanese, Chinese, Art Deco, antique clocks, marble and fine glassware.";

export const Route = createFileRoute("/collections/")({
  component: CollectionsIndex,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/collections" },
    ],
    links: [{ rel: "canonical", href: "/collections" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          description,
          hasPart: collections.map((c) => ({
            "@type": "WebPage",
            name: c.title,
            url: `/collections/${c.slug}`,
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
          ],
        }),
      },
    ],
  }),
});

function CollectionsIndex() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal">
      <SiteHeader />
      <section className="mx-auto max-w-[1400px] px-6 pt-24 pb-16 md:px-12 md:pt-32">
        <nav aria-label="Breadcrumb" className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          <Link to="/" className="hover:text-charcoal">Vinterior</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">Collections</span>
        </nav>
        <h1 className="mt-8 font-serif text-5xl leading-[1.05] md:text-6xl">
          The Vinterior <em className="italic font-normal">Collections.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
          Eleven curated categories, from Anglo-Indian teak to French crystal — each with its own
          history, its own craft, and its own place in a considered home.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-32 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((c) => (
            <Link
              key={c.slug}
              to="/collections/$slug"
              params={{ slug: c.slug }}
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden bg-charcoal/5">
                <img
                  src={c.hero.image}
                  alt={c.hero.alt}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <p className="mt-6 text-[10px] uppercase tracking-[0.24em] text-bronze">{c.eyebrow}</p>
              <h2 className="mt-3 font-serif text-3xl leading-snug group-hover:text-bronze">{c.title}</h2>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.24em] text-charcoal/70 border-b border-charcoal/30 pb-1 group-hover:border-charcoal">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
