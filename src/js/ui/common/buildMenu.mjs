import { isLoggedIn } from "../../storage/index.mjs";
import * as listeners from "../../listeners/index.mjs";

export default function buildMenu(pathname) {
	const menu = document.querySelector("#menu");
	if (isLoggedIn()) {
		menu.innerHTML += `<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="/img/nav.png" alt="Toggle navigation" class="navbar-toggler-image">
                </button>
                <div class="collapse navbar-collapse navbar-center-bg" id="navbarNav">
                    <ul class="navbar-nav text-center">
                <li class="nav-item">
                            <a class="nav-link" ${pathname === "/" || pathname ==="/index.html" ? "active" :""}" href="/">Auctions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" ${pathname === "/" || pathname ==="/profile/user/index.html" ? "active" : ""}" href="/profile/user/index.html">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" ${pathname === "/" || pathname ==="/profile/createAuction/index.html" ? "active" : ""}" href="/profile/createAuction/index.html">href="">Create aution</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link logoutLink">Log out</a>
                        </li>
                          <div class="containerSearch">
                             <form class="d-flex" id="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-secondary searchBtn" type="submit">Search</button>
                             </form>
                        </div>
                    </ul>
                        </div>`;

		listeners.setLogoutListener();
	} else {
		menu.innerHTML += `<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="/img/nav.png" alt="Toggle navigation" class="navbar-toggler-image">
                </button>
                <div class="collapse navbar-collapse navbar-center-bg" id="navbarNav">
                    <ul class="navbar-nav text-center">
                    <li class="nav-item">
                            <a class="nav-link" ${pathname === "/" || pathname ==="/index.html" ? "active" :""}" href="/">Auctions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" ${pathname === "/profile/login/" ? "active" : ""}" href="/profile/login/index.html">Log in</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" ${pathname === "/profile/register/" ? "active" : ""}" href="/profile/register/index.html">Register</a>
                        </li>
                         <div class="containerSearch">
                             <form class="d-flex" id="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-secondary searchBtn" type="submit">Search</button>
                             </form>
                        </div>
                    </ul>
                        </div>`;
	}
}