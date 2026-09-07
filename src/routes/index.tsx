import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/travertine-detail.jpg.asset.json";
import craft from "@/assets/craft.jpg";
import { whatsappLink } from "@/lib/site";
import { categories, pieces, reviews } from "@/data/catalogue";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Marble — Luxury Stone Interiors" },
      {
        name: "description",
        content:
          "Curated marble basins, furniture and décor objects, hand-finished for refined contemporary interiors.",
      },
      { property: "og:title", content: "House of Marble — Luxury Stone Interiors" },
      {
        property: "og:description",
        content: "Curated marble basins, furniture and décor objects for refined spaces.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 pt-10 pb-4 md:px-10 md:pt-14">
        <div className="animate-fade-in grid items-center gap-8 md:grid-cols-2 md:gap-14">
          <div className="border border-border p-3 md:p-4">
            <div className="overflow-hidden bg-secondary">
              <img
                src={heroAsset.url}
                alt="Close-up of a travertine table edge"
                width={1200}
                height={1500}
                className="aspect-4/5 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow">House of Marble</p>
            <h1 className="mt-3 text-4xl leading-[1.1] md:text-5xl">
              Luxury Stone Interiors
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Curated marble basins, furniture and décor objects for refined contemporary
              spaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/collections"
                className="inline-block border border-foreground bg-foreground px-8 py-3 text-[0.7rem] tracking-[0.24em] text-background uppercase"
              >
                View Collections
              </Link>
              <a
                href={whatsappLink("Hello House of Marble, I would like to enquire about your stone pieces.")}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-border px-8 py-3 text-[0.7rem] tracking-[0.24em] uppercase transition-colors hover:border-foreground"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="max-w-xl">
          <p className="eyebrow">Collections</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Shaped from a single block</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <Link to="/collections" className="group block">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-xl">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <Reveal>
            <img
              src={craft}
              alt="Stacked travertine and marble slabs in a stone workshop"
              loading="lazy"
              width={1600}
              height={1100}
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">The Material</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Quarried, carved, finished by hand</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Every piece begins as a raw slab selected for its veining. Our craftsmen cut,
              hollow and hand-polish each form, so no two are identical — the stone keeps its
              own record of time.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block link-underline text-[0.7rem] tracking-[0.24em] uppercase"
            >
              Our story
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selected Pieces</p>
            <h2 className="mt-3 text-3xl md:text-4xl">New this season</h2>
          </div>
          <Link to="/collections" className="link-underline text-[0.7rem] tracking-[0.24em] uppercase">
            See all
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {pieces.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
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
                <h3 className="mt-4 text-base">{p.name}</h3>
                <p className="text-xs tracking-wide text-muted-foreground">{p.material}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Reviews</p>
              <h2 className="mt-3 text-3xl md:text-4xl">What our clients say</h2>
            </div>
            <Link to="/clients" className="link-underline text-[0.7rem] tracking-[0.24em] uppercase">
              All reviews
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {reviews.slice(0, 2).map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <figure className="h-full border border-border bg-background p-8">
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
        </div>
      </section>

      <section className="bg-stone-deep">
        <div className="mx-auto max-w-2xl px-5 py-20 text-center md:px-10">
          <h2 className="text-3xl text-primary-foreground md:text-4xl">
            Designing a space with us
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            Share your plans and we will propose stone, form and finish for the rooms you are
            building.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block border border-primary-foreground/70 px-8 py-3 text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-primary-foreground hover:text-foreground"
          >
            Start an enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
