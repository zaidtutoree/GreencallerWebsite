import Link from "next/link";
import { IconArrowRight, IconCheck } from "./Icons";
import { site } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="bg-white pb-20 pt-4 sm:pb-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-deep px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-[26rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-[100px]"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:56px_56px]"
          />
          <div className="relative mx-auto max-w-[720px]">
            <h2 className="font-display text-[clamp(2rem,1.3rem+2.9vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
              Put your calls to work
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[17px] font-light leading-relaxed text-white/65">
              Start in minutes, or walk through it with our team.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/signup" className="btn btn-primary btn-lg w-full sm:w-auto">
                Start for free
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="btn btn-lg w-full border border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
              >
                Call {site.phoneDisplay}
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
              {["No hardware", "Free porting", "Cancel anytime"].map((x) => (
                <li key={x} className="flex items-center gap-1.5 text-[13.5px] font-light text-white/60">
                  <IconCheck className="h-4 w-4 text-brand-400" />
                  {x}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 border-t border-white/10 pt-8">
              {["GDPR"].map((b) => (
                <span
                  key={b}
                  className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-white/35"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
