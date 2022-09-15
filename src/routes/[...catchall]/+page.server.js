import { getContent, getBuilderSearchParams, getAllContent } from '@builder.io/sdk-svelte';
import { BUILDER_PUBLIC_API_KEY } from '../../apiKey';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	// fetch your Builder content
	const content = await getContent({
		model: 'page',
		apiKey: BUILDER_PUBLIC_API_KEY,
		options: getBuilderSearchParams(event.url.searchParams),
		userAttributes: {
			urlPath: event.url.pathname || '/'
		}
	});
	const links = await getAllContent({
		model: 'nav-link',
		// You can use options for queries, sorting, and targeting here
		// https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
	});
	
	return { links, content }

	// return { content };
}
