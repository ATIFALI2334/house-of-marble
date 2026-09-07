export const site = {
  name: "House of Marble",
  phone: "0345 302 3550",
  whatsapp: "923453023550",
  email: "hello@houseofmarble.com",
  instagram: "https://www.instagram.com/house_ofmarble",
  facebook: "",
  address: "Pakistan — by appointment",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
