import { Link } from "react-router";
import type { Route } from "./+types/home";
import { canonical } from "../lib/site";

export const meta: Route.MetaFunction = () => [
	{ title: "Quillhouse — B2B content that sales teams actually use" },
	{
		name: "description",
		content:
			"Quillhouse is a Portland content agency writing case studies, white papers and editorial programs for B2B software and services companies.",
	},
	canonical("/"),
];

const PROOF = [
	{ figure: "212", label: "customer case studies shipped" },
	{ figure: "38", label: "B2B clients on retainer since 2018" },
	{ figure: "11 days", label: "median from interview to approved draft" },
];

const CLIENTS = ["Ledgerline", "Northpass Freight", "Corvid Security", "Tallyworks", "Haldane Health", "Brightmesh"];

export default function Home() {
	return (
		<>
			<section className="hero">
				<div className="hero__copy">
					<p className="eyebrow">B2B content agency · Portland, OR</p>
					<h1>Case studies and long-form content your sales team will actually send.</h1>
					<p className="lede">
						We interview your customers, your engineers and your skeptics, then write the
						stories that move deals forward: case studies, white papers, comparison pages and
						a blog worth subscribing to.
					</p>
					<p className="hero__actions">
						<Link to="/contact" className="button">
							Book an intro call
						</Link>
						<Link to="/work" className="button button--ghost">
							See the work
						</Link>
					</p>
					<p className="small">Monthly retainers from $6,500. No long-term contracts.</p>
				</div>
				<img
					className="hero__art"
					src="/illustrations/hero.svg"
					alt="A stack of manuscript pages with a fountain pen resting on top"
				/>
			</section>

			<section className="section">
				<div className="stats">
					{PROOF.map((p) => (
						<div key={p.label} className="stat">
							<span className="stat__figure">{p.figure}</span>
							<span className="stat__label">{p.label}</span>
						</div>
					))}
				</div>
			</section>

			<section className="section">
				<h2>What we write</h2>
				<div className="grid3">
					<div className="card">
						<h3>Customer case studies</h3>
						<p>
							Forty-minute customer interviews turned into a 900-word story with a number in
							the headline, a pull quote legal has already approved, and a one-page PDF for
							the deal room.
						</p>
					</div>
					<div className="card">
						<h3>White papers &amp; guides</h3>
						<p>
							Gated or ungated, built on interviews with your own subject-matter experts so
							the piece says something a competitor's content team couldn't.
						</p>
					</div>
					<div className="card">
						<h3>Editorial programs</h3>
						<p>
							A standing calendar of two to six articles a month, edited to one voice, with
							briefs your team signs off before anyone writes a word.
						</p>
					</div>
				</div>
				<p>
					<Link to="/services">Everything we offer →</Link>
				</p>
			</section>

			<section className="section">
				<h2>Teams we write for</h2>
				<ul className="logo-row">
					{CLIENTS.map((c) => (
						<li key={c}>{c}</li>
					))}
				</ul>
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
