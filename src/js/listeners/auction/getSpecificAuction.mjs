import { getSpecificAuction } from "../../api/index.mjs";
import { renderSpecificAuctionTemplate } from "../../templates/singleAuction.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function displaySingleAuctionListener() {
  console.log(location);
  const specificAuctionContainer = document.getElementById("spesificAuctions");

  try {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    
    if (!id) {
      throw new Error("Listings require an auctionID");
    }

    const specificAuctionData = await getSpecificAuction(id);

    if (specificAuctionData) {
      renderSpecificAuctionTemplate([specificAuctionData], specificAuctionContainer);
    } else {
      throw new Error("Unable to retrieve specific auction data.");
    }

    console.log(specificAuctionData);
  } catch (error) {
    displayMessage("danger", error, "#message");
    console.error(error);
  }
}


      
