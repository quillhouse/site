import { Link } from "react-router";
import type { Route } from "./+types/insights";
import { canonical, pageTitle } from "../lib/site";
import { formatDate, getPosts } from "../lib/posts.server";

export async function loader() {
	const posts = await getPosts();
	return {
		posts: posts.map((p) => ({
			slug: p.slug,
			title: p.title,
			excerpt: p.excerpt,
			date: formatDate(p.publishedDate),
		})),
	};
}

export const meta: Route.MetaFunction = () => [
	{ title: pageTitle("Insights") },
	{
		name: "description",
		content:
			"Notes from Quillhouse editors on customer interviews, case studies, white papers and running a B2B editorial program.",
	},
	canonical("/insights"),
];

export default function Insights({ loaderData }: Route.ComponentProps) {
	const { posts } = loaderData;
	return (
		<>
			<section className="section">
				<p className="eyebrow">Insights</p>
				<h1>What we've learned writing for B2B companies.</h1>
				<p className="lede">
					Short, practical pieces from our editors on interviewing customers, getting stories
					approved and making long-form content earn its keep.
				</p>
			</section>

			<section className="section">
				{posts.length === 0 ? (
					<div className="empty">
						<h2>No articles yet</h2>
						<p>
							We're putting the finishing touches on our first pieces. In the meantime,{" "}
							<Link to="/work">see the work</Link>.
						</p>
					</div>
				) : (
					<ul className="post-list">
						{posts.map((p) => (
							<li key={p.slug}>
								<p className="small">{p.date}</p>
								<h2>
									<Link to={`/insights/${p.slug}`}>{p.title}</Link>
								</h2>
								<p>{p.excerpt}</p>
							</li>
						))}
					</ul>
				)}
			</section>
		</>
	);
}
