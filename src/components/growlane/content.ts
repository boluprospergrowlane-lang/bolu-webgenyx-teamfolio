// Images live in /public/images so they load on any host (Lovable, Vercel, etc.).
const heroCommerce = { url: "/images/hero-commerce.webp" };
const jewelryStilllife = { url: "/images/jewelry-stilllife.webp" };
const fashionEditorial = { url: "/images/fashion-editorial.webp" };
const storefrontMockup = { url: "/images/storefront-mockup.webp" };
const productPageSample = { url: "/images/product-page-sample.webp" };
const ecommerceHomepage = { url: "/images/ecommerce-homepage-sample.webp" };
const conversionSample = { url: "/images/conversion-optimization-sample.webp" };
const boluPhoto = { url: "/images/bolu-prosper.webp" };
const webgenyxPhoto = { url: "/images/webgenyx.webp" };
const festusPhoto = { url: "/images/festus-zentryve.jpg" };
const marcusPhoto = { url: "/images/marcus-chen.jpg" };

export const heroImage = heroCommerce.url;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our work" },
  { href: "#team", label: "Team" },
];

export type ServiceIcon =
  | "bag"
  | "refresh"
  | "dashboard"
  | "gem"
  | "search"
  | "settings"
  | "chart"
  | "panels"
  | "arrow";

export const services: { title: string; text: string; icon: ServiceIcon }[] = [
  {
    title: "Shopify Store Design",
    text: "Professional Shopify stores designed to reflect each brand's identity and provide excellent shopping experiences.",
    icon: "bag",
  },
  {
    title: "Shopify Store Redesign",
    text: "Transform outdated or poorly structured stores into modern, professional, and user-friendly websites.",
    icon: "refresh",
  },
  {
    title: "E-commerce Website Creation",
    text: "Build professional websites for businesses looking to establish their online presence.",
    icon: "dashboard",
  },
  {
    title: "Jewelry Business Solutions",
    text: "Help jewelry brands showcase their collections through elegant product presentation, professional website design, and effective e-commerce solutions.",
    icon: "gem",
  },
  {
    title: "Product Research",
    text: "Research suitable products based on market demand, competition, and business opportunities.",
    icon: "search",
  },
  {
    title: "Product Setup & Optimization",
    text: "Professional product listings, descriptions, images, collections, and product page organization.",
    icon: "settings",
  },
  {
    title: "Conversion Rate Optimization",
    text: "Improve website structure, navigation, product pages, and shopping experiences to encourage more purchases.",
    icon: "chart",
  },
  {
    title: "Store Management",
    text: "Ongoing Shopify store management, maintenance, product updates, and optimization.",
    icon: "panels",
  },
  {
    title: "E-commerce Growth Strategies",
    text: "Practical strategies to improve online visibility, attract relevant traffic, and support business growth.",
    icon: "arrow",
  },
];

export const reasons = [
  "Experienced and dedicated team",
  "Professional website design",
  "Customer-focused solutions",
  "Mobile-friendly development",
  "Attention to detail",
  "Business-focused strategies",
  "Reliable project support",
  "Commitment to quality",
];

export const processSteps = [
  {
    title: "Discovery",
    text: "Understanding the client's business, brand identity, goals, and requirements.",
  },
  {
    title: "Planning",
    text: "Developing the website structure, design direction, and project strategy.",
  },
  {
    title: "Development",
    text: "Building and customizing the website to meet the client's requirements.",
  },
  {
    title: "Launch & Support",
    text: "Testing, launching, and providing ongoing support where agreed.",
  },
];

export type Project = {
  title: string;
  category: string;
  text: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    title: "Jewelry Shopify Store Design",
    category: "Jewelry e-commerce",
    text: "An editorial storefront concept built around considered product imagery and a clear shopping journey.",
    image: jewelryStilllife.url,
    alt: "Gold hoops and a fine pendant arranged on ivory silk and pale stone.",
  },
  {
    title: "Fashion E-commerce Website",
    category: "Fashion e-commerce",
    text: "A calm, image-led sample concept for a contemporary clothing collection.",
    image: fashionEditorial.url,
    alt: "A model in a white linen top wearing understated gold jewelry.",
  },
  {
    title: "Shopify Store Redesign",
    category: "Store redesign",
    text: "A responsive storefront study that brings desktop and mobile shopping into one coherent experience.",
    image: storefrontMockup.url,
    alt: "Fictional jewelry shop interface shown on a desktop browser and smartphone.",
  },
  {
    title: "Jewelry Product Page Design",
    category: "Product experience",
    text: "A product-page direction that gives a single jewelry piece room to stand out.",
    image: productPageSample.url,
    alt: "A sculptural gold signet ring on softly folded ivory silk.",
  },
  {
    title: "E-commerce Homepage Development",
    category: "Homepage concept",
    text: "A fashion storefront homepage concept with a clear first impression and easy-to-scan collection layout.",
    image: ecommerceHomepage.url,
    alt: "Laptop and phone presenting a fictional clothing-store homepage concept.",
  },
  {
    title: "Product Page Optimization",
    category: "Conversion experience",
    text: "A sample interface study focused on clearer product choice, imagery and next steps.",
    image: conversionSample.url,
    alt: "Desktop and mobile mockups of a fictional jewelry product-page experience.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  text: string;
  note: string;
  photo: string;
  /** CSS object-position so the face sits well inside the card. */
  photoPosition: string;
};

export const team: TeamMember[] = [
  {
    name: "Bolu Prosper",
    role: "Founder & Lead Shopify Expert",
    text: "Leads the agency’s Shopify and e-commerce projects, helping businesses build professional online stores and improve their digital presence.",
    note: "Social profile link to be added",
    photo: boluPhoto.url,
    photoPosition: "center 25%",
  },
  {
    name: "WEBGENYX",
    role: "Web Developer",
    text: "Specializes in professional website design and development for jewelry businesses, creating elegant, modern, and user-friendly online stores that beautifully showcase jewelry collections, attract potential customers, and help brands grow their online presence and sales.",
    note: "Social profile link to be added",
    photo: webgenyxPhoto.url,
    photoPosition: "center 12%",
  },
  {
    name: "Festus Zentryve",
    role: "E-commerce Specialist",
    text: "Supports e-commerce projects, online store development, and business optimization.",
    note: "Profile details to be updated",
    photo: festusPhoto.url,
    photoPosition: "center 25%",
  },
  {
    name: "Marcus Chen",
    role: "Digital Marketing Specialist",
    text: "Supports digital marketing initiatives, online visibility, and business growth strategies.",
    note: "Profile details to be updated",
    photo: marcusPhoto.url,
    photoPosition: "center 25%",
  },
];
