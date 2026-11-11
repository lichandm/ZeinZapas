import { formatPrice, listPrice } from "@/data/store";
import { totalStock, type Product } from "@/data/products";

export function ProductCard({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: (p: Product) => void;
}) {
  const stock = totalStock(product);

  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="aspect-square w-full overflow-hidden bg-muted">
        <img
          src={product.images[0]}
          alt={product.title}
          width={576}
          height={576}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 260px, (min-width: 640px) 33vw, 50vw"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">
          {product.title}
        </h3>
        <div className="mt-auto flex flex-wrap items-baseline gap-x-2">
          <span className="text-sm font-bold text-primary sm:text-base">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-muted-foreground line-through">
            {formatPrice(listPrice(product.price))}
          </span>
        </div>
        {stock > 0 && stock <= 3 ? (
          <p className="text-xs font-medium text-stock">
            {stock === 1 ? "Último par disponible" : `Últimos ${stock} disponibles`}
          </p>
        ) : null}
      </div>
    </button>
  );
}
