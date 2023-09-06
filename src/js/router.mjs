import * as listeners from "./listeners/index.mjs";
// import { setLogoutListener } from "./listeners/auth/logout";

export default function router() {
  const path = location.pathname;
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
