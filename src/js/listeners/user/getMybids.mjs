import { getMyBids } from "../../api/index.mjs";
import { renderMyBidsTemplates } from "../../templates/myBids.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function displayMyBidsListener() {
  window.addEventListener("DOMContentLoaded", async function () {
    try {
      const bidsContainer = document.getElementById("profileBids");
      const bidsData = await getMyBids();
       if (bidsData) {
        renderMyBidsTemplates(bidsData, bidsContainer);
      } else {
        throw new Error("Unable to retrieve data.");
      }
    } catch (error) {
      displayMessage("danger", error, "#message");
      console.log(error);
    }
  });
}
      







