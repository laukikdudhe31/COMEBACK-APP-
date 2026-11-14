import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Compass,
  Globe,
  Newspaper,
  TrendingUp,
  Tv,
} from 'lucide-react';
import { BRAND_IMAGES, CASE_STUDIES, SERVICES, TESTIMONIALS } from '../data/content';
import { CaseStudy, PageRoute } from '../types';
import { ClosingCtaSection } from '../components/ClosingCtaSection';
import { EditorialImage } from '../components/EditorialImage';
import { HeroParallax } from '../components/HeroParallax';
import { Reveal } from '../components/Reveal';

interface HomePageProps {
  onNavigate: (route: PageRoute, hash?: string) => void;
  onEnquireService: (serviceName: string) => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

const SERVICE_ICONS = [Newspaper, Tv, Building2, Globe, TrendingUp, Compass];

export function HomePage({
  onNavigate,
  onEnquireService,
  onSelectCaseStudy,
}: HomePageProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const featuredWork = CASE_STUDIES.slice(0, 3);
  const currentQuote = TESTIMONIALS[activeTestimonial];

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <main>
      {/* 1. Full-Screen Cinematic Hero with Gentle Parallax */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-end bg-[#080807] text-[#F5F3EE] overflow-hidden pt-28 pb-16 sm:pb-20 lg:pb-24">
        <HeroParallax>
          <EditorialImage
            src={BRAND_IMAGES.heroBoardroom}
            alt="Executive leadership boardroom overlooking city skyline at twilight"
            containerClassName="w-full h-full"
            priority
            scrim="hero"
          />
        </HeroParallax>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.26em] uppercase text-[#C9A45C]">
                The Comeback Project
              </p>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-[#FFFFFF]">
              YOUR BRAND.
              <span className="block text-[#C9A45C]">OUR OBSESSION.</span>
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[#F5F3EE]/90 leading-snug">
              Strategic growth, media authority, and commercial positioning under one roof.
            </p>

            <p className="text-sm sm:text-base text-[#F5F3EE]/80 leading-relaxed max-w-2xl">
              We partner with ambitious founders, scaling businesses, and enterprise leaders to
              build undeniable credibility, command national visibility, and convert market
              attention into lasting commercial momentum.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#C9A45C] text-[#080807] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#d8b46e] transition-all duration-200 hover:-translate-y-[1px] whitespace-nowrap cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-[#F5F3EE]/45 bg-[#080807]/55 text-[#F5F3EE] text-xs font-semibold tracking-[0.16em] uppercase hover:border-[#C9A45C] hover:text-[#C9A45C] transition-all duration-200 hover:-translate-y-[1px] whitespace-nowrap cursor-pointer"
              >
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Narrow Credibility / Positioning Transition Band */}
      <section className="bg-[#10100F] text-[#F5F3EE] border-y border-[#C9A45C]/25">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs tracking-[0.18em] uppercase text-[#C9A45C] font-semibold">
            Integrated Growth Mandate
          </p>
          <p className="text-xs sm:text-sm text-[#F5F3EE]/75 tracking-wide">
            Public Relations · Broadcast Features · Outdoor Campaigns · Digital Authority · Investor
            Relations · Business Advisory
          </p>
        </div>
      </section>

      {/* 3. Integrated Growth & Agency Introduction (Warm Ivory) */}
      <section className="bg-[#F5F3EE] text-[#10100F] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <Reveal className="lg:col-span-6 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A45C]">
                    One Coordinated Relationship
                  </p>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.14] tracking-tight text-[#10100F]">
                  Multiple growth solutions aligned under{' '}
                  <span className="italic text-[#B08B43]">one strategic roof.</span>
                </h2>
                <p className="text-base text-[#252421] leading-relaxed">
                  Most growing companies suffer from fragmented counsel—separate vendors for PR,
                  outdoor media, digital branding, and fundraising narratives. Disconnected
                  execution dilutes market perception.
                </p>
                <p className="text-base text-[#6E6B65] leading-relaxed">
                  The Comeback Project eliminates that gap. We bring public relations, television
                  visibility, city-scale advertising, investor storytelling, and business consulting
                  together into one cohesive growth architecture tailored to your commercial stage.
                </p>
              </div>

              <div className="pt-6 border-t border-[#DEDAD1] grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="font-serif text-2xl text-[#10100F] tabular-nums">06</p>
                  <p className="text-xs text-[#6E6B65] mt-1">Integrated Advisory Pillars</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-[#10100F]">360°</p>
                  <p className="text-xs text-[#6E6B65] mt-1">Media, Brand &amp; Capital Alignment</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-[#10100F]">1 Desk</p>
                  <p className="text-xs text-[#6E6B65] mt-1">Senior Founder-Level Counsel</p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#080807] text-[#F5F3EE] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#C9A45C] hover:text-[#080807] transition-all duration-200 hover:-translate-y-[1px] cursor-pointer"
                >
                  <span>Discover Our Philosophy</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6 group">
              <div className="h-full min-h-[360px] lg:min-h-[520px] border border-[#DEDAD1]">
                <EditorialImage
                  src={BRAND_IMAGES.aboutFounder}
                  alt="Founder overlooking metropolitan skyline at twilight"
                  containerClassName="w-full h-full lg:h-full"
                  hoverZoom
                  scrim="subtle"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Redesigned Service Overview Grid with Editorial Thumbnails (Near-Black) */}
      <section className="bg-[#080807] text-[#F5F3EE] py-20 lg:py-28 border-t border-[#252421]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 space-y-14">
          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#252421]">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A45C]">
                  Capabilities &amp; Mandates
                </p>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15]">
                Six disciplines built to command{' '}
                <span className="text-[#C9A45C]">credibility and scale.</span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="group inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#C9A45C] hover:text-[#F5F3EE] transition-colors self-start lg:self-auto cursor-pointer whitespace-nowrap"
            >
              <span className="relative py-1">
                View All Service Details
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-0 h-px bg-[#C9A45C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
            </button>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <Reveal key={service.id} delay={idx * 0.05}>
                  <article className="h-full bg-[#10100F] border border-[#252421] hover:border-[#C9A45C]/70 transition-colors duration-300 flex flex-col group">
                    <button
                      type="button"
                      onClick={() => onNavigate('services', service.id)}
                      className="text-left flex flex-col h-full cursor-pointer"
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden border-b border-[#252421] relative">
                        <EditorialImage
                          src={service.image}
                          alt={service.imageAlt}
                          containerClassName="w-full h-full"
                          hoverZoom
                          scrim="bottom"
                        />
                        <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between">
                          <span className="font-serif text-2xl text-[#C9A45C] tabular-nums">
                            {service.index}
                          </span>
                          <Icon className="w-4 h-4 text-[#C9A45C]" strokeWidth={1.5} />
                        </div>
                      </div>

                      <div className="p-7 flex flex-col justify-between flex-1 space-y-6">
                        <div className="space-y-2.5">
                          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#77736C]">
                            {service.category}
                          </p>
                          <h3 className="font-serif text-2xl text-[#F5F3EE] leading-snug group-hover:text-[#C9A45C] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-[#F5F3EE]/75 leading-relaxed">
                            {service.shortSummary}
                          </p>
                        </div>

                        <div className="pt-5 border-t border-[#252421] space-y-4">
                          <p className="text-xs text-[#77736C] leading-relaxed">
                            {service.tags.join(' · ')}
                          </p>
                          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#C9A45C] group-hover:text-[#FFFFFF] transition-colors">
                            <span className="relative py-0.5">
                              Explore Mandate
                              <span
                                aria-hidden="true"
                                className="absolute left-0 right-0 bottom-0 h-px bg-[#C9A45C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                              />
                            </span>
                            <ArrowRight
                              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                              strokeWidth={1.75}
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Specialised Pathways: Annual Plans & Enterprise Partnerships (Warm Ivory) */}
      <section className="bg-[#F5F3EE] text-[#10100F] py-20 lg:py-24 border-t border-[#DEDAD1]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#FFFFFF] border border-[#DEDAD1] hover:border-[#C9A45C] transition-colors p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
                  Structured Engagement
                </p>
                <h3 className="font-serif text-3xl text-[#10100F]">Annual Visibility Plans</h3>
                <p className="text-sm sm:text-base text-[#6E6B65] leading-relaxed">
                  Consistent, year-round media authority outperforms sporadic campaigns. Compare
                  structured retainer levels calibrated for emerging startups, scaling firms, and
                  category leaders.
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('plans')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#080807] text-[#F5F3EE] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#C9A45C] hover:text-[#080807] transition-all duration-200 hover:-translate-y-[1px] cursor-pointer"
                >
                  <span>Compare Visibility Plans</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                </button>
              </div>
            </div>

            <div className="bg-[#10100F] text-[#F5F3EE] border border-[#252421] hover:border-[#C9A45C]/70 transition-colors p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
                  Long-Term Alliances
                </p>
                <h3 className="font-serif text-3xl text-[#F5F3EE]">Enterprise Partnerships</h3>
                <p className="text-sm sm:text-base text-[#F5F3EE]/75 leading-relaxed">
                  Bespoke multi-quarter collaborations for established corporations, high-potential
                  startup alliances, executive thought leadership, and strategic co-initiatives.
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('partnerships')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C9A45C] text-[#080807] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#d8b46e] transition-all duration-200 hover:-translate-y-[1px] cursor-pointer"
                >
                  <span>Explore Partnership Models</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Featured Work Preview (Near-Black) */}
      <section className="bg-[#10100F] text-[#F5F3EE] py-20 lg:py-28 border-t border-[#252421]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 space-y-12">
          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#252421]">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A45C]">
                  Selected Portfolio
                </p>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
                Stories of <span className="text-[#C9A45C]">Momentum.</span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('work')}
              className="group inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#C9A45C] hover:text-[#F5F3EE] transition-colors self-start lg:self-auto cursor-pointer whitespace-nowrap"
            >
              <span className="relative py-1">
                View All Case Studies
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-0 h-px bg-[#C9A45C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
            </button>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {featuredWork.map((study, idx) => (
              <Reveal key={study.id} delay={idx * 0.05}>
                <article className="group bg-[#080807] border border-[#252421] hover:border-[#C9A45C]/65 transition-colors flex flex-col h-full">
                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy(study)}
                    className="text-left flex flex-col h-full cursor-pointer"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#252421]">
                      <EditorialImage
                        src={study.image}
                        alt={study.imageAlt}
                        containerClassName="w-full h-full"
                        hoverZoom
                        scrim="subtle"
                      />
                    </div>
                    <div className="p-7 flex flex-col justify-between flex-1 space-y-5">
                      <div className="space-y-2.5">
                        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#C9A45C] tabular-nums">
                          {study.index} · {study.category}
                        </p>
                        <h3 className="font-serif text-xl sm:text-2xl text-[#F5F3EE] leading-snug group-hover:text-[#C9A45C] transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
                          {study.shortDescriptor}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[#252421] flex items-center justify-between text-xs font-semibold tracking-[0.14em] uppercase text-[#F5F3EE]/85 group-hover:text-[#C9A45C]">
                        <span>Case Study · Explore</span>
                        <ArrowRight
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                          strokeWidth={1.75}
                        />
                      </div>
                    </div>
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonial Showcase (Warm Ivory) */}
      <section className="bg-[#F5F3EE] text-[#10100F] py-20 lg:py-24 border-t border-[#DEDAD1]">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DEDAD1] pb-6">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
                  Partner Perspective
                </p>
                <p className="text-xs text-[#6E6B65] mt-1">{currentQuote.contextLabel}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 border border-[#DEDAD1] bg-[#FFFFFF] text-[#10100F] flex items-center justify-center hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="text-xs text-[#6E6B65] px-2 tabular-nums">
                  0{activeTestimonial + 1} / 0{TESTIMONIALS.length}
                </span>
                <button
                  type="button"
                  onClick={handleNextTestimonial}
                  aria-label="Next testimonial"
                  className="w-10 h-10 border border-[#DEDAD1] bg-[#FFFFFF] text-[#10100F] flex items-center justify-center hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <blockquote className="space-y-6">
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-[2rem] leading-[1.35] text-[#10100F]">
                &ldquo;{currentQuote.quote}&rdquo;
              </p>
              <footer className="space-y-1">
                <p className="font-sans text-sm font-semibold tracking-wide text-[#10100F]">
                  {currentQuote.author}
                </p>
                <p className="text-xs text-[#6E6B65]">{currentQuote.role}</p>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 8. Global High-Impact Closing CTA */}
      <ClosingCtaSection
        onNavigate={(route) => {
          if (route === 'contact') {
            onEnquireService('General Strategic Consultation');
          } else {
            onNavigate(route);
          }
        }}
      />
    </main>
  );
}
