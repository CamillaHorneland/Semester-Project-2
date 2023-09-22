import { getAllAuctions } from "../../api/index.mjs";
import { renderAllAuctionsTemplates } from "../../templates/allAuctions.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function displayAuctionsListener() {
    window.addEventListener("DOMContentLoaded", async function () {
    try {    
      const auctionsContainer = document.getElementById("allAuctions"); 
      const auctionsDataList = await getAllAuctions();
      
      if (auctionsDataList) {
        renderAllAuctionsTemplates(auctionsDataList, auctionsContainer);
        renderCaruselTemplate(auctionData, caruselContainer);
      } else {
        throw new Error("Unable to retrieve auction data.");
      }
    } catch (error) {
      displayMessage("danger", error, "#message");
      console.log(error);
    }
  });
}