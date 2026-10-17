import Link from "next/link";
import FinalCTA from "./FinalCTA";
import { Breadcrumbs } from "./DetailPage";
import { IconArrowRight } from "./Icons";

export default function SimplePage({
  title,
  lede,
  trail,
  children,
  cta = true,
  prose = false,
}: {
  title: string;
  lede?: string;
  trail: { label: string; href: string }[];
  children?: React.ReactNode;
  cta?: boolean;
  prose?: boolean;
}) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-white pb-14 pt-10 sm:pt-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-18rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-[50%] bg-brand-100/40 blur-[100px]" />
        </div>
        <div className="container-page relative">
          <Breadcrumbs trail={trail} />
          <h1 className="h-section max-w-[780px]">{title}</h1>
          {lede && <p className="lede mt-5 max-w-[640px]">{lede}</p>}
        </div>
      </section>

      {children && (
        <section className="bg-cream py-16 sm:py-20">
          <div className="container-page">
            <div className={prose ? "mx-auto max-w-[760px]" : ""}>{children}</div>
          </div>
        </section>
      )}

      {cta && <FinalCTA />}
    </>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-line bg-white p-8 sm:p-10 [&_h2]:mt-9 [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2:first-child]:mt-0 [&_h3]:mt-6 [&_h3]:text-[16px] [&_h3]:font-semibold [&_li]:text-[15px] [&_li]:font-light [&_li]:leading-relaxed [&_li]:text-muted [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_p]:mt-3 [&_p]:text-[15px] [&_p]:font-light [&_p]:leading-relaxed [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      {children}
    </div>
  );
}

export function CardLink({
  title,
  body,
  href,
  meta,
}: {
  title: string;
  body: string;
  href: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lift"
    >
      {meta && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.09em] text-brand-700">
          {meta}
        </span>
      )}
      <h2 className="h-card mt-2">{title}</h2>
      <p className="mt-2 flex-1 text-[14px] font-light leading-relaxed text-muted">{body}</p>
      <span className="link-arrow mt-5 !text-[13.5px] !text-brand-700">
        Read more
        <IconArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
