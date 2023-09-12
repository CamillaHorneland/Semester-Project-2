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

  const updated = document.createElement("p");
  updated.innerText = `Updated: ${specificAuctionData.updated}`;
  text.appendChild(updated);

  spesAuction.appendChild(specificContainer);
  spesAuction.appendChild(description);
  spesAuction.appendChild(text);

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


