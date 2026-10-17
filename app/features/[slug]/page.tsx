import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FinalCTA from "@/components/FinalCTA";
import { FeatureBody, FeatureFaq, FeatureHero, FeatureStrip } from "@/components/features/Blocks";
import { featureVisuals } from "@/components/features/Visuals";
import { defaultFeatureDesign, featureDesign } from "@/lib/featureDesign";
import { features, bySlug } from "@/lib/pages";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = bySlug.features[slug];
  if (!d) return {};
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: { canonical: `/features/${d.slug}` },
    openGraph: {
      title: `${d.metaTitle} | ${site.name}`,
      description: d.metaDescription,
      url: `${site.domain}/features/${d.slug}`,
    },
  };
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params;
  const d = bySlug.features[slug];
  if (!d) notFound();

  const design = featureDesign[slug] ?? defaultFeatureDesign;
  const Visual = featureVisuals[slug as keyof typeof featureVisuals];

  const related = features
    .filter((f) => f.slug !== d.slug)
    .slice(0, 8)
    .map((f) => ({ label: f.name, href: `/features/${f.slug}` }));

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
          { "@type": "ListItem", position: 2, name: "Features", item: `${site.domain}/features` },
          {
            "@type": "ListItem",
            position: 3,
            name: d.name,
            item: `${site.domain}/features/${d.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: d.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <FeatureHero
        detail={d}
        design={design}
        visual={Visual ? <Visual /> : null}
        trail={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: d.name, href: `/features/${d.slug}` },
        ]}
      />
      <FeatureBody detail={d} design={design} />
      <FeatureStrip design={design} />
      <FeatureFaq detail={d} related={related} />
      <FinalCTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
