export const ssr = false;

import { BACKEND_URL } from '$lib/constants';

export async function load() {
	const url = `${BACKEND_URL}/images`;
	const res = await fetch(url);
	const data = await res.json();
	console.log(JSON.stringify(data));

	return { images: data.images };
}
