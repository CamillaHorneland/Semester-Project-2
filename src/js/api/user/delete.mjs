import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "DELETE";

export async function deleteListing(id) {
  if (!id) {
    throw new Error("Delete requires a listingId");
  }

  const updateDeleteURL = `${API_AUCTION_URL}${action}/${id}`;

  const response = await authFetch(updateDeleteURL, {
    method
  });

  if (response.ok) {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      try {
        const json = await response.json();
        return json;
      } catch (error) {
        console.error("Error parsing response JSON:", error);
      }
    } else {
      console.error("Response is not in JSON format");
    }
  } else {
    try {
      const json = await response.json();
      console.log(json);
      throw new Error(json.errors[0].message);
    } catch (error) {
      console.error("Error parsing response JSON:", error);
    }
  }
}



