import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { customList } from "country-codes-list";

const formSchema = z.object({
  name: z.string().min(1),
  userType: z.enum(["doctor", "patient", "other"]),
  userTypeOther: z.string().optional(),
  phoneNumber: z.string().min(5),
  phoneNumberCountryCode: z.string().default("IN"),
  email: z.string().email(),
  features: z.array(z.string()).min(1),
  featuresOther: z.string().optional(),
  source: z.enum([
    "search_engine",
    "social_media",
    "recommendation",
    "word_of_mouth",
    "other",
  ]),
  sourceOther: z.string().optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = formSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const values = parsed.data;

  // Build full phone number with country calling code
  const callingCodes = customList(
    "countryCode",
    "+{countryCallingCode}",
  ) as Record<string, string>;
  const callingCode =
    callingCodes[values.phoneNumberCountryCode] || "";
  const fullPhoneNumber = `${callingCode} ${values.phoneNumber}`;

  // Insert into Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 },
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { error: dbError } = await supabase.from("waitlist").insert({
    name: values.name,
    user_type: values.userType,
    user_type_other: values.userTypeOther,
    phone_number: fullPhoneNumber,
    email: values.email,
    features: values.features,
    features_other: values.featuresOther,
    source: values.source,
    source_other: values.sourceOther,
  });

  if (dbError) {
    console.error("Supabase insert error:", dbError);
    return NextResponse.json(
      { error: "Failed to save signup" },
      { status: 500 },
    );
  }

  // Send notification email (non-blocking -- don't fail the signup if email fails)
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (resendApiKey && notificationEmail) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "Aria Waitlist <onboarding@resend.dev>",
        to: notificationEmail,
        subject: `New waitlist signup: ${values.name}`,
        text: [
          `New waitlist signup`,
          ``,
          `Name: ${values.name}`,
          `Email: ${values.email}`,
          `Phone: ${fullPhoneNumber}`,
          `User type: ${values.userType}${values.userTypeOther ? ` (${values.userTypeOther})` : ""}`,
          `Features: ${values.features.join(", ")}${values.featuresOther ? ` (Other: ${values.featuresOther})` : ""}`,
          `Source: ${values.source}${values.sourceOther ? ` (${values.sourceOther})` : ""}`,
        ].join("\n"),
      });
    } catch (emailError) {
      console.error("Failed to send notification email:", emailError);
      // Don't return error -- the signup was saved successfully
    }
  }

  return NextResponse.json({ success: true });
}
