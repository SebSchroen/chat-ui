import { writable } from "svelte/store";
export interface WebSearchParameters {
	useSearch: boolean;
	nItems: number;
	googleSearchIsOn: boolean;
}
export const webSearchParameters = writable<WebSearchParameters>({
	useSearch: false,
	nItems: 5,
	googleSearchIsOn: false,
});
