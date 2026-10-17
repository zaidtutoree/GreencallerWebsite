import type { Metadata } from "next";
import Link from "next/link";
import SimplePage from "@/components/SimplePage";
import { IconArrowRight } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Greencaller. We are building the business phone system for companies whose revenue comes off the phone. Open roles in engineering, sales and support.",
  alternates: { canonical: "/careers" },
};

const roles = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "London / Remote (UK)", type: "Full time" },
  { title: "Voice Infrastructure Engineer", team: "Engineering", location: "London", type: "Full time" },
  { title: "Applied AI Engineer", team: "Engineering", location: "London / Remote (UK)", type: "Full time" },
  { title: "Account Executive, SMB", team: "Sales", location: "London", type: "Full time" },
  { title: "Customer Support Specialist", team: "Support", location: "Remote (UK)", type: "Full time" },
  { title: "Product Designer", team: "Design", location: "London / Remote (UK)", type: "Full time" },
];

const values = [
  ["Ship, then talk about it", "We would rather show you a working thing on Thursday than a plan on Monday."],
  ["Answer your own phone", "Everyone here, including the founders, takes support calls. It is the fastest product feedback there is."],
  ["Small teams, real ownership", "You will own a surface end to end, from the decision through to the on-call rota."],
  ["No contracts, internally either", "We do not lock customers in, and we do not think the job should feel like a lock-in for you."],
];

export default function CareersPage() {
  return (
    <SimplePage
      trail={[
        { label: "Home", href: "/" },
        { label: "Careers", href: "/careers" },
      ]}
      title="Come and build the thing that answers the phone"
      lede="We are a small team in London building a phone system used by thousands of businesses whose revenue depends on it. The work is unusually concrete."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {values.map(([t, b]) => (
          <div key={t} className="rounded-2xl border border-line bg-white p-6">
            <h2 className="h-card">{t}</h2>
            <p className="mt-2 text-[14.5px] font-light leading-relaxed text-muted">{b}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display mt-14 mb-5 text-[13px] font-semibold uppercase tracking-[0.1em] text-muted-2">
        Open roles
      </h2>
      <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
        {roles.map((r) => (
          <li key={r.title}>
            <a
              href={`mailto:${site.salesEmail}?subject=${encodeURIComponent(`Application: ${r.title}`)}`}
              className="group flex flex-wrap items-center gap-x-4 gap-y-1.5 px-6 py-5 transition hover:bg-cream-2"
            >
              <span className="font-display min-w-[240px] flex-1 text-[16px] font-semibold tracking-[-0.02em] text-ink">
                {r.title}
              </span>
              <span className="text-[13px] font-light text-muted">{r.team}</span>
              <span className="text-[13px] font-light text-muted">{r.location}</span>
              <span className="rounded-full bg-cream-2 px-2.5 py-1 text-[11.5px] font-medium text-muted ring-1 ring-line">
                {r.type}
              </span>
              <IconArrowRight className="h-4 w-4 shrink-0 text-muted-2 transition group-hover:translate-x-0.5 group-hover:text-brand-700" />
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[14px] font-light text-muted">
        Nothing that fits? Write to{" "}
        <a
          href={`mailto:${site.salesEmail}`}
          className="font-medium text-ink underline underline-offset-4"
        >
          {site.salesEmail}
        </a>{" "}
        and tell us what you would want to work on. Or{" "}
        <Link href="/about" className="font-medium text-ink underline underline-offset-4">
          read more about us
        </Link>{" "}
        first.
      </p>
    </SimplePage>
  );
}
