import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SimplePage, { Prose } from "@/components/SimplePage";

const docs: Record<string, { name: string; title: string; desc: string; h1: string; lede: string; sections: { h: string; p: string[] }[] }> = {
  "number-porting": {
    name: "Number porting",
    title: "Number Porting: Keep Your Business Number",
    desc: "How to port a UK business phone number to Greencaller for free, what happens at each stage and how to avoid downtime.",
    h1: "Keep the number your customers already dial",
    lede: "Porting is free in both directions, takes a few business days and causes no downtime. We handle the paperwork with your current provider.",
    sections: [
      { h: "What porting actually is", p: ["Porting moves the right to use a phone number from one communications provider to another. The number itself does not change, so anything printed on a van, a card or a Google listing keeps working."] },
      { h: "What we need from you", p: ["A recent bill or a letter of authority showing the account holder and the service address, the numbers you want to move, and confirmation that the account is in good standing with no outstanding balance."] },
      { h: "How long it takes", p: ["Single geographic numbers usually complete in three to five business days. Number ranges and non-geographic numbers can take up to ten. We give you a firm date once your losing provider confirms."] },
      { h: "Will we lose calls?", p: ["No. You keep taking calls on your current service right up to the cutover, which happens at a scheduled time you choose. We recommend setting Greencaller up in parallel first so the team is already comfortable."] },
      { h: "Can we port away later?", p: ["Yes, and it is free. We will not obstruct a port-out request or charge an exit fee. That is deliberate: we would rather earn the renewal."] },
    ],
  },
  "international-rates": {
    name: "International rates",
    title: "International Calling Rates",
    desc: "How Greencaller charges for international calls: pooled credits, published per-minute rates and local numbers in 50+ countries.",
    h1: "International calling, priced without the guesswork",
    lede: "Per-minute rates are published in the app before you dial, charged from credit pooled across your whole company.",
    sections: [
      { h: "How billing works", p: ["Every plan includes unlimited UK calls and texts. Calls outside that are charged per minute from a pooled credit balance shared across your workspace, so a heavy month for one rep does not blow up their line."] },
      { h: "Typical rates", p: ["Landline calls to Western Europe, the US and Canada sit in the low single pence per minute. Mobile termination costs more, and varies widely by country. Premium and satellite ranges are blocked by default and can be enabled on request."] },
      { h: "Local numbers", p: ["Take a local, national or toll-free number in more than 50 countries. Some markets require proof of local presence — we tell you up front and handle the submission."] },
      { h: "Controlling spend", p: ["Set a monthly credit cap per workspace, block specific destination ranges, and get alerted when spend crosses a threshold you choose."] },
    ],
  },
  "cold-calling-playbook": {
    name: "Cold calling playbook",
    title: "The Cold Calling Playbook",
    desc: "A practical playbook for outbound calling: list building, the first thirteen seconds, handling the brush-off, and the follow-up that actually lands.",
    h1: "The cold calling playbook",
    lede: "What we have learned watching millions of outbound calls: what gets picked up, what gets a second sentence, and what quietly wastes the afternoon.",
    sections: [
      { h: "The list beats the script", p: ["A mediocre script against a well-built list outperforms a brilliant script against a bad one, every time. Segment by a trigger — a hire, a funding round, a new location — and lead with it."] },
      { h: "The first thirteen seconds", p: ["Name, reason for calling, and permission to continue. Do not ask how they are. Do not read a value proposition. The only job of the opening is to earn the next twenty seconds."] },
      { h: "Handling the brush-off", p: ["\"Send me an email\" is not a no, it is a request to end the call. Acknowledge it, ask one specific question, and let the answer decide whether there is anything there."] },
      { h: "Cadence without harassment", p: ["Four to six touches over two to three weeks, mixing calls, texts and email. Vary the time of day. Stop when they tell you to, and record that properly so nobody rings them again."] },
      { h: "Let the tooling do the admin", p: ["A power dialler removes the dead time between calls, voicemail detection removes the wasted ones, and automatic summaries mean the follow-up gets written while the conversation is still fresh."] },
    ],
  },
  "voip-guide": {
    name: "VoIP learning hub",
    title: "VoIP for Business: A Practical Guide",
    desc: "What VoIP is, how it compares to ISDN and PSTN, what bandwidth you need, and what to check before moving your business phone system to the cloud.",
    h1: "VoIP for business, explained properly",
    lede: "The UK PSTN switch-off means every business will move to internet calling. Here is what actually matters when you do.",
    sections: [
      { h: "What VoIP is", p: ["Voice over IP carries calls as data over your internet connection instead of a dedicated phone line. In practice that means no physical lines, no engineer visit to add a user, and numbers that are not tied to a building."] },
      { h: "The PSTN switch-off", p: ["The traditional analogue and ISDN network in the UK is being retired, with services withdrawn as exchanges are upgraded. Businesses still on ISDN need a plan, and a cloud phone system is the usual destination."] },
      { h: "What bandwidth you need", p: ["A concurrent call uses roughly 100 kbps in each direction. The number that matters is not raw speed but jitter and packet loss — a 200 Mbps connection with unstable latency will sound worse than a stable 20 Mbps one."] },
      { h: "What to check before you switch", p: ["How many concurrent calls you need at peak, whether your router prioritises voice traffic, whether your numbers are portable, and what happens to emergency calling during a power cut."] },
      { h: "What you gain", p: ["Numbers in any market, calls on any device, a shared history the whole team can see, and — increasingly — an AI layer that answers, summarises and files the call for you."] },
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
  return { title: d.title, description: d.desc, alternates: { canonical: `/resources/${slug}` } };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const d = docs[slug];
  if (!d) notFound();

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: d.title,
    description: d.desc,
    author: { "@type": "Organization", name: "Greencaller" },
    publisher: { "@type": "Organization", name: "Greencaller" },
  };

  return (
    <>
      <SimplePage
        trail={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/blog" },
          { label: d.name, href: `/resources/${slug}` },
        ]}
        title={d.h1}
        lede={d.lede}
        prose
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
