import { Section } from "./Section";

const columns = [
  {
    id: "doctors",
    eyebrow: "For doctors",
    title: "Less paperwork, better decisions",
    items: [
      "Prescriptions drafted from the conversation, in Indian notation: Crocin 650, 1-0-1, 5 days",
      "Drug names matched to the SNOMED CT India extension, so what you said is what gets prescribed",
      "The patient's history in front of you before you ask",
      "ABHA and ABDM integration",
    ],
  },
  {
    id: "patients",
    eyebrow: "For patients",
    title: "Your record, kept",
    items: [
      "Every prescription on your phone, never lost or faded",
      "Your full history to show any doctor, anywhere",
      "Upload lab reports and scans to the same record",
      "Medicines and follow-ups tracked for you",
    ],
  },
];

export function ForWho() {
  return (
    <Section className="grid gap-10 pb-20 md:grid-cols-2 md:gap-12 lg:pb-[88px]">
      {columns.map((c) => (
        <div key={c.id} id={c.id} className="scroll-mt-24 border-t border-foreground pt-5">
          <div className="text-[13px] text-muted-foreground">{c.eyebrow}</div>
          <h2 className="mb-3.5 mt-1.5 text-[22px] font-medium">{c.title}</h2>
          <ul className="flex list-disc flex-col gap-2 pl-[18px] text-[#4A463F]">
            {c.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
