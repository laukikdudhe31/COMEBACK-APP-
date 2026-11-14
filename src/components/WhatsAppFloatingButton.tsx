import { MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/content';

export function WhatsAppFloatingButton() {
  return (
    <a
      href={CONTACT_DETAILS.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Connect with The Comeback Project on WhatsApp"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2.5 px-4 py-3 min-h-[44px] bg-[#080807]/95 text-[#F5F3EE] border border-[#C9A45C]/65 hover:border-[#C9A45C] hover:bg-[#10100F] shadow-lg transition-all duration-200 group"
    >
      <MessageCircle
        className="w-4 h-4 text-[#C9A45C] transition-transform duration-200 group-hover:scale-110"
        strokeWidth={1.75}
      />
      <span className="text-[11px] font-semibold tracking-[0.14em] uppercase whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
}
