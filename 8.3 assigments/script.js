const input = document.getElementById("questionInput");
const addBtn = document.getElementById("addBtn");
const faqContainer = document.getElementById("faqContainer");

addBtn.addEventListener("click", () => {
  const questionText = input.value.trim();

  if (questionText !=="") {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";

    const questionPara = document.createElement("p");
    questionPara.textContent = questionText;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", () => {
      faqContainer.removeChild(faqItem);
    });

    faqItem.appendChild(questionPara);
    faqItem.appendChild(deleteBtn);
    faqContainer.appendChild(faqItem);

    input.value = "";
  }
});
