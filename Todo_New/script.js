console.log("JS is working...!");

const input = document.querySelector("input");
const button = document.querySelector("#btn");
const taskElement = document.querySelector("ol");

const inputHandler = function (event) {
  if (
    event.type === "click" ||
    (event.type === "keydown" && event.key === "Enter")
  ) {
    if (input.value.trim() === "") return;

    const listItem = document.createElement("li");
    const spanText = document.createElement("span");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const completeBtn = document.createElement("button");

    spanText.innerText = input.value;

    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";
    completeBtn.innerText = "Done";

    listItem.appendChild(spanText);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(completeBtn);

    taskElement.appendChild(listItem);

    input.value = "";

    editBtn.addEventListener("click", () => editElement(spanText));
    deleteBtn.addEventListener("click", () => deleteElement(listItem));
    completeBtn.addEventListener("click", () => completeTask(spanText, completeBtn));
  }
};

const editElement = (spanText) => {
  const newValue = prompt("Update your task:", spanText.innerText);
  if (newValue !== null && newValue.trim() !== "") {
    spanText.innerText = newValue;
  }
};

const deleteElement = (listItem) => {
  listItem.remove();
};

const completeTask = (spanText, completeBtn) => {
  if (completeBtn.innerText === "Done") {
    spanText.style.textDecoration = "line-through";
    spanText.style.backgroundColor = "#f8d7da";
    completeBtn.innerText = "Pending";
    completeBtn.title = "Mark as pending";
  } else {
    spanText.style.textDecoration = "none";
    spanText.style.backgroundColor = "#d4edda";
    completeBtn.innerText = "Done";
    completeBtn.title = "Mark as done";
  }
};

button.addEventListener("click", inputHandler);
input.addEventListener("keydown", inputHandler);
