import { ArrowRight, Compass, Layers, ShieldCheck } from 'lucide-react';
import { ABOUT_DIFFERENTIATORS, ABOUT_PRINCIPLES, BRAND_IMAGES } from '../data/content';
import { PageRoute } from '../types';
import { ClosingCtaSection } from '../components/ClosingCtaSection';
import { EditorialImage } from '../components/EditorialImage';
import { Reveal } from '../components/Reveal';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

const PRINCIPLE_ICONS = [ShieldCheck, Layers, Compass];

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <main>
      {/* 1. Opening Statement Hero */}
      <section className="bg-[#080807] text-[#F5F3EE] pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[#252421]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C9A45C]">
                About The Comeback Project
              </p>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Creating visibility. Building credibility.{' '}
              <span className="text-[#C9A45C]">Capturing strategic opportunity.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EE]/80 leading-relaxed max-w-2xl">
              We exist for founders and leadership teams who build substance behind closed doors
              and are ready to command matching authority in the market.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Intro, Image & Mission/Vision (Warm Ivory) */}
      <section className="bg-[#F5F3EE] text-[#10100F] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <Reveal className="lg:col-span-6 group">
              <div className="h-full min-h-[360px] lg:min-h-[540px] border border-[#DEDAD1]">
                <EditorialImage
                  src={BRAND_IMAGES.aboutFounder}
                  alt="Executive looking out over a metropolitan financial district"
                  containerClassName="w-full h-full lg:h-full"
                  priority
                  hoverZoom
                  scrim="subtle"
                />
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A45C]">
                    Our Conviction
                  </p>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.14] text-[#10100F]">
                  WE BELIEVE EVERY BUSINESS{' '}
                  <span className="text-[#B08B43]">DESERVES ITS MOMENT.</span>
                </h2>
                <p className="text-base text-[#252421] leading-relaxed">
                  Exceptional products and resilient enterprises often remain underestimated simply
                  because their market narrative lags behind their operational reality.
                </p>
                <p className="text-base text-[#6E6B65] leading-relaxed">
                  The Comeback Project bridges that divide. We pair strategic business counsel with
                  high-impact public relations, broadcast appearances, outdoor presence, and investor
                  storytelling—ensuring the world recognizes your calibre when it matters most.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#DEDAD1]">
                <div className="space-y-2">
                  <h3 className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
                    Our Mission
                  </h3>
                  <p className="text-sm text-[#252421] leading-relaxed">
                    To unify media credibility, brand architecture, and commercial strategy into one
                    coordinated partner relationship that accelerates trust and opportunity.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
                    Our Vision
                  </h3>
                  <p className="text-sm text-[#252421] leading-relaxed">
                    To serve as the defining strategic growth partner for ambitious founders,
                    comeback stories, and category-shaping enterprises across global markets.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 3. Business Growth Philosophy */}
          <div className="pt-16 border-t border-[#DEDAD1] space-y-12">
            <Reveal className="max-w-2xl space-y-3">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A45C]">
                  Growth Philosophy
                </p>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#10100F]">
                Three principles behind lasting market authority.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ABOUT_PRINCIPLES.map((item, idx) => {
                const Icon = PRINCIPLE_ICONS[idx % PRINCIPLE_ICONS.length];
                return (
                  <Reveal key={item.index} delay={idx * 0.05}>
                    <div className="bg-[#FFFFFF] border border-[#DEDAD1] hover:border-[#C9A45C] transition-colors p-8 h-full space-y-5">
                      <div className="flex items-center justify-between border-b border-[#DEDAD1] pb-4">
                        <span className="font-serif text-2xl text-[#C9A45C] tabular-nums">
                          {item.index}
                        </span>
                        <Icon className="w-5 h-5 text-[#C9A45C]" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-2xl text-[#10100F]">{item.title}</h3>
                      <p className="text-sm text-[#6E6B65] leading-relaxed">{item.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. More Than An Agency + Why Choose Us Differentiators (Near-Black) */}
      <section className="bg-[#10100F] text-[#F5F3EE] py-20 lg:py-28 border-t border-[#252421]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-14 border-b border-[#252421]">
            <Reveal className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A45C]">
                  Why Choose Us
                </p>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15]">
                More than an agency.{' '}
                <span className="text-[#C9A45C]">A strategic growth partnership.</span>
              </h2>
              <p className="text-base text-[#F5F3EE]/80 leading-relaxed max-w-2xl">
                Traditional agencies execute isolated tasks without commercial context. We sit
                alongside decision-makers—linking brand perception directly to fundraising
                conviction, enterprise partnerships, and revenue expansion.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-5 group">
              <div className="aspect-[4/3] border border-[#252421]">
                <EditorialImage
                  src={BRAND_IMAGES.advisorySession}
                  alt="Senior advisors conducting a strategic business roundtable"
                  containerClassName="w-full h-full"
                  hoverZoom
                  scrim="subtle"
                />
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_DIFFERENTIATORS.map((diff, idx) => (
              <Reveal key={diff.index} delay={idx * 0.04}>
                <div className="bg-[#080807] border border-[#252421] hover:border-[#C9A45C]/60 transition-colors p-7 sm:p-8 h-full space-y-4">
                  <p className="font-serif text-xl text-[#C9A45C] tabular-nums">{diff.index}</p>
                  <h3 className="font-serif text-2xl text-[#F5F3EE]">{diff.title}</h3>
                  <p className="text-sm text-[#F5F3EE]/75 leading-relaxed">{diff.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#C9A45C] text-[#080807] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#d8b46e] transition-all duration-200 hover:-translate-y-[1px] cursor-pointer"
            >
              <span>Explore Our Six Services</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('partnerships')}
              className="inline-flex items-center gap-3 px-7 py-4 border border-[#F5F3EE]/35 text-[#F5F3EE] text-xs font-semibold tracking-[0.16em] uppercase hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors cursor-pointer"
            >
              <span>View Partnership Models</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Global Closing CTA */}
      <ClosingCtaSection onNavigate={onNavigate} image={BRAND_IMAGES.heroBoardroom} />
    </main>
  );
}
