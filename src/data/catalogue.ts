import travertineCubes from "@/assets/travertine-cubes.jpg.asset.json";
import nestingTables from "@/assets/nesting-tables.jpg.asset.json";
import nestingTablesAngle from "@/assets/nesting-tables-angle.jpg.asset.json";
import travertineDetail from "@/assets/travertine-detail.jpg.asset.json";
import rossoBasin from "@/assets/rosso-basin.jpg.asset.json";
import rossoBathroom from "@/assets/rosso-bathroom.jpg.asset.json";
import greenTray from "@/assets/green-tray.jpg.asset.json";
import greenTrayDetail from "@/assets/green-tray-detail.jpg.asset.json";

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
