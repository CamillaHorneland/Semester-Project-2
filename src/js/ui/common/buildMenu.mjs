import { isLoggedIn, getProfile } from "../../services/index.mjs";
import * as listeners from "../../listeners/index.mjs";

export default function buildMenu(pathname) {
	const menu = document.querySelector("#menu");
	if (isLoggedIn()) {
		const name = getProfile();

		menu.innerHTML += `<li class="nav-item">
                            <a class="nav-link" ${pathname === "/" || pathname ==="/index.html" ? "active" :""}"> href="/">Auctions</a>
                        </li>
                        <li class="nav-item" id="logedin">
                            <a class="nav-link" ${pathname === "/" || pathname ==="/profile/user/index.html" ? "active" : ""}" href="/profile/user/index.html">Profile</a>
                        </li>
                        <li class="nav-item" id="logedin">
                            <a class="nav-link" ${pathname === "/" || pathname ==="/profile/createAuction/index.html" ? "active" : ""}" href="/profile/createAuction/index.html">href="">Create aution</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link logoutLink">Log out ${name}</a>
                        </li>`;

		listeners.setLogoutListener();
	} else {
		menu.innerHTML += `<li class="nav-item">
                            <a class="nav-link" ${pathname === "/" || pathname ==="/index.html" ? "active" :""}"> href="/">Auctions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" ${pathname === "/profile/login/index.html" ? "active" : ""}" href="/profile/login.html">Log in</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" ${pathname === "/profile/register/index.html" ? "active" : ""}" href="/profile/register.html">Register</a>
                        </li>`;
	}
}