import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ariamed.ai"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Aria Healthcare - The Future of Medical Records",
    template: "%s | Aria Healthcare",
  },
  description:
    "Transform your healthcare practice with Aria's AI-powered medical record management. Streamline workflows, enhance diagnosis, and improve patient care.",
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
    title: "Aria Healthcare - The Future of Medical Records",
    description:
      "Transform your healthcare practice with Aria's AI-powered medical record management. Streamline workflows, enhance diagnosis, and improve patient care.",
    siteName: "Aria Healthcare",
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
    title: "Aria Healthcare - The Future of Medical Records",
    description:
      "Transform your healthcare practice with Aria's AI-powered medical record management.",
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
      description:
        "AI-powered medical record management platform with voice dictation, smart medication search, and AI-aided diagnosis.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

