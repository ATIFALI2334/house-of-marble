export const site = {
  name: "House of Marble",
  phone: "+92 330 666 2872",
  whatsapp: "923306662872",
  email: "hello@houseofmarble.com",
  instagram: "https://instagram.com/houseofmarble",
  facebook: "https://facebook.com/houseofmarble",
  address: "Lahore, Pakistan — by appointment",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
