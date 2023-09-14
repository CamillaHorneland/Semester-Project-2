export function singleAuctionTemplate(specificAuctionData) {
  const spesAuction = document.createElement("div");
  spesAuction.classList.add("spesAuction");

  const title = document.createElement("h3");
  title.innerText = specificAuctionData.title;
  spesAuction.appendChild(title);

  const specificContainer = document.createElement("div");
  specificContainer.classList.add("specific-container");

  if (specificAuctionData.media) {
    const singleMedia = document.createElement("div");
    singleMedia.classList.add("singleMedia");

    const image = document.createElement("img");
    image.src = specificAuctionData.media;
    image.alt = `Image from ${specificAuctionData.title}`;
    image.onerror = function() {
      image.src = "/img/gavel.jpeg"; 
      image.alt = `Backup Image for ${specificAuctionData.title}`;
    };

    singleMedia.appendChild(image);
    specificContainer.appendChild(singleMedia);
  } else {
    const backupImage = document.createElement("img");
    backupImage.src = "/img/gavel.jpeg"; 
    backupImage.alt = `Image from ${specificAuctionData.title}`;
    specificContainer.appendChild(backupImage);
  }

  const text = document.createElement("div");
  text.classList.add("text");

  const description = document.createElement("h4");

  if (specificAuctionData.description) {
    description.innerText = specificAuctionData.description;
  } else {
    description.innerText = "This is a cool item";
  }

  const created = document.createElement("p");
  created.innerText = `Created: ${specificAuctionData.created}`;
  text.appendChild(created);

  const endsAt = document.createElement("p");
  endsAt.innerText = `Ends: ${specificAuctionData.endsAt}`;
  text.appendChild(endsAt);
 
  const amount = document.createElement("h4");
  amount.innerText = `Bids: ${specificAuctionData._count.bids}`;

  const bids = document.createElement("ul");
  
if (specificAuctionData.bids && specificAuctionData.bids.length > 0) {
  specificAuctionData.bids.forEach((bid) => {
    const bidItem = document.createElement("li");
    bidItem.innerText = `${bid.bidderName} ${bid.amount}`;
    bids.appendChild(bidItem);
  });
} else {
  const noBidsItem = document.createElement("li");
  noBidsItem.innerText = "No bids yet";
  bids.appendChild(noBidsItem);
}

const sellerInfo = document.createElement("div");
sellerInfo.classList.add("sellerInfo");

const seller = document.createElement("h6");
seller.innerText = `Seller: ${specificAuctionData.seller.name}`;

 const sellerMedia = document.createElement("div");
  sellerMedia.classList.add("sellerMedia");

  const sellerImage = document.createElement("img");
  sellerImage.src = specificAuctionData.seller.avatar; 
  sellerImage.alt = `Seller Image for ${specificAuctionData.seller.name}`;
  sellerImage.onerror = function() {
    sellerImage.src = "/img/profile.png"; 
    sellerImage.alt = `Backup Seller Image for ${specificAuctionData.seller.name}`;
  };

  sellerMedia.appendChild(sellerImage);
  sellerInfo.appendChild(seller);
  sellerInfo.appendChild(sellerMedia);

text.appendChild(sellerInfo);


sellerInfo.appendChild(seller);

  spesAuction.appendChild(specificContainer);
  spesAuction.appendChild(description);
  spesAuction.appendChild(text);
  spesAuction.appendChild(amount);
  spesAuction.appendChild(bids);
  spesAuction.appendChild(sellerInfo);


  return spesAuction;
}

export function renderSpecificAuctionTemplate(specificAuctionDataList) {
  const specificAuctionDiv = document.getElementById("specificAuction");

   if (specificAuctionDataList.length > 0) {
    specificAuctionDiv.innerHTML = ''; 
    specificAuctionDataList.forEach((specificAuctionData) => {
      const auctionElement = singleAuctionTemplate(specificAuctionData);
      specificAuctionDiv.appendChild(auctionElement);
    });
  } else {
    specificAuctionDiv.innerHTML = '';
    const emptyResult = document.createElement('h3');
    emptyResult.innerText = 'No auctions to display';
    specificAuctionDiv.appendChild(emptyResult);
  }
}