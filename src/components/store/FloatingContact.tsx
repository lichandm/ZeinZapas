import { Instagram } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5491161120393?text=%C2%A1Hola!%20Estaba%20mirando%20la%20liquidaci%C3%B3n%20en%20la%20p%C3%A1gina%2C%20y%20quer%C3%ADa%20hacerte%20una%20consulta.";

const INSTAGRAM_URL = "https://instagram.com/zeinzapas";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.892 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
    </svg>
  );
}

export function FloatingContact() {
  return (
    <div className="fixed bottom-9 right-3 z-40 flex items-center gap-1.5 rounded-full border border-border bg-card p-1.5 shadow-lg sm:bottom-5 sm:right-5 sm:gap-2 sm:p-2">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Hablar por WhatsApp"
        className="flex items-center gap-1.5 rounded-full bg-whatsapp px-2.5 py-2 text-xs font-semibold text-white shadow-sm transition-transform active:scale-95 sm:px-3 sm:py-2.5 sm:text-sm"
      >
        <WhatsAppIcon className="size-4 sm:size-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Ver nuestro Instagram"
        className="grid size-9 place-items-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-sm transition-transform active:scale-95 sm:size-10"
      >
        <Instagram className="size-4 sm:size-5" />
      </a>
    </div>
  );
}
