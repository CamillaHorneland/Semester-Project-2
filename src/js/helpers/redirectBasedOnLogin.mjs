import { isLoggedIn } from "../storage/index.mjs";

export function redirectBasedOnLogin(pathname) {
	if (isLoggedIn()) {
		if (pathname === "/profile/login/index.html" || pathname === "/profile/register/index.html") {
			location.href = "/index.html";
		}
	} else {
		if (pathname === "/index.html" || pathname === "/index.html") {
			location.href = "/index.html";
		}
	}
}