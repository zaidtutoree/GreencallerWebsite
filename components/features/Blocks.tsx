import Link from "next/link";
import { Icon, IconArrowRight, IconCheck } from "../Icons";
import type { Detail } from "@/lib/pages";
import type { FeatureDesign } from "@/lib/featureDesign";
import { site } from "@/lib/site";

type Point = Detail["points"][number];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function FeatureHero({
  detail,
  design,
  visual,
  trail,
}: {
  detail: Detail;
  design: FeatureDesign;
  visual: React.ReactNode;
  trail: { label: string; href: string }[];
}) {
  const dark = design.hero === "dark";

  return (
    <section
      className={`relative overflow-hidden pb-16 pt-8 sm:pt-12 ${
        dark ? "bg-deep" : "border-b border-line bg-white"
      }`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {dark ? (
          <>
            <div className="absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-brand-500/20 blur-[110px]" />
            <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:56px_56px]" />
          </>
        ) : (
          <div className="absolute left-1/2 top-[-20rem] h-[32rem] w-[54rem] -translate-x-1/2 rounded-[50%] bg-brand-100/40 blur-[100px]" />
        )}
      </div>

      <div className="container-page relative">
        {/* breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol
            className={`flex flex-wrap items-center gap-1.5 text-[13px] ${
              dark ? "text-white/40" : "text-muted-2"
            }`}
          >
            {trail.map((t, i) => (
              <li key={t.href} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden>/</span>}
                {i === trail.length - 1 ? (
                  <span className={dark ? "text-white/70" : "text-ink/70"}>{t.label}</span>
                ) : (
                  <Link href={t.href} className={dark ? "hover:text-white" : "hover:text-ink"}>
                    {t.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div>
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 ${
                dark
                  ? "bg-white/10 text-brand-300"
                  : "border border-line bg-white text-ink/70 shadow-soft"
              }`}
            >
              <Icon name={detail.icon} className="h-4 w-4" />
              <span className="text-[12.5px] font-semibold uppercase tracking-[0.08em]">
                {detail.eyebrow}
              </span>
            </span>

            <h1
              className={`font-display mt-6 text-[clamp(1.95rem,1.2rem+2.7vw,3.15rem)] font-semibold leading-[1.05] tracking-[-0.038em] ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              {detail.h1}
            </h1>

            <p
              className={`mt-5 max-w-[540px] text-[16.5px] font-light leading-relaxed ${
                dark ? "text-white/65" : "text-muted"
              }`}
            >
              {detail.lede}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/signup" className="btn btn-primary btn-lg">
                Start for free
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/demo"
                className={
                  dark
                    ? "btn btn-lg border border-white/20 bg-white/5 text-white hover:bg-white/10"
                    : "btn btn-outline btn-lg"
                }
              >
                Book a demo
              </Link>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {["14-day free trial", "No fixed contracts", "Keep your number"].map((x) => (
                <li
                  key={x}
                  className={`flex items-center gap-1.5 text-[13.5px] font-light ${
                    dark ? "text-white/55" : "text-muted"
                  }`}
                >
                  <IconCheck className={`h-4 w-4 ${dark ? "text-brand-400" : "text-brand-600"}`} />
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div>{visual}</div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Body layouts                                                        */
/* ------------------------------------------------------------------ */

function SectionHead({ design }: { design: FeatureDesign }) {
  return (
    <div className="mx-auto mb-12 max-w-[640px] text-center">
      <h2 className="h-section">{design.bodyHeading}</h2>
      {design.bodyLede && <p className="lede mx-auto mt-4 max-w-[520px]">{design.bodyLede}</p>}
    </div>
  );
}

/** Wide zig-zag rows with an oversized index — for narrative, sequential-feeling features. */
function Alternating({ points }: { points: Point[] }) {
  return (
    <div className="mx-auto max-w-[900px] space-y-3">
      {points.map((p, i) => (
        <article
          key={p.title}
          className={`grid items-start gap-x-6 gap-y-3 rounded-3xl border border-line p-7 sm:grid-cols-[auto_1fr] sm:p-8 ${
            i % 2 === 0 ? "bg-white" : "bg-cream/70"
          }`}
        >
          <span className="font-display text-[38px] font-semibold leading-none tracking-[-0.05em] text-brand-300">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="h-card">{p.title}</h3>
            <p className="mt-2.5 max-w-[62ch] text-[15px] font-light leading-relaxed text-muted">
              {p.body}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

/** Bordered cards in two columns. */
function Cards({ points }: { points: Point[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {points.map((p, i) => (
        <article key={p.title} className="card p-7">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-[13px] font-bold tabular-nums text-brand-800 ring-1 ring-brand-200">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="h-card mt-5">{p.title}</h3>
          <p className="mt-2.5 text-[15px] font-light leading-relaxed text-muted">{p.body}</p>
        </article>
      ))}
    </div>
  );
}

/** Connected rail — for features that are genuinely a sequence. */
function Timeline({ points }: { points: Point[] }) {
  return (
    <ol className="mx-auto max-w-[760px]">
      {points.map((p, i) => (
        <li key={p.title} className="relative flex gap-5 sm:gap-7">
          <div className="flex shrink-0 flex-col items-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-[13px] font-bold tabular-nums text-deep">
              {i + 1}
            </span>
            {i < points.length - 1 && <span className="mt-2 w-px flex-1 bg-line" />}
          </div>
          <div className={i < points.length - 1 ? "pb-9" : ""}>
            <h3 className="h-card">{p.title}</h3>
            <p className="mt-2.5 max-w-[58ch] text-[15px] font-light leading-relaxed text-muted">
              {p.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Big ticks on a tinted panel — reads as a list of guarantees. */
function Checklist({ points }: { points: Point[] }) {
  return (
    <div className="mx-auto max-w-[980px] rounded-[2rem] border border-line bg-cream/60 p-7 sm:p-10">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {points.map((p) => (
          <div key={p.title} className="flex gap-4">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500">
              <IconCheck className="h-4 w-4 text-deep" strokeWidth={2.6} />
            </span>
            <div>
              <h3 className="font-display text-[16.5px] font-semibold leading-snug tracking-[-0.025em] text-ink">
                {p.title}
              </h3>
              <p className="mt-2 text-[14.5px] font-light leading-relaxed text-muted">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Datasheet-ish grid without numbering — suits hardware. */
function Specs({ points }: { points: Point[] }) {
  return (
    <div className="mx-auto grid max-w-[1000px] gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
      {points.map((p) => (
        <article key={p.title} className="bg-white p-7">
          <h3 className="font-display text-[16px] font-semibold leading-snug tracking-[-0.025em] text-ink">
            {p.title}
          </h3>
          <p className="mt-2.5 text-[14.5px] font-light leading-relaxed text-muted">{p.body}</p>
        </article>
      ))}
    </div>
  );
}

const layouts = { alternating: Alternating, cards: Cards, timeline: Timeline, checklist: Checklist, specs: Specs };

export function FeatureBody({ detail, design }: { detail: Detail; design: FeatureDesign }) {
  const Layout = layouts[design.body];
  const tinted = design.body === "cards" || design.body === "specs";
  return (
    <section className={tinted ? "bg-cream py-20 sm:py-24" : "bg-white py-20 sm:py-24"}>
      <div className="container-page">
        <SectionHead design={design} />
        <Layout points={detail.points} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Fact strip                                                          */
/* ------------------------------------------------------------------ */

export function FeatureStrip({ design }: { design: FeatureDesign }) {
  const strip = design.strip;
  if (!strip) return null;

  if (strip.kind === "chips") {
    return (
      <section className="border-y border-line bg-white py-12">
        <div className="container-page flex flex-col items-center gap-5 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.11em] text-muted-2">
            {strip.title}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {strip.items.map((i) => (
              <li
                key={i.k}
                className="rounded-full border border-line bg-cream/70 px-4 py-2 text-[13.5px] font-medium text-ink"
              >
                {i.k}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-line bg-white py-14">
      <div className="container-page">
        <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.11em] text-muted-2">
          {strip.title}
        </p>
        <dl className="divide-y divide-line-2 border-t border-line-2">
          {strip.items.map((i) => (
            <div key={i.k} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
              <dt className="font-display text-[14.5px] font-semibold tracking-[-0.02em] text-ink">
                {i.k}
              </dt>
              <dd className="text-[14.5px] font-light leading-relaxed text-muted">{i.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ + related                                                       */
/* ------------------------------------------------------------------ */

export function FeatureFaq({
  detail,
  related,
}: {
  detail: Detail;
  related: { label: string; href: string }[];
}) {
  return (
    <section className="bg-cream py-20">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="h-section">Common questions</h2>
            <p className="lede mt-4">
              Or just ring us on{" "}
              <a href={site.phoneHref} className="font-medium text-ink underline underline-offset-4">
                {site.phoneDisplay}
              </a>{" "}
              and ask.
            </p>
          </div>
          <dl className="divide-y divide-line rounded-3xl border border-line bg-white px-7">
            {detail.faq.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-display text-[16.5px] font-semibold tracking-[-0.02em] text-ink">
                  {f.q}
                </dt>
                <dd className="mt-2.5 max-w-[64ch] text-[14.5px] font-light leading-relaxed text-muted">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.1em] text-muted-2">
            More features
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-medium text-ink transition hover:border-brand-300 hover:bg-brand-50"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
