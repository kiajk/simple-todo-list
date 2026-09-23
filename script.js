const todoInput = document.querySelector("#new-todo");
const addButton = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-list")

addButton.addEventListener("click" , () => {
    console.log("clicked");
    const todoText = todoInput.value;
    if (todoText.trim() === ""){
        return;
    }
    const li = document.createElement("li")
    li.textContent = todoText;
    todoList.appendChild(li);
    console.log(todoText);
});



