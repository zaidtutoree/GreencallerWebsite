import Link from "next/link";
import { IconCheck } from "./Icons";
import { plans } from "@/lib/content";

export default function PricingTeaser() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="h-section">Inbound or outbound, build the system you need</h2>
          <p className="lede mx-auto mt-5 max-w-[600px]">
            £28 per user a month for sole traders and small teams, £38 on Advanced. Every seat comes
            with its own number and unlimited UK texting, with call credits pooled across your whole
            company.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/signup" className="btn btn-primary btn-lg w-full sm:w-auto">
              Start for free
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg w-full sm:w-auto">
              Talk to sales
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition ${
                p.highlight
                  ? "border-brand-400 bg-white shadow-lift ring-1 ring-brand-400/30"
                  : "border-line bg-cream/50"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.07em] text-deep">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-[18px] font-semibold tracking-[-0.02em] text-ink">
                {p.name}
              </h3>
              <p className="mt-1.5 min-h-[42px] text-[13.5px] font-light leading-snug text-muted">
                {p.tagline}
              </p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-[42px] font-semibold leading-none tracking-[-0.045em] text-ink">
                  {p.price}
                </span>
                <span className="text-[13px] font-light text-muted">{p.cadence}</span>
              </div>
              <p className="mt-1.5 text-[12px] text-muted-2">{p.note}</p>

              <Link
                href={p.cta.href}
                className={`btn mt-6 w-full ${p.highlight ? "btn-primary" : "btn-outline"}`}
              >
                {p.cta.label}
              </Link>

              <ul className="mt-6 space-y-2.5 border-t border-line-2 pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span className="text-[13.5px] font-light leading-snug text-ink/80">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[14px] font-light text-muted">
          The AI receptionist is an add-on, on top of one extra seat.{" "}
          <Link href="/pricing" className="font-medium text-ink underline underline-offset-4">
            See full pricing
          </Link>
        </p>
      </div>
    </section>
  );
}
