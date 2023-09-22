import { createAuction } from "../../api/index.mjs";

export function createAuctionFormListener() {
  const form = document.querySelector("#createAuction");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);

      const title = formData.get("title");
      const description = formData.get("description");
      const media_url = formData.get("media_url");
      const tagsInput = formData.get("tags");
      const tags = tagsInput.split(',').map(tag => tag.trim());
      const deadline_date = formData.get("deadline_date");
      console.log(title, description, media_url, tags, deadline_date);

     try {
  const auctionData = {
    title,
    description,
    media: [media_url],
    tags, 
    endsAt: new Date(deadline_date).toISOString(),
  };

        await createAuction(auctionData);

        window.location.href = "/profile/user";
      } catch (error) {
        console.error("Error creating auction:", error.message);
      }
    });
  }
}


