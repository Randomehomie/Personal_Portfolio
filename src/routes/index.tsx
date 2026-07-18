import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Cloud,
  FileCode2,
  Layers,
  Linkedin,
  Mail,
  Shield,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorOrb } from "@/components/CursorOrb";
import heroIllustration from "@/assets/hero-illustration.png";
import isc2CcAsset from "@/assets/certifications/isc2-cc.png.asset.json";
import azureAiAsset from "@/assets/certifications/azure-ai.png.asset.json";
import googleCyberAsset from "@/assets/certifications/google-cyber.png.asset.json";
import csaAsset from "@/assets/certifications/csa.svg.asset.json";
import nistAsset from "@/assets/certifications/nist-credly.png.asset.json";


export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Proficiency", href: "#proficiency" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-border/60 glass-card" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-foreground text-background">
            <ShieldCheck className="h-4 w-4" />
          </span>
          Vignesh M
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-all hover:opacity-90 hover:-translate-y-px sm:inline-flex"
          >
            Get in touch
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[600px]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.55_0.22_262)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[oklch(0.55_0.22_262)]" />
              </span>
              Available for GRC & Compliance Engineering roles
            </div>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Vignesh <span className="text-gradient-blue">M</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
              Information Security · Governance, Risk & Compliance · Compliance Engineering
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Information Security & GRC professional with experience implementing governance,
              risk, and compliance programs across global security frameworks. Passionate about
              evolving traditional governance through cloud technologies, automation,
              Infrastructure as Code, Policy as Code, and modern security practices.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/40"
              >
                Contact Me
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,_oklch(0.55_0.22_262/0.18),_transparent_70%)] blur-2xl" />
            <img
              src={heroIllustration}
              alt="Cloud governance and compliance engineering illustration"
              width={1024}
              height={1024}
              className="h-auto w-full select-none"
              draggable={false}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.55_0.22_262)]">
          {eyebrow}
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
        )}
      </div>
    </Reveal>
  );
}

function About() {
  const stats = [
    { label: "Years in InfoSec & GRC", value: "2+" },
    { label: "Frameworks worked with", value: "7" },
    { label: "AUDITS HANDLED", value: "17+" },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="About"
        title="Modern governance, meet engineering."
        description="Blending traditional GRC discipline with cloud, automation, and code."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          {
            icon: Shield,
            title: "2+ years across InfoSec & GRC",
            body: "Implementing governance, risk, and compliance programs mapped to global security frameworks in fast-moving product environments.",
          },
          {
            icon: Layers,
            title: "Frameworks I've worked with",
            body: "PCI DSS, SOC 1, SOC 2, ISO 27001, CSA STAR, NIST CSF, and NIST AI RMF — across audits, assessments, and control design.",
          },
          {
            icon: Sparkles,
            title: "Engineering-driven security",
            body: "Modernising governance through automation, cloud governance, IaC and Policy as Code — while learning and documenting openly.",
          },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <article className="card-hover h-full rounded-2xl border border-border bg-card p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-[oklch(0.55_0.22_262)]">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <div className="mt-10 grid gap-4 rounded-2xl border border-border bg-secondary/40 p-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

const proficiency = [
  {
    icon: ShieldCheck,
    title: "Governance & Compliance",
    items: ["PCI DSS", "ISO 27001", "SOC 1", "SOC 2", "CSA STAR", "NIST CSF", "NIST AI RMF"],
  },
  {
    icon: Shield,
    title: "Risk & Security",
    items: [
      "Enterprise Risk Management",
      "Third-Party Risk",
      "Vulnerability Management",
      "Business Continuity",
      "Disaster Recovery",
      "Security Policies",
      "Internal Audits",
    ],
  },
  {
    icon: FileCode2,
    title: "Compliance Engineering",
    items: ["Terraform", "OPA / Rego", "Checkov", "GitHub Actions"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevSecOps",
    items: ["AWS Governance", "CI/CD", "Git", "GitHub"],
  },
  {
    icon: Workflow,
    title: "Automation",
    items: ["Power Automate", "\n", "Security Workflow Automation"],
  },
];

function Proficiency() {
  return (
    <section id="proficiency" className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Proficiency"
          title="A toolkit spanning policy to pipelines."
          description="From traditional control frameworks to Policy-as-Code, the disciplines I work across."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {proficiency.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const experience = [
  { company: "Zoho", role: "Member — Compliance Implementor", period: "Oct 2025 – Present" },
  {
    company: "M2P Fintech Solutions",
    role: "Associate Analyst",
    period: "Oct 2024 – Sep 2025",
  },
  {
    company: "M2P Fintech Solutions",
    role: "GRC Trainee",
    period: "Jul 2024 – Oct 2024",
  },
];

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading eyebrow="Experience" title="A concise professional timeline." />
      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-1/2" />
        <ul className="space-y-8">
          {experience.map((e, i) => (
            <Reveal key={i} as="li" delay={i * 100}>
              <div className="relative pl-12 sm:pl-0">
                <span className="absolute left-4 top-6 -translate-x-1/2 sm:left-1/2">
                  <span className="block h-3 w-3 rounded-full bg-[oklch(0.55_0.22_262)] ring-4 ring-background" />
                </span>
                <div
                  className={`card-hover rounded-2xl border border-border bg-card p-6 sm:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  <div className="text-xs font-medium uppercase tracking-widest text-[oklch(0.55_0.22_262)]">
                    {e.period}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{e.company}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturedProject() {
  const tags = ["Terraform", "GitHub Actions", "OPA", "Checkov", "Policy as Code"];
  const caseStudy: {
    label: string;
    heading: string;
    body: string;
    points?: string[];
  }[] = [
    {
      label: "Problem",
      heading: "Governance that couldn't keep up with cloud velocity.",
      body: "Traditional GRC relied on manual reviews, spreadsheets, and post-deployment audits — slow, error-prone, and disconnected from how infrastructure actually ships. Misconfigurations often surfaced only during audits, long after they'd reached production.",
    },
    {
      label: "Approach",
      heading: "Shift compliance left, into the pipeline.",
      body: "Designed a local Compliance Engineering pipeline that treats security policies as versioned code and enforces them on every Infrastructure-as-Code change — before anything is provisioned.",
      points: [
        "Model organizational controls as Policy-as-Code using OPA/Rego",
        "Scan Terraform plans with Checkov for baseline misconfigurations",
        "Automate policy evaluation on every commit via GitHub Actions",
        "Generate structured, audit-ready evidence artifacts per run",
      ],
    },
    {
      label: "Tools",
      heading: "The stack behind the pipeline.",
      body: "Terraform for IaC, Checkov for baseline IaC scanning, OPA/Rego for custom policy logic, and GitHub Actions to orchestrate validation and evidence collection — all runnable locally, no live cloud required.",
    },
    {
      label: "Outcome",
      heading: "Faster feedback, evidence you can trust.",
      body: "Policy violations are caught at pull-request time instead of during audits. Every run produces reproducible evidence mapped back to controls, turning compliance from a periodic event into a continuous, engineered practice.",
      points: [
        "Violations surfaced pre-deployment, not post-audit",
        "Reproducible evidence for every IaC change",
        "Foundation for scaling controls across teams and clouds",
      ],
    },
  ];
  return (
    <section id="projects" className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading eyebrow="Featured Project" title="Compliance Engineering, in practice." />
        <Reveal delay={100}>
          <article className="card-hover mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-border bg-card">
            <div className="relative h-40 overflow-hidden border-b border-border bg-gradient-to-br from-[oklch(0.97_0.02_260)] to-[oklch(0.93_0.06_262)] sm:h-52">
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(oklch(0.55_0.22_262/0.15)_1px,transparent_1px),linear-gradient(90deg,oklch(0.55_0.22_262/0.15)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="relative flex h-full items-center justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-xs font-medium backdrop-blur">
                  <FileCode2 className="h-3.5 w-3.5 text-[oklch(0.55_0.22_262)]" />
                  Policy validation pipeline
                </span>
              </div>
            </div>
            <div className="p-7 sm:p-10">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Compliance Engineering Pipeline
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Built a proof-of-concept Compliance Engineering pipeline integrating Terraform,
                GitHub Actions, Checkov, and OPA/Rego to validate Infrastructure as Code against
                organizational security policies before deployment. Implemented automated policy
                validation and security checks to generate audit-ready evidence without requiring
                live cloud infrastructure.
              </p>
              <div className="mt-10 space-y-5">
                {caseStudy.map((block, i) => (
                  <Reveal key={block.label} delay={i * 80}>
                    <div className="rounded-2xl border border-border bg-background/60 p-6 sm:p-7">
                      <div className="flex items-center gap-3">
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[11px] font-semibold text-[oklch(0.55_0.22_262)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[oklch(0.55_0.22_262)]">
                          {block.label}
                        </span>
                      </div>
                      <h4 className="mt-4 text-lg font-semibold tracking-tight sm:text-xl">
                        {block.heading}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {block.body}
                      </p>
                      {block.points && (
                        <ul className="mt-4 space-y-2">
                          {block.points.map((pt) => (
                            <li
                              key={pt}
                              className="flex items-start gap-2.5 text-sm text-foreground/80"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.55_0.22_262)]" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://medium.com/@vignesh14m3/from-traditional-grc-to-compliance-engineering-building-a-local-compliance-pipeline-with-976cc6bf065b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/40"
                >
                  Case Study
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

const journey = [
  "Traditional GRC",
  "Cloud Governance",
  "Automation",
  "Infrastructure as Code",
  "Policy as Code",
  "Compliance Engineering",
];

function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Professional Journey"
        title="An evolution, not a checklist."
        description="Continuously expanding from traditional governance practices toward engineering-driven security, automation, and scalable compliance."
      />
      <div className="mx-auto mt-14 max-w-3xl">
        <ol className="relative space-y-3">
          <div
            className="absolute left-[1.125rem] top-8 bottom-8 w-px bg-border"
            aria-hidden="true"
          />
          {journey.map((step, i) => (
            <Reveal as="li" key={step} delay={i * 80}>
              <div className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4">
                <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-sm font-semibold text-[oklch(0.55_0.22_262)] ring-4 ring-background">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium tracking-tight sm:text-lg">{step}</span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const certifications = [
  {
    name: "ISC2 Certified in Cybersecurity",
    issuer: "ISC2",
    image: isc2CcAsset.url,
  },
  {
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    image: azureAiAsset.url,
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    image: googleCyberAsset.url,
  },
  {
    name: "CSA STAR Lead Auditor Course",
    issuer: "Cloud Security Alliance",
    image: csaAsset.url,
  },
  {
    name: "CNST (CSF 2.0 + AI RMF)",
    issuer: "NIST-aligned",
    image: nistAsset.url,
  },
];

function Certifications() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading eyebrow="Certifications" title="Credentials & continuous learning." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <article className="card-hover flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-background">
                  <img
                    src={c.image}
                    alt={`${c.name} badge`}
                    className="h-full w-full object-contain p-1.5"
                    loading="lazy"
                  />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold tracking-tight">{c.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {c.issuer}
                  </p>
                </div>
                <CheckCircle2 className="ml-auto h-5 w-5 text-[oklch(0.55_0.22_262)]" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningInPublic() {
  const posts = [
    {
      title:
        "From Traditional GRC to Compliance Engineering: A Local Compliance Pipeline with Terraform, Checkov, OPA & GitHub Actions",
      tag: "Compliance Engineering",
      medium:
        "https://medium.com/@vignesh14m3/from-traditional-grc-to-compliance-engineering-building-a-local-compliance-pipeline-with-976cc6bf065b",
    },
    {
      title: "The Growing Shift from Traditional GRC to GRC Engineering in Cloud-Native Systems",
      tag: "Cloud Governance",
      medium:
        "https://medium.com/@vignesh14m3/the-growing-shift-from-traditional-grc-to-grc-engineering-in-cloud-native-systems-9f866a92819d",
    },
    {
      title: "Qualitative vs. Quantitative Risk Assessment: Which One Really Works?",
      tag: "Risk Assessment",
      medium:
        "https://medium.com/@vignesh14m3/qualitative-vs-quantitative-risk-assessment-which-one-really-works-a12a027edf2f",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Learning in Public"
        title="Experiments, labs, and lessons — shared."
        description="Sharing practical experiments, implementation projects, cloud governance concepts, compliance engineering labs, and lessons learned while exploring modern approaches to Governance, Risk & Compliance."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_262)]">
                  <BookOpen className="h-3 w-3" />
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight">
                {p.title}
              </h3>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                <a
                  href={p.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background transition-all hover:-translate-y-0.5"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Medium
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vigneshm03/" },
    { icon: BookOpen, label: "Medium", href: "https://medium.com/@vignesh14m3" },
    { icon: Mail, label: "Email", href: "mailto:vignesh14m3@gmail.com" },
  ];
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background sm:p-16">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[oklch(0.55_0.22_262/0.4)] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[oklch(0.55_0.22_262/0.25)] blur-3xl" />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">
                Contact
              </div>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Let's build modern, engineering-driven governance.
              </h2>
              <p className="mt-4 max-w-xl text-base text-background/70">
                Open to conversations around Technical GRC, Cloud Governance, Compliance
                Engineering, and Security Engineering roles.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-2 text-sm font-medium backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-background/10"
                  >
                    <l.icon className="h-4 w-4" />
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <p className="max-w-lg text-sm text-muted-foreground">
          Building practical, scalable approaches to Governance, Risk & Compliance through
          cloud, automation, and Compliance Engineering.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vignesh M · All rights reserved
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <CursorOrb />
      <Nav />
      <main>
        <Hero />
        <About />
        <Proficiency />
        <Experience />
        <FeaturedProject />
        <Journey />
        <Certifications />
        <LearningInPublic />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
