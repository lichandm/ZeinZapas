import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SIZES: Array<[string, string]> = [
  ["31", "20.0 cm"],
  ["32", "20.5 cm"],
  ["33", "21.5 cm"],
  ["34", "22.0 cm"],
  ["35", "22.5 cm"],
  ["36", "23.5 cm"],
  ["37", "24.0 cm"],
  ["38", "25.0 cm"],
  ["39", "25.5 cm"],
  ["40", "26.5 cm"],
  ["41", "27.0 cm"],
  ["42", "28.0 cm"],
  ["43", "28.5 cm"],
  ["44", "29.0 cm"],
];

export function SizeGuideDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setOpen(true)}
        className="h-7 px-2 text-xs text-muted-foreground underline underline-offset-2"
      >
        ¿Cómo saber mi talle? 📏
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-display">Guía de Talles</DialogTitle>
            <DialogDescription>
              Te recomendamos medir la plantilla interna de tu zapatilla favorita:
            </DialogDescription>
          </DialogHeader>
          <ul className="mt-1 divide-y divide-border overflow-hidden rounded-lg border border-border">
            {SIZES.map(([size, cm]) => (
              <li
                key={size}
                className="flex items-center justify-between bg-card px-3 py-2 text-sm"
              >
                <span className="font-semibold">Talle {size}</span>
                <span className="text-muted-foreground">{cm}</span>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
}
