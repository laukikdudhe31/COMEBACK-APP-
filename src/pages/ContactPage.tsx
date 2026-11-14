import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/content';
import { EnquiryForm } from '../components/EnquiryForm';
import { Reveal } from '../components/Reveal';

interface ContactPageProps {
  preselectedService: string;
}

export function ContactPage({ preselectedService }: ContactPageProps) {
  return (
    <main>
      {/* 1. Dark Contact Hero */}
      <section className="bg-[#080807] text-[#F5F3EE] pt-32 pb-20 lg:pt-40 lg:pb-24 border-b border-[#252421]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C9A45C]">
              Let&apos;s Connect
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
              YOUR NEXT BIG OPPORTUNITY STARTS WITH{' '}
              <span className="text-[#C9A45C]">ONE CONVERSATION.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#F5F3EE]/80 leading-relaxed max-w-2xl">
              Whether you are preparing a brand launch, structuring a fundraising narrative, or
              seeking comprehensive annual visibility—speak directly with our advisory desk.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Methods & Enquiry Form (Warm Ivory) */}
      <section className="bg-[#F5F3EE] text-[#10100F] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Intro + Direct Channels */}
            <Reveal className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A45C]">
                  Direct Consultation
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl leading-[1.15] text-[#10100F]">
                  LET&apos;S START YOUR <span className="text-[#B08B43]">COMEBACK.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#6E6B65] leading-relaxed">
                  Every enquiry is reviewed personally by a senior partner. Share your objectives in
                  the form or connect immediately via WhatsApp or telephone.
                </p>
              </div>

              <div className="border-t border-[#DEDAD1] divide-y divide-[#DEDAD1]">
                <div className="py-5 flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6E6B65]">
                      Telephone Advisory
                    </p>
                    <a
                      href={CONTACT_DETAILS.phoneHref}
                      className="text-base font-medium text-[#10100F] hover:text-[#B08B43] transition-colors tabular-nums"
                    >
                      {CONTACT_DETAILS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="py-5 flex items-start gap-4">
                  <MessageCircle
                    className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6E6B65]">
                      WhatsApp Direct Desk
                    </p>
                    <a
                      href={CONTACT_DETAILS.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base font-medium text-[#10100F] hover:text-[#B08B43] transition-colors underline decoration-[#C9A45C] underline-offset-4"
                    >
                      Start a Confidential WhatsApp Chat
                    </a>
                  </div>
                </div>

                <div className="py-5 flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6E6B65]">
                      Email Correspondence
                    </p>
                    <a
                      href={CONTACT_DETAILS.emailHref}
                      className="text-base font-medium text-[#10100F] hover:text-[#B08B43] transition-colors break-all"
                    >
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="py-5 flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6E6B65]">
                      Office &amp; Coverage
                    </p>
                    <p className="text-sm text-[#252421] leading-relaxed">
                      {CONTACT_DETAILS.officeLocation}
                    </p>
                  </div>
                </div>

                <div className="py-5 flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6E6B65]">
                      Consultation Hours
                    </p>
                    <p className="text-sm text-[#252421]">{CONTACT_DETAILS.hours}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Structured Enquiry Form */}
            <Reveal
              delay={0.08}
              className="lg:col-span-7 bg-[#FFFFFF] border border-[#DEDAD1] p-6 sm:p-10 lg:p-12"
            >
              <div className="pb-6 mb-8 border-b border-[#DEDAD1] space-y-1.5">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
                  Mandate Brief
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#10100F]">
                  Schedule a Strategic Consultation
                </h3>
              </div>

              <EnquiryForm preselectedService={preselectedService} sourcePage="contact" />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
