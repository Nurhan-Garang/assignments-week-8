
const heading = document.getElementById("mainHeading");
heading.textContent = "Hello from JavaScript!";

const firstParagraph = document.getElementsByTagName("p")[0];
console.log("First paragraph text:", firstParagraph.textContent);


const image = document.getElementById("mainImage");
image.src = "https://picsum.photos/200";