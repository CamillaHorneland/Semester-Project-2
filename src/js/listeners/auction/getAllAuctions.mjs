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
  /*try {

    return async function listAuctions() {

    }
    toggleLoadingIndicator(auctionsContainer);
    auctionEnd.style.display = "none";

    const getAuctions = api.getAllAuctions;
    
    const container = auctionsContainer;
    offset = offset + AUCTIONS_LIMIT;
    renderAllAuctionsTemplates(auctions, container);

    let stopObserving = false;

    while (!stopObserving) {
      toggleLoadingIndicator(container);
      document.querySelector("#auction-end").style.display = "none";

      const auctions = await getAuctions(offset);
      offset = offset + AUCTIONS_LIMIT;

      if (auctions.length > 0) {
        renderAllAuctionsTemplates(auctions, container);
      } else {
        stopObserving = true;
      }

      toggleLoadingIndicator(container);
      document.querySelector("#auction-end").style.display = "block";
    }
  } catch (error) {
    displayMessage("danger", error, "#message");
    console.log(error);
  } finally {
    toggleLoadingIndicator(auctionsContainer);
    document.querySelector("#auction-end").style.display = "block";
  }*/
}


//  import { renderAllAuctionsTemplates  } from "../../templates/allAuctions.mjs";
// import { toggleLoadingIndicator } from "../../helpers/toggleLodingIndicator.mjs";
// import * as api from "../../api/auctions/allAuctions.mjs";
// import { AUCTIONS_LIMIT } from "../../api/constants.mjs";
// import displayMessage from "../../ui/common/displayMessage.mjs";


// export async function displayAllAuctions() {
//   const auctionsContainer = document.getElementById("allAuctions");
//   const auctionEnd = document.querySelector("#auction-end");
//   let offset = 0;

//   try {
//     toggleLoadingIndicator(auctionsContainer);
//     auctionEnd.style.display = "none";

//     const auctionsDataList = await api.getAllAuctions(offset);
//     offset = offset + AUCTIONS_LIMIT;

//     if (auctionsDataList.length > 0) {
//       renderAllAuctionsTemplates(auctionsDataList, auctionsContainer);
//       auctionEnd.style.display = "block";
//     } else {
//       auctionEnd.style.display = "none";
//       throw new Error("No more auctions to display.");
//     }
//   } catch (error) {
//     displayMessage("danger", error, "#message");
//     console.log(error);
//   } finally {
//     toggleLoadingIndicator(auctionsContainer);
//     document.querySelector("#auction-end").style.display = "block";
//   }
// }


// import { getAllAuctions } from "../../api/index.mjs";
// import { renderAllAuctionsTemplates } from "../../templates/allAuctions.mjs";
// import displayMessage from "../../ui/common/displayMessage.mjs";

// export async function displayAllAuctions() {

//   try {
//     const auctionsContainer = document.getElementById("allAuctions");
//     const auctionsDataList = await getAllAuctions();

//     if (auctionsDataList) {
//       renderAllAuctionsTemplates(auctionsDataList, auctionsContainer); 
//     } else {
//       throw new Error("Unable to retrieve auction data.");
//     }
//   } catch (error) {
//     displayMessage("danger", error, "#message");
//     console.log(error);
//   }
// }

