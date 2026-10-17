import type { Metadata } from "next";
import SimplePage, { Prose } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "What is Greencaller?",
  description: "Greencaller is a cloud business phone system with an AI receptionist: local numbers, call routing, SMS, recording, automatic summaries and native CRM sync.",
  alternates: { canonical: "/product" },
};

export default function ProductPage() {
  return (
    <SimplePage
      trail={[
        { label: "Home", href: "/" },
        { label: "What is Greencaller?", href: "/product" },
      ]}
      title="What is Greencaller?"
      lede="A cloud phone system for business, with an AI agent on the line and the call admin done for you. No hardware, no contract, live the same day."
      prose
    >
      <Prose>
              <h2>The short version</h2>
              <p>
                Greencaller replaces your business phone system. You get local numbers in 50+
                countries, apps on every device, shared lines your whole team can answer, unlimited
                UK texting, call recording and reporting. That is the table stakes, and it is on
                every plan.
              </p>
              <h2>What makes it different</h2>
              <p>
                Two things. First, an AI receptionist that genuinely answers &mdash; it qualifies the
                caller, reads your live calendar, books the job and hands over to a person when it
                should. Second, the admin: every call is summarised, tagged and written into your
                CRM without anybody typing.
              </p>
              <h2>Who it is for</h2>
              <ul>
                <li>Home services and trades who cannot answer with their hands full</li>
                <li>Sales teams who want the hour spent talking rather than logging</li>
                <li>Support teams who need shared lines and full caller history</li>
                <li>Any business where a missed call is a lost customer</li>
              </ul>
              <h2>What it costs</h2>
              <p>
                Business & Sole Trader is £28 per user a month and covers everything a working line
                needs. Advanced is £38 and adds native CRM sync, call routing, recording and the
                open API. Enterprise is priced to your team. The AI receptionist is an add-on
                taking one extra seat.
              </p>
            </Prose>
    </SimplePage>
  );
}
