import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import hmGreyMarbleTable from "@/assets/hm-grey-marble-table.jpg.asset.json";
import hmWhiteSideTable from "@/assets/hm-white-side-table.jpg.asset.json";
import hmGoldWhiteTable from "@/assets/hm-gold-white-table.jpg.asset.json";
import hmBlackGoldTable from "@/assets/hm-black-gold-table.jpg.asset.json";
import hmPremiumSlabs from "@/assets/hm-premium-slabs.jpg.asset.json";
import oceanicMarbleTiles from "@/assets/oceanic-marble-tiles.jpg.asset.json";
import blackGoldMarbleSlabs from "@/assets/black-gold-marble-slabs.jpg.asset.json";
import rossoRoundTrayConsole from "@/assets/rosso-round-tray-console.jpg.asset.json";
import rossoBlockCoffeeTable from "@/assets/rosso-block-coffee-table.jpg.asset.json";
import greyRoundBasin from "@/assets/grey-round-basin.jpg.asset.json";
import travertinePedestalSideTable from "@/assets/travertine-pedestal-side-table.jpg.asset.json";
import onyxCrossSideTable from "@/assets/onyx-cross-side-table.jpg.asset.json";
import travertineNestingTraySet from "@/assets/travertine-nesting-tray-set.jpg.asset.json";
import marbledWhitePillarCandles from "@/assets/marbled-white-pillar-candles.jpg.asset.json";
import noirPedestalTable from "@/assets/noir-pedestal-table.jpg.asset.json";
import noirTrayTable from "@/assets/noir-tray-table.jpg.asset.json";
import noirPillarCandles from "@/assets/noir-pillar-candles.jpg.asset.json";
import whiteCandleHolders from "@/assets/white-candle-holders.jpg.asset.json";
import pietraSideTable from "@/assets/pietra-side-table.jpg.asset.json";

const items = [
  {
    title: "Grey Marble Round Table",
    material: "Grey marble with black steel base",
    note: "Round honed top on a looped column base — showroom piece.",
    image: hmGreyMarbleTable.url,
  },
  {
    title: "Bianco Side Table",
    material: "White marble and black metal",
    note: "Two-tier side table with a glass lower shelf.",
    image: hmWhiteSideTable.url,
  },
  {
    title: "Aurea Round Table",
    material: "Statuario marble and polished gold steel",
    note: "Curved gold frame under a bright white top.",
    image: hmGoldWhiteTable.url,
  },
  {
    title: "Nero Gold Table",
    material: "Nero marquina marble and gold steel",
    note: "Deep black top with white veining on a gold arc base.",
    image: hmBlackGoldTable.url,
  },
  {
    title: "Premium Marble Collection",
    material: "Assorted slabs",
    note: "Finished panels packed and ready to dispatch.",
    image: hmPremiumSlabs.url,
  },
  {
    title: "Oceanic Marble Tiles",
    material: "Oceanic grey marble",
    note: "Pebbled grey tiles cut in matched pairs.",
    image: oceanicMarbleTiles.url,
  },
  {
    title: "Black and Gold Marble Slabs",
    material: "Black and gold marble",
    note: "Full slabs crated at the yard before finishing.",
    image: blackGoldMarbleSlabs.url,
  },
  {
    title: "Rosso Round Tray",
    material: "Rosso Levanto marble",
    note: "A turned tray on a cream marble console.",
    image: rossoRoundTrayConsole.url,
  },
  {
    title: "Rosso Block Coffee Table",
    material: "Rosso Levanto marble",
    note: "A solid mitred block in a low-lit living room.",
    image: rossoBlockCoffeeTable.url,
  },
  {
    title: "Grey Round Basin",
    material: "Grey marble",
    note: "Thick-walled vessel basin with a matching stone waste.",
    image: greyRoundBasin.url,
  },
  {
    title: "Travertine Pedestal Side Table",
    material: "Natural travertine with brass stem",
    note: "Round travertine top on a slim brass stem and cylinder base.",
    image: travertinePedestalSideTable.url,
  },
  {
    title: "Onyx Cross Side Table",
    material: "Banded onyx",
    note: "Round top resting on two crossed onyx legs, carved from solid stone.",
    image: onyxCrossSideTable.url,
  },
  {
    title: "Travertine Nesting Tray Set",
    material: "Natural travertine",
    note: "Three stepped trays that nest together for vanity or console styling.",
    image: travertineNestingTraySet.url,
  },
  {
    title: "Marbled White Pillar Candle Holders",
    material: "White and grey marble",
    note: "Stacked cylinder and sphere pillars, sold as a pair.",
    image: marbledWhitePillarCandles.url,
  },
  {
    title: "Noir Pedestal Table",
    material: "Nero marquina marble with brass stem",
    note: "Round tray top on a brass stem and domed black marble base.",
    image: noirPedestalTable.url,
  },
  {
    title: "Noir Tray Table",
    material: "Black marble",
    note: "Rimmed round top on a squared black marble column.",
    image: noirTrayTable.url,
  },
  {
    title: "Noir Pillar Candle Holders",
    material: "Black marble",
    note: "Sculpted black pillars in two heights, sold as a pair.",
    image: noirPillarCandles.url,
  },
  {
    title: "Bianco Candle Holders",
    material: "White marble with brass",
    note: "Solid white marble bases with slim brass taper holders.",
    image: whiteCandleHolders.url,
  },
  {
    title: "Pietra Side Table",
    material: "Light stone",
    note: "Soft-edged side table for beside a chair or bed.",
    image: pietraSideTable.url,
  },
];

export const Route = createFileRoute("/our-collection")({
  head: () => ({
    meta: [
      { title: "Our Collection — House of Marble" },
      {
        name: "description",
        content:
          "Real photographs of House of Marble tables, basins, trays, tiles and slabs, straight from our workshop and installations.",
      },
      { property: "og:title", content: "Our Collection — House of Marble" },
      {
        property: "og:description",
        content: "Real photographs of our marble tables, basins, tiles and slabs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurCollection,
});

function OurCollection() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-10 md:px-10 md:pt-24">
        <p className="eyebrow">Photographed in Person</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Our Collection</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Real pieces, real stone — photographed in our workshop, our yard and in
          our clients&apos; homes. Message us for sizes, finishes and availability.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90} from={i % 2 ? "right" : "left"}>
              <article className="group h-full border border-border bg-card">
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.material}`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl">{item.title}</h2>
                  <p className="mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {item.material}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{item.note}</p>
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                      `Hello House of Marble, I would like details about the ${item.title}.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline mt-5 inline-block text-[0.65rem] tracking-[0.2em] uppercase"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
