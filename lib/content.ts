export const heroPromises = [
  "Live in minutes, no hardware",
  "Keep your number, ported free",
  "No fixed contracts, cancel anytime",
  "14-day free trial",
];

export const steps = [
  {
    n: "01",
    title: "Get a number, or keep the one you have",
    aside: "Takes about four minutes.",
    icon: "hash",
  },
  {
    n: "02",
    title: "Invite the team, on whatever they use",
    aside: "No training day required.",
    icon: "users",
  },
  {
    n: "03",
    title: "Tell it your rules, in plain English",
    aside: "Genuinely — no flow charts.",
    icon: "sliders",
  },
];

export type FeatureBlock = {
  id: string;
  eyebrow: string;
  icon: string;
  title: string;
  bullets: string[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  visual: "summary";
  flip?: boolean;
};

export const featureBlocks: FeatureBlock[] = [
  {
    id: "call-admin",
    eyebrow: "Call admin",
    icon: "pencil",
    title: "The call ends, the paperwork is done",
    bullets: [
      "A written summary of every call",
      "Follow-up email and text drafted for you",
      "Contact updated, meeting in the calendar",
      "Nothing goes out until you send it",
    ],
    primary: { label: "Get started for free", href: "/signup" },
    secondary: { label: "Learn more", href: "/features/ai-summaries" },
    visual: "summary",
  },
];

export const industries = [
  { name: "Sales teams", href: "/solutions/sales", icon: "target" },
  { name: "Property managers", href: "/solutions/estate-agents", icon: "building" },
  { name: "Home services", href: "/solutions/home-services", icon: "wrench" },
  { name: "Medical", href: "/solutions/medical", icon: "heart" },
  { name: "Insurance", href: "/solutions/insurance", icon: "shield" },
  { name: "Financial advisers", href: "/solutions/financial-advisers", icon: "chart" },
  { name: "Law firms", href: "/solutions/law-firms", icon: "scale" },
  { name: "Startups", href: "/solutions/founders", icon: "rocket" },
  { name: "Franchises", href: "/solutions/operations", icon: "grid" },
];

export const integrationList = [
  "HubSpot",
  "Salesforce",
  "Pipedrive",
  "Attio",
  "Folk",
  "Streak",
  "Google Calendar",
  "HighLevel",
  "Cal.com",
  "Apollo",
  "Intercom",
  "Notion",
  "Google Sheets",
  "Google Contacts",
  "Zapier",
  "Make",
  "Shopify",
  "QuickBooks",
];

export const testimonials = [
  {
    quote:
      "Previously we weren't even logging SMS, so that alone is a huge upgrade for us. The reps don't have to write up who they called or what was said any more.",
    name: "Lowell Bieber",
    role: "Head of Sales",
    company: "Streak",
    initials: "LB",
    meta: "Moved from Aircall · 14 seats",
  },
  {
    quote:
      "It is incredibly useful to have a documented history of phone calls, plus call summaries that are easy to share internally for collaboration.",
    name: "Dan LeSueur",
    role: "Managing Director",
    company: "Bench Equity",
    initials: "DL",
    meta: "With us since 2024 · 6 seats",
  },
  {
    quote:
      "It's an AI agent that answers. It does work we used to handle by hand, and it saves us enormous time.",
    name: "William Souloy",
    role: "Co-founder & CEO",
    company: "Storen",
    initials: "WS",
    meta: "Runs the agent out of hours",
  },
];

export const plans = [
  {
    name: "Business & Sole Trader",
    price: "£28",
    cadence: "per user / month",
    note: "Billed monthly. No contract, cancel anytime.",
    tagline: "For sole traders and teams whose revenue comes off the phone.",
    cta: { label: "Start for free", href: "/signup" },
    highlight: false,
    features: [
      "1 local number per user",
      "Unlimited UK calls & texts",
      "Free number porting",
      "Mobile, desktop and web apps",
      "AI call summaries & transcription",
      "Voicemail & missed call text back",
      "Shared call history",
    ],
  },
  {
    name: "Advanced",
    price: "£38",
    cadence: "per user / month",
    note: "Billed monthly. No contract, cancel anytime.",
    tagline: "For growing teams that need routing, reporting and CRM sync.",
    cta: { label: "Start for free", href: "/signup" },
    highlight: true,
    features: [
      "Everything in Business & Sole Trader",
      "Native CRM sync (HubSpot, Salesforce, Pipedrive, Attio)",
      "Call routing, IVR and business hours",
      "Call recording & searchable transcripts",
      "Post-call actions & drafted follow-ups",
      "Call reporting & analytics",
      "Open API, webhooks and MCP",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "talk to sales",
    note: "Priced to your team size and compliance needs.",
    tagline: "For contact centres and regulated teams at scale.",
    cta: { label: "Call sales", href: "/contact" },
    highlight: false,
    features: [
      "Everything in Advanced",
      "Advanced compliance & retention controls",
      "Single sign-on (SAML)",
      "Dedicated success manager",
      "Custom reporting & data export",
      "99.99% uptime SLA",
    ],
  },
];

export const faqs = [
  {
    q: "Can I try it first, and how hard is the setup?",
    a: "Yes. We provide a 14-day free trial, cancel anytime, and our team takes care of the setup. It typically takes a few days.",
  },
  {
    q: "What does the AI receptionist actually do?",
    a: "It answers when nobody on your team can, asks the caller what they need, books straight into your calendar, and writes every call into your CRM. It is an add-on that takes one extra seat, and it hands the call to a person the moment it needs one. Today it answers calls, it does not place them.",
  },
  {
    q: "Does it work with my CRM?",
    a: "Yes, integrate it with your preferred CRM.",
  },
  {
    q: "How does it work with several people?",
    a: "Every seat comes with its own number, and you add or remove people whenever you like with no seat minimum.",
  },
  {
    q: "Can I keep my current number?",
    a: "Yes, and porting is free in both directions. It takes a few business days and there is no downtime: you keep taking calls on your current service right up to the moment the number switches over. We handle the paperwork with your existing provider.",
  },
  {
    q: "Do I need special phones or hardware?",
    a: "Greencaller runs on iPhone, Android, Mac, Windows and the web, and one account follows you between them.",
  },
];
