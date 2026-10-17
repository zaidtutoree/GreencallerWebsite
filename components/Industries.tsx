import Link from "next/link";
import { Icon, IconArrowRight } from "./Icons";
import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[620px]">
            <h2 className="h-section">Every team, every type of call</h2>
            <p className="lede mt-4">The same phone system, tuned to your trade.</p>
          </div>
          <Link href="/solutions" className="link-arrow shrink-0">
            See all industries
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {industries.map((i) => (
            <div
              key={i.name}
              className="flex items-center gap-3.5 rounded-2xl border border-line bg-white p-4 sm:p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream-2 text-brand-700">
                <Icon name={i.icon} className="h-5 w-5" />
              </span>
              <span className="font-display text-[15px] font-semibold leading-tight tracking-[-0.02em] text-ink">
                {i.name}
              </span>
            </div>
          ))}
        </div>

        {/* Spotlight */}
        <div className="relative mt-6 overflow-hidden rounded-3xl bg-deep p-8 sm:p-12">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute inset-0 grid-bg opacity-[0.15] [background-image:linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)]"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="eyebrow !text-brand-300">Home services</span>
              <h3 className="font-display mt-4 text-[clamp(1.6rem,1.1rem+1.8vw,2.4rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-white">
                Never miss a job because your hands were full
              </h3>
              <p className="mt-4 max-w-[520px] text-[16px] font-light leading-relaxed text-white/65">
                Greencaller answers, texts back and books the job when you&rsquo;re up a ladder or
                under a sink.
              </p>
              <Link
                href="/solutions/home-services"
                className="link-arrow mt-7 !text-brand-300 hover:!text-brand-200"
              >
                See Greencaller for home services
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
              <div className="space-y-2.5">
                {[
                  { t: "21:14", l: "Missed call from +44 7700 900318", s: "You were on a job" },
                  { t: "21:14", l: "Agent picked up", s: "Asked what they needed" },
                  { t: "21:16", l: "Booked Thu 10:00", s: "Straight into your diary" },
                  { t: "21:16", l: "Text sent to caller", s: "Arrival window confirmed" },
                ].map((r) => (
                  <div key={r.l} className="flex gap-3">
                    <span className="w-9 shrink-0 pt-0.5 text-[11px] tabular-nums text-white/40">
                      {r.t}
                    </span>
                    <span className="relative flex flex-col items-center">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-brand-400" />
                      <span className="mt-1 w-px flex-1 bg-white/15" />
                    </span>
                    <span className="min-w-0 pb-1">
                      <span className="block text-[12.5px] font-medium text-white">{r.l}</span>
                      <span className="block text-[11.5px] text-white/45">{r.s}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
