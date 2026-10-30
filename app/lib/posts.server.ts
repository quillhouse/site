import { createClient, type EntrySkeletonType } from "contentful";
import { marked } from "marked";

export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	publishedDate: string;
	metaDescription?: string;
	bodyHtml: string;
};

type BlogPostFields = {
	title: string;
	slug: string;
	excerpt: string;
	publishedDate: string;
	body: string;
	metaDescription?: string;
};

type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, "blogPost">;

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_DELIVERY_TOKEN;

const client =
	spaceId && accessToken ? createClient({ space: spaceId, accessToken }) : null;

let cache: Promise<Post[]> | null = null;

async function fetchPosts(): Promise<Post[]> {
	if (!client) {
		console.warn(
			"[insights] CONTENTFUL_SPACE_ID / CONTENTFUL_DELIVERY_TOKEN not set; building with no posts.",
		);
		return [];
	}

	const res = await client.withoutUnresolvableLinks.getEntries<BlogPostSkeleton>({
		content_type: "blogPost",
		limit: 100,
	});

	const posts = res.items.map((item) => {
		const f = item.fields as unknown as BlogPostFields;
		return {
			slug: f.slug,
			title: f.title,
			excerpt: f.excerpt,
			publishedDate: f.publishedDate,
			metaDescription: f.metaDescription,
			bodyHtml: marked.parse(f.body ?? "", { async: false }),
		};
	});

	return posts.sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
}

export function getPosts(): Promise<Post[]> {
	cache ??= fetchPosts();
	return cache;
}

export async function getPost(slug: string): Promise<Post | undefined> {
	const posts = await getPosts();
	return posts.find((p) => p.slug === slug);
}

export async function getPostSlugs(): Promise<string[]> {
	const posts = await getPosts();
	return posts.map((p) => p.slug);
}

export function formatDate(iso: string) {
	return new Date(`${iso.slice(0, 10)}T12:00:00Z`).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	});
}
