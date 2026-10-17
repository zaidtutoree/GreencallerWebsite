"use client";

import { useState } from "react";
import { IconArrowRight, IconCheck } from "./Icons";

const field =
  "w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[14.5px] text-ink placeholder:text-muted-2 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-500/12";
const label = "mb-1.5 block text-[13px] font-medium text-ink";

export default function LeadForm({
  variant = "demo",
  submitLabel = "Request a demo",
}: {
  variant?: "demo" | "contact" | "signup";
  submitLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl border border-brand-200 bg-brand-50/60 p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-deep">
          <IconCheck className="h-6 w-6" strokeWidth={2.4} />
        </span>
        <h2 className="h-card mt-5">Thanks — that&rsquo;s with us</h2>
        <p className="mx-auto mt-2 max-w-[380px] text-[14.5px] font-light leading-relaxed text-muted">
          Someone from the team will be in touch within one working day. If it&rsquo;s urgent, call
          us and our agent will put you straight through.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-line bg-white p-7 shadow-soft sm:p-8"
      noValidate={false}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={label}>
            First name
          </label>
          <input id="firstName" name="firstName" required autoComplete="given-name" className={field} />
        </div>
        <div>
          <label htmlFor="lastName" className={label}>
            Last name
          </label>
          <input id="lastName" name="lastName" required autoComplete="family-name" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className={label}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.co.uk"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="company" className={label}>
            Company
          </label>
          <input id="company" name="company" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+44"
            className={field}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="seats" className={label}>
            How many people will use it?
          </label>
          <select id="seats" name="seats" defaultValue="" className={field}>
            <option value="" disabled>
              Choose a range
            </option>
            <option>Just me</option>
            <option>2 – 5</option>
            <option>6 – 20</option>
            <option>21 – 50</option>
            <option>50+</option>
          </select>
        </div>
        {variant !== "signup" && (
          <div className="sm:col-span-2">
            <label htmlFor="message" className={label}>
              What are you trying to fix?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="We miss calls after 5pm and nobody logs anything in the CRM…"
              className={`${field} resize-y`}
            />
          </div>
        )}
      </div>

      <button type="submit" className="btn btn-primary btn-lg mt-6 w-full">
        {submitLabel}
        <IconArrowRight className="h-4 w-4" />
      </button>

      <p className="mt-4 text-center text-[12px] font-light leading-relaxed text-muted-2">
        By submitting this form you agree to our{" "}
        <a href="/legal/privacy" className="underline underline-offset-2 hover:text-ink">
          privacy policy
        </a>
        . We will only use your details to answer this enquiry.
      </p>
    </form>
  );
}
