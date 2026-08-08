export const NAV = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export const Icons = {
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M6 6l12 12M18 6L6 18",
  arrow: "M5 12h14M13 5l7 7-7 7",
  download: "M12 3v12m0 0l-4-4m4 4l4-4M5 21h14",
  play: "M6 4l14 8-14 8V4z",
  pause: "M6 4h4v16H6zM14 4h4v16h-4z",
  github:
    "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21",
  external: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3",
  mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
  check: "M20 6L9 17l-5-5",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35",
  pen: "M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z",
  code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  rocket:
    "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
  spark: "M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1",
};

export const PROCESS = [
  { n: "01", t: "Research", d: "Deep-dive into audience, market, and objectives to define real problems worth solving.", icon: Icons.search },
  { n: "02", t: "Design",   d: "Craft intuitive interfaces and systems that translate strategy into experience.",        icon: Icons.pen },
  { n: "03", t: "Develop",  d: "Ship performant, accessible, and maintainable code with modern tooling.",                icon: Icons.code },
  { n: "04", t: "Deploy",   d: "Launch, monitor, and iterate — treating shipping as the beginning, not the end.",        icon: Icons.rocket },
];

export const SKILL_GROUPS = [
  { title: "Core Competencies",     subtitle: "The stack I reach for daily",             items: ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Tailwind", "REST / GraphQL"] },
  { title: "Tools & Automation",    subtitle: "Lead gen, CRM, and outbound systems",     items: ["GoHighLevel", "Apollo", "Clay", "Instantly", "Zapier", "n8n", "Make", "Airtable"] },
  { title: "Analytics & Workflows", subtitle: "From dashboards to end-to-end flows",     items: ["GA4", "Mixpanel", "Metabase", "Notion", "Linear", "Figma", "Vercel", "AWS"] },
];

export const SOFT_SKILLS = ["Leadership", "Problem Solving", "Communication", "Time Management", "Strategy", "Ownership"];

export const PROJECTS = [
  { title: "Federal Benefits Funnel",       tags: ["B2B Lead Gen", "GoHighLevel", "Automation"], desc: "End-to-end GHL funnel and CRM for a US federal employee benefits practice — calendar, pipelines, SMS/email nurture.", metrics: [["+312%", "booked calls"], ["4.1×", "ROAS"], ["<2m", "lead SLA"]] as const },
  { title: "Outbound Deliverability Stack", tags: ["Cold Email", "Infrastructure", "Apollo/Clay"], desc: "Domain warm-up, inbox rotation, and enriched targeting pipeline delivering consistently to primary inbox at scale.", metrics: [["92%", "inbox rate"], ["18%", "reply rate"], ["150k+", "sends / mo"]] as const },
  { title: "Portfolio Studio v3",           tags: ["Web Dev", "Next.js", "Framer Motion"],       desc: "A composable component library and case-study framework used across three client micro-sites.", metrics: [["98", "Lighthouse"], ["1.2s", "LCP"], ["3", "live sites"]] as const },
];

export const EXPERIENCE = [
  {
    role: "Chief Marketing Officer",
    org: "Roxyel — Systems & Deliverability",
    date: "2024 — Present",
    bullets: [
      "Own the GTM engine — brand, content, prospecting, and inbound conversion.",
      "Built out the outbound stack (Apollo → Clay → Instantly → GHL) from zero.",
      "Grew LinkedIn presence from cold start to consistent weekly impressions and inbound DMs.",
    ],
  },
  {
    role: "Founding Engineer / Ops",
    org: "Independent Consulting",
    date: "2022 — 2024",
    bullets: [
      "Designed GHL funnels and automations for benefits, coaching, and agency clients.",
      "Shipped internal tools and scraping pipelines for lead enrichment.",
      "Advised founders on the first hire, first funnel, and first 100 conversations.",
    ],
  },
  {
    role: "Freelance Developer",
    org: "Various",
    date: "2020 — 2022",
    bullets: [
      "Built marketing sites, dashboards, and integrations across the JS ecosystem.",
      "Set up analytics, CRMs, and email systems for small teams.",
    ],
  },
];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
