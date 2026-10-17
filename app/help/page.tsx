import type { Metadata } from "next";
import SimplePage, { CardLink } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Help Centre & Support",
  description: "Guides for setting up Greencaller: numbers and porting, call routing, the AI receptionist, integrations, billing and troubleshooting.",
  alternates: { canonical: "/help" },
};

const items = [
  {
    "title": "Getting started",
    "body": "Create your workspace, pick a number, invite the team and take your first call.",
    "meta": "Setup",
    "href": "/help"
  },
  {
    "title": "Numbers and porting",
    "body": "Buying numbers, porting in, porting out, and what to expect at each stage.",
    "meta": "Numbers",
    "href": "/help"
  },
  {
    "title": "Call routing and hours",
    "body": "Ring groups, cascade order, business hours, holidays and out-of-hours paths.",
    "meta": "Routing",
    "href": "/help"
  },
  {
    "title": "Setting up your AI receptionist",
    "body": "Writing your agent's brief, connecting a calendar and defining handover rules.",
    "meta": "AI",
    "href": "/help"
  },
  {
    "title": "Integrations",
    "body": "Connecting HubSpot, Salesforce, Pipedrive, Attio, Zapier and the API.",
    "meta": "Integrations",
    "href": "/help"
  },
  {
    "title": "Billing and plans",
    "body": "Seats, pooled credits, invoices, upgrades and cancellation.",
    "meta": "Billing",
    "href": "/help"
  },
  {
    "title": "Call quality troubleshooting",
    "body": "Network requirements, common causes of jitter and how to test your connection.",
    "meta": "Troubleshooting",
    "href": "/help"
  },
  {
    "title": "Security and compliance",
    "body": "Data residency, retention, recording notices, SSO and access control.",
    "meta": "Security",
    "href": "/help"
  }
];

export default function HelpIndex() {
  return (
    <SimplePage
      trail={[
        { label: "Home", href: "/" },
        { label: "Help centre", href: "/help" },
      ]}
      title="Help centre"
      lede="Setup guides, troubleshooting and answers to the things people ask most. Cannot find it? Call us and our agent will route you to support."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <CardLink key={i.title} {...i} />
        ))}
      </div>
    </SimplePage>
  );
}
