import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import { CONTACT_DETAILS, PRIMARY_NAV } from '../data/content';
import { PageRoute } from '../types';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, hash?: string) => void;
}

const DESKTOP_MIDDLE_LINKS: { label: string; route: PageRoute }[] = [
  { label: 'About Us', route: 'about' },
  { label: 'Our Services', route: 'services' },
  { label: 'Visibility Plans', route: 'plans' },
  { label: 'Partnerships', route: 'partnerships' },
  { label: 'Our Work', route: 'work' },
];

export function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = (route: PageRoute) => {
    setMenuOpen(false);
    onNavigate(route);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
          scrolled || currentRoute !== 'home'
            ? 'bg-[#080807]/95 backdrop-blur-md border-b border-[#252421]'
            : 'bg-gradient-to-b from-[#080807]/90 via-[#080807]/55 to-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line brand wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="font-serif text-base sm:text-lg lg:text-xl tracking-[0.15em] uppercase text-[#F5F3EE] hover:text-[#C9A45C] transition-colors whitespace-nowrap shrink-0"
          >
            The Comeback Project
          </a>

          {/* Zone 2: Concise single-line desktop nav links with animated gold underline */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-xs tracking-[0.14em] uppercase font-medium"
          >
            {DESKTOP_MIDDLE_LINKS.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <a
                  key={item.route}
                  href={`/${item.route}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.route);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#C9A45C]'
                      : 'text-[#F5F3EE]/85 hover:text-[#FFFFFF]'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 bottom-0 h-px bg-[#C9A45C] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Single primary CTA on desktop + compact square hamburger menu on mobile/tablet */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C9A45C] text-[#080807] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#d8b46e] transition-all duration-200 hover:-translate-y-[1px] whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book Consultation
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="global-navigation-drawer"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-[#C9A45C]/55 bg-[#10100F]/85 text-[#F5F3EE] hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-height dark editorial drawer for mobile/tablet navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="global-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#080807] text-[#F5F3EE] flex flex-col justify-between overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="px-5 sm:px-8 h-16 flex items-center justify-between border-b border-[#C9A45C]/25 shrink-0">
              <button
                type="button"
                onClick={() => handleLinkClick('home')}
                className="font-serif text-base tracking-[0.15em] uppercase text-[#F5F3EE] whitespace-nowrap shrink-0 cursor-pointer"
              >
                The Comeback Project
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex items-center justify-center w-11 h-11 border border-[#C9A45C]/55 text-[#F5F3EE] hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Numbered Navigation Links separated by thin gold/grey horizontal rules */}
            <nav
              aria-label="Mobile Navigation"
              className="px-5 sm:px-8 py-6 flex-1 flex flex-col justify-center max-w-xl w-full mx-auto"
            >
              <ul className="divide-y divide-[#252421] border-y border-[#C9A45C]/25">
                {PRIMARY_NAV.map((item, idx) => {
                  const isActive = currentRoute === item.route;
                  return (
                    <motion.li
                      key={item.route}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.28,
                        delay: prefersReducedMotion ? 0 : 0.04 + idx * 0.03,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleLinkClick(item.route)}
                        aria-current={isActive ? 'page' : undefined}
                        className="w-full py-3.5 sm:py-4 flex items-center justify-between gap-4 text-left group cursor-pointer"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="text-xs font-medium tracking-[0.16em] text-[#C9A45C] tabular-nums">
                            {item.index}
                          </span>
                          <span
                            className={`font-serif text-xl sm:text-2xl tracking-tight transition-colors ${
                              isActive
                                ? 'text-[#C9A45C]'
                                : 'text-[#F5F3EE] group-hover:text-[#C9A45C]'
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                        <ArrowRight
                          className="w-4 h-4 text-[#77736C] group-hover:text-[#C9A45C] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                          strokeWidth={1.5}
                        />
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Drawer Bottom CTA & Direct Phone Contact */}
            <div className="px-5 sm:px-8 pb-8 pt-4 max-w-xl w-full mx-auto space-y-4 shrink-0">
              <button
                type="button"
                onClick={() => handleLinkClick('contact')}
                className="w-full py-4 px-6 bg-[#C9A45C] text-[#080807] text-xs font-semibold tracking-[0.16em] uppercase flex items-center justify-center gap-3 hover:bg-[#d8b46e] transition-colors cursor-pointer"
              >
                <span>Let&apos;s Build Your Comeback</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#F5F3EE]/80 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#C9A45C]" strokeWidth={1.5} />
                <a
                  href={CONTACT_DETAILS.phoneHref}
                  className="tracking-[0.08em] hover:text-[#C9A45C] transition-colors tabular-nums"
                >
                  {CONTACT_DETAILS.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
