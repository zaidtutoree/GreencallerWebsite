import type { Metadata } from "next";
import SimplePage, { CardLink } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Blog | Phone Systems, Cold Calling and AI Answering",
  description: "Practical writing on business phone systems, VoIP migration, cold calling, AI receptionists and getting more out of every call.",
  alternates: { canonical: "/blog" },
};

const items = [
  {
    "title": "How to work out what missed calls are costing you",
    "body": "A five-minute calculation using numbers you already have, and what a realistic recovery rate looks like once you fix the gap.",
    "meta": "Operations",
    "href": "/blog"
  },
  {
    "title": "Porting a business number without downtime",
    "body": "What actually happens during a UK port, how long each stage takes, and the two mistakes that cause an outage.",
    "meta": "VoIP",
    "href": "/blog"
  },
  {
    "title": "Cold calling scripts that survive first contact",
    "body": "Why the opening thirteen seconds decide the call, and a structure that works without sounding like a script.",
    "meta": "Sales",
    "href": "/blog"
  },
  {
    "title": "What an AI receptionist can and cannot do yet",
    "body": "An honest look at where automated answering is genuinely better than voicemail, and where it is not.",
    "meta": "AI",
    "href": "/blog"
  },
  {
    "title": "Local presence dialling: does it still work?",
    "body": "Pick-up rate data across six markets, and the compliance line you should not cross.",
    "meta": "Sales",
    "href": "/blog"
  },
  {
    "title": "Choosing between simultaneous ring and cascade",
    "body": "A simple decision rule based on team size and how much your senior people cost per hour.",
    "meta": "Operations",
    "href": "/blog"
  }
];

export default function BlogIndex() {
  return (
    <SimplePage
      trail={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
      ]}
      title="Notes on making the phone earn its keep"
      lede="Practical writing from the team and from customers who run high-volume phone operations. No thought leadership, just what works."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <CardLink key={i.title} {...i} />
        ))}
      </div>
    </SimplePage>
  );
}
