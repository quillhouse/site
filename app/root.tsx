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

export const links: Route.LinksFunction = () => [
	{ rel: "icon", href: "/logo.svg", type: "image/svg+xml" },
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
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
