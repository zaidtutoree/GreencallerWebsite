import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import { IconArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Partner Programme",
  description: "Refer clients, resell Greencaller or build on the API. Recurring commission, deal support and a dedicated partner manager.",
  alternates: { canonical: "/partners" },
};

const cards = [
  {
    "title": "Referral partner",
    "body": "Send us an introduction and earn 20% recurring for the life of the account. No commitment, no quota.",
    "action": "Apply"
  },
  {
    "title": "Reseller",
    "body": "Own the billing relationship and the margin, with white-labelled onboarding and priority support.",
    "action": "Apply"
  },
  {
    "title": "Agency partner",
    "body": "Set up and manage Greencaller for your clients from one console, with per-client reporting.",
    "action": "Apply"
  },
  {
    "title": "Technology partner",
    "body": "Build an integration on the open API and get listed in our directory.",
    "action": "Read the API docs"
  },
  {
    "title": "Deal support",
    "body": "A partner manager who joins your calls, handles the technical questions and helps you close.",
    "action": "Talk to us"
  },
  {
    "title": "Enablement",
    "body": "Demo environments, battlecards, migration guides and joint marketing funds.",
    "action": "Talk to us"
  }
];

export default function PartnersPage() {
  return (
    <SimplePage
      trail={[
        { label: "Home", href: "/" },
        { label: "Partners", href: "/partners" },
      ]}
      title="Build a business on top of ours"
      lede="Whether you refer a handful of clients a year or manage phone systems for hundreds, there is a route that pays properly."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="flex flex-col rounded-2xl border border-line bg-white p-6">
            <h2 className="h-card">{c.title}</h2>
            <p className="mt-2 flex-1 text-[14px] font-light leading-relaxed text-muted">{c.body}</p>
            <span className="link-arrow mt-5 !text-[13.5px] !text-brand-700">
              {c.action}
              <IconArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        ))}
      </div>
    </SimplePage>
  );
}
