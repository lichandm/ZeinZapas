import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CONSULT_WHATSAPP_URL, formatPrice, listPrice } from "@/data/store";
import { availableStock, totalStock, type Product } from "@/data/products";
import { SizeGuideDialog } from "./SizeGuideDialog";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";

export function ProductDialog({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { add, showHint } = useCart();
  const [size, setSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(0);

  useEffect(() => {
    setSize(null);
    setQuantity(1);
    setImage(0);
  }, [product]);

  if (!product) return null;

  const hasSizes = product.sizes.length > 0;
  const stock = availableStock(product, size);
  const modelStock = totalStock(product);
  const canBuy = !!size && stock > 0 && quantity <= stock;

  function handleAdd() {
    if (!product) return;
    if (hasSizes && !size) {
      toast.error("Elegí un talle para continuar");
      return;
    }
    add(product, size ?? "Único", quantity);
    showHint();
    toast.success("Agregado al pedido");
    onClose();
  }

  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="flex max-h-[92vh] flex-col gap-0 overflow-y-auto p-0 sm:max-w-lg">
        <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-muted">
          <img
            src={product.images[image]}
            alt={product.title}
            className="h-full w-full object-contain"
          />
          {product.images.length > 1 ? (
            <>
              <Button
                type="button"
                size="icon"
                variant="secondary"
                className="absolute left-2 top-1/2 size-9 -translate-y-1/2 rounded-full opacity-80 shadow-sm hover:opacity-100"
                onClick={() =>
                  setImage((i) => (i === 0 ? product.images.length - 1 : i - 1))
                }
                aria-label="Foto anterior"
              >
                <ChevronLeft className="size-5" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="secondary"
                className="absolute right-2 top-1/2 size-9 -translate-y-1/2 rounded-full opacity-80 shadow-sm hover:opacity-100"
                onClick={() => setImage((i) => (i + 1) % product.images.length)}
                aria-label="Foto siguiente"
              >
                <ChevronRight className="size-5" />
              </Button>
            </>
          ) : null}
        </div>
        {product.images.length > 1 ? (
          <div className="flex shrink-0 gap-2 overflow-x-auto px-4 pt-3">
            {product.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setImage(i)}
                className={`size-14 shrink-0 overflow-hidden rounded-md border-2 ${
                  i === image ? "border-primary" : "border-transparent"
                }`}
              >
                <img src={src} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>
        ) : null}

        <div className="shrink-0 space-y-4 bg-background p-4">
          <div className="space-y-1">
            <DialogTitle className="font-display text-xl leading-tight">
              {product.title}
            </DialogTitle>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold text-primary">{formatPrice(product.price)}</p>
            <p className="text-sm text-muted-foreground line-through">
              {formatPrice(listPrice(product.price))}
            </p>
          </div>
            {modelStock > 0 && modelStock <= 3 ? (
              <p className="text-xs font-medium text-stock">
                {modelStock === 1
                  ? "Último par disponible"
                  : `Últimos ${modelStock} disponibles`}
              </p>
            ) : null}
          </div>

          {hasSizes ? (
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <p className="text-sm font-semibold">
                  Talles disponibles 🔖 <span className="text-destructive">*</span>
                </p>
                <SizeGuideDialog />
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <Button
                    key={s}
                    type="button"
                    size="sm"
                    variant={size === s ? "default" : "outline"}
                    onClick={() => {
                      setSize(s);
                      setQuantity(1);
                    }}
                    className="h-11 min-w-14 text-base"
                  >
                    {s}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Consultá talles disponibles por WhatsApp.
            </p>
          )}

          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">Cantidad</span>
            <div className="flex items-center gap-1 rounded-lg border border-border p-1">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="size-8"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus className="size-4" />
              </Button>
              <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="size-8"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus className="size-4" />
              </Button>
            </div>
          </div>

          {canBuy ? (
            <Button className="w-full" size="lg" onClick={handleAdd}>
              Agregar al pedido · {formatPrice(product.price * quantity)}
            </Button>
          ) : (
            <div className="space-y-2">
              <Button
                asChild
                size="lg"
                className="w-full bg-whatsapp text-white hover:bg-whatsapp/90"
              >
                <a href={CONSULT_WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Consultar disponibilidad por WhatsApp 💬
                </a>
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                {size
                  ? stock === 0
                    ? "Este talle no tiene stock inmediato: consultanos y lo verificamos."
                    : `Tenemos ${stock} par${stock > 1 ? "es" : ""} de este talle. Para más cantidad, consultanos.`
                  : "Elegí un talle para ver la disponibilidad."}
              </p>
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
}
