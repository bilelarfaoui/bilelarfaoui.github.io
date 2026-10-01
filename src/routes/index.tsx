import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Moon, Sun, ShieldCheck, Server, Network, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/bilel-portrait.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bilel — IT Systems Administration & Cybersecurity" },
      { name: "description", content: "Meet Bilel and explore his focus on reliable IT systems administration and cybersecurity." },
      { property: "og:title", content: "Bilel — Systems & Security" },
      { property: "og:description", content: "A personal portfolio focused on IT systems administration and cybersecurity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const focusAreas = [
  { number: "01", icon: Server, title: "Systems administration", description: "Reliable operations, thoughtful maintenance, and the infrastructure that keeps everyday work moving." },
  { number: "02", icon: Network, title: "Network infrastructure", description: "Connected environments designed with stability, visibility, and sensible access in mind." },
  { number: "03", icon: LockKeyhole, title: "Cybersecurity", description: "A security-first approach to protecting systems, reducing risk, and staying prepared." },
];

function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("bilel-theme");
    const next = saved === "dark" || saved === "light" ? saved : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    setReady(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("bilel-theme", next);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:px-10">
          <a href="#top" className="font-mono text-sm font-semibold text-primary transition-opacity hover:opacity-70" aria-label="Bilel, back to top">BILEL <span className="text-muted-foreground">//</span> OPS.SEC</a>
          <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
            <a className="transition-colors hover:text-primary" href="#about">About</a>
            <a className="transition-colors hover:text-primary" href="#focus">Focus areas</a>
            <a className="transition-colors hover:text-primary" href="#connect">Connect</a>
          </nav>
          <Button variant="theme" size="icon" onClick={toggleTheme} aria-label={ready ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle color mode"} title={ready ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle color mode"} className="ml-2 shrink-0 rounded-full">
            {ready && theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:min-h-[720px] lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 font-mono text-[10px] font-medium uppercase text-accent-foreground sm:text-xs">
              <span className="size-1.5 shrink-0 rounded-full bg-primary" /> IT Systems Administration / Cybersecurity
            </div>
            <p className="mb-4 font-mono text-xs uppercase text-muted-foreground">Hello, I’m Bilel.</p>
            <h1 className="max-w-[13ch] text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-[4.5rem]">Building reliable systems. <span className="text-primary">Thinking security first.</span></h1>
            <p className="mt-8 max-w-[54ch] text-base leading-8 text-muted-foreground sm:text-lg">I’m interested in the space where dependable IT operations meet stronger cyber defense — keeping systems running while making them safer by design.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="portfolio" size="lg" className="h-11 px-5"><a href="#focus">Explore my focus <ArrowRight aria-hidden="true" /></a></Button>
              <Button asChild variant="portfolioOutline" size="lg" className="h-11 px-5"><a href="#about">Get to know me <ArrowDown aria-hidden="true" /></a></Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[450px] lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
              <img src={portrait.url} alt="Portrait of Bilel" className="h-full w-full object-cover object-center" fetchPriority="high" />
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-md border border-border bg-surface px-5 py-4 shadow-sm sm:-left-6">
              <p className="mb-1 font-mono text-[10px] uppercase text-primary">Perspective</p>
              <p className="text-sm font-medium">Systems × Security</p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-soft" aria-label="Areas of interest">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-6 py-12 md:grid-cols-4 lg:px-10">
            {[
              ["01", "IT operations"], ["02", "Infrastructure"], ["03", "Network thinking"], ["04", "Cyber defense"],
            ].map(([number, label]) => <div key={number} className="border-l border-border pl-4"><p className="mb-2 font-mono text-xs text-primary">{number} /</p><p className="text-sm font-medium sm:text-base">{label}</p></div>)}
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-b border-border py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_2fr] md:gap-20 lg:px-10">
            <div><p className="mb-5 font-mono text-xs uppercase text-primary">01 / The perspective</p><h2 className="max-w-xs text-3xl font-semibold leading-tight sm:text-4xl">Technology works best when trust is built in.</h2></div>
            <div className="max-w-2xl space-y-6 text-lg leading-8 text-muted-foreground">
              <p>My work is centered on IT systems administration and cybersecurity: two disciplines that are strongest when they work together, not separately.</p>
              <p>I value practical problem-solving, clear documentation, and the kind of careful attention that helps keep digital environments both dependable and secure.</p>
              <div className="flex items-center gap-3 border-t border-border pt-6 font-mono text-xs uppercase text-foreground"><ShieldCheck className="size-5 text-primary" aria-hidden="true" /> Reliability meets responsibility</div>
            </div>
          </div>
        </section>

        <section id="focus" className="scroll-mt-20 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-14 grid gap-5 md:grid-cols-[1fr_2fr] md:gap-20">
              <div><p className="mb-5 font-mono text-xs uppercase text-primary">02 / Focus areas</p><h2 className="text-3xl font-semibold sm:text-4xl">Where I focus.</h2></div>
              <p className="max-w-xl self-end text-base leading-7 text-muted-foreground">A connected view of the systems, networks, and security practices that underpin resilient digital environments.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
              {focusAreas.map(({ number, icon: Icon, title, description }) => <article key={number} className="flex min-h-[290px] flex-col bg-surface p-7 lg:p-9">
                <div className="mb-12 flex items-center justify-between"><Icon className="size-6 text-primary" strokeWidth={1.6} aria-hidden="true" /><span className="font-mono text-xs text-muted-foreground">{number} / 03</span></div>
                <h3 className="mb-4 text-xl font-semibold">{title}</h3><p className="text-sm leading-7 text-muted-foreground">{description}</p>
              </article>)}
            </div>
          </div>
        </section>
      </main>

      <footer id="connect" className="scroll-mt-20 border-t border-border bg-soft">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-10">
          <p className="mb-5 font-mono text-xs uppercase text-primary">03 / Connect</p>
          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div><h2 className="max-w-[15ch] text-4xl font-semibold leading-tight sm:text-5xl">Let’s build what’s next, securely.</h2><p className="mt-5 max-w-md text-muted-foreground">Interested in systems administration or cybersecurity? Let’s connect.</p></div>
            <div className="font-mono text-xs uppercase text-muted-foreground">Bilel / Systems & Security</div>
          </div>
          <div className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-7 font-mono text-[10px] uppercase text-muted-foreground"><span>© {new Date().getFullYear()} Bilel</span><a href="#top" className="transition-colors hover:text-primary">Back to top ↑</a></div>
        </div>
      </footer>
    </div>
  );
}
