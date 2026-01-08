"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar-nextjs";
import { Footer } from "@/components/Footer-nextjs";
import { supabase } from "@/integrations/supabase/client";
import { PhoneInput } from "@/components/ui/phone-input";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name.",
  }),
  userType: z.enum(["doctor", "patient", "other"], {
    required_error: "Please select your main use case.",
  }),
  userTypeOther: z.string().optional(),
  phoneNumber: z.string().min(5, {
    message: "Please enter a valid phone number.",
  }),
  phoneNumberCountryCode: z.string().default("IN"),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  features: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Please select at least one feature.",
  }),
  featuresOther: z.string().optional(),
  source: z.enum(["search_engine", "social_media", "recommendation", "word_of_mouth", "other"], {
    required_error: "Please tell us how you heard about us.",
  }),
  sourceOther: z.string().optional(),
});

export default function WaitlistPage() {
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      userType: undefined,
      userTypeOther: "",
      phoneNumber: "",
      phoneNumberCountryCode: "IN",
      email: "",
      features: [],
      featuresOther: "",
      source: undefined,
      sourceOther: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { customList } = await import("country-codes-list");
      const callingCodes = customList("countryCode", "+{countryCallingCode}");
      const callingCode = callingCodes[values.phoneNumberCountryCode as keyof typeof callingCodes] || "";
      const fullPhoneNumber = `${callingCode} ${values.phoneNumber}`;
      
      const { error } = await supabase
        .from('waitlist')
        .insert({
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

      if (error) throw error;

      toast({
        title: "You're on the list!",
        description: "Thanks for joining the Aria Healthcare waitlist. We'll be in touch soon.",
      });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-32 max-w-2xl">
        <div className="space-y-6 text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Join the Waitlist</h1>
        </div>

        <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>What is your main use case of this app? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="doctor" />
                          </FormControl>
                          <FormLabel className="font-normal">Doctor</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="patient" />
                          </FormControl>
                          <FormLabel className="font-normal">Patient</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="other" />
                          </FormControl>
                          <FormLabel className="font-normal">Other</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    {form.watch("userType") === "other" && (
                      <FormField
                        control={form.control}
                        name="userTypeOther"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Please specify..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={() => (
                  <PhoneInput control={form.control} name="phoneNumber" />
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input placeholder="doctor@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="features"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">
                        Which of the following features are most appealing to you?
                      </FormLabel>
                    </div>
                    {[
                      { id: "appointment", label: "Appointment scheduling/management" },
                      { id: "ABHA", label: "ABHA-integration" },
                      { id: "messaging", label: "Secure messaging with patients/healthcare providers" },
                      { id: "records", label: "Access to medical records" },
                      { id: "telehealth", label: "Telehealth/virtual consultations" },
                      { id: "ai_features", label: "AI-powered features" },
                      { id: "other", label: "Other" },
                    ].map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="features"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    {form.watch("features")?.includes("other") && (
                      <FormField
                        control={form.control}
                        name="featuresOther"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Please specify other features..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="source"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>How did you hear about Aria Healthcare?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="search_engine" />
                          </FormControl>
                          <FormLabel className="font-normal">Search Engine (e.g., Google, Bing)</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="social_media" />
                          </FormControl>
                          <FormLabel className="font-normal">Social Media</FormLabel>
                        </FormItem>

                         <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="word_of_mouth" />
                          </FormControl>
                          <FormLabel className="font-normal">Word of mouth (Friend/Family/Colleague)</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="other" />
                          </FormControl>
                          <FormLabel className="font-normal">Other</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                     {form.watch("source") === "other" && (
                      <FormField
                        control={form.control}
                        name="sourceOther"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Please specify..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

