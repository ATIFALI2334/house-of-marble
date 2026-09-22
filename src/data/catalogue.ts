import travertineCubes from "@/assets/travertine-cubes.jpg";
import nestingTables from "@/assets/nesting-tables.jpg";
import nestingTablesAngle from "@/assets/nesting-tables-angle.jpg";
import travertineDetail from "@/assets/travertine-detail.jpg";
import rossoBasin from "@/assets/rosso-basin.jpg";
import rossoBathroom from "@/assets/rosso-bathroom.jpg";
import greenTray from "@/assets/green-tray.jpg";
import greenTrayDetail from "@/assets/green-tray-detail.jpg";
import rossoOvalBasin from "@/assets/rosso-oval-basin.jpg";
import travertineRoughBasin from "@/assets/travertine-rough-basin.jpg";
import travertineRoughBath from "@/assets/travertine-rough-bath.jpg";
import calacattaBoatBasin from "@/assets/calacatta-boat-basin.jpg";
import greenRoundTray from "@/assets/green-round-tray.jpg";
import brownMarbleVanity from "@/assets/brown-marble-vanity.jpg";
import travertineRoughDetail from "@/assets/travertine-rough-detail.jpg";
import onyxBasinDetail from "@/assets/onyx-basin-detail.jpg";
import beigeOvalBasin from "@/assets/beige-oval-basin.jpg";
import calacattaBasinDetail from "@/assets/calacatta-basin-detail.jpg";
import beigeCapsuleBasin from "@/assets/beige-capsule-basin.jpg";
import travertineWaveBasin from "@/assets/travertine-wave-basin.jpg";
import flutedCalacattaBasin from "@/assets/fluted-calacatta-basin.jpg";
import pietraSideTable from "@/assets/pietra-side-table.jpg";
import noirPedestalTable from "@/assets/noir-pedestal-table.jpg";
import onyxStoolTable from "@/assets/onyx-stool-table.jpg";
import travertineRoundCoffee from "@/assets/travertine-round-coffee.jpg";
import whiteCandleHolders from "@/assets/white-candle-holders.jpg";
import noirTrayTable from "@/assets/noir-tray-table.jpg";
import noirPillarCandles from "@/assets/noir-pillar-candles.jpg";
import rossoDeepBowlBasin from "@/assets/rosso-deep-bowl-basin.jpg";
import travertineSteppedNesting from "@/assets/travertine-stepped-nesting-tables.jpg";
import travertineNestingEdge from "@/assets/travertine-nesting-edge-detail.jpg";
import verdeTrayRim from "@/assets/verde-tray-rim-detail.jpg";
import travertineSquareTray from "@/assets/travertine-square-vanity-tray.jpg";
import noirCandleTray from "@/assets/noir-marble-candle-tray.jpg";
import marbleArchClocks from "@/assets/marble-arch-clocks.jpg";
import onyxCandleVessel from "@/assets/onyx-candle-vessel.jpg";
import verdeTrinketBowl from "@/assets/verde-trinket-bowl.jpg";
import rossoSoapDish from "@/assets/rosso-soap-dish.jpg";
import onyxGreenTray from "@/assets/onyx-green-round-tray.jpg";
import marbleRingDishes from "@/assets/marble-ring-dishes-pair.jpg";
import blueOnyxTray from "@/assets/blue-onyx-round-tray.jpg";

export type Piece = {
  slug: string;
  name: string;
  material: string;
  category: "Furniture" | "Basins" | "Décor";
  image: string;
  size: string;
  weight: string;
  finish: string;
  origin: string;
  lead: string;
  description: string;
  care: string;
};

export const categories = [
  {
    title: "Furniture",
    blurb: "Refined furniture defined by marble, travertine and solid wood.",
    image: nestingTablesAngle,
  },
  {
    title: "Basins",
    blurb: "Hand-carved stone basins for quiet, sculptural bathrooms.",
    image: rossoBasin,
  },
  {
    title: "Décor",
    blurb: "Small objects that give a room its weight and stillness.",
    image: greenTray,
  },
] as const;

export const pieces: Piece[] = [
  {
    slug: "travertine-block-coffee-table",
    name: "Travertine Block Coffee Table",
    material: "Cream travertine",
    category: "Furniture",
    image: travertineCubes,
    size: "120 × 70 × 34 cm",
    weight: "Approx. 145 kg",
    finish: "Honed, unfilled",
    origin: "Quarried in Türkiye, carved in Pakistan",
    lead: "5 – 7 weeks",
    description:
      "A single block of cream travertine cut into a low, generous slab and set on a solid plinth. The open pores are left unfilled so the surface keeps the soft, sandy texture of the raw stone.",
    care: "Wipe with a damp cloth and neutral soap. Reseal once a year; avoid vinegar and citrus.",
  },
  {
    slug: "travertine-nesting-tables",
    name: "Travertine Nesting Tables",
    material: "Cream travertine",
    category: "Furniture",
    image: nestingTables,
    size: "Set of two — 90 × 45 × 32 cm and 70 × 40 × 26 cm",
    weight: "Approx. 95 kg the pair",
    finish: "Honed, unfilled",
    origin: "Quarried in Türkiye, carved in Pakistan",
    lead: "6 – 8 weeks",
    description:
      "Two mitred travertine tables that slide together into one block, or sit apart across a living room.",
    care: "Dust often; blot spills immediately and reseal once a year.",
  },
  {
    slug: "travertine-stepped-nesting-tables",
    name: "Travertine Stepped Nesting Tables",
    material: "Noce travertine",
    category: "Furniture",
    image: travertineSteppedNesting,
    size: "Set of three — 100, 85 and 70 cm wide",
    weight: "Approx. 130 kg the set",
    finish: "Honed, unfilled",
    origin: "Quarried in Türkiye, carved in Pakistan",
    lead: "6 – 8 weeks",
    description:
      "Three low travertine tables that step out of one another, each cut with the same square leg and mitred edge.",
    care: "Neutral soap and a soft cloth. Reseal annually to keep the open pores clean.",
  },
  {
    slug: "travertine-nesting-edge-detail",
    name: "Travertine Nesting Table — Edge Detail",
    material: "Noce travertine",
    category: "Furniture",
    image: travertineNestingEdge,
    size: "40 mm slab, mitred corner",
    weight: "—",
    finish: "Honed, unfilled",
    origin: "Carved in Pakistan",
    lead: "Made to order",
    description:
      "A close view of the mitred corner where two travertine tops meet — the pores and banding read straight through the joint.",
    care: "Neutral cleaner only; avoid acids on unfilled travertine.",
  },
  {
    slug: "travertine-edge-side-table",
    name: "Travertine Edge Side Table",
    material: "Cream travertine",
    category: "Furniture",
    image: travertineDetail,
    size: "45 Ø × 52 cm",
    weight: "Approx. 48 kg",
    finish: "Honed",
    origin: "Quarried in Türkiye, carved in Pakistan",
    lead: "4 – 5 weeks",
    description:
      "A turned travertine cylinder with a softly eased edge, sized to sit beside a chair or a bed.",
    care: "Neutral cleaner only. Use coasters under glasses.",
  },
  {
    slug: "travertine-angled-nesting-set",
    name: "Travertine Nesting Set — Angled View",
    material: "Silver travertine",
    category: "Furniture",
    image: nestingTablesAngle,
    size: "Set of two — 90 and 70 cm wide",
    weight: "Approx. 95 kg the pair",
    finish: "Brushed",
    origin: "Quarried in Iran, carved in Pakistan",
    lead: "6 weeks",
    description:
      "The same nesting pair seen from the side, showing the banding that runs through silver travertine.",
    care: "Brushed stone hides marks well; clean with a soft brush and mild soap.",
  },
  {
    slug: "rosso-round-basin",
    name: "Rosso Levanto Round Basin",
    material: "Rosso Levanto marble",
    category: "Basins",
    image: rossoBasin,
    size: "42 Ø × 15 cm, 40 mm waste",
    weight: "Approx. 32 kg",
    finish: "Polished",
    origin: "Quarried in Türkiye, carved in Pakistan",
    lead: "4 weeks",
    description:
      "A deep burgundy bowl hollowed from one block, polished until the white veining reads almost wet.",
    care: "Rinse and dry after use. Never use acidic cleaners on polished red marble.",
  },
  {
    slug: "rosso-deep-bowl-basin",
    name: "Rosso Deep Bowl Basin",
    material: "Rosso Levanto marble",
    category: "Basins",
    image: rossoDeepBowlBasin,
    size: "52 × 40 × 17 cm",
    weight: "Approx. 40 kg",
    finish: "Polished",
    origin: "Quarried in Türkiye, carved in Pakistan",
    lead: "5 weeks",
    description:
      "A full, rounded bowl with thick walls and a soft rim — the deepest basin we carve in Rosso Levanto.",
    care: "Dry after use; reseal every 6 – 12 months.",
  },
  {
    slug: "rosso-twin-basin-vanity",
    name: "Rosso Twin Basin Vanity",
    material: "Rosso Levanto marble",
    category: "Basins",
    image: rossoBathroom,
    size: "Basins 55 × 38 × 14 cm each",
    weight: "Approx. 38 kg per basin",
    finish: "Polished",
    origin: "Quarried in Türkiye, carved in Pakistan",
    lead: "5 weeks",
    description:
      "A matched pair of burgundy basins set on a stone counter with copper wall taps — photographed in a finished bathroom.",
    care: "Blot spills at once; neutral soap and a soft cloth only.",
  },
  {
    slug: "verde-marble-tray",
    name: "Verde Marble Round Tray",
    material: "Verde marble",
    category: "Décor",
    image: greenTray,
    size: "30 Ø × 4 cm",
    weight: "Approx. 6 kg",
    finish: "Honed",
    origin: "Carved in Pakistan",
    lead: "2 weeks",
    description:
      "A shallow round tray with a raised rim, cut from deep green marble — for a console, a vanity or a dining table.",
    care: "Hand wipe only; not dishwasher safe.",
  },
  {
    slug: "verde-tray-rim-detail",
    name: "Verde Tray — Rim Detail",
    material: "Verde marble",
    category: "Décor",
    image: verdeTrayRim,
    size: "30 Ø × 4 cm",
    weight: "Approx. 6 kg",
    finish: "Honed",
    origin: "Carved in Pakistan",
    lead: "2 weeks",
    description:
      "A close view of the turned rim, where the green and sand veining wraps over the edge.",
    care: "Wipe with a dry cloth; avoid oils that darken honed stone.",
  },
  {
    slug: "verde-tray-veining",
    name: "Verde Tray — Veining Study",
    material: "Verde marble",
    category: "Décor",
    image: greenTrayDetail,
    size: "30 Ø × 4 cm",
    weight: "Approx. 6 kg",
    finish: "Honed",
    origin: "Carved in Pakistan",
    lead: "In stock",
    description:
      "No two trays carry the same pattern — this one shows the dense, cloudy veining we select for.",
    care: "Hand wipe only; reseal once a year.",
  },
  {
    slug: "rosso-oval-basin",
    name: "Rosso Oval Basin",
    material: "Rosso Levanto marble",
    category: "Basins",
    image: rossoOvalBasin,
    size: "48 × 38 × 15 cm",
    weight: "Approx. 34 kg",
    finish: "Polished",
    origin: "Quarried in Türkiye, carved in Karachi",
    lead: "5 weeks",
    description:
      "A deep burgundy oval with white veining running across the bowl, polished so the stone reads almost wet under light.",
    care: "Dry after use. Never use acidic cleaners on polished red marble.",
  },
  {
    slug: "roccia-travertine-basin",
    name: "Roccia Travertine Basin",
    material: "Classic travertine",
    category: "Basins",
    image: travertineRoughBasin,
    size: "45 Ø × 20 cm",
    weight: "Approx. 55 kg",
    finish: "Split face exterior, honed bowl",
    origin: "Carved in Karachi",
    lead: "6 weeks",
    description:
      "The outside is left rough as it came off the block; the bowl is turned and honed smooth. Each one is different.",
    care: "Seal twice a year. Brush the rough face gently to remove dust.",
  },
  {
    slug: "roccia-basin-suite",
    name: "Roccia Basin — Walnut Suite",
    material: "Travertine and walnut",
    category: "Furniture",
    image: travertineRoughBath,
    size: "Vanity 140 × 55 cm, basin 45 Ø",
    weight: "Approx. 120 kg",
    finish: "Split face stone, oiled walnut",
    origin: "Made in Karachi",
    lead: "8 weeks",
    description:
      "A floating walnut vanity built around the Roccia basin, with a single drawer and concealed plumbing.",
    care: "Re-oil the walnut yearly; seal the stone twice a year.",
  },
  {
    slug: "calacatta-boat-basin",
    name: "Calacatta Boat Basin",
    material: "Calacatta Viola marble",
    category: "Basins",
    image: calacattaBoatBasin,
    size: "60 × 40 × 16 cm",
    weight: "Approx. 42 kg",
    finish: "Polished",
    origin: "Quarried in Italy, carved in Karachi",
    lead: "6 weeks",
    description:
      "A boat-shaped bowl in white marble shot through with grey, gold and green. No two blocks give the same pattern.",
    care: "Blot spills at once; reseal every six months.",
  },
  {
    slug: "verde-round-tray",
    name: "Verde Round Tray",
    material: "Verde Guatemala marble",
    category: "Décor",
    image: greenRoundTray,
    size: "32 Ø × 3 cm",
    weight: "Approx. 4 kg",
    finish: "Polished, raised lip",
    origin: "Carved in Karachi",
    lead: "In stock",
    description:
      "A deep green tray with a turned lip — for perfume bottles, a coffee service, or the entrance table.",
    care: "Hand wipe only. Not for hot pans.",
  },
  {
    slug: "terra-vanity",
    name: "Terra Vanity",
    material: "Brown pietra and grey marble",
    category: "Furniture",
    image: brownMarbleVanity,
    size: "160 × 55 × 22 cm top",
    weight: "Approx. 210 kg",
    finish: "Honed",
    origin: "Made in Karachi",
    lead: "8 – 10 weeks",
    description:
      "A wall-hung vanity with a thick grey marble top over an oak drawer, set against full-height brown pietra panelling.",
    care: "Neutral cleaner. Avoid standing water at the joints.",
  },
  {
    slug: "roccia-edge-study",
    name: "Roccia Edge Study",
    material: "Classic travertine",
    category: "Basins",
    image: travertineRoughDetail,
    size: "45 Ø × 20 cm",
    weight: "Approx. 55 kg",
    finish: "Split face",
    origin: "Carved in Karachi",
    lead: "6 weeks",
    description:
      "A close view of the hand-split rim — the record of the chisel is left exactly as it fell.",
    care: "Seal twice a year; dust the rough face with a soft brush.",
  },
  {
    slug: "onice-basin",
    name: "Onice Basin",
    material: "White onyx",
    category: "Basins",
    image: onyxBasinDetail,
    size: "40 Ø × 14 cm",
    weight: "Approx. 26 kg",
    finish: "High polish",
    origin: "Quarried in Pakistan, carved in Karachi",
    lead: "5 weeks",
    description:
      "Translucent onyx with amber banding. Lit from below it glows; unlit it reads as soft cream.",
    care: "Onyx is soft — neutral soap only, and never abrasive pads.",
  },
  {
    slug: "capsula-basin",
    name: "Capsula Basin",
    material: "Beige marble",
    category: "Basins",
    image: beigeOvalBasin,
    size: "58 × 36 × 13 cm",
    weight: "Approx. 36 kg",
    finish: "Honed",
    origin: "Carved in Karachi",
    lead: "4 weeks",
    description:
      "A soft-cornered capsule bowl with a matching stone waste cover, cut so the basin and plug read as one piece.",
    care: "Wipe dry after use; reseal annually.",
  },
  {
    slug: "calacatta-vein-study",
    name: "Calacatta Vein Study",
    material: "Calacatta Viola marble",
    category: "Décor",
    image: calacattaBasinDetail,
    size: "Detail — sample slab 30 × 20 cm",
    weight: "Approx. 3 kg",
    finish: "Polished",
    origin: "Quarried in Italy",
    lead: "In stock",
    description:
      "A hand sample of the Calacatta Viola we cut basins from, so you can see the veining before you commit.",
    care: "Keep dry; sample stone is unsealed.",
  },
  {
    slug: "travertine-square-vanity-tray",
    name: "Travertine Square Vanity Tray",
    material: "Classic travertine",
    category: "Décor",
    image: travertineSquareTray,
    size: "25 × 25 × 3 cm",
    weight: "Approx. 2.6 kg",
    finish: "Honed top, chiselled edge",
    origin: "Carved in Karachi",
    lead: "In stock",
    description:
      "A square travertine tray with a hand-chiselled raw edge and a recessed round well for perfume, rings and daily jewellery.",
    care: "Wipe with a soft dry cloth; avoid perfume spills sitting on the surface.",
  },
  {
    slug: "noir-marble-candle-tray",
    name: "Noir Marble Candle Tray",
    material: "Black marble",
    category: "Décor",
    image: noirCandleTray,
    size: "16 cm diameter × 3 cm",
    weight: "Approx. 1.4 kg",
    finish: "Polished",
    origin: "Carved in Karachi",
    lead: "In stock",
    description:
      "A low, round dish turned from a single block of black marble — made for a pillar candle on a bedside table.",
    care: "Clean with a damp cloth; remove wax when cool.",
  },
  {
    slug: "marble-arch-clock",
    name: "Marble Arch Desk Clock",
    material: "Carrara, Bianco and Emperador marble",
    category: "Décor",
    image: marbleArchClocks,
    size: "14 × 12 × 4 cm",
    weight: "Approx. 1.8 kg",
    finish: "Polished",
    origin: "Carved in Karachi",
    lead: "2 weeks",
    description:
      "An arched desk clock cut from solid stone with brass hands. Available in white, veined grey and deep brown marble.",
    care: "Dust with a dry cloth; replace the battery from the rear housing.",
  },
  {
    slug: "onyx-candle-vessel",
    name: "Onyx Candle Vessel",
    material: "Honey onyx",
    category: "Décor",
    image: onyxCandleVessel,
    size: "10 cm diameter × 10 cm",
    weight: "Approx. 1.5 kg",
    finish: "Polished",
    origin: "Quarried in Pakistan",
    lead: "In stock",
    description:
      "A hollowed onyx vessel that warms and glows once the candle is lit, with cream and caramel banding on every side.",
    care: "Onyx is soft — neutral soap only, never abrasive pads.",
  },
  {
    slug: "verde-trinket-bowl",
    name: "Verde Trinket Bowl",
    material: "Green marble",
    category: "Décor",
    image: verdeTrinketBowl,
    size: "14 cm diameter × 4 cm",
    weight: "Approx. 1.2 kg",
    finish: "Polished",
    origin: "Carved in Karachi",
    lead: "In stock",
    description:
      "A shallow green marble bowl for keys, coins and small jewellery at the entrance of a home.",
    care: "Wipe clean; avoid harsh cleaners.",
  },
  {
    slug: "rosso-soap-dish",
    name: "Rosso Soap Dish",
    material: "Rosso Levanto marble",
    category: "Décor",
    image: rossoSoapDish,
    size: "12 cm diameter × 3 cm",
    weight: "Approx. 0.9 kg",
    finish: "Polished",
    origin: "Carved in Karachi",
    lead: "In stock",
    description:
      "A deep red soap dish with gold veining and a recessed well, cut to sit beside a basin.",
    care: "Rinse and dry after use to avoid soap film.",
  },
  {
    slug: "onyx-green-round-tray",
    name: "Onyx Green Round Tray",
    material: "Green onyx",
    category: "Décor",
    image: onyxGreenTray,
    size: "18 cm diameter × 4 cm",
    weight: "Approx. 1.7 kg",
    finish: "Polished",
    origin: "Quarried in Pakistan",
    lead: "In stock",
    description:
      "Soft green onyx with rust-toned veining, turned into a round catch-all tray for a dresser or desk.",
    care: "Neutral soap only; keep away from acidic liquids.",
  },
  {
    slug: "marble-ring-dishes",
    name: "Marble Ring Dishes (Pair)",
    material: "Mixed onyx and marble",
    category: "Décor",
    image: marbleRingDishes,
    size: "11 cm diameter × 3 cm each",
    weight: "Approx. 0.7 kg each",
    finish: "Polished",
    origin: "Carved in Karachi",
    lead: "In stock",
    description:
      "A pair of rounded ring dishes — one in olive-toned onyx, one in white marble with plum veining. No two are alike.",
    care: "Wipe with a soft dry cloth.",
  },
  {
    slug: "blue-onyx-round-tray",
    name: "Blue Onyx Round Tray",
    material: "Blue onyx",
    category: "Décor",
    image: blueOnyxTray,
    size: "25 cm diameter × 3 cm",
    weight: "Approx. 2.4 kg",
    finish: "Polished",
    origin: "Quarried in Pakistan",
    lead: "2 weeks",
    description:
      "Pale blue onyx crossed with amber veining, cut into a wide serving and display tray with a raised rim.",
    care: "Onyx is soft — lift rather than slide objects across the surface.",
  },
];

export const projects = [
  {
    title: "Gulberg Residence",
    location: "Karachi",
    scope: "Two bathrooms, kitchen island, entrance console",
    year: "2025",
    image: rossoBathroom,
  },
  {
    title: "Karachi Villa",
    location: "Karachi",
    scope: "Full stone package — floors, basins, fireplace surround",
    year: "2025",
    image: nestingTables,
  },
  {
    title: "Clifton Apartment",
    location: "Karachi",
    scope: "Travertine living room set and dining table",
    year: "2024",
    image: greenTrayDetail,
  },
  {
    title: "Boutique Hotel Suites",
    location: "Islamabad",
    scope: "18 hand-carved vessel basins",
    year: "2024",
    image: rossoBasin,
  },
];

export const showcase = [
  {
    title: "Capsule Basin in Beige Marble",
    material: "Beige marble",
    detail: "58 × 36 × 13 cm — honed, matching stone waste cover",
    note: "Set into a grey marble counter with brushed brass wall taps.",
    image: beigeCapsuleBasin,
  },
  {
    title: "Wave Vessel Basin",
    material: "Classic travertine",
    detail: "62 × 40 × 18 cm — hand-carved organic rim",
    note: "A single block hollowed by hand, no two rims alike.",
    image: travertineWaveBasin,
  },
  {
    title: "Fluted Calacatta Basin",
    material: "Calacatta marble",
    detail: "55 × 40 × 14 cm — fluted exterior, honed bowl",
    note: "Green and gold veining with a stone plug cut from the same slab.",
    image: flutedCalacattaBasin,
  },
  {
    title: "Arco Side Table",
    material: "Brown pietra marble",
    detail: "45 Ø × 52 cm — polished, arched leg",
    note: "A round top on a three-plane base with a cut arch.",
    image: pietraSideTable,
  },
  {
    title: "Noir Pedestal Table",
    material: "Nero marquina and brass",
    detail: "40 Ø × 55 cm — polished, brass stem",
    note: "Lipped tray top on a domed black marble base.",
    image: noirPedestalTable,
  },
  {
    title: "Onyx Shelf Stool",
    material: "Honey onyx",
    detail: "40 × 35 × 48 cm — honed, mitred edges",
    note: "A stool or side table with one open shelf.",
    image: onyxStoolTable,
  },
  {
    title: "Luna Round Coffee Table",
    material: "Travertine and walnut",
    detail: "95 Ø × 38 cm — honed top, fluted base",
    note: "A wide travertine disc over a ribbed walnut drum.",
    image: travertineRoundCoffee,
  },
  {
    title: "Bianco Candle Pair",
    material: "Carrara marble and brass",
    detail: "Heights 16 cm and 21 cm — polished",
    note: "Turned marble bases with slim brass stems for dinner candles.",
    image: whiteCandleHolders,
  },
  {
    title: "Noir Tray Table",
    material: "Nero marquina and blackened oak",
    detail: "50 Ø × 52 cm — polished stone column",
    note: "A dark oak tray top carried on a mitred marble plinth.",
    image: noirTrayTable,
  },
  {
    title: "Noir Pillar Holders",
    material: "Black marble",
    detail: "Heights 26 cm and 34 cm — polished",
    note: "Stacked cylinder and sphere forms for pillar candles.",
    image: noirPillarCandles,
  },
];

export const reviews = [
  {
    name: "Ayesha Tariq",
    role: "Homeowner, Karachi",
    quote:
      "The basins arrived flawless and the veining matched the slab photos exactly. Installation guidance was thorough.",
  },
  {
    name: "Studio Kern",
    role: "Interior architects",
    quote:
      "We have specified their travertine on three projects now. Tolerances are tight and lead times are honest.",
  },
  {
    name: "Hassan Malik",
    role: "Developer, Islamabad",
    quote:
      "Eighteen basins, all carved by hand, all delivered on schedule. Rare in this trade.",
  },
  {
    name: "Nadia Rehman",
    role: "Homeowner, Karachi",
    quote:
      "They talked us out of a stone that would have stained and suggested a better one. That honesty sold us.",
  },
];

export const clients = [
  "Studio Kern",
  "Aurum Developments",
  "Meraki Interiors",
  "The Lodhi Group",
  "Casa Bianca Hotels",
  "Verde Architects",
];
