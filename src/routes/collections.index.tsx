import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { pieces } from "@/data/catalogue";
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
            <Link to="/collections/$slug" params={{ slug: p.slug }} className="group block">
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
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
