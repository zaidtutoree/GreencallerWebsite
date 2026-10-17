import Link from "next/link";
import AppMockup from "./AppMockup";
import { IconArrowRight, IconCheck, IconPhone } from "./Icons";
import { CurlyArrow, Underline } from "./HandDrawn";
import { heroPromises } from "@/lib/content";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-14 pt-12 sm:pt-16 lg:pb-20">
      {/* soft brand wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-14rem] h-[34rem] w-[64rem] -translate-x-1/2 rounded-[50%] bg-brand-100/45 blur-[110px]" />
        <div className="absolute left-[8%] top-[18rem] h-64 w-64 rounded-full bg-brand-200/30 blur-[90px]" />
        <div className="absolute right-[6%] top-[10rem] h-72 w-72 rounded-full bg-brand-50 blur-[80px]" />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-[880px] text-center">
          <h1 className="h-display">
            Business number that rings you{" "}
            <span className="relative inline-block">
              anywhere
              <Underline />
            </span>
          </h1>

          <p className="lede mx-auto mt-6 max-w-[610px]">
            Greencaller is the business phone system your team can answer from a mobile, a laptop or
            a handset on the desk. One number, one shared call history, no contracts and a dedicated
            account manager.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:mx-auto sm:w-fit sm:flex-row">
            <Link href="/signup" className="btn btn-primary btn-lg w-full sm:w-auto">
              Start for free
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="btn btn-outline btn-lg w-full sm:w-auto">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-500 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Talk to us now
              <span className="tabular-nums text-muted">{site.phoneDisplay}</span>
            </a>

            {/* margin note, scribbled in above the phone button */}
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-full left-full mb-1 hidden w-[164px] translate-x-20 select-none text-left xl:block"
            >
              <span className="hand block -rotate-2 text-[19px] leading-tight text-brand-800/80">
                Talk to one of our experts today.
              </span>
              <CurlyArrow className="ml-1 mt-0.5 h-9 w-11 text-brand-600/70" />
            </span>
          </div>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {heroPromises.map((p) => (
              <li key={p} className="flex items-center gap-1.5 text-[13.5px] font-light text-muted">
                <IconCheck className="h-4 w-4 shrink-0 text-brand-600" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* product shot */}
        <div className="relative mx-auto mt-14 max-w-[1080px]">
          <div
            aria-hidden
            className="absolute inset-x-6 -bottom-6 h-24 rounded-[50%] bg-ink/10 blur-3xl"
          />
          <div className="relative">
            <AppMockup />
          </div>

          {/* floating call card */}
          <div className="absolute -bottom-10 -left-20 hidden w-[228px] rounded-2xl border border-line bg-white/95 p-3 shadow-lift backdrop-blur xl:block">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-deep">
                <IconPhone className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-[12px] font-semibold text-ink">Rang the mobile at 21:14</p>
                <p className="text-[11px] text-muted-2">Answered from the van</p>
              </div>
            </div>
            <div className="mt-2.5 rounded-lg bg-cream-2 px-2.5 py-2 text-[11px] font-light leading-snug text-ink/75">
              &ldquo;Same number, same history, whichever device happens to be nearest.&rdquo;
            </div>
          </div>
        </div>

        {/* compliance */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {["GDPR Compliant"].map((b) => (
            <span
              key={b}
              className="flex items-center gap-1.5 text-[12.5px] font-medium uppercase tracking-[0.06em] text-muted-2"
            >
              <IconCheck className="h-3.5 w-3.5 text-brand-500" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
