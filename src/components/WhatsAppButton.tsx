import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

// Floating WhatsApp CTA — a strong conversion lever for local prospects.
export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter SGI sur WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-elevated transition-transform hover:-translate-y-0.5"
    >
      <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-[#25D366]/40" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
