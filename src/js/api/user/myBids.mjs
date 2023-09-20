import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import * as storage from "../../services/index.mjs";

const action = "/profiles/{name}/bids"; 
const method = "get";

export async function getMyBids() {
  const userProfile = storage.load('profile');
  const username = userProfile.name; 
  const extraFlag = "?_listings=true";
  const myProfileBidsFlagURL = `${API_AUCTION_URL}${action.replace('{name}', username)}${extraFlag}`; 

  const response = await authFetch(myProfileBidsFlagURL, {
    method
  });

  const json = await response.json();

  if (response.ok) {
    return json;
  }

  console.log(json);

  throw new Error(json.errors[0].message);
}

