import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { BRAND_IMAGES, CASE_STUDIES, TESTIMONIALS } from '../data/content';
import { CaseStudy, PageRoute, WorkCategory } from '../types';
import { ClosingCtaSection } from '../components/ClosingCtaSection';
import { EditorialImage } from '../components/EditorialImage';
import { HeroParallax } from '../components/HeroParallax';
import { Reveal } from '../components/Reveal';

interface WorkPageProps {
  onNavigate: (route: PageRoute) => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

const CATEGORIES: WorkCategory[] = [
  'All',
  'PR & Media',
  'Brand & Outdoor',
  'Fundraising',
  'Digital Visibility',
];

export function WorkPage({ onNavigate, onSelectCaseStudy }: WorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory>('All');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const filteredStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === selectedCategory);

  const currentTestimonial = TESTIMONIALS[activeTestimonial];

  return (
    <main>
      {/* 1. Dark Image-Led Hero with Gentle Parallax */}
      <section className="relative bg-[#080807] text-[#F5F3EE] pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden border-b border-[#252421]">
        <HeroParallax>
          <EditorialImage
            src={BRAND_IMAGES.mediaBroadcast}
            alt="Executive media interview in a dark broadcast studio"
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
                Our Work
              </p>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-[#FFFFFF]">
              WORK THAT <span className="text-[#C9A45C]">GETS NOTICED.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EE]/85 leading-relaxed max-w-2xl">
              Representative campaign architecture across public relations, broadcast features,
              metropolitan outdoor visibility, investor narratives, and digital authority.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Portfolio Grid: Stories of Momentum (Warm Ivory) */}
      <section className="bg-[#F5F3EE] text-[#10100F] py-20 lg:py-28 border-b border-[#DEDAD1]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 space-y-12">
          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#DEDAD1]">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-px bg-[#C9A45C]" />
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A45C]">
                  Portfolio Showcase
                </p>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
                STORIES OF MOMENTUM.
              </h2>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter case studies by discipline"
              className="flex flex-wrap items-center gap-2"
            >
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase border transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#080807] text-[#C9A45C] border-[#080807]'
                        : 'bg-[#FFFFFF] text-[#6E6B65] border-[#DEDAD1] hover:border-[#10100F] hover:text-[#10100F]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredStudies.map((study, idx) => (
              <Reveal key={study.id} delay={idx * 0.04}>
                <article className="group bg-[#FFFFFF] border border-[#DEDAD1] hover:border-[#C9A45C] transition-colors flex flex-col h-full">
                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy(study)}
                    className="text-left flex flex-col h-full cursor-pointer"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#DEDAD1]">
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
                        <h3 className="font-serif text-2xl text-[#10100F] leading-snug group-hover:text-[#B08B43] transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-sm text-[#6E6B65] leading-relaxed">
                          {study.shortDescriptor}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#DEDAD1] flex items-center justify-between text-xs font-semibold tracking-[0.14em] uppercase text-[#10100F] group-hover:text-[#B08B43]">
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

          <p className="text-xs text-[#77736C] pt-2">
            Note: Case briefs above illustrate The Comeback Project&apos;s methodology across
            sectors; private client archives and verified references are shared under NDA during
            consultation.
          </p>
        </div>
      </section>

      {/* 3. Testimonials Carousel (Near-Black) */}
      <section className="bg-[#10100F] text-[#F5F3EE] py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#252421] pb-6">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
                  Client Perspectives
                </p>
                <p className="text-xs text-[#77736C] mt-1">{currentTestimonial.contextLabel}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
                    )
                  }
                  aria-label="Previous client quote"
                  className="w-10 h-10 border border-[#2C2A26] bg-[#080807] text-[#F5F3EE] flex items-center justify-center hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="text-xs text-[#77736C] px-2 tabular-nums">
                  0{activeTestimonial + 1} / 0{TESTIMONIALS.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
                    )
                  }
                  aria-label="Next client quote"
                  className="w-10 h-10 border border-[#2C2A26] bg-[#080807] text-[#F5F3EE] flex items-center justify-center hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <blockquote className="space-y-6">
              <p className="font-serif italic text-2xl sm:text-3xl leading-[1.35] text-[#F5F3EE]">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>
              <footer className="space-y-1">
                <p className="text-sm font-semibold text-[#C9A45C]">{currentTestimonial.author}</p>
                <p className="text-xs text-[#F5F3EE]/65">{currentTestimonial.role}</p>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <ClosingCtaSection onNavigate={onNavigate} image={BRAND_IMAGES.heroBoardroom} />
    </main>
  );
}
