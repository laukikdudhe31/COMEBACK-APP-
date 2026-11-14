import { ArrowRight, Check } from 'lucide-react';
import { BRAND_IMAGES, PLAN_COMPARISON_ROWS, VISIBILITY_PLANS } from '../data/content';
import { PageRoute } from '../types';
import { ClosingCtaSection } from '../components/ClosingCtaSection';
import { Reveal } from '../components/Reveal';

interface PlansPageProps {
  onNavigate: (route: PageRoute) => void;
  onEnquireService: (serviceName: string) => void;
}

export function PlansPage({ onNavigate, onEnquireService }: PlansPageProps) {
  return (
    <main>
      {/* 1. Hero */}
      <section className="bg-[#080807] text-[#F5F3EE] pt-32 pb-20 lg:pt-40 lg:pb-24 border-b border-[#252421]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C9A45C]">
              Annual Visibility Plans
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Authority is built through{' '}
              <span className="text-[#C9A45C]">disciplined consistency.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EE]/80 leading-relaxed max-w-2xl">
              One-off press bursts fade within weeks. Our annual visibility plans transform your
              brand presence into a structured, compounding year-round communications asset—without
              fragmented vendor overhead.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Plan Tiers (Warm Ivory) */}
      <section className="bg-[#F5F3EE] text-[#10100F] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 space-y-16">
          <Reveal className="max-w-2xl space-y-3">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A45C]">
              Retainer Architecture
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#10100F]">
              Three engagement levels calibrated to your stage of scale.
            </h2>
            <p className="text-sm sm:text-base text-[#6E6B65] leading-relaxed">
              Commercial terms are structured privately following an alignment briefing so scope,
              city footprint, and deliverables reflect your exact objectives.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {VISIBILITY_PLANS.map((plan, idx) => (
              <Reveal key={plan.id} delay={idx * 0.06} className="h-full">
                <article
                  className={`h-full flex flex-col justify-between p-8 border transition-colors ${
                    plan.featured
                      ? 'bg-[#10100F] text-[#F5F3EE] border-[#C9A45C]'
                      : 'bg-[#FFFFFF] text-[#10100F] border-[#DEDAD1]'
                  }`}
                >
                  <div className="space-y-6">
                    <div
                      className={`flex items-center justify-between pb-4 border-b ${
                        plan.featured ? 'border-[#252421]' : 'border-[#DEDAD1]'
                      }`}
                    >
                      <span className="font-serif text-2xl text-[#C9A45C] tabular-nums">
                        {plan.index}
                      </span>
                      <span
                        className={`text-[11px] font-semibold tracking-[0.16em] uppercase ${
                          plan.featured ? 'text-[#C9A45C]' : 'text-[#6E6B65]'
                        }`}
                      >
                        {plan.featured ? 'Most Requested' : 'Annual Mandate'}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="font-serif text-3xl">{plan.name}</h3>
                      <p
                        className={`text-xs font-medium tracking-wide ${
                          plan.featured ? 'text-[#C9A45C]' : 'text-[#B08B43]'
                        }`}
                      >
                        {plan.engagementModel}
                      </p>
                      <p
                        className={`text-sm leading-relaxed pt-1 ${
                          plan.featured ? 'text-[#F5F3EE]/80' : 'text-[#6E6B65]'
                        }`}
                      >
                        {plan.summary}
                      </p>
                    </div>

                    <div
                      className={`pt-5 border-t space-y-2 ${
                        plan.featured ? 'border-[#252421]' : 'border-[#DEDAD1]'
                      }`}
                    >
                      <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#C9A45C]">
                        Intended Audience
                      </p>
                      <p
                        className={`text-sm leading-relaxed ${
                          plan.featured ? 'text-[#F5F3EE]/85' : 'text-[#252421]'
                        }`}
                      >
                        {plan.audience}
                      </p>
                    </div>

                    <div
                      className={`pt-5 border-t space-y-3 ${
                        plan.featured ? 'border-[#252421]' : 'border-[#DEDAD1]'
                      }`}
                    >
                      <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#C9A45C]">
                        Core Deliverables
                      </p>
                      <ul className="space-y-2.5">
                        {plan.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm">
                            <Check
                              className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5"
                              strokeWidth={1.75}
                            />
                            <span
                              className={
                                plan.featured ? 'text-[#F5F3EE]/85' : 'text-[#252421]'
                              }
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`pt-6 mt-8 border-t space-y-5 ${
                      plan.featured ? 'border-[#252421]' : 'border-[#DEDAD1]'
                    }`}
                  >
                    <div className="space-y-1 text-xs">
                      <p className={plan.featured ? 'text-[#F5F3EE]/65' : 'text-[#6E6B65]'}>
                        <strong className={plan.featured ? 'text-[#F5F3EE]' : 'text-[#10100F]'}>
                          Cadence:
                        </strong>{' '}
                        {plan.cadence}
                      </p>
                      <p className={plan.featured ? 'text-[#F5F3EE]/65' : 'text-[#6E6B65]'}>
                        <strong className={plan.featured ? 'text-[#F5F3EE]' : 'text-[#10100F]'}>
                          Reporting:
                        </strong>{' '}
                        {plan.reporting}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onEnquireService('Annual Visibility Plans')}
                      className={`w-full py-4 px-5 text-xs font-semibold tracking-[0.16em] uppercase flex items-center justify-center gap-2.5 transition-colors cursor-pointer ${
                        plan.featured
                          ? 'bg-[#C9A45C] text-[#080807] hover:bg-[#d8b46e]'
                          : 'bg-[#080807] text-[#F5F3EE] hover:bg-[#C9A45C] hover:text-[#080807]'
                      }`}
                    >
                      <span>Enquire About {plan.name}</span>
                      <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* 3. Plan Comparison Matrix */}
          <Reveal className="pt-12 border-t border-[#DEDAD1] space-y-8">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
                Side-by-Side Comparison
              </p>
              <h2 className="font-serif text-3xl text-[#10100F]">
                Deliverable scope across engagement tiers
              </h2>
            </div>

            <div className="bg-[#FFFFFF] border border-[#DEDAD1] overflow-x-auto">
              <table className="w-full min-w-[720px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#DEDAD1] bg-[#F5F3EE]/70">
                    <th className="py-4 px-6 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6E6B65]">
                      Capability Pillar
                    </th>
                    <th className="py-4 px-6 font-serif text-lg text-[#10100F]">
                      01. Foundation
                    </th>
                    <th className="py-4 px-6 font-serif text-lg text-[#B08B43]">
                      02. Momentum
                    </th>
                    <th className="py-4 px-6 font-serif text-lg text-[#10100F]">
                      03. Flagship
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DEDAD1] text-sm">
                  {PLAN_COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="hover:bg-[#F5F3EE]/40 transition-colors">
                      <td className="py-4 px-6 font-medium text-[#10100F]">{row.feature}</td>
                      <td className="py-4 px-6 text-[#6E6B65]">{row.foundation}</td>
                      <td className="py-4 px-6 text-[#10100F] font-medium">{row.momentum}</td>
                      <td className="py-4 px-6 text-[#252421]">{row.flagship}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* 4. Tailored Plan Callout */}
          <Reveal className="bg-[#10100F] text-[#F5F3EE] border border-[#252421] p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
                Bespoke Scope
              </p>
              <h3 className="font-serif text-3xl text-[#F5F3EE]">
                Require a tailored visibility architecture?
              </h3>
              <p className="text-sm sm:text-base text-[#F5F3EE]/75 leading-relaxed">
                For multi-brand holding groups, cross-border market entries, or time-sensitive
                fundraising windows, we compose custom annual mandates aligned with your board
                calendar.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onEnquireService('Annual Visibility Plans')}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#C9A45C] text-[#080807] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#d8b46e] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Request Tailored Proposal</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </button>
          </Reveal>
        </div>
      </section>

      <ClosingCtaSection onNavigate={onNavigate} image={BRAND_IMAGES.billboardUrban} />
    </main>
  );
}
