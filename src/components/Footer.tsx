import { useState } from 'react';
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, X } from 'lucide-react';
import { CONTACT_DETAILS, PRIMARY_NAV, SERVICES } from '../data/content';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute, hash?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [legalDoc, setLegalDoc] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#080807] text-[#F5F3EE] border-t border-[#252421]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-14 border-b border-[#252421]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
                className="font-serif text-xl tracking-[0.14em] uppercase text-[#F5F3EE] hover:text-[#C9A45C] transition-colors inline-block"
              >
                The Comeback Project
              </a>
              <p className="mt-3 font-serif text-lg tracking-wide text-[#C9A45C]">
                YOUR BRAND. OUR OBSESSION.
              </p>
            </div>

            <p className="text-sm leading-relaxed text-[#F5F3EE]/70 max-w-sm">
              A strategic growth partner uniting public relations, media visibility, branding,
              fundraising readiness, and business advisory under one coordinated relationship.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={CONTACT_DETAILS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Comeback Project on LinkedIn"
                className="w-10 h-10 border border-[#2C2A26] flex items-center justify-center text-[#F5F3EE]/80 hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href={CONTACT_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Comeback Project on Instagram"
                className="w-10 h-10 border border-[#2C2A26] flex items-center justify-center text-[#F5F3EE]/80 hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {PRIMARY_NAV.map((item) => (
                <li key={item.route}>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.route);
                    }}
                    className="text-sm text-[#F5F3EE]/75 hover:text-[#C9A45C] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={`/services#${service.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('services', service.id);
                    }}
                    className="text-sm text-[#F5F3EE]/75 hover:text-[#C9A45C] transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Block */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A45C]">
              Advisory Desk
            </h3>
            <ul className="space-y-3.5 text-sm text-[#F5F3EE]/80">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" strokeWidth={1.5} />
                <a
                  href={CONTACT_DETAILS.phoneHref}
                  className="hover:text-[#C9A45C] transition-colors tabular-nums"
                >
                  {CONTACT_DETAILS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle
                  className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <a
                  href={CONTACT_DETAILS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A45C] transition-colors"
                >
                  Direct WhatsApp Consultation
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" strokeWidth={1.5} />
                <a
                  href={CONTACT_DETAILS.emailHref}
                  className="hover:text-[#C9A45C] transition-colors break-all"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[#F5F3EE]/65 leading-relaxed">
                  {CONTACT_DETAILS.officeLocation}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#77736C]">
          <p>
            &copy; {new Date().getFullYear()} The Comeback Project. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalDoc('privacy')}
              className="hover:text-[#F5F3EE] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalDoc('terms')}
              className="hover:text-[#F5F3EE] transition-colors cursor-pointer"
            >
              Terms of Advisory
            </button>
          </div>
        </div>
      </div>

      {/* Legal Policy Modal */}
      {legalDoc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={legalDoc === 'privacy' ? 'Privacy Policy' : 'Terms of Advisory'}
          className="fixed inset-0 z-50 bg-[#080807]/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLegalDoc(null)}
        >
          <div
            className="bg-[#10100F] border border-[#2C2A26] max-w-lg w-full p-6 sm:p-8 text-[#F5F3EE] space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#252421] pb-4">
              <h4 className="font-serif text-2xl text-[#F5F3EE]">
                {legalDoc === 'privacy' ? 'Privacy & Confidentiality Notice' : 'Terms of Engagement'}
              </h4>
              <button
                type="button"
                onClick={() => setLegalDoc(null)}
                aria-label="Close legal notice"
                className="w-9 h-9 flex items-center justify-center border border-[#2C2A26] text-[#F5F3EE]/80 hover:border-[#C9A45C] hover:text-[#C9A45C] cursor-pointer"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
            {legalDoc === 'privacy' ? (
              <div className="space-y-3 text-sm text-[#F5F3EE]/75 leading-relaxed">
                <p>
                  Enquiries submitted to The Comeback Project are treated in strict commercial
                  confidence. Contact information and business briefs are used solely to review your
                  mandate and schedule advisory discussions.
                </p>
                <p>
                  We do not sell, rent, or distribute founder or corporate contact records to third
                  parties. For data deletion or confidentiality agreements prior to sharing sensitive
                  decks, please request a mutual NDA during initial outreach.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm text-[#F5F3EE]/75 leading-relaxed">
                <p>
                  All service outlines, visibility plan frameworks, and representative case briefs
                  presented on this website serve as strategic guidance. Final deliverables,
                  timelines, and commercial terms are governed by a signed Statement of Work or
                  Retainer Agreement.
                </p>
                <p>
                  Editorial placements, broadcast appearances, and fundraising outcomes depend on
                  editorial merit, market conditions, and mutual execution standards.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
