import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/DetailPage";
import LeadForm from "@/components/LeadForm";
import { IconGlobe, IconMessage, IconPhone } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Sales & Support",
  description:
    "Talk to the Greencaller team about your phone system. Call us, email us, or send an enquiry and we will reply within one working day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${site.domain}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: site.legalName,
      telephone: site.phoneDisplay,
      email: site.salesEmail,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
    },
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-18rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-[50%] bg-brand-100/40 blur-[100px]" />
        </div>
        <div className="container-page relative">
          <Breadcrumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <h1 className="h-section">Talk to someone who knows phone systems</h1>
              <p className="lede mt-5">
                Tell us what is going wrong on your line today and we will show you exactly how it
                would be set up in Greencaller. No slide deck unless you want one.
              </p>

              <div className="mt-10 space-y-3">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-brand-300 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-deep">
                    <IconPhone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold tabular-nums text-ink">
                      {site.phoneDisplay}
                    </span>
                    <span className="block text-[13px] font-light text-muted">
                      Our own agent answers and routes you. Mon–Fri 8am–6pm.
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${site.salesEmail}`}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-brand-300 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream-2 text-brand-700 ring-1 ring-line">
                    <IconMessage className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold text-ink">
                      {site.salesEmail}
                    </span>
                    <span className="block text-[13px] font-light text-muted">
                      Sales enquiries. Support: {site.supportEmail}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream-2 text-brand-700 ring-1 ring-line">
                    <IconGlobe className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold text-ink">{site.legalName}</span>
                    <span className="block text-[13px] font-light text-muted">
                      {site.address.street}, {site.address.locality} {site.address.postalCode},
                      United Kingdom
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <LeadForm variant="contact" submitLabel="Send enquiry" />
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
