import { makeBid } from "../../api/auctions/makeBid.mjs";
import { API_AUCTION_URL } from "../../api/constants.mjs";

const bidsUrl = "/bids";
const listingsURL = "/listings/";
const listingsUrl = API_AUCTION_URL + listingsURL;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export async function bidListener() {
  try {
    const bidInput = document.querySelector("#bid-amount");
    const bidButton = document.querySelector("#makeBid-button");
    const messageDiv = document.querySelector("#message"); 

    bidButton.addEventListener("click", async () => {
      const newBid = parseFloat(bidInput.value);
      if (!isNaN(newBid) && newBid >= 0) {
        try {
          const response = await fetch(listingsUrl + id + bidsUrl);
          const result = await response.json();
          let lastBid = 0;

          if (result.bids && result.bids.length > 0) {
            const lastBidIndex = result.bids[result.bids.length - 1];
            lastBid = lastBidIndex.amount;
          }

          if (newBid > lastBid) {
            await makeBid(id, newBid);
            console.log(`Bid of ${newBid} successfully placed.`);

            bidInput.value = "";

            messageDiv.innerHTML = "Bid Placed Successfully";

            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else {
            messageDiv.innerHTML = "Bid must be higher than the last bid.";
          }
        } catch (error) {
          messageDiv.innerHTML = "Error placing bid: " + error.message;
          console.error("Error placing bid:", error);
        }
      } else {
        messageDiv.innerHTML = "Invalid bid amount.";
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}





