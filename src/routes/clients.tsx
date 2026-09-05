import { createFileRoute } from "@tanstack/react-router";
import { clients, reviews } from "@/data/catalogue";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Reviews — House of Marble" },
      {
        name: "description",
        content:
          "What homeowners, architects and developers say about working with House of Marble, and the studios we work with.",
      },
      { property: "og:title", content: "Clients & Reviews — House of Marble" },
      {
        property: "og:description",
        content: "Reviews from homeowners, architects and developers.",
      },
    ],
  }),
  component: Clients,
});

function Clients() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <p className="eyebrow">In Their Words</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Clients &amp; Reviews</h1>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <figure className="h-full border border-border bg-card p-8">
                <blockquote className="font-display text-xl leading-relaxed">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {r.name} — {r.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <p className="eyebrow">Trusted by</p>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
            {clients.map((c) => (
              <p key={c} className="font-display text-xl text-muted-foreground">
                {c}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
