"use client";

import { FormEvent, useState } from "react";
import { PillButton } from "./Pill";
import { cn } from "@/lib/utils";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "done"; email: string } | { kind: "error"; message: string };

export function AccessForm({ className }: { className?: string }) {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setState({ kind: "done", email });
      form.reset();
    } catch {
      setState({ kind: "error", message: "That didn't go through. Check the address and try again." });
    }
  }

  if (state.kind === "done") {
    return (
      <p role="status" className={cn("text-[#4A463F]", className)}>
        Thanks. We&apos;ll write to you at <span className="font-medium text-foreground">{state.email}</span>.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("flex flex-col gap-2", className)} noValidate={false}>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="access-email" className="sr-only">
          Email
        </label>
        <input
          id="access-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="doctor@clinic.in"
          disabled={state.kind === "sending"}
          className="h-12 flex-1 rounded-full border border-input bg-card px-3.5 text-[15px] text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <PillButton type="submit" disabled={state.kind === "sending"} className="h-12 text-[15px]">
          {state.kind === "sending" ? "Sending…" : "Request access"}
        </PillButton>
      </div>
      {state.kind === "error" && (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      )}
    </form>
  );
}
