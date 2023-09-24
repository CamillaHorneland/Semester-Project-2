import { getAllAuctions } from "../../api/index.mjs";
import { renderAllAuctionsTemplates } from "../../templates/allAuctions.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function displayAllAuctions() {
  try {
    const auctionsContainer = document.getElementById("allAuctions");
    const auctionsDataList = await getAllAuctions();

    if (auctionsDataList) {
      renderAllAuctionsTemplates(auctionsDataList, auctionsContainer); 
    } else {
      throw new Error("Unable to retrieve auction data.");
    }
  } catch (error) {
    displayMessage("danger", error, "#message");
    console.log(error);
  }
}

