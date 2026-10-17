import type { Metadata } from "next";
import SimplePage, { CardLink } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Product Changelog",
  description: "What shipped in Greencaller recently: new features, improvements and fixes across calling, AI and integrations.",
  alternates: { canonical: "/changelog" },
};

const items = [
  {
    "title": "Agent handover context",
    "body": "The person receiving a transferred call now sees the agent's live summary before they say hello.",
    "meta": "August 2026",
    "href": "/changelog"
  },
  {
    "title": "Retention policies per team",
    "body": "Enterprise workspaces can now set different recording retention windows per team.",
    "meta": "August 2026",
    "href": "/changelog"
  },
  {
    "title": "Attio two-way sync",
    "body": "Contacts and lists now flow both ways, with structured attributes on every call.",
    "meta": "July 2026",
    "href": "/changelog"
  },
  {
    "title": "Voicemail transcription in the shared inbox",
    "body": "Read a voicemail instead of dialling in, right beside the call it came from.",
    "meta": "July 2026",
    "href": "/changelog"
  },
  {
    "title": "Automatic desk phone provisioning",
    "body": "Plug in a supported SIP handset and it configures itself from your account.",
    "meta": "June 2026",
    "href": "/changelog"
  },
  {
    "title": "Call note templates",
    "body": "Define what a call note should always capture for your business, in plain words.",
    "meta": "June 2026",
    "href": "/changelog"
  }
];

export default function ChangelogPage() {
  return (
    <SimplePage
      trail={[
        { label: "Home", href: "/" },
        { label: "Changelog", href: "/changelog" },
      ]}
      title="What we shipped"
      lede="We release most weeks. Bigger changes are announced in the app; everything else lands here."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <CardLink key={i.title} {...i} />
        ))}
      </div>
    </SimplePage>
  );
}
