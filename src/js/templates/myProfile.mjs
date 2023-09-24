export function myProfileTemplate(profileDataList) {
    if (!profileDataList) {
        return null;
    }

    const profile = document.createElement("div");
    profile.classList.add("profile");

    const profileNameDiv = document.createElement("div");
    profileNameDiv.classList.add("profile-name");

    const profileName = document.createElement("h3");
    profileName.innerText = `Username: ${profileDataList.name}`;
    profileNameDiv.appendChild(profileName);
    profile.appendChild(profileNameDiv);

    const profileEmailDiv = document.createElement("div");
    profileEmailDiv.classList.add("profile-email");

    const profileEmail = document.createElement("p");
    profileEmail.innerText = `Email: ${profileDataList.email}`;
    profileEmailDiv.appendChild(profileEmail);
    profile.appendChild(profileEmailDiv);

    const profileCreditDiv = document.createElement("div");
    profileCreditDiv.classList.add("profile-credit");

    const profileCredit= document.createElement("p");
    profileCredit.innerText = `Credit: ${profileDataList.credits}`;
    profileCreditDiv.appendChild(profileCredit);
    profile.appendChild(profileCreditDiv);

     const avatar = document.createElement("img");
    if (profileDataList.avatar) {
        avatar.src = profileDataList.avatar;
        avatar.alt = `Avatar of ${profileDataList.name}`;
    } else {
        avatar.src = "/img/profile.png";
        avatar.alt = `Default Avatar`;
    }

    profile.appendChild(avatar);

    const myProfile = document.getElementById("myProfile");
    myProfile.appendChild(profile);

    return profile;
}

  
