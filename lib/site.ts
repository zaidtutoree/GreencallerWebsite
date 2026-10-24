export const site = {
  name: "Greencaller",
  legalName: "Greencaller Ltd",
  domain: "https://www.greencaller.co.uk",
  tagline: "The business phone system that handles the work your calls create",
  description:
    "Greencaller is the VoIP business phone system for UK teams. One number your team can answer from the mobile app, a laptop or a desk phone, with a shared call history and no contract.",
  phoneDisplay: "020 4620 3846",
  phoneHref: "tel:+442046203846",
  salesEmail: "hello@greencaller.co.uk",
  supportEmail: "support@greencaller.co.uk",
  address: {
    street: "128 City Road",
    locality: "London",
    region: "England",
    postalCode: "EC1V 2NX",
    country: "GB",
  },
  social: {
    x: "https://x.com/greencaller",
    linkedin: "https://www.linkedin.com/company/greencaller",
    youtube: "https://www.youtube.com/@greencaller",
  },
  rating: { value: 4.8, count: 6200 },
} as const;

export type NavLink = { label: string; href?: string; desc?: string };
export type NavColumn = { title: string; links: NavLink[] };

export const featuresNav: NavColumn[] = [
  {
    title: "Answer every call",
    links: [
      { label: "AI Receptionist", href: "/features/ai-receptionist", desc: "Picks up 24/7, books the job" },
      { label: "IVR", href: "/features/ivr", desc: "Send callers to the right team" },
      { label: "Voicemail", href: "/features/voicemail", desc: "Transcribed, shared, never lost" },
    ],
  },
  {
    title: "Your phone system",
    links: [
      { label: "Mobile App", href: "/features/mobile-app", desc: "Your line, in your pocket" },
      { label: "PBX", href: "/features/pbx", desc: "Extensions, transfers, ring groups" },
      { label: "Physical Phones", href: "/features/physical-phones", desc: "Desk handsets and headsets" },
      { label: "Click to Call", href: "/features/click-to-call", desc: "Dial from any tab in one click" },
    ],
  },
  {
    title: "After the call",
    links: [
      { label: "AI Call Summaries", href: "/features/ai-summaries", desc: "Every call written up for you" },
      { label: "Call Recording & Transcription", href: "/features/call-recording", desc: "Searchable, shareable, compliant" },
      { label: "Call Note Taking", href: "/features/call-notes", desc: "Notes written while you talk" },
    ],
  },
];

export const solutionsNav: NavColumn[] = [
  {
    title: "By use case",
    links: [
      { label: "Sales", href: "/solutions/sales" },
      { label: "Customer Support", href: "/solutions/support" },
      { label: "Operations", href: "/solutions/operations" },
      { label: "Marketing", href: "/solutions/marketing" },
      { label: "Recruiting", href: "/solutions/recruiting" },
      { label: "Founders", href: "/solutions/founders" },
    ],
  },
  {
    title: "By industry",
    links: [
      { label: "Home Services", href: "/solutions/home-services" },
      { label: "Estate Agents", href: "/solutions/estate-agents" },
      { label: "Law Firms", href: "/solutions/law-firms" },
      { label: "Insurance", href: "/solutions/insurance" },
      { label: "Medical Practices", href: "/solutions/medical" },
      { label: "Restaurants", href: "/solutions/restaurants" },
      { label: "Financial Advisers", href: "/solutions/financial-advisers" },
      { label: "Software Companies", href: "/solutions/software" },
    ],
  },
];

export const integrationsNav: NavColumn[] = [
  {
    title: "CRM",
    links: [
      { label: "HubSpot" },
      { label: "Salesforce" },
      { label: "Pipedrive" },
      { label: "Attio" },
      { label: "Zoho" },
    ],
  },
  {
    title: "Calendar & productivity",
    links: [
      { label: "Google Calendar" },
      { label: "Google Sheets" },
      { label: "Notion" },
      { label: "Slack" },
      { label: "Microsoft Teams" },
    ],
  },
];

export const resourcesNav: NavColumn[] = [
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Customer Stories", href: "/customers" },
      { label: "Cold Calling Playbook", href: "/resources/cold-calling-playbook" },
      { label: "VoIP Learning Hub", href: "/resources/voip-guide" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", href: "/help" },
      { label: "Number Porting", href: "/resources/number-porting" },
      { label: "International Rates", href: "/resources/international-rates" },
      { label: "Download Apps", href: "/download" },
    ],
  },
];
