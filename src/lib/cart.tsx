import { createContext, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import type { Product } from "@/data/products";
import { formatPrice, store } from "@/data/store";

export interface CartItem {
  key: string;
  product: Product;
  size: string;
  quantity: number;
}

interface CartValue {
  items: CartItem[];
  count: number;
  total: number;
  add: (product: Product, size: string, quantity?: number) => void;
  setQuantity: (key: string, quantity: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  hint: boolean;
  showHint: () => void;
  dismissHint: () => void;
  whatsappUrl: (customer: { name: string; note: string }) => string;
}

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hint, setHint] = useState(false);
  const hintTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const value = useMemo<CartValue>(() => {
    const count = items.reduce((acc, i) => acc + i.quantity, 0);
    const total = items.reduce((acc, i) => acc + i.quantity * i.product.price, 0);

    return {
      items,
      count,
      total,
      add: (product, size, quantity = 1) =>
        setItems((prev) => {
          const key = `${product.id}__${size}`;
          const found = prev.find((i) => i.key === key);
          if (found) {
            return prev.map((i) =>
              i.key === key ? { ...i, quantity: i.quantity + quantity } : i,
            );
          }
          return [...prev, { key, product, size, quantity }];
        }),
      setQuantity: (key, quantity) =>
        setItems((prev) =>
          quantity <= 0
            ? prev.filter((i) => i.key !== key)
            : prev.map((i) => (i.key === key ? { ...i, quantity } : i)),
        ),
      hint,
      showHint: () => {
        setHint(true);
        if (hintTimer.current) clearTimeout(hintTimer.current);
        hintTimer.current = setTimeout(() => setHint(false), 8000);
      },
      dismissHint: () => {
        if (hintTimer.current) clearTimeout(hintTimer.current);
        setHint(false);
      },
      remove: (key) => setItems((prev) => prev.filter((i) => i.key !== key)),
      clear: () => setItems([]),
      whatsappUrl: (customer) => {
        const lines = [
          `👋 ¡Hola ${store.title}! Quiero hacer este pedido:`,
          "",
          customer.name ? `🙋 Cliente: ${customer.name}` : "",
          customer.name ? "" : "",
          "🛒 Pedido:",
          ...items.map(
            (i) =>
              `👟 ${i.product.title}\n   📏 Talle: ${i.size}\n   🔢 Cantidad: ${i.quantity}\n   💲 Subtotal: ${formatPrice(
                i.product.price * i.quantity,
              )}`,
          ),
          "",
          `💰 Total: ${formatPrice(total)}`,
          customer.note ? `📝 Nota: ${customer.note}` : "",
          "",
          "✅ Quedo atento/a para confirmar stock, envío y medio de pago. ¡Gracias!",
        ].filter((l, idx, arr) => l !== "" || (arr[idx - 1] !== "" && idx !== 0));

        return `https://wa.me/${store.phone}?text=${encodeURIComponent(lines.join("\n"))}`;
      },
    };
  }, [items, hint]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
