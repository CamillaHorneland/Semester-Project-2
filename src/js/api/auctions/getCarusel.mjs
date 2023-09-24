import { API_AUCTION_URL, AUCTIONS_LIMIT } from "../constants.mjs";
import { authFetch } from "../authfetch.mjs";

const action = "/listings";

export async function getCarousel() {
 
  const updateCarouselURL = `${API_AUCTION_URL}${action}?limit=${AUCTIONS_LIMIT}`;

    try {
    const response = await authFetch(updateCarouselURL);
    
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