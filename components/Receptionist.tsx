import Link from "next/link";
import { IconArrowRight, IconCheck, IconSparkle } from "./Icons";

const capabilities = [
  "Answers out of hours and when the team is busy",
  "Books into your real calendar",
  "Hands over to a person when it should",
];

export default function Receptionist() {
  return (
    <section className="bg-cream py-16">
      <div className="container-page">
        <div className="rounded-3xl border border-line bg-white px-7 py-9 sm:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div>
              <span className="eyebrow">
                <IconSparkle className="h-3.5 w-3.5" /> Optional add-on
              </span>
              <h2 className="font-display mt-3 text-[clamp(1.4rem,1.1rem+1vw,1.85rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">
                And if nobody can get to the phone, an AI receptionist can
              </h2>
              <p className="mt-3 max-w-[560px] text-[15px] font-light leading-relaxed text-muted">
                Some teams want a safety net under the line for evenings, holidays and the school
                run. It is an add-on rather than the point of the product &mdash; add it when you
                want it, drop it when you do not.
              </p>

              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {capabilities.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-2 text-[13.5px] font-light text-ink/75"
                  >
                    <IconCheck className="h-4 w-4 shrink-0 text-brand-600" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3 lg:flex-col">
              <Link href="/features/ai-receptionist" className="btn btn-outline">
                See how it works
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
