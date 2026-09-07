import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MessageCircle, Instagram, Facebook, ArrowLeft } from "lucide-react";
import { pieces } from "@/data/catalogue";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const piece = pieces.find((p) => p.slug === params.slug);
    if (!piece) throw notFound();
    return { piece };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — House of Marble" }, { name: "robots", content: "noindex" }],
      };
    }
    const { piece } = loaderData;
    const title = `${piece.name} — House of Marble`;
    const description = `${piece.name} in ${piece.material}. ${piece.size}. ${piece.finish} finish, made to order.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: PieceDetail,
});

function PieceDetail() {
  const { piece } = Route.useLoaderData();
  const related = pieces.filter((p) => p.category === piece.category && p.slug !== piece.slug);

  const specs = [
    { label: "Material", value: piece.material },
    { label: "Dimensions", value: piece.size },
    { label: "Weight", value: piece.weight },
    { label: "Finish", value: piece.finish },
    { label: "Origin", value: piece.origin },
    { label: "Lead time", value: piece.lead },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-16">
      <Link
        to="/collections"
        className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground"
      >
        <ArrowLeft className="size-3" /> All collections
      </Link>

      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div className="overflow-hidden bg-secondary">
          <img
            src={piece.image}
            alt={`${piece.name} in ${piece.material}`}
            width={1200}
            height={1500}
            className="aspect-4/5 w-full object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">{piece.category}</p>
          <h1 className="mt-3 text-4xl md:text-5xl">{piece.name}</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {piece.description}
          </p>

          <dl className="mt-10 divide-y divide-border border-y border-border text-sm">
            {specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-6 py-3">
                <dt className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {s.label}
                </dt>
                <dd className="text-right">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6">
            <p className="eyebrow">Care</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{piece.care}</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink(
                `Hello House of Marble, I would like more information about the ${piece.name} (${piece.material}).`,
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-foreground bg-foreground px-7 py-3 text-[0.7rem] tracking-[0.24em] text-background uppercase transition-opacity hover:opacity-85"
            >
              <MessageCircle className="size-4" /> Enquire on WhatsApp
            </a>
            <Link
              to="/contact"
              className="border border-border px-7 py-3 text-[0.7rem] tracking-[0.24em] uppercase hover:border-foreground"
            >
              Email the studio
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted-foreground">
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram className="size-5 hover:text-foreground" />
            </a>
            {site.facebook && (
  <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook className="size-5 hover:text-foreground" />
            </a>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <p className="eyebrow">More in {piece.category}</p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <Link key={p.slug} to="/collections/$slug" params={{ slug: p.slug }} className="group">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-4 text-base">{p.name}</h2>
                <p className="text-xs text-muted-foreground">{p.material}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
