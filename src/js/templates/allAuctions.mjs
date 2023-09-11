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

  const updated = document.createElement("p");
  updated.innerText = `Updated: ${auctionData.updated}`;
  info.appendChild(updated);

  mediaInfoContainer.appendChild(info);
  auction.appendChild(mediaInfoContainer);

  const seeBidsLink = document.createElement("a");
  seeBidsLink.href = `/auction/spesificAuctions?id=${auctionData.id}`;
  seeBidsLink.classList.add("btn", "btn-light", "mt-3", "w-50");
  
  const seeBidsText = document.createElement("h6");
  seeBidsText.innerText = "See bids";
  
  seeBidsLink.appendChild(seeBidsText);
  info.appendChild(seeBidsLink);
 console.log(seeBidsLink);
  // <a href="/auction/spesificAuctions?id=${auctionData.id}" class="btn btn-primary mx-2 m-3 w-30">
  // <p>See bids</p>
// </a>
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




// export function auctionTemplate(auctionData) {
//   const auction = document.createElement("div");
//   document.querySelector("#allAuctions");

//   const title = document.createElement("h3");
//   title.innerText = auctionData.title;
//   auction.appendChild(title);


//   if (auctionData.media) {
//     const image = document.createElement("img");
//     image.src = auctionData.media;
//     image.alt = `Image from ${auctionData.title}`;
//     image.style.maxWidth = "100%";
//     image.style.width = "100%";
//     auction.appendChild(image);
//   }

//    const description = document.createElement("h4");
//    description.innerText = auctionData.description;
//    auction.appendChild(description);

//   // const tags = document.createElement("ul");
//   // for (const tag of auctionData.tags) {
//   //   const tagItem = document.createElement("li");
//   //   tagItem.innerText = tag;
//   //   tags.appendChild(tagItem);
//   // }
//   // auction.appendChild(tags);

//   const created = document.createElement("p");
//   created.innerText = `Created: ${auctionData.created}`;
//   auction.appendChild(created);

//   const updated = document.createElement("p");
//   updated.innerText = `Updated: ${auctionData.updated}`;
//   auction.appendChild(updated);



//   return auction;
// }

// export function renderAllAuctionsTemplates(auctionDataList, parent) {
  
//   if(auctionDataList.length > 0) {
//     parent.append(...auctionDataList.map(auctionTemplate));
//   } else {
//     const emptyResult = document.createElement('h3');
//     emptyResult.innerText = 'No auctions to display';
//     parent.append(emptyResult);
//   }
// }