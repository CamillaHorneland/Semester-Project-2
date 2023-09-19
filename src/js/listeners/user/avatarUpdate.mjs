import { updateMyAvatar } from "../../api/index.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export function setupAvatarUpdateListener() {
  const updateAvatarBtn = document.querySelector("#updateAvatarBtn");
  const avatarInput = document.querySelector("#avatarInput");
  
  updateAvatarBtn.addEventListener("click", async () => {
    try {
      const avatarUrl = avatarInput.value.trim();
      if (!avatarUrl) {
        throw new Error("Avatar URL cannot be empty");
      }

      const response = await updateMyAvatar(avatarUrl);

      if (response === "Avatar updated successfully.") {
        console.log("Avatar updated successfully:", response);
        displayMessage("success", "Avatar updated successfully", "#message");

        window.location.reload();
      } else {
        throw new Error("Error updating avatar");
      }
    } catch (error) {
      console.error("Error updating avatar:", error.message);
      displayMessage("danger", "Error updating avatar: " + error.message, "#message");
    }
  });
}



