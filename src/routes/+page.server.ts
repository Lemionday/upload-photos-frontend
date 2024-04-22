import { fail } from '@sveltejs/kit';
import { BACKEND_URL } from '$lib/constants';

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		if (
			!(formData.fileToUpload as File).name ||
			(formData.fileToUpload as File).name === 'undefined'
		) {
			return fail(400, {
				error: true,
				message: 'You must provide a file to upload'
			});
		}

		const { fileToUpload } = formData as { fileToUpload: File };

		const payload = new FormData();
		payload.append('image', fileToUpload);
		const res = await fetch(BACKEND_URL, {
			method: 'POST',
			body: payload
		});

		return {
			success: res.ok
		};
	}
};
