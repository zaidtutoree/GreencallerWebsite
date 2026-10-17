import type { Metadata } from "next";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
import { Breadcrumbs } from "@/components/DetailPage";
import { IconArrowRight, IconCheck } from "@/components/Icons";
import { integrationDirectory, integrationKinds } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Integrations | Connect Your Phone System to Your CRM",
  description:
    "Greencaller connects to HubSpot, Salesforce, Pipedrive, Attio, Zoho, Google Calendar, Slack, Zapier and more. Every call lands on the right record automatically.",
  alternates: { canonical: "/integrations" },
};

function initials(name: string) {
  const words = name.replace(/[^A-Za-z. ]/g, "").split(" ").filter(Boolean);
  const caps = name.match(/[A-Z]/g) ?? [];
  const base =
    words.length > 1 ? words.map((w) => w[0]).join("") : caps.length > 1 ? caps.join("") : name;
  return base.slice(0, 2).toUpperCase();
}

export default function IntegrationsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-white pb-14 pt-10 sm:pt-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-18rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-[50%] bg-brand-100/40 blur-[100px]" />
        </div>
        <div className="container-page relative">
          <Breadcrumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "Integrations", href: "/integrations" },
            ]}
          />
          <h1 className="h-section max-w-[760px]">Connected to the tools you already use</h1>
          <p className="lede mt-5 max-w-[620px]">
            Every call lands in your CRM and every meeting in your calendar, on its own. Connections
            are set up from your account in a few minutes — no developer time and no professional
            services fee.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup" className="btn btn-primary btn-lg">
              Start for free
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/demo" className="btn btn-outline btn-lg">
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="container-page space-y-12">
          {integrationKinds.map((kind) => {
            const items = integrationDirectory.filter((i) => i.kind === kind);
            if (items.length === 0) return null;
            return (
              <div key={kind}>
                <h2 className="font-display mb-5 text-[13px] font-semibold uppercase tracking-[0.1em] text-muted-2">
                  {kind}
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {items.map((i) => (
                    <li
                      key={i.name}
                      className="flex flex-col rounded-2xl border border-line bg-white p-5"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream-2 text-[12px] font-bold text-ink/70 ring-1 ring-line">
                          {initials(i.name)}
                        </span>
                        <span className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                          {i.name}
                        </span>
                      </span>
                      <span className="mt-3 text-[13.5px] font-light leading-relaxed text-muted">
                        {i.blurb}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="rounded-3xl border border-line bg-white p-7 sm:p-9">
            <h2 className="h-card">What syncs, on every connection</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "The call, logged against the right contact and company",
                "The AI summary and the notes taken during the call",
                "A link to the recording, where your plan and settings allow it",
                "Contacts flowing both ways, so a number that rings is recognised",
              ].map((l) => (
                <li key={l} className="flex gap-2.5">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span className="text-[14.5px] font-light leading-relaxed text-ink/80">{l}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] font-light leading-relaxed text-muted">
              Native CRM sync is available on Advanced and Enterprise. Business &amp; Sole Trader
              reaches the same tools through Zapier and Make. Not sure whether your setup is covered?{" "}
              <Link href="/contact" className="font-medium text-ink underline underline-offset-4">
                Ask us
              </Link>{" "}
              and we will tell you straight.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
