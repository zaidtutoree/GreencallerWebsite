import type { Metadata } from "next";
import SimplePage, { Prose } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "About Greencaller",
  description: "Greencaller builds the business phone system for companies whose revenue comes off the phone. Here is who we are and why we built it.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SimplePage
      trail={[
        { label: "Home", href: "/" },
        { label: "About Greencaller", href: "/about" },
      ]}
      title="We think the phone is still the highest-intent channel you have"
      lede="Somebody who picks up the phone is ready to buy, ready to complain or ready to leave. Everything else is a form fill. We built Greencaller because business phone systems had stopped taking that seriously."
      prose
    >
      <Prose>
              <h2>Why we built it</h2>
              <p>
                The people who founded Greencaller spent years watching good businesses lose work
                for reasons that had nothing to do with the work. A plumber up a ladder. A branch
                where everyone was already on a call. A sales team where nobody typed up the
                conversation, so the follow-up never happened.
              </p>
              <p>
                The phone systems on offer were built for a world of desk handsets and switchboards.
                They were priced per feature, sold on three-year contracts and installed by an
                engineer. None of that had anything to do with answering more calls.
              </p>
              <h2>What we are actually building</h2>
              <p>
                Greencaller is a phone system that does the work a call creates. It answers when
                nobody can, writes the summary, drafts the follow-up, books the job and updates the
                CRM. The talking is still yours. Everything after it should not be.
              </p>
              <h2>How we work</h2>
              <ul>
                <li>Live in minutes, not a migration project. If setup needs an engineer, we got it wrong.</li>
                <li>No contracts. If we stop being worth it, you should be able to leave that month.</li>
                <li>Your data is yours. We do not train third-party models on your calls, ever.</li>
                <li>Plain words, not flow charts. You describe how you want calls handled, and it happens.</li>
              </ul>
              <h2>Where we are</h2>
              <p>
                We are based in London, with customers across the UK, Europe and North America.
                Numbers are available in more than 50 countries, and call data is stored in UK and
                EU data centres.
              </p>
            </Prose>
    </SimplePage>
  );
}
