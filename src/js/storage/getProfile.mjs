import * as storage from "../services/index.mjs";

export function getProfile() {
	return storage.get("profile");
}