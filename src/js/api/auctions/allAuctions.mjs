import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";

export async function getAllAuctions() {
 
  const updateAllAutionsURL = `${API_AUCTION_URL}${action}`;

    try {
    const response = await authFetch(updateAllAutionsURL);
    
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      const json = await response.json();
      throw new Error(json.errors[0].message);
    }
  } catch (error) {
    throw new Error("Failed to fetch auctions: " + error.message);
  }
}
