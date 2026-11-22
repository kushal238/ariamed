import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Steps } from "@/components/site/Steps";
import { RecordSection } from "@/components/site/RecordSection";
import { ForWho } from "@/components/site/ForWho";
import { AccessCard } from "@/components/site/AccessCard";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Steps />
        <RecordSection />
        <ForWho />
        <AccessCard />
      </main>
      <SiteFooter />
    </div>
  );
}
