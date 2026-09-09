import travertineCubes from "@/assets/travertine-cubes.jpg.asset.json";
import nestingTables from "@/assets/nesting-tables.jpg.asset.json";
import nestingTablesAngle from "@/assets/nesting-tables-angle.jpg.asset.json";
import travertineDetail from "@/assets/travertine-detail.jpg.asset.json";
import rossoBasin from "@/assets/rosso-basin.jpg.asset.json";
import rossoBathroom from "@/assets/rosso-bathroom.jpg.asset.json";
import greenTray from "@/assets/green-tray.jpg.asset.json";
import greenTrayDetail from "@/assets/green-tray-detail.jpg.asset.json";
import rossoOvalBasin from "@/assets/rosso-oval-basin.jpg.asset.json";
import travertineRoughBasin from "@/assets/travertine-rough-basin.jpg.asset.json";
import travertineRoughBath from "@/assets/travertine-rough-bath.jpg.asset.json";
import calacattaBoatBasin from "@/assets/calacatta-boat-basin.jpg.asset.json";
import greenRoundTray from "@/assets/green-round-tray.jpg.asset.json";
import brownMarbleVanity from "@/assets/brown-marble-vanity.jpg.asset.json";
import travertineRoughDetail from "@/assets/travertine-rough-detail.jpg.asset.json";
import onyxBasinDetail from "@/assets/onyx-basin-detail.jpg.asset.json";
import beigeOvalBasin from "@/assets/beige-oval-basin.jpg.asset.json";
import calacattaBasinDetail from "@/assets/calacatta-basin-detail.jpg.asset.json";
import beigeCapsuleBasin from "@/assets/beige-capsule-basin.jpg.asset.json";
import travertineWaveBasin from "@/assets/travertine-wave-basin.jpg.asset.json";
import flutedCalacattaBasin from "@/assets/fluted-calacatta-basin.jpg.asset.json";
import pietraSideTable from "@/assets/pietra-side-table.jpg.asset.json";
import noirPedestalTable from "@/assets/noir-pedestal-table.jpg.asset.json";
import onyxStoolTable from "@/assets/onyx-stool-table.jpg.asset.json";
import travertineRoundCoffee from "@/assets/travertine-round-coffee.jpg.asset.json";
import whiteCandleHolders from "@/assets/white-candle-holders.jpg.asset.json";
import noirTrayTable from "@/assets/noir-tray-table.jpg.asset.json";
import noirPillarCandles from "@/assets/noir-pillar-candles.jpg.asset.json";
import rossoDeepBowlBasin from "@/assets/rosso-deep-bowl-basin.jpg.asset.json";
import travertineSteppedNesting from "@/assets/travertine-stepped-nesting-tables.jpg.asset.json";
import travertineNestingEdge from "@/assets/travertine-nesting-edge-detail.jpg.asset.json";
import verdeTrayRim from "@/assets/verde-tray-rim-detail.jpg.asset.json";

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
    image: nestingTablesAngle.url,
  },
  {
    title: "Basins",
    blurb: "Hand-carved stone basins for quiet, sculptural bathrooms.",
    image: rossoBasin.url,
  },
  {
    title: "Décor",
    blurb: "Small objects that give a room its weight and stillness.",
    image: greenTray.url,
  },
] as const;

export const pieces: Piece[] = [
  {
    slug: "milo-coffee-table",
    name: "Milo Coffee Table",
    material: "Cream travertine",
    category: "Furniture",
    image: travertineCubes.url,
    size: "120 × 70 × 34 cm",
    weight: "Approx. 145 kg",
    finish: "Honed, unfilled",
    origin: "Quarried in Türkiye, carved in Lahore",
    lead: "5 – 7 weeks",
    description:
      "A single block of cream travertine cut into a low, generous slab and set on a solid plinth. The open pores are left unfilled so the surface keeps the soft, sandy texture of the raw stone.",
    care: "Wipe with a damp cloth and neutral soap. Reseal once a year; avoid vinegar and citrus.",
  },
  {
    slug: "marquino-console",
    name: "Marquino Console",
    material: "Nero marquina marble",
    category: "Furniture",
    image: nestingTables.url,
    size: "150 × 40 × 82 cm",
    weight: "Approx. 190 kg",
    finish: "Polished",
    origin: "Quarried in Spain, carved in Lahore",
    lead: "6 – 8 weeks",
    description:
      "Deep black marble with lightning-white veining, mitred at the corners so the veins run unbroken around the edge. Made as an entrance or dining console.",
    care: "Dust often; blot spills immediately. Polished black marble marks easily with acids.",
  },
  {
    slug: "muse-side-table",
    name: "Muse Side Table",
    material: "Statuario marble",
    category: "Furniture",
    image: travertineDetail.url,
    size: "45 Ø × 52 cm",
    weight: "Approx. 48 kg",
    finish: "Polished",
    origin: "Quarried in Carrara, Italy",
    lead: "4 – 5 weeks",
    description:
      "A turned cylinder in bright Statuario, with grey veining that shifts on every piece. Sized to sit beside a chair or a bed.",
    care: "Neutral cleaner only. Use coasters under glasses.",
  },
  {
    slug: "osso-bench",
    name: "Osso Bench",
    material: "Silver travertine",
    category: "Furniture",
    image: nestingTablesAngle.url,
    size: "160 × 38 × 42 cm",
    weight: "Approx. 165 kg",
    finish: "Brushed",
    origin: "Quarried in Iran, carved in Lahore",
    lead: "6 weeks",
    description:
      "A long, softly brushed bench in banded silver travertine — for a hallway, a dressing room or the foot of a bed.",
    care: "Brushed stone hides marks well; clean with a soft brush and mild soap.",
  },
  {
    slug: "carrara-vessel-basin",
    name: "Carrara Vessel Basin",
    material: "Carrara marble",
    category: "Basins",
    image: rossoBasin.url,
    size: "42 Ø × 15 cm, 40 mm waste",
    weight: "Approx. 32 kg",
    finish: "Honed",
    origin: "Quarried in Carrara, Italy",
    lead: "4 weeks",
    description:
      "A hollowed vessel basin turned from one block of Carrara, honed inside and out. Supplied undrilled for a wall or deck-mounted tap.",
    care: "Rinse and dry after use. Seal every 6 – 12 months to resist soap staining.",
  },
  {
    slug: "onda-carved-basin",
    name: "Onda Carved Basin",
    material: "Botticino marble",
    category: "Basins",
    image: rossoBathroom.url,
    size: "55 × 38 × 14 cm",
    weight: "Approx. 38 kg",
    finish: "Honed, fluted exterior",
    origin: "Quarried in Italy, carved in Lahore",
    lead: "5 weeks",
    description:
      "Warm beige marble with a hand-carved fluted wave running around the bowl, so light breaks differently across the day.",
    care: "Avoid abrasive pads on the flutes; neutral soap and a soft cloth.",
  },
  {
    slug: "plinth-pedestal-basin",
    name: "Plinth Pedestal Basin",
    material: "Travertine",
    category: "Basins",
    image: rossoBasin.url,
    size: "50 Ø × 90 cm high",
    weight: "Approx. 110 kg",
    finish: "Honed, filled",
    origin: "Carved in Lahore",
    lead: "7 weeks",
    description:
      "A full-height pedestal and bowl cut as one piece, with a concealed waste channel through the column. A sculptural answer to a small bathroom.",
    care: "Filled travertine is low maintenance; reseal annually.",
  },
  {
    slug: "sasso-bowl",
    name: "Sasso Bowl",
    material: "Roman travertine",
    category: "Décor",
    image: greenTray.url,
    size: "30 Ø × 9 cm",
    weight: "Approx. 6 kg",
    finish: "Honed",
    origin: "Carved in Lahore",
    lead: "2 weeks",
    description:
      "A shallow bowl for a console or dining table — fruit, keys, or nothing at all.",
    care: "Hand wipe only; not dishwasher safe.",
  },
  {
    slug: "colonna-candle-holder",
    name: "Colonna Candle Holder",
    material: "Travertine",
    category: "Décor",
    image: greenTrayDetail.url,
    size: "9 Ø × 18 cm",
    weight: "Approx. 2 kg",
    finish: "Honed",
    origin: "Carved in Lahore",
    lead: "In stock",
    description:
      "A miniature column turned in travertine, sized for a standard dinner candle. Sold singly or as a pair.",
    care: "Remove wax with warm water; never scrape the stone.",
  },
  {
    slug: "terra-incense-plate",
    name: "Terra Incense Plate",
    material: "Beige marble",
    category: "Décor",
    image: greenTray.url,
    size: "16 Ø × 2 cm",
    weight: "Approx. 1.2 kg",
    finish: "Honed",
    origin: "Carved in Lahore",
    lead: "In stock",
    description: "A small honed disc with a single drilled hole for an incense stick.",
    care: "Wipe with a dry cloth; ash may lightly stain unsealed stone.",
  },
  {
    slug: "rosso-oval-basin",
    name: "Rosso Oval Basin",
    material: "Rosso Levanto marble",
    category: "Basins",
    image: rossoOvalBasin.url,
    size: "48 × 38 × 15 cm",
    weight: "Approx. 34 kg",
    finish: "Polished",
    origin: "Quarried in Türkiye, carved in Lahore",
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
    image: travertineRoughBasin.url,
    size: "45 Ø × 20 cm",
    weight: "Approx. 55 kg",
    finish: "Split face exterior, honed bowl",
    origin: "Carved in Lahore",
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
    image: travertineRoughBath.url,
    size: "Vanity 140 × 55 cm, basin 45 Ø",
    weight: "Approx. 120 kg",
    finish: "Split face stone, oiled walnut",
    origin: "Made in Lahore",
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
    image: calacattaBoatBasin.url,
    size: "60 × 40 × 16 cm",
    weight: "Approx. 42 kg",
    finish: "Polished",
    origin: "Quarried in Italy, carved in Lahore",
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
    image: greenRoundTray.url,
    size: "32 Ø × 3 cm",
    weight: "Approx. 4 kg",
    finish: "Polished, raised lip",
    origin: "Carved in Lahore",
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
    image: brownMarbleVanity.url,
    size: "160 × 55 × 22 cm top",
    weight: "Approx. 210 kg",
    finish: "Honed",
    origin: "Made in Lahore",
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
    image: travertineRoughDetail.url,
    size: "45 Ø × 20 cm",
    weight: "Approx. 55 kg",
    finish: "Split face",
    origin: "Carved in Lahore",
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
    image: onyxBasinDetail.url,
    size: "40 Ø × 14 cm",
    weight: "Approx. 26 kg",
    finish: "High polish",
    origin: "Quarried in Pakistan, carved in Lahore",
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
    image: beigeOvalBasin.url,
    size: "58 × 36 × 13 cm",
    weight: "Approx. 36 kg",
    finish: "Honed",
    origin: "Carved in Lahore",
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
    image: calacattaBasinDetail.url,
    size: "Detail — sample slab 30 × 20 cm",
    weight: "Approx. 3 kg",
    finish: "Polished",
    origin: "Quarried in Italy",
    lead: "In stock",
    description:
      "A hand sample of the Calacatta Viola we cut basins from, so you can see the veining before you commit.",
    care: "Keep dry; sample stone is unsealed.",
  },
];

export const projects = [
  {
    title: "Gulberg Residence",
    location: "Lahore",
    scope: "Two bathrooms, kitchen island, entrance console",
    year: "2025",
    image: rossoBathroom.url,
  },
  {
    title: "DHA Phase 6 Villa",
    location: "Lahore",
    scope: "Full stone package — floors, basins, fireplace surround",
    year: "2025",
    image: nestingTables.url,
  },
  {
    title: "Clifton Apartment",
    location: "Karachi",
    scope: "Travertine living room set and dining table",
    year: "2024",
    image: greenTrayDetail.url,
  },
  {
    title: "Boutique Hotel Suites",
    location: "Islamabad",
    scope: "18 hand-carved vessel basins",
    year: "2024",
    image: rossoBasin.url,
  },
];

export const showcase = [
  {
    title: "Capsule Basin in Beige Marble",
    material: "Beige marble",
    detail: "58 × 36 × 13 cm — honed, matching stone waste cover",
    note: "Set into a grey marble counter with brushed brass wall taps.",
    image: beigeCapsuleBasin.url,
  },
  {
    title: "Wave Vessel Basin",
    material: "Classic travertine",
    detail: "62 × 40 × 18 cm — hand-carved organic rim",
    note: "A single block hollowed by hand, no two rims alike.",
    image: travertineWaveBasin.url,
  },
  {
    title: "Fluted Calacatta Basin",
    material: "Calacatta marble",
    detail: "55 × 40 × 14 cm — fluted exterior, honed bowl",
    note: "Green and gold veining with a stone plug cut from the same slab.",
    image: flutedCalacattaBasin.url,
  },
  {
    title: "Arco Side Table",
    material: "Brown pietra marble",
    detail: "45 Ø × 52 cm — polished, arched leg",
    note: "A round top on a three-plane base with a cut arch.",
    image: pietraSideTable.url,
  },
  {
    title: "Noir Pedestal Table",
    material: "Nero marquina and brass",
    detail: "40 Ø × 55 cm — polished, brass stem",
    note: "Lipped tray top on a domed black marble base.",
    image: noirPedestalTable.url,
  },
  {
    title: "Onyx Shelf Stool",
    material: "Honey onyx",
    detail: "40 × 35 × 48 cm — honed, mitred edges",
    note: "A stool or side table with one open shelf.",
    image: onyxStoolTable.url,
  },
  {
    title: "Luna Round Coffee Table",
    material: "Travertine and walnut",
    detail: "95 Ø × 38 cm — honed top, fluted base",
    note: "A wide travertine disc over a ribbed walnut drum.",
    image: travertineRoundCoffee.url,
  },
  {
    title: "Bianco Candle Pair",
    material: "Carrara marble and brass",
    detail: "Heights 16 cm and 21 cm — polished",
    note: "Turned marble bases with slim brass stems for dinner candles.",
    image: whiteCandleHolders.url,
  },
  {
    title: "Noir Tray Table",
    material: "Nero marquina and blackened oak",
    detail: "50 Ø × 52 cm — polished stone column",
    note: "A dark oak tray top carried on a mitred marble plinth.",
    image: noirTrayTable.url,
  },
  {
    title: "Noir Pillar Holders",
    material: "Black marble",
    detail: "Heights 26 cm and 34 cm — polished",
    note: "Stacked cylinder and sphere forms for pillar candles.",
    image: noirPillarCandles.url,
  },
];

export const reviews = [
  {
    name: "Ayesha Tariq",
    role: "Homeowner, Lahore",
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
