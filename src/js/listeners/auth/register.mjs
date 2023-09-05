import { register } from "../../api/auth/register.mjs";
import displayMessage from "../../message/displayMessage.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");
  const loginButtonContainer = document.querySelector("#loginButton");


  if (form) {
   loginButtonContainer.style.display = "none";

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      const button = form.querySelector("button");
      button.innerText = "Registering..";

      const fieldset = form.querySelector("fieldset");
      fieldset.disabled = true;

      try {
        await register(profile);
        displayMessage("success", "Registration successful! You can now log in", "#message");
        loginButtonContainer.style.display = "block";
        form.reset();
      } catch (error) {
        displayMessage("danger", error, "#message");
        console.log(error);
      } finally {
        button.innerText = "Register";
        fieldset.disabled = false;
      }
    });
  }
}