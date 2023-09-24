import hideSearchResults from "./hideSearch.mjs";
import { isLoggedIn } from "../../storage/index.mjs";

export default function displaySearchResults(results) {
  const resultsContainer = document.querySelector("#searchResults");
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    hideSearchResults();
    return;
  }

  results.forEach((result) => {
    const resultContainer = document.createElement("div");
    resultContainer.classList.add("result-container"); 

    const title = document.createElement("h3");
    title.innerText = result.title;

    const description = document.createElement("h4");
    description.innerText = `Description: ${result.description || "This is a cool item"}`;

    const media = document.createElement("div");
    media.classList.add("media");

    if (result.media) {
      const image = document.createElement("img");
      image.src = result.media;
      image.alt = `Image from ${result.title}`;
      image.onerror = function () {
        image.src = "/img/gavel.jpeg";
        image.alt = `Backup Image for ${result.title}`;
      };

      media.appendChild(image);
    } else {
      const backupImage = document.createElement("img");
      backupImage.src = "/img/gavel.jpeg";
      backupImage.alt = `Image from ${result.title}`;
      media.appendChild(backupImage);
    }

    resultContainer.appendChild(title);
    resultContainer.appendChild(description);
    resultContainer.appendChild(media);

    if (isLoggedIn()) {
      const seeBidsLink = document.createElement("a");
      seeBidsLink.id = "seeBids";
      seeBidsLink.href = `/auction/specificAuction/?id=${result.id}`;
      seeBidsLink.classList.add("btn", "btn-primary", "m-5", "w-50");

      const seeBidsText = document.createElement("h6");
      seeBidsText.innerText = "See bids";

      seeBidsLink.appendChild(seeBidsText);
      resultContainer.appendChild(seeBidsLink);
    } else {
      const loginLink = document.createElement("a");
      loginLink.id = "loginToView";
      loginLink.href = "/profile/login";
      loginLink.classList.add("btn", "btn-primary", "m-5", "w-50");
      loginLink.innerText = "Login to view bids";

      resultContainer.appendChild(loginLink);
    }

    resultsContainer.appendChild(resultContainer);
  });

  resultsContainer.style.display = "block";
}


