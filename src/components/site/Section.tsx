import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** One content column for the whole site: 1280 wide, 96px gutters on desktop. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-24", className)}>
      {children}
    </section>
  );
}
