import * as listeners from "./listeners/index.mjs";
import buildMenu from "./ui/common/buildMenu.mjs";
import { redirectBasedOnLogin } from "./helpers/index.mjs";
// import { setLogoutListener } from "./listeners/auth/logout";

export default function router() {
  const pathname = window.location.pathname;

  console.log(pathname);

  redirectBasedOnLogin(pathname);
	buildMenu(pathname);


  // var postId = parseInt(path.split('/').reverse()[0]);
  // if(!isNaN(auctionId))
  //   auctiontId = '';
  
  // console.log(user);

  listeners.setLogoutListener();
  switch (pathname) { 
    case '/profile/register/':
      listeners.setRegisterFormListener()
      break;
      case '/profile/login/':
      listeners.setLoginFormListener()
      break;
  }
}
