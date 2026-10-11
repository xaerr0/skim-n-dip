export const biz = {
  name: "Skim n' Dip",
  tagline: "We skim. You dip.",
  phone: "(925) 348-5609",
  phoneHref: "tel:+19253485609",
  smsHref: "sms:+19253485609",
  email: "Skimndip@Gmail.com",
  street: "3311 Concord Blvd",
  city: "Concord",
  region: "CA",
  zip: "94519",
  geo: { lat: 37.9778083, lng: -122.0171227 },
  license: "1072978",
  licenseUrl: "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=1072978",
  founded: 2013,
  hours: "Mon to Fri, 8 AM to 4:30 PM",
  rating: "4.9",
  reviewCount: 140,
  googleUrl: "https://www.google.com/maps/place/Skim+N+Dip/@37.9778083,-122.0171227,17z/data=!4m6!3m5!1s0x8085674492d15555:0xe30711412bbcef29!8m2!3d37.9778083!4d-122.0171227!16s%2Fg%2F11fx7w1yt0",
  instagram: "https://www.instagram.com/skimndipinc/",
  site: "https://www.skimndipllc.com",
};

export type PlanId = "chem-plus" | "chems-bags-baskets" | "chemical-only";

export const plans: {
  id: PlanId;
  name: string;
  short: string;
  href: string;
  who: string;
  summary: string;
}[] = [
  {
    id: "chem-plus",
    name: "Chem Plus",
    short: "Chem Plus",
    href: "/chem-plus",
    who: "You want the pool handled, start to finish.",
    summary:
      "Our most complete weekly plan. The tech brushes, skims, empties the baskets, balances the water and checks the equipment, so the pool is ready whenever you are.",
  },
  {
    id: "chems-bags-baskets",
    name: "Chems, Bags & Baskets",
    short: "Bags & Baskets",
    href: "/chems-bags-baskets",
    who: "You brush and skim, we do the chemistry and the dirty baskets.",
    summary:
      "Weekly water chemistry plus emptying the skimmer and cleaner baskets and bags, with an equipment check every visit.",
  },
  {
    id: "chemical-only",
    name: "Chem Only",
    short: "Chem Only",
    href: "/chemical-only",
    who: "You like to clean it yourself and want the water right.",
    summary:
      "For homeowners who do their own cleaning. We test and balance the water every week and keep an eye on the long-term numbers.",
  },
];

// Rows of the plan comparison. Values in plan order: chem-plus, chems-bags-baskets, chemical-only.
// Source: the three package pages on the current site (2026-10-11).
export const planRows: { label: string; note?: string; has: [boolean, boolean, boolean] }[] = [
  { label: "Chlorine, pH and alkalinity tested and balanced", note: "Chemicals for these three are included in the price.", has: [true, true, true] },
  { label: "Hardness, phosphate and stabilizer monitored", has: [true, true, true] },
  { label: "Equipment checked every visit", has: [true, true, true] },
  { label: "Filter cleaned 3 times a year", has: [true, true, true] },
  { label: "Text and email report after each visit", has: [true, true, true] },
  { label: "Skimmer and cleaner baskets and bags emptied", has: [true, true, false] },
  { label: "Walls and steps brushed", has: [true, false, false] },
  { label: "Leaves and debris netted off the surface", has: [true, false, false] },
];

export const planFinePrint = [
  "Vacuuming the pool floor is a separate charge if your pool has no automatic cleaner.",
  "Salt, phosphate and algae treatments are billed on top of the plan when the water needs them.",
  "Prices depend on pool size and condition. Call or text for a quote.",
];

export const crew = [
  { name: "Nick Eisenbart", role: "Owner", note: "Founded Skim n' Dip in 2013", img: "team-nick" },
  { name: "Mark Ray", role: "Office manager", note: "Answers the phone and texts, since 2021", img: "team-mark" },
  { name: "Ben", role: "Service tech", img: "team-ben" },
  { name: "Craig", role: "Service tech", img: "team-craig" },
  { name: "Jason", role: "Service tech", img: "team-jason" },
  { name: "Andrew", role: "Repair and install tech", img: "team-andrew" },
] as const;

export type Review = { name: string; when: string; text: string; topic: "weekly" | "repair" | "remodel" | "switch" };

// Verbatim from Google (collected 2026-10-11). See recon/reviews.md.
export const reviews: Review[] = [
  { name: "Linsey Dicks", when: "5 months ago", topic: "weekly", text: "I get a text every week saying they will be here and get another text once they are done. My pool is well maintained throughout the year." },
  { name: "Katie Niemann", when: "2 years ago", topic: "weekly", text: "Our weekly technician, Craig, is punctual, friendly, and keeps the water clear and baskets cleaned out." },
  { name: "Carol Roeder", when: "6 months ago", topic: "repair", text: "We had our filter replaced and a heater added to our pool. The installation was flawless with no issues. Andrew worked diligently for two days only taking breaks for lunch. Nick was on site both days making sure there were no complications." },
  { name: "Serdar & Shannon Copur", when: "5 months ago", topic: "switch", text: "I've worked with a dozen pool companies over the years. Often times, they over-charge and under-deliver. That is NOT the case with SkimNDip." },
  { name: "Kent M", when: "2 months ago", topic: "repair", text: "When our equipment failed just before an important event Nick went far beyond the normal to get it fixed in time. I can't rate him highly enough." },
  { name: "Jennifer Kenny", when: "a year ago", topic: "weekly", text: "Once done they send me a text & email regarding my service that day including pictures and all work done that day." },
  { name: "Ignacio Guillen", when: "8 months ago", topic: "repair", text: "Their team is extremely knowledgeable and has helped me troubleshoot and resolve electrical issues related to the pool, which really sets them apart." },
  { name: "Erica Butler", when: "2 years ago", topic: "remodel", text: "Skim N' Dip did a wonderful job renovating our pool. We purchased our house last year and were informed that the pool was in need of a replaster, new waterline tiles alongside bringing the drains up to code." },
  { name: "Danielle Petersen", when: "4 months ago", topic: "switch", text: "As a first time pool owner I was overwhelmed, but when I called they were so helpful and knowledgeable I booked them right away." },
  { name: "Kerry Hill", when: "8 months ago", topic: "repair", text: "Skim N Dip actually replaced my super small pool filter, re-plumbed everything and we added a pool robot instead of a pool sweep. They understand what the size of my pool needed, sent Andrew, who did his work with precision." },
  { name: "Bruce M", when: "4 months ago", topic: "repair", text: "We use their weekly service and also his repair team as they are Hayward Factory approved for warranty work." },
  { name: "Gina Ravetti McKenzie", when: "3 months ago", topic: "switch", text: "Switched to Skim N Dip because I wanted more communication and better service. Have been really happy with my experience!" },
];

export const oneTime = [
  "Green pool recovery",
  "Pool start-ups and initial chemical balancing",
  "Filter cleaning",
  "Leaf, blue hose and Vac2Waste vacuuming",
  "Pressure washing and acid cleaning",
  "Water chemistry check",
  "Spa water swaps",
  "Solar shut-down in fall and start-up in spring",
];

export const repairs = [
  "Pumps, filters and plumbing",
  "Heater repair and replacement",
  "Pool electrical",
  "Automation and wireless controls",
  "Cleaners, robots and autofills",
  "Energy-efficient pump upgrades",
  "Diagnostics and inspections",
];

export const remodel = ["Replastering and resurfacing", "Waterline tile", "Remodels", "New pool construction"];

export type City = { slug: string; name: string; region: string; near: string[] };

export const regions = ["Central Contra Costa", "Lamorinda and San Ramon Valley", "Tri-Valley", "East County"] as const;

const c = (name: string, region: string, near: string[]): City => ({
  slug: `${name.toLowerCase().replace(/ /g, "-")}-weekly-pool-service`,
  name,
  region,
  near,
});

// Neighbor lists come from each city's page on the current site.
export const cities: City[] = [
  c("Concord", regions[0], ["Clayton", "Pleasant Hill", "Martinez", "Walnut Creek"]),
  c("Clayton", regions[0], ["Concord", "Walnut Creek", "Danville"]),
  c("Pleasant Hill", regions[0], ["Concord", "Martinez", "Walnut Creek", "Lafayette"]),
  c("Martinez", regions[0], ["Pleasant Hill", "Concord", "Walnut Creek", "Lafayette"]),
  c("Walnut Creek", regions[0], ["Pleasant Hill", "Concord", "Clayton", "Lafayette", "Alamo", "Danville"]),
  c("Lafayette", regions[1], ["Alamo", "Walnut Creek", "Pleasant Hill", "Concord", "Danville", "San Ramon"]),
  c("Alamo", regions[1], ["Walnut Creek", "Lafayette", "Danville", "San Ramon", "Pleasant Hill"]),
  c("Danville", regions[1], ["Alamo", "Lafayette", "Walnut Creek", "San Ramon", "Pleasanton"]),
  c("San Ramon", regions[1], ["Danville", "Alamo", "Walnut Creek", "Pleasanton", "Livermore"]),
  c("Pleasanton", regions[2], ["Danville", "San Ramon", "Livermore"]),
  c("Livermore", regions[2], ["Pleasanton", "San Ramon", "Danville", "Brentwood"]),
  c("Antioch", regions[3], ["Concord", "Clayton", "Martinez", "Oakley", "Brentwood"]),
  c("Oakley", regions[3], ["Antioch", "Brentwood", "Discovery Bay", "Concord", "Clayton"]),
  c("Brentwood", regions[3], ["Antioch", "Oakley", "Discovery Bay", "Concord", "Clayton"]),
  c("Discovery Bay", regions[3], ["Antioch", "Oakley", "Brentwood"]),
];

export const cityBySlugName = (name: string) => cities.find((x) => x.name === name);

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/chem-plus", label: "Weekly plans", match: ["/chem-plus", "/chems-bags-baskets", "/chemical-only"] },
  { href: "/recent-work", label: "Remodels" },
  { href: "/service-areas", label: "Service areas" },
  { href: "/about", label: "About", match: ["/about", "/meet-the-team"] },
  { href: "/contact", label: "Contact" },
];
