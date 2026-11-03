import { PAGES, SITE_NAME, SITE_URL, type PageKind } from "../lib/site";
import { getPosts } from "../lib/posts.server";

const SECTIONS: { title: string; kind: PageKind }[] = [
	{ title: "Product", kind: "product" },
	{ title: "Pricing", kind: "pricing" },
	{ title: "Guides", kind: "guides" },
	{ title: "Company", kind: "company" },
];

const ABOUT =
	"Quillhouse is a B2B content agency in Portland, Oregon. We interview customers, engineers and subject-matter experts, then write the content that moves deals forward for B2B software and services companies: customer case studies, white papers and buyer guides, comparison pages, and managed editorial programs on a monthly retainer.";

function link(title: string, path: string, summary: string) {
	return `- [${title}](${SITE_URL}${path}): ${summary}`;
}

export async function loader() {
	const posts = await getPosts();
	const lines = [`# ${SITE_NAME}`, "", `> ${ABOUT}`];

	for (const section of SECTIONS) {
		const items = PAGES.filter((p) => p.kind === section.kind).map((p) => link(p.title, p.path, p.summary));
		if (section.kind === "guides") {
			items.push(...posts.map((p) => link(p.title, `/insights/${p.slug}`, p.metaDescription || p.excerpt)));
		}
		if (items.length > 0) lines.push("", `## ${section.title}`, "", ...items);
	}

	return new Response(`${lines.join("\n")}\n`, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
