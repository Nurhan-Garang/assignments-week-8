// const newParagraph=document.createElement("p");
// newParagraph.textContent="this is the new";
// console.log(newParagraph.textContent);

// const container=document.querySelector(".container");
// container.appendChild(newParagraph);
// container.append("my javascript",newParagraph);
// container.prepend("Name");

const input =document.querySelector("#taskInput");
const addBtn=document.querySelector("#addTaskBtn");
const list=document.querySelector("#taskList");

addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();
    if(taskText === "") return;

    const li=document.createElement("li");
    li.textContent=taskText;

    //Add remove button to each task
     const removeBtn = document.createElement("button");
    removeBtn.textContent="X";
    removeBtn.style.marginLeft = "10px";

    removeBtn.addEventListener("click",() => {
        li.remove();
    });
    li.appendChild(removeBtn);
    list.appendChild(li);
    input.value="";

});
function addTask() {
  const list = document.getElementById("todo-list");
  const newItem = document.createElement("li");
  newItem.textContent = "New Task";
  list.appendChild(newItem);
};
function addComment() {
  const commentBox = document.getElementById("comments");
  const newComment = document.createElement("p");
  newComment.textContent = "This is a new comment!";
  commentBox.prepend(newComment); // adds on top
}
function removeEggs() {
  const list = document.getElementById("shopping-list");
  const itemToRemove = document.getElementById("remove-me");
  list.removeChild(itemToRemove);
}
let paragraph;

function createParagraph() {
  paragraph = document.createElement("p");
  paragraph.textContent = "👋 Hello, I’m a new paragraph!";
  document.getElementById("content-area").appendChild(paragraph);
}

function removeParagraph() {
  if (paragraph) {
    paragraph.remove();
  }
}


function insertBeforeRef() {
  const newPara = document.createElement("p");
  newPara.textContent = "✨ I'm inserted before the reference!";
  
  const ref = document.getElementById("ref");
  const parent = document.getElementById("list");

  parent.insertBefore(newPara, ref);
}

