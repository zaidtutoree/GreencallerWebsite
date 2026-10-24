import Image from "next/image";
import {
  IconArrowRight,
  IconCalendar,
  IconCheck,
  IconMessage,
  IconMissed,
  IconNote,
  IconPhone,
  IconPhoneIn,
  IconPhoneOut,
  IconPlay,
  IconRecord,
  IconSparkle,
  IconUsers,
} from "../Icons";

/* ------------------------------------------------------------------ */
/* Shared shells                                                       */
/* ------------------------------------------------------------------ */

function LightPanel({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-x-4 -bottom-4 top-8 rounded-[2rem] bg-gradient-to-br from-brand-100/60 to-brand-50/30 blur-2xl"
      />
      <div
        role="img"
        aria-label={label}
        className="relative overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-lift sm:p-5"
      >
        {children}
      </div>
    </div>
  );
}

function DarkPanel({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2.5rem] bg-brand-500/10 blur-3xl"
      />
      <div
        role="img"
        aria-label={label}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur sm:p-5"
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. AI receptionist — a call happening                               */
/* ------------------------------------------------------------------ */

export function ReceptionistVisual() {
  const turns = [
    { who: "caller", t: "Hi — my boiler's making a banging noise. Can someone come out?" },
    { who: "agent", t: "Sorry to hear that. Are you in our Islington or Hackney area?" },
    { who: "caller", t: "Islington. Is tomorrow morning possible?" },
    { who: "agent", t: "Thursday 10:00 is free. I'll book it and text you the arrival window." },
  ];
  return (
    <DarkPanel label="An AI receptionist answering an out-of-hours call and booking the job">
      <div className="flex items-center justify-between rounded-2xl bg-white/[0.06] px-3.5 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
            <IconMissed className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[12.5px] font-semibold text-white">21:14 &middot; out of hours</p>
            <p className="text-[11px] text-white/45">Nobody on the team available</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-brand-500 px-2.5 py-1 text-[10.5px] font-bold text-deep">
          <IconSparkle className="h-3 w-3" /> Answered
        </span>
      </div>

      <div className="mt-3 space-y-2">
        {turns.map((t, i) => (
          <div key={i} className={`flex ${t.who === "agent" ? "justify-end" : "justify-start"}`}>
            <p
              className={`max-w-[86%] rounded-2xl px-3 py-2 text-[12px] font-light leading-relaxed ${
                t.who === "agent"
                  ? "rounded-br-md bg-brand-500/20 text-white/90"
                  : "rounded-bl-md bg-white/[0.07] text-white/70"
              }`}
            >
              {t.t}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-1.5">
        {[
          { icon: IconCalendar, l: "Booked Thu 10:00" },
          { icon: IconMessage, l: "Confirmation sent" },
          { icon: IconUsers, l: "Contact created" },
          { icon: IconCheck, l: "Logged to CRM" },
        ].map((x) => (
          <div
            key={x.l}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2"
          >
            <x.icon className="h-3.5 w-3.5 shrink-0 text-brand-300" />
            <span className="truncate text-[11px] font-medium text-white/85">{x.l}</span>
          </div>
        ))}
      </div>
    </DarkPanel>
  );
}

/* ------------------------------------------------------------------ */
/* 2. IVR — a keypad wired to destinations                             */
/* ------------------------------------------------------------------ */

export function IvrVisual() {
  const routes = [
    { key: "1", label: "Sales", to: "Rings the sales group" },
    { key: "2", label: "Support", to: "Rings whoever is on shift" },
    { key: "3", label: "Accounts", to: "Rings Marcus, then the agent" },
  ];
  return (
    <LightPanel label="A phone menu mapping keypad options to the teams they ring">
      <div className="grid gap-4 sm:grid-cols-[132px_1fr] sm:items-center">
        {/* keypad */}
        <div className="grid grid-cols-3 gap-1.5">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((k) => (
            <span
              key={k}
              className={`flex aspect-square items-center justify-center rounded-lg text-[13px] font-semibold tabular-nums ring-1 ${
                ["1", "2", "3"].includes(k)
                  ? "bg-brand-500 text-deep ring-brand-500"
                  : "bg-cream-2 text-muted-2 ring-line"
              }`}
            >
              {k}
            </span>
          ))}
        </div>

        {/* destinations */}
        <div className="space-y-1.5">
          {routes.map((r) => (
            <div
              key={r.key}
              className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-3 py-2.5"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-500 text-[11px] font-bold text-deep">
                {r.key}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[12.5px] font-semibold text-ink">{r.label}</span>
                <span className="block truncate text-[11px] text-muted-2">{r.to}</span>
              </span>
              <IconArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-2" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-brand-200 bg-brand-50/60 px-3 py-2.5">
        <p className="text-[11.5px] font-light leading-snug text-brand-900/80">
          <span className="font-medium">Or they just say it.</span> &ldquo;I need to chase an
          invoice&rdquo; goes to Accounts without anyone pressing a thing.
        </p>
      </div>
    </LightPanel>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Voicemail — a readable inbox                                     */
/* ------------------------------------------------------------------ */

export function VoicemailVisual() {
  const messages = [
    {
      from: "Hannah Whitfield",
      time: "21:14",
      len: "0:34",
      text: "Hi, it's Hannah at number 42 — the boiler's gone again. Can someone come Thursday?",
      unread: true,
    },
    {
      from: "+44 7700 900318",
      time: "18:02",
      len: "0:12",
      text: "Just checking you got the photos I sent over. No rush.",
      unread: true,
    },
    {
      from: "Tom Beckett",
      time: "16:47",
      len: "0:51",
      text: "Can you quote for two more units at the Hackney site?",
      unread: false,
    },
  ];
  return (
    <LightPanel label="A shared voicemail inbox with every message transcribed">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[13px] font-semibold text-ink">Voicemail</p>
          <p className="text-[11px] text-muted-2">3 messages &middot; shared with the team</p>
        </div>
        <span className="rounded-full bg-brand-500 px-2.5 py-1 text-[10.5px] font-bold text-deep">
          2 new
        </span>
      </div>

      <ul className="space-y-1.5">
        {messages.map((m) => (
          <li
            key={m.from}
            className={`rounded-xl border px-3 py-2.5 ${
              m.unread ? "border-brand-200 bg-brand-50/50" : "border-line bg-white"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                aria-label={`Play message from ${m.from}`}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-white"
              >
                <IconPlay className="ml-0.5 h-3 w-3" />
              </button>
              <span className="min-w-0 flex-1 truncate text-[12.5px] font-medium text-ink">
                {m.from}
              </span>
              <span className="shrink-0 text-[10.5px] tabular-nums text-muted-2">
                {m.len} &middot; {m.time}
              </span>
            </div>
            <p className="mt-1.5 pl-9 text-[11.5px] font-light leading-snug text-ink/70">
              &ldquo;{m.text}&rdquo;
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-brand-700">
        <IconCheck className="h-3.5 w-3.5" /> Transcribed automatically — read instead of dialling in
      </p>
    </LightPanel>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Mobile app — a handset ringing                                   */
/* ------------------------------------------------------------------ */

export function MobileAppVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[112%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-brand-500/15 blur-3xl"
      />
      <div
        role="img"
        aria-label="An incoming business call ringing on a mobile phone"
        className="relative overflow-hidden rounded-[2.4rem] border-[7px] border-[#101a17] bg-white shadow-panel"
      >
        {/* status bar */}
        <div className="flex items-center justify-between bg-deep px-5 pb-2 pt-3 text-[10px] font-medium text-white/70">
          <span className="tabular-nums">9:41</span>
          <span className="h-4 w-16 rounded-full bg-black/60" />
          <span className="tabular-nums">4G</span>
        </div>

        {/* incoming call */}
        <div className="bg-deep px-5 pb-7 pt-5 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-brand-300">
            Greencaller &middot; incoming
          </p>
          <p className="font-display mt-3 text-[21px] font-semibold tracking-[-0.02em] text-white">
            Hannah Whitfield
          </p>
          <p className="mt-1 text-[12px] tabular-nums text-white/50">Whitfield Plumbing</p>
          <p className="mt-0.5 text-[11px] text-white/35">to your Sales line</p>

          <div className="mt-6 flex items-center justify-center gap-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500 text-white">
              <IconMissed className="h-5 w-5" />
            </span>
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-deep">
              <span
                aria-hidden
                className="absolute inline-flex h-full w-full rounded-full bg-brand-400 animate-pulse-ring"
              />
              <IconPhone className="relative h-5 w-5" />
            </span>
          </div>
        </div>

        {/* recent list */}
        <div className="px-4 py-3.5">
          <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.09em] text-muted-2">
            Today
          </p>
          {[
            { n: "Marcus Oyelaran", t: "09:02", d: "out" },
            { n: "Priya Raghunathan", t: "08:47", d: "in" },
          ].map((c) => (
            <div key={c.n} className="flex items-center gap-2.5 py-1.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream-2 text-muted">
                {c.d === "in" ? (
                  <IconPhoneIn className="h-3 w-3" />
                ) : (
                  <IconPhoneOut className="h-3 w-3" />
                )}
              </span>
              <span className="min-w-0 flex-1 truncate text-[11.5px] font-medium text-ink">
                {c.n}
              </span>
              <span className="shrink-0 text-[10.5px] tabular-nums text-muted-2">{c.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. PBX — the path a call takes                                      */
/* ------------------------------------------------------------------ */

export function PbxVisual() {
  const hops = [
    { ext: "—", name: "Call arrives", sub: "020 4620 3846", state: "start" },
    { ext: "100", name: "Reception", sub: "Rings for 15 seconds", state: "done" },
    { ext: "200", name: "Sales group", sub: "Aisha, Tom, Rhys together", state: "live" },
    { ext: "—", name: "Fallback", sub: "Agent picks up if nobody does", state: "idle" },
  ];
  return (
    <LightPanel label="The path an inbound call takes through extensions and ring groups">
      <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.09em] text-muted-2">
        Call flow
      </p>
      <ol className="relative space-y-2">
        {hops.map((h, i) => (
          <li key={h.name} className="relative flex gap-3">
            {/* rail */}
            <div className="flex shrink-0 flex-col items-center">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-[10.5px] font-bold tabular-nums ring-1 ${
                  h.state === "live"
                    ? "bg-brand-500 text-deep ring-brand-500"
                    : h.state === "done"
                      ? "bg-brand-50 text-brand-800 ring-brand-200"
                      : "bg-cream-2 text-muted-2 ring-line"
                }`}
              >
                {h.ext}
              </span>
              {i < hops.length - 1 && <span className="mt-1 w-px flex-1 bg-line" />}
            </div>

            <div
              className={`mb-1 min-w-0 flex-1 rounded-xl border px-3 py-2.5 ${
                h.state === "live" ? "border-brand-300 bg-brand-50/50" : "border-line bg-white"
              }`}
            >
              <p className="text-[12.5px] font-semibold text-ink">{h.name}</p>
              <p className="truncate text-[11px] text-muted-2">{h.sub}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Transfer", "Hold", "Park", "Hunt group", "Business hours"].map((t) => (
          <span
            key={t}
            className="rounded-full bg-cream-2 px-2.5 py-1 text-[10.5px] font-medium text-muted ring-1 ring-line"
          >
            {t}
          </span>
        ))}
      </div>
    </LightPanel>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Physical phones — the hardware itself                            */
/* ------------------------------------------------------------------ */

export function PhysicalPhonesVisual() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-x-4 -bottom-4 top-8 rounded-[2rem] bg-gradient-to-br from-brand-100/60 to-brand-50/30 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-lift sm:p-5">
        <Image
          src="/desk-phones.png"
          alt="A Yealink desk phone surrounded by the tools and colleagues it connects to"
          width={906}
          height={786}
          sizes="(max-width: 1024px) 90vw, 520px"
          className="h-auto w-full"
        />
        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-line-2 pt-3.5">
          {["Yealink", "Poly", "Snom", "Cisco", "Grandstream", "Fanvil"].map((b) => (
            <span
              key={b}
              className="rounded-full bg-cream-2 px-2.5 py-1 text-[11px] font-medium text-muted ring-1 ring-line"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Click to call — a number in a browser                            */
/* ------------------------------------------------------------------ */

export function ClickToCallVisual() {
  return (
    <LightPanel label="A phone number on a web page turned into a one-click dial">
      {/* browser chrome */}
      <div className="mb-3 flex items-center gap-2 rounded-t-xl bg-cream px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#e5e7e6]" />
          <span className="h-2 w-2 rounded-full bg-[#e5e7e6]" />
          <span className="h-2 w-2 rounded-full bg-[#e5e7e6]" />
        </span>
        <span className="mx-auto rounded bg-white px-3 py-0.5 text-[10.5px] text-muted-2 ring-1 ring-line">
          app.hubspot.com / contacts
        </span>
      </div>

      {/* record */}
      <div className="rounded-xl border border-line bg-white p-3.5">
        <p className="text-[13px] font-semibold text-ink">Beatrice Lund</p>
        <p className="text-[11.5px] text-muted-2">Operations Lead &middot; Orbit Retail</p>

        <div className="mt-3 space-y-1.5 text-[11.5px]">
          <div className="flex justify-between">
            <span className="text-muted-2">Email</span>
            <span className="text-ink/70">b.lund@orbitretail.co.uk</span>
          </div>
          <div className="relative flex items-center justify-between rounded-lg bg-brand-50 px-2 py-1.5 ring-1 ring-brand-300">
            <span className="text-muted-2">Phone</span>
            <span className="font-semibold tabular-nums text-brand-800">+44 20 7946 0921</span>
            {/* cursor */}
            <svg
              aria-hidden
              viewBox="0 0 16 20"
              className="absolute -bottom-3 right-6 h-5 w-4 text-ink drop-shadow-sm"
              fill="currentColor"
            >
              <path d="M1 1l12 9-5.2.9 2.6 5.4-2.4 1.1-2.6-5.4L1 15V1z" stroke="#fff" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>

      {/* call popping up */}
      <div className="mt-2.5 flex items-center gap-2.5 rounded-xl bg-deep px-3 py-2.5">
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-deep">
          <span
            aria-hidden
            className="absolute inline-flex h-full w-full rounded-full bg-brand-400 animate-pulse-ring"
          />
          <IconPhoneOut className="relative h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[12px] font-semibold text-white">Calling Beatrice Lund</p>
          <p className="truncate text-[11px] text-white/50">History open &middot; logging on</p>
        </div>
        <span className="ml-auto shrink-0 text-[11px] tabular-nums text-white/50">00:02</span>
      </div>
    </LightPanel>
  );
}

/* ------------------------------------------------------------------ */
/* 8. AI summaries — the write-up                                      */
/* ------------------------------------------------------------------ */

export function SummariesVisual() {
  return (
    <LightPanel label="An automatic call summary with the follow-up email drafted">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <IconPhoneIn className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-ink">Marcus Oyelaran</p>
          <p className="truncate text-[11.5px] text-muted-2">
            Northbeam &middot; 7:44 &middot; ended 2 min ago
          </p>
        </div>
        <span className="ml-auto shrink-0 rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-800 ring-1 ring-brand-200">
          Follow-up
        </span>
      </div>

      <div className="mt-3 rounded-2xl border border-line bg-cream/50 p-3.5">
        <p className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.09em] text-brand-700">
          <IconSparkle className="h-3 w-3" /> Summary
        </p>
        <ul className="mt-2 space-y-1.5">
          {[
            "Moving 14 seats across at the end of the quarter",
            "Blocker is CRM logging — needs calls on the opportunity",
            "Wants a security pack before legal review",
          ].map((l) => (
            <li key={l} className="flex gap-2 text-[11.5px] font-light leading-snug text-ink/80">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
              {l}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-2.5 rounded-2xl border border-line bg-white p-3.5">
        <div className="flex items-center justify-between">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.09em] text-muted-2">
            Draft follow-up
          </p>
          <span className="rounded-full bg-cream-2 px-2 py-0.5 text-[10px] font-medium text-muted ring-1 ring-line">
            Not sent
          </span>
        </div>
        <p className="mt-2 text-[11.5px] font-light leading-relaxed text-ink/75">
          Hi Marcus — thanks for your time. Attaching the security pack and a note on how we log
          calls against opportunities. Shall I hold 14 seats for the 1st?
        </p>
        <div className="mt-2.5 flex gap-1.5">
          <span className="btn btn-primary btn-sm !py-1.5 !text-[11px]">Send</span>
          <span className="btn btn-outline btn-sm !py-1.5 !text-[11px]">Edit</span>
        </div>
      </div>
    </LightPanel>
  );
}

/* ------------------------------------------------------------------ */
/* 9. Call recording — waveform and transcript                         */
/* ------------------------------------------------------------------ */

export function RecordingVisual() {
  // Deterministic bars so server and client markup match.
  const bars = Array.from({ length: 56 }, (_, i) =>
    22 + Math.round(Math.abs(Math.sin(i * 0.7)) * 62 + (i % 5) * 3)
  );
  const lines = [
    { s: "Rep", t: "So the porting takes three to five business days end to end.", at: "02:14" },
    { s: "Caller", t: "And we keep taking calls the whole time?", at: "02:19" },
    { s: "Rep", t: "You do. Nothing switches until the cutover slot you pick.", at: "02:23" },
  ];
  return (
    <DarkPanel label="A recorded call with a waveform and a speaker-labelled transcript">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-500/15 text-rose-300">
          <IconRecord className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[12.5px] font-semibold text-white">Beatrice Lund</p>
          <p className="truncate text-[11px] text-white/45">Recorded &middot; 08:42 &middot; consent notice played</p>
        </div>
        <span className="ml-auto shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/60">
          12 mo retention
        </span>
      </div>

      {/* waveform */}
      <div className="mt-3.5 flex h-14 items-center gap-[2px]" aria-hidden>
        {bars.map((hgt, i) => (
          <span
            key={i}
            className={`flex-1 rounded-full ${i < 24 ? "bg-brand-400" : "bg-white/20"}`}
            style={{ height: `${hgt}%` }}
          />
        ))}
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] tabular-nums text-white/35">
        <span>00:00</span>
        <span className="text-brand-300">02:23</span>
        <span>08:42</span>
      </div>

      {/* transcript */}
      <div className="mt-3 space-y-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        {lines.map((l) => (
          <div key={l.at} className="flex gap-2.5">
            <span className="w-10 shrink-0 pt-0.5 text-[10px] tabular-nums text-white/35">
              {l.at}
            </span>
            <p className="min-w-0 text-[11.5px] font-light leading-snug text-white/75">
              <span
                className={`font-semibold ${l.s === "Rep" ? "text-brand-300" : "text-white/60"}`}
              >
                {l.s}:
              </span>{" "}
              {l.t}
            </p>
          </div>
        ))}
      </div>
    </DarkPanel>
  );
}

/* ------------------------------------------------------------------ */
/* 10. Call notes — captured while you talk                            */
/* ------------------------------------------------------------------ */

export function NotesVisual() {
  const captured = [
    { k: "Address", v: "42 Ashby Road, Islington N1" },
    { k: "Job", v: "Boiler service + thermostat swap" },
    { k: "Quoted", v: "£340 including parts" },
    { k: "Agreed", v: "Thursday, 10:00–12:00 window" },
  ];
  return (
    <LightPanel label="Call notes being captured live as the conversation happens">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <IconNote className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-ink">Notes &middot; live</p>
          <p className="truncate text-[11.5px] text-muted-2">Hannah Whitfield &middot; 03:12</p>
        </div>
        <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-brand-500 px-2.5 py-1 text-[10.5px] font-bold text-deep">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-deep/50 animate-pulse-ring" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-deep" />
          </span>
          Writing
        </span>
      </div>

      {/* ruled paper */}
      <div
        className="mt-3 rounded-2xl border border-line bg-white p-3.5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 33px, var(--color-line-2) 33px, var(--color-line-2) 34px)",
        }}
      >
        <dl className="space-y-2.5">
          {captured.map((c) => (
            <div key={c.k} className="flex items-baseline gap-3">
              <dt className="w-16 shrink-0 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-muted-2">
                {c.k}
              </dt>
              <dd className="min-w-0 flex-1 text-[12px] font-medium text-ink">{c.v}</dd>
              <IconCheck className="h-3.5 w-3.5 shrink-0 text-brand-600" />
            </div>
          ))}
          <div className="flex items-baseline gap-3 opacity-60">
            <dt className="w-16 shrink-0 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-muted-2">
              Next
            </dt>
            <dd className="min-w-0 flex-1 text-[12px] font-light text-muted">
              Send written quote before
              <span className="ml-0.5 inline-block h-3.5 w-px translate-y-0.5 bg-brand-600" />
            </dd>
          </div>
        </dl>
      </div>

      <p className="mt-3 text-[11px] font-light text-muted">
        Nobody typed any of this. Correct anything before it saves.
      </p>
    </LightPanel>
  );
}

/* ------------------------------------------------------------------ */

export const featureVisuals = {
  "ai-receptionist": ReceptionistVisual,
  ivr: IvrVisual,
  voicemail: VoicemailVisual,
  "mobile-app": MobileAppVisual,
  pbx: PbxVisual,
  "physical-phones": PhysicalPhonesVisual,
  "click-to-call": ClickToCallVisual,
  "ai-summaries": SummariesVisual,
  "call-recording": RecordingVisual,
  "call-notes": NotesVisual,
} as const;

export type FeatureSlug = keyof typeof featureVisuals;
