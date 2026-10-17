import { IconCheck, IconPhoneIn, IconSparkle } from "./Icons";

function Shell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-x-4 -bottom-4 top-8 rounded-[2rem] bg-gradient-to-br from-brand-100/60 to-brand-50/30 blur-2xl"
      />
      <div
        role="img"
        aria-label={label}
        className="relative overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-lift sm:p-5"
      >
        {children}
      </div>
    </div>
  );
}

/* ---------------- Call summary / admin ---------------- */
export function SummaryVisual() {
  return (
    <Shell label="Automatic call summary with a drafted follow-up email and CRM update">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <IconPhoneIn className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-ink">Marcus Oyelaran</p>
          <p className="truncate text-[11.5px] text-muted-2">
            Northbeam &middot; 7:44 &middot; Ended 2 min ago
          </p>
        </div>
        <span className="ml-auto shrink-0 rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-800 ring-1 ring-brand-200">
          Follow-up
        </span>
      </div>

      <div className="mt-3 rounded-2xl border border-line bg-cream/50 p-3.5">
        <p className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.09em] text-brand-700">
          <IconSparkle className="h-3 w-3" /> Summary
        </p>
        <ul className="mt-2 space-y-1.5">
          {[
            "Migrating 14 seats off Aircall at the end of the quarter",
            "Blocker is Salesforce logging — needs calls on the opportunity",
            "Wants a security pack before legal review",
          ].map((l) => (
            <li key={l} className="flex gap-2 text-[11.5px] font-light leading-snug text-ink/80">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
              {l}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-2.5 rounded-2xl border border-line bg-white p-3.5">
        <div className="flex items-center justify-between">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.09em] text-muted-2">
            Draft email
          </p>
          <span className="rounded-full bg-cream-2 px-2 py-0.5 text-[10px] font-medium text-muted ring-1 ring-line">
            Not sent
          </span>
        </div>
        <p className="mt-2 text-[11.5px] font-light leading-relaxed text-ink/75">
          Hi Marcus &mdash; thanks for your time. Attaching the SOC 2 pack and a note on how we log
          calls against Salesforce opportunities. Shall I hold 14 seats for the 1st?
        </p>
        <div className="mt-2.5 flex gap-1.5">
          <span className="btn btn-primary btn-sm !py-1.5 !text-[11px]">Send</span>
          <span className="btn btn-outline btn-sm !py-1.5 !text-[11px]">Edit</span>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-2 rounded-xl border border-brand-200 bg-brand-50/60 px-3 py-2.5">
        <IconCheck className="h-4 w-4 shrink-0 text-brand-700" />
        <p className="text-[11.5px] font-light text-brand-900/80">
          Salesforce updated &middot; Task created &middot; Meeting held Tue 14:00
        </p>
      </div>
    </Shell>
  );
}

export const visualMap = {
  summary: SummaryVisual,
} as const;
