import heroBoardroomImg from '../assets/images/hero_executive_boardroom_1794670005335.jpg';
import aboutFounderImg from '../assets/images/about_founder_skyline_1794670005337.jpg';
import mediaBroadcastImg from '../assets/images/media_broadcast_spotlight_1794670006053.jpg';
import billboardUrbanImg from '../assets/images/billboard_urban_campaign_1794670006253.jpg';
import advisorySessionImg from '../assets/images/advisory_strategy_session_1794670006443.jpg';
import prEditorialImg from '../assets/images/pr_editorial_press_1794670440700.jpg';
import digitalStudioImg from '../assets/images/digital_executive_studio_1794670441918.jpg';
import luxurySummitImg from '../assets/images/luxury_summit_networking_1794670442093.jpg';
import {
  CaseStudy,
  NavItem,
  PageRoute,
  PartnershipModel,
  ServiceItem,
  Testimonial,
  VisibilityPlan,
} from '../types';

export const BRAND_IMAGES = {
  heroBoardroom: heroBoardroomImg,
  aboutFounder: aboutFounderImg,
  mediaBroadcast: mediaBroadcastImg,
  billboardUrban: billboardUrbanImg,
  advisorySession: advisorySessionImg,
  prEditorial: prEditorialImg,
  digitalStudio: digitalStudioImg,
  luxurySummit: luxurySummitImg,
};

export const CONTACT_DETAILS = {
  phoneDisplay: '+91 98200 41200',
  phoneHref: 'tel:+919820041200',
  whatsappNumber: '919820041200',
  whatsappHref:
    'https://wa.me/919820041200?text=Hello%20The%20Comeback%20Project%2C%20I%20would%20like%20to%20schedule%20a%20strategic%20consultation.',
  email: 'advisory@thecomebackproject.com',
  emailHref: 'mailto:advisory@thecomebackproject.com',
  officeLocation: 'Bandra Kurla Complex, Mumbai · Advisory Desks in Delhi NCR & Dubai',
  hours: 'Monday – Saturday, 09:30 – 19:00 IST',
  linkedinUrl: 'https://www.linkedin.com',
  instagramUrl: 'https://www.instagram.com',
};

export const PAGE_METADATA: Record<
  PageRoute,
  { title: string; description: string }
> = {
  home: {
    title: 'The Comeback Project | Strategic Growth, PR & Brand Advisory',
    description:
      'Your Brand. Our Obsession. A strategic growth partner uniting PR, television appearances, outdoor campaigns, digital visibility, investor relations, and business consulting.',
  },
  about: {
    title: 'About Us | The Comeback Project',
    description:
      'We believe every business deserves its moment. Discover how The Comeback Project aligns narrative, media authority, and commercial strategy under one roof.',
  },
  services: {
    title: 'Our Services | The Comeback Project',
    description:
      'Explore integrated growth mandates across Public Relations, Television Stories, Outdoor Advertising, Digital Visibility, Investor Relations, and Startup Consulting.',
  },
  plans: {
    title: 'Annual Visibility Plans | The Comeback Project',
    description:
      'Structured recurring visibility retainers built for steady authority, media momentum, and executive positioning throughout the year.',
  },
  partnerships: {
    title: 'Enterprise Partnerships | The Comeback Project',
    description:
      'Big ambitions require bigger partnerships. Tailored long-term collaborations for enterprises, high-growth startups, and executive leadership teams.',
  },
  work: {
    title: 'Our Work & Case Studies | The Comeback Project',
    description:
      'Stories of momentum across PR campaigns, broadcast features, brand positioning, outdoor spectacles, and fundraising narratives.',
  },
  contact: {
    title: 'Contact & Book a Consultation | The Comeback Project',
    description:
      'Your next big opportunity starts with one conversation. Connect with The Comeback Project advisory desk via enquiry form, WhatsApp, or direct call.',
  },
};

export const PRIMARY_NAV: NavItem[] = [
  {
    index: '01',
    label: 'Home',
    route: 'home',
    path: '/',
    description: 'Agency overview & integrated growth mandate',
  },
  {
    index: '02',
    label: 'About Us',
    route: 'about',
    path: '/about',
    description: 'Our philosophy, vision & strategic model',
  },
  {
    index: '03',
    label: 'Our Services',
    route: 'services',
    path: '/services',
    description: 'Six specialised PR, media & advisory pillars',
  },
  {
    index: '04',
    label: 'Annual Visibility Plans',
    route: 'plans',
    path: '/plans',
    description: 'Structured year-round brand & media retainers',
  },
  {
    index: '05',
    label: 'Enterprise Partnerships',
    route: 'partnerships',
    path: '/partnerships',
    description: 'Collaborations for enterprises, startups & founders',
  },
  {
    index: '06',
    label: 'Our Work',
    route: 'work',
    path: '/work',
    description: 'Representative case briefs & campaign momentum',
  },
  {
    index: '07',
    label: 'Contact',
    route: 'contact',
    path: '/contact',
    description: 'Start a confidential consultation',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'public-relations',
    index: '01',
    category: 'Media Authority',
    title: 'Public Relations & Media Coverage',
    shortSummary:
      'Strategic press narratives, tier-one editorial placements, and reputation architecture that establish undeniable market authority.',
    fullDescription:
      'Credibility precedes every major commercial breakthrough. We craft compelling editorial angles, manage press outreach across leading business and lifestyle publications, and shape executive commentary so your brand commands trust among customers, partners, and institutional stakeholders.',
    deliverables: [
      'Editorial Narrative & Press Kit Architecture',
      'National & Trade Publication Outreach',
      'Founder Thought-Leadership & Byline Strategy',
      'Product Launch & Milestone Media Desk',
    ],
    tags: ['Press Strategy', 'Editorial Placements', 'Founder Profiling', 'Reputation Advisory'],
    image: prEditorialImg,
    imageAlt: 'Senior communications strategist reviewing editorial magazine proofs and broadsheet press spreads',
    ctaLabel: 'Enquire About Public Relations',
  },
  {
    id: 'television-stories',
    index: '02',
    category: 'Broadcast Presence',
    title: 'Television Stories & Media Appearances',
    shortSummary:
      'Curated broadcast features, business channel interviews, and panel appearances that place leadership voices in front of national audiences.',
    fullDescription:
      'Television and broadcast syndication offer unmatched legitimacy when executed with precision. From preparing founders for live studio conversations to coordinating scripted brand features and industry panels, we manage the editorial framing and media readiness end to end.',
    deliverables: [
      'Broadcast Story Pitching & Producer Liaison',
      'Executive Media Training & Message Discipline',
      'Business News Panel & Roundtable Placements',
      'Post-Broadcast Syndication & Clip Packaging',
    ],
    tags: ['Broadcast Features', 'Studio Interviews', 'Executive Media Prep', 'Syndication'],
    image: mediaBroadcastImg,
    imageAlt: 'Leadership figure delivering commentary during a televised studio interview',
    ctaLabel: 'Enquire About Broadcast Appearances',
  },
  {
    id: 'outdoor-advertising',
    index: '03',
    category: 'Physical Spectacle',
    title: 'Outdoor Advertising & Billboard Campaigns',
    shortSummary:
      'High-impact OOH placements across prime business corridors, airports, and arterial avenues designed for unmistakable city-scale presence.',
    fullDescription:
      'Physical presence signals institutional permanence. We plan and oversee high-visibility outdoor campaigns—from flagship highway hoardings and airport concourses to luxury retail corridors—pairing sharp editorial creative direction with strategic media buying.',
    deliverables: [
      'Corridor & Transit Hub Site Selection',
      'Minimalist Luxury OOH Creative Direction',
      'Multi-City Campaign Rollout Coordination',
      'Integrated Print, Digital & OOH Synchronization',
    ],
    tags: ['Flagship Hoardings', 'Airport Transit', 'OOH Creative', 'Metro Rollouts'],
    image: billboardUrbanImg,
    imageAlt: 'Illuminated luxury brand billboard along an upscale metropolitan boulevard at dusk',
    ctaLabel: 'Enquire About Outdoor Campaigns',
  },
  {
    id: 'digital-visibility',
    index: '04',
    category: 'Digital Authority',
    title: 'Digital Visibility Solutions',
    shortSummary:
      'Coordinated search presence, executive LinkedIn positioning, content ecosystems, and digital reputation management for modern buyers.',
    fullDescription:
      'Every offline introduction leads to an online search. We align your digital footprint with the calibre of your ambition—uniting brand storytelling, search-first reputation management, executive social authority, and targeted amplification.',
    deliverables: [
      'Executive LinkedIn & Leadership Positioning',
      'Search Reputation & Brand Narrative Alignment',
      'Editorial Video & Digital Campaign Direction',
      'Performance & Conversion Funnel Architecture',
    ],
    tags: ['Executive Presence', 'Search Authority', 'Digital Campaigns', 'Brand Storytelling'],
    image: digitalStudioImg,
    imageAlt: 'Founder and brand director reviewing digital brand architecture in a dark walnut studio',
    ctaLabel: 'Enquire About Digital Visibility',
  },
  {
    id: 'investor-relations',
    index: '05',
    category: 'Capital Readiness',
    title: 'Investor Relations & Fundraising Assistance',
    shortSummary:
      'Institutional pitch narratives, capital-raising materials, and strategic stakeholder visibility designed to sharpen investor conviction.',
    fullDescription:
      'Capital flows toward clarity and conviction. We partner with founders and growth-stage boards to refine investment theses, elevate pitch decks and data-room narratives, and synchronize pre-raise media visibility with targeted investor outreach.',
    deliverables: [
      'Investment Thesis & Pitch Deck Refinement',
      'Pre-Raise Market Credibility Campaigns',
      'Stakeholder & Institutional Communications',
      'Founder Narrative Coaching for Investor Meetings',
    ],
    tags: ['Pitch Architecture', 'Capital Narrative', 'Pre-Raise PR', 'Stakeholder Alignment'],
    image: advisorySessionImg,
    imageAlt: 'Advisors reviewing investment portfolios around a dark marble boardroom table',
    ctaLabel: 'Enquire About Investor Relations',
  },
  {
    id: 'startup-consulting',
    index: '06',
    category: 'Flagship Advisory',
    title: 'Startup & Business Consulting',
    shortSummary:
      'End-to-end strategic guidance from early concept to scalable enterprise across company formation, business models, go-to-market strategy, and growth.',
    fullDescription:
      'Built for founders who refuse to treat growth as guesswork. We serve as an embedded strategic partner from initial validation through institutional scaling—aligning company structure, commercial positioning, go-to-market execution, operational discipline, and fundraising readiness under one roof.',
    deliverables: [
      'Startup Setup & Commercial Model Architecture',
      'Go-To-Market Strategy & Category Positioning',
      'Revenue Operations & Growth Advisory',
      'Scale-Up Governance & Fundraising Readiness',
    ],
    tags: ['Startup Setup', 'Business Strategy', 'GTM', 'Scaling', 'Growth Advisory'],
    image: aboutFounderImg,
    imageAlt: 'Founder overlooking a financial skyline from a glass architectural suite',
    ctaLabel: 'Enquire About Business Consulting',
  },
];

export const VISIBILITY_PLANS: VisibilityPlan[] = [
  {
    id: 'foundation-retainer',
    index: '01',
    name: 'Foundation Authority',
    audience: 'Seed-to-Series A startups & emerging regional brands building baseline credibility.',
    cadence: 'Annual Commitment · Quarterly Campaign Sprints',
    engagementModel: 'Custom Retainer · Request Proposal',
    summary:
      'Establishes a disciplined media, executive, and digital footprint so every stakeholder search reflects institutional seriousness.',
    deliverables: [
      'Core brand narrative & founder press dossier',
      'Ongoing editorial pitching & milestone communications',
      'Executive LinkedIn positioning & editorial calendar',
      'Quarterly strategic review with senior advisors',
    ],
    reporting: 'Monthly visibility brief & quarterly reputation audit',
  },
  {
    id: 'momentum-retainer',
    index: '02',
    name: 'Momentum Growth',
    audience: 'Scaling mid-market companies & funded ventures expanding into new territories or verticals.',
    cadence: 'Annual Commitment · Monthly Integrated Cycles',
    engagementModel: 'Custom Retainer · Request Proposal',
    summary:
      'Coordinates multi-channel PR, broadcast opportunities, digital authority, and commercial advisory into a continuous momentum engine.',
    deliverables: [
      'Integrated national PR & broadcast story coordination',
      'Strategic digital visibility & leadership profiling',
      'Quarterly go-to-market & stakeholder alignment workshops',
      'Dedicated advisory lead & priority campaign desk',
    ],
    reporting: 'Bi-weekly editorial status & quarterly commercial impact synthesis',
    featured: true,
  },
  {
    id: 'flagship-retainer',
    index: '03',
    name: 'Flagship Dominance',
    audience: 'Established enterprises, category leaders & pre-IPO / institutional fundraising mandates.',
    cadence: '12-Month Dedicated Mandate · Continuous Execution',
    engagementModel: 'Bespoke Mandate · Executive Briefing',
    summary:
      'Full-spectrum strategic partnership uniting tier-one media, outdoor spectacles, investor communications, and C-suite brand stewardship.',
    deliverables: [
      'Multi-city PR, television & flagship OOH campaign orchestration',
      'C-suite reputation & institutional investor communications',
      'Board-level strategic growth & partnership advisory',
      'Crisis readiness & high-stakes announcement management',
    ],
    reporting: 'Weekly executive briefing & bespoke board reporting pack',
  },
];

export const PLAN_COMPARISON_ROWS = [
  {
    feature: 'Strategic Brand & Narrative Architecture',
    foundation: 'Annual Audit + Core Messaging',
    momentum: 'Quarterly Narrative Evolution',
    flagship: 'Continuous C-Suite Stewardship',
  },
  {
    feature: 'Public Relations & Media Desk',
    foundation: 'Milestone & Trade Outreach',
    momentum: 'National & Broadcast Campaigns',
    flagship: 'Tier-One National & Global Desk',
  },
  {
    feature: 'Outdoor & Physical Campaigns',
    foundation: 'Advisory Add-On',
    momentum: 'Regional Activation Support',
    flagship: 'Multi-City Flagship Orchestration',
  },
  {
    feature: 'Digital & Executive Positioning',
    foundation: 'Founder Profile Calibration',
    momentum: 'Full Leadership Content Engine',
    flagship: 'Enterprise-Wide Digital Authority',
  },
  {
    feature: 'Investor & Business Advisory',
    foundation: 'Quarterly Strategy Check-In',
    momentum: 'Monthly Growth & GTM Counsel',
    flagship: 'Dedicated Senior Partner Access',
  },
  {
    feature: 'Measurement & Reporting',
    foundation: 'Monthly Visibility Brief',
    momentum: 'Bi-Weekly + Quarterly Synthesis',
    flagship: 'Weekly Executive Board Pack',
  },
];

export const PARTNERSHIP_MODELS: PartnershipModel[] = [
  {
    id: 'enterprise-collaborations',
    index: '01',
    title: 'Enterprise Collaborations',
    subtitle: 'Long-Term Brand & Market Programmes',
    summary:
      'Structured multi-quarter mandates for established corporations seeking cohesive market repositioning, national visibility, and cross-channel brand stewardship.',
    focusAreas: [
      'Corporate Reputation & Category Leadership',
      'National PR, Broadcast & OOH Synchronization',
      'New Market & Product Vertical Launches',
    ],
    idealFor: 'Established enterprises & institutional groups',
  },
  {
    id: 'startup-growth-alliances',
    index: '02',
    title: 'Startup Growth Alliances',
    subtitle: 'Structured Support for High-Potential Ventures',
    summary:
      'High-conviction growth alliances pairing commercial strategy, market validation, media credibility, and investor readiness for ambitious founders.',
    focusAreas: [
      'Go-To-Market & Commercial Model Sharpening',
      'Pre-Raise Visibility & Investor Narrative',
      'Category-Defining Brand Positioning',
    ],
    idealFor: 'Seed to Series B ventures preparing to scale',
  },
  {
    id: 'founder-leadership-partnerships',
    index: '03',
    title: 'Founder & Leadership Partnerships',
    subtitle: 'Executive Brand & Thought-Leadership Mandates',
    summary:
      'Bespoke personal brand programmes that transform founders, promoters, and C-suite leaders into respected industry voices across print, television, and digital forums.',
    focusAreas: [
      'Executive Authority & Media Interview Prep',
      'Keynote, Panel & Award Jury Positioning',
      'Curated LinkedIn & Editorial Thought Leadership',
    ],
    idealFor: 'Founders, managing directors & executive boards',
  },
  {
    id: 'strategic-co-initiatives',
    index: '04',
    title: 'Strategic Co-Initiatives',
    subtitle: 'Events, Platforms & Joint Market Ventures',
    summary:
      'Collaborative curation of invite-only leadership summits, industry roundtables, editorial properties, and co-branded platforms that create shared commercial gravity.',
    focusAreas: [
      'Curated Executive Roundtables & Summits',
      'Co-Branded Media & Thought-Leadership Properties',
      'Cross-Industry Ecosystem Alliances',
    ],
    idealFor: 'Industry associations, funds & multi-brand ecosystems',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'meridian-capital-reposition',
    index: '01',
    category: 'PR & Media',
    title: 'Repositioning a Boutique Wealth Advisory for National Prominence',
    sectorLabel: 'Financial Services · Representative Case Brief',
    shortDescriptor:
      'Coordinated business press, broadcast commentary, and founder profiling to shift perception from regional firm to national institutional voice.',
    image: prEditorialImg,
    imageAlt: 'Communications strategist reviewing national financial press spreads and editorial proofs',
    challenge:
      'Despite managing substantial client assets, the firm lacked structured media presence outside local referrals, limiting institutional inbound mandates.',
    approach:
      'We re-engineered the firm’s editorial voice around macro wealth preservation, anchoring commentary in disciplined quarterly research releases.',
    execution: [
      'Authored a flagship thought-leadership series for national financial dailies',
      'Prepared managing partners for live business television panel appearances',
      'Aligned executive LinkedIn narratives with published press commentary',
    ],
    outcome:
      'Established consistent national press visibility and elevated inbound inquiries from family offices and corporate treasuries.',
    relatedService: 'Public Relations & Media Coverage',
    sampleNotice: 'Illustrative Case Brief · Structured to demonstrate engagement methodology',
  },
  {
    id: 'aurelia-ooh-launch',
    index: '02',
    category: 'Brand & Outdoor',
    title: 'City-Scale OOH & Launch Spectacle for a Luxury Urban Hospitality Group',
    sectorLabel: 'Hospitality & Lifestyle · Representative Case Brief',
    shortDescriptor:
      'Minimalist architectural billboards across airport corridors synchronized with curated launch-night press previews.',
    image: billboardUrbanImg,
    imageAlt: 'Evening metropolitan billboard display illuminating an upscale avenue',
    challenge:
      'A flagship property launch needed to command immediate cultural prestige among affluent travelers and corporate decision-makers ahead of opening quarter.',
    approach:
      'Instead of cluttered promotional discounts, we crafted a restrained black-ivory-gold visual language across prime transit and boulevard touchpoints.',
    execution: [
      'Secured high-dwell airport arrival corridors and financial district hoardings',
      'Paired outdoor creative with an invite-only editorial preview for lifestyle editors',
      'Synchronized launch-week digital storytelling with physical city presence',
    ],
    outcome:
      'Achieved strong launch-quarter brand recall across target executive cohorts and sustained editorial coverage through opening season.',
    relatedService: 'Outdoor Advertising & Billboard Campaigns',
    sampleNotice: 'Illustrative Case Brief · Structured to demonstrate engagement methodology',
  },
  {
    id: 'velox-series-b-narrative',
    index: '03',
    category: 'Fundraising',
    title: 'Pre-Raise Narrative & Investor Readiness for an Industrial Mobility Venture',
    sectorLabel: 'Clean Mobility & Tech · Representative Case Brief',
    shortDescriptor:
      'Sharpened unit-economics storytelling, institutional pitch deck architecture, and pre-raise trade media visibility.',
    image: advisorySessionImg,
    imageAlt: 'Strategic advisory team reviewing investor presentation decks around a walnut table',
    challenge:
      'Strong operational traction was obscured by fragmented messaging across technical documents, delaying high-conviction institutional term sheets.',
    approach:
      'Our consulting and investor-relations desk consolidated commercial proof points into a disciplined growth thesis before formal roadshow outreach.',
    execution: [
      'Restructured the Series B narrative deck around defensible commercial moats',
      'Executed a 90-day pre-raise trade PR calendar highlighting enterprise deployments',
      'Coached founders through mock institutional Q&A and valuation framing',
    ],
    outcome:
      'Entered investor roadshows with unified market proof, shorter diligence cycles, and heightened strategic partner interest.',
    relatedService: 'Investor Relations & Fundraising Assistance',
    sampleNotice: 'Illustrative Case Brief · Structured to demonstrate engagement methodology',
  },
  {
    id: 'solaris-digital-authority',
    index: '04',
    category: 'Digital Visibility',
    title: 'Founder Authority & Digital Footprint Overhaul for a B2B SaaS Scale-Up',
    sectorLabel: 'Enterprise Software · Representative Case Brief',
    shortDescriptor:
      'Unified executive social presence, search reputation, and category-defining digital storytelling for enterprise procurement buyers.',
    image: digitalStudioImg,
    imageAlt: 'Founder and creative director reviewing enterprise digital brand architecture',
    challenge:
      'Enterprise buyers conducting due diligence encountered inconsistent founder profiles and outdated product pages that undersold enterprise readiness.',
    approach:
      'We aligned digital touchpoints around clear enterprise outcomes, customer proof architecture, and disciplined executive publishing.',
    execution: [
      'Rebuilt executive LinkedIn presence with weekly category analysis essays',
      'Curated high-contrast visual storytelling across flagship landing assets',
      'Aligned search visibility with analyst and industry directory profiles',
    ],
    outcome:
      'Transformed organic executive credibility into a consistent source of enterprise discovery conversations.',
    relatedService: 'Digital Visibility Solutions',
    sampleNotice: 'Illustrative Case Brief · Structured to demonstrate engagement methodology',
  },
  {
    id: 'kestrel-broadcast-series',
    index: '05',
    category: 'PR & Media',
    title: 'National Broadcast Feature & Policy Dialogue for a Logistics Leader',
    sectorLabel: 'Infrastructure & Logistics · Representative Case Brief',
    shortDescriptor:
      'Positioned leadership at the center of national supply-chain discourse through televised studio features and industry roundtables.',
    image: heroBoardroomImg,
    imageAlt: 'Leadership group in a dark modern boardroom overlooking city skyline',
    challenge:
      'A fast-growing logistics operator needed institutional recognition among enterprise manufacturers and policy stakeholders.',
    approach:
      'We elevated operational milestones into a broader national infrastructure conversation worthy of prime business broadcast programming.',
    execution: [
      'Secured studio interview segments on leading business television networks',
      'Co-hosted an executive supply-chain roundtable with trade editors',
      'Amplified broadcast excerpts across investor and enterprise partner channels',
    ],
    outcome:
      'Positioned the leadership team as go-to industry commentators and strengthened enterprise RFP credibility.',
    relatedService: 'Television Stories & Media Appearances',
    sampleNotice: 'Illustrative Case Brief · Structured to demonstrate engagement methodology',
  },
  {
    id: 'atelier-gtm-turnaround',
    index: '06',
    category: 'Brand & Outdoor',
    title: 'Commercial Turnaround & Brand Architecture for a Heritage Consumer Group',
    sectorLabel: 'Consumer Luxury · Representative Case Brief',
    shortDescriptor:
      'Modernized brand positioning, go-to-market channel strategy, and flagship urban visibility for a third-generation business.',
    image: luxurySummitImg,
    imageAlt: 'Distinguished executives conversing in an intimate architectural lounge',
    challenge:
      'Strong legacy manufacturing capability was losing younger premium buyers due to dated packaging, fragmented messaging, and stagnant retail perception.',
    approach:
      'We combined startup-grade GTM consulting with luxury editorial repositioning to bridge heritage trust with contemporary desirability.',
    execution: [
      'Redefined brand architecture and flagship product tiering',
      'Rolled out coordinated metropolitan OOH and digital launch narratives',
      'Aligned distributor incentives and direct-to-consumer flagship communications',
    ],
    outcome:
      'Revitalized retail partner enthusiasm and established a modern luxury identity capable of commanding premium margins.',
    relatedService: 'Startup & Business Consulting',
    sampleNotice: 'Illustrative Case Brief · Structured to demonstrate engagement methodology',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote:
      'Before working with The Comeback Project, our PR, investor narrative, and digital presence operated in disconnected silos. Within one quarter, they unified how our leadership speaks to media, enterprise clients, and capital partners.',
    author: 'Vikramaditya Menon',
    role: 'Managing Partner, Meridian Strategic Holdings · Representative Partner Endorsement',
    contextLabel: 'Integrated PR & Investor Narrative',
  },
  {
    id: 't-2',
    quote:
      'They operate less like an external vendor and more like an extension of the founder’s office. From sharpening our go-to-market model to securing national broadcast visibility, every recommendation carried commercial discipline.',
    author: 'Ananya Deshmukh',
    role: 'Co-Founder & CEO, Velox Mobility Systems · Representative Partner Endorsement',
    contextLabel: 'Startup Consulting & Broadcast Visibility',
  },
  {
    id: 't-3',
    quote:
      'Their restraint and editorial taste set them apart. Our metropolitan outdoor campaign and press preview felt cohesive, authoritative, and unmistakably aligned with the luxury category we wanted to lead.',
    author: 'Rohan Malhotra',
    role: 'Director, Atelier Heritage Group · Representative Partner Endorsement',
    contextLabel: 'OOH Campaign & Brand Repositioning',
  },
];

export const ABOUT_PRINCIPLES = [
  {
    index: '01',
    title: 'Credibility Before Volume',
    description:
      'Noise is inexpensive; authority is earned. Every placement, partnership, and campaign is chosen to compound long-term institutional trust.',
  },
  {
    index: '02',
    title: 'Strategy & Visibility Unified',
    description:
      'Public relations without commercial clarity falls flat. We align business strategy, fundraising readiness, and media execution under one roof.',
  },
  {
    index: '03',
    title: 'Editorial Restraint & Precision',
    description:
      'Luxury positioning relies on what is deliberately refined—sharp headlines, disciplined timing, and high-contrast storytelling.',
  },
];

export const ABOUT_DIFFERENTIATORS = [
  {
    index: '01',
    title: 'Integrated Growth Solutions',
    description:
      'PR, broadcast, outdoor, digital, fundraising readiness, and business advisory coordinated by a single strategic partner.',
  },
  {
    index: '02',
    title: 'Strategic Media & Brand Connections',
    description:
      'Direct relationships across business publications, broadcast desks, OOH networks, and industry leadership forums.',
  },
  {
    index: '03',
    title: 'Fundraising Support & Readiness',
    description:
      'Sharpened pitch architecture, institutional storytelling, and pre-raise visibility calibrated for serious capital conversations.',
  },
  {
    index: '04',
    title: 'Founder & Executive Visibility',
    description:
      'Deliberate personal brand stewardship turning promoters and C-suite leaders into sought-after category authorities.',
  },
  {
    index: '05',
    title: 'National & International Exposure',
    description:
      'Scalable campaign footprints spanning premier metropolitan hubs, business corridors, and cross-border markets.',
  },
  {
    index: '06',
    title: 'Commercial Business Development',
    description:
      'Visibility engineered not as vanity applause, but as a catalyst for enterprise contracts, partnerships, and market expansion.',
  },
];
