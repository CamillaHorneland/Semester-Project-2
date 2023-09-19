import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import * as storage from "../../services/index.mjs";

const action = "/profiles/{name}/listings"; 

export async function getMyListings() {
  const username = storage.load('profile').name;
  const myProfileListingsURL = `${API_AUCTION_URL}${action}`.replace('{name}', username); 

  const response = await authFetch(myProfileListingsURL);

  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    const errorJson = await response.json();
    throw new Error(errorJson.errors[0].message);
  }
}
