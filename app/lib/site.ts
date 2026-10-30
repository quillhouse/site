export const SITE_URL = "https://quillhouse.co";
export const SITE_NAME = "Quillhouse";

export function canonical(path: string) {
	return { tagName: "link", rel: "canonical", href: `${SITE_URL}${path}` } as const;
}

export function pageTitle(title: string) {
	return `${title} — ${SITE_NAME}`;
}
