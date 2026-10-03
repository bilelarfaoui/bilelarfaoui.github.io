import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Moon, Sun, Shield, Server, Network, LockKeyhole, Boxes, Activity, Terminal, Award, Mail, Phone, Linkedin, MapPin, FileText, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/bilel-portrait.jpeg";
import resume from "@/assets/bilel-resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bilel Arfaoui — Technical Specialist & Cybersecurity" },
      { name: "description", content: "Bilel Arfaoui: Technical Specialist and IT graduate with a passion for security monitoring, network hardening and a hands-on home lab, completing a Master's in Cybersecurity." },
      { property: "og:title", content: "Bilel Arfaoui — Technical Specialist & Security" },
      { property: "og:description", content: "Experience, projects, skills and certifications in technical support, cybersecurity and home-lab systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const experience = [
  { role: "Technical Specialist", org: "EPAY", period: "Aug 2023 – Present", mode: "Remote", points: ["Diagnose complex technical issues and provide rapid, specialized support for MEA regional clients.", "Resolve software and operational inquiries in professional English with high efficiency.", "Maintain systems stability and resolve client issues promptly to keep client operations running smoothly."] },
  { role: "Systems & Infrastructure Intern", org: "Tunisair", period: "Mar 2023 – May 2023", mode: "Hybrid", points: ["Deployed a highly available virtualized pre-production environment for an Operational Center using VMware vSphere and Windows Server.", "Automated custom Windows image captures and silent installs with PowerShell, MDT and WDS.", "Hardened network infrastructure with pfSense, WSUS patching and Zabbix monitoring."] },
  { role: "DevOps & Monitoring Intern", org: "Medis", period: "Jan 2022 – Feb 2022", mode: "Internship", points: ["Implemented an end-to-end Grafana monitoring solution with InfluxDB for server health and metric tracking.", "Deployed Telegraf plugins, Loki log aggregation and Promtail shipping agents."] },
  { role: "Software Development Intern", org: "NetInfo", period: "Aug 2021 – Sep 2021", mode: "Internship", points: ["Participated in building an intelligent chatbot using the Django web framework.", "Integrated PyTorch, NumPy, NLTK and ChatterBot for automated natural-language responses."] },
];

const projects = [
  { icon: Shield, title: "Securing IT Infrastructure with pfSense", period: "Oct – Dec 2022", description: "Full network infrastructure on GNS3 deploying Log, Web, DNS, File and VoIP servers protected by pfSense." },
  { icon: Boxes, title: "Dockerized IT Services & Nagios Monitoring", period: "Mar – May 2022", description: "Containerized FTP, a Hadoop cluster, MySQL and web services with Docker, supervised by Nagios." },
  { icon: Activity, title: "High Availability Load Balancer", period: "Mar – Apr 2022", description: "Synchronized Apache server clusters with load balancing and Zabbix monitoring for highly available web services." },
];

const skills = [
  { icon: Server, title: "Systems & Virtualization", items: ["Linux (Debian/Ubuntu)", "Windows Server (WDS/WSUS/MDT)", "VMware vSphere", "OpenStack", "Docker"] },
  { icon: LockKeyhole, title: "Security & Networking", items: ["pfSense Firewall", "Wireshark", "Snort", "System Hardening", "Zabbix Monitoring"] },
  { icon: Network, title: "Observability & Tools", items: ["Grafana", "InfluxDB", "Telegraf", "Loki", "Promtail", "Git", "GitHub Actions", "Nginx", "Apache"] },
  { icon: Terminal, title: "Programming & Scripting", items: ["Python", "Bash", "PowerShell", "JavaScript", "Django", "HTML/CSS", "PHP", "MySQL", "NoSQL", "C"] },
];

const certifications = [
  { name: "AWS Cloud Quest: Cloud Practitioner", issuer: "Amazon Web Services", date: "Apr 2026", href: "https://www.credly.com/badges/58ec243b-840d-4ef3-9638-c25a00be3d97" },
  { name: "Certified Cybersecurity Educator (CCEP)", issuer: "Red Team Leaders", date: "Mar 2026", href: "https://courses.redteamleaders.com/exam-completion/624f5357e86bd2c9" },
  { name: "Encryption & Cryptography (CECB)", issuer: "Red Team Leaders", date: "Feb 2026", href: "https://courses.redteamleaders.com/exam-completion/bcfd53b37fdca13f" },
];

const languages = [["Arabic", "Native"], ["English", "Fluent"], ["French", "Proficient"], ["German", "Basic"]];

const contacts = [
  { icon: Mail, label: "arfaouibilel@proton.me", href: "mailto:arfaouibilel@proton.me" },
  { icon: Phone, label: "+216 51 028 799", href: "tel:+21651028799" },
  { icon: Linkedin, label: "linkedin.com/in/bilelarfaoui", href: "https://linkedin.com/in/bilelarfaoui" },
  { icon: MapPin, label: "Nabeul, Tunisia" },
];

function SectionHead({ index, label, title, intro }: { index: string; label: string; title: string; intro?: string }) {
  return (
    <div className="mb-14 grid gap-5 md:grid-cols-[1fr_2fr] md:gap-20">
      <div><p className="mb-5 font-mono text-xs uppercase text-primary">{index} / {label}</p><h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2></div>
      {intro && <p className="max-w-xl self-end text-base leading-7 text-muted-foreground">{intro}</p>}
    </div>
  );
}

function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [ready, setReady] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("bilel-theme");
    const next = saved === "dark" || saved === "light" ? saved : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!resumeOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setResumeOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [resumeOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("bilel-theme", next);
  };

  return (
    <div id="top" className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:px-10">
          <a href="#top" className="font-mono text-sm font-semibold text-primary transition-opacity hover:opacity-70" aria-label="Bilel Arfaoui, back to top">B.ARFAOUI <span className="text-muted-foreground">//</span> TECH.SEC</a>
          <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#about">About</a>
            <a className="transition-colors hover:text-primary" href="#experience">Experience</a>
            <a className="transition-colors hover:text-primary" href="#projects">Projects</a>
            <a className="transition-colors hover:text-primary" href="#skills">Skills</a>
            <a className="transition-colors hover:text-primary" href="#resume">Resume</a>
            <a className="transition-colors hover:text-primary" href="#connect">Contact</a>
          </nav>
          <Button variant="theme" size="icon" onClick={toggleTheme} aria-label={ready ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle color mode"} className="ml-2 shrink-0 rounded-full">
            {ready && theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </Button>
        </div>
        <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl gap-6 overflow-x-auto whitespace-nowrap border-t border-border px-6 py-3 text-sm font-medium text-muted-foreground md:hidden">
          <a className="shrink-0 hover:text-primary" href="#about">About</a>
          <a className="shrink-0 hover:text-primary" href="#experience">Experience</a>
          <a className="shrink-0 hover:text-primary" href="#projects">Projects</a>
          <a className="shrink-0 hover:text-primary" href="#skills">Skills</a>
          <a className="shrink-0 hover:text-primary" href="#resume">Resume</a>
          <a className="shrink-0 hover:text-primary" href="#connect">Contact</a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 pb-16 pt-10 lg:min-h-[620px] lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-10 lg:pb-20 lg:pt-16">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-md bg-accent px-3 py-2 font-mono text-[10px] font-medium uppercase text-accent-foreground sm:mb-7 sm:text-xs">
              <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-primary" /> Available for hire — remote or relocation
            </div>
            <p className="mb-3 font-mono text-xs uppercase text-muted-foreground sm:mb-4">Hello, I’m Bilel Arfaoui.</p>
            <h1 className="max-w-[14ch] text-balance text-[2.65rem] font-semibold leading-[1.05] sm:text-6xl lg:text-[4.5rem]">Technical specialist. <span className="text-primary">Security mindset.</span></h1>
            <p className="mt-5 max-w-[54ch] text-base leading-7 text-muted-foreground sm:mt-8 sm:text-lg sm:leading-8">IT graduate and Technical Specialist focused on network hardening and security monitoring — currently completing a Master’s in Cybersecurity, and running a home lab for the love of it.</p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-9">
              <Button asChild variant="portfolio" size="lg" className="h-11 px-5"><a href="#connect">Get in touch <ArrowRight aria-hidden="true" /></a></Button>
              <Button asChild variant="portfolioOutline" size="lg" className="h-11 px-5"><a href="#experience">View experience <ArrowDown aria-hidden="true" /></a></Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[310px] lg:max-w-[330px]">
            <div className="aspect-[4/4.5] overflow-hidden rounded-lg bg-secondary">
              <img src={portrait} alt="Portrait of Bilel Arfaoui" className="h-full w-full object-cover object-center" fetchPriority="high" />
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-md border border-border bg-surface px-5 py-4 shadow-sm sm:-left-6">
              <p className="mb-1 font-mono text-[10px] uppercase text-primary">Based in</p>
              <p className="text-sm font-medium">Nabeul, Tunisia</p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-soft" aria-label="Highlights">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-6 py-12 md:grid-cols-4 lg:px-10">
            {[["2023 →", "Technical Specialist at EPAY"], ["4", "Professional roles"], ["3", "Certifications"], ["4", "Languages spoken"]].map(([n, label]) => <div key={label} className="border-l border-border pl-4"><p className="mb-2 font-mono text-xl font-semibold text-primary">{n}</p><p className="text-sm font-medium sm:text-base">{label}</p></div>)}
          </div>
        </section>

        <section id="about" className="scroll-mt-[110px] border-b border-border py-24 md:scroll-mt-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_2fr] md:gap-20 lg:px-10">
            <div><p className="mb-5 font-mono text-xs uppercase text-primary">01 / About me</p><h2 className="max-w-xs text-3xl font-semibold leading-tight sm:text-4xl">Support that holds. Defenses that hold.</h2></div>
            <div className="max-w-2xl space-y-6 text-lg leading-8 text-muted-foreground">
              <p>I’m a Technical Specialist at EPAY and an IT graduate with a strong interest in network hardening and security monitoring — systems administration is my playground at home, where I run my own lab for fun.</p>
              <p>I’m currently completing a Master’s degree in Cybersecurity and actively seeking a challenging End-of-Study / graduation project. I’m available to get hired remotely or to relocate, and I bring experience in virtualized infrastructure, automated deployments and technical support across international environments.</p>
              <div className="grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
                <div><p className="font-mono text-[10px] uppercase text-primary">Education</p><p className="mt-1 text-base text-foreground">Master in Cybersecurity <span className="text-muted-foreground">(in progress)</span></p><p className="text-base text-foreground">Bachelor in IT — ISET Nabeul <span className="text-muted-foreground">(2020–2023)</span></p></div>
                <div><p className="font-mono text-[10px] uppercase text-primary">Languages</p><p className="mt-1 text-base text-foreground">{languages.map(([l, lv]) => `${l} (${lv})`).join(" · ")}</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-[110px] border-b border-border py-24 md:scroll-mt-16 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHead index="02" label="Experience" title="Where I’ve worked." intro="Support, infrastructure and monitoring roles across remote and hybrid environments." />
            <div className="divide-y divide-border border-y border-border">
              {experience.map((job) => <article key={job.org} className="grid gap-4 py-9 md:grid-cols-[1fr_2fr] md:gap-20">
                <div><p className="font-mono text-xs uppercase text-muted-foreground">{job.period}</p><p className="mt-1 font-mono text-xs uppercase text-primary">{job.mode}</p></div>
                <div><h3 className="text-xl font-semibold">{job.role} <span className="text-primary">— {job.org}</span></h3>
                  <ul className="mt-4 space-y-2 text-muted-foreground">{job.points.map((p) => <li key={p} className="flex gap-3 leading-7"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />{p}</li>)}</ul></div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-[110px] border-b border-border bg-soft py-24 md:scroll-mt-16 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHead index="03" label="Projects" title="Academic & practical labs." intro="Hands-on builds covering firewalls, containers, monitoring and high availability." />
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
              {projects.map(({ icon: Icon, title, period, description }) => <article key={title} className="flex min-h-[260px] flex-col bg-surface p-7 lg:p-9">
                <div className="mb-10 flex items-center justify-between"><Icon className="size-6 text-primary" strokeWidth={1.6} aria-hidden="true" /><span className="font-mono text-xs text-muted-foreground">{period}</span></div>
                <h3 className="mb-4 text-xl font-semibold">{title}</h3><p className="text-sm leading-7 text-muted-foreground">{description}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-[110px] py-24 md:scroll-mt-16 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHead index="04" label="Skills" title="Technical toolkit." />
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map(({ icon: Icon, title, items }) => <div key={title} className="rounded-lg border border-border bg-surface p-7">
                <div className="mb-5 flex items-center gap-3"><Icon className="size-5 text-primary" aria-hidden="true" /><h3 className="font-semibold">{title}</h3></div>
                <div className="flex flex-wrap gap-2">{items.map((s) => <span key={s} className="rounded-md bg-accent px-2.5 py-1 font-mono text-xs text-accent-foreground">{s}</span>)}</div>
              </div>)}
            </div>
            <div className="mt-16">
              <p className="mb-6 font-mono text-xs uppercase text-primary">Certifications</p>
              <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
                {certifications.map((c) => <div key={c.name} className="flex flex-col bg-surface p-7"><Award className="mb-6 size-5 text-primary" aria-hidden="true" /><h3 className="font-semibold">{c.name}</h3><p className="mt-2 text-sm text-muted-foreground">{c.issuer} · {c.date}</p><Button asChild variant="link" className="mt-5 w-fit p-0"><a href={c.href} target="_blank" rel="noopener noreferrer">Verify certificate <ExternalLink aria-hidden="true" /></a></Button></div>)}
              </div>
            </div>
          </div>
        </section>
        <section id="resume" className="scroll-mt-[110px] border-t border-border bg-soft py-24 md:scroll-mt-16 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHead index="05" label="Resume" title="My resume." />
            <div className="flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4"><FileText className="size-8 shrink-0 text-primary" aria-hidden="true" /><div><h3 className="font-semibold">Bilel Arfaoui — Resume</h3><p className="text-sm text-muted-foreground">PDF document</p></div></div>
              <div className="flex flex-wrap gap-3">
                <Button variant="portfolio" size="lg" onClick={() => setResumeOpen(true)}>View resume <FileText aria-hidden="true" /></Button>
                <Button asChild variant="portfolioOutline" size="lg"><a href={resume.url} download="Bilel_Arfaoui_Resume.pdf">Download <Download aria-hidden="true" /></a></Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="connect" className="min-h-[calc(100vh-110px)] scroll-mt-[110px] border-t border-border bg-soft md:min-h-[calc(100vh-64px)] md:scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-10">
          <p className="mb-5 font-mono text-xs uppercase text-primary">06 / Contact</p>
          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div><h2 className="max-w-[15ch] text-4xl font-semibold leading-tight sm:text-5xl">Let’s build what’s next, securely.</h2><p className="mt-5 max-w-md text-muted-foreground">Available to get hired remotely or to relocate — open to technical, IT support and cybersecurity roles. Let’s talk.</p></div>
            <ul className="space-y-3 text-sm">
              {contacts.map(({ icon: Icon, label, href }) => <li key={label} className="flex items-center gap-3"><Icon className="size-4 text-primary" aria-hidden="true" />{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="transition-colors hover:text-primary">{label}</a> : <span>{label}</span>}</li>)}
            </ul>
          </div>
           <div className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-7 font-mono text-[10px] uppercase text-muted-foreground"><span>© {new Date().getFullYear()} Bilel Arfaoui</span><a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); window.history.replaceState(null, "", window.location.pathname + window.location.search); }} className="transition-colors hover:text-primary">Back to top ↑</a></div>
        </div>
      </footer>
      {resumeOpen && (
        <div role="presentation" className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/70 p-3 sm:p-6" onClick={() => setResumeOpen(false)}>
          <div role="dialog" aria-modal="true" aria-label="Bilel Arfaoui resume" className="flex h-full max-h-[900px] w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-background shadow-xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex h-14 shrink-0 items-center justify-between gap-4 border-b border-border px-4 sm:px-6">
              <h2 className="min-w-0 truncate font-semibold">Bilel Arfaoui — Resume</h2>
              <div className="flex items-center gap-2">
                <Button asChild variant="ghost" size="icon" aria-label="Download resume"><a href={resume.url} download="Bilel_Arfaoui_Resume.pdf"><Download aria-hidden="true" /></a></Button>
                <Button variant="ghost" size="icon" aria-label="Close resume" onClick={() => setResumeOpen(false)}><X aria-hidden="true" /></Button>
              </div>
            </div>
            <iframe title="Bilel Arfaoui resume PDF" src={resume.url} className="min-h-0 w-full flex-1 bg-surface" />
          </div>
        </div>
      )}
    </div>
  );
}
