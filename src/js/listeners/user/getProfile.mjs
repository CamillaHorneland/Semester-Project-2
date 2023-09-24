import { getMyProfile } from "../../api/index.mjs";
import { myProfileTemplate } from "../../templates/myProfile.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";
import { setupAvatarUpdateListener } from "../../listeners/user/avatarUpdate.mjs";

export async function displayMyProfileListener() {
    window.addEventListener("DOMContentLoaded", async function () {
        try {
            const profileDataList = await getMyProfile();
            const profileContainer = document.getElementById("myProfile");

            if (profileDataList) {
                myProfileTemplate(profileDataList, profileContainer);
                setupAvatarUpdateListener()
            } else {
                throw new Error("Unable to retrieve profile data.");
            }
        } catch (error) {
            displayMessage("danger", error, "#message");
            console.log(error);
        }
    });
}

