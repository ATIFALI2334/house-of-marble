import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/catalogue";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — House of Marble" },
      {
        name: "description",
        content:
          "Selected marble and travertine projects by House of Marble — residences, villas and hotel suites across Pakistan.",
      },
      { property: "og:title", content: "Projects — House of Marble" },
      {
        property: "og:description",
        content: "Selected stone projects: residences, villas and hotel suites.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <p className="eyebrow">Our Work</p>
      <h1 className="mt-3 text-4xl md:text-5xl">Projects</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Bespoke stone work delivered with architects, designers and homeowners — from a single
        basin to a full residence.
      </p>

      <div className="mt-14 space-y-20">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className="grid items-center gap-8 md:grid-cols-2">
              <div className={`overflow-hidden bg-secondary ${i % 2 ? "md:order-2" : ""}`}>
                <img
                  src={p.image}
                  alt={`${p.title}, ${p.location}`}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="aspect-4/3 w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
              <div>
                <p className="eyebrow">
                  {p.location} — {p.year}
                </p>
                <h2 className="mt-3 text-3xl">{p.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.scope}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
