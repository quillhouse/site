import { data, Link, type LoaderFunctionArgs, type MetaFunction, useLoaderData } from "react-router";
import { canonical, pageTitle } from "../lib/site";
import { getTerm } from "../lib/glossary.server";

export async function loader({ params }: LoaderFunctionArgs) {
	const term = getTerm(params.slug ?? "");
	if (!term) {
		throw data(null, { status: 404 });
	}
	return {
		term: {
			slug: term.slug,
			term: term.term,
			summary: term.summary,
			metaDescription: term.metaDescription,
			bodyHtml: term.bodyHtml,
			related: term.related
				.map((slug) => getTerm(slug))
				.filter((t) => t !== undefined)
				.map((t) => ({ slug: t.slug, term: t.term })),
		},
	};
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	if (!data) return [{ title: pageTitle("Not found") }];
	const { term } = data;
	return [
		{ title: pageTitle(`${term.term}: glossary`) },
		{ name: "description", content: term.metaDescription },
		{ property: "og:title", content: term.term },
		canonical(`/glossary/${term.slug}`),
	];
};

export default function GlossaryTerm() {
	const { term } = useLoaderData<typeof loader>();
	return (
		<article className="section narrow">
			<p className="small">
				<Link to="/glossary">Glossary</Link>
			</p>
			<h1>{term.term}</h1>
			<p className="lede">{term.summary}</p>
			<div className="prose" dangerouslySetInnerHTML={{ __html: term.bodyHtml }} />
			{term.related.length > 0 && (
				<>
					<h2>Related terms</h2>
					<ul>
						{term.related.map((r) => (
							<li key={r.slug}>
								<Link to={`/glossary/${r.slug}`}>{r.term}</Link>
							</li>
						))}
					</ul>
				</>
			)}
			<hr />
			<p>
				Want this applied to your own customers and experts?{" "}
				<Link to="/contact">Start a project</Link>.
			</p>
		</article>
	);
}
