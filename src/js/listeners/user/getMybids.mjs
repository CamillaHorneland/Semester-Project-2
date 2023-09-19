import { getMyBids} from "../../api/index.mjs";
import { renderMyBidsTemplates } from "../../templates/myBids.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function displayMyBidsListener() {
  window.addEventListener("DOMContentLoaded", async function () {
    try {
      console.log("displayMyBidsListener");
      const bidsContainer = document.getElementById("profileBids");
    //   console.log(bidsContainer); 
      const bidsDataList = await getMyBids();
      if (bidsDataList) {
        renderMyBidsTemplates(bidsDataList, bidsContainer);
      } else {
        throw new Error("Unable to retrieve bids data.");
      }
    } catch (error) {
      displayMessage("danger", error, "#message");
      console.log(error);
    }
  });
}