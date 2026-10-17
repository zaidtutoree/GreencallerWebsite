import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import PricingTeaser from "@/components/PricingTeaser";
import { Breadcrumbs } from "@/components/DetailPage";
import { IconArrowRight, IconCheck } from "@/components/Icons";
import { plans } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing | Business Phone System from £28 a Month",
  description:
    "Simple per-user pricing. One number per seat, unlimited UK texting and free porting on every plan, with no setup fee and no long contract. From £28 per user a month.",
  alternates: { canonical: "/pricing" },
};

const matrix: { group: string; rows: [string, string, string, string][] }[] = [
  {
    group: "Calling",
    rows: [
      ["Local number per user", "1", "1", "Unlimited"],
      ["Unlimited UK calls & texts", "yes", "yes", "yes"],
      ["Free number porting", "yes", "yes", "yes"],
      ["International numbers (50+ countries)", "yes", "yes", "yes"],
      ["Mobile, desktop and web apps", "yes", "yes", "yes"],
      ["Shared call history", "yes", "yes", "yes"],
      ["Voicemail & missed call text back", "yes", "yes", "yes"],
      ["Call routing, IVR and business hours", "Basic", "Advanced", "Advanced"],
    ],
  },
  {
    group: "AI & admin",
    rows: [
      ["AI call summaries", "yes", "yes", "yes"],
      ["Transcription & search", "no", "yes", "yes"],
      ["Call recording", "no", "yes", "yes"],
      ["Automatic call tagging", "no", "yes", "yes"],
      ["Post-call actions & drafted follow-ups", "no", "yes", "yes"],
      ["Summary templates per team", "no", "yes", "yes"],
      ["AI receptionist", "Add-on", "Add-on", "Add-on"],
    ],
  },
  {
    group: "Integrations & platform",
    rows: [
      ["Zapier & Make", "yes", "yes", "yes"],
      ["Native CRM sync", "no", "yes", "yes"],
      ["Call reporting & analytics", "no", "yes", "yes"],
      ["Open API & webhooks", "no", "yes", "yes"],
      ["MCP server", "no", "yes", "yes"],
      ["Single sign-on (SAML)", "no", "no", "yes"],
      ["Custom retention & data export", "no", "no", "yes"],
      ["Uptime SLA", "no", "99.9%", "99.99%"],
    ],
  },
];

function Cell({ v }: { v: string }) {
  if (v === "yes")
    return (
      <span className="flex justify-center">
        <IconCheck className="h-4 w-4 text-brand-600" />
        <span className="sr-only">Included</span>
      </span>
    );
  if (v === "no")
    return (
      <span className="flex justify-center text-muted-2" aria-label="Not included">
        &ndash;
      </span>
    );
  return <span className="block text-center text-[13px] font-medium text-ink">{v}</span>;
}

export default function PricingPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${site.name} Business Phone System`,
    description: site.description,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      lowPrice: "28",
      highPrice: "38",
      offerCount: plans.length,
      url: `${site.domain}/pricing`,
    },
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-white pb-10 pt-10 sm:pt-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-18rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-[50%] bg-brand-100/40 blur-[100px]" />
        </div>
        <div className="container-page relative">
          <Breadcrumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "Pricing", href: "/pricing" },
            ]}
          />
          <div className="max-w-[720px]">
            <h1 className="h-section">Pricing that does not punish you for growing</h1>
            <p className="lede mt-5">
              One number per seat, unlimited UK texting and free porting on every plan. No setup fee,
              no hardware, no long contract, and the first 30 days are money-back.
            </p>
          </div>
        </div>
      </section>

      <PricingTeaser />

      {/* Comparison matrix */}
      <section className="bg-cream py-20">
        <div className="container-page">
          <h2 className="h-section text-center">Compare the plans</h2>
          <div className="mt-10 overflow-x-auto rounded-3xl border border-line bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="w-[42%] px-6 py-4 text-[13px] font-semibold text-ink">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.name}
                      scope="col"
                      className="px-4 py-4 text-center text-[13px] font-semibold text-ink"
                    >
                      {p.name}
                      <span className="mt-0.5 block text-[12px] font-light text-muted-2">
                        {p.price === "Custom" ? "Custom" : `${p.price} ${p.cadence.replace(" / month", "/mo")}`}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map((g) => (
                  <Fragment key={g.group}>
                    <tr className="bg-cream/60">
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className="px-6 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.09em] text-muted-2"
                      >
                        {g.group}
                      </th>
                    </tr>
                    {g.rows.map((r) => (
                      <tr key={r[0]} className="border-t border-line-2">
                        <th
                          scope="row"
                          className="px-6 py-3 text-left text-[13.5px] font-light text-ink/85"
                        >
                          {r[0]}
                        </th>
                        <td className="px-4 py-3">
                          <Cell v={r[1]} />
                        </td>
                        <td className="px-4 py-3">
                          <Cell v={r[2]} />
                        </td>
                        <td className="px-4 py-3">
                          <Cell v={r[3]} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "AI receptionist add-on",
                b: "Takes one extra seat on your plan. Unlimited conversations, billed from pooled call credits.",
              },
              {
                t: "Pooled call credits",
                b: "Credit is shared across the company rather than per seat, so a heavy month for one rep does not blow up their line.",
              },
              {
                t: "Done-for-you setup",
                b: "Prefer to hand it over? Our team configures your numbers, routing and agent for a one-time fee.",
              },
            ].map((c) => (
              <div key={c.t} className="card p-6">
                <h3 className="h-card">{c.t}</h3>
                <p className="mt-2 text-[14px] font-light leading-relaxed text-muted">{c.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/contact" className="link-arrow">
              Need more than 50 seats? Talk to sales
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
