const submitButton = document.getElementById("submit");
function handleClick() {
    const textInput = document.getElementById("todo-input");
    if (textInput.value === "") {
        return;
    }
    
    const todoList = document.getElementById("todo-list");
    const listItem = document.createElement("li");
    listItem.textContent = textInput.value;

    todoList.appendChild(listItem);
    textInput.value = "";
}

submitButton.addEventListener("click", handleClick);

