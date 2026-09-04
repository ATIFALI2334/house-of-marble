import { createFileRoute, Link } from "@tanstack/react-router";
import craft from "@/assets/craft.jpg";
import basins from "@/assets/basins.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Naura Living" },
      {
        name: "description",
        content:
          "Naura Living is a stone atelier making marble and travertine furniture, basins and objects for contemporary interiors.",
      },
      { property: "og:title", content: "About — Naura Living" },
      {
        property: "og:description",
        content: "A stone atelier making marble and travertine pieces for contemporary interiors.",
      },
    ],
  }),
  component: About,
});

const values = [
  { title: "Material first", body: "Slabs are chosen block by block for veining, colour and density." },
  { title: "Made to order", body: "Nothing is mass produced; each piece is cut and finished for its room." },
  { title: "Built to stay", body: "Solid stone and solid wood, joined to outlast trends and owners." },
];

function About() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-5 py-20 text-center md:px-10 md:py-28">
        <p className="eyebrow">Our Story</p>
        <h1 className="mt-4 text-4xl leading-tight md:text-5xl">
          A stone atelier for the quiet interior
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Naura Living began with a simple preference: rooms feel calmer when they hold real
          material. We work with marble, travertine and solid wood to make basins, furniture
          and objects that carry weight — visually and literally.
        </p>
      </section>

      <img
        src={craft}
        alt="Marble and travertine slabs in the workshop"
        loading="lazy"
        width={1600}
        height={1100}
        className="h-[45vh] w-full object-cover"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-3 md:px-10 md:py-28">
        {values.map((v) => (
          <div key={v.title}>
            <h2 className="text-2xl">{v.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10">
          <img
            src={basins}
            alt="Hand-carved marble basin"
            loading="lazy"
            width={1200}
            height={1500}
            className="aspect-4/5 w-full object-cover"
          />
          <div>
            <p className="eyebrow">The Atelier</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Working with us</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We collaborate with architects, designers and homeowners on bespoke stone work —
              from a single basin to a full residence. Send drawings or references and we will
              come back with material options and a timeline.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block link-underline text-[0.7rem] tracking-[0.24em] uppercase"
            >
              Contact the studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
