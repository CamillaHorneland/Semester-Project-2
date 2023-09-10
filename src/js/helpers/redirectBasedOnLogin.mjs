import { isLoggedIn } from "../storage/index.mjs";

export function redirectBasedOnLogin(pathname) {
	if (isLoggedIn()) {
		console.log("Is logged in...");
		if (pathname === "/profile/login/" || pathname === "/profile/register/index.html") {
			//location.href = "/index.html";
		}
	} else {
		console.log("Not logged in...");
		if (pathname === "/index" || pathname === "/index.html") {
			//location.href = "/index.html";
		}
	}
}
