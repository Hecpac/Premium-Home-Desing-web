// ===== Premium Home Design - Constants =====

export const SITE_CONFIG = {
  name: 'Premium Home Design',
  tagline: 'Luxury Custom Homes in Dallas',
  description: 'Dallas premier luxury home builder specializing in custom homes, renovations, and architectural excellence.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://premiumhomedesign.com',
  locale: 'en-US',
} as const;

export const COMPANY_INFO = {
  name: 'Premium Home Design',
  email: 'info@premiumhomedesign.com',
  phone: '+1 (214) 555-0100',
  address: {
    street: '123 Luxury Lane',
    city: 'Dallas',
    state: 'TX',
    zip: '75201',
    country: 'USA',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Areas', href: '/areas' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/premiumhomedesign',
  linkedin: 'https://linkedin.com/company/premiumhomedesign',
  houzz: 'https://houzz.com/pro/premiumhomedesign',
} as const;

export const PROJECT_TYPES = [
  { value: 'custom-home', label: 'Custom Home' },
  { value: 'renovation', label: 'Renovation' },
  { value: 'addition', label: 'Addition' },
  { value: 'commercial', label: 'Commercial' },
] as const;

export const PROJECT_STYLES = [
  { value: 'modern', label: 'Modern' },
  { value: 'contemporary', label: 'Contemporary' },
  { value: 'traditional', label: 'Traditional' },
  { value: 'transitional', label: 'Transitional' },
  { value: 'mediterranean', label: 'Mediterranean' },
  { value: 'farmhouse', label: 'Farmhouse' },
] as const;

export const BUDGET_RANGES = [
  { value: 'under-500k', label: 'Under $500K' },
  { value: '500k-1m', label: '$500K - $1M' },
  { value: '1m-2m', label: '$1M - $2M' },
  { value: '2m-5m', label: '$2M - $5M' },
  { value: 'over-5m', label: '$5M+' },
] as const;

export const TIMELINES = [
  { value: 'asap', label: 'As soon as possible' },
  { value: '3-6-months', label: '3-6 months' },
  { value: '6-12-months', label: '6-12 months' },
  { value: '12-plus-months', label: '12+ months' },
  { value: 'just-exploring', label: 'Just exploring' },
] as const;

export const AREAS_SERVED = [
  'Dallas',
  'Highland Park',
  'University Park',
  'Preston Hollow',
  'Turtle Creek',
  'Uptown',
  'Lakewood',
  'White Rock',
  'Plano',
  'Frisco',
  'Southlake',
  'Westlake',
] as const;

// Animation variants for Framer Motion
export const MOTION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
} as const;

// Spring config for Framer Motion (brief requirement: springs only)
export const SPRING_CONFIG = {
  gentle: { type: 'spring', stiffness: 120, damping: 14 },
  snappy: { type: 'spring', stiffness: 400, damping: 30 },
  slow: { type: 'spring', stiffness: 80, damping: 20 },
} as const;
