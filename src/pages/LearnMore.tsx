import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Revolutionizing <span className="bg-gradient-hero bg-clip-text text-transparent">Healthcare</span> Access
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Aria brings digital prescriptions to India, making healthcare records accessible, 
              secure, and always available when you need them most.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://forms.gle/ZHETRTEAm72hZv366', '_blank')}
            >
              Join the Waitlist
              <ArrowRight className="h-5 w-5" />
            </Button>
          </section>

          {/* Key Benefits */}
          <section className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Aria?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-soft border border-border">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">For Patients</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Access your complete medical history anytime, anywhere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Never lose a prescription or medical record again</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Share records easily with any healthcare provider</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Track medications and treatment progress digitally</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-soft border border-border">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">For Doctors</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Reduce paperwork and administrative burden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Access patient history instantly for better diagnosis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Secure and compliant digital prescription system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Streamline patient communication and follow-ups</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Doctor Creates Digital Prescription</h3>
                  <p className="text-muted-foreground">
                    Your doctor uses Aria's platform to create and send your prescription digitally 
                    with complete medical notes and treatment plans.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Access on Your Device</h3>
                  <p className="text-muted-foreground">
                    Receive your prescription instantly on your phone or computer. 
                    All records are securely stored and easily searchable.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Share & Track Your Health Journey</h3>
                  <p className="text-muted-foreground">
                    Share records with pharmacies, specialists, or family members. 
                    Track your complete medical history in one secure place.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-glow/20 via-background to-background p-12 rounded-2xl border border-border">
            <Clock className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Experience?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of patients and doctors already using Aria to make healthcare 
              more accessible, secure, and efficient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://forms.gle/ZHETRTEAm72hZv366', '_blank')}
              >
                Join the Waitlist
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LearnMore;
