import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "post";

export async function makeBid(id, bid, token) {
  if (!id) {
    throw new Error("Auction ID is required to make a bid");
  }

  const bidAuctionURL = `${API_AUCTION_URL}${action}/${id}/bids`;

  const response = await authFetch(bidAuctionURL, {
    method,
    body: JSON.stringify({ amount: bid }),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await response.json();

  if (response.ok) {
    return json;
  }

  console.log(json);

  throw new Error(json.errors[0].message);
}
