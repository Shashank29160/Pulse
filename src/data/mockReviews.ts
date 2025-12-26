export interface Review {
  title: string | null;
  review: string;
  date: string;
  rating: number | null;
  reviewer_name: string | null;
  source: 'g2' | 'capterra' | 'trustradius';
  company: string;
  url: string;
}

export const mockReviews: Review[] = [
  // G2 Reviews
  {
    title: "Exceptional billing automation that scaled with us",
    review: "Chargebee has transformed how we handle subscription billing. The automated dunning management alone has recovered thousands in failed payments. Integration was smooth, and their support team is incredibly responsive.",
    date: "2023-06-15",
    rating: 5,
    reviewer_name: "Sarah Chen",
    source: "g2",
    company: "Chargebee",
    url: "https://www.g2.com/products/chargebee/reviews/12345"
  },
  {
    title: "Good but has a learning curve",
    review: "The platform is powerful but took our team about 2 weeks to fully understand. Once you get past the initial setup, it's a game-changer for subscription management. Revenue recognition features are particularly helpful for our finance team.",
    date: "2023-05-22",
    rating: 4,
    reviewer_name: "Michael Torres",
    source: "g2",
    company: "Chargebee",
    url: "https://www.g2.com/products/chargebee/reviews/12346"
  },
  {
    title: "Perfect for SaaS companies",
    review: "We switched from Stripe Billing and haven't looked back. The flexibility in pricing models, especially for usage-based billing, is unmatched. Highly recommend for any SaaS looking to scale.",
    date: "2023-04-10",
    rating: 5,
    reviewer_name: "Jessica Kim",
    source: "g2",
    company: "Chargebee",
    url: "https://www.g2.com/products/chargebee/reviews/12347"
  },
  {
    title: "Solid platform with room for improvement",
    review: "Overall satisfied with Chargebee. The analytics dashboard could use more customization options, but core billing features work flawlessly. API documentation is excellent for developers.",
    date: "2023-03-28",
    rating: 4,
    reviewer_name: "David Park",
    source: "g2",
    company: "Chargebee",
    url: "https://www.g2.com/products/chargebee/reviews/12348"
  },
  {
    title: "Best decision for our subscription business",
    review: "After evaluating Recurly and Zuora, we chose Chargebee for its balance of features and usability. The checkout pages are beautiful and conversion rates improved 15% after migration.",
    date: "2023-02-14",
    rating: 5,
    reviewer_name: "Emma Wilson",
    source: "g2",
    company: "Chargebee",
    url: "https://www.g2.com/products/chargebee/reviews/12349"
  },
  // Capterra Reviews
  {
    title: "Streamlined our entire billing workflow",
    review: "Chargebee consolidated 3 different tools we were using before. The trial management and plan versioning features are exactly what we needed. Customer portal saves our support team hours every week.",
    date: "2023-06-01",
    rating: 5,
    reviewer_name: "Alex Johnson",
    source: "capterra",
    company: "Chargebee",
    url: "https://www.capterra.com/p/chargebee/reviews/98765"
  },
  {
    title: "Great for growing startups",
    review: "Started using Chargebee when we had 100 subscribers, now we're at 10,000 and it's scaled beautifully. Pricing is fair and features keep improving. Minor UI quirks but nothing deal-breaking.",
    date: "2023-05-15",
    rating: 4,
    reviewer_name: "Rachel Green",
    source: "capterra",
    company: "Chargebee",
    url: "https://www.capterra.com/p/chargebee/reviews/98766"
  },
  {
    title: "Comprehensive subscription management",
    review: "From metered billing to gift subscriptions, Chargebee handles it all. The webhook system is reliable and makes integration with our CRM seamless. Would definitely recommend to other B2B SaaS companies.",
    date: "2023-04-20",
    rating: 5,
    reviewer_name: "Chris Martinez",
    source: "capterra",
    company: "Chargebee",
    url: "https://www.capterra.com/p/chargebee/reviews/98767"
  },
  {
    title: "Reliable but pricey at scale",
    review: "Love the product but costs add up quickly as you grow. The per-transaction fees can bite into margins. That said, the time saved on billing operations probably makes up for it.",
    date: "2023-03-05",
    rating: 4,
    reviewer_name: "Lisa Wang",
    source: "capterra",
    company: "Chargebee",
    url: "https://www.capterra.com/p/chargebee/reviews/98768"
  },
  // TrustRadius Reviews
  {
    title: "Enterprise-grade billing solution",
    review: "After 18 months with Chargebee, our billing operations run like clockwork. Multi-currency support was crucial for our international expansion. Their enterprise team provided excellent migration support.",
    date: "2023-06-20",
    rating: 5,
    reviewer_name: "Robert Thompson",
    source: "trustradius",
    company: "Chargebee",
    url: "https://www.trustradius.com/reviews/chargebee-2023-06-20"
  },
  {
    title: "Handles complex pricing models with ease",
    review: "We have tiered + usage-based + add-on pricing and Chargebee manages it without breaking a sweat. The proration calculations are accurate, and our customers appreciate the transparent invoices.",
    date: "2023-05-08",
    rating: 5,
    reviewer_name: "Amanda Foster",
    source: "trustradius",
    company: "Chargebee",
    url: "https://www.trustradius.com/reviews/chargebee-2023-05-08"
  },
  {
    title: "Good value for mid-market companies",
    review: "Chargebee sits in a sweet spot - more sophisticated than Stripe Billing but less complex than Zuora. Perfect for companies with $1M-50M ARR. Documentation is thorough and API is well-designed.",
    date: "2023-04-02",
    rating: 4,
    reviewer_name: "James Lee",
    source: "trustradius",
    company: "Chargebee",
    url: "https://www.trustradius.com/reviews/chargebee-2023-04-02"
  },
  {
    title: "Saved us from building custom billing",
    review: "We almost built our own billing system - so glad we didn't. Chargebee covers 95% of our needs out of the box. The remaining 5% we handle with their extensibility options.",
    date: "2023-02-28",
    rating: 5,
    reviewer_name: "Olivia Brown",
    source: "trustradius",
    company: "Chargebee",
    url: "https://www.trustradius.com/reviews/chargebee-2023-02-28"
  },
  {
    title: "Mature product with continuous improvements",
    review: "Been a customer for 3 years and they keep shipping useful features. RevRec module was a recent addition that saved us from buying separate software. Support has always been top-notch.",
    date: "2023-01-15",
    rating: 5,
    reviewer_name: "Nathan Clark",
    source: "trustradius",
    company: "Chargebee",
    url: "https://www.trustradius.com/reviews/chargebee-2023-01-15"
  },
  // ================= STRIPE =================
{
  title: "Best-in-class payments platform",
  review: "Stripe’s APIs are extremely reliable and well-documented. We launched international payments in weeks instead of months.",
  date: "2023-06-10",
  rating: 5,
  reviewer_name: "Daniel Moore",
  source: "g2",
  company: "Stripe",
  url: "https://www.g2.com/products/stripe/reviews/30001"
},
{
  title: "Powerful but developer-centric",
  review: "Stripe is fantastic for technical teams. Some advanced configurations are hard for non-developers.",
  date: "2023-05-03",
  rating: 4,
  reviewer_name: "Ananya Gupta",
  source: "capterra",
  company: "Stripe",
  url: "https://www.capterra.com/p/stripe/reviews/30002"
},

// ================= HUBSPOT =================
{
  title: "All-in-one CRM that actually works",
  review: "HubSpot replaced three tools for us. Marketing automation and CRM integration are seamless.",
  date: "2023-06-18",
  rating: 5,
  reviewer_name: "Mark Robinson",
  source: "g2",
  company: "HubSpot",
  url: "https://www.g2.com/products/hubspot/reviews/31001"
},
{
  title: "Great features but pricing scales fast",
  review: "Amazing product for growing teams, but costs increase quickly as contacts grow.",
  date: "2023-04-12",
  rating: 4,
  reviewer_name: "Neha Kapoor",
  source: "trustradius",
  company: "HubSpot",
  url: "https://www.trustradius.com/reviews/hubspot-2023-04"
},

// ================= SALESFORCE =================
{
  title: "Extremely powerful enterprise CRM",
  review: "Salesforce handles complex sales workflows better than any other CRM we evaluated.",
  date: "2023-06-05",
  rating: 5,
  reviewer_name: "Jonathan Miles",
  source: "trustradius",
  company: "Salesforce",
  url: "https://www.trustradius.com/reviews/salesforce-2023-06"
},
{
  title: "Steep learning curve",
  review: "Very flexible platform, but requires training and admin expertise to unlock full value.",
  date: "2023-03-21",
  rating: 4,
  reviewer_name: "Rohit Verma",
  source: "g2",
  company: "Salesforce",
  url: "https://www.g2.com/products/salesforce/reviews/32001"
},

// ================= ZOHO =================
{
  title: "Excellent value for money",
  review: "Zoho offers a surprisingly complete CRM suite at a fraction of the cost of competitors.",
  date: "2023-05-29",
  rating: 5,
  reviewer_name: "Suresh Iyer",
  source: "capterra",
  company: "Zoho",
  url: "https://www.capterra.com/p/zoho-crm/reviews/33001"
},
{
  title: "UI could be more modern",
  review: "Feature-rich platform, but some parts of the UI feel outdated compared to newer tools.",
  date: "2023-04-07",
  rating: 4,
  reviewer_name: "Emily Stone",
  source: "g2",
  company: "Zoho",
  url: "https://www.g2.com/products/zoho-crm/reviews/33002"
},

// ================= FRESHWORKS =================
{
  title: "Great support platform for SMBs",
  review: "Freshdesk was easy to deploy and improved our support response time significantly.",
  date: "2023-06-02",
  rating: 5,
  reviewer_name: "Carlos Mendes",
  source: "g2",
  company: "Freshworks",
  url: "https://www.g2.com/products/freshdesk/reviews/34001"
},
{
  title: "Simple, clean, and effective",
  review: "Very intuitive UI. Lacks some advanced enterprise features but perfect for mid-size teams.",
  date: "2023-03-18",
  rating: 4,
  reviewer_name: "Aditi Rao",
  source: "capterra",
  company: "Freshworks",
  url: "https://www.capterra.com/p/freshdesk/reviews/34002"
},

// ================= ATLASSIAN =================
{
  title: "Jira is indispensable for agile teams",
  review: "We manage all sprints, bugs, and releases using Jira. Highly customizable workflows.",
  date: "2023-06-14",
  rating: 5,
  reviewer_name: "Kevin Brown",
  source: "g2",
  company: "Atlassian",
  url: "https://www.g2.com/products/jira/reviews/35001"
},
{
  title: "Powerful but overwhelming at first",
  review: "Jira has a learning curve, but once configured, it becomes incredibly powerful.",
  date: "2023-04-01",
  rating: 4,
  reviewer_name: "Pooja Malhotra",
  source: "trustradius",
  company: "Atlassian",
  url: "https://www.trustradius.com/reviews/jira-2023-04"
},

// Additional mock reviews for more companies
// ================= ZENDESK =================
{
  title: "Excellent for customer support teams",
  review: "Zendesk helped us centralize tickets and improve response times. The reporting and automation rules are particularly useful for scaling support.",
  date: "2023-06-08",
  rating: 5,
  reviewer_name: "Olivia Grant",
  source: "g2",
  company: "Zendesk",
  url: "https://www.g2.com/products/zendesk/reviews/40001"
},
{
  title: "Good for SMBs",
  review: "Zendesk offers a solid feature set for small teams; some advanced features require higher tiers but the core product delivers.",
  date: "2023-03-22",
  rating: 4,
  reviewer_name: "Liam Carter",
  source: "capterra",
  company: "Zendesk",
  url: "https://www.capterra.com/p/zendesk/reviews/40002"
},

// ================= INTERCOM =================
{
  title: "Great for product-led growth",
  review: "Intercom's messenger and outbound messaging helped increase conversions. Setup was straightforward and the chat experience is smooth.",
  date: "2023-05-11",
  rating: 5,
  reviewer_name: "Sana Iqbal",
  source: "trustradius",
  company: "Intercom",
  url: "https://www.trustradius.com/reviews/intercom-2023-05"
},

// ================= MAILCHIMP =================
{
  title: "Easy to use email marketing",
  review: "Mailchimp made it simple to get campaigns live quickly. Templates and analytics are beginner-friendly.",
  date: "2023-04-25",
  rating: 4,
  reviewer_name: "Carlos Rivera",
  source: "g2",
  company: "Mailchimp",
  url: "https://www.g2.com/products/mailchimp/reviews/41001"
},

// ================= PIPEDRIVE =================
{
  title: "Simple CRM that just works",
  review: "Pipedrive helped our sales team focus on deals instead of admin. The pipeline view is excellent and integrations are handy.",
  date: "2023-06-03",
  rating: 5,
  reviewer_name: "Megan Fox",
  source: "g2",
  company: "Pipedrive",
  url: "https://www.g2.com/products/pipedrive/reviews/42001"
},

// ================= MONDAY.COM =================
{
  title: "Flexible work OS for teams",
  review: "Monday.com allowed us to build lightweight processes without heavy engineering. Dashboards are helpful for tracking progress.",
  date: "2023-05-20",
  rating: 4,
  reviewer_name: "Ethan Cole",
  source: "capterra",
  company: "Monday.com",
  url: "https://www.capterra.com/p/monday-com/reviews/43001"
},

// ================= QUICKBOOKS =================
{
  title: "Great bookkeeping for small businesses",
  review: "QuickBooks Online streamlined invoicing and reconciliation for our finance team. Mobile app could be improved but core features are solid.",
  date: "2023-03-30",
  rating: 4,
  reviewer_name: "Priya Nair",
  source: "trustradius",
  company: "QuickBooks",
  url: "https://www.trustradius.com/reviews/quickbooks-2023-03"
},
// Additional reviews to ensure each company has at least 5-6 entries
,
// ======== STRIPE (additional) ========
{
  title: "Global payments made easy",
  review: "Stripe enabled us to accept payments in multiple currencies quickly. Payouts are reliable and reporting is simple.",
  date: "2023-02-20",
  rating: 5,
  reviewer_name: "Yusuf Khan",
  source: "trustradius",
  company: "Stripe",
  url: "https://www.trustradius.com/reviews/stripe-2023-02"
},
{
  title: "Excellent SDKs and docs",
  review: "Developer experience is top notch; SDKs worked out of the box and time-to-implement was minimal.",
  date: "2023-01-12",
  rating: 5,
  reviewer_name: "Hannah Lee",
  source: "g2",
  company: "Stripe",
  url: "https://www.g2.com/products/stripe/reviews/30003"
},
{
  title: "Great for marketplaces",
  review: "Connect and marketplace features helped us build a two-sided marketplace quickly. Some advanced fees can be tricky to configure though.",
  date: "2023-03-05",
  rating: 4,
  reviewer_name: "Omar Aziz",
  source: "capterra",
  company: "Stripe",
  url: "https://www.capterra.com/p/stripe/reviews/30004"
},
{
  title: "Reliable transaction processing",
  review: "Uptime has been outstanding; chargebacks are handled well and support is responsive for urgent incidents.",
  date: "2023-04-18",
  rating: 5,
  reviewer_name: "Grace Park",
  source: "trustradius",
  company: "Stripe",
  url: "https://www.trustradius.com/reviews/stripe-2023-04"
},

// ======== HUBSPOT (additional) ========
{
  title: "Marketing automation that converts",
  review: "HubSpot workflows helped us reduce manual follow-ups and improved lead-to-customer conversion rates.",
  date: "2023-02-28",
  rating: 5,
  reviewer_name: "Daniela Rossi",
  source: "capterra",
  company: "HubSpot",
  url: "https://www.capterra.com/p/hubspot/reviews/31002"
},
{
  title: "Solid CRM with excellent integrations",
  review: "Seamless native integrations with our stack saved integration time; dashboards are good but could be more flexible.",
  date: "2023-03-30",
  rating: 4,
  reviewer_name: "Oliver Smith",
  source: "g2",
  company: "HubSpot",
  url: "https://www.g2.com/products/hubspot/reviews/31003"
},
{
  title: "Helpful onboarding and resources",
  review: "Customer success helped us get the platform configured for our growth stage. Knowledge base is extensive.",
  date: "2023-01-15",
  rating: 5,
  reviewer_name: "Priya Sharma",
  source: "trustradius",
  company: "HubSpot",
  url: "https://www.trustradius.com/reviews/hubspot-2023-01"
},
{
  title: "Good for small teams",
  review: "HubSpot starter features are excellent for small teams; competitors may offer cheaper contact pricing at scale.",
  date: "2023-05-06",
  rating: 4,
  reviewer_name: "Carlos Mendez",
  source: "capterra",
  company: "HubSpot",
  url: "https://www.capterra.com/p/hubspot/reviews/31004"
},

// ======== SALESFORCE (additional) ========
{
  title: "Unmatched customization for enterprise",
  review: "We built complex quoting and multi-division processes with Salesforce. The platform supports almost anything with the right expertise.",
  date: "2023-02-02",
  rating: 5,
  reviewer_name: "Ibrahim Khan",
  source: "g2",
  company: "Salesforce",
  url: "https://www.g2.com/products/salesforce/reviews/32002"
},
{
  title: "Powerful but requires admins",
  review: "Value is high but you need dedicated admin resources; upgrades can be heavy if not planned well.",
  date: "2023-01-20",
  rating: 4,
  reviewer_name: "Meera Patel",
  source: "capterra",
  company: "Salesforce",
  url: "https://www.capterra.com/p/salesforce/reviews/32003"
},
{
  title: "Great ecosystem and partners",
  review: "AppExchange has solutions for almost any need; partner ecosystem helped accelerate some custom work.",
  date: "2023-03-11",
  rating: 5,
  reviewer_name: "Luca Moretti",
  source: "trustradius",
  company: "Salesforce",
  url: "https://www.trustradius.com/reviews/salesforce-2023-03"
},
{
  title: "Scales for complex organizations",
  review: "Multi-region and complex security models were straightforward to implement with Salesforce when compared to smaller CRMs.",
  date: "2023-04-09",
  rating: 4,
  reviewer_name: "Anika Bose",
  source: "g2",
  company: "Salesforce",
  url: "https://www.g2.com/products/salesforce/reviews/32004"
},

// ======== ZOHO (additional) ========
{
  title: "Great for tight budgets",
  review: "Zoho gives a ton of value at a low price point. The breadth of the suite is impressive for the cost.",
  date: "2023-02-18",
  rating: 5,
  reviewer_name: "Ravi Singh",
  source: "g2",
  company: "Zoho",
  url: "https://www.g2.com/products/zoho-crm/reviews/33003"
},
{
  title: "Feature-rich but inconsistent UX",
  review: "Lots of features but the user experience varies between modules; some polish would help.",
  date: "2023-03-09",
  rating: 4,
  reviewer_name: "Sofia Hernandez",
  source: "trustradius",
  company: "Zoho",
  url: "https://www.trustradius.com/reviews/zoho-2023-03"
},
{
  title: "Strong automation at low cost",
  review: "Workflow automation and custom functions saved hours of manual work for our small sales team.",
  date: "2023-04-14",
  rating: 5,
  reviewer_name: "Ben Turner",
  source: "capterra",
  company: "Zoho",
  url: "https://www.capterra.com/p/zoho-crm/reviews/33004"
},
{
  title: "Good suite for small businesses",
  review: "Zoho One bundled apps made it easy to adopt CRM, finance, and HR modules without breaking the bank.",
  date: "2023-05-02",
  rating: 4,
  reviewer_name: "Maya Gupta",
  source: "g2",
  company: "Zoho",
  url: "https://www.g2.com/products/zoho-crm/reviews/33004"
},

// ======== FRESHWORKS (additional) ========
{
  title: "Quick setup and immediate ROI",
  review: "Freshdesk deployment was straightforward and initial SLA improvements were visible within weeks.",
  date: "2023-01-30",
  rating: 5,
  reviewer_name: "Noah Bennett",
  source: "g2",
  company: "Freshworks",
  url: "https://www.g2.com/products/freshdesk/reviews/34002"
},
{
  title: "Good ticketing and collaboration",
  review: "Agents collaborate easily and the knowledge base reduced repeated questions significantly.",
  date: "2023-03-08",
  rating: 4,
  reviewer_name: "Zara Ali",
  source: "trustradius",
  company: "Freshworks",
  url: "https://www.trustradius.com/reviews/freshdesk-2023-03"
},
{
  title: "Affordable and reliable",
  review: "For SMBs the feature set is balanced and pricing is predictable. Some advanced automation lives behind higher tiers.",
  date: "2023-04-22",
  rating: 4,
  reviewer_name: "Evan Ross",
  source: "capterra",
  company: "Freshworks",
  url: "https://www.capterra.com/p/freshdesk/reviews/34003"
},

// ======== ATLASSIAN (additional) ========
{
  title: "Powerful for cross-functional teams",
  review: "Confluence + Jira combo improved handoffs; integration is seamless and helps maintain documentation.",
  date: "2023-02-11",
  rating: 5,
  reviewer_name: "Sergio Alvarez",
  source: "capterra",
  company: "Atlassian",
  url: "https://www.capterra.com/p/jira/reviews/35002"
},
{
  title: "Custom workflows save time",
  review: "Custom issue types and automation reduced manual triage work significantly.",
  date: "2023-03-19",
  rating: 4,
  reviewer_name: "Leena Kapoor",
  source: "g2",
  company: "Atlassian",
  url: "https://www.g2.com/products/jira/reviews/35003"
},
{
  title: "Good for engineering teams",
  review: "Developers appreciate the issue tracking and release management features; integrations with CI helped our process.",
  date: "2023-05-27",
  rating: 5,
  reviewer_name: "Tom Becker",
  source: "trustradius",
  company: "Atlassian",
  url: "https://www.trustradius.com/reviews/jira-2023-05"
},

// ======== ZENDESK (additional) ========
{
  title: "Robust ticketing with useful analytics",
  review: "Zendesk Explore provided useful insights into agent performance and SLA compliance.",
  date: "2023-02-26",
  rating: 5,
  reviewer_name: "Hannah Wright",
  source: "g2",
  company: "Zendesk",
  url: "https://www.g2.com/products/zendesk/reviews/40002"
},
{
  title: "Scales well with support teams",
  review: "We moved from a basic helpdesk to Zendesk and could support double the volume with the same headcount.",
  date: "2023-04-05",
  rating: 5,
  reviewer_name: "Mateo Lopez",
  source: "trustradius",
  company: "Zendesk",
  url: "https://www.trustradius.com/reviews/zendesk-2023-04"
},

// ======== INTERCOM (additional) ========
{
  title: "Conversational marketing that works",
  review: "Intercom messenger and targeted messages increased trial conversions. Automation rules are helpful.",
  date: "2023-02-14",
  rating: 5,
  reviewer_name: "Isabella Rossi",
  source: "g2",
  company: "Intercom",
  url: "https://www.g2.com/products/intercom/reviews/41002"
},
{
  title: "Good support chat experience",
  review: "Chat widgets are fast and integrations with our helpdesk improved ticket creation.",
  date: "2023-03-21",
  rating: 4,
  reviewer_name: "Arjun Mehta",
  source: "capterra",
  company: "Intercom",
  url: "https://www.capterra.com/p/intercom/reviews/41003"
},
{
  title: "Helpful for onboarding new users",
  review: "Intercom series messages helped onboard new users and reduced churn in the first 30 days.",
  date: "2023-05-09",
  rating: 5,
  reviewer_name: "Nina Kovac",
  source: "trustradius",
  company: "Intercom",
  url: "https://www.trustradius.com/reviews/intercom-2023-05"
},

// ======== MAILCHIMP (additional) ========
{
  title: "Straightforward campaign builder",
  review: "Mailchimp makes sending campaigns and analyzing basic metrics very easy for marketing teams.",
  date: "2023-02-07",
  rating: 4,
  reviewer_name: "Felipe Duarte",
  source: "capterra",
  company: "Mailchimp",
  url: "https://www.capterra.com/p/mailchimp/reviews/41002"
},
{
  title: "Good automation for SMBs",
  review: "Pre-built automations and templates allowed us to get started without design resources.",
  date: "2023-03-15",
  rating: 4,
  reviewer_name: "Miriam Lopez",
  source: "g2",
  company: "Mailchimp",
  url: "https://www.g2.com/products/mailchimp/reviews/41003"
},
{
  title: "Affordable entry-level plan",
  review: "Pricing for small lists is competitive; advanced segmentation and deliverability tools are in higher tiers.",
  date: "2023-04-28",
  rating: 4,
  reviewer_name: "Jon Park",
  source: "trustradius",
  company: "Mailchimp",
  url: "https://www.trustradius.com/reviews/mailchimp-2023-04"
},

// ======== PIPEDRIVE (additional) ========
{
  title: "Sales-focused CRM that helps close deals",
  review: "Pipeline visualization and deal-focused design keep reps productive. Integrations for calling are great.",
  date: "2023-01-25",
  rating: 5,
  reviewer_name: "Priyank Shah",
  source: "capterra",
  company: "Pipedrive",
  url: "https://www.capterra.com/p/pipedrive/reviews/42002"
},
{
  title: "Easy to train new reps",
  review: "Minimal setup and intuitive UI let new reps start selling quickly.",
  date: "2023-03-02",
  rating: 4,
  reviewer_name: "Rachael Adams",
  source: "g2",
  company: "Pipedrive",
  url: "https://www.g2.com/products/pipedrive/reviews/42003"
},
{
  title: "Great activity tracking",
  review: "Logging calls and activities is straightforward which improved our forecast accuracy.",
  date: "2023-05-18",
  rating: 5,
  reviewer_name: "Zheng Wei",
  source: "trustradius",
  company: "Pipedrive",
  url: "https://www.trustradius.com/reviews/pipedrive-2023-05"
},

// ======== MONDAY.COM (additional) ========
{
  title: "Custom boards for cross-team workflows",
  review: "Boards and automations let us coordinate projects across marketing and engineering without code.",
  date: "2023-02-09",
  rating: 5,
  reviewer_name: "Olga Petrova",
  source: "g2",
  company: "Monday.com",
  url: "https://www.g2.com/products/monday-com/reviews/43002"
},
{
  title: "Visual project management",
  review: "Visual timelines and dashboards help stakeholders understand progress at a glance.",
  date: "2023-04-01",
  rating: 4,
  reviewer_name: "Samuel Green",
  source: "trustradius",
  company: "Monday.com",
  url: "https://www.trustradius.com/reviews/monday-com-2023-04"
},
{
  title: "Highly customizable",
  review: "Custom columns and automations let us create workflows tailored to each team without engineering help.",
  date: "2023-05-12",
  rating: 4,
  reviewer_name: "Keiko Tanaka",
  source: "capterra",
  company: "Monday.com",
  url: "https://www.capterra.com/p/monday-com/reviews/43003"
},

// ======== QUICKBOOKS (additional) ========
{
  title: "Makes accounting approachable for small teams",
  review: "QuickBooks Online simplified invoicing and bank reconciliations, saving our part-time bookkeeper hours.",
  date: "2023-01-18",
  rating: 5,
  reviewer_name: "Hector Alvarez",
  source: "g2",
  company: "QuickBooks",
  url: "https://www.g2.com/products/quickbooks/reviews/44002"
},
{
  title: "Good integrations with banks",
  review: "Bank feeds and reconciliation work reliably for small businesses; tax reports are helpful at year-end.",
  date: "2023-03-07",
  rating: 4,
  reviewer_name: "Anu Verma",
  source: "trustradius",
  company: "QuickBooks",
  url: "https://www.trustradius.com/reviews/quickbooks-2023-03-02"
},
{
  title: "Solid invoicing features",
  review: "Recurring invoices and payment reminders reduced our DSO significantly.",
  date: "2023-05-24",
  rating: 4,
  reviewer_name: "Liam O'Neill",
  source: "capterra",
  company: "QuickBooks",
  url: "https://www.capterra.com/p/quickbooks/reviews/44003"
}

];

export const getReviewsBySource = (source: Review['source']) => {
  return mockReviews.filter(review => review.source === source);
};

export const getReviewsByDateRange = (
  reviews: Review[],
  startDate: string,
  endDate: string
) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return reviews.filter(review => {
    const reviewDate = new Date(review.date);
    return reviewDate >= start && reviewDate <= end;
  });
};

export const getSourceStats = () => {
  const g2Reviews = getReviewsBySource('g2');
  const capterraReviews = getReviewsBySource('capterra');
  const trustradiusReviews = getReviewsBySource('trustradius');

  const avgRating = (reviews: Review[]) => {
    const validRatings = reviews.filter(r => r.rating !== null);
    if (validRatings.length === 0) return 0;
    return validRatings.reduce((sum, r) => sum + (r.rating || 0), 0) / validRatings.length;
  };

  return {
    g2: { count: g2Reviews.length, avgRating: avgRating(g2Reviews) },
    capterra: { count: capterraReviews.length, avgRating: avgRating(capterraReviews) },
    trustradius: { count: trustradiusReviews.length, avgRating: avgRating(trustradiusReviews) },
    total: mockReviews.length,
    overallAvg: avgRating(mockReviews)
  };
};
