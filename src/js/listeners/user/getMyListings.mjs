import { getMyListings } from "../../api/index.mjs";
import { renderMyListingsTemplates } from "../../templates/myListings.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";
import { setDeleteListingListener } from "../index.mjs";

export async function displayMyListingsListener() {
  window.addEventListener("DOMContentLoaded", async function () {
    try {
      const listingsContainer = document.getElementById("profileListings");
      const listingsDataList = await getMyListings();
      if (listingsDataList) {
        renderMyListingsTemplates(listingsDataList, listingsContainer);
        setDeleteListingListener()
      } else {
        throw new Error("Unable to retrieve listings data.");
      }
    } catch (error) {
      displayMessage("danger", error, "#message");
      console.log(error);
    }
  });
}
