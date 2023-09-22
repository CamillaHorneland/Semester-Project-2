import { getAllAuctions } from "../../api/index.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function displayCarousel() {
  try {    
    const carouselContainer = document.querySelector(".carousel-inner"); 
    const auctionsData = await getAllAuctions();
    
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

  if (auctionData.media) {
    const image = document.createElement("img");
    image.src = auctionData.media;
    image.alt = `Image from ${auctionData.title}`;
    image.onerror = function() {
      image.src = "/img/gavel.jpeg"; 
      image.alt = `Backup Image for ${auctionData.title}`;
    };

    imageContainer.appendChild(image);
  } else {
    const backupImage = document.createElement("img");
    backupImage.src = "/img/gavel.jpeg"; 
    backupImage.alt = `Image from ${auctionData.title}`;
    imageContainer.appendChild(backupImage);
  }

  card.appendChild(imageContainer);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h6");
  title.classList.add("card-title");
  title.innerText = auctionData.title;

  const description = document.createElement("p");
  description.classList.add("card-text");
  if (auctionData.description) {
    // Del beskrivelsen til ord og sjekk antall ord
    const words = auctionData.description.split(" ");
    if (words.length > 5) {
      // Hvis det er mer enn 7 ord, begrens beskrivelsen og legg til "..."
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
  seeBidsLink.classList.add("btn", "btn-light", "mt-3");
  seeBidsLink.href = `/auction/specificAuction/?id=${auctionData.id}`;
  seeBidsLink.innerText = "See bids";

  cardBody.appendChild(seeBidsLink);
  card.appendChild(cardBody);

  return card;
}






// import { getAllAuctions } from "../../api/index.mjs";
// import displayMessage from "../../ui/common/displayMessage.mjs";

// export async function displayCarusel() {
//     window.addEventListener("DOMContentLoaded", async function () {
//     try {    
//       const carouselContainer = document.getElementById("carousel"); 
//       const auctionsData = await getAllAuctions();
      
//     //   if (auctionsData) {
//     //     displayCarusel(auctionData, caruselContainer);
//     //   } else {
//     //     throw new Error("Unable to retrieve auction data.");
//     //   }
//     } catch (error) {
//       displayMessage("danger", error, "#message");
//       console.log(error);
//     }
//   });
// }
// import { getAllAuctions } from "../api/index.mjs";

// function generateCarouselItems(auctionsData) {
//   const carousel = document.querySelector('#carousel');
//   const carouselInner = document.createElement('div');
//   carouselInner.classList.add('carousel-inner');
  

//   auctionsData.forEach((auctionData, index) => {
//     const carouselItem = document.createElement('div');
//     carouselItem.classList.add('carousel-item');
//     if (index === 0) {
//       carouselItem.classList.add('active');
//     }

//     // Opprett innholdet for hvert karusellelement basert på auksjonsdata
//     const itemContent = `
//       <h3>${auctionData.title}</h3>
//       <p>${auctionData.description}</p>
//       <div class="media-info-container">
//         ${generateMediaInfo(auctionData)}
//         ${generateActionButtons(auctionData)}
//       </div>
//     `;

//     carouselItem.innerHTML = itemContent;
//     carouselInner.appendChild(carouselItem);
//   });

//   carousel.appendChild(carouselInner);
// }

// function generateMediaInfo(auctionData) {
//   if (auctionData.media) {
//     const media = document.createElement("div");
//     media.classList.add("media");

//     const image = document.createElement("img");
//     image.src = auctionData.media;
//     image.alt = `Image from ${auctionData.title}`;
//     image.onerror = function() {
//       image.src = "/img/gavel.jpeg"; 
//       image.alt = `Backup Image for ${auctionData.title}`;
//     };

//     media.appendChild(image);

//     return media.outerHTML;
//   } else {
//     const backupImage = document.createElement("img");
//     backupImage.src = "/img/gavel.jpeg"; 
//     backupImage.alt = `Image from ${auctionData.title}`;

//     return backupImage.outerHTML;
//   }
// }

// function generateActionButtons(auctionData) {
//   const info = document.createElement("div");
//   info.classList.add("info");

//   const description = document.createElement("h4");

//   if (auctionData.description) {
//     description.innerText = `Description: ${auctionData.description}`;
//   } else {
//     description.innerText = "Description: This is a cool item";
//   }

//   info.appendChild(description);

//   if (isLoggedIn()) {
//     const seeBidsLink = document.createElement("a");
//     seeBidsLink.id = "seeBids";
//     seeBidsLink.href = `/auction/specificAuction/?id=${auctionData.id}`;
//     seeBidsLink.classList.add("btn", "btn-light", "mt-3", "w-50");

//     const seeBidsText = document.createElement("h6");
//     seeBidsText.innerText = "See bids";

//     seeBidsLink.appendChild(seeBidsText);
//     info.appendChild(seeBidsLink);
//   } else {
//     const loginLink = document.createElement("a");
//     loginLink.id = "loginToView";
//     loginLink.href = "/profile/login";
//     loginLink.classList.add("btn", "btn-light", "mt-3", "w-50");
//     loginLink.innerText = "Login to view bids";

//     info.appendChild(loginLink);
//   }

//   return info.outerHTML;
// }

// generateCarouselItems();
