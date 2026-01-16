// ===== Premium Home Design - Type Definitions =====

// Project Types
export interface Project {
  _id: string;
  title: string;
  slug: string;
  location: string;
  year: number;
  type: ProjectType;
  style: ProjectStyle;
  status: ProjectStatus;
  budgetRange?: BudgetRange;
  description: string;
  highlights: string[];
  materials?: string[];
  gallery: ProjectImage[];
  featuredImage: ProjectImage;
  metadata: SEOMetadata;
}

export type ProjectType = 
  | 'custom-home'
  | 'renovation'
  | 'addition'
  | 'commercial';

export type ProjectStyle = 
  | 'modern'
  | 'contemporary'
  | 'traditional'
  | 'transitional'
  | 'mediterranean'
  | 'farmhouse';

export type ProjectStatus = 
  | 'completed'
  | 'in-progress'
  | 'upcoming';

export type BudgetRange = 
  | 'under-500k'
  | '500k-1m'
  | '1m-2m'
  | '2m-5m'
  | 'over-5m';

export interface ProjectImage {
  url: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: string;
  blurDataURL?: string;
}

// Service Types
export interface Service {
  _id: string;
  title: string;
  slug: string;
  description: string;
  packages: ServicePackage[];
  process: ProcessStep[];
  faqs: FAQ[];
  ctaConfig: CTAConfig;
}

export interface ServicePackage {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
}

// Area Types (Local SEO)
export interface AreaServed {
  _id: string;
  city: string;
  region: string;
  slug: string;
  copy: string;
  proof: string[];
  faqs: FAQ[];
  internalLinks: InternalLink[];
  metadata: SEOMetadata;
}

export interface InternalLink {
  title: string;
  href: string;
}

// Insight/Blog Types
export interface Insight {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: InsightCategory;
  author: Author;
  publishedAt: string;
  readTime: number;
  featuredImage: ProjectImage;
  faqs?: FAQ[];
  metadata: SEOMetadata;
}

export type InsightCategory = 
  | 'design-trends'
  | 'construction-tips'
  | 'luxury-living'
  | 'sustainability'
  | 'market-insights';

export interface Author {
  name: string;
  role: string;
  image?: ProjectImage;
}

// Testimonial Types
export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  quote: string;
  source?: string;
  projectRef?: string;
}

// Shared Types
export interface FAQ {
  question: string;
  answer: string;
}

export interface CTAConfig {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

// Concierge Form Types
export interface ConciergeFormData {
  // Step 1: Project Type & Style
  projectType: ProjectType | '';
  projectStyle: ProjectStyle | '';
  
  // Step 2: Location
  location: string;
  hasLot: boolean | null;
  
  // Step 3: Timeline
  timeline: Timeline;
  
  // Step 4: Budget
  budgetRange: BudgetRange | '';
  
  // Step 5: Contact
  name: string;
  email: string;
  phone: string;
  preferredContact: 'call' | 'text' | 'email';
  
  // Additional
  message?: string;
}

export type Timeline = 
  | 'asap'
  | '3-6-months'
  | '6-12-months'
  | '12-plus-months'
  | 'just-exploring';

// Global Settings
export interface GlobalSettings {
  brandName: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  address: Address;
  socialLinks: SocialLinks;
  trackingEnabled: boolean;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  houzz?: string;
}
