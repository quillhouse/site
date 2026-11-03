import { marked } from "marked";

export type GlossaryTerm = {
	slug: string;
	term: string;
	summary: string;
	metaDescription: string;
	related: string[];
	bodyHtml: string;
};

type GlossaryEntry = Omit<GlossaryTerm, "bodyHtml"> & { body: string };

const ENTRIES: GlossaryEntry[] = [
	{
		slug: "customer-case-study",
		term: "Customer case study",
		summary:
			"A customer's account of the problem they had, the choice they made and what changed, with a real number to back it up.",
		metaDescription:
			"What a B2B customer case study is, what makes one worth sending, and the formats a sales team needs from it.",
		related: ["subject-matter-expert-interview", "sales-enablement-content"],
		body: `
## What it is

A customer case study is a short story, told largely in a named customer's own words, about a specific problem, the decision they made and the result they got. It is the piece a buyer is most likely to forward to whoever signs the budget, because it is evidence from someone in their position rather than a claim from the vendor.

## What makes a good one

- **A real number in the headline.** "Cut month-end close from nine days to four" does more work than "streamlined finance operations."
- **The customer's own words.** Quotes come from a recorded interview, not from a draft the customer is asked to rubber-stamp.
- **One problem, told well.** A case study that tries to cover every feature reads like a brochure.
- **Sign-off before publication.** The customer approves the final text, including every figure and quote, before it goes anywhere public.

## The formats it needs

A web page is only one use. Sales teams also need a one-page PDF they can attach to an opportunity and a few short quotes they can drop into a deck. Planning those at the interview stage saves a second round of approvals later.

## How we write them

We run a 40-minute recorded interview with the customer and deliver a web story, a one-page PDF and three pull quotes cleared for sales decks, with a customer approval round before anything is published. See [our services](/services) for the full scope.
`,
	},
	{
		slug: "white-paper",
		term: "White paper",
		summary:
			"A long-form piece that makes a clear argument about a problem your buyers have, built on evidence and expertise rather than a product pitch.",
		metaDescription:
			"What a B2B white paper is, when buyers read one, and why the strongest ones are built on interviews with your own experts.",
		related: ["subject-matter-expert-interview", "sales-enablement-content"],
		body: `
## What it is

A white paper is a long-form document that takes a position on a problem your buyers are trying to solve and backs it up. It is read later in a purchase, often by several people on a buying committee, so it has to hold up to a skeptical, careful reader.

## Where it earns its place

- **Explaining a hard decision.** How to evaluate an approach, what the trade-offs are, what to ask a vendor.
- **Arming an internal champion.** Something your contact can circulate to colleagues who never sat in on a demo.
- **Gated or ungated.** Either can work. What matters is whether the content is worth someone's time once they have it.

## Primary versus secondary research

Most white papers are assembled from what already ranks: other people's reports, statistics and blog posts. Those are easy to produce and easy to ignore. A white paper built on interviews with your own product, security or solutions people says something a competitor's content team could not write, which is the whole point.

## How we write them

Ours usually run 2,500 to 5,000 words and are built on up to four interviews with your subject-matter experts. We write an outline first, you approve it, and then we write the full draft, with two rounds of edits. See [our services](/services) for details.
`,
	},
	{
		slug: "subject-matter-expert-interview",
		term: "Subject-matter expert (SME) interview",
		summary:
			"A structured, recorded conversation with the person who knows a topic best, used as the source material for a piece of content.",
		metaDescription:
			"What a subject-matter expert (SME) interview is, how to prepare for one, and how it turns into credible B2B content.",
		related: ["white-paper", "customer-case-study"],
		body: `
## What it is

A subject-matter expert interview is a conversation with the person inside a company, or at a customer, who knows a topic first-hand: an engineer, a support lead, a security architect, a customer's operations manager. It is recorded and transcribed so the writing can quote it accurately and every claim can be checked against what was actually said.

## Why it matters

Experts rarely have time to write, and what they know is usually the most valuable thing a company can publish. The interview is how that knowledge gets out of their head and onto the page without them drafting a word. Everything downstream depends on asking the right questions of the right people.

## Preparing for one

- **Agree the one claim the piece has to prove** before choosing who to talk to.
- **Pick the right person,** not the most senior one. The best source is whoever does the work.
- **Write a question set** that asks for specifics: examples, numbers, mistakes, what they would tell a peer.

## After the interview

Share the transcript with the client the same day, draft from it, and tie every number in the draft back to a point in the recording. The expert then reviews the draft for accuracy before it is published.

## How we run them

We run every interview ourselves, record it and share the transcript the same day. Read how a project runs on [our services page](/services).
`,
	},
	{
		slug: "sales-enablement-content",
		term: "Sales enablement content",
		summary:
			"The material sales reps send to prospects or use in conversations to move a deal forward, from case studies and one-pagers to comparison pages.",
		metaDescription:
			"What counts as sales enablement content in B2B, how to tell whether it is working, and why the test is whether reps actually send it.",
		related: ["customer-case-study", "white-paper"],
		body: `
## What it is

Sales enablement content is anything a sales team uses to help a buyer decide: customer case studies, one-page PDFs, comparison and alternatives pages, white papers, and answers to the objections that come up on every call. It is written for the deal room first and for search second.

## The test that matters

Content that sales teams never send is a waste of budget, no matter how well it is written. The simplest check is to ask reps which pieces they actually attach to emails and opportunities, and which they have stopped using. The answers usually show where the gaps are.

## What makes reps use it

- **It answers a question buyers actually ask.** Start from recorded calls and lost-deal notes, not from a list of topics.
- **It is specific.** A named customer, a real number and a clear comparison are easier to send than a general overview.
- **It is easy to find and share.** A short PDF or a single link beats a long page a rep has to excerpt.

## Measuring it

Marketing teams can track which pieces are attached to opportunities in the CRM and how those deals progress. That is a better signal of value than page views alone.
`,
	},
	{
		slug: "content-retainer",
		term: "Content retainer",
		summary:
			"An ongoing arrangement where an agency produces an agreed amount of content each month for a set monthly fee.",
		metaDescription:
			"What a content retainer is, how it differs from project work, and the questions to ask before signing one with a B2B content agency.",
		related: ["sales-enablement-content", "customer-case-study"],
		body: `
## What it is

A content retainer is a standing agreement with an agency to produce a set amount of content every month, such as a number of articles or case studies, for a fixed monthly fee. Instead of scoping and approving every piece as a separate project, the team plans a calendar together and the agency works through it.

## Retainer or project?

A single project suits a one-off need: one white paper, a set of comparison pages, a first batch of case studies. A retainer suits teams that need a steady supply of content and want the same editors to learn their product, customers and voice over time.

## What to ask before you sign

- **What is the minimum term,** and what happens after it?
- **What happens to pieces you don't use** in a given month?
- **What does each piece include:** interviews, editing, revision rounds?
- **Who is your editor,** and will that person stay on the account?
- **How is the work reported,** and how often do you plan together?

## How ours work

Our retainers have a three-month minimum, then run month to month. Unused pieces roll over for one month, and every retainer includes interviews, editing and one round of revisions per piece. See [retainers and pricing](/pricing) for what each level includes.
`,
	},
];

const TERMS: GlossaryTerm[] = ENTRIES.map(({ body, ...entry }) => ({
	...entry,
	bodyHtml: marked.parse(body.trim(), { async: false }),
})).sort((a, b) => a.term.localeCompare(b.term));

export function getTerms(): GlossaryTerm[] {
	return TERMS;
}

export function getTerm(slug: string): GlossaryTerm | undefined {
	return TERMS.find((t) => t.slug === slug);
}

export function getTermSlugs(): string[] {
	return TERMS.map((t) => t.slug);
}
