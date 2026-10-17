import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/DetailPage";
import LeadForm from "@/components/LeadForm";
import { IconCheck } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start Your Free Trial",
  description: "Start a 14-day free Greencaller trial. Pick a number, invite your team and take your first call today. No hardware, cancel anytime.",
  alternates: { canonical: "/signup" },
  robots: { index: false, follow: true },
};

export default function SignupPage() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-18rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-[50%] bg-brand-100/40 blur-[100px]" />
      </div>
      <div className="container-page relative">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Start Your Free Trial", href: "/signup" },
          ]}
        />
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <h1 className="h-section">Start taking calls today</h1>
            <p className="lede mt-5">Fourteen days free. Pick a local number, invite the team and be live in minutes. We only charge on day fourteen, and you can cancel any time before that.</p>

            <dl className="mt-10 space-y-6">
              <div className="border-l-2 border-brand-500 pl-5">
                <dt className="font-display text-[15.5px] font-semibold tracking-[-0.02em] text-ink">
                  Live in minutes
                </dt>
                <dd className="mt-1.5 text-[14.5px] font-light leading-relaxed text-muted">
                  Choose a number in 50+ countries, or port the one you already use — free, and with no downtime.
                </dd>
              </div>
              <div className="border-l-2 border-brand-500 pl-5">
                <dt className="font-display text-[15.5px] font-semibold tracking-[-0.02em] text-ink">
                  No hardware, no contract
                </dt>
                <dd className="mt-1.5 text-[14.5px] font-light leading-relaxed text-muted">
                  Greencaller runs on iPhone, Android, Mac, Windows and the web. Cancel whenever you like.
                </dd>
              </div>
              <div className="border-l-2 border-brand-500 pl-5">
                <dt className="font-display text-[15.5px] font-semibold tracking-[-0.02em] text-ink">
                  Bring your team
                </dt>
                <dd className="mt-1.5 text-[14.5px] font-light leading-relaxed text-muted">
                  Add or remove people whenever you like. There is no seat minimum.
                </dd>
              </div>
            </dl>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
              {["14-day free trial", "Free porting", "Cancel anytime"].map((x) => (
                <li key={x} className="flex items-center gap-1.5 text-[13.5px] font-light text-muted">
                  <IconCheck className="h-4 w-4 text-brand-600" />
                  {x}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[14px] font-light text-muted">
              Would rather talk first?{" "}
              <a href={site.phoneHref} className="font-medium text-ink underline underline-offset-4">
                {site.phoneDisplay}
              </a>
            </p>
          </div>

          <div>
            <LeadForm variant="signup" submitLabel="Create my account" />
          </div>
        </div>
      </div>
    </section>
  );
}
