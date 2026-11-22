import Link from "next/link";

export const PLATFORM_SIGN_IN = "https://platform.ariamed.ai/login";

const links = [
  { href: "/#visit", label: "How a visit works" },
  { href: "/#doctors", label: "For doctors" },
  { href: "/#patients", label: "For patients" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-24">
        <Link href="/" className="font-serif text-[26px] text-foreground">
          Aria
        </Link>
        <nav aria-label="Site" className="flex items-center gap-4 text-[15px] sm:gap-7">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hidden text-foreground hover:text-primary md:inline">
              {l.label}
            </Link>
          ))}
          <a href={PLATFORM_SIGN_IN} className="text-primary hover:text-[#0B544E]">
            Sign in
          </a>
          <Link
            href="/#access"
            className="inline-flex h-10 items-center rounded-full bg-primary px-[18px] font-medium text-primary-foreground hover:bg-[#0B544E]"
          >
            Request access
          </Link>
        </nav>
      </div>
    </header>
  );
}
