const productName=document.querySelector(".Nurhan");
const productImg=document.querySelector(".profile-pic");
const updateBtn=document.querySelector(".update-btn");

const imageInput=document.querySelector("#newImage");
const nameInput=document.querySelector("#newName");

updateBtn.addEventListener("click",()=>{
const newName = nameInput.value.trim();
const newImage = imageInput.value.trim();

if(newName){
    productName.textContent=newName;
    productName.classList.add("highlight");
}
if(newImage){
    productImg.src=newImage;
}

 nameInput.value = "";
  imageInput.value = "";
});