import { PAGES, SITE_URL } from "../lib/site";
import { getPosts } from "../lib/posts.server";

export async function loader() {
	const posts = await getPosts();
	const urls = [
		...PAGES.map(({ path }) => `  <url><loc>${SITE_URL}${path}</loc></url>`),
		...posts.map(
			(p) =>
				`  <url><loc>${SITE_URL}/insights/${p.slug}</loc><lastmod>${p.publishedDate.slice(0, 10)}</lastmod></url>`,
		),
	];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
	return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
