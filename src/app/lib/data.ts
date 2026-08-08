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
  {
    title: "Marketing Systems",
    subtitle: "The core stack I ship with",
    items: ["GoHighLevel", "Funnels", "CRM Pipelines", "Automations", "Landing Pages", "SMS / Email Nurture"],
  },
  {
    title: "Cold Email & Deliverability",
    subtitle: "Getting the inbox, not the spam folder",
    items: ["Instantly", "Domain Warm-up", "Inbox Rotation", "Deliverability Audits", "DNS / SPF / DKIM"],
  },
  {
    title: "Prospecting & Enrichment",
    subtitle: "Real-time lead sourcing at scale",
    items: ["Apollo", "Clay", "Dripify", "LinkedIn Sales Navigator", "DeBounce", "PropStream"],
  },
];

export const SOFT_SKILLS = ["Leadership", "Problem Solving", "Communication", "Time Management", "Systems Thinking", "Ownership"];

// PROJECTS — real work, no fabricated metrics.
// Each project has an `image` path pointing to /public/projects/*.png
export const PROJECTS = [
  {
    title: "GHL Funnel",
    tags: ["GoHighLevel", "Funnel Build", "Lead Capture"],
    desc: "Multi-step lead-capture funnel inside GoHighLevel — opt-in, qualification checklist, calendar booking, thank-you, terms and privacy pages — all wired into a single conversion path.",
    image: "/projects/ghl_funnel.png",
    highlights: ["Opt-in → Checklist → Booking flow", "Split-test ready", "End-to-end tracking"],
  },
  {
    title: "GHL Website",
    tags: ["GoHighLevel", "Website Build", "Multi-page"],
    desc: "Full multi-page website built natively inside GoHighLevel — home, strategy session, workshop, about, and legal pages — designed to feed leads directly into the CRM and funnel system.",
    image: "/projects/ghl_website.png",
    highlights: ["6 pages, one system", "CRM-integrated forms", "GHL-native, no external stack"],
  },
  {
    title: "GHL Workflow",
    tags: ["GoHighLevel", "Automation", "Multi-Channel"],
    desc: "Multi-channel reply-capture workflow that routes DMs from Facebook, Instagram, TikTok, SMS, and email into a unified pipeline — with tagging, opportunity creation, and appointment booking automated end-to-end.",
    image: "/projects/ghl_workflow.png",
    highlights: ["5 channels, one workflow", "Auto-tag + opportunity creation", "Booking + follow-up branches"],
  },
  {
    title: "Cold Email Campaign",
    tags: ["Instantly", "Deliverability", "B2B Outreach"],
    desc: "Cold email campaign built and managed in Instantly — from list warm-up through sequenced outreach — delivering consistently to the primary inbox at scale.",
    image: "/projects/instantly_analytics.png",
    highlights: [
      ["60.59%", "open rate"],
      ["2,842", "sequences started"],
      ["1,722", "unique opens"],
    ] as const,
  },
] as const;

// EXPERIENCE — no dates, ordered chronologically most-recent first
export const EXPERIENCE = [
  {
    role: "Chief Marketing Officer",
    org: "Roxyel — Systems & Deliverability",
    bullets: [
      "Own the GTM engine — brand, content, prospecting, and inbound conversion.",
      "Built and manage the outbound stack: Apollo and Clay for enrichment, Instantly for cold email delivery, GoHighLevel for CRM and nurture.",
      "Lead the LinkedIn presence — content pillars, cadence, and outreach strategy — driving inbound conversations from a cold start.",
    ],
  },
  {
    role: "Senior Marketing Strategist",
    org: "Roxyel — Systems & Deliverability",
    bullets: [
      "Designed and shipped GHL funnels, websites, and automation workflows for agency and service-business clients.",
      "Ran deliverability audits and rebuilt cold email infrastructure — domains, warm-up, inbox rotation, and DNS setup.",
      "Managed campaign reporting, lead sanitization, and end-to-end data workflows for high-volume outreach.",
    ],
  },
  {
    role: "Freelance B2B Lead Generation & Deliverability",
    org: "Independent — International Clients",
    bullets: [
      "Executed cold email and outbound campaigns for clients across SaaS, financial services, real estate, and sustainable packaging.",
      "Configured complex GoHighLevel architectures — smart lists, pipelines, merge-tag fixes, and deliverability troubleshooting.",
      "Built B2B prospecting pipelines using Apollo, Clay, Dripify, and PropStream — targeting fractional executives, financial advisors, and international buyers.",
    ],
  },
  {
    role: "Founder",
    org: "UniHelpDesk — Academic Support Platform",
    bullets: [
      "Founded and launched an academic support web platform for university students — assignments, resumes, and presentations.",
      "Built the full digital stack: site copy, Google Analytics integration, SEO, marketing assets, and content workflow.",
      "Managed the end-to-end operation — from acquisition to delivery — while learning the systems that later became the day job.",
    ],
  },
];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
