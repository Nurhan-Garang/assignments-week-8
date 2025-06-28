const heading=document.querySelector(".flowers");
const productImg = document.querySelector(".tulips");
const updateBtn=document.querySelector(".update-btn");


const imageInput=document.querySelector("#newImage");
const nameInput=document.querySelector("#newName");

const paragraph=document.querySelector("p");
console.log(paragraph.textContent);
paragraph.textContent="my favs are red tulips.";


updateBtn.addEventListener("click",()=> {
const newName = nameInput.value.trim();
const newImage = imageInput.value.trim();

if(newName){
    heading.textContent=newName;
    heading.classList.add("highlight")
}
if (newImage) {
    productImg.src= newImage;
}
nameInput.value = "";
imageInput.value = "";
});
