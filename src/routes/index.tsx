import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowDown,
  ArrowRight,
  Menu as MenuIcon,
  Moon,
  Sun,
  Shield,
  Server,
  Network,
  LockKeyhole,
  Boxes,
  Activity,
  Terminal,
  Award,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  ExternalLink,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/bilel-portrait.jpeg";
const resume = { url: "/Bilel_Arfaoui_Resume.pdf" };
const SITE_URL = "https://bilelarfaoui.github.io/";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];
const mobileNavLinks = navLinks;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bilel Arfaoui — Technical Specialist & Cybersecurity" },
      {
        name: "description",
        content:
          "Bilel Arfaoui: Technical Specialist and IT graduate with a passion for security monitoring, network hardening and a hands-on home lab, completing a Master's in Cybersecurity.",
      },
      { property: "og:title", content: "Bilel Arfaoui — Technical Specialist & Security" },
      {
        property: "og:description",
        content:
          "Experience, projects, skills and certifications in technical support, cybersecurity and home-lab systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Bilel Arfaoui — Technical Specialist & Cybersecurity" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Bilel Arfaoui",
          jobTitle: "Technical Specialist",
          url: SITE_URL,
          image: `${SITE_URL}og-image.jpg`,
          email: "mailto:arfaouibilel@proton.me",
          address: { "@type": "PostalAddress", addressLocality: "Nabeul", addressCountry: "TN" },
          sameAs: ["https://linkedin.com/in/bilelarfaoui"],
          worksFor: { "@type": "Organization", name: "epay" },
          knowsLanguage: ["ar", "en", "fr", "de"],
        }),
      },
    ],
  }),
  component: Portfolio,
});

const experience = [
  {
    role: "Technical Specialist",
    org: "epay",
    period: "Aug 2023 – Present",
    mode: "Remote",
    points: [
      "Diagnose complex technical issues and provide rapid, specialized support for MEA regional clients.",
      "Resolve software and operational inquiries in professional English with high efficiency.",
      "Maintain systems stability and resolve client issues promptly to keep client operations running smoothly.",
    ],
  },
  {
    role: "Systems & Infrastructure Intern",
    org: "Tunisair",
    period: "Mar 2023 – May 2023",
    mode: "Hybrid",
    points: [
      "Deployed a highly available virtualized pre-production environment for an Operational Center using VMware vSphere and Windows Server.",
      "Automated custom Windows image captures and silent installs with PowerShell, MDT and WDS.",
      "Hardened network infrastructure with pfSense, WSUS patching and Zabbix monitoring.",
    ],
  },
  {
    role: "DevOps & Monitoring Intern",
    org: "Medis",
    period: "Jan 2022 – Feb 2022",
    mode: "Hybrid",
    points: [
      "Implemented an end-to-end Grafana monitoring solution with InfluxDB for server health and metric tracking.",
      "Deployed Telegraf plugins, Loki log aggregation and Promtail shipping agents.",
    ],
  },
  {
    role: "Software Development Intern",
    org: "Netinfo",
    period: "Aug 2021 – Sep 2021",
    mode: "Hybrid",
    points: [
      "Participated in building an intelligent chatbot using the Django web framework.",
      "Integrated PyTorch, NumPy, NLTK and ChatterBot for automated natural-language responses.",
    ],
  },
];

const personalProjects = [
  {
    icon: Shield,
    title: "Linux Hardening Toolkit",
    period: "GitHub · Linux",
    description: "A toolkit for applying practical security hardening to Linux systems.",
    href: "https://github.com/bilelarfaoui/linux-hardening-toolkit",
  },
  {
    icon: Terminal,
    title: "Linux Debloat",
    period: "GitHub · Linux",
    description:
      "Scripts and utilities for removing unnecessary software and reducing clutter on Linux.",
    href: "https://github.com/bilelarfaoui/linux-debloat",
  },
  {
    icon: Shield,
    title: "Windows Hardening",
    period: "GitHub · Windows",
    description:
      "A project focused on strengthening Windows security settings and system configuration.",
    href: "https://github.com/bilelarfaoui/windows-hardening",
  },
  {
    icon: Terminal,
    title: "macOS Debloat",
    period: "GitHub · macOS",
    description:
      "A script to reduce macOS telemetry and remove optional apps, with a dry run by default.",
    href: "https://github.com/bilelarfaoui/macos-debloat",
  },
];

const projects = [
  {
    icon: Shield,
    title: "Securing IT Infrastructure with pfSense",
    period: "Oct – Dec 2022",
    description:
      "Full network infrastructure on GNS3 deploying Log, Web, DNS, File and VoIP servers protected by pfSense.",
  },
  {
    icon: Boxes,
    title: "Dockerized IT Services & Nagios Monitoring",
    period: "Mar – May 2022",
    description:
      "Containerized FTP, a Hadoop cluster, MySQL and web services with Docker, supervised by Nagios.",
  },
  {
    icon: Activity,
    title: "High Availability Load Balancer",
    period: "Mar – Apr 2022",
    description:
      "Synchronized Apache server clusters with load balancing and Zabbix monitoring for highly available web services.",
  },
];

const skills = [
  {
    icon: Server,
    title: "Systems & Virtualization",
    items: [
      "Linux (Debian/Ubuntu)",
      "Windows Server (WDS/WSUS/MDT)",
      "VMware vSphere",
      "OpenStack",
      "Docker",
    ],
  },
  {
    icon: LockKeyhole,
    title: "Security & Networking",
    items: ["pfSense Firewall", "Wireshark", "Snort", "System Hardening", "Zabbix Monitoring"],
  },
  {
    icon: Network,
    title: "Observability & Tools",
    items: [
      "Grafana",
      "InfluxDB",
      "Telegraf",
      "Loki",
      "Promtail",
      "Git",
      "GitHub Actions",
      "Nginx",
      "Apache",
    ],
  },
  {
    icon: Terminal,
    title: "Programming & Scripting",
    items: [
      "Python",
      "Bash",
      "PowerShell",
      "JavaScript",
      "Django",
      "HTML/CSS",
      "PHP",
      "MySQL",
      "NoSQL",
      "C",
    ],
  },
];

const certifications = [
  {
    name: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Apr 2026",
    href: "https://www.credly.com/badges/58ec243b-840d-4ef3-9638-c25a00be3d97",
  },
  {
    name: "Certified Cybersecurity Educator (CCEP)",
    issuer: "Red Team Leaders",
    date: "Mar 2026",
    href: "https://courses.redteamleaders.com/exam-completion/624f5357e86bd2c9",
  },
  {
    name: "Encryption & Cryptography (CECB)",
    issuer: "Red Team Leaders",
    date: "Feb 2026",
    href: "https://courses.redteamleaders.com/exam-completion/bcfd53b37fdca13f",
  },
];

const languages = [
  ["Arabic", "Native"],
  ["English", "Fluent"],
  ["French", "Proficient"],
  ["German", "Basic"],
];

const contacts = [
  { icon: Mail, label: "arfaouibilel@proton.me", href: "mailto:arfaouibilel@proton.me" },
  { icon: Phone, label: "+216 51 028 799", href: "tel:+21651028799" },
  {
    icon: Linkedin,
    label: "linkedin.com/in/bilelarfaoui",
    href: "https://linkedin.com/in/bilelarfaoui",
  },
  { icon: MapPin, label: "Nabeul, Tunisia" },
];

function SectionHead({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <div className={`mb-8 grid gap-4 md:mb-10 ${intro ? "md:grid-cols-[1fr_2fr] md:gap-14" : ""}`}>
      <div>
        <p className="mb-3 inline-block border-b border-primary/60 pb-1 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
          {label}
        </p>
        <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      </div>
      {intro && (
        <p className="max-w-xl self-end text-base leading-7 text-muted-foreground">{intro}</p>
      )}
    </div>
  );
}

function PortraitLightbox({ onClose }: { onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="photo-lightbox fixed inset-0 z-[100] grid place-items-center bg-background/75 p-5 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Portrait preview"
        className="photo-lightbox-image relative"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close portrait preview"
          onClick={onClose}
          className="absolute -right-3 -top-3 z-10 grid size-11 place-items-center rounded-full border border-glass-border bg-glass text-foreground shadow-lg backdrop-blur-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
        <img
          src={portrait}
          alt="Portrait of Bilel Arfaoui"
          className="block max-h-[88svh] max-w-[min(92vw,760px)] rounded-2xl object-contain shadow-2xl ring-1 ring-foreground/15"
        />
        <p className="sr-only">Click outside the portrait or press Escape to close.</p>
      </div>
    </div>,
    document.body,
  );
}

function Portfolio() {
  const [active, setActive] = useState<string>("");
  const [portraitOpen, setPortraitOpen] = useState(false);
  const portraitButtonRef = useRef<HTMLButtonElement>(null);
  const closePortrait = useCallback(() => {
    setPortraitOpen(false);
    requestAnimationFrame(() => portraitButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = (event: MediaQueryListEvent) => {
      try {
        if (window.localStorage.getItem("bilel-theme")) return;
      } catch {
        // If storage is unavailable, continue following the system preference.
      }
      const systemMode = event.matches ? "dark" : "light";
      document.documentElement.classList.toggle("dark", systemMode === "dark");
    };

    systemTheme.addEventListener("change", syncSystemTheme);
    return () => systemTheme.removeEventListener("change", syncSystemTheme);
  }, []);

  useEffect(() => {
    const header = document.querySelector("header.sticky");
    if (!header) return undefined;

    let previousHeight = Math.ceil(header.getBoundingClientRect().height);
    const setHeaderHeight = (height: number) => {
      document.documentElement.style.setProperty("--site-header-height", `${height}px`);
    };
    const updateHeaderHeight = () => {
      const height = Math.ceil(header.getBoundingClientRect().height);
      if (height === previousHeight) return;

      const hash = window.location.hash.slice(1);
      const target = ["about", "experience", "projects", "skills", "connect"].includes(hash)
        ? document.getElementById(hash)
        : null;
      const previousScrollMargin = target
        ? Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0
        : 0;
      const wasAligned =
        target && Math.abs(target.getBoundingClientRect().top - previousScrollMargin) < 48;

      previousHeight = height;
      setHeaderHeight(height);

      if (target && wasAligned) {
        requestAnimationFrame(() => {
          const scrollMargin = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
          const targetTop = target.getBoundingClientRect().top + window.scrollY - scrollMargin;
          window.scrollTo(0, targetTop);
        });
      }
    };

    setHeaderHeight(previousHeight);
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(updateHeaderHeight);
      observer.observe(header);
      return () => {
        observer.disconnect();
        document.documentElement.style.removeProperty("--site-header-height");
      };
    }

    window.addEventListener("resize", updateHeaderHeight);
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, []);

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!("IntersectionObserver" in window) || sections.length === 0) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Reveal content as it enters the viewport without hiding anything when JS or
  // IntersectionObserver is unavailable.
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    document.documentElement.classList.add("has-reveal");
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="top"
      className="min-h-screen bg-background text-foreground transition-colors duration-300"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-glass-border bg-glass shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-4 sm:h-16 sm:gap-4 sm:px-6 lg:px-10">
          <a
            href="#top"
            className="font-mono text-sm font-semibold text-primary transition-opacity hover:opacity-70"
            aria-label="Bilel Arfaoui, back to top"
          >
            B.Arfaoui
          </a>
          <nav
            aria-label="Main navigation"
            className="ml-auto hidden items-center gap-3 text-xs font-medium text-muted-foreground lg:flex lg:gap-5 lg:text-sm"
          >
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={`transition-colors hover:text-primary ${active === id ? "text-primary" : ""}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex shrink-0 items-center gap-1.5 md:ml-3 sm:gap-2">
            <Button
              asChild
              variant="portfolio"
              size="sm"
              className="h-8 px-2.5 text-[11px] sm:px-3 sm:text-xs"
            >
              <a href={resume.url} target="_blank" rel="noopener noreferrer">
                Resume <ExternalLink aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="portfolioOutline"
              size="sm"
              className="h-8 w-8 p-0 text-[11px] min-[400px]:w-auto min-[400px]:px-2.5 sm:px-3 sm:text-xs"
            >
              <a href="#connect" aria-label="Contact">
                <Mail className="size-4 min-[400px]:hidden" aria-hidden="true" />
                <span className="sr-only min-[400px]:not-sr-only">Contact</span>
              </a>
            </Button>
            <details className="mobile-menu relative lg:hidden">
              <summary
                aria-label="Toggle section menu"
                className="grid size-10 cursor-pointer list-none place-items-center rounded-xl border border-border bg-secondary/80 text-secondary-foreground shadow-sm transition-[background,color,border-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden"
              >
                <MenuIcon aria-hidden="true" className="menu-icon" />
                <X aria-hidden="true" className="close-icon" />
              </summary>
              <nav
                id="mobile-section-navigation"
                aria-label="Section navigation"
                className="section-nav absolute right-0 top-[calc(100%+0.625rem)] z-50 grid min-w-[min(14rem,calc(100vw-2rem))] grid-cols-2 gap-1 rounded-2xl border border-glass-border bg-glass p-2 text-sm font-medium text-muted-foreground shadow-xl backdrop-blur-xl sm:min-w-56 sm:grid-cols-1"
              >
                <p className="col-span-full px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Sections
                </p>
                {mobileNavLinks.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    data-mobile-menu-link
                    aria-current={active === id ? "location" : undefined}
                    className={`flex min-w-0 items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-primary/10 hover:text-primary ${active === id ? "bg-primary/10 text-primary" : ""} ${id === "connect" ? "sm:hidden" : ""}`}
                  >
                    {label}
                    {active === id && (
                      <span
                        aria-hidden="true"
                        className="ml-2 size-1.5 shrink-0 rounded-full bg-primary"
                      />
                    )}
                  </a>
                ))}
              </nav>
            </details>
            <Button
              variant="theme"
              size="icon"
              data-theme-toggle
              aria-label="Switch color mode"
              className="size-8 shrink-0 rounded-full sm:size-9"
            >
              <Moon className="dark:hidden" aria-hidden="true" />
              <Sun className="hidden dark:block" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="mx-auto flex max-w-7xl flex-col px-6 pb-12 pt-8 lg:min-h-[560px] lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-12 lg:px-10 lg:py-12">
          <div className="max-w-2xl" data-reveal="up">
            <p className="mb-2 font-mono text-xs uppercase text-muted-foreground">
              Hello, I’m <span className="font-semibold text-primary">Bilel Arfaoui</span>.
            </p>
            <h1 className="max-w-[14ch] text-balance text-[2.65rem] font-semibold leading-[1.05] sm:text-6xl lg:text-[4.25rem]">
              IT graduate. <span className="text-primary">Technical specialist.</span>
            </h1>
            <p className="mt-4 max-w-[54ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Focused on network hardening and security monitoring, currently completing a Master’s
              in Cybersecurity and running a hands-on home lab.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
              <Button asChild variant="portfolio" size="lg" className="h-11 px-5">
                <a href="#connect">
                  Get in touch <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="portfolioOutline" size="lg" className="h-11 px-5">
                <a href="#experience">
                  View experience <ArrowDown aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
          <div
            className="portrait-frame relative mx-auto mt-10 w-[clamp(240px,68vw,340px)] sm:mt-14 sm:w-[clamp(290px,44vw,400px)] lg:mt-0 lg:w-full lg:max-w-[min(42vw,520px)]"
            data-reveal="scale"
          >
            <div className="relative z-10 overflow-hidden rounded-lg border border-border bg-secondary">
              <button
                ref={portraitButtonRef}
                type="button"
                aria-label="Open a larger portrait preview"
                onClick={() => setPortraitOpen(true)}
                className="group relative block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
              >
                <img
                  src={portrait}
                  alt="Portrait of Bilel Arfaoui"
                  className="aspect-[4/4.5] h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  fetchPriority="high"
                />
              </button>
            </div>
            <div className="glass-panel absolute bottom-3 right-3 flex items-center gap-2 rounded-md px-3 py-2 font-mono text-[10px] uppercase text-foreground sm:bottom-4 sm:right-4 sm:text-xs">
              <MapPin className="size-3.5 shrink-0 text-primary" aria-hidden="true" /> Based in
              Nabeul, Tunisia
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-soft" aria-label="Highlights">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 py-8 md:grid-cols-4 md:gap-7 md:py-9 lg:px-10">
            {[
              ["2023 →", "Technical Specialist at epay"],
              [String(experience.length), "Professional roles"],
              [String(certifications.length), "Certifications"],
              [String(languages.length), "Languages spoken"],
            ].map(([n, label]) => (
              <div key={label} className="border-l border-border pl-4">
                <p className="mb-2 font-mono text-xl font-semibold text-primary">{n}</p>
                <p className="text-sm font-medium sm:text-base">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="border-b border-border py-10 md:py-12 lg:py-14">
          <div className="mx-auto grid max-w-7xl gap-7 px-6 md:grid-cols-[1fr_2fr] md:gap-14 lg:px-10">
            <div>
              <p className="mb-3 inline-block border-b border-primary/60 pb-1 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                About me
              </p>
              <h2 className="max-w-xs text-3xl font-semibold leading-tight sm:text-4xl">
                IT support and cybersecurity
              </h2>
            </div>
            <div className="max-w-2xl space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                At epay, I work as a Technical Specialist. I hold a Bachelor’s degree in IT from
                ISET Nabeul and use my home lab to practice systems administration, networking and
                security monitoring.
              </p>
              <p>
                I’m completing a Master’s in Cybersecurity at Leaders University in Nabeul and
                seeking an end-of-study project. My experience includes virtualized infrastructure,
                automated deployments and technical support for international environments.
              </p>
              <div className="grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase text-primary">Education</p>
                  <p className="mt-1 text-base text-foreground">
                    Master in Cybersecurity — Leaders University, Nabeul{" "}
                    <span className="text-muted-foreground">(in progress)</span>
                  </p>
                  <p className="text-base text-foreground">
                    Bachelor in IT — ISET Nabeul{" "}
                    <span className="text-muted-foreground">(2020–2023)</span>
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase text-primary">Languages</p>
                  <p className="mt-1 text-base text-foreground">
                    {languages.map(([l, lv]) => `${l} (${lv})`).join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-b border-border py-10 md:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHead label="Experience" title="Where I’ve worked." />
            <div className="divide-y divide-border border-t border-border">
              {experience.map((job, i) => (
                <article
                  key={job.org}
                  data-reveal="up"
                  style={{ transitionDelay: `${i * 70}ms` }}
                  className={`grid gap-4 pt-7 md:grid-cols-[1fr_2fr] md:gap-14 ${i === experience.length - 1 ? "pb-1" : "pb-7"}`}
                >
                  <div>
                    <p className="font-mono text-xs uppercase text-muted-foreground">
                      {job.period}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase text-primary">{job.mode}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {job.role} <span className="text-primary">— {job.org}</span>
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-muted-foreground">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-3 leading-7">
                          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-border bg-soft py-10 md:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHead label="Projects" title="Personal projects." />
            <div className="mb-10 grid gap-3 md:grid-cols-3">
              {personalProjects.map(({ icon: Icon, title, period, description, href }, i) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-reveal="up"
                  style={{ transitionDelay: `${i * 90}ms` }}
                  className="glass-panel flex min-h-[220px] flex-col rounded-lg p-6 transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:p-7"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <Icon className="size-6 text-primary" strokeWidth={1.6} aria-hidden="true" />
                    <span className="font-mono text-xs text-muted-foreground">{period}</span>
                  </div>
                  <h3 className="mb-3 inline-flex items-center gap-2 text-xl font-semibold">
                    {title}
                    <ExternalLink className="size-4 opacity-60" aria-hidden="true" />
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">{description}</p>
                </a>
              ))}
            </div>
            <SectionHead label="Academic projects" title="Academic & practical labs." />
            <div className="grid gap-3 md:grid-cols-3">
              {projects.map(({ icon: Icon, title, period, description }, i) => (
                <article
                  key={title}
                  data-reveal="up"
                  style={{ transitionDelay: `${i * 90}ms` }}
                  className="glass-panel flex min-h-[220px] flex-col rounded-lg p-6 hover:-translate-y-1 lg:p-7"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <Icon className="size-6 text-primary" strokeWidth={1.6} aria-hidden="true" />
                    <span className="font-mono text-xs text-muted-foreground">{period}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-10 md:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHead label="Skills" title="Technical toolkit." />
            <div className="grid gap-4 md:grid-cols-2">
              {skills.map(({ icon: Icon, title, items }, i) => (
                <div
                  key={title}
                  data-reveal="up"
                  style={{ transitionDelay: `${i * 70}ms` }}
                  className="glass-panel rounded-lg p-6 hover:-translate-y-1"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold">{title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-accent px-2.5 py-1 font-mono text-xs text-accent-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <p className="mb-4 inline-block border-b border-primary/60 pb-1 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                Certifications
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                {certifications.map((c, i) => (
                  <div
                    key={c.name}
                    data-reveal="up"
                    style={{ transitionDelay: `${i * 90}ms` }}
                    className="glass-panel flex flex-col rounded-lg p-6 hover:-translate-y-1"
                  >
                    <Award className="mb-4 size-5 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold">{c.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {c.issuer} · {c.date}
                    </p>
                    <Button asChild variant="link" className="mt-4 w-fit p-0">
                      <a href={c.href} target="_blank" rel="noopener noreferrer">
                        Verify certificate <ExternalLink aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {portraitOpen && <PortraitLightbox onClose={closePortrait} />}

      <footer id="connect" className="border-t border-border bg-soft">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 lg:px-10">
          <p className="mb-3 inline-block border-b border-primary/60 pb-1 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
            Contact
          </p>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-[15ch] text-4xl font-semibold leading-tight sm:text-5xl">
                Let’s build what’s next, securely.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Available to get hired remotely or to relocate — open to DevOps, infrastructure,
                systems administration, cloud and cybersecurity roles. Let’s talk.
              </p>
            </div>
            <ul className="space-y-3 text-sm">
              {contacts.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon className="size-4 text-primary" aria-hidden="true" />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5 font-mono text-[10px] uppercase text-muted-foreground">
            <span>© {new Date().getFullYear()} Bilel Arfaoui</span>
            <a
              href="#top"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.replaceState(
                  null,
                  "",
                  window.location.pathname + window.location.search,
                );
              }}
              className="transition-colors hover:text-primary"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
