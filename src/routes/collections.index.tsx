import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { pieces, type Piece } from "@/data/catalogue";
import { whatsappLink } from "@/lib/site";
import { X, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";

const filters = ["All", "Furniture", "Basins", "Décor"] as const;

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Collections — House of Marble" },
      {
        name: "description",
        content:
          "Browse House of Marble collections: marble and travertine furniture, hand-carved basins and stone décor objects.",
      },
      { property: "og:title", content: "Collections — House of Marble" },
      {
        property: "og:description",
        content: "Marble furniture, hand-carved basins and stone décor objects.",
      },
    ],
  }),
  component: Collections,
});

function Collections() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Piece | null>(null);
  const shown = active === "All" ? pieces : pieces.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <p className="eyebrow">The Catalogue</p>
      <h1 className="mt-3 text-4xl md:text-5xl">Collections</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        A slow, edited catalogue. Each piece is made to order in marble or travertine — tap a
        piece for full stone information and a WhatsApp enquiry.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`border px-5 py-2 text-[0.68rem] tracking-[0.2em] uppercase transition-colors ${
              active === f
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
        {shown.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 4) * 80}>
            <button
              type="button"
              onClick={() => setSelected(p)}
              className="group block w-full text-left"
            >
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
              <p className="text-xs tracking-wide text-muted-foreground">{p.material}</p>
              <p className="mt-1 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                {p.category}
              </p>
            </button>
          </Reveal>
        ))}
      </div>

      <div
        onClick={() => setSelected(null)}
        className={`fixed inset-0 z-40 bg-foreground/30 transition-opacity duration-500 ${
          selected ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md overflow-y-auto bg-background px-6 py-8 shadow-2xl transition-transform duration-700 ease-out md:px-10 ${
          selected ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!selected}
      >
        {selected && (
          <div key={selected.slug} className="animate-fade-in">
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="mb-6 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground"
            >
              <X className="size-3" /> Close
            </button>

            <div className="overflow-hidden bg-secondary">
              <img
                src={selected.image}
                alt={selected.name}
                className="aspect-4/5 w-full object-cover"
              />
            </div>

            <p className="eyebrow mt-6">{selected.category}</p>
            <h2 className="mt-2 text-3xl">{selected.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {selected.description}
            </p>

            <dl className="mt-6 divide-y divide-border border-y border-border text-sm">
              {[
                { label: "Material", value: selected.material },
                { label: "Dimensions", value: selected.size },
                { label: "Weight", value: selected.weight },
                { label: "Finish", value: selected.finish },
                { label: "Origin", value: selected.origin },
                { label: "Lead time", value: selected.lead },
              ].map((s) => (
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
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selected.care}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={whatsappLink(
                  `Hello House of Marble, I would like more information about the ${selected.name} (${selected.material}).`,
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-foreground bg-foreground px-7 py-3 text-[0.7rem] tracking-[0.24em] text-background uppercase transition-opacity hover:opacity-85"
              >
                <MessageCircle className="size-4" /> Enquire on WhatsApp
              </a>
              <Link
                to="/collections/$slug"
                params={{ slug: selected.slug }}
                className="border border-border px-7 py-3 text-center text-[0.7rem] tracking-[0.24em] uppercase hover:border-foreground"
              >
                Open full page
              </Link>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
