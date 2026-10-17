import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconCheck } from "./Icons";

const points = [
  "Rings on 4G, 5G or wi-fi, wherever you are",
  "Dial out as the business, not from your personal mobile",
  "iPhone, Android, Mac, Windows and the web",
  "One shared call history across every device",
];

export default function MobileAppSection() {
  return (
    // Ground colour sampled from mobileapp.png so the artwork sits on the section
    // rather than on top of it.
    <section className="relative overflow-hidden bg-[#042a22] py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(78% 72% at 74% 44%, rgba(18,84,64,0.55) 0%, rgba(12,62,48,0.28) 38%, transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:56px_56px]"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div>
            <span className="eyebrow !text-brand-300">Mobile app</span>

            <h2 className="font-display mt-4 text-[clamp(1.85rem,1.1rem+2.6vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-white">
              Your office line, in your pocket
            </h2>

            <p className="mt-5 max-w-[520px] text-[16.5px] font-light leading-relaxed text-white/65">
              Take and make business calls from anywhere &mdash; the van, a customer&rsquo;s kitchen,
              a train, the sofa on a Sunday. The app rings like a normal call, and everything you
              dial goes out from your company number so nobody ends up with your personal one.
            </p>

            <ul className="mt-8 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20">
                    <IconCheck className="h-3 w-3 text-brand-300" strokeWidth={2.6} />
                  </span>
                  <span className="text-[15.5px] font-light leading-relaxed text-white/80">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/download" className="btn btn-primary btn-lg">
                Download the app
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/features/mobile-app"
                className="link-arrow px-2 !text-brand-300 hover:!text-brand-200"
              >
                How it works
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-brand-500/10 blur-3xl"
            />
            <Image
              src="/mobile-app.png"
              alt="The Greencaller mobile app showing a business line and the day's call history"
              width={563}
              height={450}
              sizes="(max-width: 1024px) 90vw, 520px"
              className="relative mx-auto h-auto w-full max-w-[520px]"
              // Feather all four edges so the artwork's own ground dissolves into the
              // section rather than sitting on it as a visible rectangle.
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 9%, #000 86%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 9%, #000 86%, transparent 100%)",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
