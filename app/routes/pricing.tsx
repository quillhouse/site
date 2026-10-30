import { Link } from "react-router";
import type { Route } from "./+types/pricing";
import { canonical, pageTitle } from "../lib/site";

export const meta: Route.MetaFunction = () => [
	{ title: pageTitle("Retainers & pricing") },
	{
		name: "description",
		content:
			"Quillhouse retainers start at $7,500 a month for two long-form pieces and a case study. Project pricing for case studies and white papers is listed too.",
	},
	canonical("/pricing"),
];

const RETAINERS = [
	{
		name: "Foundation",
		price: "$7,500",
		blurb: "For teams that need a steady drip of proof for sales.",
		includes: ["2 long-form articles a month", "1 customer case study a month", "Shared editor", "Quarterly planning call"],
		featured: false,
	},
	{
		name: "Program",
		price: "$12,000",
		blurb: "Our most common setup: a full editorial program with a named editor.",
		includes: ["4 long-form articles a month", "2 case studies a month", "Named managing editor", "Brand style guide", "Monthly planning call"],
		featured: true,
	},
	{
		name: "Embedded",
		price: "$18,500",
		blurb: "For companies that want a content team without hiring one.",
		includes: ["6 articles a month", "2 case studies and 1 white paper a quarter", "Editor in your Slack", "Weekly standup", "Quarterly performance report"],
		featured: false,
	},
];

const PROJECTS = [
	["Customer case study", "$4,200", "Interview, web story, one-page PDF"],
	["Case study bundle (3)", "$11,400", "Same as above, booked together"],
	["White paper or buyer guide", "$9,800", "Up to 4 SME interviews, 2,500–5,000 words"],
	["Comparison pages (set of 4)", "$8,600", "Research, writing, one refresh"],
];

export default function Pricing() {
	return (
		<>
			<section className="section">
				<p className="eyebrow">Pricing</p>
				<h1>Monthly retainers</h1>
				<p className="lede">
					Three-month minimum, then month to month. Unused pieces roll over for one month.
					Every retainer includes interviews, editing, and one round of revisions per piece.
				</p>
				<div className="grid3">
					{RETAINERS.map((r) => (
						<div key={r.name} className={r.featured ? "card card--featured" : "card"}>
							<h3>{r.name}</h3>
							<p>{r.blurb}</p>
							<p className="price">
								{r.price} <small>/ month</small>
							</p>
							<ul className="checklist">
								{r.includes.map((i) => (
									<li key={i}>{i}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			<section className="section">
				<h1>Single projects</h1>
				<p>
					Not ready for a retainer? Most clients start with a case study bundle and move to a
					retainer once they've seen three finished stories.
				</p>
				<table className="table">
					<thead>
						<tr>
							<th>Project</th>
							<th>Price</th>
							<th>What's included</th>
						</tr>
					</thead>
					<tbody>
						{PROJECTS.map(([name, price, desc]) => (
							<tr key={name}>
								<td>{name}</td>
								<td>{price}</td>
								<td>{desc}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			<section className="section">
				<h2>Questions</h2>
				<h3>Do you charge for customer recruiting?</h3>
				<p>
					No. If a customer drops out after agreeing to an interview, we find a replacement with
					your CSM at no extra cost.
				</p>
				<h3>Who owns the work?</h3>
				<p>You do, in full, on payment. We ask to list the client name on our work page, and you can say no.</p>
				<h3>Can we pause a retainer?</h3>
				<p>Once a year, for up to a month, with two weeks' notice.</p>
				<p>
					<Link to="/contact">Ask for a scoped quote</Link> and we'll reply within two business
					days.
				</p>
			</section>
		</>
	);
}
