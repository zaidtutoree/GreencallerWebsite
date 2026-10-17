import Link from "next/link";
import FinalCTA from "./FinalCTA";
import { Breadcrumbs } from "./DetailPage";
import { Icon, IconArrowRight } from "./Icons";
import type { Detail } from "@/lib/pages";

export default function IndexPage({
  title,
  lede,
  base,
  items,
  label,
  groups,
}: {
  title: string;
  lede: string;
  base: string;
  items: Detail[];
  label: string;
  groups?: { title: string; slugs: string[] }[];
}) {
  const render = (list: Detail[]) => (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((d) => (
        <Link
          key={d.slug}
          href={`${base}/${d.slug}`}
          className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lift"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream-2 text-brand-700 ring-1 ring-line transition group-hover:bg-brand-500 group-hover:text-deep group-hover:ring-brand-400">
            <Icon name={d.icon} className="h-5 w-5" />
          </span>
          <h2 className="h-card mt-5">{d.name}</h2>
          <p className="mt-2 flex-1 text-[14px] font-light leading-relaxed text-muted">
            {d.lede.length > 145 ? `${d.lede.slice(0, 142).trimEnd()}…` : d.lede}
          </p>
          <span className="link-arrow mt-5 !text-[13.5px] !text-brand-700">
            Learn more
            <IconArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-white pb-14 pt-10 sm:pt-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-18rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-[50%] bg-brand-100/40 blur-[100px]" />
        </div>
        <div className="container-page relative">
          <Breadcrumbs
            trail={[
              { label: "Home", href: "/" },
              { label, href: base },
            ]}
          />
          <h1 className="h-section max-w-[760px]">{title}</h1>
          <p className="lede mt-5 max-w-[620px]">{lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup" className="btn btn-primary btn-lg">
              Start for free
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/demo" className="btn btn-outline btn-lg">
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="container-page">
          {groups ? (
            <div className="space-y-14">
              {groups.map((g) => (
                <div key={g.title}>
                  <h2 className="font-display mb-6 text-[13px] font-semibold uppercase tracking-[0.1em] text-muted-2">
                    {g.title}
                  </h2>
                  {render(items.filter((i) => g.slugs.includes(i.slug)))}
                </div>
              ))}
            </div>
          ) : (
            render(items)
          )}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
