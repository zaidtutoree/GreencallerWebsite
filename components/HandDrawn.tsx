import type { SVGProps } from "react";

/**
 * Rough, slightly-off marks drawn by hand rather than generated on a grid.
 * Each stroke is doubled with a small offset so it reads as pen on paper.
 */

/** Sits under a word in a heading. Wrap the word in a `relative` span. */
export function Underline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 14"
      preserveAspectRatio="none"
      aria-hidden
      className={`absolute -bottom-1 left-0 h-[0.42em] w-full overflow-visible text-brand-500 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
    >
      <path d="M4 9.4c31-3.4 68-5.4 104-5.7 35-.3 74 1.2 108 4.6" opacity="0.95" />
      <path d="M9 12.1c34-2.6 71-4 106-4.1 30 0 62 .9 92 3" opacity="0.4" />
    </svg>
  );
}

/** A looping arrow that points down-left, for margin notes beside a button. */
export function CurlyArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 90 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M79 6c2 15-3 27-14 35C52 50 36 53 20 52" />
      <path d="M31 44c-6 3-10 6-12 8 4 2 8 5 11 9" />
    </svg>
  );
}

/** A quick circle scribbled around something worth noticing. */
export function CircleScribble(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 90"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <path d="M104 6c-38-3-79 6-93 22-13 15 6 36 46 47 41 11 96 8 122-8 24-15 15-38-19-49-14-5-31-8-48-9" />
      <path d="M96 11c-33 0-67 9-79 23" opacity="0.45" />
    </svg>
  );
}

/** Torn strip of highlighter behind inline text. */
export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden
        className="absolute inset-x-[-0.18em] bottom-[0.04em] top-[0.42em] -rotate-[0.6deg] rounded-[2px] bg-brand-200/70"
      />
      <span className="relative">{children}</span>
    </span>
  );
}
