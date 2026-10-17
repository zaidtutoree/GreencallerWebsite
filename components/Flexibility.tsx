import Link from "next/link";
import { IconArrowRight, IconCheck } from "./Icons";
import { CircleScribble } from "./HandDrawn";

const terms = [
  {
    big: "14 days",
    title: "Free, and the whole thing",
    body: "Not a cut-down version. Every feature on your plan, your real numbers, your real team, for a fortnight.",
  },
  {
    big: "Monthly",
    title: "Cancel whenever you like",
    body: "No twelve-month tie-in, no exit fee, no notice period buried on page four. Stop at the end of the month you have paid for.",
  },
  {
    big: "£0",
    title: "To set up, and to leave",
    body: "No setup charge, no onboarding fee, and porting is free in both directions — including the direction that takes you somewhere else.",
  },
];

export default function Flexibility() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="relative inline-block px-6 py-2">
            <CircleScribble className="absolute inset-0 h-full w-full text-brand-400/60" />
            <span className="hand relative text-[23px] text-brand-800">No strings</span>
          </span>

          <h2 className="h-section mt-7">Try it for a fortnight. Leave whenever you want.</h2>
          <p className="lede mx-auto mt-5 max-w-[580px]">
            Phone contracts are where small businesses get stitched up. We would rather keep you
            because the thing works than because you signed something in March.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[980px] gap-4 md:grid-cols-3">
          {terms.map((t) => (
            <div
              key={t.title}
              className="flex flex-col rounded-2xl border border-line bg-cream/50 p-7 transition duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white hover:shadow-lift"
            >
              <span className="font-display text-[34px] font-semibold leading-none tracking-[-0.045em] text-brand-700">
                {t.big}
              </span>
              <h3 className="h-card mt-4">{t.title}</h3>
              <p className="mt-2.5 flex-1 text-[14.5px] font-light leading-relaxed text-muted">
                {t.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/signup" className="btn btn-primary btn-lg w-full sm:w-auto">
            Start your 14 days
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/pricing" className="btn btn-outline btn-lg w-full sm:w-auto">
            See what it costs
          </Link>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {["No card charged until day 14", "No setup fee", "30-day money-back"].map((x) => (
            <li key={x} className="flex items-center gap-1.5 text-[13.5px] font-light text-muted">
              <IconCheck className="h-4 w-4 shrink-0 text-brand-600" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
