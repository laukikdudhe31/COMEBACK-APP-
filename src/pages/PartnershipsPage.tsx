import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { BRAND_IMAGES, PARTNERSHIP_MODELS } from '../data/content';
import { EditorialImage } from '../components/EditorialImage';
import { EnquiryForm } from '../components/EnquiryForm';
import { HeroParallax } from '../components/HeroParallax';
import { Reveal } from '../components/Reveal';

export function PartnershipsPage() {
  const [selectedPartnership, setSelectedPartnership] = useState('Enterprise Partnerships');

  const handlePartnershipEnquiry = (modelTitle: string) => {
    setSelectedPartnership('Enterprise Partnerships');
    const target = document.getElementById('partnership-enquiry');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    void modelTitle;
  };

  return (
    <main>
      {/* 1. Cinematic Partnership Hero with Gentle Parallax */}
      <section className="relative bg-[#080807] text-[#F5F3EE] pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden border-b border-[#252421]">
        <HeroParallax>
          <EditorialImage
            src={BRAND_IMAGES.luxurySummit}
            alt="Accomplished business executives conversing in an intimate architectural lounge"
            containerClassName="w-full h-full"
            priority
            scrim="hero"
          />
        </HeroParallax>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C9A45C]">
                Enterprise Partnerships
              </p>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-[#FFFFFF]">
              BIG AMBITIONS REQUIRE{' '}
              <span className="text-[#C9A45C]">BIGGER PARTNERSHIPS.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EE]/85 leading-relaxed max-w-2xl">
              We collaborate closely with established enterprises, high-growth startups, and
              executive leadership teams on long-term brand authority, institutional credibility,
              and strategic market initiatives.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handlePartnershipEnquiry('Enterprise Partnerships')}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#C9A45C] text-[#080807] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#d8b46e] transition-all duration-200 hover:-translate-y-[1px] cursor-pointer"
              >
                <span>Initiate a Partnership Conversation</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Partnership Models (Warm Ivory) */}
      <section className="bg-[#F5F3EE] text-[#10100F] py-20 lg:py-28 border-b border-[#DEDAD1]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 space-y-14">
          <Reveal className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A45C]">
                Collaboration Architecture
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15]">
              Four structured models for enduring strategic alliance.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {PARTNERSHIP_MODELS.map((model, idx) => (
              <Reveal key={model.id} delay={idx * 0.05}>
                <article className="bg-[#FFFFFF] border border-[#DEDAD1] hover:border-[#C9A45C] transition-colors p-8 sm:p-10 h-full flex flex-col justify-between space-y-8 group">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-[#DEDAD1] pb-4">
                      <span className="font-serif text-2xl text-[#C9A45C] tabular-nums">
                        {model.index}
                      </span>
                      <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6E6B65]">
                        {model.subtitle}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#10100F] group-hover:text-[#B08B43] transition-colors">
                        {model.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#6E6B65] leading-relaxed">
                        {model.summary}
                      </p>
                    </div>

                    <ul className="space-y-2.5 pt-2">
                      {model.focusAreas.map((area) => (
                        <li key={area} className="flex items-start gap-2.5 text-sm text-[#252421]">
                          <Check
                            className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5"
                            strokeWidth={1.75}
                          />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-[#DEDAD1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-[#6E6B65]">
                      <strong className="text-[#10100F]">Ideal for:</strong> {model.idealFor}
                    </p>
                    <button
                      type="button"
                      onClick={() => handlePartnershipEnquiry(model.title)}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#10100F] hover:text-[#B08B43] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <span>Partner With Us</span>
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        strokeWidth={1.75}
                      />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Embedded Enterprise Partnerships Enquiry Section (Near-Black) */}
      <section
        id="partnership-enquiry"
        className="scroll-mt-20 bg-[#10100F] text-[#F5F3EE] py-20 lg:py-28"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 space-y-10">
          <Reveal className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A45C]">
                Direct Partnership Desk
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
              Explore a multi-quarter alliance with our senior partners.
            </h2>
            <p className="text-sm sm:text-base text-[#F5F3EE]/75 leading-relaxed">
              Share your organizational goals below. Enterprise partnership enquiries are routed
              directly to our managing advisory desk.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="bg-[#080807] border border-[#252421] p-6 sm:p-10">
            <EnquiryForm
              preselectedService={selectedPartnership}
              sourcePage="partnerships"
              darkSurface
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
