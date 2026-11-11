export const store = {
  title: "Zein Zapas",
  description: "Zapatillas Urbanas Unisex",
  slogan: "Agarrate de lo Simple",
  highlight:
    "👟Zapatillas Urbanas Unisex 👟\n🛵Envíos de Lunes a Viernes a todo GBA/CABA📦",
  address: "Lomas de Zamora",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Lomas%20de%20Zamora",
  phone: "5491161120393",
  instagram: "zeinzapas",
  logo: "/__l5e/assets-v1/c1f42b1e-4696-470f-8936-ec60ddc5fbcb/zz-logo.jpg",
  banner: "/__l5e/assets-v1/fb57bc5d-3b33-41de-8ce5-48af7a5b9384/zz-banner.jpg",
};


/** Consulta de disponibilidad por WhatsApp. */
export const CONSULT_WHATSAPP_URL =
  "https://wa.me/5491161120393?text=%C2%A1Hola!%20Estaba%20mirando%20la%20liquidaci%C3%B3n%20en%20la%20p%C3%A1gina%2C%20y%20quer%C3%ADa%20hacerte%20una%20consulta...";

export function formatPrice(value: number) {
  return `$ ${Math.round(value).toLocaleString("es-AR", { maximumFractionDigits: 0 })}`;
}

/** Precio de lista (el vendido es el 65% de este). */
export function listPrice(value: number) {
  return Math.round(value / 0.65);
}
