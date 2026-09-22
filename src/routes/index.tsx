import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/travertine-detail.jpg";
import craft from "@/assets/craft.jpg";
import { whatsappLink } from "@/lib/site";
import { categories, pieces, reviews, showcase } from "@/data/catalogue";
import { Reveal } from "@/components/reveal";
import waveVessel from "@/assets/travertine-wave-vessel-grey.jpg";
import flutedPlinth from "@/assets/fluted-marble-basin-plinth.jpg";
import hmBlackGoldTable from "@/assets/hm-black-gold-table.jpg";
import hmPremiumSlabs from "@/assets/hm-premium-slabs.jpg";
import noirPillars from "@/assets/noir-pillar-candles.jpg";
import whitePillars from "@/assets/marbled-white-pillar-candles.jpg";
import travertineSquareTray from "@/assets/travertine-square-vanity-tray.jpg";
import noirCandleTray from "@/assets/noir-marble-candle-tray.jpg";
import marbleArchClocks from "@/assets/marble-arch-clocks.jpg";
import onyxCandleVessel from "@/assets/onyx-candle-vessel.jpg";
import verdeTrinketBowl from "@/assets/verde-trinket-bowl.jpg";
import rossoSoapDish from "@/assets/rosso-soap-dish.jpg";
import onyxGreenTray from "@/assets/onyx-green-round-tray.jpg";
import marbleRingDishes from "@/assets/marble-ring-dishes-pair.jpg";
import blueOnyxTray from "@/assets/blue-onyx-round-tray.jpg";

const objects = [
  { slug: "travertine-square-vanity-tray", image: travertineSquareTray, title: "Travertine Square Vanity Tray", material: "Classic travertine" },
  { slug: "blue-onyx-round-tray", image: blueOnyxTray, title: "Blue Onyx Round Tray", material: "Blue onyx" },
  { slug: "onyx-candle-vessel", image: onyxCandleVessel, title: "Onyx Candle Vessel", material: "Honey onyx" },
  { slug: "marble-arch-clock", image: marbleArchClocks, title: "Marble Arch Desk Clock", material: "Carrara & Emperador" },
  { slug: "noir-marble-candle-tray", image: noirCandleTray, title: "Noir Marble Candle Tray", material: "Black marble" },
  { slug: "verde-trinket-bowl", image: verdeTrinketBowl, title: "Verde Trinket Bowl", material: "Green marble" },
  { slug: "rosso-soap-dish", image: rossoSoapDish, title: "Rosso Soap Dish", material: "Rosso Levanto marble" },
  { slug: "onyx-green-round-tray", image: onyxGreenTray, title: "Onyx Green Round Tray", material: "Green onyx" },
  { slug: "marble-ring-dishes", image: marbleRingDishes, title: "Marble Ring Dishes", material: "Mixed onyx & marble" },
];

const gallery = [
  { image: waveVessel, title: "Wave Vessel Basin", material: "Classic travertine" },
  { image: flutedPlinth, title: "Fluted Calacatta Basin", material: "Calacatta marble" },
  { image: hmBlackGoldTable, title: "Noir & Gold Side Table", material: "Black gold marble" },
  { image: hmPremiumSlabs, title: "Premium Slab Selection", material: "Black gold marble" },
  { image: noirPillars, title: "Noir Pillar Holders", material: "Black marble" },
  { image: whitePillars, title: "Bianco Pillar Holders", material: "Marbled white stone" },
];

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
          <div className="overflow-hidden bg-secondary">
            <img
              src={heroAsset}
              alt="Close-up of a travertine table edge"
              width={1200}
              height={1500}
              className="aspect-4/5 w-full object-cover transition-transform duration-700 hover:scale-105"
            />
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
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Selected Pieces</p>
            <h2 className="mt-3 text-3xl md:text-4xl">New this season</h2>
          </div>
          <Link
            to="/collections"
            className="inline-block self-center border border-border px-6 py-2.5 text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase transition-colors hover:border-foreground hover:text-foreground"
          >
            See all
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {pieces.slice(0, 12).map((p, i) => (
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

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10 md:pb-28">
        <div className="max-w-xl">
          <p className="eyebrow">Objects</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Small stone for everyday use</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
          {objects.map((o, i) => (
            <Reveal key={o.slug} delay={i * 80} from={i % 2 === 0 ? "left" : "right"}>
              <Link to="/collections/$slug" params={{ slug: o.slug }} className="group block">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={o.image}
                    alt={o.title}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-base">{o.title}</h3>
                <p className="text-xs tracking-wide text-muted-foreground">{o.material}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="max-w-xl">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-3 text-3xl md:text-4xl">In the light of the room</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.title} delay={i * 80} from={i % 2 === 0 ? "left" : "right"}>
                <div className="overflow-hidden bg-background">
                  <img
                    src={g.image}
                    alt={g.title}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-base">{g.title}</h3>
                <p className="text-xs tracking-wide text-muted-foreground">{g.material}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="max-w-xl">
          <p className="eyebrow">Pieces in place</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Installed work</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
          {showcase.slice(0, 6).map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="overflow-hidden bg-secondary">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="aspect-4/5 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-base">{s.title}</h3>
              <p className="text-xs tracking-wide text-muted-foreground">{s.material}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="eyebrow">Reviews</p>
              <h2 className="mt-3 text-3xl md:text-4xl">What our clients say</h2>
            </div>
            <Link
              to="/clients"
              className="inline-block self-center border border-border px-6 py-2.5 text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase transition-colors hover:border-foreground hover:text-foreground"
            >
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
