import { Link } from "react-router";
import type { Route } from "./+types/glossary";
import { canonical, pageTitle } from "../lib/site";
import { getTerms } from "../lib/glossary.server";

export async function loader() {
	return {
		terms: getTerms().map((t) => ({ slug: t.slug, term: t.term, summary: t.summary })),
	};
}

export const meta: Route.MetaFunction = () => [
	{ title: pageTitle("Glossary") },
	{
		name: "description",
		content:
			"Plain-language definitions of the B2B content terms that come up when planning case studies, white papers, expert interviews and editorial programs.",
	},
	canonical("/glossary"),
];

export default function Glossary({ loaderData }: Route.ComponentProps) {
	const { terms } = loaderData;
	return (
		<>
			<section className="section">
				<p className="eyebrow">Glossary</p>
				<h1>B2B content terms, in plain language.</h1>
				<p className="lede">
					Short definitions of the words that come up when you plan case studies, white papers
					and editorial programs, and what each one means for how the work gets done.
				</p>
			</section>

			<section className="section">
				<ul className="post-list">
					{terms.map((t) => (
						<li key={t.slug}>
							<h2>
								<Link to={`/glossary/${t.slug}`}>{t.term}</Link>
							</h2>
							<p>{t.summary}</p>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
