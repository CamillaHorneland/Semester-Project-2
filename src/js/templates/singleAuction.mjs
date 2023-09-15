export function singleAuctionTemplate(specificAuctionData) {

  const existingTitleText = document.title;
  document.title = `${existingTitleText} - ${specificAuctionData.title}`;

 const titleAuctionElement = document.getElementById("titleAuction");

  if (titleAuctionElement) {
    titleAuctionElement.innerText = specificAuctionData.title;
  }
  const spesAuction = document.createElement("div");
  spesAuction.classList.add("spesAuction");

  const specific = document.createElement("div");
  specific.classList.add("specific");

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

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");

    if (specificAuctionData.description) {
      const description = document.createElement("h3");
      description.innerText = `Description: ${specificAuctionData.description}`;
      descriptionDiv.appendChild(description);
    } else {
      const defaultDescription = document.createElement("h3");
      defaultDescription.innerText = "Description: This is a cool item";
      descriptionDiv.appendChild(defaultDescription);
    }
    
    specific.appendChild(singleMedia);
    specific.appendChild(descriptionDiv);
  } else {
    const backupImage = document.createElement("img");
    backupImage.src = "/img/gavel.jpeg";
    backupImage.alt = `Image from ${specificAuctionData.title}`;
    specific.appendChild(backupImage);
  }

  function formatTimeDifference(endTime) {
  const currentTime = new Date();
  const timeDifference = endTime - currentTime;

  if (timeDifference < 0) {
    return "Auction has ended";
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  return `Auction ends: ${days}d ${hours}h ${minutes}m`;
}

const endsAtDate = new Date(specificAuctionData.endsAt);

const text = document.createElement("div");
text.classList.add("text");

const endsAtElement = document.createElement("p");
endsAtElement.innerText = formatTimeDifference(endsAtDate);
text.appendChild(endsAtElement);

  const amount = document.createElement("h4");
  amount.classList.add("bidHeader");
  amount.innerText = `Bids: ${specificAuctionData._count.bids}`;

  const bids = document.createElement("ul");
  bids.classList.add("bids-list"); 
  
if (specificAuctionData.bids && specificAuctionData.bids.length > 0) {
  specificAuctionData.bids.forEach((bid) => {
    const bidItem = document.createElement("li");
    bidItem.innerText = `${bid.bidderName}: ${bid.amount}`;
    bidItem.classList.add("bid-item");
    bids.appendChild(bidItem);
  });
} else {
  const noBidsItem = document.createElement("li");
  noBidsItem.innerText = "No bids yet";
  bids.appendChild(noBidsItem);
}

const sellerInfo = document.createElement("div");
sellerInfo.classList.add("sellerInfo");

const sellerDiv = document.createElement("div");
sellerDiv.classList.add("sellerDiv");

const seller = document.createElement("h6");
seller.innerText = `Seller: ${specificAuctionData.seller.name}`;

const sellerMail = document.createElement("h6");
sellerMail.innerText = `Seller mail: ${specificAuctionData.seller.email}`;

sellerDiv.appendChild(seller);
sellerDiv.appendChild(sellerMail);

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
  sellerInfo.appendChild(sellerDiv);
  sellerInfo.appendChild(sellerMedia);
  spesAuction.appendChild(specific);
  spesAuction.appendChild(text);
  spesAuction.appendChild(amount);
  spesAuction.appendChild(bids);
  spesAuction.appendChild(sellerInfo);
// text.appendChild(sellerInfo);

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