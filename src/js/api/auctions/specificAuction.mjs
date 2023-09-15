import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "get";

export async function getSpecificAuction(id) {
  if (!id) {
    throw new Error("Listings requires a auctionID");
  }

  const extraFlag = "?_bids=true&_seller=true";
  
  const specificAuctionURL = `${API_AUCTION_URL}${action}/${id}${extraFlag}`;
   
 const response = await authFetch(specificAuctionURL, {
    method
  });

  const json = await response.json();

    if(response.ok) {
      
    return json;
  }

  console.log(json)

  throw new Error(json.errors[0].message);

}







