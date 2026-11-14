import { useEffect, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { BRAND_IMAGES, SERVICES } from '../data/content';
import { PageRoute } from '../types';
import { ClosingCtaSection } from '../components/ClosingCtaSection';
import { EditorialImage } from '../components/EditorialImage';
import { Reveal } from '../components/Reveal';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onEnquireService: (serviceName: string) => void;
}

export function ServicesPage({ onNavigate, onEnquireService }: ServicesPageProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveServiceId(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -50% 0px' }
    );

    SERVICES.forEach((service) => {
      const el = document.getElementById(service.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToService = (id: string) => {
    setActiveServiceId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main>
      {/* 1. Services Hero */}
      <section className="bg-[#080807] text-[#F5F3EE] pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-[#252421]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 space-y-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C9A45C]">
                Our Services
              </p>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Integrated growth disciplines{' '}
              <span className="text-[#C9A45C]">engineered for visibility.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EE]/80 leading-relaxed max-w-2xl">
              From editorial media coverage and national broadcast stories to city-scale outdoor
              campaigns, investor relations, and full-cycle startup advisory—each mandate is
              designed to reinforce the others.
            </p>
          </div>

          {/* Quick Jump Anchor Bar */}
          <div className="pt-8 border-t border-[#252421] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES.map((service) => {
              const isCurrent = activeServiceId === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => scrollToService(service.id)}
                  className={`flex items-center justify-between gap-3 px-4 py-3.5 border text-left transition-colors group cursor-pointer ${
                    isCurrent
                      ? 'bg-[#181613] border-[#C9A45C]'
                      : 'bg-[#10100F] border-[#252421] hover:border-[#C9A45C]'
                  }`}
                >
                  <div className="flex items-baseline gap-3 min-w-0">
                    <span className="font-serif text-sm text-[#C9A45C] tabular-nums shrink-0">
                      {service.index}
                    </span>
                    <span className="text-xs sm:text-sm text-[#F5F3EE] group-hover:text-[#C9A45C] transition-colors truncate">
                      {service.title}
                    </span>
                  </div>
                  <ArrowRight
                    className="w-3.5 h-3.5 text-[#77736C] group-hover:text-[#C9A45C] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                    strokeWidth={1.5}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Sections (Alternating Warm Ivory & Near-Black) */}
      <div>
        {SERVICES.map((service, idx) => {
          const isLight = idx % 2 === 0;
          const imageFirstOnDesktop = idx % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`scroll-mt-20 py-20 lg:py-28 border-b ${
                isLight
                  ? 'bg-[#F5F3EE] text-[#10100F] border-[#DEDAD1]'
                  : 'bg-[#10100F] text-[#F5F3EE] border-[#252421]'
              }`}
            >
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
                  {/* Text Column */}
                  <Reveal
                    className={`lg:col-span-7 flex flex-col justify-between space-y-8 ${
                      imageFirstOnDesktop ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <span className="font-serif text-4xl sm:text-5xl text-[#C9A45C] tabular-nums">
                          {service.index}
                        </span>
                        <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]/60" />
                        <span
                          className={`text-[11px] font-semibold tracking-[0.2em] uppercase ${
                            isLight ? 'text-[#6E6B65]' : 'text-[#C9A45C]'
                          }`}
                        >
                          {service.category}
                        </span>
                      </div>

                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.14]">
                        {service.title}
                      </h2>

                      <p
                        className={`text-base sm:text-lg leading-relaxed ${
                          isLight ? 'text-[#252421]' : 'text-[#F5F3EE]/90'
                        }`}
                      >
                        {service.shortSummary}
                      </p>

                      <p
                        className={`text-sm sm:text-base leading-relaxed ${
                          isLight ? 'text-[#6E6B65]' : 'text-[#F5F3EE]/70'
                        }`}
                      >
                        {service.fullDescription}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div
                      className={`pt-6 border-t ${
                        isLight ? 'border-[#DEDAD1]' : 'border-[#252421]'
                      } space-y-4`}
                    >
                      <h3 className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
                        Key Scope &amp; Deliverables
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className={`flex items-start gap-2.5 text-sm ${
                              isLight ? 'text-[#252421]' : 'text-[#F5F3EE]/85'
                            }`}
                          >
                            <Check
                              className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5"
                              strokeWidth={1.75}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Unboxed Metadata Tags & Enquiry CTA */}
                    <div
                      className={`pt-6 border-t ${
                        isLight ? 'border-[#DEDAD1]' : 'border-[#252421]'
                      } flex flex-col sm:flex-row sm:items-center justify-between gap-5`}
                    >
                      <p
                        className={`text-xs tracking-wide ${
                          isLight ? 'text-[#6E6B65]' : 'text-[#77736C]'
                        }`}
                      >
                        {service.tags.join(' · ')}
                      </p>

                      <button
                        type="button"
                        onClick={() => onEnquireService(service.title)}
                        className={`inline-flex items-center justify-center gap-3 px-6 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200 hover:-translate-y-[1px] whitespace-nowrap shrink-0 cursor-pointer ${
                          isLight
                            ? 'bg-[#080807] text-[#F5F3EE] hover:bg-[#C9A45C] hover:text-[#080807]'
                            : 'bg-[#C9A45C] text-[#080807] hover:bg-[#d8b46e]'
                        }`}
                      >
                        <span>Enquire About This Service</span>
                        <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                      </button>
                    </div>
                  </Reveal>

                  {/* Image Column with Hover Zoom */}
                  <Reveal
                    delay={0.08}
                    className={`lg:col-span-5 group ${
                      imageFirstOnDesktop ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div
                      className={`h-full min-h-[300px] lg:min-h-[480px] border ${
                        isLight ? 'border-[#DEDAD1]' : 'border-[#252421]'
                      }`}
                    >
                      <EditorialImage
                        src={service.image}
                        alt={service.imageAlt}
                        containerClassName="w-full h-full lg:h-full"
                        hoverZoom
                        scrim="subtle"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. Closing CTA */}
      <ClosingCtaSection onNavigate={onNavigate} image={BRAND_IMAGES.advisorySession} />
    </main>
  );
}
