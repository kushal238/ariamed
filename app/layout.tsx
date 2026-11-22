import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "../src/index.css";
import { Providers } from "./providers";

const sans = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: "500", variable: "--font-mono" });

const DESCRIPTION =
  "Aria listens to the consultation, drafts the prescription for you to review, and keeps every visit on file for you and the patient. Built for clinics in India.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ariamed.ai"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Aria. The prescription, finally kept.",
    template: "%s | Aria",
  },
  description: DESCRIPTION,
  keywords: [
    "medical records",
    "healthcare",
    "EHR",
    "EMR",
    "AI diagnosis",
    "patient management",
    "ABHA integration",
    "telehealth",
  ],
  authors: [{ name: "Aria Healthcare" }],
  creator: "Aria Healthcare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ariamed.ai",
    title: "Aria. The prescription, finally kept.",
    description: DESCRIPTION,
    siteName: "Aria",
    images: [
      {
        url: "/aria-site.png",
        width: 1200,
        height: 630,
        alt: "Aria Healthcare Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aria. The prescription, finally kept.",
    description: DESCRIPTION,
    images: ["/aria-site.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.ariamed.ai/#organization",
      name: "Aria Healthcare",
      url: "https://www.ariamed.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ariamed.ai/aria-logo-new.svg",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ariamed.ai/#website",
      url: "https://www.ariamed.ai",
      name: "Aria Healthcare",
      publisher: { "@id": "https://www.ariamed.ai/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Aria Healthcare",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      description: DESCRIPTION,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/ComingSoon",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

