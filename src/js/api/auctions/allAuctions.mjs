import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";

export async function getAllAuctions() {
  console.log(API_AUCTION_URL);
  const updateAllAutionsURL = `${API_AUCTION_URL}${action}`;

    try {
    const response = await authFetch(updateAllAutionsURL);
    
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      const json = await response.json();
      throw new Error(json.errors[0].message);
    }
  } catch (error) {
    throw new Error("Failed to fetch auctions: " + error.message);
  }
}

//   const response = await authFetch(updateAllAutionsURL);
//   console.log("Fetching auctions");
//   const json = await response.json();

//   if (response.ok) {
//     return json;
//   }

//   throw new Error(json.errors[0].message);
// }

// export async function getProfileAuctions() {
//   const username = storage.load('profile').name;
//   const updateAllAutionsURL = `${API_AUCTION_URL}/profiles/${username}${action}`;
//   const response = await authFetch(updateAllAutionsURL);
//   console.log("Fetching profile auctions");
//   const json = await response.json();

//   if (response.ok) {
//     return json;
//   }

//   throw new Error(json.errors[0].message);
// }


// export async function getAuctions(id) {
//   if (!id) {
//     throw new Error("Get requires a auctionID");
//   }
  
//   const getAuctionURL = `${API_AUCTION_URL}${action}/${id}`;
//   const response = await authFetch(getAuctionURL);
//   console.log("Fetching auctions");
//   const json = await response.json();

//   if (response.ok) {
//     return json;
//   }

//   throw new Error(json.errors[0].message);
// }

// export async function searchMyAuctions(tag) {
//   if (tag) {
//     throw new Error("searchMyAuctions requires a tag value");
//   }
// }