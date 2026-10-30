import { Link } from "react-router";
import type { Route } from "./+types/team";
import { canonical, pageTitle } from "../lib/site";

export const meta: Route.MetaFunction = () => [
	{ title: pageTitle("Our work") },
	{
		name: "description",
		content:
			"Meet the editors, writers and interviewers at Quillhouse, a fourteen-person B2B content studio founded in Portland, Oregon in 2018.",
	},
	canonical("/team"),
];

const PEOPLE = [
	{ name: "Maren Holt", role: "Founder & Editorial Director", bio: "Spent eight years as a business reporter at the Oregonian, then ran content at a payments startup before starting Quillhouse." },
	{ name: "Desmond Achebe", role: "Managing Editor", bio: "Runs the editorial calendar for our retainer clients and edits every piece before it leaves the building." },
	{ name: "Lucía Ferreira", role: "Senior Writer, Case Studies", bio: "Has interviewed more than 300 customers across fintech, logistics and healthcare. Can make a CFO laugh on a recorded call." },
	{ name: "Tom Brandvold", role: "Senior Writer, Technical", bio: "A former solutions engineer who writes the white papers that security and infrastructure buyers actually read." },
	{ name: "Hana Oyelaran", role: "Client Lead", bio: "Your first call and your weekly one. Keeps scopes honest and approvals moving." },
	{ name: "Kit Larsen", role: "Designer", bio: "Turns finished stories into the one-page PDFs and deck slides your sales team asks for." },
];

export default function Team() {
	return (
		<>
			<section className="section">
				<p className="eyebrow">Team</p>
				<h1>Fourteen editors, writers and interviewers. No account managers in between.</h1>
				<p className="lede">
					Maren Holt founded Quillhouse in 2018 after years of watching good B2B companies
					publish forgettable content. We are fourteen people now, most of us former
					journalists, and the person who interviews your customer is the person who writes
					the story.
				</p>
				<img className="figure" src="/illustrations/team.svg" width="640" height="280" />
			</section>

			<section className="section">
				<h2>The people you'll work with</h2>
				<div className="grid3">
					{PEOPLE.map((p) => (
						<div key={p.name} className="card">
							<h3>{p.name}</h3>
							<p className="role">{p.role}</p>
							<p>{p.bio}</p>
						</div>
					))}
				</div>
			</section>

			<section className="section">
				<h2>How we work</h2>
				<ul className="checklist">
					<li>Every interview is run by the writer, never outsourced.</li>
					<li>Every number in a draft links back to a transcript timestamp or a source.</li>
					<li>We don't use AI to write drafts; we do use it to search transcripts.</li>
					<li>Fully remote across Oregon and Washington, with a studio in Portland's Buckman neighborhood.</li>
				</ul>
				<p>
					We're hiring a senior writer with a fintech background.{" "}
					<Link to="/contact">Get in touch</Link> if that's you.
				</p>
			</section>
		</>
	);
}
