import type { Route } from "./+types/contact";
import { canonical, pageTitle } from "../lib/site";

export const meta: Route.MetaFunction = () => [
	{ title: pageTitle("Contact") },
	canonical("/contact"),
];

export default function Contact() {
	return (
		<section className="section two-col">
			<div>
				<p className="eyebrow">Contact</p>
				<h1>Tell us about the story you want told.</h1>
				<p className="lede">
					A sentence or two is plenty. Hana or Maren will reply within two business days with
					a few questions and a time for a 30-minute intro call.
				</p>
				<dl className="contact-list">
					<dt>Email</dt>
					<dd>
						<a href="mailto:hello@quillhouse.co">hello@quillhouse.co</a>
					</dd>
					<dt>Phone</dt>
					<dd>(503) 555-0148, weekdays 9–5 Pacific</dd>
					<dt>Studio</dt>
					<dd>
						1120 SE Morrison St, Suite 300
						<br />
						Portland, OR 97214
					</dd>
				</dl>
			</div>
			<form className="form" action="mailto:hello@quillhouse.co" method="post" encType="text/plain">
				<label>
					Your name
					<input name="name" required autoComplete="name" />
				</label>
				<label>
					Work email
					<input name="email" type="email" required autoComplete="email" />
				</label>
				<label>
					Company
					<input name="company" autoComplete="organization" />
				</label>
				<label>
					What do you need?
					<select name="interest" defaultValue="Case studies">
						<option>Case studies</option>
						<option>White paper or guide</option>
						<option>Editorial retainer</option>
						<option>Not sure yet</option>
					</select>
				</label>
				<label>
					Anything else we should know?
					<textarea name="message" rows={5} />
				</label>
				<button className="button" type="submit">
					Send
				</button>
			</form>
		</section>
	);
}
