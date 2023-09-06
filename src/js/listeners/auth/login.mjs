import { login } from "../../api/auth/login.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";
import * as storage from "../../storage/index.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries())

      const button = form.querySelector("button");
      button.innerText = "Logging in.."

      const fieldset = form.querySelector("fieldset");
      fieldset.disabled = true;

      try {
        const { accessToken, ...user} = await login(profile);
        storage.save("token", accessToken);
        storage.save("profile", user);
        location.href = "../../../../index.html";
      } catch (error) {
        displayMessage("danger", error, "#message");
        console.log(error);
      } finally {
        button.innerText = "Login";
        fieldset.disabled = false;
   }
    });
  }
}


