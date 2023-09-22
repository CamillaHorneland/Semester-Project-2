import { search } from '../../api/index.mjs';
import displayMessage from "../../ui/common/displayMessage.mjs";
import displaySearchResults from '../../ui/search/dispalySearchResults.mjs';
import hideSearchResults from '../../ui/search/hideSearch.mjs';

export default function handleSearch() {
  const input = document.querySelector('#search');

  input.addEventListener('input', doSearch);
}

async function doSearch(event) {
  const tag = event.target.value.trim();

  if (tag.length < 3) {
    return hideSearchResults();
  }

  try {
    const results = await search(tag);

    displaySearchResults(results);
  } catch (error) {
    displayMessage("danger", error, "#message");
    console.log(error);
  }
} 










