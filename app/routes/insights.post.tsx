import { data, Link, type LoaderFunctionArgs, type MetaFunction, useLoaderData } from "react-router";
import { canonical, pageTitle } from "../lib/site";
import { formatDate, getPost } from "../lib/posts.server";

export async function loader({ params }: LoaderFunctionArgs) {
	const post = await getPost(params.slug ?? "");
	if (!post) {
		throw data(null, { status: 404 });
	}
	return {
		post: {
			slug: post.slug,
			title: post.title,
			metaDescription: post.metaDescription,
			date: formatDate(post.publishedDate),
			bodyHtml: post.bodyHtml,
		},
	};
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	if (!data) return [{ title: pageTitle("Not found") }];
	const { post } = data;
	return [
		{ title: pageTitle(post.title) },
		...(post.metaDescription ? [{ name: "description", content: post.metaDescription }] : []),
		{ property: "og:title", content: post.title },
		{ property: "og:type", content: "article" },
		canonical(`/insights/${post.slug}`),
	];
};

export default function InsightPost() {
	const { post } = useLoaderData<typeof loader>();
	return (
		<article className="section narrow">
			<p className="small">
				<Link to="/insights">Insights</Link> · {post.date}
			</p>
			<h1>{post.title}</h1>
			<div className="prose" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
			<hr />
			<p>
				Want this kind of thinking applied to your customers?{" "}
				<Link to="/contact">Start a project</Link>.
			</p>
		</article>
	);
}
