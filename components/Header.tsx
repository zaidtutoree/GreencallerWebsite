"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  IconArrowRight,
  IconChevronDown,
  IconClose,
  IconMenu,
  IconPhone,
  IconSparkle,
} from "./Icons";
import {
  featuresNav,
  integrationsNav,
  site,
  solutionsNav,
  type NavColumn,
} from "@/lib/site";

type MenuKey = "features" | "solutions" | "integrations";

const MENUS: {
  key: MenuKey;
  label: string;
  columns: NavColumn[];
  feature?: { title: string; body: string; href: string; cta: string };
  /** Shown under the columns when the entries themselves are not links. */
  footerLink?: { label: string; href: string };
  wide?: boolean;
}[] = [
  {
    key: "features",
    label: "Features",
    columns: featuresNav,
    wide: true,
    feature: {
      title: "AI Receptionist",
      body: "A 24/7 agent on your line that answers, qualifies, books the job and writes it into your CRM.",
      href: "/features/ai-receptionist",
      cta: "See it answer a call",
    },
  },
  { key: "solutions", label: "Solutions", columns: solutionsNav },
  {
    key: "integrations",
    label: "Integrations",
    columns: integrationsNav,
    footerLink: { label: "See all integrations", href: "/integrations" },
  },
];

export default function Header() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const enter = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const leave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 130);
  };

  return (
    <>
      {/* ---------- Top strip ---------- */}
      <div className="relative z-50 bg-deep text-white">
        <div className="container-page">
          <div className="flex h-9 items-center justify-end">
            <Link
              href="https://greencaller.app"
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[13px] font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- Main nav ---------- */}
      <header
        className={`sticky top-0 z-40 border-b bg-white transition-shadow duration-200 ${
          scrolled ? "border-line shadow-[0_1px_12px_rgba(8,33,26,0.06)]" : "border-transparent"
        }`}
        onMouseLeave={leave}
      >
        <div className="container-page">
          <div className="flex h-[74px] items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="shrink-0" aria-label="Greencaller home">
              <Image
                src="/greencaller-logo.png"
                alt="Greencaller"
                width={542}
                height={181}
                priority
                className="h-[34px] w-auto"
              />
            </Link>

            {/* Desktop menu */}
            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
              {MENUS.map((m) => (
                <div key={m.key} onMouseEnter={() => enter(m.key)}>
                  <button
                    type="button"
                    aria-expanded={open === m.key}
                    onClick={() => setOpen(open === m.key ? null : m.key)}
                    className={`flex items-center gap-1 rounded-full px-3 py-2 text-[15px] font-medium transition ${
                      open === m.key
                        ? "bg-ink/5 text-ink"
                        : "text-ink/75 hover:bg-ink/5 hover:text-ink"
                    }`}
                  >
                    {m.label}
                    <IconChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        open === m.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
              <Link
                href="/pricing"
                onMouseEnter={() => setOpen(null)}
                className="rounded-full px-3 py-2 text-[15px] font-medium text-ink/75 transition hover:bg-ink/5 hover:text-ink"
              >
                Pricing
              </Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <a
                href={site.phoneHref}
                className="hidden items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-[14px] font-medium tabular-nums text-ink shadow-[0_1px_2px_rgba(8,33,26,0.05)] transition hover:border-ink/25 hover:bg-cream xl:inline-flex"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-500 animate-pulse-ring" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
                </span>
                {site.phoneDisplay}
              </a>
              <Link href="/demo" className="btn btn-outline btn-sm hidden sm:inline-flex">
                Book a demo
              </Link>
              <Link href="/signup" className="btn btn-primary btn-sm">
                Start for free
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="ml-1 rounded-full p-2 text-ink transition hover:bg-ink/5 lg:hidden"
              >
                <IconMenu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ---------- Mega menu panel ---------- */}
        {MENUS.map((m) => (
          <div
            key={m.key}
            onMouseEnter={() => enter(m.key)}
            className={`absolute inset-x-0 top-full hidden origin-top lg:block ${
              open === m.key
                ? "pointer-events-auto opacity-100 translate-y-0"
                : "pointer-events-none opacity-0 -translate-y-1"
            } transition duration-200 ease-out`}
          >
            <div className="container-page pt-2 pb-6">
              <div
                className="mx-auto overflow-hidden rounded-3xl border border-line bg-white shadow-panel"
                // Size the panel to its columns so a two-column menu is not mostly empty space.
                style={{ maxWidth: m.wide ? 1100 : m.columns.length * 250 + 56 }}
              >
                <div className={`grid gap-0 ${m.feature ? "lg:grid-cols-[1fr_310px]" : ""}`}>
                  <div
                    className="grid gap-x-8 gap-y-7 p-7"
                    style={{ gridTemplateColumns: `repeat(${m.columns.length}, minmax(0,1fr))` }}
                  >
                    {m.columns.map((col) => (
                      <div key={col.title}>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.11em] text-muted-2">
                          {col.title}
                        </p>
                        <ul className="space-y-0.5">
                          {col.links.map((l) => {
                            const body = (
                              <>
                                <span className="block text-[14.5px] font-medium text-ink group-hover:text-brand-700">
                                  {l.label}
                                </span>
                                {l.desc && (
                                  <span className="mt-0.5 block text-[12.5px] font-light leading-snug text-muted">
                                    {l.desc}
                                  </span>
                                )}
                              </>
                            );
                            return (
                              <li key={l.label}>
                                {l.href ? (
                                  <Link
                                    href={l.href}
                                    onClick={() => setOpen(null)}
                                    className="group block rounded-xl px-2.5 py-2 transition hover:bg-cream-2"
                                  >
                                    {body}
                                  </Link>
                                ) : (
                                  <span className="block rounded-xl px-2.5 py-2">{body}</span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                    {m.footerLink && (
                      <div
                        className="border-t border-line-2 pt-4"
                        style={{ gridColumn: `1 / -1` }}
                      >
                        <Link
                          href={m.footerLink.href}
                          onClick={() => setOpen(null)}
                          className="link-arrow px-2.5 !text-[14px] !text-brand-700"
                        >
                          {m.footerLink.label}
                          <IconArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {m.feature && (
                    <div className="relative m-2 hidden overflow-hidden rounded-2xl bg-deep p-6 lg:block">
                      <div
                        aria-hidden
                        className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-500/25 blur-3xl"
                      />
                      <div className="relative">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-300">
                          <IconSparkle className="h-3 w-3" /> Featured
                        </span>
                        <h3 className="mt-4 text-[20px] font-semibold leading-tight text-white">
                          {m.feature.title}
                        </h3>
                        <p className="mt-2 text-[13.5px] font-light leading-relaxed text-white/70">
                          {m.feature.body}
                        </p>
                        <Link
                          href={m.feature.href}
                          onClick={() => setOpen(null)}
                          className="link-arrow mt-5 !text-brand-300 hover:!text-brand-200"
                        >
                          {m.feature.cta}
                          <IconArrowRight className="h-4 w-4" />
                        </Link>
                        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-3">
                          <div className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-deep">
                              <IconPhone className="h-4 w-4" />
                            </span>
                            <div className="min-w-0">
                              <p className="truncate text-[12.5px] font-medium text-white">
                                Incoming &middot; {site.phoneDisplay}
                              </p>
                              <p className="text-[11.5px] text-white/50">
                                Answered by agent in 1 ring
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </header>

      {/* ---------- Mobile drawer ---------- */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-200 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-[400px] flex-col bg-white shadow-panel transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[74px] shrink-0 items-center justify-between border-b border-line px-5">
            <Image
              src="/greencaller-logo.png"
              alt="Greencaller"
              width={542}
              height={181}
              className="h-[30px] w-auto"
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="rounded-full p-2 text-ink transition hover:bg-ink/5"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {MENUS.map((m) => (
              <div key={m.key} className="border-b border-line-2">
                <button
                  type="button"
                  onClick={() => setMobileSection(mobileSection === m.key ? null : m.key)}
                  aria-expanded={mobileSection === m.key}
                  className="flex w-full items-center justify-between px-1 py-3.5 text-[16px] font-medium text-ink"
                >
                  {m.label}
                  <IconChevronDown
                    className={`h-4 w-4 text-muted transition-transform ${
                      mobileSection === m.key ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileSection === m.key && (
                  <div className="pb-3">
                    {m.columns.map((col) => (
                      <div key={col.title} className="mb-3">
                        <p className="mb-1 px-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-muted-2">
                          {col.title}
                        </p>
                        <ul>
                          {col.links.map((l) => (
                            <li key={l.label}>
                              {l.href ? (
                                <Link
                                  href={l.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-lg px-2 py-2 text-[14.5px] text-ink/85 hover:bg-cream-2"
                                >
                                  {l.label}
                                </Link>
                              ) : (
                                <span className="block px-2 py-2 text-[14.5px] text-ink/85">
                                  {l.label}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {m.footerLink && (
                      <Link
                        href={m.footerLink.href}
                        onClick={() => setMobileOpen(false)}
                        className="mt-1 block px-2 py-2 text-[14.5px] font-medium text-brand-700"
                      >
                        {m.footerLink.label} &rarr;
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-line-2 px-1 py-3.5 text-[16px] font-medium text-ink"
            >
              Pricing
            </Link>
            <Link
              href="https://greencaller.app"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-line-2 px-1 py-3.5 text-[16px] font-medium text-ink"
            >
              Log in
            </Link>
          </div>

          <div className="shrink-0 space-y-2 border-t border-line bg-cream p-4">
            <Link href="/signup" className="btn btn-primary w-full">
              Start for free
            </Link>
            <Link href="/demo" className="btn btn-outline w-full">
              Book a demo
            </Link>
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 py-2 text-[14px] font-medium text-muted"
            >
              <IconPhone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
