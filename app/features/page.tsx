import type { Metadata } from "next";
import IndexPage from "@/components/IndexPage";
import { features } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Features | Business Phone System & AI Call Handling",
  description:
    "Everything Greencaller does: a mobile app for calls anywhere, a cloud PBX, desk phones, IVR, voicemail, click to call, call recording, AI summaries and automatic note taking.",
  alternates: { canonical: "/features" },
};

export default function FeaturesIndex() {
  return (
    <IndexPage
      label="Features"
      base="/features"
      items={features}
      title="Everything your phone system should have done all along"
      lede="Answer every call, run the phone system your way, and let the write-up take care of itself. Each feature works on its own and gets better with the rest."
      groups={[
        {
          title: "Answer every call",
          slugs: ["ai-receptionist", "ivr", "voicemail"],
        },
        {
          title: "Your phone system",
          slugs: ["mobile-app", "pbx", "physical-phones", "click-to-call"],
        },
        {
          title: "After the call",
          slugs: ["ai-summaries", "call-recording", "call-notes"],
        },
      ]}
    />
  );
}
