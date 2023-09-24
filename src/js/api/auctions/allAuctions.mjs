import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";

export async function getAllAuctions() {
 
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

// import { API_AUCTION_URL } from "../constants.mjs";
// import { authFetch } from "../authFetch.mjs";

// const action = "/listings";
// const pageSize = 20; // Antall auksjoner per side

// export async function getAllAuctions() {
//   let allAuctions = [];
//   let page = 1;

//   while (true) {
//     try {
//       const auctionsOnPage = await fetchAuctionsOnPage(page);

//       if (auctionsOnPage.length === 0) {
//         // Ingen flere auksjoner på denne siden, avslutt løkken
//         break;
//       }

//       allAuctions = allAuctions.concat(auctionsOnPage);
//       page++;
//     } catch (error) {
//       console.error("Error fetching auctions:", error);
//       // Legg til en forsinkelse før du prøver igjen etter en feil
//       await new Promise(resolve => setTimeout(resolve, 5000)); // Vent i 5 sekunder
//     }
//   }

//   return allAuctions;
// }

// async function fetchAuctionsOnPage(page) {
//   const updateAllAuctionsURL = `${API_AUCTION_URL}${action}?page=${page}&pageSize=${pageSize}`;

//   try {
//     const response = await authFetch(updateAllAuctionsURL);

//     if (response.ok) {
//       const json = await response.json();
//       return json;
//     } else {
//       const json = await response.json();
//       throw new Error(json.errors[0].message);
//     }
//   } catch (error) {
//     throw new Error("Failed to fetch auctions: " + error.message);
//   }
// }




