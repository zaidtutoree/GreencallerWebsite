import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "./Icons";

const promises = [
  {
    title: "A dedicated account manager",
    body: "One named person who knows your setup, not whoever happens to be free when you ring.",
  },
  {
    title: "A UK-based team",
    body: "Everyone who answers is here, on the same timezone, working from the same building.",
  },
  {
    title: "No call centres",
    body: "You will never be number fourteen in a queue for a script-reader who cannot change anything.",
  },
  {
    title: "Transparent pricing",
    body: "The price on the site is the price on the invoice. No setup fee, no surprise at renewal.",
  },
];

export default function DeskPhones() {
  return (
    <section className="border-y border-line bg-[#f6faf8] py-20 sm:py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* image */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-lift sm:p-5">
              <Image
                src="/desk-phones.png"
                alt="A Yealink desk phone surrounded by the CRM tools and colleagues it connects to"
                width={906}
                height={786}
                sizes="(max-width: 1024px) 90vw, 520px"
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* copy */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Desk phones</span>

            <h2 className="h-section mt-4">
              Still want a real handset on the desk? Keep it.
            </h2>

            <p className="lede mt-5 max-w-[540px]">
              We supply and pre-configure desk phones on the same lines, and the same call history,
              as the apps. Plug it in and it works.
            </p>

            <div className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {promises.map((p) => (
                <div key={p.title} className="border-l-2 border-brand-400 pl-4">
                  <h3 className="font-display text-[15.5px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] font-light leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="link-arrow px-2">
                Talk to us about hardware
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
