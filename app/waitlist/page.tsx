import type { Metadata } from "next";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Section } from "@/components/site/Section";
import { AccessForm } from "@/components/site/AccessForm";

export const metadata: Metadata = {
  title: "Request access",
  description: "Leave your email and we'll be in touch about setting up your practice on Aria.",
};

export default function WaitlistPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <Section className="py-16 lg:py-24">
          <div className="max-w-[620px]">
            <h1 className="font-serif text-[40px] leading-[1.05] tracking-[-0.015em] lg:text-[52px]">
              We&apos;re opening clinic by clinic.
            </h1>
            <p className="mb-8 mt-4 text-lg text-[#4A463F]">
              Leave your email and we&apos;ll be in touch about setting up your practice. Data stays in India.
            </p>
            <AccessForm />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
