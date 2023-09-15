import * as storage from "../services/index.mjs";

export function isLoggedIn() {
  const loginLink = document.getElementById("loginLink");
  const registerLink = document.getElementById("registerLink");


  if (storage.get("token")) {
  
    if (loginLink) {
      loginLink.style.display = "none";
    }
    if (registerLink) {
      registerLink.style.display = "none";
    }
    return true;
  } else {
    if (loginLink) {
      loginLink.style.display = "block"; 
    }
    if (registerLink) {
      registerLink.style.display = "block"; 
    }
    return false;
  }
}
