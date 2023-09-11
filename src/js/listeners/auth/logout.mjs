import * as storage from "../../services/index.mjs";

export function setLogoutListener() {
    const logoutLink = document.querySelector(".logoutLink");
    
    if (logoutLink) {
        logoutLink.addEventListener("click", () => {
            
            storage.remove("token");
            storage.remove("profile");
            location.href = "/index.html";
        });
    }
}