import Link from "next/link";
import { Section } from "./Section";

const visits = [
  ["12 Nov 2026", "Viral fever"],
  ["3 Sep 2026", "Acute gastritis"],
  ["21 Jul 2026", "Allergic rhinitis"],
  ["10 Jun 2026", "Iron deficiency anaemia"],
];

export function RecordSection() {
  return (
    <Section className="grid items-center gap-10 pb-20 lg:grid-cols-[440px_1fr] lg:gap-16 lg:pb-[88px]">
      <div className="flex flex-col gap-4">
        <h2 className="font-serif text-[32px] leading-[1.1] tracking-[-0.01em] lg:text-4xl">
          Every visit, where you can find it.
        </h2>
        <p className="text-[#4A463F]">
          The next time Asha walks in, last month&apos;s diagnosis, medicines and follow-up are one tap away. For the
          patient, the same record lives on their phone, in their language.
        </p>
        <Link href="/#patients" className="font-medium text-primary hover:text-[#0B544E]">
          For patients
        </Link>
      </div>
      <div className="rounded-md border border-border bg-card px-7 py-6" aria-label="A patient's record">
        <div className="font-serif text-[28px] tracking-[-0.01em]">Asha Rao</div>
        <div className="mb-3.5 text-[13px] text-muted-foreground">34 years, female. Patient since June 2026</div>
        <ul>
          {visits.map(([date, dx], i) => (
            <li
              key={date}
              className={[
                "flex justify-between py-3 text-sm",
                i === 0 ? "border-t border-foreground" : "border-t border-border",
                i === visits.length - 1 ? "border-b border-border" : "",
              ].join(" ")}
            >
              <span className="font-medium">{date}</span>
              <span className="text-[#4A463F]">{dx}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
