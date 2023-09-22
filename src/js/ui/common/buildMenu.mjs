import { isLoggedIn } from "../../storage/index.mjs";
import * as listeners from "../../listeners/index.mjs";
import handleSearch from "../../listeners/handelers/handleSearch.mjs";
import handleHideResultsOnDocumentClick from "../../listeners/handelers/hideSearchResults.mjs";

export default function buildMenu(pathname) {
  const menu = document.querySelector("#menu");
  if (isLoggedIn()) {
    menu.innerHTML += `
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <img src="/img/nav.png" alt="Toggle navigation" class="navbar-toggler-image">
      </button>
      <div class="collapse navbar-collapse navbar-center-bg" id="navbarNav">
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <a class="nav-link ${pathname === "/auction/allAuctions/" ? "active" : ""}" href="/auction/allAuctions/">Auctions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${pathname === "/profile/user/" ? "active" : ""}" href="/profile/user/">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${pathname === "profile/createAuction/" ? "active" : ""}" href="/profile/createAuction/">Create Auction</a>
          </li>
          <li class="nav-item">
            <a class="nav-link logoutLink">Log out</a>
          </li>
          <div class="containerSearch">
            <form class="d-flex" role="search">
					      <input class="form-control me-2 bg-white" type="search" placeholder="Search" aria-label="Search" id="search" list="searchResults" />
					      <div id="searchResults" class="search-results text-center"><div id="message"></div></div>
				    </form>
          </div>
        </ul>
      </div>`;

    listeners.setLogoutListener();
    
  } else {
    menu.innerHTML += `
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <img src="/img/nav.png" alt="Toggle navigation" class="navbar-toggler-image">
      </button>
      <div class="collapse navbar-collapse navbar-center-bg" id="navbarNav">
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <a class="nav-link ${pathname === "/auction/allAuctions/" ? "active" : ""}" href= "/auction/allAuctions/">Auctions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${pathname === "/profile/login/" ? "active" : ""}" href="/profile/login/">Log in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${pathname === "/profile/register/" ? "active" : ""}" href="/profile/register/">Register</a>
          </li>
          <div class="containerSearch">
            <form class="d-flex" role="search">
					      <input class="form-control me-2" type="search bg-white" placeholder="Search" aria-label="Search" id="search" list="searchResults" />
					      <div id="searchResults" class="search-results text-center"><div id="message"></div></div>
				    </form>
          </div>
        </ul>
      </div>`;
  }
  handleSearch();
  handleHideResultsOnDocumentClick();
}

    