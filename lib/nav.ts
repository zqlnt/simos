export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    title: "Sim",
    items: [
      { label: "Home", href: "/", description: "simOS workspace & shortcuts" },
      { label: "About", href: "/about", description: "Product story & scope" },
      { label: "News", href: "/news", description: "Updates & announcements" },
      { label: "Contact", href: "/contact", description: "Reach the team" },
    ],
  },
  {
    title: "Products",
    items: [
      { label: "Simium", href: "/simium", description: "Profile, library, entry" },
      { label: "Simulator", href: "/simulator", description: "Dome pipeline & worlds" },
      { label: "Simulatia", href: "/simulatia", description: "Agents, cities, factions" },
      { label: "Simulon", href: "/simulon", description: "Companion surface" },
      { label: "Coming soon", href: "/coming-soon", description: "Roadmap preview" },
      { label: "Checkout", href: "/checkout", description: "Plans & billing" },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Business operations", href: "/business", description: "Tasks, finance, roadmaps" },
      { label: "Company", href: "/company", description: "Structure & logistics" },
      { label: "Operations hub", href: "/operations", description: "Telemetry & planning grid" },
    ],
  },
  {
    title: "simOS",
    items: [{ label: "Zero", href: "/zero", description: "Assistant & system entry" }],
  },
  {
    title: "Organization",
    items: [
      { label: "Dashboard", href: "/organization", description: "Org overview & divisions" },
      { label: "Calendar", href: "/organization/calendar", description: "Schedules & windows" },
      { label: "Building & rooms", href: "/organization/building", description: "Spaces, files, floors" },
    ],
  },
];

/** Detail lists for hub pages — extend as features ship */
export const simiumSections: NavItem[] = [
  { label: "Onboarding", href: "/simium#onboarding" },
  { label: "Profile — life info", href: "/simium#profile" },
  { label: "Configurator", href: "/simium#configurator" },
  { label: "Enter Simium", href: "/simium#enter" },
  { label: "Library & history", href: "/simium#library" },
  { label: "Settings", href: "/simium#settings" },
];

export const simulatorSections: NavItem[] = [
  {
    label: "Timeline & simulation runs",
    href: "/simulator#timeline",
    description: "Scrub runs, milestones, and playback across sessions.",
  },
  {
    label: "3D asset library",
    href: "/simulator#asset-library",
    description: "Meshes, materials, rigs — drag in from the shelf.",
  },
  {
    label: "CAD / Blender-style environments",
    href: "/simulator#environment",
    description: "Studio lighting, HDRI backdrops, and viewport-grade stages.",
  },
  {
    label: "World creation",
    href: "/simulator#world-creation",
    description: "Author nested spaces — 4D worlds within worlds.",
  },
  {
    label: "Virtual reality",
    href: "/simulator#vr",
    description: "Enter immersive preview and hand off to headset runs.",
  },
  { label: "Onboarding / tutorial", href: "/simulator#onboarding" },
  { label: "Home", href: "/simulator#home" },
  { label: "News", href: "/simulator#news" },
  { label: "Gallery", href: "/simulator#gallery" },
  { label: "Projects", href: "/simulator#projects" },
  { label: "Pre-Dome", href: "/simulator#pre-dome" },
  { label: "The Dome", href: "/simulator#dome" },
  { label: "Post-Dome — publish", href: "/simulator#post-dome" },
];

export const simulatiaSections: NavItem[] = [
  {
    label: "Isometric city — white blocks",
    href: "/simulatia#city",
    description: "Minimal isometric districts — full cities of readable massing.",
  },
  {
    label: "Virtual reality entry",
    href: "/simulatia#vr",
    description: "Drop into volumetric streets and interior shells.",
  },
  {
    label: "World creation & 4D nesting",
    href: "/simulatia#worlds-4d",
    description: "Worlds within worlds — nested scopes and portals.",
  },
  { label: "Onboarding / tutorial", href: "/simulatia#onboarding" },
  { label: "Enter world", href: "/simulatia#world" },
  { label: "Connect services", href: "/simulatia#connect" },
  { label: "Buildings / factions", href: "/simulatia#buildings" },
  { label: "Interior buildings", href: "/simulatia#interior" },
  { label: "Agents", href: "/simulatia#agents" },
  { label: "Mini-games — training", href: "/simulatia#minigames" },
  { label: "Automation", href: "/simulatia#automation" },
  { label: "Updates", href: "/simulatia#updates" },
  { label: "Settings", href: "/simulatia#settings" },
];

export const businessSections: NavItem[] = [
  { label: "Tasks", href: "/business#tasks" },
  { label: "Calendars", href: "/business#calendars" },
  { label: "Roadmaps", href: "/business#roadmaps" },
  { label: "Deadlines", href: "/business#deadlines" },
];

export const companySections: { title: string; items: string[] }[] = [
  {
    title: "Company & logistics",
    items: [
      "Logistics",
      "Incorporation and company structure",
      "Directors and company records",
      "Books, admin, and internal systems",
      "Domains and company accounts",
      "Company email setup",
      "Company intranet / workspace",
      "Company codex",
      "Calendly and scheduling systems",
    ],
  },
  {
    title: "Finances",
    items: [
      "Weekly, monthly, and yearly expenditure tracking",
      "Budgeting and financial breakdowns",
      "Runway and cash flow management",
      "Reporting and finance review systems",
    ],
  },
  {
    title: "Fundraise",
    items: [
      "Business plan",
      "Pitch deck",
      "Investment documentation",
      "Financial breakdown",
      "Data room / supporting data",
      "Application templates",
      "Fundraising workflow and investor pipeline",
      "Investment routes",
      "Grants",
      "Venture capital studios",
      "Angel investors",
      "Loans",
    ],
  },
  {
    title: "Hires & outsourcing",
    items: [
      "Hiring plan",
      "Role definitions",
      "Contractors and freelancers",
      "Outsourcing system and management",
    ],
  },
];

export const SIM_LOGO_URL =
  "https://i.ibb.co/ZpCCyK2S/Untitled-design-2026-02-09-T162032-994.png";
