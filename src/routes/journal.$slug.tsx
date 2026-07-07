import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, journalPosts } from "@/lib/journal";
import logoAsset from "@/assets/vinterior-logo.asset.json";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  component: PostPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-ivory">
      <div className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-6 font-serif text-4xl">Essay not found.</h1>
        <Link to="/journal" className="btn-ghost mt-8 inline-block">All Writing</Link>
      </div>
    </div>
  ),
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Vinterior Journal" }, { name: "robots", content: "noindex" }] };
    }
    const url = `/journal/${params.slug}`;
    return {
      meta: [
        { title: `${loaderData.title} — Vinterior Journal` },
        { name: "description", content: loaderData.description },
        { name: "keywords", content: loaderData.keywords.join(", ") },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: loaderData.date },
        { property: "article:author", content: "Vinterior" },
        { name: "twitter:title", content: loaderData.title },
        { name: "twitter:description", content: loaderData.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: loaderData.title,
            description: loaderData.description,
            datePublished: loaderData.date,
            author: { "@type": "Organization", name: "Vinterior" },
            publisher: { "@type": "Organization", name: "Vinterior" },
            mainEntityOfPage: url,
            keywords: loaderData.keywords.join(", "),
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
              { "@type": "ListItem", position: 3, name: loaderData.title, item: url },
            ],
          }),
        },
      ],
    };
  },
});

function PostPage() {
  const post = Route.useLoaderData();
  const others = journalPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-warm-white text-charcoal">
      <header className="border-b border-charcoal/10 bg-warm-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Vinterior" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-serif text-xl tracking-wide">Vinterior</span>
          </Link>
          <Link to="/journal" className="text-[10px] font-medium uppercase tracking-[0.24em] text-charcoal/70 hover:text-charcoal">
            ← All Writing
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-[760px] px-6 pt-20 pb-24 md:px-8 md:pt-32">
        <nav aria-label="Breadcrumb" className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          <Link to="/" className="hover:text-charcoal">Vinterior</Link>
          <span className="mx-2">/</span>
          <Link to="/journal" className="hover:text-charcoal">Journal</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">Essay</span>
        </nav>

        <p className="mt-10 text-[10px] uppercase tracking-[0.24em] text-bronze">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}
          </time>
          <span className="mx-2">·</span>
          {post.readMinutes} min read
        </p>
        <h1 className="mt-6 font-serif text-4xl leading-[1.1] md:text-5xl lg:text-[3.5rem]">
          {post.title}
        </h1>

        <div className="mt-14 space-y-8 font-serif text-[19px] leading-[1.7] text-charcoal/90 md:text-[20px]">
          {post.body.map((block, i) => (
            <div key={i}>
              {block.h && (
                <h2 className="mt-14 mb-6 font-serif text-2xl italic text-charcoal md:text-3xl">
                  {block.h}
                </h2>
              )}
              <p>{block.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-charcoal/15 pt-10">
          <p className="eyebrow"><span className="hairline mr-3" />Continue Reading</p>
          <ul className="mt-8 space-y-6">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/journal/$slug"
                  params={{ slug: p.slug }}
                  className="group block"
                >
                  <h3 className="font-serif text-2xl leading-snug group-hover:text-bronze">{p.title}</h3>
                  <p className="mt-2 text-sm font-light text-muted-foreground">{p.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 rounded-none border border-charcoal/15 bg-ivory p-8 md:p-10">
          <p className="eyebrow"><span className="hairline mr-3" />Visit the Gallery</p>
          <h3 className="mt-4 font-serif text-2xl leading-snug md:text-3xl">
            See these pieces in person at Chor Bazaar, Mumbai.
          </h3>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
            Our private showroom on Mutton Street welcomes collectors, designers and clients by appointment.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://wa.me/919820649649?text=I%20would%20like%20to%20visit%20Vinterior."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Schedule a Visit
            </a>
            <Link to="/" className="btn-ghost">Return to Gallery</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
