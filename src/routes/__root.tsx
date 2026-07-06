import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Page 404</p>
        <h1 className="mt-6 text-5xl text-charcoal">This page has been retired.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The piece you are looking for is no longer on display.
        </p>
        <div className="mt-10">
          <Link to="/" className="btn-primary">
            Return to Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">A moment</p>
        <h1 className="mt-6 text-4xl text-charcoal">Something didn't load.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Please refresh, or return to the gallery.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try Again
          </button>
          <a href="/" className="btn-ghost">Return Home</a>
        </div>
      </div>
    </div>
  );
}

const siteTitle = "Vinterior — Luxury Antique Furniture & Heritage Décor, Mumbai";
const siteDescription =
  "Vinterior curates museum-worthy antique furniture, vintage collectibles and heritage décor from a private Mumbai gallery — sourced for discerning collectors, designers and connoisseurs.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteTitle },
      { name: "description", content: siteDescription },
      { name: "author", content: "Vinterior Furniture's" },
      { name: "theme-color", content: "#f8f6f2" },
      { property: "og:site_name", content: "Vinterior" },
      { property: "og:title", content: siteTitle },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: siteTitle },
      { name: "twitter:description", content: siteDescription },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Vinterior Furniture's",
          image: "https://www.vinteriorstore.in/og.jpg",
          "@id": "https://www.vinteriorstore.in",
          url: "https://www.vinteriorstore.in",
          telephone: "+91-98206-49649",
          priceRange: "$$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "G-74 / G-75 / G-76, An Nasr (Sector 4), Mutton Street",
            addressLocality: "Mumbai",
            postalCode: "400003",
            addressCountry: "IN",
          },
          sameAs: ["https://www.instagram.com/vinterior.co.in/"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
