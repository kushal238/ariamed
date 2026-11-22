import { Section } from "./Section";

const steps = [
  {
    title: "Record",
    recording: true,
    body: "Press Record and consult as you always do, in whichever language the room speaks. The patient gives consent once; the audio stays private.",
  },
  {
    title: "Review the draft",
    body: "Within about twenty seconds the prescription is drafted on the sheet: complaint, examination, diagnosis, medicines with dose and frequency, advice. Edit anything.",
  },
  {
    title: "Send",
    body: "One tap sends the prescription to the patient's phone as a PDF and files the visit in their record. No paper to lose.",
  },
];

export function Steps() {
  return (
    <Section id="visit" className="scroll-mt-20 pb-20 lg:pb-[88px]">
      <h2 className="font-serif text-[32px] tracking-[-0.01em] lg:text-4xl">A visit, in three steps.</h2>
      <p className="mb-9 mt-2 max-w-[560px] text-muted-foreground">
        Nothing to type during the consultation. The doctor talks to the patient; the paperwork follows.
      </p>
      <ol className="grid border-t border-foreground md:grid-cols-3">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className={[
              "py-6 md:pt-6 md:pb-0",
              i === 0 ? "md:pr-6" : i === 1 ? "md:px-6" : "md:pl-6",
              i < 2 ? "border-b border-border md:border-b-0 md:border-r" : "",
            ].join(" ")}
          >
            <div className="flex items-center gap-2.5 text-[17px] font-medium">
              {s.recording && <span className="h-2 w-2 rounded-full bg-destructive" />}
              {s.title}
            </div>
            <p className="mt-2.5 text-[15px] text-[#4A463F]">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
