import { Link } from "react-router";
import type { Route } from "./+types/solutions.software-companies";
import { canonical, pageTitle } from "../lib/site";

export const meta: Route.MetaFunction = () => [
	{ title: pageTitle("Content for B2B software companies") },
	{
		name: "description",
		content:
			"Case studies, white papers and comparison pages for mid-market B2B software companies, built on interviews with your customers and your own experts so sales reps actually send them.",
	},
	canonical("/solutions/software-companies"),
];

const PROBLEMS = [
	"Our AEs write their own one-pagers because the case studies we have are three years old.",
	"Buyers are comparing us to bigger vendors using someone else's listicle.",
	"Our engineers know more than any white paper we've published, but nobody has time to get it out of them.",
	"We publish every week, and sales still can't tell us which piece to send.",
];

const WORK = [
	{
		name: "Customer case studies",
		body: "We recruit the customer with your CSM, run a 40-minute recorded interview, and write a story with a number in the headline that the customer has signed off on. You get a web version, a one-page PDF and pull quotes cleared for sales decks.",
	},
	{
		name: "White papers & buyer guides",
		body: "Built on two to four interviews with your product, security or solutions people, so the piece says something a competitor's content team couldn't. We outline first, you approve the outline, then we write.",
	},
	{
		name: "Comparison & alternatives pages",
		body: "Specific \"X vs Y\" pages written from your product documentation and your competitors' public material, and reviewed by your product marketing lead, so they hold up in a procurement review.",
	},
];

const PROOF = [
	{
		client: "Ledgerline",
		sector: "Accounts-payable automation",
		result: "Case studies attached to 140 opportunities in the first year; win rate on deals with one attached rose from 21% to 29%.",
	},
	{
		client: "Corvid Security",
		sector: "Endpoint security",
		result: "The comparison pages became the second-largest source of demo requests within two quarters.",
	},
];

export default function SoftwareCompanies() {
	return (
		<>
			<section className="section">
				<p className="eyebrow">For B2B software companies</p>
				<h1>Software stories your buyers believe and your reps actually send.</h1>
				<p className="lede">
					We interview your best customers and the people who built the product, then write
					the case studies, white papers and comparison pages your sales team needs to win
					deals.
				</p>
			</section>

			<section className="section">
				<h2>Who this is for</h2>
				<p>
					Marketing and demand-gen leaders at mid-market software companies whose sales
					team needs credible, specific proof in the deal room, not more generic thought
					leadership.
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
					Every number in a draft ties back to a timestamp in the interview transcript, and
					nothing is published until your customer or expert signs off.{" "}
					<Link to="/services">How a project runs →</Link>
				</p>
			</section>

			<section className="section">
				<h2>Proof from software teams we write for</h2>
				{PROOF.map((p) => (
					<div key={p.client}>
						<p className="eyebrow">
							{p.client} · {p.sector}
						</p>
						<p className="result">
							<strong>Result:</strong> {p.result}
						</p>
					</div>
				))}
				<blockquote className="quote">
					<p>
						“Our AEs used to write their own one-pagers. Now they send Quillhouse case studies,
						and the Ledgerline story alone has been attached to 140 opportunities this year.”
					</p>
					<cite>Priya Natarajan, VP Marketing, Ledgerline</cite>
				</blockquote>
			</section>

			<section className="section cta">
				<h2>Have a customer with a good story?</h2>
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
