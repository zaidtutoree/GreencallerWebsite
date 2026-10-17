import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import { IconArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Download the Greencaller Apps",
  description: "Greencaller runs on iPhone, Android, Mac, Windows and the web. One account follows you across every device.",
  alternates: { canonical: "/download" },
};

const cards = [
  {
    "title": "iOS",
    "body": "iPhone and iPad. Calls over 4G, 5G and Wi-Fi, with push so the app does not have to be open.",
    "action": "App Store"
  },
  {
    "title": "Android",
    "body": "Phones and tablets running Android 10 and above, with native dialler integration.",
    "action": "Google Play"
  },
  {
    "title": "macOS",
    "body": "Universal build for Apple Silicon and Intel, with proper audio device handling.",
    "action": "Download .dmg"
  },
  {
    "title": "Windows",
    "body": "Windows 10 and 11, with headset controls and global dial shortcuts.",
    "action": "Download .exe"
  },
  {
    "title": "Web",
    "body": "Nothing to install. Chrome, Edge, Brave, Arc and Safari.",
    "action": "Open the web app"
  },
  {
    "title": "Browser extension",
    "body": "Click to call on any page, and caller context wherever you are working.",
    "action": "Add to Chrome"
  }
];

export default function DownloadPage() {
  return (
    <SimplePage
      trail={[
        { label: "Home", href: "/" },
        { label: "Download", href: "/download" },
      ]}
      title="One account, every device"
      lede="Take calls on your laptop, your phone, or an ordinary mobile number if you would rather skip the app entirely."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="flex flex-col rounded-2xl border border-line bg-white p-6">
            <h2 className="h-card">{c.title}</h2>
            <p className="mt-2 flex-1 text-[14px] font-light leading-relaxed text-muted">{c.body}</p>
            <span className="link-arrow mt-5 !text-[13.5px] !text-brand-700">
              {c.action}
              <IconArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        ))}
      </div>
    </SimplePage>
  );
}
