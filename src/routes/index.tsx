import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import craft from "@/assets/craft.jpg";
import { categories, pieces } from "@/data/catalogue";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naura Living — Luxury Stone Interiors" },
      {
        name: "description",
        content:
          "Curated marble basins, furniture and décor objects, hand-finished for refined contemporary interiors.",
      },
      { property: "og:title", content: "Naura Living — Luxury Stone Interiors" },
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
      <section className="relative">
        <img
          src={hero}
          alt="Living room with a sculptural travertine coffee table"
          width={1920}
          height={1200}
          className="h-[78vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-stone-deep/60 via-transparent to-transparent">
          <div className="mx-auto w-full max-w-7xl px-5 pb-14 md:px-10 md:pb-20">
            <p className="eyebrow text-primary-foreground/80">Naura Living</p>
            <h1 className="mt-3 max-w-2xl text-4xl leading-[1.1] text-primary-foreground md:text-6xl">
              Luxury Stone Interiors
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/85">
              Curated marble basins, furniture and décor objects for refined contemporary
              spaces.
            </p>
            <Link
              to="/collections"
              className="mt-8 inline-block border border-primary-foreground/70 px-8 py-3 text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-primary-foreground hover:text-foreground"
            >
              View Collections
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="max-w-xl">
          <p className="eyebrow">Collections</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Shaped from a single block</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.title}
              to="/collections"
              className="group block"
            >
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
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <img
            src={craft}
            alt="Stacked travertine and marble slabs in a stone workshop"
            loading="lazy"
            width={1600}
            height={1100}
            className="aspect-4/3 w-full object-cover"
          />
          <div>
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
          </div>
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
          {pieces.slice(0, 4).map((p) => (
            <article key={p.name}>
              <div className="overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-base">{p.name}</h3>
              <p className="text-xs tracking-wide text-muted-foreground">{p.material}</p>
            </article>
          ))}
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
