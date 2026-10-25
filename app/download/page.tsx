import type { Metadata } from "next";
import Link from "next/link";
import SimplePage from "@/components/SimplePage";
import { IconArrowRight, IconShield } from "@/components/Icons";
import { desktopApp } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download Greencaller for Windows",
  description:
    "Download the Greencaller desktop app for Windows. Make and take calls on your business number from your PC, with headset controls and a shared call history.",
  alternates: { canonical: "/download" },
};

const win = desktopApp.windows;

const otherPlatforms = [
  {
    title: "iOS",
    body: "iPhone and iPad. Calls over 4G, 5G and Wi-Fi, with push so the app does not have to be open.",
    action: "Coming soon",
  },
  {
    title: "Android",
    body: "Phones and tablets running Android 10 and above, with native dialler integration.",
    action: "Coming soon",
  },
  {
    title: "macOS",
    body: "Universal build for Apple Silicon and Intel, with proper audio device handling.",
    action: "Coming soon",
  },
  {
    title: "Web",
    body: "Nothing to install. Chrome, Edge, Brave, Arc and Safari.",
    action: "Open the web app",
    href: "/login",
  },
];

const steps = [
  { n: "1", title: "Download the installer", body: `Click the button above to save ${win.fileName} to your PC.` },
  { n: "2", title: "Run it", body: "Double-click the file. Greencaller installs in a few seconds and opens automatically. No admin rights needed." },
  { n: "3", title: "Sign in", body: "Use the email and password from your Greencaller account. Your number, contacts and call history are already there." },
];

export default function DownloadPage() {
  return (
    <SimplePage
      trail={[
        { label: "Home", href: "/" },
        { label: "Download", href: "/download" },
      ]}
      title="Greencaller for Windows"
      lede="Your business line on your PC. Make and take calls, see who is ringing, and pick up where your team left off."
    >
      {/* Primary download */}
      <div className="rounded-3xl border border-line bg-white p-7 sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[560px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-[12.5px] font-medium text-brand-700">
              Version {win.version}
              <span aria-hidden className="h-1 w-1 rounded-full bg-brand-700/50" />
              Released {new Date(win.releasedOn).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <h2 className="mt-4 text-[26px] font-semibold tracking-[-0.02em] sm:text-[30px]">
              Download the desktop app
            </h2>
            <p className="mt-3 text-[15px] font-light leading-relaxed text-muted">
              {win.requires}. About {win.sizeMb} MB. Works with any USB or Bluetooth headset and keeps
              ringing in the background so you never miss a call.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={win.url} download={win.fileName} className="btn btn-primary">
                Download for Windows
                <IconArrowRight className="h-4 w-4" />
              </a>
              <Link href="/help" className="btn btn-outline">
                Installation help
              </Link>
            </div>
          </div>

          <div className="w-full max-w-[380px] rounded-2xl border border-line bg-cream p-5">
            <div className="flex items-center gap-2 text-[13px] font-medium">
              <IconShield className="h-4 w-4 text-brand-700" />
              Verify your download
            </div>
            <dl className="mt-3 space-y-2 text-[13px]">
              <div>
                <dt className="text-muted">File</dt>
                <dd className="font-medium">{win.fileName}</dd>
              </div>
              <div>
                <dt className="text-muted">SHA-256</dt>
                <dd className="break-all font-mono text-[11.5px] leading-relaxed">{win.sha256}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-line bg-white p-6">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-[13px] font-semibold text-brand-700">
              {s.n}
            </span>
            <h3 className="mt-4 h-card">{s.title}</h3>
            <p className="mt-2 text-[14px] font-light leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-[13px] font-light leading-relaxed text-muted">
        Windows may show a SmartScreen notice the first time you run a new installer. Click{" "}
        <span className="font-medium text-ink">More info</span>, then{" "}
        <span className="font-medium text-ink">Run anyway</span>. You can check the SHA-256 above against the
        file if you want to be certain it is the genuine release.
      </p>

      {/* Other platforms */}
      <h2 className="mt-16 text-[22px] font-semibold tracking-[-0.02em]">Other devices</h2>
      <p className="mt-2 max-w-[600px] text-[15px] font-light leading-relaxed text-muted">
        One account follows you everywhere. The web app works today; native mobile and Mac apps are on the way.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {otherPlatforms.map((c) => (
          <div key={c.title} className="flex flex-col rounded-2xl border border-line bg-white p-6">
            <h3 className="h-card">{c.title}</h3>
            <p className="mt-2 flex-1 text-[14px] font-light leading-relaxed text-muted">{c.body}</p>
            {c.href ? (
              <Link href={c.href} className="link-arrow mt-5 !text-[13.5px] !text-brand-700">
                {c.action}
                <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            ) : (
              <span className="mt-5 text-[13.5px] font-medium text-muted">{c.action}</span>
            )}
          </div>
        ))}
      </div>
    </SimplePage>
  );
}
