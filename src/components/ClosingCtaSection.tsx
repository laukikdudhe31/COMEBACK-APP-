import { ArrowRight } from 'lucide-react';
import { BRAND_IMAGES } from '../data/content';
import { PageRoute } from '../types';
import { EditorialImage } from './EditorialImage';
import { Reveal } from './Reveal';

interface ClosingCtaSectionProps {
  onNavigate: (route: PageRoute) => void;
  image?: string;
}

export function ClosingCtaSection({
  onNavigate,
  image = BRAND_IMAGES.billboardUrban,
}: ClosingCtaSectionProps) {
  return (
    <section className="relative bg-[#080807] text-[#F5F3EE] overflow-hidden border-t border-[#C9A45C]/25">
      <div className="absolute inset-0">
        <EditorialImage
          src={image}
          alt="Illuminated urban metropolitan skyline and flagship brand district at twilight"
          containerClassName="w-full h-full"
          scrim="none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#080807]/95 via-[#080807]/85 to-[#080807]/68"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-24 lg:py-32">
        <Reveal className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A45C]">
              The Comeback Standard
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.14] tracking-tight text-[#F5F3EE]">
            WE DON&apos;T JUST HELP BUSINESSES GROW.{' '}
            <span className="text-[#C9A45C]">WE HELP THEM GET NOTICED.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F3EE]/80 leading-relaxed max-w-xl">
            Bring PR, media visibility, fundraising readiness, and strategic business advisory
            together under one coordinated partner.
          </p>
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#C9A45C] text-[#080807] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#d8b46e] transition-all duration-200 hover:-translate-y-[1px] whitespace-nowrap cursor-pointer"
            >
              <span>Let&apos;s Build Your Comeback</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-[#F5F3EE]/35 text-[#F5F3EE] text-xs font-semibold tracking-[0.16em] uppercase hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Explore Our Services</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
