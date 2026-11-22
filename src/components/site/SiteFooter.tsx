import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-6 text-[13px] text-muted-foreground sm:px-8 md:h-[72px] md:flex-row md:items-center md:justify-between md:py-0 lg:px-24">
        <span className="font-serif text-xl text-foreground">Aria</span>
        <span>Transforming healthcare in India, one prescription at a time.</span>
        <span className="flex gap-5">
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <a href="mailto:hello@ariamed.ai" className="hover:text-foreground">
            Contact
          </a>
          <span>© {new Date().getFullYear()} Aria</span>
        </span>
      </div>
    </footer>
  );
}
