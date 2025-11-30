import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-32 max-w-4xl">
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p>
              Welcome to Aria ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ariamed.ai and use our services.
            </p>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Join our waitlist</li>
              <li>Register for an account</li>
              <li>Express interest in obtaining information about us or our products and services</li>
              <li>Contact us directly</li>
            </ul>
            <p>The personal information we collect may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Names</li>
              <li>Phone numbers</li>
              <li>Email addresses</li>
              <li>Professional credentials (for doctors)</li>
            </ul>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
            <p>We use personal information collected via our website for a variety of business purposes described below:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Protection of Your Medical Data</h2>
            <p>
              We strictly limit our use of your personal health information. Specifically:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do <strong>not</strong> access, use, or share your private medical records (such as prescriptions, diagnoses, or personal health history) for any purpose other than providing the core healthcare services you explicitly request.</li>
              <li>We do <strong>not</strong> sell your personal medical data to third parties, advertisers, or data brokers.</li>
              <li>Your health data is encrypted and processed solely to facilitate your care and maintain your history as per your authorization.</li>
            </ul>
          </section>


          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at <a href="mailto:support@ariamed.ai" className="text-primary hover:underline">support@ariamed.ai</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;

