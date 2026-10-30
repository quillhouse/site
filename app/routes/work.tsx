import { Link } from "react-router";
import type { Route } from "./+types/work";
import { canonical, pageTitle } from "../lib/site";

export const meta: Route.MetaFunction = () => [
	{ title: pageTitle("Our work") },
	{
		name: "description",
		content:
			"Selected case studies and editorial programs Quillhouse has written for Ledgerline, Northpass Freight, Corvid Security and Tallyworks, with the results they drove.",
	},
	canonical("/work"),
];

const STUDIES = [
	{
		client: "Ledgerline",
		sector: "Accounts-payable automation",
		headline: "Nine customer stories in one quarter, and a sales team that finally uses them",
		body: "Ledgerline's sales team had two case studies, both from 2021. We interviewed nine customers in eleven weeks, from a 40-person HVAC distributor to a regional hospital system, and built a library sorted by industry and ERP. Every story leads with a number the customer signed off on.",
		result: "Case studies attached to 140 opportunities in the first year; win rate on deals with one attached rose from 21% to 29%.",
	},
	{
		client: "Northpass Freight",
		sector: "Freight brokerage software",
		headline: "A white paper the carrier-relations team asks for by name",
		body: "We spent two days with Northpass's carrier-relations and compliance leads and wrote 'Double brokering, explained for shippers', a 4,200-word guide with a checklist that their reps now leave behind after every first meeting.",
		result: "1,860 downloads in six months, 31% from target accounts; the guide was so well recieved that two freight trade associations now link to it.",
	},
	{
		client: "Corvid Security",
		sector: "Endpoint security",
		headline: "Comparison pages that survive a procurement review",
		body: "Corvid's buyers were comparing them against three larger vendors using third-party listicles. We wrote six comparison pages from public documentation and Corvid's own benchmark results, each reviewed by their product marketing and legal teams.",
		result: "The comparison pages became the second-largest source of demo requests within two quarters.",
	},
	{
		client: "Tallyworks",
		sector: "Field-service management",
		headline: "Four articles a month, one voice, for three years",
		body: "Tallyworks has been on an editorial retainer since 2022. A named editor runs the calendar, interviews their technicians and dispatchers, and keeps the blog sounding like one person wrote it.",
		result: "Organic sign-ups from the blog up 3.4× since the program began.",
	},
];

export default function Work() {
	return (
		<>
			<section className="section">
				<p className="eyebrow">Work</p>
				<h1>Stories that ended up in the deal room.</h1>
				<p className="lede">
					A few of the programs we can talk about publicly. Most of our clients let us share
					the work; a handful of security and healthcare clients don't, and we respect that.
				</p>
				<img
					className="figure"
					src="/illustrations/work-chart.svg"
					alt="Bar chart showing win rate on deals with a case study attached rising from 21 to 29 percent"
					width="640"
					height="300"
				/>
			</section>

			{STUDIES.map((s) => (
				<section key={s.client} className="section study">
					<p className="eyebrow">
						{s.client} · {s.sector}
					</p>
					<h2>{s.headline}</h2>
					<p>{s.body}</p>
					<p className="result">
						<strong>Result:</strong> {s.result}
					</p>
				</section>
			))}

			<section className="section cta">
				<h2>Want results like these?</h2>
				<p>Most engagements start with three case studies, so you can see how we work.</p>
				<Link to="/contact" className="button">
					Talk to us
				</Link>
			</section>
		</>
	);
}
