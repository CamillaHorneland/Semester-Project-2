import { getMyProfile } from "../../api/index.mjs";
import { myProfileTemplate } from "../../templates/myProfile.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function displayMyProfileListener() {
    window.addEventListener("DOMContentLoaded", async function () {
        try {
            const profileDataList = await getMyProfile();
            const profileContainer = document.getElementById("myProfile");

            if (profileDataList) {
                myProfileTemplate(profileDataList, profileContainer);
                // console.log("Profile data:", profileDataList);
            } else {
                throw new Error("Unable to retrieve profile data.");
            }
        } catch (error) {
            displayMessage("danger", error, "#message");
            console.log(error);
        }
    });
}

