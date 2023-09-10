export function auctionTemplate(auctionData) {
  const auction = document.createElement("div");
  document.querySelector("#allAuctions");

  const title = document.createElement("h2");
  title.innerText = auctionData.title;
  auction.appendChild(title);

  const body = document.createElement("p");
  body.innerText = auctionData.body;
  auction.appendChild(body);

  if (auctionData.media) {
    const image = document.createElement("img");
    image.src = auctionData.media;
    image.alt = `Image from ${auctionData.title}`;
    image.style.maxWidth = "100%";
    image.style.width = "100%";
    auction.appendChild(image);
  }

  const tags = document.createElement("ul");
  for (const tag of auctionData.tags) {
    const tagItem = document.createElement("li");
    tagItem.innerText = tag;
    tags.appendChild(tagItem);
  }
  auction.appendChild(tags);

  const created = document.createElement("p");
  created.innerText = `Created: ${auctionData.created}`;
  auction.appendChild(created);

  const updated = document.createElement("p");
  updated.innerText = `Updated: ${auctionData.updated}`;
  auction.appendChild(updated);



  return auction;
}

export function renderAllAuctionsTemplates(auctionDataList, parent) {
  
  if(auctionDataList.length > 0) {
    parent.append(...auctionDataList.map(auctionTemplate));
  } else {
    const emptyResult = document.createElement('h2');
    emptyResult.innerText = 'No auctions to display';
    parent.append(emptyResult);
  }
}