import * as listeners from "./listeners/index.mjs";

export default function router() {
  const path = location.pathname;
  // var postId = parseInt(path.split('/').reverse()[0]);
  // if(!isNaN(auctionId))
  //   auctiontId = '';
  
  // console.log(user);

  // listeners.setLogoutButtonListener();
  switch (path) {case '/profile/register/':
      listeners.setRegisterFormListener();
  }
}
