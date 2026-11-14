import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { PAGE_METADATA, PRIMARY_NAV } from './data/content';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { PlansPage } from './pages/PlansPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudy, PageRoute } from './types';

function resolveRouteFromPath(pathname: string): PageRoute {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const match = PRIMARY_NAV.find((item) => item.path === normalized);
  return match ? match.route : 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() =>
    resolveRouteFromPath(window.location.pathname)
  );
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const meta = PAGE_METADATA[currentRoute];
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute('content', meta.description);
    }
  }, [currentRoute]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(resolveRouteFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((route: PageRoute, hash?: string) => {
    const navTarget = PRIMARY_NAV.find((item) => item.route === route);
    const targetPath = navTarget ? navTarget.path : '/';
    const url = hash ? `${targetPath}#${hash}` : targetPath;

    if (window.location.pathname + window.location.hash !== url) {
      window.history.pushState({}, '', url);
    }

    setCurrentRoute(route);

    if (hash) {
      window.setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 90);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleEnquireService = useCallback(
    (serviceName: string) => {
      setPreselectedService(serviceName);
      navigate('contact');
    },
    [navigate]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#080807] text-[#F5F3EE]">
      <Navbar currentRoute={currentRoute} onNavigate={navigate} />

      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentRoute === 'home' && (
              <HomePage
                onNavigate={navigate}
                onEnquireService={handleEnquireService}
                onSelectCaseStudy={setActiveCaseStudy}
              />
            )}
            {currentRoute === 'about' && <AboutPage onNavigate={navigate} />}
            {currentRoute === 'services' && (
              <ServicesPage
                onNavigate={navigate}
                onEnquireService={handleEnquireService}
              />
            )}
            {currentRoute === 'plans' && (
              <PlansPage
                onNavigate={navigate}
                onEnquireService={handleEnquireService}
              />
            )}
            {currentRoute === 'partnerships' && <PartnershipsPage />}
            {currentRoute === 'work' && (
              <WorkPage
                onNavigate={navigate}
                onSelectCaseStudy={setActiveCaseStudy}
              />
            )}
            {currentRoute === 'contact' && (
              <ContactPage preselectedService={preselectedService} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer onNavigate={navigate} />
      <WhatsAppFloatingButton />

      <CaseStudyModal
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onSelectCaseStudy={setActiveCaseStudy}
        onEnquire={handleEnquireService}
      />
    </div>
  );
}
