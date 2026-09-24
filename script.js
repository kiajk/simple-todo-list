const todoInput = document.querySelector("#new-todo");
const addButton = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-list")

const todos = [];
let currentFilter = "all";
const filterAll = document.querySelector("#filter-all")
const filterActive = document.querySelector("#filter-active")
const filterCompleted = document.querySelector("#filter-completed")
function renderTodos(){
     todoList.innerHTML = "";
     const filteredTodos = todos.filter((todo) => {
        if (currentFilter === "all") {
            return true;
        }
        if (currentFilter === "active") {
            return !todo.completed;
        }
        if (currentFilter === "completed") {
            return todo.completed;
        }
     });
      const todocount = document.querySelector("#todo-count")
        const remainingTodos = todos.filter((todo) => !todo.completed).length;
        todocount.textContent = `${remainingTodos} items left`;
        
        const emptyMessage = document.querySelector("#empty-message")
        if (remainingTodos.length === 0) {
            emptyMessage.style.display = "block";
        } else {
            emptyMessage.style.display = "none";
        }
     filteredTodos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.title;
        if (todo.completed) {
            li.classList.add("completed");
        }
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        li.appendChild(deleteButton);
        deleteButton.addEventListener("click" , () => {
            event.stopPropagation();
            todos.splice(todos.indexOf(todo),1)
            renderTodos();
        })
        li.addEventListener("click" , () => {
            todo.completed = !todo.completed;
            renderTodos();
        })
        todoList.appendChild(li);
     });
}
filterAll.addEventListener("click" , () => {
    currentFilter = "all";
    renderTodos();
});
filterActive.addEventListener("click" , () => {
    currentFilter = "active";
    renderTodos();
});
filterCompleted.addEventListener("click" , () => {
    currentFilter = "completed"
    renderTodos();
})
addButton.addEventListener("click" , () => {
    console.log("clicked");
    const todoText = todoInput.value;
    if (todoText.trim() === ""){
        return;
    }
    const todo = {
        id:Date.now(),
        title: todoText,
        completed:false
    };
    todos.push(todo);
    renderTodos();  
    console.log(todos);
    console.log(todoText);
});



