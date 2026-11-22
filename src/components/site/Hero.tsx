import { PillLink } from "./Pill";
import { Section } from "./Section";
import { HeroDemo } from "./HeroDemo";

export function Hero() {
  return (
    <Section className="grid items-center gap-12 py-14 lg:grid-cols-[1fr_560px] lg:gap-16 lg:py-20">
      <div className="flex flex-col gap-6">
        <h1 className="font-serif text-[44px] leading-[1.05] tracking-[-0.015em] sm:text-[52px] lg:text-[60px]">
          The prescription, finally kept.
        </h1>
        <p className="max-w-[500px] text-lg leading-normal text-[#4A463F] lg:text-[19px]">
          Aria listens to the consultation, drafts the prescription for you to review, and keeps every visit on file
          for you and the patient. Built for clinics in India.
        </p>
        <div className="mt-2">
          <PillLink href="/#access">Request access</PillLink>
        </div>
        <p className="mt-2 max-w-[460px] text-sm text-muted-foreground">
          Hindi, Telugu, Tamil, Kannada and eighteen more Indian languages, mixed with English the way people actually
          talk. About twenty seconds from Stop to a draft.
        </p>
      </div>
      <HeroDemo />
    </Section>
  );
}
