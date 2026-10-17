import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SimplePage, { Prose } from "@/components/SimplePage";
import { site } from "@/lib/site";

const docs: Record<
  string,
  { name: string; title: string; desc: string; updated: string; sections: { h: string; p: string[] }[] }
> = {
  privacy: {
    name: "Privacy policy",
    title: "Privacy Policy",
    desc: "How Greencaller collects, uses, stores and protects personal data, and the rights you have under UK GDPR.",
    updated: "1 August 2026",
    sections: [
      {
        h: "Who we are",
        p: [
          `${site.legalName} is the data controller for the personal data described in this policy. You can reach our data protection contact at ${site.supportEmail} or by post at ${site.address.street}, ${site.address.locality} ${site.address.postalCode}, United Kingdom.`,
        ],
      },
      {
        h: "What we collect",
        p: [
          "Account data: the name, work email, phone number and company details you give us when you create an account or contact us.",
          "Service data: call metadata, recordings, transcripts and summaries generated when you use the service, plus the contacts you import or create.",
          "Usage data: log data, device and browser information, and diagnostic events used to keep the service running and secure.",
        ],
      },
      {
        h: "How we use it",
        p: [
          "To provide the service you have asked for, including routing calls, generating summaries and syncing to the integrations you connect.",
          "To bill you, support you and tell you about material changes to the service.",
          "To detect fraud and abuse, and to meet our legal and regulatory obligations.",
          "We do not sell personal data, and we do not use your call content to train third-party models.",
        ],
      },
      {
        h: "Where data is stored",
        p: [
          "Call recordings, transcripts and summaries are stored in UK and EU data centres. Where a sub-processor operates outside the UK or EEA, transfers are covered by the UK International Data Transfer Agreement or Standard Contractual Clauses.",
        ],
      },
      {
        h: "How long we keep it",
        p: [
          "Account data is kept for as long as your account is open and for six years afterwards where required for tax and accounting.",
          "Recordings and transcripts follow the retention window configured on your workspace — 12 months by default on Advanced, and configurable on Enterprise. You can delete them earlier at any time.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "Under UK GDPR you have the right to access, correct, erase, restrict, port and object to the processing of your personal data. Write to us and we will respond within one month.",
          "You also have the right to complain to the Information Commissioner's Office at ico.org.uk.",
        ],
      },
      {
        h: "Call recording",
        p: [
          "Where you use Greencaller to record calls, you are the controller of that recording and are responsible for notifying the people you record and for establishing a lawful basis. Greencaller provides automatic recording notices, per-line recording controls and retention settings to help you do this.",
        ],
      },
    ],
  },
  terms: {
    name: "Terms & conditions",
    title: "Terms & Conditions",
    desc: "The terms on which Greencaller provides its business phone system, including subscriptions, acceptable use, availability and liability.",
    updated: "1 August 2026",
    sections: [
      {
        h: "The agreement",
        p: [
          `These terms form the agreement between you and ${site.legalName} for use of the Greencaller service. By creating an account you accept them.`,
        ],
      },
      {
        h: "Subscriptions and billing",
        p: [
          "Plans are billed per user, monthly in advance. Trials run for fourteen days and are charged on day fourteen unless cancelled before then.",
          "Call credits are pooled at the workspace level and charged at the published per-minute rates. Unused credit does not roll over beyond the billing period.",
          "You may cancel at any time and your plan runs to the end of the month you have paid for. The first 30 days are money-back on request.",
        ],
      },
      {
        h: "Acceptable use",
        p: [
          "You must not use the service for unlawful, fraudulent or abusive calling, including automated nuisance calling, spoofing a number you are not entitled to use, or bulk unsolicited messaging.",
          "You are responsible for complying with the rules that apply to your calling, including Ofcom guidance, the Privacy and Electronic Communications Regulations and TPS/CTPS screening where relevant.",
        ],
      },
      {
        h: "Numbers and porting",
        p: [
          "Numbers assigned to you remain allocated for as long as your account is in good standing. Porting in and out is free, and we will not obstruct a port-out request.",
        ],
      },
      {
        h: "Availability",
        p: [
          "We target 99.9% monthly availability on Advanced and 99.99% on Enterprise, measured excluding scheduled maintenance. Service credits are set out in your order form.",
          "Voice over IP depends on your internet connection. We are not responsible for call quality problems caused by your own network.",
        ],
      },
      {
        h: "Emergency calls",
        p: [
          "Greencaller supports 999 and 112 calling, but as an internet-based service it may be unavailable during a power cut or loss of connectivity. You must keep an alternative means of making emergency calls and keep your registered address up to date.",
        ],
      },
      {
        h: "Liability",
        p: [
          "Nothing in these terms limits liability for death or personal injury caused by negligence, or for fraud. Subject to that, our total liability in any 12-month period is limited to the fees you paid in that period.",
        ],
      },
      {
        h: "Governing law",
        p: [
          "These terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction.",
        ],
      },
    ],
  },
  cookies: {
    name: "Cookie policy",
    title: "Cookie Policy",
    desc: "The cookies and similar technologies Greencaller uses on its website and in the application, and how to control them.",
    updated: "1 August 2026",
    sections: [
      {
        h: "What we use",
        p: [
          "Strictly necessary cookies keep you signed in, remember your workspace and protect against cross-site request forgery. These cannot be turned off.",
          "Analytics cookies help us understand which pages are useful. They are only set if you accept them.",
          "We do not use advertising cookies or third-party tracking pixels on this website.",
        ],
      },
      {
        h: "Controlling cookies",
        p: [
          "You can change your choice at any time from the cookie settings link in the footer, or clear cookies in your browser. Blocking strictly necessary cookies will stop the application working.",
        ],
      },
    ],
  },
  notice: {
    name: "Legal notice",
    title: "Legal Notice",
    desc: "Company information, regulatory status and contact details for Greencaller.",
    updated: "1 August 2026",
    sections: [
      {
        h: "Company details",
        p: [
          `${site.legalName}, a company registered in England and Wales.`,
          `Registered office: ${site.address.street}, ${site.address.locality} ${site.address.postalCode}, United Kingdom.`,
          `Contact: ${site.salesEmail} · ${site.phoneDisplay}`,
        ],
      },
      {
        h: "Regulatory status",
        p: [
          "Greencaller provides electronic communications services in the United Kingdom and is registered with Ofcom as a communications provider. Number ranges are allocated under Ofcom's National Telephone Numbering Plan.",
        ],
      },
      {
        h: "Complaints",
        p: [
          `If something has gone wrong, write to ${site.supportEmail} and we will acknowledge within one working day. If we cannot resolve it within eight weeks you may refer the complaint to an alternative dispute resolution scheme, and we will tell you which one applies to your account.`,
        ],
      },
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(docs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = docs[slug];
  if (!d) return {};
  return {
    title: d.title,
    description: d.desc,
    alternates: { canonical: `/legal/${slug}` },
  };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const d = docs[slug];
  if (!d) notFound();

  return (
    <SimplePage
      trail={[
        { label: "Home", href: "/" },
        { label: d.name, href: `/legal/${slug}` },
      ]}
      title={d.title}
      lede={`Last updated ${d.updated}. This is a summary written to be readable; it is the operative version unless your order form says otherwise.`}
      prose
      cta={false}
    >
      <Prose>
        {d.sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.p.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </section>
        ))}
      </Prose>
    </SimplePage>
  );
}
