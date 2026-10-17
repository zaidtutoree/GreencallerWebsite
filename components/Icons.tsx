import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const IconPhone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4.5 5.2c0-.7.6-1.3 1.3-1.3h2.4c.6 0 1.1.4 1.2 1l.6 2.6c.1.5-.1 1-.5 1.3l-1.3.9a12 12 0 0 0 5.1 5.1l.9-1.3c.3-.4.8-.6 1.3-.5l2.6.6c.6.1 1 .6 1 1.2v2.4c0 .7-.6 1.3-1.3 1.3A15.3 15.3 0 0 1 4.5 5.2Z" />
  </svg>
);

export const IconPhoneIn = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4.5 5.2c0-.7.6-1.3 1.3-1.3h2.1c.6 0 1.1.4 1.2 1l.5 2.3c.1.5-.1 1-.5 1.2l-1.2.8a12 12 0 0 0 5 5l.8-1.2c.3-.4.8-.6 1.2-.5l2.3.5c.6.1 1 .6 1 1.2v2.1c0 .7-.6 1.3-1.3 1.3A15.3 15.3 0 0 1 4.5 5.2Z" />
    <path d="M20 4l-4.6 4.6M15.4 4.6v4h4" />
  </svg>
);

export const IconPhoneOut = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4.5 5.2c0-.7.6-1.3 1.3-1.3h2.1c.6 0 1.1.4 1.2 1l.5 2.3c.1.5-.1 1-.5 1.2l-1.2.8a12 12 0 0 0 5 5l.8-1.2c.3-.4.8-.6 1.2-.5l2.3.5c.6.1 1 .6 1 1.2v2.1c0 .7-.6 1.3-1.3 1.3A15.3 15.3 0 0 1 4.5 5.2Z" />
    <path d="M15.4 8.6 20 4M20 8V4h-4" />
  </svg>
);

export const IconMissed = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4.5 5.2c0-.7.6-1.3 1.3-1.3h2.1c.6 0 1.1.4 1.2 1l.5 2.3c.1.5-.1 1-.5 1.2l-1.2.8a12 12 0 0 0 5 5l.8-1.2c.3-.4.8-.6 1.2-.5l2.3.5c.6.1 1 .6 1 1.2v2.1c0 .7-.6 1.3-1.3 1.3A15.3 15.3 0 0 1 4.5 5.2Z" />
    <path d="m15.5 3.5 4.5 4.5M20 3.5 15.5 8" />
  </svg>
);

export const IconSparkle = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
    <path d="M18.5 15.5 19.2 18l2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.5Z" />
  </svg>
);

export const IconList = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />
  </svg>
);

export const IconPencil = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
    <path d="m14.5 6.5 3 3" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base} {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const IconArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4.5 12h15m0 0-5.5-5.5M19.5 12 14 17.5" />
  </svg>
);

export const IconChevronDown = (p: P) => (
  <svg {...base} {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </svg>
);

export const IconStar = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2.6 15 9l7 .9-5.1 4.7 1.4 6.9L12 18.1 5.7 21.5l1.4-6.9L2 9.9 9 9l3-6.4Z" />
  </svg>
);

export const IconHash = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 3.5 7 20.5M17 3.5l-2 17M4 9h16M3 15h16" />
  </svg>
);

export const IconUsers = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.4" />
    <path d="M2.8 20a6.2 6.2 0 0 1 12.4 0" />
    <path d="M16.5 5.2a3.4 3.4 0 0 1 0 6.6M17.5 14.4A6.2 6.2 0 0 1 21.2 20" />
  </svg>
);

export const IconSliders = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h9M17 7h3M4 17h3M11 17h9" />
    <circle cx="15" cy="7" r="2.2" />
    <circle cx="9" cy="17" r="2.2" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 5.8v5.4c0 4.3 2.9 8.2 7 9.3 4.1-1.1 7-5 7-9.3V5.8L12 3Z" />
    <path d="m9 12 2.2 2.2L15.4 10" />
  </svg>
);

export const IconTarget = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.2" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" />
  </svg>
);

export const IconBuilding = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20.5V5.2a1 1 0 0 1 1.3-1l7 2.1a1 1 0 0 1 .7 1v13.2M13 10h5.7a1 1 0 0 1 1 1v9.5M2.5 20.5h19" />
    <path d="M7 10h2M7 14h2M16 14h1.5M16 17h1.5" />
  </svg>
);

export const IconWrench = (p: P) => (
  <svg {...base} {...p}>
    <path d="M15.6 3.4a5.2 5.2 0 0 0-6.4 6.7L3.7 15.6a2 2 0 0 0 2.8 2.8l5.5-5.5a5.2 5.2 0 0 0 6.7-6.4l-3 3-2.6-.7-.7-2.6 3.2-2.8Z" />
  </svg>
);

export const IconHeart = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7.5-4.4-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.6 12 20 12 20Z" />
  </svg>
);

export const IconChart = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20h16M7 20v-6M12 20V7M17 20v-9" />
  </svg>
);

export const IconScale = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 4v16M7 20h10M5 8h14M5 8 2.5 14h5L5 8ZM19 8l-2.5 6h5L19 8Z" />
  </svg>
);

export const IconRocket = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3c3.6 2 5.5 5.4 5.5 9.3L14 16h-4l-3.5-3.7C6.5 8.4 8.4 5 12 3Z" />
    <circle cx="12" cy="10" r="1.7" />
    <path d="M9 17c-1.4.8-2 2-2 4 2 0 3.2-.6 4-2M15 17c1.4.8 2 2 2 4-2 0-3.2-.6-4-2" />
  </svg>
);

export const IconGrid = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.8" y="3.8" width="6.4" height="6.4" rx="1.6" />
    <rect x="13.8" y="3.8" width="6.4" height="6.4" rx="1.6" />
    <rect x="3.8" y="13.8" width="6.4" height="6.4" rx="1.6" />
    <rect x="13.8" y="13.8" width="6.4" height="6.4" rx="1.6" />
  </svg>
);

export const IconPlay = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M8 5.4v13.2a.8.8 0 0 0 1.2.7l10.4-6.6a.8.8 0 0 0 0-1.4L9.2 4.7A.8.8 0 0 0 8 5.4Z" />
  </svg>
);

export const IconGlobe = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5a14 14 0 0 1 0 17 14 14 0 0 1 0-17Z" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const IconCalendar = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
  </svg>
);

export const IconMessage = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20.5 12.5c0 3.9-3.8 7-8.5 7-1 0-2-.1-2.9-.4L4 20.5l1.4-4A6.5 6.5 0 0 1 3.5 12c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7Z" />
  </svg>
);

export const IconBolt = (p: P) => (
  <svg {...base} {...p}>
    <path d="M13.5 2.5 4.5 13.5h6l-.5 8 9-11h-6l.5-8Z" />
  </svg>
);

export const IconRecord = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9.5" r="6" />
    <circle cx="12" cy="9.5" r="2.2" fill="currentColor" stroke="none" />
    <path d="M4.5 13.5a7.5 7.5 0 0 0 15 0M12 18.5v3M8.5 21.5h7" />
  </svg>
);

export const IconNote = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 3.5h8.5L19 8v12.5H6z" />
    <path d="M14 3.5V8h5M9 12.5h7M9 16h5" />
  </svg>
);

export const iconMap: Record<string, (p: P) => React.JSX.Element> = {
  record: IconRecord,
  note: IconNote,
  phone: IconPhone,
  "phone-in": IconPhoneIn,
  "phone-out": IconPhoneOut,
  missed: IconMissed,
  sparkle: IconSparkle,
  list: IconList,
  pencil: IconPencil,
  hash: IconHash,
  users: IconUsers,
  sliders: IconSliders,
  shield: IconShield,
  target: IconTarget,
  building: IconBuilding,
  wrench: IconWrench,
  heart: IconHeart,
  chart: IconChart,
  scale: IconScale,
  rocket: IconRocket,
  grid: IconGrid,
  globe: IconGlobe,
  calendar: IconCalendar,
  message: IconMessage,
  bolt: IconBolt,
};

export function Icon({ name, ...rest }: { name: string } & P) {
  const C = iconMap[name] ?? IconPhone;
  return <C {...rest} />;
}
