import Link from "next/link";
import { IconArrowRight } from "./Icons";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="h-section max-w-[600px]">People who used to lose calls, and now do not</h2>
          <Link href="/customers" className="link-arrow shrink-0">
            Read customer stories
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <blockquote className="flex-1 text-[15px] font-light leading-relaxed text-ink/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line-2 pt-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[12px] font-bold text-brand-800 ring-1 ring-brand-200">
                  {t.initials}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[13.5px] font-semibold text-ink">
                    {t.name}
                  </span>
                  <span className="block truncate text-[12.5px] text-muted-2">
                    {t.role}, {t.company}
                  </span>
                  {t.meta && (
                    <span className="mt-0.5 block truncate text-[11.5px] font-light text-muted-2/80">
                      {t.meta}
                    </span>
                  )}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
