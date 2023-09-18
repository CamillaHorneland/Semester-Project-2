import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import * as storage from "../../services/index.mjs";

const action = "/profiles/<name>";
const method = "get";

export async function getMyProfile() {
    const username = storage.load('profile').name;
    const updateAuctionProfileURL = `${API_AUCTION_URL}${action}`.replace('<name>', username);
    
    const response = await authFetch(updateAuctionProfileURL, {
        method
    });
    console.log(updateAuctionProfileURL);

    if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const json = await response.json();
            console.log("Profile data:", json);
            return json;
        } else {
            console.error("Server response is not JSON");
            throw new Error("Server response is not JSON");
        }
    } else {
        const json = await response.json();
        console.error("Error with avatar update:", json.errors[0].message);
        throw new Error(json.errors[0].message);
    }
}


