import { search } from '../../api/index.mjs';
import displaySearchResults from '../../ui/search/dispalySearchResults.mjs';
import hideSearchResults from '../../ui/search/hideSearch.mjs';
import debounce from "../../helpers/debounce.mjs";

export default function handleSearch() {
	const input = document.querySelector("#search");

	input.addEventListener("input", debouncedSearch);
}

const debouncedSearch = debounce(doSearch, 500);

async function doSearch(event) {
	const tag = event.target.value.trim();

	if (tag.length < 3) {
		return hideSearchResults();
	}

	try {
		const results = await search(tag);
		console.log(results);
		displaySearchResults(results);
	} catch (err) {
		console.log(err);
		displaySearchError();
	}
}










