export const site = {
  name: "House of Marble",
  phone: "0345 302 3550",
  phoneAlt: "0326 034 7739",
  whatsapp: "923453023550",
  email: "Houseofmarble786@gmail.com",
  emailAlt: "Houseofmarble92@gmail.com",
  instagram: "https://www.instagram.com/house_ofmarble",
  facebook: "",
  address:
    "Plot # VE-226, St-01, Sec-16, Aman Chowk, Khairabad, Orangi Town, Karachi",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
