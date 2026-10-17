import { Icon } from "./Icons";
import { steps } from "@/lib/content";

export default function Steps() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="h-section">Most people are taking calls by lunchtime</h2>
          <p className="lede mx-auto mt-5 max-w-[580px]">
            We do the paperwork with your old provider, and you keep answering the phone the whole
            way through. Nobody has to sit in for an engineer.
          </p>
        </div>

        <div className="relative mt-14">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[42px] hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
          />
          <ol className="relative grid gap-8 lg:grid-cols-3 lg:gap-6">
            {steps.map((s) => (
              <li key={s.n} className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <span className="relative flex h-[84px] w-[84px] items-center justify-center rounded-2xl border border-line bg-white shadow-soft">
                    <Icon name={s.icon} className="h-7 w-7 text-brand-600" />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[11px] font-bold tabular-nums text-white">
                      {s.n}
                    </span>
                  </span>
                </div>
                <h3 className="h-card mt-6 lg:min-h-[2.32em]">{s.title}</h3>
                <p className="hand mt-3 text-[17px] leading-snug text-brand-700/80">{s.aside}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
