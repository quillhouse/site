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
		route("solutions/software-companies", "routes/solutions.software-companies.tsx"),
		route("solutions/services-companies", "routes/solutions.services-companies.tsx"),
		route("insights", "routes/insights.tsx"),
		// Post pages are prerendered from Contentful; with no posts there is nothing to render.
		...(slugs.length > 0 ? [route("insights/:slug", "routes/insights.post.tsx")] : []),
		route("contact", "routes/contact.tsx"),
		route("sitemap.xml", "routes/sitemap.ts"),
	];
}

export default routes();
