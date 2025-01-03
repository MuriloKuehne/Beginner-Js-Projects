const formElem = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUl = document.getElementById("todo-list");

let allTodos = [];

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    allTodos.push(todoText);
    createTodoItem(todoText);
    todoInput = "";
  }
}

function updateTodoList() {
  todoListUl.innerHTML = "";
  allTodos.forEach((todo, todoIndex) => {
    todoItem = createTodoItem(todo, todoIndex);
  });
}

function createTodoItem(todo) {
  const todoLi = document.createElement("li");
  todoLi.innerText = todo;
  todoListUl.append(todoLi);
}
