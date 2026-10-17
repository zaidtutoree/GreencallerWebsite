import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Greencaller workspace.",
  robots: { index: false, follow: false },
};

const field =
  "w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[14.5px] text-ink placeholder:text-muted-2 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-500/12";

export default function LoginPage() {
  return (
    <section className="relative flex min-h-[calc(100vh-160px)] items-center overflow-hidden bg-white py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-16rem] h-[26rem] w-[42rem] -translate-x-1/2 rounded-[50%] bg-brand-100/45 blur-[100px]" />
      </div>
      <div className="container-page relative">
        <div className="mx-auto w-full max-w-[420px]">
          <div className="flex justify-center">
            <Image
              src="/greencaller-logo.png"
              alt="Greencaller"
              width={542}
              height={181}
              className="h-[28px] w-auto"
            />
          </div>
          <h1 className="font-display mt-8 text-center text-[26px] font-semibold tracking-[-0.03em]">
            Log in to your workspace
          </h1>

          <form className="mt-8 rounded-3xl border border-line bg-white p-7 shadow-soft">
            <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-ink">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@company.co.uk"
              className={field}
            />

            <div className="mt-4 flex items-baseline justify-between">
              <label htmlFor="password" className="mb-1.5 block text-[13px] font-medium text-ink">
                Password
              </label>
              <Link href="/login" className="text-[12.5px] text-muted hover:text-ink">
                Forgot?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={field}
            />

            <button type="submit" className="btn btn-primary btn-lg mt-6 w-full">
              Log in
            </button>

            <p className="mt-5 text-center text-[13.5px] font-light text-muted">
              No account yet?{" "}
              <Link href="/signup" className="font-medium text-ink underline underline-offset-4">
                Start for free
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
