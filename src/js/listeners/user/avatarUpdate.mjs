import { updateMyAvatar } from "../../api/index.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function updateAvatarListener() {
    try {
        const updateAvatarBtn = document.querySelector("#updateAvatarBtn");
        const avatarInput = document.querySelector("#avatarInput");
        
        updateAvatarBtn.addEventListener("click", async () => {
            try {
                const avatarUrl = avatarInput.value.trim();
                if (!avatarUrl) {
                    throw new Error("Avatar URL cannot be empty");
                }

                const response = await updateMyAvatar(avatarUrl);
                if (!response) {
                    throw new Error("No response received");
                }

                if (response.ok) {
                    console.log("Avatar updated successfully:", response);
                    displayMessage("success", "Avatar updated successfully", "#message");
                    
                    window.location.reload();
                } else {
                    const json = await response.json();
                    console.error("Error with avatar update:", json.errors[0].message);
                    displayMessage("danger", "Error with avatar update: " + json.errors[0].message, "#message");
                }
            } catch (error) {
                console.error("Error creating auction:", error.message);
            }
        });
    } catch (error) {
        console.error("Error setting up avatar update listener:", error.message);
    }
}


