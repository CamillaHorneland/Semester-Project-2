import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs"

const action = "/listings";
const method = "post";

export async function createAuction(auctionData) {
  const createAuctionURL = API_AUCTION_URL + action;
  const body = JSON.stringify(auctionData);
  
  const response = await authFetch(createAuctionURL, {
    method,
    body,
  });

  const json = await response.json(); 

  if(response.ok) {
    return json;
  }

  console.log(json)

  throw new Error(json.errors[0].message);

}