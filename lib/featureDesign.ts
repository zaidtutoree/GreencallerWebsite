/**
 * Per-feature art direction. Each feature page pairs a bespoke illustration with a
 * hero treatment and a body layout that suits what the feature actually is —
 * sequential things get a timeline, hardware gets a spec grid, and so on.
 */

export type HeroTheme = "dark" | "light";
export type BodyLayout = "alternating" | "cards" | "timeline" | "checklist" | "specs";

export type FeatureDesign = {
  hero: HeroTheme;
  body: BodyLayout;
  bodyHeading: string;
  bodyLede?: string;
  /** A short factual band under the body — different shape per topic. */
  strip?: { title: string; kind: "chips" | "pairs"; items: { k: string; v?: string }[] };
};

export const featureDesign: Record<string, FeatureDesign> = {
  "ai-receptionist": {
    hero: "dark",
    body: "alternating",
    bodyHeading: "What it actually does once it picks up",
    bodyLede: "Not a voicemail with a personality. It works the call end to end.",
    strip: {
      title: "On every call it answers",
      kind: "chips",
      items: [
        { k: "Answers in one ring" },
        { k: "Qualifies the caller" },
        { k: "Reads your live calendar" },
        { k: "Transfers to a person" },
        { k: "Writes it into the CRM" },
      ],
    },
  },

  ivr: {
    hero: "light",
    body: "cards",
    bodyHeading: "A menu that gets people somewhere",
    bodyLede: "One level, real destinations, and an agent behind every option.",
    strip: {
      title: "Route on anything",
      kind: "chips",
      items: [
        { k: "Keypress" },
        { k: "What the caller says" },
        { k: "Time of day" },
        { k: "Known caller" },
        { k: "Language" },
        { k: "Bank holidays" },
      ],
    },
  },

  voicemail: {
    hero: "light",
    body: "checklist",
    bodyHeading: "Voicemail that people actually pick up",
    bodyLede: "Because reading thirty seconds beats dialling in for four minutes.",
    strip: {
      title: "The details",
      kind: "pairs",
      items: [
        { k: "Transcription", v: "Included on every plan" },
        { k: "Delivery", v: "Shared inbox, email, or both" },
        { k: "Greetings", v: "Per line, per team, per holiday" },
        { k: "Storage", v: "Within your retention window" },
      ],
    },
  },

  "mobile-app": {
    hero: "dark",
    body: "checklist",
    bodyHeading: "The office line, on the phone in your pocket",
    bodyLede: "Same number, same history, wherever the job takes you.",
    strip: {
      title: "One account, every device",
      kind: "chips",
      items: [
        { k: "iPhone" },
        { k: "Android" },
        { k: "macOS" },
        { k: "Windows" },
        { k: "Web" },
        { k: "Or just ring your mobile" },
      ],
    },
  },

  pbx: {
    hero: "light",
    body: "timeline",
    bodyHeading: "Everything the box in the cupboard did",
    bodyLede: "Extensions, transfers, hold and hunt groups — configured by you, in seconds.",
    strip: {
      title: "Worth knowing",
      kind: "pairs",
      items: [
        { k: "PSTN switch-off", v: "ISDN is being retired — you will need somewhere to go" },
        { k: "Concurrent calls", v: "Limited by your broadband, not by channel licences" },
        { k: "Adding a user", v: "About thirty seconds, no engineer" },
      ],
    },
  },

  "physical-phones": {
    hero: "light",
    body: "specs",
    bodyHeading: "Hardware that works out of the box",
    bodyLede: "Bring what you own, or let us send it pre-configured.",
    strip: {
      title: "What we supply",
      kind: "chips",
      items: [
        { k: "Desk phones" },
        { k: "Cordless DECT" },
        { k: "Conference units" },
        { k: "USB & Bluetooth headsets" },
        { k: "ATA adapters" },
      ],
    },
  },

  "click-to-call": {
    hero: "light",
    body: "timeline",
    bodyHeading: "Three seconds, start to logged",
    bodyLede: "See a number, click it, talk. The write-up takes care of itself.",
    strip: {
      title: "Works in",
      kind: "chips",
      items: [
        { k: "Chrome" },
        { k: "Edge" },
        { k: "Brave" },
        { k: "Arc" },
        { k: "Any CRM" },
        { k: "Any web page" },
      ],
    },
  },

  "ai-summaries": {
    hero: "light",
    body: "alternating",
    bodyHeading: "The write-up, done before the next call",
    bodyLede: "A few lines you can scan, not a transcript nobody reads.",
    strip: {
      title: "The details",
      kind: "pairs",
      items: [
        { k: "Languages", v: "English, French, Spanish, German, Italian, Dutch, Portuguese" },
        { k: "Templates", v: "Define the shape once, per team" },
        { k: "Sending", v: "Drafted and queued — a human always presses send" },
      ],
    },
  },

  "call-recording": {
    hero: "dark",
    body: "cards",
    bodyHeading: "Recorded is only useful if it is findable",
    bodyLede: "Speaker labels, timestamps and search across everything that was said.",
    strip: {
      title: "Controls you hold",
      kind: "pairs",
      items: [
        { k: "Scope", v: "Per number, per team, per call direction" },
        { k: "Pause", v: "Mid-call, for payment details" },
        { k: "Notices", v: "Automatic announcement at the start" },
        { k: "Retention", v: "12 months, or whatever you set on Enterprise" },
      ],
    },
  },

  "call-notes": {
    hero: "light",
    body: "alternating",
    bodyHeading: "Everything worth remembering, without typing",
    bodyLede: "The address, the price, the date agreed — caught as it is said.",
    strip: {
      title: "Captured automatically",
      kind: "chips",
      items: [
        { k: "Names" },
        { k: "Addresses" },
        { k: "Prices quoted" },
        { k: "Dates agreed" },
        { k: "Next steps" },
      ],
    },
  },
};

export const defaultFeatureDesign: FeatureDesign = {
  hero: "light",
  body: "cards",
  bodyHeading: "How it works",
};
