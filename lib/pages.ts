export type Detail = {
  slug: string;
  name: string;
  /** <title> — kept under ~60 chars where possible */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lede: string;
  icon: string;
  points: { title: string; body: string }[];
  faq: { q: string; a: string }[];
};

/* ------------------------------------------------------------------ */
/* Features                                                            */
/* ------------------------------------------------------------------ */

export const features: Detail[] = [
  {
    slug: "ai-receptionist",
    name: "AI Receptionist",
    metaTitle: "AI Receptionist for Business Phone Calls",
    metaDescription:
      "Greencaller's AI receptionist answers your business calls 24/7, qualifies the caller, books the job into your calendar and writes it all into your CRM. No hardware, live in minutes.",
    eyebrow: "Answer every call",
    h1: "A receptionist on your line, 24 hours a day",
    lede: "Miss a call and someone else books the job. Your AI receptionist picks up on the first ring, out of hours and when the team is busy, and hands the call to a person the moment it needs one.",
    icon: "sparkle",
    points: [
      {
        title: "It answers in your voice, not a robot script",
        body: "You describe your services, your prices and your area in plain words. The agent answers like someone who actually works there, and you can change what it says at any time without a developer.",
      },
      {
        title: "It books straight into your real calendar",
        body: "The agent reads your live availability, offers only the slots that are genuinely free, and puts the job in the diary before the caller hangs up. No double bookings, no callbacks to confirm.",
      },
      {
        title: "It transfers when a person is needed",
        body: "Complex, sensitive or high-value calls go to whoever can actually act on them, with the caller history already open on their screen. The agent knows the difference.",
      },
      {
        title: "It remembers who is calling",
        body: "A number that rang last week does not start from scratch. The agent picks up with the previous summary in front of it and carries on where the conversation stopped.",
      },
      {
        title: "Every call ends up in your CRM",
        body: "A written summary, an outcome tag and the contact record land in HubSpot, Salesforce, Pipedrive or Attio on their own. Nobody types a call into a CRM again.",
      },
    ],
    faq: [
      {
        q: "How much does the AI receptionist cost?",
        a: "It is an add-on that takes one extra seat on your plan. Call credits are pooled across your company, so you are not charged per conversation.",
      },
      {
        q: "Can it place outbound calls?",
        a: "Today the agent answers calls, it does not place them. Outbound calling stays with your team.",
      },
      {
        q: "How long does it take to set up?",
        a: "Most businesses have their agent answering the same day. You write your hours, services and handover rules in plain words, and you can ask an AI client like Claude to configure it for you through the Greencaller MCP.",
      },
    ],
  },
  {
    slug: "ivr",
    name: "IVR",
    metaTitle: "IVR Software and Phone Menu Builder",
    metaDescription:
      "Build a phone menu callers do not hate. Greencaller IVR routes by keypress or by what the caller says, with an AI agent behind every option.",
    eyebrow: "Answer every call",
    h1: "A phone menu that gets people where they are going",
    lede: "Most IVRs exist to protect the business from its callers. Yours should get someone to the right person in one step, and answer them properly if that person is busy.",
    icon: "hash",
    points: [
      {
        title: "Keypress or spoken intent",
        body: "Press 1 for sales, or just say what you need. The agent understands and routes accordingly.",
      },
      {
        title: "Built in plain words",
        body: "Describe the menu you want and Greencaller builds it. No flow-chart editor, no professional services fee.",
      },
      {
        title: "Skip the menu for known callers",
        body: "Your existing customers go straight to their account manager instead of listening to five options.",
      },
      {
        title: "Menus that book, not just transfer",
        body: "Any option can hand off to the AI receptionist, which qualifies the caller and books the job on the spot.",
      },
    ],
    faq: [
      {
        q: "Can I record my own greetings?",
        a: "Yes, upload your own audio or have Greencaller generate a natural-sounding greeting from text.",
      },
      {
        q: "How many levels can a menu have?",
        a: "As many as you need, though we strongly recommend one, because callers abandon at the second level.",
      },
      {
        q: "Can menus differ by time of day?",
        a: "Yes, each menu can have a daytime, out-of-hours and holiday version.",
      },
    ],
  },
  {
    slug: "voicemail",
    name: "Voicemail",
    metaTitle: "Voicemail with Transcription for Business",
    metaDescription:
      "Visual voicemail your whole team can see, transcribed so you can read it in seconds, with an automatic text back on the calls nobody picked up.",
    eyebrow: "Answer every call",
    h1: "Voicemail nobody has to dial in to hear",
    lede: "Voicemail that sits on the shared line next to the call it came from, transcribed so you can read it in three seconds, and never trapped on one person's handset.",
    icon: "message",
    points: [
      {
        title: "Read it instead of dialling in",
        body: "Every message is transcribed and sits in the shared inbox beside the call. Scan a whole morning of voicemail in the time it used to take to listen to one.",
      },
      {
        title: "The whole team can see it",
        body: "No 1571, no PIN, and no message stranded on the handset of whoever is off today. Anyone on the line can pick it up and act on it.",
      },
      {
        title: "A greeting for every situation",
        body: "Out of hours, bank holidays, and when the team is already on a call, each with its own greeting — recorded by you or generated from text.",
      },
      {
        title: "Missed calls get a text back",
        body: "If a caller hangs up without leaving a message, Greencaller can text them from the same number within seconds so the enquiry is not simply lost.",
      },
    ],
    faq: [
      {
        q: "Can voicemail go to email?",
        a: "Yes. Messages can be emailed as an audio file with the transcript in the body, configurable per user and per line.",
      },
      {
        q: "Can I skip voicemail altogether?",
        a: "Yes, and many customers do. Hand the call to the AI receptionist instead: it asks what the caller needs and books the job rather than taking a message you have to return.",
      },
      {
        q: "Is voicemail transcription included?",
        a: "Yes, on every plan, along with unlimited storage of messages within your retention window.",
      },
    ],
  },
  {
    slug: "mobile-app",
    name: "Mobile App",
    metaTitle: "Mobile App for Your Business Phone Number",
    metaDescription:
      "Make and take business calls from anywhere on iPhone and Android. Your work number, your call history and your team, in your pocket — without giving out your personal mobile.",
    eyebrow: "Your phone system",
    h1: "Your work number, wherever you happen to be",
    lede: "Take the office line with you. The Greencaller app rings on your phone over 4G, 5G or wi-fi, and calls you make go out from your business number — not the mobile number you would rather keep to yourself.",
    icon: "phone",
    points: [
      {
        title: "Answer anywhere, on any network",
        body: "In the van, on site, on a train or working from the kitchen table. If you have signal or wi-fi, the office line rings, and the caller has no idea where you are.",
      },
      {
        title: "Dial out as the business, not as you",
        body: "Outbound calls show your company number, so customers recognise it, call it back and reach the whole team instead of one person's mobile.",
      },
      {
        title: "Your personal number stays personal",
        body: "One handset, two identities. When you finish for the day you go off duty in the app, and the line rings whoever is on next rather than you.",
      },
      {
        title: "The same history as everyone else",
        body: "Calls, texts, notes and summaries sync the second they happen, so the person picking up next can see what was said whether it happened on a desk phone or a mobile.",
      },
      {
        title: "Push that actually arrives",
        body: "The app wakes properly for an incoming call, so you get a ringing phone rather than a notification about a call you have already missed.",
      },
    ],
    faq: [
      {
        q: "Which devices does the app run on?",
        a: "iPhone and iPad on iOS 16 and above, and Android 10 and above. There are matching desktop apps for Mac and Windows, plus the web app, and one account follows you across all of them.",
      },
      {
        q: "Does it drain the battery?",
        a: "No. The app sits idle and is woken by a push notification when a call comes in, rather than holding a connection open all day.",
      },
      {
        q: "Can I use it without the app at all?",
        a: "Yes. If you would rather not install anything, your Greencaller line can simply ring your ordinary mobile number instead — you just lose the shared history and the ability to dial out as the business.",
      },
      {
        q: "What happens on a bad connection?",
        a: "The app will tell you before you answer if your connection is too weak, and can hand the call to your mobile network instead so it still gets picked up.",
      },
    ],
  },
  {
    slug: "pbx",
    name: "PBX",
    metaTitle: "Cloud PBX for Business Phone Systems",
    metaDescription:
      "A cloud PBX with extensions, transfers, hold, ring groups and business hours. Nothing to install on site, and no engineer visit to add a user.",
    eyebrow: "Your phone system",
    h1: "A full PBX, without the box in the cupboard",
    lede: "Everything a traditional PBX did — extensions, transfers, hold, ring groups, business hours — running in the cloud, changed by you in seconds, with nothing on site left to fail.",
    icon: "grid",
    points: [
      {
        title: "Extensions for everyone",
        body: "Short internal numbers, free internal calls and a directory the whole company shares. Reach a colleague on three digits from a desk phone, a laptop or a mobile.",
      },
      {
        title: "Transfers that keep the context",
        body: "Warm or blind, to a person, a team or a queue. Whoever receives the call can already see who is calling and what has been said so far.",
      },
      {
        title: "Ring groups and hunt groups",
        body: "Decide who rings, in what order and for how long, and where the call goes when nobody picks up — including straight to your AI receptionist.",
      },
      {
        title: "Business hours, holidays and out of hours",
        body: "Different behaviour per line and per team, with a fallback that still captures the enquiry instead of ringing out.",
      },
      {
        title: "No hardware, no maintenance contract",
        body: "No on-premise box, no capital cost and no engineer visit to add a user. You change your own configuration, and it takes effect immediately.",
      },
    ],
    faq: [
      {
        q: "Does this replace an on-premise PBX?",
        a: "Yes, entirely. That matters now the UK PSTN and ISDN network is being switched off: businesses still running an on-site system need somewhere to go, and a cloud PBX is the usual destination.",
      },
      {
        q: "Can I keep my extension numbers?",
        a: "Yes. Extension numbering is yours to define, so you can mirror your existing dial plan exactly and nobody has to learn a new number.",
      },
      {
        q: "How many concurrent calls can we make?",
        a: "As many as your internet connection carries — roughly 100 kbps per call in each direction. There are no channel licences to buy, unlike ISDN.",
      },
    ],
  },
  {
    slug: "physical-phones",
    name: "Physical Phones",
    metaTitle: "Desk Phones and Headsets for VoIP",
    metaDescription:
      "Use Greencaller with SIP desk phones, cordless DECT handsets, conference units and headsets — provisioned automatically, or bring hardware you already own.",
    eyebrow: "Your phone system",
    h1: "Keep the handset on the desk if that is what works",
    lede: "Not everyone wants a softphone. Greencaller runs on standard SIP desk phones, cordless handsets and conference units, on the same lines as the apps.",
    icon: "phone",
    points: [
      {
        title: "Bring the phones you already have",
        body: "Any standards-compliant SIP handset works, including Yealink, Poly, Snom, Cisco, Grandstream and Fanvil. There is no need to replace hardware that is doing its job.",
      },
      {
        title: "Provisioned automatically",
        body: "Plug a phone in and it configures itself from your account. Nobody has to read a MAC address off the underside of a handset.",
      },
      {
        title: "Desk, cordless and conference",
        body: "Desk phones for reception, DECT handsets for a warehouse or shop floor, and conference units for the meeting room, all on the same system.",
      },
      {
        title: "The same lines as the apps",
        body: "A desk phone and the mobile app ring together on one number, and the call history is shared whichever one answered.",
      },
    ],
    faq: [
      {
        q: "Do I have to buy phones from you?",
        a: "No. Bring your own SIP handsets, or we will supply them pre-configured so they work the moment they are plugged in.",
      },
      {
        q: "Will my existing ISDN handsets work?",
        a: "Not directly — those belong to a network being switched off. An ATA adapter can keep some analogue equipment working, such as a door entry phone, a lift line or a card machine.",
      },
      {
        q: "What happens in a power cut?",
        a: "A desk phone needs power and internet, so set the line to fall back to a mobile. Keep an alternative route for emergency calls in any case.",
      },
    ],
  },
  {
    slug: "click-to-call",
    name: "Click to Call",
    metaTitle: "Click to Call from Your Browser and CRM",
    metaDescription:
      "Dial any number on any page in one click. Greencaller's click to call works in your CRM, your inbox and any website, and logs the call automatically.",
    eyebrow: "Work the list",
    h1: "Dial from wherever the number happens to be",
    lede: "Copying a number out of a CRM into a phone is a small tax paid fifty times a day. Click the number, take the call, and let the log write itself.",
    icon: "phone-out",
    points: [
      {
        title: "Works on any page",
        body: "The browser extension makes every phone number on the web a one-click dial, not just the ones in your CRM.",
      },
      {
        title: "Context before you speak",
        body: "The caller card opens with the last summary, the open deal and the previous outcome already loaded.",
      },
      {
        title: "Notes on the same screen",
        body: "Type nothing if you do not want to — the summary is written for you either way.",
      },
      {
        title: "Keyboard-first",
        body: "A global shortcut dials the highlighted number without touching the mouse.",
      },
    ],
    faq: [
      {
        q: "Which browsers are supported?",
        a: "Chrome, Edge, Brave and Arc today, with Firefox and Safari in beta.",
      },
      {
        q: "Do I need the desktop app?",
        a: "No. Calls can run entirely in the browser, though the desktop app gives better audio device handling.",
      },
      {
        q: "Is it included?",
        a: "Yes, on Advanced and Enterprise.",
      },
    ],
  },
  {
    slug: "ai-summaries",
    name: "AI Call Summaries",
    metaTitle: "AI Call Summaries & Automatic Call Notes",
    metaDescription:
      "Every Greencaller call is written up automatically: a clean summary, the decisions made, the next steps, and a follow-up email drafted for you. Synced to your CRM.",
    eyebrow: "Kill the admin",
    h1: "The call ends, the write-up is already done",
    lede: "Reps lose hours a week typing up calls they have just had. Greencaller writes the summary, tags the outcome, drafts the follow-up and files it against the right record before the next call starts.",
    icon: "pencil",
    points: [
      {
        title: "A summary that reads like a colleague wrote it",
        body: "Not a transcript dump. The decisions, the objections, the numbers, the next step, in a few lines you can actually scan between calls.",
      },
      {
        title: "Summary templates per team",
        body: "Sales wants budget, authority and timeline. Support wants the fault and what was promised. Define the shape of a summary once and every call follows it.",
      },
      {
        title: "Follow-up drafted, never auto-sent",
        body: "The email and the text are written and waiting. Nothing leaves your account until a human presses send.",
      },
      {
        title: "Searchable across the whole company",
        body: "Search what was said, not just who called. Find every call that mentioned a competitor, a price point or a deadline.",
      },
    ],
    faq: [
      {
        q: "What languages are supported?",
        a: "Summaries and transcription work across English, French, Spanish, German, Italian, Dutch and Portuguese, including calls that switch language part-way through.",
      },
      {
        q: "Where are recordings and summaries stored?",
        a: "In UK and EU data centres, with configurable retention. On Enterprise you can set per-team retention windows and export or purge on demand.",
      },
      {
        q: "Do callers need to be told?",
        a: "Yes, and Greencaller can play an automatic recording notice at the start of a call to keep you compliant with UK GDPR and Ofcom guidance.",
      },
    ],
  },
  {
    slug: "call-recording",
    name: "Call Recording & Transcription",
    metaTitle: "Call Recording and Transcription Software",
    metaDescription:
      "Record, transcribe and search every business call. Greencaller gives you compliant call recording with speaker labels, timestamps and shareable clips.",
    eyebrow: "Kill the admin",
    h1: "Record it, read it, find it again in seconds",
    lede: "Recording a call is only useful if you can get back to the thirty seconds that mattered. Greencaller transcribes every call with speaker labels and timestamps so you can jump straight to the moment.",
    icon: "record",
    points: [
      {
        title: "Speaker-labelled transcripts",
        body: "Who said what, timestamped, with the audio synced to the text. Click a line, hear the line.",
      },
      {
        title: "Clip and share the important bit",
        body: "Send a 40-second clip to your product team instead of a 25-minute recording nobody will open.",
      },
      {
        title: "Compliance built in",
        body: "Automatic recording notices, per-number and per-team recording rules, and retention windows you control.",
      },
      {
        title: "Coaching without the shadowing",
        body: "Managers review calls asynchronously, leave comments on the transcript, and build a library of what good sounds like.",
      },
    ],
    faq: [
      {
        q: "Can I turn recording off for certain numbers?",
        a: "Yes. Recording is configurable per number, per team and per call direction, and can be paused mid-call when a caller gives payment details.",
      },
      {
        q: "How long are recordings kept?",
        a: "Advanced keeps recordings for 12 months by default. Enterprise lets you set any retention window and purge on demand.",
      },
      {
        q: "Is this compliant with UK GDPR?",
        a: "Greencaller provides the tooling — notices, retention controls, access logs and export. Your lawful basis and notice wording remain your responsibility, and our team will walk you through the standard setup.",
      },
    ],
  },
  {
    slug: "call-notes",
    name: "Call Note Taking",
    metaTitle: "Automatic Call Note Taking",
    metaDescription:
      "Greencaller takes the notes while you talk, capturing names, dates, addresses and what was agreed, then files them against the right contact.",
    eyebrow: "After the call",
    h1: "Notes taken while you are still talking",
    lede: "Nobody listens properly while they are typing. Greencaller writes the notes as the conversation happens, so you can pay attention to the caller instead of the keyboard.",
    icon: "note",
    points: [
      {
        title: "Captured as they are said",
        body: "Names, numbers, dates, addresses, prices and what was agreed, taken down live and on your screen before you have hung up.",
      },
      {
        title: "Your own note template",
        body: "Decide once what a note should always capture for your business, and every call follows the same shape no matter who took it.",
      },
      {
        title: "Add your own line at any point",
        body: "Type your own note mid-call and it is merged with everything captured automatically, so your judgement sits alongside the facts.",
      },
      {
        title: "Filed against the right person",
        body: "The note lands on the contact and the company rather than in a personal notebook, so whoever picks up next can see what was said last time.",
      },
    ],
    faq: [
      {
        q: "How is this different from AI call summaries?",
        a: "The summary is the short account of the call written once it ends. Note taking captures the specifics as they are spoken — the address, the price quoted, the date agreed — so the detail is exact rather than paraphrased. Most teams use both.",
      },
      {
        q: "Can I turn it off for certain calls?",
        a: "Yes, per line, per team and per individual call, which matters for conversations covering payment or health details.",
      },
      {
        q: "Can I correct a note?",
        a: "Yes. Notes are editable before and after saving, every edit is attributed, and the full history stays available.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Solutions                                                           */
/* ------------------------------------------------------------------ */

type SolutionSeed = {
  slug: string;
  name: string;
  h1: string;
  lede: string;
  icon: string;
  pains: [string, string, string];
  metaDescription: string;
};

const solutionSeeds: SolutionSeed[] = [
  {
    slug: "sales",
    name: "Sales",
    h1: "More conversations, less CRM admin",
    lede: "Your reps were hired to talk to people, not to type up what they said. Greencaller runs the list, writes the notes and logs the deal.",
    icon: "target",
    pains: [
      "Reps lose 6+ hours a week to call logging and follow-up emails",
      "Half the pipeline never gets a second touch because nobody remembers",
      "Managers coach on vibes because nobody listens to recordings",
    ],
    metaDescription:
      "Greencaller for sales teams: power dialler, local presence, automatic call summaries and native CRM logging so reps spend the hour talking, not typing.",
  },
  {
    slug: "support",
    name: "Customer Support",
    h1: "Every caller reaches someone who knows them",
    lede: "Shared lines, full history and an agent that handles the overflow, so nobody explains their problem twice.",
    icon: "heart",
    pains: [
      "Queues at peak and silence out of hours",
      "The context lives in one agent's head, or nowhere",
      "No reliable view of what people are actually calling about",
    ],
    metaDescription:
      "Greencaller for customer support: shared lines, full caller history, automatic tagging and a 24/7 AI agent that handles overflow and out-of-hours calls.",
  },
  {
    slug: "operations",
    name: "Operations",
    h1: "One phone system across every site",
    lede: "Numbers per branch, routing per team, one bill and one view of what the phone is doing across the business.",
    icon: "grid",
    pains: [
      "Every site bought its own system from a different provider",
      "Nobody can say how many calls the group missed last month",
      "Adding or moving a person takes a support ticket and a week",
    ],
    metaDescription:
      "Greencaller for operations teams: one cloud phone system across every site, with per-branch numbers, central reporting and self-serve user management.",
  },
  {
    slug: "marketing",
    name: "Marketing",
    h1: "Know which campaign actually rang the phone",
    lede: "Numbers per campaign, outcomes per call, and the revenue attached to both — so phone leads stop being the channel nobody can measure.",
    icon: "chart",
    pains: [
      "Phone leads are invisible in the attribution model",
      "Sales says the leads are bad and nobody can check",
      "Out-of-hours enquiries from paid traffic go straight to voicemail",
    ],
    metaDescription:
      "Greencaller for marketing: campaign-level tracking numbers, call outcome data and CRM attribution so phone leads are finally measurable.",
  },
  {
    slug: "recruiting",
    name: "Recruiting",
    h1: "Screen more candidates in the same day",
    lede: "Dial the shortlist without pausing, capture the screen notes automatically and keep every candidate's history on one thread.",
    icon: "users",
    pains: [
      "Screening calls eat the day and the notes never get written",
      "Candidates go cold between the call and the write-up",
      "Two consultants ring the same candidate in the same week",
    ],
    metaDescription:
      "Greencaller for recruitment teams: power dialling, automatic screening notes, shared candidate history and ATS sync.",
  },
  {
    slug: "founders",
    name: "Founders",
    h1: "A real phone line without a phone system project",
    lede: "Get a proper business number, an agent that answers when you are heads-down, and none of the hardware or the contract.",
    icon: "rocket",
    pains: [
      "Your mobile number is on the website and it is unmanageable",
      "You are the only person who can answer, and you are in a meeting",
      "You cannot justify a phone system project at this stage",
    ],
    metaDescription:
      "Greencaller for founders and small teams: a proper business number, a 24/7 AI receptionist and no hardware, contract or setup fee.",
  },
  {
    slug: "home-services",
    name: "Home Services",
    h1: "Never miss a job because your hands were full",
    lede: "Greencaller answers, texts back and books the job when you are up a ladder or under a sink.",
    icon: "wrench",
    pains: [
      "You cannot answer with your hands in a boiler, and the caller rings the next trade",
      "Quotes and bookings live in texts on a personal phone",
      "Evening and weekend enquiries go unanswered entirely",
    ],
    metaDescription:
      "Greencaller for plumbers, electricians, heating engineers and home service firms: an AI receptionist that answers on site, texts back and books the job.",
  },
  {
    slug: "estate-agents",
    name: "Estate Agents",
    h1: "Every viewing enquiry answered in one ring",
    lede: "Portal enquiries do not wait. Greencaller picks up, qualifies the buyer and books the viewing into the negotiator's diary.",
    icon: "building",
    pains: [
      "Portal leads go cold within the hour",
      "Saturday enquiries hit an answerphone",
      "Nobody can prove which branch missed the call",
    ],
    metaDescription:
      "Greencaller for estate and letting agents: instant answering on portal enquiries, viewing bookings straight into the diary and per-branch call reporting.",
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    h1: "Client calls captured, recorded and filed",
    lede: "A phone system that keeps an accurate, retrievable record of every client conversation without a fee earner writing an attendance note.",
    icon: "scale",
    pains: [
      "Attendance notes get written days later, or not at all",
      "New enquiries reach reception and are lost by the afternoon",
      "Recording and retention obligations are handled ad hoc",
    ],
    metaDescription:
      "Greencaller for law firms: compliant call recording, automatic attendance notes, new enquiry capture and configurable retention.",
  },
  {
    slug: "insurance",
    name: "Insurance",
    h1: "Quote, renew and claim on one recorded line",
    lede: "Complete call records, automatic summaries and outcome tagging that stands up to a compliance review.",
    icon: "shield",
    pains: [
      "Renewal calls are missed and the policy lapses",
      "Compliance needs a record nobody has time to write",
      "Claims context is scattered across inboxes",
    ],
    metaDescription:
      "Greencaller for insurance brokers and agencies: recorded lines, automatic call summaries, renewal call campaigns and compliance-ready retention.",
  },
  {
    slug: "medical",
    name: "Medical Practices",
    h1: "The 8am rush, answered",
    lede: "An agent that handles the queue, books the routine appointments and escalates anything clinical to a person immediately.",
    icon: "heart",
    pains: [
      "The morning queue overwhelms reception every single day",
      "Patients abandon the call and turn up in person",
      "Cancellations arrive by voicemail and slots go unfilled",
    ],
    metaDescription:
      "Greencaller for GP surgeries, dental and private practices: handle the 8am rush, book routine appointments automatically and escalate clinical calls instantly.",
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    h1: "Take the booking while the kitchen is flat out",
    lede: "Your agent answers on the busiest service, takes the table booking and only interrupts the floor when it genuinely has to.",
    icon: "grid",
    pains: [
      "Nobody can pick up during service, so bookings go elsewhere",
      "The same three questions asked forty times a night",
      "No-shows because nobody confirms",
    ],
    metaDescription:
      "Greencaller for restaurants: an AI receptionist that takes table bookings during service, answers the usual questions and confirms by text.",
  },
  {
    slug: "financial-advisers",
    name: "Financial Advisers",
    h1: "Client calls, recorded and summarised properly",
    lede: "A recorded, retrievable and searchable record of every client conversation, with the suitability notes written for you.",
    icon: "chart",
    pains: [
      "Recording obligations met with a system nobody can search",
      "Meeting notes written from memory hours later",
      "Client history split between a CRM and an inbox",
    ],
    metaDescription:
      "Greencaller for financial advisers and wealth firms: recorded client lines, searchable transcripts, automatic notes and configurable retention.",
  },
  {
    slug: "software",
    name: "Software Companies",
    h1: "Put the phone back in your go-to-market",
    lede: "Outbound that runs itself, inbound that never rings out, and every conversation in the CRM your revenue team already lives in.",
    icon: "rocket",
    pains: [
      "SDRs spend the hour dialling rather than talking",
      "Inbound demo calls hit voicemail outside one timezone",
      "Call data never reaches the warehouse",
    ],
    metaDescription:
      "Greencaller for SaaS and software companies: power dialling for SDRs, 24/7 inbound answering and native CRM plus API access to every call event.",
  },
];

export const solutions: Detail[] = solutionSeeds.map((s) => ({
  slug: s.slug,
  name: s.name,
  metaTitle: `${s.name} Phone System & AI Receptionist`,
  metaDescription: s.metaDescription,
  eyebrow: s.name,
  h1: s.h1,
  lede: s.lede,
  icon: s.icon,
  points: [
    {
      title: s.pains[0],
      body: "Greencaller answers on the first ring, day or night, so the enquiry is captured whether or not anyone on the team is free to pick up.",
    },
    {
      title: s.pains[1],
      body: "Every call is summarised, tagged and filed against the right record automatically, so the history is complete without anyone maintaining it.",
    },
    {
      title: s.pains[2],
      body: "Reporting shows exactly what happened on every line, by hour and by person, so you can fix the gap rather than guess at it.",
    },
    {
      title: "Live in minutes, not a migration project",
      body: "Keep your existing numbers, ported free, and run both systems in parallel until you are ready. No hardware, no engineer visit, no contract.",
    },
  ],
  faq: [
    {
      q: `How quickly can a ${s.name.toLowerCase()} team get started?`,
      a: "Most teams are taking calls the same day. Pick a number or port the one you have, invite the team, and describe your call flow in plain words.",
    },
    {
      q: "Can we keep our existing numbers?",
      a: "Yes. Porting is free in both directions, takes a few business days, and there is no downtime — you keep taking calls right up to the switch.",
    },
    {
      q: "What does it cost?",
      a: "Business & Sole Trader is £28 per user a month and Advanced is £38. Enterprise is priced to your team. The AI receptionist is an add-on that takes one extra seat.",
    },
  ],
}));

/* ------------------------------------------------------------------ */
/* Integrations                                                        */
/* ------------------------------------------------------------------ */

/**
 * There is one /integrations page rather than a page per tool, so an entry only
 * needs a name, a grouping and a line about what the connection actually does.
 */
export type IntegrationEntry = { name: string; kind: string; blurb: string };

export const integrationDirectory: IntegrationEntry[] = [
  { name: "HubSpot", kind: "CRM", blurb: "Calls, summaries and notes land on the contact, company and deal." },
  { name: "Salesforce", kind: "CRM", blurb: "Every call logged as a native Task against the Lead, Contact or Opportunity." },
  { name: "Pipedrive", kind: "CRM", blurb: "Activities created automatically with the summary in the note." },
  { name: "Attio", kind: "CRM", blurb: "Calls written to records and lists with structured attributes." },
  { name: "Zoho CRM", kind: "CRM", blurb: "Two-way contact sync and native call logging, including recording links." },
  { name: "GoHighLevel", kind: "CRM", blurb: "Calls and notes synced to the contact and the opportunity pipeline." },
  { name: "Folk", kind: "CRM", blurb: "Contacts kept in step, with call notes on the person who rang." },
  { name: "Google Calendar", kind: "Calendar & productivity", blurb: "The AI receptionist reads real availability and books straight into the diary." },
  { name: "Microsoft 365", kind: "Calendar & productivity", blurb: "Calendar booking and contact lookup across your Microsoft tenant." },
  { name: "Google Sheets", kind: "Calendar & productivity", blurb: "Push every call, note and outcome into a sheet in real time." },
  { name: "Notion", kind: "Calendar & productivity", blurb: "Call summaries and notes written into a Notion database." },
  { name: "Slack", kind: "Calendar & productivity", blurb: "Missed calls and booked jobs posted into the channel that cares." },
  { name: "Microsoft Teams", kind: "Calendar & productivity", blurb: "Call notifications and summaries in Teams, with presence sync." },
  { name: "Google Contacts", kind: "Calendar & productivity", blurb: "Your address book, matched to every number that rings." },
  { name: "Zapier", kind: "Automation", blurb: "8,000+ apps reachable from any call event." },
  { name: "Make", kind: "Automation", blurb: "Multi-step scenarios built off call events, summaries and notes." },
  { name: "Intercom", kind: "Support & commerce", blurb: "Caller history alongside the conversation your support team already has." },
  { name: "Shopify", kind: "Support & commerce", blurb: "Recognise a caller by their order history the moment they ring." },
  { name: "QuickBooks", kind: "Support & commerce", blurb: "Match calls to the customer record your invoices already use." },
  { name: "Xero", kind: "Support & commerce", blurb: "Customer lookup against your accounts, so billing calls start informed." },
];

export const integrationKinds = [
  "CRM",
  "Calendar & productivity",
  "Automation",
  "Support & commerce",
] as const;

/* ------------------------------------------------------------------ */

export const bySlug = {
  features: Object.fromEntries(features.map((f) => [f.slug, f])),
  solutions: Object.fromEntries(solutions.map((f) => [f.slug, f])),
};
