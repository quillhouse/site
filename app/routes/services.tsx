import { Link } from "react-router";
import type { Route } from "./+types/services";
import { canonical, pageTitle } from "../lib/site";

export const meta: Route.MetaFunction = () => [
	{ title: pageTitle("Services") },
	{
		name: "description",
		content:
			"Customer case studies, white papers, comparison pages and managed editorial programs, all built on interviews with the people who know the subject.",
	},
	canonical("/services"),
];

const SERVICES = [
	{
		name: "Customer case studies",
		body: "We recruit the customer with your CSM, run a 40-minute recorded interview, and deliver a web version, a one-page PDF and three pull quotes cleared for sales decks. Typical turnaround is 11 business days from interview to approved draft.",
		includes: ["Interview prep and question set", "Web story (700–1,100 words)", "Designed one-page PDF", "Customer approval round"],
	},
	{
		name: "White papers & buyer guides",
		body: "Long-form pieces of 2,500 to 5,000 words, built on two to four interviews with your product, security or solutions people. We outline first, you approve the outline, then we write.",
		includes: ["Up to four SME interviews", "Outline and source review", "Two rounds of edits", "Landing-page copy and email"],
	},
	{
		name: "Comparison & alternatives pages",
		body: "Honest, specific \"X vs Y\" and \"alternatives to\" pages that your buyers are already searching for, written from your product documentation and your competitors' public material, and reviewed by your product marketing lead.",
		includes: ["Competitor research", "Feature table from public sources", "Objection-handling section", "Quarterly refresh"],
	},
	{
		name: "Editorial programs",
		body: "A standing monthly calendar with a named editor, a style guide written for your brand, and two to six articles a month. This is how most of our retainer clients work with us.",
		includes: ["Named managing editor", "Brand style guide", "Monthly planning call", "Performance report each quarter"],
	},
];

export default function Services() {
	return (
		<>
			<section className="section">
				<p className="eyebrow">Services</p>
				<h1>Content built on interviews, not on rewriting what already ranks.</h1>
				<p className="lede">
					Every piece starts with a conversation: a customer, an engineer, a support lead. That
					is what makes the writing specific enough for a buyer to trust and for a salesperson
					to send.
				</p>
			</section>

			{SERVICES.map((s) => (
				<section key={s.name} className="section service">
					<h2>{s.name}</h2>
					<p>{s.body}</p>
					<ul className="checklist">
						{s.includes.map((i) => (
							<li key={i}>{i}</li>
						))}
					</ul>
				</section>
			))}

			<section className="section">
				<h2>How a project runs</h2>
				<ol className="steps">
					<li>
						<strong>Brief.</strong> A 30-minute call to agree the audience, the one claim the
						piece has to prove, and who we should talk to.
					</li>
					<li>
						<strong>Interview.</strong> We run every interview ourselves, record it, and share
						the transcript with you the same day.
					</li>
					<li>
						<strong>Draft.</strong> A full draft, not an outline with gaps, with every number
						tied back to a timestamp in the transcript.
					</li>
					<li>
						<strong>Approve.</strong> One consolidated round of edits from your team, then the
						customer or SME signs off.
					</li>
				</ol>
				<p>
					Curious what a project like this costs?{" "}
					<Link to="/pricing">See our pricing</Link>.
				</p>
			</section>
		</>
	);
}
