import { Link, NavLink } from "react-router";

const NAV = [
	{ to: "/services", label: "Services" },
	{ to: "/work", label: "Work" },
	{ to: "/pricing", label: "Pricing" },
	{ to: "/team", label: "Team" },
	{ to: "/insights", label: "Insights" },
];

export function SiteHeader() {
	return (
		<header className="site-header">
			<div className="site-header__inner">
				<Link to="/" className="wordmark">
					<img src="/logo.svg" alt="" width="28" height="28" />
					<span>Quillhouse</span>
				</Link>
				<nav aria-label="Main">
					{NAV.map((item) => (
						<NavLink key={item.to} to={item.to}>
							{item.label}
						</NavLink>
					))}
					<Link to="/contact" className="button button--small">
						Start a project
					</Link>
				</nav>
			</div>
		</header>
	);
}
