import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import { IconArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Reviews & Ratings",
  description: "What customers say about Greencaller across G2, Capterra and Trustpilot, and the badges we have picked up along the way.",
  alternates: { canonical: "/reviews" },
};

const cards = [
  {
    "title": "G2",
    "body": "High Performer, Easiest To Use and Best Estimated ROI for small business, Autumn 2026.",
    "action": "Read on G2"
  },
  {
    "title": "Capterra",
    "body": "Rated highest for value for money and ease of setup in the VoIP category.",
    "action": "Read on Capterra"
  },
  {
    "title": "Trustpilot",
    "body": "Strongest scores on support responsiveness and billing transparency.",
    "action": "Read on Trustpilot"
  },
  {
    "title": "What people praise",
    "body": "Same-day setup, the quality of the call summaries, and pricing that does not change at renewal.",
    "action": "See customer stories"
  },
  {
    "title": "What people ask us to fix",
    "body": "More languages for the AI receptionist, and deeper reporting on outbound campaigns. Both are on the roadmap.",
    "action": "See the changelog"
  },
  {
    "title": "Leave a review",
    "body": "If you use Greencaller, we would genuinely rather have the criticism than the silence.",
    "action": "Write a review"
  }
];

export default function ReviewsPage() {
  return (
    <SimplePage
      trail={[
        { label: "Home", href: "/" },
        { label: "Reviews", href: "/reviews" },
      ]}
      title="4.8 out of 5, from 6,200+ businesses"
      lede="We do not curate the reviews. Here is where to read them in full, and what people consistently say."
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
