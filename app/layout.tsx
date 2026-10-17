import type { Metadata, Viewport } from "next";
import { Caveat, Inter, Schibsted_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#00d16c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Greencaller | Business VoIP Phone System with an AI Receptionist",
    template: "%s | Greencaller",
  },
  description: site.description,
  keywords: [
    "business phone system",
    "VoIP for business",
    "cloud phone system UK",
    "AI receptionist",
    "virtual phone number",
    "call centre software",
    "hosted VoIP provider",
    "business telephone system",
    "power dialler",
    "call recording software",
  ],
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.domain }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "technology",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.domain,
    siteName: site.name,
    title: "Greencaller | Business VoIP Phone System with an AI Receptionist",
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Greencaller — the business phone system that handles the work your calls create",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greencaller | Business VoIP Phone System with an AI Receptionist",
    description: site.description,
    images: ["/opengraph-image"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.domain}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.domain,
    logo: `${site.domain}/greencaller-logo.png`,
    description: site.description,
    email: site.salesEmail,
    telephone: site.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    sameAs: [site.social.x, site.social.linkedin, site.social.youtube],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phoneDisplay,
        contactType: "sales",
        areaServed: "GB",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        email: site.supportEmail,
        contactType: "customer support",
        areaServed: "GB",
        availableLanguage: ["English"],
      },
    ],
  };

  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.domain}/#website`,
    url: site.domain,
    name: site.name,
    publisher: { "@id": `${site.domain}/#organization` },
    inLanguage: "en-GB",
  };

  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${grotesk.variable} ${hand.variable}`}
      // Extensions (Grammarly, Dark Reader, password managers) add attributes to the
      // root elements before React hydrates. Suppression is one level deep, so real
      // mismatches inside the app are still reported.
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([orgLd, siteLd]) }}
        />
      </body>
    </html>
  );
}
