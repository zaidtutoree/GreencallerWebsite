import type { Metadata } from "next";
import IndexPage from "@/components/IndexPage";
import { solutions } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Solutions by Team and Industry",
  description:
    "The same phone system, tuned to your trade. Greencaller for sales, support, home services, estate agents, law firms, insurance, medical practices and more.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsIndex() {
  return (
    <IndexPage
      label="Solutions"
      base="/solutions"
      items={solutions}
      title="Every team, every type of call"
      lede="Greencaller works the same way everywhere, but what a good call looks like changes by trade. Pick yours and see how teams like you have it set up."
      groups={[
        { title: "By use case", slugs: ["sales", "support", "operations", "marketing", "recruiting", "founders"] },
        {
          title: "By industry",
          slugs: [
            "home-services",
            "estate-agents",
            "law-firms",
            "insurance",
            "medical",
            "restaurants",
            "financial-advisers",
            "software",
          ],
        },
      ]}
    />
  );
}
