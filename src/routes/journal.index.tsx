import { createFileRoute, Link } from "@tanstack/react-router";
import { journalPosts } from "@/lib/journal";
import logoAsset from "@/assets/vinterior-logo.asset.json";

const title = "The Vinterior Journal — Notes on Antique Furniture, Restoration & Collecting";
const description =
  "Original writing from Vinterior on antique furniture, authentication, restoration, collecting and the heritage décor of India.";

export const Route = createFileRoute("/journal/")({
  component: JournalIndex,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Vinterior journal, antique furniture blog India, how to authenticate antique furniture, Anglo-Indian furniture, colonial furniture India, antique restoration Mumbai",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "The Vinterior Journal",
          description,
          publisher: { "@type": "Organization", name: "Vinterior" },
          blogPost: journalPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            url: `/journal/${p.slug}`,
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
            { "@type": "ListItem", position: 2, name: "Journal", item: "/journal" },
          ],
        }),
      },
    ],
  }),
});

function JournalIndex() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal">
      <header className="border-b border-charcoal/10 bg-warm-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Vinterior" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-serif text-xl tracking-wide">Vinterior</span>
          </Link>
          <Link to="/" className="text-[10px] font-medium uppercase tracking-[0.24em] text-charcoal/70 hover:text-charcoal">
            ← Back to Gallery
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-[1100px] px-6 pt-24 pb-16 md:px-12 md:pt-32">
        <nav aria-label="Breadcrumb" className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          <Link to="/" className="hover:text-charcoal">Vinterior</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">Journal</span>
        </nav>
        <h1 className="mt-8 font-serif text-5xl leading-[1.1] md:text-6xl">
          The Vinterior <em className="italic font-normal">Journal.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
          Occasional writing on antique furniture, restoration, provenance, Chor Bazaar and the
          quiet craft of collecting. Written from our gallery in Mumbai.
        </p>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-32 md:px-12">
        <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
          {journalPosts.map((p) => (
            <li key={p.slug}>
              <Link
                to="/journal/$slug"
                params={{ slug: p.slug }}
                className="group grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10"
              >
                <div className="text-[10px] uppercase tracking-[0.24em] text-bronze md:col-span-3">
                  <time dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}
                  </time>
                  <span className="mx-2">·</span>
                  {p.readMinutes} min
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-serif text-3xl leading-tight group-hover:text-bronze md:text-4xl">
                    {p.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <span className="mt-6 inline-block text-[10px] font-medium uppercase tracking-[0.28em] text-charcoal/70 border-b border-charcoal/30 pb-1 group-hover:border-charcoal">
                    Read the essay →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
