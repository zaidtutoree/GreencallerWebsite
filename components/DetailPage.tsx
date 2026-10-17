import Link from "next/link";
import { Icon, IconArrowRight, IconCheck, IconPhone, IconSparkle } from "./Icons";
import FinalCTA from "./FinalCTA";
import type { Detail } from "@/lib/pages";
import { site } from "@/lib/site";

/** Compact proof panel that anchors the right-hand side of an inner page hero. */
function HeroPanel({ detail }: { detail: Detail }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-x-4 -bottom-4 top-8 rounded-[2rem] bg-gradient-to-br from-brand-100/60 to-brand-50/30 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
        <div className="relative overflow-hidden bg-deep p-5">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-500/25 blur-2xl"
          />
          <div className="relative flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500 text-deep">
              <Icon name={detail.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[14px] font-semibold text-white">{detail.name}</p>
              <p className="truncate text-[12px] text-white/55">
                Included on Greencaller Business
              </p>
            </div>
            <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-brand-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 animate-pulse-ring" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
              </span>
              Live
            </span>
          </div>
        </div>

        <ul className="divide-y divide-line-2">
          {detail.points.slice(0, 4).map((p) => (
            <li key={p.title} className="flex gap-3 px-5 py-3.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                <IconCheck className="h-3 w-3 text-brand-800" strokeWidth={2.6} />
              </span>
              <span className="text-[13.5px] font-light leading-snug text-ink/80">{p.title}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5 border-t border-line bg-cream/60 px-5 py-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 ring-1 ring-line">
            <IconSparkle className="h-4 w-4" />
          </span>
          <p className="text-[12.5px] font-light leading-snug text-muted">
            Set up in plain words. Most teams are live the same day.
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2.5 rounded-2xl border border-line bg-white px-4 py-3 shadow-soft">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-deep">
          <IconPhone className="h-4 w-4" />
        </span>
        <p className="text-[12.5px] font-light text-muted">
          Hear it yourself &mdash;{" "}
          <a href={site.phoneHref} className="font-medium tabular-nums text-ink">
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted-2">
        {trail.map((t, i) => (
          <li key={t.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>/</span>}
            {i === trail.length - 1 ? (
              <span className="text-ink/70">{t.label}</span>
            ) : (
              <Link href={t.href} className="hover:text-ink">
                {t.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function DetailPage({
  detail,
  trail,
  related,
  relatedTitle,
}: {
  detail: Detail;
  trail: { label: string; href: string }[];
  related: { label: string; href: string }[];
  relatedTitle: string;
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-white pb-16 pt-10 sm:pt-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-18rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-[50%] bg-brand-100/40 blur-[100px]" />
        </div>
        <div className="container-page relative">
          <Breadcrumbs trail={trail} />
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-[640px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 shadow-soft">
              <Icon name={detail.icon} className="h-4 w-4 text-brand-600" />
              <span className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-ink/70">
                {detail.eyebrow}
              </span>
            </span>
            <h1 className="h-section mt-6">{detail.h1}</h1>
            <p className="lede mt-5 max-w-[620px]">{detail.lede}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/signup" className="btn btn-primary btn-lg">
                Start for free
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/demo" className="btn btn-outline btn-lg">
                Book a demo
              </Link>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {["No hardware", "Keep your number", "Cancel anytime"].map((x) => (
                <li key={x} className="flex items-center gap-1.5 text-[13.5px] font-light text-muted">
                  <IconCheck className="h-4 w-4 text-brand-600" />
                  {x}
                </li>
              ))}
            </ul>
          </div>

            <div className="hidden lg:block">
              <HeroPanel detail={detail} />
            </div>
          </div>
        </div>
      </section>

      {/* Points */}
      <section className="bg-cream py-18 sm:py-20">
        <div className="container-page py-4">
          <div className="grid gap-4 md:grid-cols-2">
            {detail.points.map((p, i) => (
              <article key={p.title} className="card p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-[13px] font-bold tabular-nums text-brand-800 ring-1 ring-brand-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="h-card mt-5">{p.title}</h2>
                <p className="mt-2.5 text-[15px] font-light leading-relaxed text-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="h-section">Common questions</h2>
              <p className="lede mt-4">
                Still unsure? Call us on{" "}
                <a href={site.phoneHref} className="font-medium text-ink underline underline-offset-4">
                  {site.phoneDisplay}
                </a>{" "}
                and our agent will put you through.
              </p>
            </div>
            <dl className="divide-y divide-line rounded-3xl border border-line bg-cream/40 px-7">
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

          {/* Related */}
          <div className="mt-16 border-t border-line pt-10">
            <h2 className="font-display text-[15px] font-semibold uppercase tracking-[0.08em] text-muted-2">
              {relatedTitle}
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

      <FinalCTA />
    </>
  );
}
