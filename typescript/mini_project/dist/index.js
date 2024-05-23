"use strict";
const btn = document.querySelector("button");
const form = document.getElementById("todoform");
const input = document.getElementById("todoinput");
const taskContainer = document.getElementById("todolist");
let todos = retrieveTodos();
loadTodos(todos);
function loadTodos(todos) {
    taskContainer.innerHTML = "";
    todos.forEach((todo) => createTodoElement(todo));
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function retrieveTodos() {
    return JSON.parse(localStorage.getItem("todos") || "[]");
}
function createTask(text) {
    const newTask = { text, completed: false };
    return newTask;
}
function createTodoElement(task) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    li.textContent = task.text;
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function () {
        task.completed = this.checked;
        todos = todos.filter((todo) => !todo.completed);
        console.log('new todos:" ', todos);
        saveTodos();
        loadTodos(todos);
    });
    li.append(checkbox);
    taskContainer === null || taskContainer === void 0 ? void 0 : taskContainer.append(li);
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = { text: input.value, completed: false };
    todos.push(task);
    createTodoElement(task);
    saveTodos();
    input.value = "";
});
