import {
  IconCalendar,
  IconChart,
  IconCheck,
  IconMessage,
  IconMissed,
  IconPhone,
  IconPhoneIn,
  IconPhoneOut,
  IconSparkle,
  IconUsers,
} from "./Icons";

const nav = [
  { label: "Conversations", icon: IconMessage, badge: "12" },
  { label: "Calls", icon: IconPhone, active: true },
  { label: "Summaries", icon: IconSparkle },
  { label: "Contacts", icon: IconUsers },
  { label: "Members", icon: IconUsers },
  { label: "Reporting", icon: IconChart },
];

const calls = [
  {
    name: "Hannah Whitfield",
    org: "Whitfield Plumbing",
    time: "09:41",
    dir: "in" as const,
    tag: "Booked",
    tone: "good" as const,
    len: "4:12",
  },
  {
    name: "+44 7700 900318",
    org: "New caller",
    time: "09:28",
    dir: "missed" as const,
    tag: "AI answered",
    tone: "ai" as const,
    len: "1:57",
  },
  {
    name: "Marcus Oyelaran",
    org: "Northbeam",
    time: "09:02",
    dir: "out" as const,
    tag: "Follow-up",
    tone: "neutral" as const,
    len: "7:44",
  },
  {
    name: "Priya Raghunathan",
    org: "Atlas Lending",
    time: "08:47",
    dir: "in" as const,
    tag: "Quote sent",
    tone: "good" as const,
    len: "3:05",
  },
  {
    name: "Tom Beckett",
    org: "Kettle & Co",
    time: "08:19",
    dir: "out" as const,
    tag: "Voicemail",
    tone: "neutral" as const,
    len: "0:22",
  },
];

const toneClass: Record<string, string> = {
  good: "bg-brand-50 text-brand-800 ring-brand-200",
  ai: "bg-ink/5 text-ink/70 ring-ink/10",
  neutral: "bg-cream-2 text-muted ring-line",
};

function DirIcon({ dir }: { dir: "in" | "out" | "missed" }) {
  if (dir === "in")
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
        <IconPhoneIn className="h-3.5 w-3.5" />
      </span>
    );
  if (dir === "out")
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream-2 text-muted">
        <IconPhoneOut className="h-3.5 w-3.5" />
      </span>
    );
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
      <IconMissed className="h-3.5 w-3.5" />
    </span>
  );
}

export default function AppMockup() {
  return (
    <div className="overflow-hidden rounded-[18px] border border-line bg-white shadow-panel">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-cream px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e5e7e6]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e5e7e6]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e5e7e6]" />
        </span>
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] text-muted-2 ring-1 ring-line">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          app.greencaller.co.uk
        </div>
      </div>

      <div className="grid grid-cols-[132px_1fr] sm:grid-cols-[152px_1fr] lg:grid-cols-[152px_minmax(0,1.1fr)_minmax(0,0.95fr)]">
        {/* sidebar */}
        <aside className="border-r border-line bg-cream/60 p-3">
          <div className="mb-3 flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 ring-1 ring-line">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-brand-500 text-[9px] font-bold text-deep">
              GC
            </span>
            <span className="truncate text-[11.5px] font-semibold text-ink">Greencaller</span>
          </div>
          <ul className="space-y-0.5">
            {nav.map((n) => (
              <li key={n.label}>
                <span
                  className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11.5px] ${
                    n.active
                      ? "bg-white font-semibold text-ink shadow-[0_1px_2px_rgba(8,33,26,0.05)] ring-1 ring-line"
                      : "text-muted"
                  }`}
                >
                  <n.icon className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{n.label}</span>
                  {n.badge && (
                    <span className="ml-auto rounded-full bg-brand-500 px-1.5 text-[9px] font-bold text-deep">
                      {n.badge}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg border border-brand-200 bg-brand-50 p-2.5">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-brand-800">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-500 animate-pulse-ring" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-600" />
              </span>
              Agent live
            </div>
            <p className="mt-1 text-[10.5px] leading-snug text-brand-900/70">
              Answering out of hours
            </p>
          </div>
        </aside>

        {/* call list */}
        <section className="min-w-0 border-r border-line p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[13px] font-semibold text-ink">Today</p>
              <p className="text-[11px] text-muted-2">28 calls &middot; 6 booked</p>
            </div>
            <span className="rounded-full bg-cream-2 px-2 py-1 text-[10.5px] font-medium text-muted ring-1 ring-line">
              All lines
            </span>
          </div>
          <ul className="space-y-1">
            {calls.map((c) => (
              <li
                key={c.name}
                className="flex items-center gap-2.5 rounded-xl px-2 py-2 transition hover:bg-cream-2"
              >
                <DirIcon dir={c.dir} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-medium text-ink">{c.name}</p>
                  <p className="truncate text-[10.5px] text-muted-2">
                    {c.org} &middot; {c.len}
                  </p>
                </div>
                <span
                  className={`hidden shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 sm:block ${toneClass[c.tone]}`}
                >
                  {c.tag}
                </span>
                <span className="shrink-0 text-[10.5px] tabular-nums text-muted-2">{c.time}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* summary panel */}
        <section className="hidden min-w-0 flex-col bg-cream/40 p-3.5 lg:flex">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-[11px] font-bold text-deep">
              HW
            </span>
            <div className="min-w-0">
              <p className="truncate text-[12.5px] font-semibold text-ink">Hannah Whitfield</p>
              <p className="truncate text-[10.5px] text-muted-2">Whitfield Plumbing &middot; 09:41</p>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-line bg-white p-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-700">
              <IconSparkle className="h-3 w-3" /> AI summary
            </div>
            <p className="mt-2 text-[11.5px] font-light leading-relaxed text-ink/80">
              Boiler service overdue on a 3-bed in Islington. Hannah wants a Thursday morning slot
              and a written quote before the visit. Confirmed the £89 call-out is waived if work goes
              ahead.
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1">
              {["Booked", "Domestic", "Quote requested"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-cream-2 px-2 py-0.5 text-[10px] font-medium text-muted ring-1 ring-line"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-2.5 space-y-1.5">
            {[
              { icon: IconCalendar, label: "Job booked", sub: "Thu 10:00 · Islington" },
              { icon: IconMessage, label: "Text drafted", sub: "Quote + arrival window" },
              { icon: IconCheck, label: "Synced to HubSpot", sub: "Deal moved to Quoted" },
            ].map((r) => (
              <div
                key={r.label}
                className="flex items-center gap-2 rounded-lg border border-line bg-white px-2.5 py-2"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                  <r.icon className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-medium text-ink">{r.label}</p>
                  <p className="truncate text-[10px] text-muted-2">{r.sub}</p>
                </div>
                <IconCheck className="ml-auto h-3.5 w-3.5 shrink-0 text-brand-600" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
