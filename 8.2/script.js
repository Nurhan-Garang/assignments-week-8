// Select DOM elements using modern selectors
const productName = document.querySelector(".product-name");
const productImg = document.querySelector(".product-img");
const updateBtn = document.querySelector(".update-btn");

const nameInput = document.querySelector("#newName");
const imageInput = document.querySelector("#newImage");

// Add click event
updateBtn.addEventListener("click", () => {
  const newName = nameInput.value.trim();
  const newImage = imageInput.value.trim();

  if (newName) {
    productName.textContent = newName;
    productName.classList.add("highlight");
  }

  if (newImage) {
    productImg.src = newImage;
  }

  // Optional: Clear inputs after update
  nameInput.value = "";
  imageInput.value = "";
});
