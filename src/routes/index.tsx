import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Instagram, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/lib/cart";
import { CartSheet } from "@/components/store/CartSheet";
import { FloatingContact } from "@/components/store/FloatingContact";
import { ProductCard } from "@/components/store/ProductCard";
import { ProductDialog } from "@/components/store/ProductDialog";
import { categories, products, type Product } from "@/data/products";
import { store } from "@/data/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zein Zapas · Zapatillas urbanas unisex con envío" },
      {
        name: "description",
        content:
          "Catálogo de zapatillas urbanas unisex: Converse All Star y Vans, Altas, Bajas, Botitas y Kids. \n¡Elegí tu talle y pedí por WhatsApp!",
      },
      { property: "og:title", content: "Zein Zapas · Zapatillas urbanas unisex con envío" },
      {
        property: "og:description",
        content:
          "Catálogo de zapatillas urbanas unisex: Converse All Star y Vans, Altas, Bajas, Botitas y Kids. \n¡Elegí tu talle y pedí por WhatsApp!",
      },
      { property: "og:image", content: store.banner },
      { name: "twitter:image", content: store.banner },
    ],
  }),
  component: StorePage,
});

function StorePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (!category || p.category === category) &&
        (!q ||
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)),
    );
  }, [query, category]);

  const grouped = useMemo(() => {
    return categories
      .map((c) => ({ category: c, items: filtered.filter((p) => p.category === c) }))
      .filter((g) => g.items.length > 0);
  }, [filtered]);

  const featured = products.filter((p) => p.featured);
  const showFeatured = !query && !category;

  return (
    <CartProvider>
      <div className="min-h-screen bg-background pb-28">
        <header>
          <div
            className="h-32 w-full bg-cover bg-center sm:h-56"
            style={{ backgroundImage: `url(${store.banner})` }}
            role="img"
            aria-label="Zapatillas urbanas Zein Zapas"
          />
          <div className="mx-auto max-w-5xl px-4">
            <div className="-mt-9 flex flex-col items-center text-center">
              <img
                src={store.logo}
                alt="Logo Zein Zapas"
                className="size-18 rounded-full border-4 border-background bg-card object-cover sm:size-24"
              />
              <h1 className="mt-2 font-display text-xl font-bold leading-tight sm:text-3xl">
                {store.title}
              </h1>
              <p className="text-xs text-muted-foreground sm:text-base">
                {store.description}
              </p>
              <p className="font-display text-base font-bold italic tracking-tight text-primary sm:text-xl">
                {store.slogan}
              </p>
              <p className="mt-1 flex flex-wrap items-center justify-center gap-x-2 text-[0.7rem] text-muted-foreground sm:text-sm">
                <a
                  href={store.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  <MapPin className="size-3.5" />
                  {store.address}
                </a>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <span aria-hidden="true">🛵</span>
                  Envíos Lun a Vie a GBA/CABA
                </span>
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto mt-2 max-w-5xl px-4">

          <div className="sticky top-0 z-20 -mx-4 mt-2 bg-background/95 px-4 py-2 backdrop-blur">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar..."
                className="pl-9"
              />
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              <Button
                size="sm"
                variant={category === null ? "default" : "outline"}
                className="shrink-0 rounded-full"
                onClick={() => setCategory(null)}
              >
                Todos
              </Button>
              {categories.map((c) => (
                <Button
                  key={c}
                  size="sm"
                  variant={category === c ? "default" : "outline"}
                  className="shrink-0 rounded-full"
                  onClick={() => setCategory(c)}
                >
                  {c} ({products.filter((p) => p.category === c).length})
                </Button>
              ))}
            </div>
          </div>

          <LiquidationBanner />

          {showFeatured ? (
            <section className="mt-4">
              <h2 className="font-display text-xl font-bold">Destacado</h2>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {featured.map((p) => (
                  <ProductCard key={p.id} product={p} onSelect={setSelected} />
                ))}
              </div>
            </section>
          ) : null}

          <div id="categorias">
            {grouped.map((group) => (
              <section key={group.category} className="mt-8">
                <h2 className="font-display text-xl font-bold">
                  {group.category}{" "}
                  <span className="text-muted-foreground">({group.items.length})</span>
                </h2>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {group.items.map((p) => (
                    <ProductCard key={p.id} product={p} onSelect={setSelected} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {grouped.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted-foreground">
              No encontramos productos para tu búsqueda.
            </p>
          ) : null}

          <footer className="mt-12 border-t border-border px-4 py-10 text-center">
            <div className="mx-auto max-w-xl rounded-2xl bg-card p-6 shadow-sm">
              <p className="font-display text-lg font-bold text-foreground sm:text-xl">
                Cualquier duda, ¡no dudes en consultarnos!
              </p>
              <div className="mt-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${store.phone}?text=%C2%A1Hola!%20Estaba%20mirando%20la%20liquidaci%C3%B3n%20en%20la%20p%C3%A1gina%2C%20y%20quer%C3%ADa%20hacerte%20una%20consulta.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform active:scale-95"
                >
                  <WhatsappIcon />
                  Hablar por WhatsApp
                </a>
                <a
                  href={`https://instagram.com/${store.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-accent active:scale-95"
                >
                  <Instagram className="size-5" />
                  Ver nuestro Instagram
                </a>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              {store.title} · {store.address} · Envíos de lunes a viernes
            </p>
          </footer>
        </div>

        <div className="fixed bottom-5 left-1/2 z-30 -translate-x-1/2">
          <CartSheet />
        </div>

        <FloatingContact />

        <ProductDialog product={selected} onClose={() => setSelected(null)} />
        <Toaster position="top-center" />
      </div>
    </CartProvider>
  );
}

const BANNER_MESSAGES = [
  "⚡️LIQUIDACIÓN HASTA 35% OFF🤯",
  "📦 ENTREGA GRATIS LLEVANDO 2 PARES 🔥",
];

function LiquidationBanner() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tick = setInterval(() => {
      setVisible(false);
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % BANNER_MESSAGES.length);
        setVisible(true);
      }, 300);
      return () => clearTimeout(timeout);
    }, 4000);
    return () => clearInterval(tick);
  }, []);

  return (
    <div className="mt-3 overflow-hidden rounded-2xl bg-black px-4 py-5 text-center text-white shadow-lg">
      <span
        className={cn(
          "block font-display text-base font-extrabold leading-snug tracking-wide transition-opacity duration-300 sm:text-2xl",
          visible ? "opacity-100" : "opacity-0"
        )}
      >
        {BANNER_MESSAGES[index]}
      </span>
    </div>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.892 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
    </svg>
  );
}
