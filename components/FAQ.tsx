"use client";

import { useState } from "react";
import { IconPhone } from "./Icons";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="h-section">What people ask us before they switch</h2>
            <p className="lede mt-5">
              If yours is not here, ring us. Our own agent picks up, works out what you need and puts
              you through to a person &mdash; which is a faster demo than anything we could write.
            </p>
            <a href={site.phoneHref} className="btn btn-ink btn-lg mt-7">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              <IconPhone className="h-4 w-4" />
              <span className="tabular-nums">{site.phoneDisplay}</span>
            </a>
          </div>

          <div className="divide-y divide-line rounded-3xl border border-line bg-white px-6 sm:px-8">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-5 py-5 text-left"
                    >
                      <span className="font-display text-[16.5px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                        {f.q}
                      </span>
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isOpen
                            ? "border-brand-400 bg-brand-500 text-deep"
                            : "border-line bg-white text-muted"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          className="h-3 w-3"
                          aria-hidden
                        >
                          <path d="M4 12h16" />
                          {!isOpen && <path d="M12 4v16" />}
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[62ch] pb-6 pr-8 text-[14.5px] font-light leading-relaxed text-muted">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
