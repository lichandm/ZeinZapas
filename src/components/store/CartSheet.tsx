import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/data/store";
import { availableStock } from "@/data/products";
import { ChevronDown, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

const STEPS = [
  "Enviás tu pedido por WhatsApp.",
  "Confirmamos el stock disponible.",
  "Coordinamos el envío.",
  "Elegís el medio de pago.",
  "Finalizamos la compra.",
];

function Accordion({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex min-h-12 w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <ChevronDown
          className={cn(
            "size-5 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? (
        <div className="border-t border-border px-4 py-3 text-sm">{children}</div>
      ) : null}
    </div>
  );
}

export function CartSheet() {
  const { items, count, total, setQuantity, remove, clear, whatsappUrl, hint, dismissHint } =
    useCart();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [showSteps, setShowSteps] = useState(false);

  return (
    <Sheet
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (v) dismissHint();
      }}
    >
      {hint && !open ? (
        <button
          type="button"
          onClick={dismissHint}
          className="fixed bottom-[4.1rem] left-1/2 z-40 w-[15rem] max-w-[calc(100vw-1.5rem)] -translate-x-1/2"
        >
          <span className="relative block rounded-xl border-2 border-primary/40 bg-card px-3 py-2 text-center text-[0.8rem] font-semibold leading-snug text-foreground shadow-xl">
            ¡Producto agregado! Tocá el changuito para continuar
            <span className="absolute -bottom-[7px] left-1/2 size-3 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-primary/40 bg-card" />
          </span>
        </button>
      ) : null}
      <SheetTrigger asChild>
        <Button
          size="lg"
          className={cn(
            "relative rounded-full shadow-lg",
            hint && "ring-4 ring-primary/30",
          )}
        >
          <ShoppingCart className="size-5" />
          <span className="hidden sm:inline">Mi pedido</span>
          {count > 0 ? (
            <span className="ml-1 rounded-full bg-primary-foreground px-2 py-0.5 text-xs font-bold text-primary">
              {count}
            </span>
          ) : null}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col gap-0 sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display">Tu pedido</SheetTitle>
        </SheetHeader>

        <div className="flex-1 space-y-3 overflow-y-auto px-4 pb-4">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">
              Todavía no agregaste productos.
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.key}
                className="flex gap-3 rounded-lg border border-border bg-card p-2"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.title}
                  className="size-16 rounded-md object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{item.product.title}</p>
                  <p className="text-xs text-muted-foreground">Talle {item.size}</p>
                  <p className="text-sm font-semibold text-primary">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="size-9 text-muted-foreground"
                    onClick={() => remove(item.key)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                  <div className="flex items-center gap-1">
                    <Button
                      size="icon"
                      variant="outline"
                      className="size-9"
                      onClick={() => setQuantity(item.key, item.quantity - 1)}
                    >
                      <Minus className="size-4" />
                    </Button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="size-9"
                      disabled={
                        item.quantity >= availableStock(item.product, item.size)
                      }
                      onClick={() => setQuantity(item.key, item.quantity + 1)}
                    >
                      <Plus className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}

          {items.length > 0 ? (
            <div className="space-y-3 pt-1">
              <Accordion label="🚚 Envíos">
                <ul className="space-y-1">
                  <li>🚗 Entregas en Zona Sur</li>
                  <li>📦 Envíos a CABA y GBA</li>
                </ul>
              </Accordion>
              <Accordion label="💳 Medios de pago">
                <ul className="space-y-1">
                  <li>💳 Mercado Pago</li>
                  <li>🏦 Transferencia bancaria</li>
                  <li>💵 Efectivo (solo para entregas locales)</li>
                </ul>
              </Accordion>

              <div className="space-y-1.5">
                <Label htmlFor="cart-name">Tu nombre</Label>
                <Input
                  id="cart-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={(e) =>
                    setTimeout(
                      () => e.target.scrollIntoView({ block: "center", behavior: "smooth" }),
                      250,
                    )
                  }
                  placeholder="Nombre y apellido"
                  className="h-12 text-base"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cart-note">Nota (zona de envío, aclaraciones)</Label>
                <Textarea
                  id="cart-note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  onFocus={(e) =>
                    setTimeout(
                      () => e.target.scrollIntoView({ block: "center", behavior: "smooth" }),
                      250,
                    )
                  }
                  placeholder="Ej: envío a Lomas de Zamora"
                  className="min-h-20 text-base"
                />
              </div>

              <Button variant="ghost" className="h-11 w-full" onClick={clear}>
                Vaciar pedido
              </Button>
            </div>
          ) : null}
        </div>

        {items.length > 0 ? (
          <div className="shrink-0 space-y-3 border-t border-border bg-background p-4">
            <div className="flex items-center justify-between text-base font-bold">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            <Button
              asChild
              className="h-14 w-full rounded-xl bg-whatsapp text-base font-bold text-white shadow-lg hover:bg-whatsapp/90"
            >
              <a
                href={whatsappUrl({ name, note })}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Continuamos pedido vía WhatsApp 💬
              </a>
            </Button>

            <button
              type="button"
              onClick={() => setShowSteps((v) => !v)}
              aria-expanded={showSteps}
              className="mx-auto block text-center text-xs text-muted-foreground underline underline-offset-4"
            >
              ¿Cómo seguimos?
            </button>
            {showSteps ? (
              <ol className="space-y-2 rounded-xl bg-muted/60 p-3 text-sm text-foreground/90">
                {STEPS.map((s, i) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
