import { deleteListing } from "../../api/index.mjs";

export function setDeleteListingListener() {
  const deleteButtons = document.querySelectorAll(".delete-listing");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      const confirmDelete = confirm(
        "Are you sure you want to delete this listing?"
      );

      if (confirmDelete) {
        const listingId = event.target.dataset.id;

        try {
          await deleteListing(listingId);

          const listingElement = event.target.closest(".listing");
          if (listingElement) {
            listingElement.remove();
          }
          window.location.href = "/profile/user";
        } catch (error) {
          console.error("Error deleting listing:", error);
        }
      }
    });
  });
}



