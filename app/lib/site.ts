export const SITE_URL = "https://quillhouse.co";
export const SITE_NAME = "Quillhouse";

export function canonical(path: string) {
	return { tagName: "link", rel: "canonical", href: `${SITE_URL}${path}` } as const;
}

export function pageTitle(title: string) {
	return `${title} — ${SITE_NAME}`;
}

export type PageKind = "home" | "product" | "pricing" | "guides" | "company";

export const PAGES: { path: string; title: string; kind: PageKind; summary: string }[] = [
	{
		path: "/",
		title: "Home",
		kind: "home",
		summary: "Who Quillhouse is, what we write and who we write it for.",
	},
	{
		path: "/services",
		title: "Services",
		kind: "product",
		summary:
			"Customer case studies, white papers, comparison pages and managed editorial programs, all built on interviews.",
	},
	{
		path: "/work",
		title: "Our work",
		kind: "product",
		summary: "Selected case studies and editorial programs written for clients, with the results they drove.",
	},
	{
		path: "/pricing",
		title: "Retainers & pricing",
		kind: "pricing",
		summary: "Monthly retainer tiers and fixed project prices for case studies, white papers and comparison pages.",
	},
	{
		path: "/insights",
		title: "Insights",
		kind: "guides",
		summary:
			"Notes from Quillhouse editors on customer interviews, case studies, white papers and running a B2B editorial program.",
	},
	{
		path: "/team",
		title: "Team",
		kind: "company",
		summary: "The editors, writers and interviewers at Quillhouse, a B2B content studio founded in Portland in 2018.",
	},
	{
		path: "/contact",
		title: "Contact",
		kind: "company",
		summary: "Email, phone and studio address, plus a form to book a 30-minute intro call.",
	},
];
