import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-white py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-14rem] h-[26rem] w-[44rem] -translate-x-1/2 rounded-[50%] bg-brand-100/45 blur-[100px]" />
      </div>
      <div className="container-page relative text-center">
        <p className="font-display text-[64px] font-semibold leading-none tracking-[-0.05em] text-brand-500">
          404
        </p>
        <h1 className="h-section mt-5">This line is not in service</h1>
        <p className="lede mx-auto mt-4 max-w-[460px]">
          The page you were looking for has moved or never existed. Unlike a missed call, this one is
          easy to recover from.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary btn-lg">
            Back to the homepage
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <a href={site.phoneHref} className="btn btn-outline btn-lg">
            Call {site.phoneDisplay}
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {[
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "Solutions", href: "/solutions" },
            { label: "Integrations", href: "/integrations" },
            { label: "Help centre", href: "/help" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-medium text-ink transition hover:border-brand-300 hover:bg-brand-50"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
