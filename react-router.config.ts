import type { Config } from "@react-router/dev/config";
import { getPostSlugs } from "./app/lib/posts.server";
import { getTermSlugs } from "./app/lib/glossary.server";

export default {
	ssr: false,
	async prerender({ getStaticPaths }) {
		const slugs = await getPostSlugs();
		return [
			...getStaticPaths(),
			...slugs.map((slug) => `/insights/${slug}`),
			...getTermSlugs().map((slug) => `/glossary/${slug}`),
		];
	},
} satisfies Config;
