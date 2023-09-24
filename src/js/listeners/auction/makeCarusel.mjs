import { getCarousel } from "../../api/index.mjs";
import { isLoggedIn } from "../../storage/index.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function displayCarousel() {
  try {    
    const carouselContainer = document.querySelector(".carousel-inner"); 
    const auctionsData = await getCarousel();
    
    if (auctionsData && auctionsData.length > 0) {
      const itemsPerSlide = 4; 
      let slideIndex = 0;

      while (slideIndex < auctionsData.length) {
        const slide = document.createElement("div");
        slide.classList.add("carousel-item");

        const row = document.createElement("div");
        row.classList.add("row");

        for (let i = 0; i < itemsPerSlide && slideIndex < auctionsData.length; i++) {
          const auctionData = auctionsData[slideIndex];
          const card = generateAuctionCard(auctionData);

          const col = document.createElement("div");
          col.classList.add("col-md-3"); 

          col.appendChild(card);
          row.appendChild(col);

          slideIndex++;
        }

        slide.appendChild(row);
        carouselContainer.appendChild(slide);

        if (slideIndex === itemsPerSlide) {
          slide.classList.add("active"); 
        }
      }
    } else {
      throw new Error("Unable to retrieve auction data.");
    }
  } catch (error) {
    displayMessage("danger", error, "#message");
    console.log(error);
  }
}

function generateAuctionCard(auctionData) {
  const card = document.createElement("div");
  card.classList.add("card");

  const imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");

const media = document.createElement("img");

if (Array.isArray(auctionData.media) && auctionData.media.length > 0) {
  media.src = auctionData.media[0];
  media.alt = `Image from ${auctionData.title}`;
} else {
  media.src = "/img/gavel.jpeg";
  media.alt = `Backup Image for ${auctionData.title}`;
}

media.onerror = function() {
  media.src = "/img/gavel.jpeg"; 
  media.alt = `Backup Image for ${auctionData.title}`;
};

imageContainer.appendChild(media);
card.appendChild(imageContainer);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h6");
  title.classList.add("card-title");
  title.innerText = auctionData.title;

  const description = document.createElement("p");
  description.classList.add("card-text");
  if (auctionData.description) {
    const words = auctionData.description.split(" ");
    if (words.length > 5) {
      description.innerText = words.slice(0, 5).join(" ") + " ...";
    } else {
      description.innerText = auctionData.description;
    }
  } else {
    description.innerText = "Description: This is a cool item";
  }

  cardBody.appendChild(title);
  cardBody.appendChild(description);

  const seeBidsLink = document.createElement("a");
  seeBidsLink.classList.add("btn","cardBtn", "btn-light", "mt-3");
  seeBidsLink.href = `/auction/specificAuction/?id=${auctionData.id}`;
 
if (isLoggedIn()) {
    seeBidsLink.innerText = "See bids";
} else {
    seeBidsLink.innerText = "Login to view";
    seeBidsLink.href = "/profile/login";
}

  cardBody.appendChild(seeBidsLink);
  card.appendChild(cardBody);

  return card;
}

