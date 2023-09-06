import * as listeners from "./listeners/index.mjs";
import buildeMenu from "./ui/common/buildMenu.mjs";
import { redirectBasedOnLogin } from "./helpers/index.mjs";
// import { setLogoutListener } from "./listeners/auth/logout";

export default function router() {
  const path = location.pathname;

  redirectBasedOnLogin(pathname);
	buildMenu(pathname);


  // var postId = parseInt(path.split('/').reverse()[0]);
  // if(!isNaN(auctionId))
  //   auctiontId = '';
  
  // console.log(user);

  listeners.setLogoutListener();
  switch (path) { 
    case '/profile/register/':
      listeners.setRegisterFormListener()
      return;
      case '/profile/login/':
      listeners.setLoginFormListener()
      return;
  }
}
