import furniture from "@/assets/furniture.jpg";
import basins from "@/assets/basins.jpg";
import decor from "@/assets/decor.jpg";

export type Piece = {
  name: string;
  material: string;
  category: "Furniture" | "Basins" | "Décor";
  image: string;
};

export const categories = [
  {
    title: "Furniture",
    blurb: "Refined furniture defined by marble, travertine and solid wood.",
    image: furniture,
  },
  {
    title: "Basins",
    blurb: "Hand-carved stone basins for quiet, sculptural bathrooms.",
    image: basins,
  },
  {
    title: "Décor",
    blurb: "Small objects that give a room its weight and stillness.",
    image: decor,
  },
] as const;

export const pieces: Piece[] = [
  { name: "Milo Coffee Table", material: "Cream travertine", category: "Furniture", image: furniture },
  { name: "Marquino Console", material: "Nero marquina marble", category: "Furniture", image: furniture },
  { name: "Muse Side Table", material: "Statuario marble", category: "Furniture", image: furniture },
  { name: "Osso Bench", material: "Silver travertine", category: "Furniture", image: furniture },
  { name: "Carrara Vessel Basin", material: "Carrara marble", category: "Basins", image: basins },
  { name: "Onda Carved Basin", material: "Botticino marble", category: "Basins", image: basins },
  { name: "Plinth Pedestal Basin", material: "Travertine", category: "Basins", image: basins },
  { name: "Sasso Bowl", material: "Roman travertine", category: "Décor", image: decor },
  { name: "Colonna Candle Holder", material: "Travertine", category: "Décor", image: decor },
  { name: "Terra Incense Plate", material: "Beige marble", category: "Décor", image: decor },
];
