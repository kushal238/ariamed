import Link from "next/link";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Section } from "@/components/site/Section";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <Section className="py-24">
          <h1 className="font-serif text-[40px] tracking-[-0.015em]">There&apos;s nothing at this address.</h1>
          <p className="mt-3 text-[#4A463F]">
            <Link href="/" className="font-medium text-primary hover:text-[#0B544E]">
              Back to the front page
            </Link>
          </p>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
