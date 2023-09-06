import * as storage from "../services/index.mjs";

export function isLoggedIn() {
	return storage.get("token") ? true : false;
}