import type { Metadata } from "next";
import Link from "next/link";
import { IconMail } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "How to request permanent deletion of your Greencaller account and the personal data associated with it.",
  alternates: { canonical: "/delete-account" },
};

const steps = [
  "We verify that the request comes from the account owner.",
  "We confirm by email once verification is complete.",
  "Your account is closed and your data is deleted from our live systems.",
  "You receive a final confirmation email when deletion is done.",
];

export default function DeleteAccountPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-white pb-14 pt-10 sm:pt-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-18rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-[50%] bg-brand-100/40 blur-[100px]" />
        </div>
        <div className="container-page relative">
          <h1 className="h-section max-w-[780px]">Delete your Greencaller account and data</h1>
          <p className="lede mt-5 max-w-[640px]">
            You can ask us to permanently delete your Greencaller account and the personal data
            associated with it at any time by email.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-ink">
              How to request deletion
            </h2>

            <div className="mt-6 flex gap-4 rounded-2xl border border-line bg-white p-6">
              <span className="mt-0.5 shrink-0 text-brand-700">
                <IconMail className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[15px] font-semibold text-ink">Email us</p>
                <p className="mt-1.5 text-[15px] font-light leading-relaxed text-muted">
                  Send a request to{" "}
                  <a
                    href={`mailto:${site.supportEmail}?subject=${encodeURIComponent("Account deletion request")}`}
                    className="font-normal text-brand-700 underline underline-offset-4 decoration-brand-500/60 hover:decoration-brand-700"
                  >
                    {site.supportEmail}
                  </a>{" "}
                  from the email address registered to your account, with the subject
                  &ldquo;Account deletion request&rdquo;. Include your account email and business
                  phone number so we can verify you.
                </p>
              </div>
            </div>

            <ol className="mt-8 list-decimal space-y-3 pl-5 text-[15px] font-light leading-relaxed text-muted marker:text-muted">
              {steps.map((s) => (
                <li key={s} className="pl-1">
                  {s}
                </li>
              ))}
            </ol>

            <p className="mt-14 text-[15px] font-light leading-relaxed text-muted">
              For full details of how we handle personal data, see our{" "}
              <Link
                href="/legal/privacy"
                className="font-normal text-brand-700 underline underline-offset-4 decoration-brand-500/60 hover:decoration-brand-700"
              >
                Privacy &amp; UK GDPR Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
