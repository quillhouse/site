import { Link } from "react-router";

export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="site-footer__inner">
				<div>
					<strong>Quillhouse</strong>
					<p>
						Case studies, white papers and editorial programs for B2B software and
						services companies.
					</p>
					<p>
						1120 SE Morrison St, Suite 300
						<br />
						Portland, OR 97214
					</p>
				</div>
				<div>
					<span className="site-footer__heading">What we do</span>
					<Link to="/services">Services</Link>
					<Link to="/work">Case studies</Link>
					<Link to="/pricing">Retainers &amp; pricing</Link>
				</div>
				<div>
					<span className="site-footer__heading">Studio</span>
					<Link to="/team">Team</Link>
					<Link to="/insights">Insights</Link>
					<Link to="/glossary">Glossary</Link>
					<Link to="/contact">Contact</Link>
				</div>
			</div>
			<p className="site-footer__legal">
				© {new Date().getFullYear()} Quillhouse Editorial LLC · hello@quillhouse.co ·
				(503) 555-0148
			</p>
		</footer>
	);
}
