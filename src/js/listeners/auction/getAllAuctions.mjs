import { renderAllAuctionsTemplates } from "../../templates/allAuctions.mjs";
import { toggleLoadingIndicator } from "../../helpers/toggleLodingIndicator.mjs";
import * as api from "../../api/auctions/allAuctions.mjs";
import { AUCTIONS_LIMIT } from "../../api/constants.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export function displayAllAuctions() {
  const auctionsContainer = document.getElementById("allAuctions");
  const auctionEnd = document.querySelector("#auction-end");

  let offset = 0;

  return async function listAuctions() {
		try {

			toggleLoadingIndicator(auctionsContainer);
      
			auctionEnd.style.display = "none";
			const auctions = await api.getAllAuctions(offset);
      
			offset = offset + AUCTIONS_LIMIT;
			renderAllAuctionsTemplates(auctions, auctionsContainer, offset);
			listAuctions.stopObserving = auctions.length === 0 || auctions.length < AUCTIONS_LIMIT;
		} catch (error) {
      displayMessage("danger", error, "#message");
			
		} finally {
			toggleLoadingIndicator(auctionsContainer);
			document.querySelector("#auction-end").style.display = "block";
		}
	};
}

