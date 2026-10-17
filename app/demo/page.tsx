import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/DetailPage";
import LeadForm from "@/components/LeadForm";
import { IconCheck } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "See Greencaller set up for your business. A 25-minute call with someone who will configure your routing and your AI agent live on the screen.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-18rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-[50%] bg-brand-100/40 blur-[100px]" />
      </div>
      <div className="container-page relative">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Book a Demo", href: "/demo" },
          ]}
        />
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <h1 className="h-section">See it working on your own call flow</h1>
            <p className="lede mt-5">Twenty-five minutes, no slide deck. Tell us how calls reach your team today and we will build it in front of you.</p>

            <dl className="mt-10 space-y-6">
              <div className="border-l-2 border-brand-500 pl-5">
                <dt className="font-display text-[15.5px] font-semibold tracking-[-0.02em] text-ink">
                  What we will cover
                </dt>
                <dd className="mt-1.5 text-[14.5px] font-light leading-relaxed text-muted">
                  Your current call flow, where calls are being lost, and what your AI receptionist would say when it picks up.
                </dd>
              </div>
              <div className="border-l-2 border-brand-500 pl-5">
                <dt className="font-display text-[15.5px] font-semibold tracking-[-0.02em] text-ink">
                  Who should join
                </dt>
                <dd className="mt-1.5 text-[14.5px] font-light leading-relaxed text-muted">
                  Whoever owns the phone today — usually an operations lead, a sales manager or the founder.
                </dd>
              </div>
              <div className="border-l-2 border-brand-500 pl-5">
                <dt className="font-display text-[15.5px] font-semibold tracking-[-0.02em] text-ink">
                  What you leave with
                </dt>
                <dd className="mt-1.5 text-[14.5px] font-light leading-relaxed text-muted">
                  A working configuration in a trial account, and a straight answer on cost.
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
            <LeadForm variant="demo" submitLabel="Request a demo" />
          </div>
        </div>
      </div>
    </section>
  );
}
