import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
    url: "https://ariamed.ai",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

