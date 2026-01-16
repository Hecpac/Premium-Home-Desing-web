// Site configuration constants
export const SITE_CONFIG = {
    name: "Premium Home Design",
    tagline: "Dallas Luxury Builder",
    description:
        "Premium Home Design is a luxury custom home builder in Dallas, Texas. We specialize in high-end residential construction, renovations, and architectural design.",
    url: "https://premiumhome.design",
    locale: "en_US",
    themeColor: "#111111",
} as const;

export const COMPANY_INFO = {
    phone: "(214) 555-0100",
    email: "hello@premiumhome.design",
    address: {
        street: "2500 Cedar Springs Rd, Suite 350",
        city: "Dallas",
        state: "TX",
        zip: "75201",
    },
} as const;

export const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = {
    instagram: "https://instagram.com/premiumhomedesign",
    linkedin: "https://linkedin.com/company/premiumhomedesign",
    houzz: "https://houzz.com/pro/premiumhomedesign",
} as const;

export const AREAS_SERVED = [
    "Dallas",
    "Highland Park",
    "University Park",
    "Preston Hollow",
    "Lakewood",
    "Uptown",
    "Frisco",
    "Plano",
    "Southlake",
    "Westlake",
] as const;

// Framer Motion spring configurations
export const SPRING_CONFIG = {
    snappy: { type: "spring", stiffness: 400, damping: 30 },
    smooth: { type: "spring", stiffness: 300, damping: 25 },
    gentle: { type: "spring", stiffness: 200, damping: 20 },
} as const;
