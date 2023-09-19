export function myListingsTemplate(listingData) {

  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerText = listingData.title;

  const description = document.createElement("p");
  description.classList.add("card-text");
  description.innerText = listingData.description;

   const media = document.createElement("img");
    if (listingData.media) {
        media.src = listingData.media;
        media.alt = `${listingData.name}`;
    } else {
       media.src = "/img/Favicon – lite.jpeg"; 
        media.alt = `Default image`;
    }
    
  const endsAtElement = document.createElement("p");
  endsAtElement.classList.add("card-timeEnd");
  endsAtElement.innerText = formatAuctionEndTime(listingData.endsAt);


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

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger", "m-2", "mb-5", "delete-listing");
  deleteBtn.innerText = "Delete";
  deleteBtn.dataset.id = listingData.id; 

  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(media);
  cardBody.appendChild(endsAtElement);
  cardBody.appendChild(deleteBtn);

  card.appendChild(cardBody);

  return card;
}

export function renderMyListingsTemplates(listingsDataList, parent) {
  parent.innerHTML = '';

  const header = document.createElement('h4');
  header.innerText = 'My Auctions:';
  parent.appendChild(header);

  if (listingsDataList.length > 0) {
    listingsDataList.forEach((listingData) => {
      const card = myListingsTemplate(listingData);
      parent.appendChild(card);
    });
  } else {
    const emptyResult = document.createElement('p');
    emptyResult.innerText = 'No listings to display';
    parent.appendChild(emptyResult);
  }
}
