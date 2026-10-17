import Link from "next/link";
import { IconArrowRight } from "./Icons";
import { integrationList } from "@/lib/content";

function Tile({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center rounded-2xl border border-line bg-white px-4 py-4 text-center transition duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft">
      <span className="truncate text-[14px] font-medium text-ink">{name}</span>
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="h-section">Connected to the tools you already use</h2>
          <p className="lede mx-auto mt-5 max-w-[580px]">
            22 native integrations. Every call lands in your CRM, every meeting in your calendar, on
            its own.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {integrationList.map((n) => (
            <Tile key={n} name={n} />
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <Link href="/integrations" className="link-arrow">
            See all integrations
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
