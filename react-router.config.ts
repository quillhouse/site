import type { Config } from "@react-router/dev/config";
import { getPostSlugs } from "./app/lib/posts.server";

export default {
	ssr: false,
	async prerender({ getStaticPaths }) {
		const slugs = await getPostSlugs();
		return [...getStaticPaths(), ...slugs.map((slug) => `/insights/${slug}`)];
	},
} satisfies Config;
