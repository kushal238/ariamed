import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// An access request is an email to the founders' inbox. The site has no
// database of its own (the old Supabase project is paused), so the inbox is
// the record of who asked and when.
const bodySchema = z.object({
  email: z.string().trim().email(),
  name: z.string().trim().max(200).optional(),
});

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", details: parsed.error.flatten() }, { status: 400 });
  }
  const { email, name } = parsed.data;

  // Tests and local runs without mail credentials set WAITLIST_DRY_RUN=1.
  if (process.env.WAITLIST_DRY_RUN === "1") {
    return NextResponse.json({ success: true });
  }

  const notificationEmail = process.env.NOTIFICATION_EMAIL;
  if (!resend || !notificationEmail) {
    console.error("Waitlist: RESEND_API_KEY or NOTIFICATION_EMAIL is not set; request from", email, "was not recorded");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: "Aria access requests <onboarding@resend.dev>",
      to: notificationEmail,
      replyTo: email,
      subject: `Access request: ${name ? `${name} <${email}>` : email}`,
      text: [`Email: ${email}`, name ? `Name: ${name}` : null, `When: ${new Date().toISOString()}`]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (error) {
    console.error("Waitlist: failed to send notification email", error);
    return NextResponse.json({ error: "Failed to record request" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
