export function myBidsTemplate(bidsData) {

  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerText = bidsData.title;

  const description = document.createElement("p");
  description.classList.add("card-text");
  description.innerText = bidsData.description;

   const media = document.createElement("img");
    if (bidsData.media) {
        media.src = bidsData.media;
        media.alt = `${bidsData.name}`;
    } else {
       media.src = "/img/Favicon – lite.jpeg"; 
        media.alt = `Default image`;
    }
    
  const endsAtElement = document.createElement("p");
  endsAtElement.classList.add("card-timeEnd");
  endsAtElement.innerText = formatAuctionEndTime(bidsData.endsAt);


  function formatAuctionEndTime(endsAt) {
  const endTime = new Date(endsAt);
  const now = new Date();

  if (endTime < now) {
    return "Auction has ended";
  }

  const timeDifference = endTime - now;
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

  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(media);
  cardBody.appendChild(endsAtElement);
 
  card.appendChild(cardBody);

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