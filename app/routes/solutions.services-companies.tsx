import { Link } from "react-router";
import type { Route } from "./+types/solutions.services-companies";
import { canonical, pageTitle } from "../lib/site";

export const meta: Route.MetaFunction = () => [
	{ title: pageTitle("Content for B2B services companies") },
	{
		name: "description",
		content:
			"Case studies, white papers and editorial programs for B2B services companies, built on interviews with your clients and your own experts so buyers can see the work behind the pitch.",
	},
	canonical("/solutions/services-companies"),
];

const PROBLEMS = [
	"Our best thinking lives in our consultants' heads and in client calls, not on our site.",
	"Every firm in our space says the same things, and buyers can't tell us apart.",
	"Clients love the work, but we've never turned it into a story a prospect can read.",
	"Our experts are billable. Nobody has time to write.",
];

const WORK = [
	{
		name: "Client case studies",
		body: "We recruit the client with your account lead, run a 40-minute recorded interview, and write a story with a number in the headline that the client has signed off on. You get a web version, a one-page PDF and pull quotes cleared for proposals.",
	},
	{
		name: "White papers & point-of-view pieces",
		body: "Built on two to four interviews with your partners, practice leads or delivery team, so the piece carries what your people actually know rather than what secondary research says. We outline first, you approve the outline, then we write.",
	},
	{
		name: "Editorial programs",
		body: "A standing monthly calendar with a named editor and two to six articles a month, each one sourced from a short interview with one of your experts, so their time goes into talking, not drafting.",
	},
];

const PROOF = [
	{ figure: "212", label: "customer case studies shipped" },
	{ figure: "38", label: "B2B clients on retainer since 2018" },
	{ figure: "11 days", label: "median from interview to approved draft" },
];

export default function ServicesCompanies() {
	return (
		<>
			<section className="section">
				<p className="eyebrow">For B2B services companies</p>
				<h1>We interview your best people before we write anything.</h1>
				<p className="lede">
					Your expertise is what you sell. We turn conversations with your clients and your
					practice leads into case studies, white papers and articles that show buyers the
					work behind the pitch.
				</p>
			</section>

			<section className="section">
				<h2>Who this is for</h2>
				<p>
					Marketing and business-development leaders at mid-market services companies whose
					teams need credible, specific content to send to prospects, and whose experts are
					too busy with clients to write it themselves.
				</p>
				<h3>Sound familiar?</h3>
				<ul className="checklist">
					{PROBLEMS.map((p) => (
						<li key={p}>“{p}”</li>
					))}
				</ul>
			</section>

			<section className="section">
				<h2>How we help</h2>
				<div className="grid3">
					{WORK.map((w) => (
						<div key={w.name} className="card">
							<h3>{w.name}</h3>
							<p>{w.body}</p>
						</div>
					))}
				</div>
				<p>
					We run every interview ourselves and share the transcript the same day. Nothing is
					published until your client or expert signs off.{" "}
					<Link to="/services">How a project runs →</Link>
				</p>
			</section>

			<section className="section">
				<h2>The track record behind the work</h2>
				<div className="stats">
					{PROOF.map((p) => (
						<div key={p.label} className="stat">
							<span className="stat__figure">{p.figure}</span>
							<span className="stat__label">{p.label}</span>
						</div>
					))}
				</div>
				<p>
					<Link to="/work">See the work →</Link>
				</p>
			</section>

			<section className="section cta">
				<h2>Have a client with a good story?</h2>
				<p>
					Send us their name and we'll send back a scoped interview plan within two business
					days.
				</p>
				<Link to="/contact" className="button">
					Start a project
				</Link>
			</section>
		</>
	);
}
