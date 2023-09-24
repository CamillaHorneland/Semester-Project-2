import * as listeners from "./listeners/index.mjs";
import buildMenu from "./ui/common/buildMenu.mjs";
import { redirectBasedOnLogin } from "./helpers/index.mjs";
import handleSearch from "./listeners/handelers/handleSearch.mjs";
import handleHideResultsOnDocumentClick from "./listeners/handelers/hideSearchResults.mjs";

export default function router() {
  const pathname = window.location.pathname;

  var auctionId = parseInt(pathname.split('/').reverse()[0]);
  if(!isNaN(auctionId))
    auctionId = "";

  console.log('Pathname:', pathname);

  redirectBasedOnLogin(pathname);
	buildMenu(pathname);
  handleSearch();
  handleHideResultsOnDocumentClick();
  
  listeners.setLogoutListener();

  switch (pathname) {
    case '/profile/register/':
    case '/profile/register/index.html':
      listeners.setRegisterFormListener()
      break;
    case '/profile/login/':
    case '/profile/login/index.html':
        listeners.setLoginFormListener()
      break;
    case '/':
    case '/index.html':
        listeners.displayCarousel()
      break;
    case '/auction/allAuctions/':
    case '/auction/allAuctions/index.html':
        const listAuctions = listeners.displayAllAuctions();
        listeners.observeAuctions(listAuctions);
        listAuctions();
      break;
    case '/auction/specificAuction/':
    case '/auction/specificAuction/index.html':
        listeners.displaySingleAuctionListener()
        listeners.bidListener()
       break;
    case '/profile/createAuction/':
    case '/profile/createAuction/index.html':
        listeners.createAuctionFormListener()
       break;
    case '/profile/user/':
     case '/profile/user/index.html':
        listeners.displayMyProfileListener()
        listeners.displayMyListingsListener()
        listeners.displayMyBidsListener()
      break;
   }
}




  

