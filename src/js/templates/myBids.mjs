export function myBidsTemplate(bidData) {
  const card = document.createElement("div");
  card.classList.add("bid-card");

  const cardBids = document.createElement("div");
  cardBids.classList.add("bid-card-img");

  const media = document.createElement("img");
    if (bidData.listing.media) {
        media.src = bidData.listing.media;
        media.alt = `${bidData.listing.name}`;
    } else {
       media.src = "/img/gavel.jpeg"; 
        media.alt = `Default image`;
    }
    
  const title = document.createElement("h5");
  title.classList.add("bid-card-title");
  title.innerText = bidData.listing.title; 

  const amount = document.createElement("h5");
  amount.classList.add("bid-card-amount");
  amount.innerText = bidData.amount;

  const endAtElement = document.createElement("p");
  endAtElement.classList.add("bid-card-enddAt");
  endAtElement.innerText = formatAuctionEndTime(bidData.listing.endsAt);

  function formatAuctionEndTime(endAt) {
    const endAtDate = new Date(endAt);
    const now = new Date();

    if (endAtDate < now) {
      return "Auction has ended";
    }

    const timeDifference = endAtDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    let formattedTime = "Auction ends in ";

    if (days > 0) {
      formattedTime += `${days}d `;
    }

    if (hours > 0 || days > 0) {
      formattedTime += `${hours}h `;
    }

    formattedTime += `${minutes}m`;

    return formattedTime;
  }

  const seeBidsLink = document.createElement("a");
  seeBidsLink.id = "seeBids";
  seeBidsLink.href = `/auction/specificAuction/?id=${bidData.listing.id}`;
  seeBidsLink.innerText = "See Auction";
  seeBidsLink.classList.add("btn", "btn-light", "m-2", "mb-5");

  cardBids.appendChild(media);
  cardBids.appendChild(title);
  cardBids.appendChild(amount);
  cardBids.appendChild(endAtElement);
  cardBids.appendChild(seeBidsLink);

  card.appendChild(cardBids);

  return card;
}

export function renderMyBidsTemplates(bidsDataList, parent) {
  parent.innerHTML = '';

  const header = document.createElement('h4');
  header.innerText = 'My Bids:';
  parent.appendChild(header);

  if (bidsDataList.length > 0) {
    bidsDataList.forEach((bidsData) => {
      const card = myBidsTemplate(bidsData);
      parent.appendChild(card);
    });
  } else {
    const emptyResult = document.createElement('p');
    emptyResult.innerText = 'No bids to display';
    parent.appendChild(emptyResult);
  }
}
