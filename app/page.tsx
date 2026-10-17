import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import FeatureSections from "@/components/FeatureSections";
import FinalCTA from "@/components/FinalCTA";
import Flexibility from "@/components/Flexibility";
import DeskPhones from "@/components/DeskPhones";
import MobileAppSection from "@/components/MobileAppSection";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Integrations from "@/components/Integrations";
import PricingTeaser from "@/components/PricingTeaser";
import Receptionist from "@/components/Receptionist";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import { faqs, plans } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Greencaller | Business VoIP Phone System with an AI Receptionist",
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const productLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android, macOS, Windows",
    url: site.domain,
    description: site.description,
    // Only plans with a real published price become Offers — Enterprise is quote-based.
    offers: plans
      .filter((p) => p.price.startsWith("£"))
      .map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price.replace("£", ""),
        priceCurrency: "GBP",
        category: "SaaS subscription",
        url: `${site.domain}/pricing`,
      })),
  };

  return (
    <>
      <Hero />
      <Steps />
      <MobileAppSection />
      <FeatureSections />
      <DeskPhones />
      <Industries />
      <Integrations />
      <Receptionist />
      <Testimonials />
      <Flexibility />
      <PricingTeaser />
      <div id="faq">
        <FAQ />
      </div>
      <FinalCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqLd, productLd]) }}
      />
    </>
  );
}
