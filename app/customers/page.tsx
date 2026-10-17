import type { Metadata } from "next";
import SimplePage, { CardLink } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Customer Stories",
  description: "How sales teams, trades, agencies and support desks moved their calls to Greencaller and what changed afterwards.",
  alternates: { canonical: "/customers" },
};

const items = [
  {
    "title": "Streak",
    "body": "Stopped logging calls by hand and picked up SMS history the CRM never had.",
    "meta": "CRM software",
    "href": "/customers"
  },
  {
    "title": "Weqeep",
    "body": "Cold calling repair shop owners all day, with the dialler doing the list and the tagging.",
    "meta": "Marketplace",
    "href": "/customers"
  },
  {
    "title": "Bench Equity",
    "body": "A documented history of every client call, shareable across the team in one click.",
    "meta": "Financial services",
    "href": "/customers"
  },
  {
    "title": "Scalability",
    "body": "Everything syncs to Salesforce automatically, so the AE always has the full picture.",
    "meta": "Consulting",
    "href": "/customers"
  },
  {
    "title": "Storen",
    "body": "An AI agent that answers and does work the team used to handle by hand.",
    "meta": "Retail tech",
    "href": "/customers"
  },
  {
    "title": "Wesype",
    "body": "A call recap tool that actually delivered, with a HubSpot integration that holds up.",
    "meta": "Agency",
    "href": "/customers"
  }
];

export default function CustomersIndex() {
  return (
    <SimplePage
      trail={[
        { label: "Home", href: "/" },
        { label: "Customer stories", href: "/customers" },
      ]}
      title="Teams that moved their calls to Greencaller"
      lede="Six thousand businesses run their phone on Greencaller. Here is what changed for a few of them, in their own words."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <CardLink key={i.title} {...i} />
        ))}
      </div>
    </SimplePage>
  );
}
