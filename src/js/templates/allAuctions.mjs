import { isLoggedIn } from "../storage/index.mjs";

export function auctionTemplate(auctionData) {
  const auction = document.createElement("div");
  auction.classList.add("auction");

  const title = document.createElement("h3");
  title.innerText = auctionData.title;
  auction.appendChild(title);

  const mediaInfoContainer = document.createElement("div");
  mediaInfoContainer.classList.add("media-info-container");


if (auctionData.media) {
  const media = document.createElement("div");
  media.classList.add("media");

  const image = document.createElement("img");
  image.src = auctionData.media;
  image.alt = `Image from ${auctionData.title}`;
  image.onerror = function() {
    image.src = "/img/gavel.jpeg"; 
    image.alt = `Backup Image for ${auctionData.title}`;
  };

  media.appendChild(image);

  mediaInfoContainer.appendChild(media);
} else {
  const backupImage = document.createElement("img");
  backupImage.src = "/img/gavel.jpeg"; 
  backupImage.alt = `Image from ${auctionData.title}`;
  mediaInfoContainer.appendChild(backupImage);
}

// console.log(auctionData.id);

  const info = document.createElement("div");
  info.classList.add("info");

  const description = document.createElement("h4");

if (auctionData.description) {
  
  description.innerText = auctionData.description;
} else {
  description.innerText = "This is a cool item";
}

info.appendChild(description);

  const created = document.createElement("p");
  created.innerText = `Created: ${auctionData.created}`;
  info.appendChild(created);

  const endsAt = document.createElement("p");
  endsAt.innerText = `Ends: ${auctionData.endsAt}`;
  info.appendChild(endsAt);
  console.log(endsAt);

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
