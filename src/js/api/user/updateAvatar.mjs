import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import * as storage from "../../services/index.mjs";

export async function updateMyAvatar(avatarData) {
    const userName = storage.load('profile').name;
    const avatarRequest = `${API_AUCTION_URL}/profiles/${userName}/media`;

    try {
    const response = await authFetch(avatarRequest, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ avatar: avatarData }),
    });

    console.log("Avatar Update Response Status:", response.status);

    if (response.ok) {
      console.log("Avatar updated successfully.");
      return "Avatar updated successfully.";
    }

    const json = await response.json();

    if (json.errors && json.errors.length > 0) {
      console.error("Error with avatar update:", json.errors[0].message);
      throw new Error(json.errors[0].message);
    } else {
      console.error("Error updating avatar: Unknown error");
      throw new Error("Unknown error occurred while updating avatar.");
    }
  } catch (error) {
    console.error("Error updating avatar:", error);
    throw error; 
  }
}


