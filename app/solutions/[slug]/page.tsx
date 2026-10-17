import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { solutions, bySlug } from "@/lib/pages";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = bySlug.solutions[slug];
  if (!d) return {};
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: { canonical: `/solutions/${d.slug}` },
    openGraph: {
      title: `${d.metaTitle} | ${site.name}`,
      description: d.metaDescription,
      url: `${site.domain}/solutions/${d.slug}`,
    },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const d = bySlug.solutions[slug];
  if (!d) notFound();

  const related = solutions
    .filter((f) => f.slug !== d.slug)
    .slice(0, 8)
    .map((f) => ({ label: f.name, href: `/solutions/${f.slug}` }));

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
          { "@type": "ListItem", position: 2, name: "Solutions", item: `${site.domain}/solutions` },
          {
            "@type": "ListItem",
            position: 3,
            name: d.name,
            item: `${site.domain}/solutions/${d.slug}`,
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
      <DetailPage
        detail={d}
        trail={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: d.name, href: `/solutions/${d.slug}` },
        ]}
        related={related}
        relatedTitle="More solutions"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
