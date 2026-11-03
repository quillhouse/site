import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { getPostSlugs } from "./lib/posts.server";

async function routes(): Promise<RouteConfig> {
	const slugs = await getPostSlugs();

	return [
		index("routes/home.tsx"),
		route("services", "routes/services.tsx"),
		route("work", "routes/work.tsx"),
		route("team", "routes/team.tsx"),
		route("pricing", "routes/pricing.tsx"),
		route("insights", "routes/insights.tsx"),
		// Post pages are prerendered from Contentful; with no posts there is nothing to render.
		...(slugs.length > 0 ? [route("insights/:slug", "routes/insights.post.tsx")] : []),
		route("contact", "routes/contact.tsx"),
		route("sitemap.xml", "routes/sitemap.ts"),
		route("llms.txt", "routes/llms.ts"),
	];
}

export default routes();
