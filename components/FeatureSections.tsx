import Link from "next/link";
import { Icon, IconArrowRight, IconCheck } from "./Icons";
import { visualMap } from "./FeatureVisuals";
import { featureBlocks } from "@/lib/content";

export default function FeatureSections() {
  return (
    <section id="features" className="bg-cream py-20 sm:py-24">
      <div className="container-page space-y-20 sm:space-y-28">
        {featureBlocks.map((f) => {
          const Visual = visualMap[f.visual];
          return (
            <div
              key={f.id}
              id={f.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={f.flip ? "lg:order-2" : ""}>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 shadow-soft">
                  <Icon name={f.icon} className="h-4 w-4 text-brand-600" />
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-ink/70">
                    {f.eyebrow}
                  </span>
                </span>

                <h2 className="h-section mt-6">{f.title}</h2>

                <ul className="mt-7 space-y-3.5">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                        <IconCheck className="h-3 w-3 text-brand-800" strokeWidth={2.6} />
                      </span>
                      <span className="text-[15.5px] font-light leading-relaxed text-ink/80">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href={f.primary.href} className="btn btn-primary">
                    {f.primary.label}
                  </Link>
                  <Link href={f.secondary.href} className="link-arrow px-2">
                    {f.secondary.label}
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className={f.flip ? "lg:order-1" : ""}>
                <Visual />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
