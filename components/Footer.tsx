import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
      { label: "Download apps", href: "/download" },
      { label: "Changelog", href: "/changelog" },
      { label: "Book a demo", href: "/demo" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Mobile app", href: "/features/mobile-app" },
      { label: "AI receptionist", href: "/features/ai-receptionist" },
      { label: "IVR", href: "/features/ivr" },
      { label: "Voicemail", href: "/features/voicemail" },
      { label: "PBX", href: "/features/pbx" },
      { label: "Physical phones", href: "/features/physical-phones" },
      { label: "Click to call", href: "/features/click-to-call" },
      { label: "AI call summaries", href: "/features/ai-summaries" },
      { label: "Call recording", href: "/features/call-recording" },
      { label: "Call note taking", href: "/features/call-notes" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Customers", href: "/customers" },
      { label: "Careers", href: "/careers" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

const socials = [
  {
    label: "X",
    href: site.social.x,
    path: "M17.5 3h3.2l-7 8 8.2 10.8h-6.4l-5-6.5-5.7 6.5H1.6l7.5-8.6L1.2 3h6.6l4.5 6 5.2-6Z",
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    path: "M4.8 3.5a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6ZM2.9 9.6h3.9V21H2.9V9.6Zm6.6 0h3.7v1.6a4 4 0 0 1 3.6-1.9c3 0 4.3 1.9 4.3 5V21h-3.9v-5.9c0-1.5-.5-2.4-1.8-2.4-1.1 0-1.8.7-2.1 1.5-.1.3-.1.6-.1 1V21H9.5V9.6Z",
  },
  {
    label: "YouTube",
    href: site.social.youtube,
    path: "M22 12s0-3.3-.4-4.9a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.3a2.6 2.6 0 0 0-1.8 1.8C2 8.7 2 12 2 12s0 3.3.4 4.9c.2.9.9 1.6 1.8 1.8 1.6.3 7.8.3 7.8.3s6.2 0 7.8-.3a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-4.9.4-4.9ZM10 15.2V8.8l5.5 3.2L10 15.2Z",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
          <div>
            <Link href="/" aria-label="Greencaller home">
              <Image
                src="/greencaller-logo.png"
                alt="Greencaller"
                width={542}
                height={181}
                className="h-[26px] w-auto"
              />
            </Link>
            <p className="mt-5 max-w-[320px] text-[13.5px] font-light leading-relaxed text-muted">
              Greencaller is the business phone system for companies whose revenue comes off the
              phone. Your team does the talking. Your agent answers when nobody can, texts customers
              back, books the job and updates your CRM.
            </p>
            <p className="hand mt-4 text-[18px] leading-snug text-brand-700/85">
              Built in the UK. We answer our own phone &mdash; try it.
            </p>

            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-muted transition hover:border-ink/20 hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-1 text-[13.5px] text-muted">
              <a href={site.phoneHref} className="block font-medium tabular-nums text-ink">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.salesEmail}`} className="block hover:text-ink">
                {site.salesEmail}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((c) => (
              <div key={c.title}>
                <p className="mb-3.5 text-[12px] font-semibold uppercase tracking-[0.09em] text-ink">
                  {c.title}
                </p>
                <ul className="space-y-2">
                  {c.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-[13.5px] font-light text-muted transition hover:text-ink"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] font-light text-muted-2">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Privacy policy", href: "/legal/privacy" },
              { label: "Terms & conditions", href: "/legal/terms" },
              { label: "Cookie policy", href: "/legal/cookies" },
              { label: "Legal notice", href: "/legal/notice" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[12.5px] font-light text-muted-2 hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
