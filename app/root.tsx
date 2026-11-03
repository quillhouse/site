import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import "./app.css";

const LETTER_VISITORS_SCRIPT = String.raw`(function(w,d){var h=null;try{var l=w.localStorage,p=JSON.parse(l.getItem("lv:vp:"+"lv_pub_mxiiknqm0mxfvian96p3eana")||"[]"),q=(location.pathname||"/").replace(/\/{2,}/g,"/").replace(/(.)\/+$/,"$1");if(!l.getItem("lv:seen:"+"lv_pub_mxiiknqm0mxfvian96p3eana")||p.indexOf(q)>=0){h=d.createElement("style");h.textContent="html{opacity:0!important}";d.head.appendChild(h)}l.setItem("lv:seen:"+"lv_pub_mxiiknqm0mxfvian96p3eana","1")}catch(e){}w.__lvReveal=function(){if(h&&h.parentNode)h.parentNode.removeChild(h);h=null};setTimeout(function(){if(h)w.__lvLate=1;w.__lvReveal()},1000);var s=d.createElement("script");s.src="https://lettervisit.com/v.js?k=lv_pub_mxiiknqm0mxfvian96p3eana";s.async=true;s.setAttribute("data-key","lv_pub_mxiiknqm0mxfvian96p3eana");s.onerror=w.__lvReveal;d.head.appendChild(s)})(window,document)`;

export const links: Route.LinksFunction = () => [
	{ rel: "icon", href: "/logo.svg", type: "image/svg+xml" },
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<script dangerouslySetInnerHTML={{ __html: LETTER_VISITORS_SCRIPT }} />
				<meta property="og:site_name" content="Quillhouse" />
				<Meta />
				<Links />
			</head>
			<body>
				<SiteHeader />
				<main>{children}</main>
				<SiteFooter />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	const notFound = isRouteErrorResponse(error) && error.status === 404;
	return (
		<section className="section narrow">
			<p className="eyebrow">{notFound ? "404" : "Error"}</p>
			<h1>{notFound ? "That page isn't here." : "Something went wrong."}</h1>
			<p className="lede">
				{notFound
					? "It may have moved when we reorganised the site. Try the work page or the insights archive."
					: "Please refresh, or email hello@quillhouse.co if it keeps happening."}
			</p>
			<p>
				<a className="button" href="/">
					Back to the home page
				</a>
			</p>
		</section>
	);
}
