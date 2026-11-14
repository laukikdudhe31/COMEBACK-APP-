export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'plans'
  | 'partnerships'
  | 'work'
  | 'contact';

export interface NavItem {
  index: string;
  label: string;
  route: PageRoute;
  path: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  category: string;
  title: string;
  shortSummary: string;
  fullDescription: string;
  deliverables: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
}

export interface VisibilityPlan {
  id: string;
  index: string;
  name: string;
  audience: string;
  cadence: string;
  engagementModel: string;
  summary: string;
  deliverables: string[];
  reporting: string;
  featured?: boolean;
}

export interface PartnershipModel {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  focusAreas: string[];
  idealFor: string;
}

export type WorkCategory =
  | 'All'
  | 'PR & Media'
  | 'Brand & Outdoor'
  | 'Fundraising'
  | 'Digital Visibility';

export interface CaseStudy {
  id: string;
  index: string;
  category: Exclude<WorkCategory, 'All'>;
  title: string;
  sectorLabel: string;
  shortDescriptor: string;
  image: string;
  imageAlt: string;
  challenge: string;
  approach: string;
  execution: string[];
  outcome: string;
  relatedService: string;
  sampleNotice: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  contextLabel: string;
}

export interface EnquiryPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceInterestedIn: string;
  message: string;
  sourcePage: PageRoute;
  submittedAt: string;
  referenceId: string;
}
