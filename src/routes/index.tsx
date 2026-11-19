import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  Gem,
  LayoutDashboard,
  Menu,
  MessageCircle,
  PackageSearch,
  PanelsTopLeft,
  RefreshCw,
  Settings2,
  ShoppingBag,
  X,
  type LucideIcon,
} from "lucide-react";

import {
  heroImage,
  navLinks,
  processSteps,
  projects,
  reasons,
  services,
  team,
  type Project,
  type ServiceIcon,
} from "@/components/growlane/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GrowLane Agency | Shopify & E-commerce Growth" },
      {
        name: "description",
        content:
          "GrowLane Agency creates thoughtful Shopify stores, e-commerce websites and digital experiences for jewelry brands and growing businesses.",
      },
      { property: "og:title", content: "GrowLane Agency | Shopify & E-commerce Growth" },
      {
        property: "og:description",
        content:
          "Professional Shopify development, e-commerce design and strategic optimization for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  bag: ShoppingBag,
  refresh: RefreshCw,
  dashboard: LayoutDashboard,
  gem: Gem,
  search: PackageSearch,
  settings: Settings2,
  chart: ChartNoAxesCombined,
  panels: PanelsTopLeft,
  arrow: ArrowUpRight,
};

const ICON = { size: 16, strokeWidth: 1.8 };

function Wordmark() {
  return (
    <a className="wordmark" href="#top" aria-label="GrowLane Agency home">
      <img alt="" width={42} height={42} src="/growlane-mark.svg" />
      <span className="wordmark-copy">
        <strong>GrowLane</strong>
        <span>AGENCY</span>
      </span>
    </a>
  );
}

function Eyebrow({ children, light }: { children: string; light?: boolean }) {
  return (
    <span className={light ? "eyebrow eyebrow-light" : "eyebrow"}>
      <span className="eyebrow-line" />
      {children}
    </span>
  );
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [service, setService] = useState("");

  const chooseService = (title: string) => {
    setService(title);
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site-shell" id="top">
      <div className="topline">
        <div className="gl-container topline-inner">
          <span>Shopify · E-commerce · Digital growth</span>
          <span className="topline-note">
            Thoughtful digital experiences, built around your business.
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="gl-container header-inner">
          <Wordmark />
          <button
            className="menu-toggle icon-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X {...ICON} /> : <Menu {...ICON} />}
          </button>
          <nav
            id="main-navigation"
            className={menuOpen ? "main-navigation is-open" : "main-navigation"}
            aria-label="Main navigation"
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a className="header-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Let’s talk <ArrowUpRight {...ICON} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="gl-container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow hero-eyebrow">
                <span className="eyebrow-line" />
                Your e-commerce partner
              </span>
              <p className="hero-kicker">
                Your Vision. Our Expertise. Better E-commerce Experiences.
              </p>
              <h1 id="hero-title">
                Building Beautiful Digital Experiences <em>That Help Businesses Grow.</em>
              </h1>
              <p className="hero-description">
                At GrowLane Agency, we help businesses establish, improve, and grow their online
                presence through professional Shopify development, e-commerce website design, and
                strategic optimization.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#services">
                  Explore Our Services <ArrowRight {...ICON} />
                </a>
                <a className="button button-secondary" href="#contact">
                  Let’s Work Together <ArrowUpRight {...ICON} />
                </a>
              </div>
              <div className="hero-footnote">
                <span className="hero-dot" /> Strategy-led. Detail-focused. Built for the next
                step.
              </div>
            </div>
            <div className="hero-visual-wrap">
              <div className="hero-image-frame">
                <img
                  className="hero-image"
                  alt="Premium jewelry storefront displayed across desktop, tablet and mobile devices."
                  fetchPriority="high"
                  src={heroImage}
                />
                <div className="hero-image-caption">
                  <span className="caption-mark">GL</span>
                  <span>
                    <strong>Designed for the way people shop.</strong>
                    <small>Commerce experiences with care.</small>
                  </span>
                  <ArrowUpRight {...ICON} />
                </div>
              </div>
              <div className="floating-note">
                <span className="floating-note-icon">
                  <Check {...ICON} />
                </span>
                <span>
                  <strong>Clear by design</strong>
                  <small>From first visit to checkout</small>
                </span>
              </div>
              <span className="hero-vertical-label">DIGITAL EXPERIENCE · 01</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>Discover GrowLane</span>
            <ArrowDown {...ICON} />
          </a>
        </section>

        <section className="focus-ribbon" aria-label="GrowLane Agency areas of focus">
          <div className="gl-container focus-ribbon-inner">
            <span>Shopify development</span>
            <i />
            <span>Jewelry commerce</span>
            <i />
            <span>Store optimization</span>
            <i />
            <span>Online growth</span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="gl-container about-grid">
            <div className="about-stamp">
              <span className="stamp-kicker">
                GROWLANE
                <br />
                AGENCY
              </span>
              <span className="stamp-symbol" aria-hidden="true">
                ↗
              </span>
              <span className="stamp-caption">
                Make room
                <br />
                for growth.
              </span>
              <span className="stamp-orbit" aria-hidden="true" />
            </div>
            <div className="about-copy">
              <div className="section-intro">
                <Eyebrow>A little about us</Eyebrow>
                <h2>Your Partner in Building a Successful Online Business.</h2>
              </div>
              <p className="about-body">
                GrowLane Agency is a professional e-commerce and digital solutions agency dedicated
                to helping businesses build strong online foundations and achieve sustainable
                growth. Led by Bolu Prosper, our team specializes in Shopify development,
                e-commerce website design, store optimization, product research, and digital
                business solutions. We understand that every business has unique goals. That’s why
                we focus on delivering practical, creative, and business-focused solutions that
                improve customer experiences, strengthen brand identity, and support long-term
                growth. Our mission is to help businesses transform their ideas into professional
                digital experiences.
              </p>
              <a className="text-link" href="#team">
                Meet the people behind the work <ArrowRight {...ICON} />
              </a>
            </div>
            <div className="about-aside">
              <span className="aside-number">
                01 <span>—</span> 04
              </span>
              <p>
                Practical thinking, thoughtful design, and a digital foundation made for your next
                chapter.
              </p>
              <span className="aside-rule" />
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="gl-container">
            <div className="services-heading-row">
              <div className="section-intro">
                <Eyebrow>What we do</Eyebrow>
                <h2>Better experiences, at every step.</h2>
                <p>
                  From the first product listing to the last detail before launch, we bring clarity
                  and craft to your online business.
                </p>
              </div>
              <a className="text-link services-contact-link" href="#contact">
                Find the right service <ArrowDown {...ICON} />
              </a>
            </div>
            <div className="service-grid">
              {services.map((s, i) => {
                const Icon = serviceIcons[s.icon];
                return (
                  <article className="service-card" key={s.title}>
                    <div className="service-card-top">
                      <span className="service-index">{pad(i + 1)}</span>
                      <span className="service-icon">
                        <Icon {...ICON} />
                      </span>
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <button
                      className="service-link"
                      type="button"
                      onClick={() => chooseService(s.title)}
                    >
                      Talk about this service <ArrowUpRight {...ICON} />
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="trust-section" id="why-growlane">
          <div className="gl-container trust-grid">
            <div className="trust-copy">
              <Eyebrow light>Why GrowLane</Eyebrow>
              <h2>Why Businesses Choose GrowLane Agency.</h2>
              <p>
                Good digital work should look considered, feel easy to use, and make sense for the
                business behind it.
              </p>
              <a className="button button-light" href="#contact">
                Work With Our Team <ArrowUpRight {...ICON} />
              </a>
            </div>
            <ul className="reason-list">
              {reasons.map((r, i) => (
                <li key={r}>
                  <span className="reason-number">{pad(i + 1)}</span>
                  <span className="reason-check">
                    <Check {...ICON} />
                  </span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="gl-container">
            <div className="process-heading">
              <div className="section-intro">
                <Eyebrow>Our approach</Eyebrow>
                <h2>A thoughtful process. A confident launch.</h2>
                <p>
                  A clear, collaborative path from first conversation to a store that’s ready for
                  its next step.
                </p>
              </div>
              <span className="process-side-note">
                A good process leaves room
                <br />
                for the details that matter.
              </span>
            </div>
            <div className="process-track">
              {processSteps.map((step, i) => (
                <article className="process-step" key={step.title}>
                  <span className="process-number">{pad(i + 1)}</span>
                  <span className="process-dot" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section portfolio-section" id="work">
          <div className="gl-container">
            <div className="portfolio-heading">
              <div className="section-intro">
                <Eyebrow>Selected concepts</Eyebrow>
                <h2>A glimpse of what’s possible.</h2>
                <p>
                  A collection of demonstration designs that show how thoughtful commerce
                  experiences can come to life.
                </p>
              </div>
              <span className="portfolio-disclaimer">
                <span className="disclaimer-dot" /> Sample designs · Not completed client projects
              </span>
            </div>
            <div className="portfolio-grid">
              {projects.map((p, i) => (
                <article className={`project-card project-card-${i + 1}`} key={p.title}>
                  <button
                    className="project-image-button"
                    type="button"
                    aria-label={`View sample design: ${p.title}`}
                    onClick={() => setActiveProject(p)}
                  >
                    <img alt={p.alt} loading="lazy" src={p.image} />
                    <span className="sample-label">Sample design</span>
                    <span className="project-view-icon">
                      <ArrowUpRight {...ICON} />
                    </span>
                  </button>
                  <div className="project-meta">
                    <span>{p.category}</span>
                    <span>{pad(i + 1)}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <button
                    className="text-link project-open-link"
                    type="button"
                    onClick={() => setActiveProject(p)}
                  >
                    View Project <ArrowRight {...ICON} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="conversion-cta" aria-label="Plan your next e-commerce project">
          <div className="gl-container conversion-cta-inner">
            <div>
              <Eyebrow>Your next step</Eyebrow>
              <p>Ready for a storefront that feels like your brand?</p>
            </div>
            <div className="conversion-actions">
              <a className="button button-primary" href="#contact-form">
                Get a Professional Shopify Store <ArrowUpRight {...ICON} />
              </a>
              <a className="text-link" href="#contact-form">
                Request a Consultation <ArrowRight {...ICON} />
              </a>
            </div>
          </div>
        </section>

        <section className="team-section section" id="team">
          <div className="gl-container">
            <div className="team-heading">
              <div className="section-intro">
                <Eyebrow>The people behind the work</Eyebrow>
                <h2>Meet the Experts Behind GrowLane Agency.</h2>
                <p>
                  A passionate team of professionals working together to help businesses build,
                  improve, and grow their online presence.
                </p>
              </div>
              <span className="team-heading-accent" aria-hidden="true">
                GL<span>.</span>
              </span>
            </div>
            <div className="team-grid">
              {team.map((m, i) => (
                <article className="team-card" key={m.role}>
                  <div className={`team-portrait portrait-${i + 1}`}>
                    <img
                      className="team-photo"
                      src={m.photo}
                      alt={`${m.name}, ${m.role}`}
                      loading="lazy"
                      style={{ objectPosition: m.photoPosition }}
                    />
                  </div>
                  <div className="team-card-copy">
                    <span className="team-role">{m.role}</span>
                    <h3>{m.name}</h3>
                    <p>{m.text}</p>
                    <span className="profile-link-placeholder">{m.note}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="team-closing">
              <span className="closing-line" />
              <p>Together, We Turn Ideas Into Successful Online Businesses.</p>
              <span className="closing-line" />
            </div>
          </div>
        </section>

        <section className="testimonial-section section" id="testimonials">
          <div className="gl-container testimonial-grid">
            <div className="testimonial-intro">
              <div className="section-intro">
                <Eyebrow>Kind words, when they’re ready</Eyebrow>
                <h2>The best work starts with a good conversation.</h2>
                <p>Real client experiences will have a place here when they’re ready to share.</p>
              </div>
            </div>
            <div className="testimonial-empty" aria-live="polite">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p>Client stories will be added here as real feedback becomes available.</p>
              <span className="testimonial-caption">No testimonials published yet</span>
              <a className="text-link" href="#contact">
                Start a conversation <ArrowRight {...ICON} />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="gl-container contact-grid">
            <div className="contact-copy">
              <Eyebrow light>Tell us what you’re building</Eyebrow>
              <h2>
                Let’s Build Something <em>Amazing Together.</em>
              </h2>
              <p>
                Have a project in mind? Whether you need a professional Shopify store, a complete
                website redesign, or e-commerce support, GrowLane Agency is ready to help.
              </p>
              <a className="whatsapp-link" href="#contact-form">
                <span className="whatsapp-icon">
                  <MessageCircle {...ICON} />
                </span>
                <span>
                  <strong>WhatsApp contact details to be added</strong>
                  <small>Use the project form while a number is being configured.</small>
                </span>
                <ArrowUpRight {...ICON} />
              </a>
              <div className="contact-note">
                <span className="contact-note-rule" />
                Your project details are handled through our private enquiry system.
              </div>
            </div>
            <ContactForm service={service} onServiceChange={setService} />
          </div>
        </section>

        <section className="closing-banner">
          <div className="gl-container closing-banner-inner">
            <span>GrowLane Agency</span>
            <p>Growing businesses through better digital experiences.</p>
            <a href="#contact">
              Let’s Grow Your Business <ArrowUpRight {...ICON} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="gl-container footer-main">
          <div className="footer-brand">
            <Wordmark />
            <p>
              Shopify and e-commerce solutions shaped around your business, your customers and what
              comes next.
            </p>
            <span className="footer-tagline">
              Growing Businesses Through Better Digital Experiences.
            </span>
          </div>
          <div className="footer-links">
            <span className="footer-heading">Explore</span>
            <a href="#about">About us</a>
            <a href="#services">Our services</a>
            <a href="#team">Our team</a>
            <a href="#work">Our portfolio</a>
            <a href="#contact">Contact us</a>
          </div>
          <div className="footer-links">
            <span className="footer-heading">Get in touch</span>
            <a href="#contact-form">
              Start Your Project <ArrowUpRight {...ICON} />
            </a>
            <a href="#contact-form">
              WhatsApp <ArrowUpRight {...ICON} />
            </a>
            <span className="footer-pending">Social profile links to be added</span>
          </div>
        </div>
        <div className="gl-container footer-bottom">
          <span>© 2026 GrowLane Agency</span>
          <span>
            GrowLane Agency – Building Digital Experiences. Growing Businesses. Creating
            Opportunities.
          </span>
          <a href="#top" aria-label="Back to top">
            Back to top ↑
          </a>
        </div>
      </footer>

      {activeProject && (
        <ProjectDialog project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <section
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          className="dialog-close icon-button"
          type="button"
          aria-label="Close project details"
          onClick={onClose}
        >
          <X {...ICON} />
        </button>
        <img className="dialog-image" alt={project.alt} src={project.image} />
        <div className="dialog-copy">
          <span className="sample-label">Sample design · Concept work</span>
          <span className="eyebrow">{project.category}</span>
          <h3 id="dialog-title">{project.title}</h3>
          <p>{project.text}</p>
          <p className="dialog-disclaimer">
            A demonstration design by GrowLane Agency. This is not presented as a completed client
            project.
          </p>
          <a className="button button-primary" href="#contact-form" onClick={onClose}>
            Discuss a similar project <ArrowUpRight {...ICON} />
          </a>
        </div>
      </section>
    </div>
  );
}

function ContactForm({
  service,
  onServiceChange,
}: {
  service: string;
  onServiceChange: (s: string) => void;
}) {
  const [status, setStatus] = useState<{ kind: "success" | "error"; text: string } | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("companyWebsite") ?? "")) return;
    const name = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const business = String(data.get("businessName") ?? "").trim();
    const description = String(data.get("projectDescription") ?? "").trim();
    if (name.length < 2 || !business || !service || description.length < 10) {
      setStatus({ kind: "error", text: "Please complete all required fields before sending." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ kind: "error", text: "Please enter a valid email address." });
      return;
    }
    setStatus({
      kind: "success",
      text: `Thank you, ${name}. Your project details have been received — we’ll be in touch soon.`,
    });
    form.reset();
    onServiceChange("");
  };

  return (
    <div className="contact-form-panel" id="contact-form">
      <div className="form-heading">
        <div>
          <span className="form-kicker">Start Your Project</span>
          <h3>Tell us a little more.</h3>
        </div>
        <span className="form-mark">
          01 <ArrowDown {...ICON} />
        </span>
      </div>
      <form noValidate onSubmit={onSubmit}>
        <div className="form-row">
          <label>
            Full Name <span>*</span>
            <input
              autoComplete="name"
              required
              minLength={2}
              maxLength={120}
              placeholder="Your name"
              type="text"
              name="fullName"
            />
          </label>
          <label>
            Email Address <span>*</span>
            <input
              autoComplete="email"
              required
              maxLength={320}
              placeholder="you@company.com"
              type="email"
              name="email"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Business Name <span>*</span>
            <input
              autoComplete="organization"
              required
              maxLength={180}
              placeholder="Your business"
              type="text"
              name="businessName"
            />
          </label>
          <label>
            Website URL <small>Optional</small>
            <input
              autoComplete="url"
              maxLength={2048}
              placeholder="https://yourwebsite.com"
              type="url"
              name="websiteUrl"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Service Required <span>*</span>
            <span className="select-wrap">
              <select
                name="serviceRequired"
                required
                value={service}
                onChange={(e) => onServiceChange(e.target.value)}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other / not sure yet">Other / not sure yet</option>
              </select>
              <ChevronDown {...ICON} />
            </span>
          </label>
          <label>
            Project Budget <small>Optional</small>
            <input
              maxLength={120}
              placeholder="Approximate range"
              type="text"
              name="projectBudget"
            />
          </label>
        </div>
        <label>
          Project Description <span>*</span>
          <textarea
            name="projectDescription"
            required
            minLength={10}
            maxLength={5000}
            rows={4}
            placeholder="What would you like to build or improve?"
          />
        </label>
        <label className="form-honeypot" aria-hidden="true">
          Leave this field empty
          <input tabIndex={-1} autoComplete="off" type="text" name="companyWebsite" />
        </label>
        <p className="form-privacy">We’ll use these details to respond to your project enquiry.</p>
        {status && (
          <p className={`form-status ${status.kind}`} role="status">
            {status.text}
          </p>
        )}
        <button className="button button-primary submit-button" type="submit">
          Submit Message <ArrowUpRight {...ICON} />
        </button>
      </form>
    </div>
  );
}
