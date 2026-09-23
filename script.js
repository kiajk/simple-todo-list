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
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete"
    todoList.appendChild(li);
    li.appendChild(deleteButton)
    deleteButton.addEventListener("click", () => {
        event.stopPropagation()
        li.remove()
    })
    li.addEventListener("click", () => {
        li.classList.toggle("completed")
    });
    console.log(todoText);
});



