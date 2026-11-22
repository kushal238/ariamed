"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * The hero object: a consultation becoming a prescription. Transcript lines
 * appear one by one, then the sheet fills in beside them, holds, and loops.
 * Everything is in the DOM from the first render (hidden with opacity) so the
 * layout never shifts and the text is there without JavaScript.
 */
const TRANSCRIPT = [
  { who: "Doctor", text: "Kab se bukhaar hai?" },
  { who: "Patient", text: "Teen din se. Body pain bhi hai." },
  { who: "Doctor", text: "Throat congested, chest clear. Paracetamol six-fifty, one-zero-one, five days, after food." },
  { who: "Doctor", text: "Fluids lo, rest karo." },
];

const FIELDS: { label: string; value: React.ReactNode; rx?: boolean }[] = [
  { label: "Complaint", value: "Fever and body ache for 3 days" },
  { label: "Examination", value: "Throat congested, chest clear" },
  {
    label: "Rx",
    rx: true,
    value: (
      <>
        <div className="font-medium">Paracetamol 650 mg</div>
        <div className="text-muted-foreground">1-0-1, 5 days, after food</div>
      </>
    ),
  },
  { label: "Advice", value: "Fluids, rest. Review in 5 days if fever persists." },
  { label: "Follow-up", value: "17 November 2026" },
];

const LINE_DELAYS = [500, 1300, 1500, 1900];
const DRAFT_PAUSE = 900;
const FIELD_DELAY = 450;
const HOLD = 4500;
const LAST = TRANSCRIPT.length + FIELDS.length; // step at which everything is visible

function delayFor(step: number): number {
  if (step < TRANSCRIPT.length) return LINE_DELAYS[step];
  if (step === TRANSCRIPT.length) return DRAFT_PAUSE;
  if (step < LAST) return FIELD_DELAY;
  return HOLD;
}

function useDemoStep() {
  const [step, setStep] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setStep(LAST);
      return;
    }
    let current = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      current = current >= LAST ? 0 : current + 1;
      setStep(current);
      timer = setTimeout(tick, delayFor(current));
    };
    timer = setTimeout(tick, delayFor(0));
    return () => clearTimeout(timer);
  }, []);

  return { step, reduced };
}

const Cursor = () => (
  <span aria-hidden="true" className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-[0.15em] bg-primary" />
);

export function HeroDemo() {
  const { step, reduced } = useDemoStep();
  const linesShown = Math.min(step, TRANSCRIPT.length);
  const fieldsShown = Math.max(0, step - TRANSCRIPT.length);
  const transcribing = !reduced && step < TRANSCRIPT.length;
  const drafting = !reduced && step >= TRANSCRIPT.length && step < LAST;
  const seconds = 128 + step * 7;
  const timer = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <div
      className="flex flex-col"
      aria-label="A consultation becoming a prescription"
      data-demo-step={step}
      data-demo-complete={step === LAST ? "true" : "false"}
    >
      {/* pb-16 = normal 22px + the 40px the sheet overlaps, so the overlap covers only empty card */}
      <div className="w-full rounded-md border border-border bg-card px-6 pb-16 pt-[22px] text-sm leading-relaxed lg:w-[380px]">
        <div className="mb-3 flex items-center gap-2.5">
          <span className={cn("h-[9px] w-[9px] rounded-full bg-destructive", transcribing && "animate-pulse")} />
          <span className="font-mono text-[13px] font-medium text-[#4A463F]">{timer}</span>
          <svg aria-hidden="true" width="230" height="22" viewBox="0 0 230 22" className="block">
            <path
              d="M0 11 H20 L24 11 L27 4 L31 18 L35 7 L39 14 L42 11 H80 L84 11 L87 6 L91 17 L95 9 L98 11 H140 L144 11 L148 2 L152 20 L156 6 L160 16 L164 10 L167 11 H200 L204 11 L207 7 L211 16 L215 11 H230"
              fill="none"
              stroke="#E11D48"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {TRANSCRIPT.map((line, i) => (
          <p
            key={i}
            data-demo-line
            className={cn("mb-2 last:mb-0 transition-opacity duration-300", i < linesShown ? "opacity-100" : "opacity-0")}
          >
            <span className="text-muted-foreground">{line.who}</span>&nbsp; {line.text}
            {transcribing && i === linesShown - 1 && <Cursor />}
          </p>
        ))}
      </div>

      <article
        className="relative z-10 -mt-10 w-[calc(100%-24px)] self-end rounded-md border border-border bg-card px-7 py-[26px] shadow-soft sm:w-[calc(100%-40px)] lg:w-[400px]"
        aria-label="Prescription drafted by Aria"
      >
        <div className="flex items-start justify-between border-b border-foreground pb-3">
          <div>
            <div className="font-serif text-lg">Dr Priya Sharma</div>
            <div className="text-[11px] text-muted-foreground">MBBS, General medicine</div>
          </div>
          <div className="text-right text-[11px] text-muted-foreground">12 November 2026</div>
        </div>
        <div className="flex justify-between border-b border-border py-2.5 text-xs">
          <span>
            <span className="text-muted-foreground">Patient</span> Asha Rao, 34 F
          </span>
          <span className={cn("transition-opacity duration-300", fieldsShown >= 2 || reduced ? "opacity-100" : "opacity-0")}>
            <span className="text-muted-foreground">Diagnosis</span> Viral fever
          </span>
        </div>
        <dl className="grid grid-cols-[92px_1fr] gap-x-3.5 gap-y-2.5 pt-3 text-[12.5px]">
          {FIELDS.map((f, j) => {
            const shown = j < fieldsShown;
            return (
              <div key={f.label} data-demo-field className="contents">
                <dt
                  className={cn(
                    "text-muted-foreground",
                    f.rx && "font-serif text-xl italic leading-none",
                  )}
                >
                  {f.label}
                </dt>
                <dd className="m-0">
                  <div className={cn("inline-block align-top transition-opacity duration-300", shown ? "opacity-100" : "opacity-0")}>
                    {f.value}
                  </div>
                  {drafting && j === fieldsShown - 1 && <Cursor />}
                  {!shown && !reduced && j === fieldsShown && (
                    <span aria-hidden="true" className="inline-block h-[9px] w-[120px] rounded-[3px] bg-hairline align-middle" />
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-2.5 text-[11px] text-muted-foreground">
          <span>{step === LAST || reduced ? "Ready for your signature" : "Drafting from the consultation…"}</span>
          <span
            className={cn(
              "inline-flex h-7 items-center rounded-full px-3 font-medium transition-colors duration-300",
              step === LAST || reduced ? "bg-primary text-primary-foreground" : "border border-input text-foreground",
            )}
          >
            Sign and send
          </span>
        </div>
      </article>
    </div>
  );
}
