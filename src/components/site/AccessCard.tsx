import { Section } from "./Section";
import { AccessForm } from "./AccessForm";

export function AccessCard() {
  return (
    <Section id="access" className="scroll-mt-24 pb-20 lg:pb-[88px]">
      <div className="grid items-center gap-8 rounded-md border border-border bg-card p-6 sm:p-10 lg:grid-cols-[1fr_380px] lg:gap-12 lg:p-12">
        <div>
          <h2 className="mb-2 font-serif text-[30px] tracking-[-0.01em] lg:text-[34px]">
            We&apos;re opening clinic by clinic.
          </h2>
          <p className="text-[#4A463F]">
            Leave your email and we&apos;ll be in touch about setting up your practice. Data stays in India.
          </p>
        </div>
        <AccessForm />
      </div>
    </Section>
  );
}
