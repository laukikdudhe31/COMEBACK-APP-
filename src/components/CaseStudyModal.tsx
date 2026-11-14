import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';
import { EditorialImage } from './EditorialImage';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
  onEnquire: (serviceName: string) => void;
}

export function CaseStudyModal({
  caseStudy,
  onClose,
  onSelectCaseStudy,
  onEnquire,
}: CaseStudyModalProps) {
  const currentIndex = caseStudy
    ? CASE_STUDIES.findIndex((item) => item.id === caseStudy.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex < 0) return;
    const prevIndex = currentIndex === 0 ? CASE_STUDIES.length - 1 : currentIndex - 1;
    onSelectCaseStudy(CASE_STUDIES[prevIndex]);
  };

  const handleNext = () => {
    if (currentIndex < 0) return;
    const nextIndex = currentIndex === CASE_STUDIES.length - 1 ? 0 : currentIndex + 1;
    onSelectCaseStudy(CASE_STUDIES[nextIndex]);
  };

  useEffect(() => {
    if (!caseStudy) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  });

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${caseStudy.title}`}
      className="fixed inset-0 z-50 bg-[#080807]/88 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#F5F3EE] text-[#10100F] border border-[#C9A45C]/40 max-w-4xl w-full my-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80">
          <EditorialImage
            src={caseStudy.image}
            alt={caseStudy.imageAlt}
            containerClassName="w-full h-full"
            scrim="bottom"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="absolute top-4 right-4 w-11 h-11 bg-[#080807]/85 border border-[#C9A45C]/55 text-[#F5F3EE] flex items-center justify-center hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <div className="absolute bottom-5 left-6 right-6 text-[#F5F3EE]">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C] mb-1.5 tabular-nums">
              {caseStudy.index} · {caseStudy.category}
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl leading-tight">{caseStudy.title}</h3>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#DEDAD1] text-xs text-[#6E6B65]">
            <span>{caseStudy.sectorLabel}</span>
            <span className="text-[#77736C]">{caseStudy.sampleNotice}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2.5">
              <h4 className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
                The Challenge
              </h4>
              <p className="text-sm leading-relaxed text-[#252421]">{caseStudy.challenge}</p>
            </div>
            <div className="space-y-2.5">
              <h4 className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
                Strategic Approach
              </h4>
              <p className="text-sm leading-relaxed text-[#252421]">{caseStudy.approach}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#DEDAD1]">
            <div className="space-y-3">
              <h4 className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
                Execution Architecture
              </h4>
              <ul className="space-y-2.5">
                {caseStudy.execution.map((step) => (
                  <li key={step} className="flex items-start gap-2.5 text-sm text-[#252421]">
                    <Check className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" strokeWidth={1.75} />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
                Commercial Outcome
              </h4>
              <p className="text-sm leading-relaxed text-[#252421]">{caseStudy.outcome}</p>
              <p className="text-xs text-[#6E6B65] pt-2">
                Primary Mandate: <strong className="text-[#10100F]">{caseStudy.relatedService}</strong>
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#DEDAD1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                const service = caseStudy.relatedService;
                onClose();
                onEnquire(service);
              }}
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#080807] text-[#F5F3EE] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#C9A45C] hover:text-[#080807] transition-colors cursor-pointer"
            >
              <span>Enquire About Similar Mandate</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </button>

            <div className="flex items-center justify-between sm:justify-end gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous case study"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 border border-[#DEDAD1] bg-[#FFFFFF] text-xs font-semibold tracking-[0.12em] uppercase text-[#10100F] hover:border-[#C9A45C] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>Prev</span>
              </button>
              <span className="text-xs text-[#6E6B65] px-2 tabular-nums">
                {caseStudy.index} / 0{CASE_STUDIES.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next case study"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 border border-[#DEDAD1] bg-[#FFFFFF] text-xs font-semibold tracking-[0.12em] uppercase text-[#10100F] hover:border-[#C9A45C] transition-colors cursor-pointer"
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
