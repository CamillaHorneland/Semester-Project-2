import { isLoggedIn } from "../storage/index.mjs";

export function auctionTemplate(auctionData) {
  const auction = document.createElement("div");
  auction.classList.add("auction");

  const title = document.createElement("h3");
  title.innerText = auctionData.title;
  auction.appendChild(title);

  const mediaInfoContainer = document.createElement("div");
mediaInfoContainer.classList.add("media-info-container");

const media = document.createElement("div");
media.classList.add("media");

const image = document.createElement("img");

if (Array.isArray(auctionData.media) && auctionData.media.length > 0) {
  image.src = auctionData.media[0];
  image.alt = `Image from ${auctionData.title}`;
} else {
  image.src = "/img/gavel.jpeg";
  image.alt = `Backup Image for ${auctionData.title}`;
}

image.onerror = function() {
  image.src = "/img/gavel.jpeg"; 
  image.alt = `Backup Image for ${auctionData.title}`;
};

media.appendChild(image);
mediaInfoContainer.appendChild(media);



  const info = document.createElement("div");
  info.classList.add("info");

  const description = document.createElement("h4");

if (auctionData.description) {
  
  description.innerText = `Description: ${auctionData.description}`;
} else {
  description.innerText = "Description: This is a cool item";
}

info.appendChild(description);

function formatTimeDifference(endTime) {
  const currentTime = new Date();
  const timeDifference = endTime - currentTime;

  if (timeDifference <= 0) {
    return "Auction has ended";
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  return `Auction ends: ${days}d ${hours}h ${minutes}m`;
}

const endsAtDate = new Date(auctionData.endsAt);

const endsAt = document.createElement("p");
endsAt.innerText = formatTimeDifference(endsAtDate);
info.appendChild(endsAt);


  mediaInfoContainer.appendChild(info);
  auction.appendChild(mediaInfoContainer);

 if (isLoggedIn()) {
    const seeBidsLink = document.createElement("a");
    seeBidsLink.id = "seeBids";
    seeBidsLink.href = `/auction/specificAuction/?id=${auctionData.id}`;
    seeBidsLink.classList.add("btn", "btn-light", "mt-3", "w-50");

    const seeBidsText = document.createElement("h6");
    seeBidsText.innerText = "See bids";

    seeBidsLink.appendChild(seeBidsText);
    info.appendChild(seeBidsLink);
   } else {
    const loginLink = document.createElement("a");
    loginLink.id = "loginToView";
    loginLink.href = "/profile/login";
    loginLink.classList.add("btn", "btn-light", "mt-3", "w-50");
    loginLink.innerText = "Login to view bids";

    info.appendChild(loginLink);
   }

  return auction;
}

export function renderAllAuctionsTemplates(auctionDataList, parent) {
  if (auctionDataList.length > 0) {
    parent.innerHTML = ''; 
    parent.append(...auctionDataList.map(auctionTemplate));
  } else {
    const emptyResult = document.createElement('h3');
    emptyResult.innerText = 'No auctions to display';
    parent.innerHTML = '';
    parent.append(emptyResult);
  }
}
