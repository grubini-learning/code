interface ITask {
  text: string;
  completed: boolean;
}

const btn: HTMLButtonElement = document.querySelector("button")!;
const form: HTMLFormElement = document.getElementById(
  "todoform"
)! as HTMLFormElement;
const input: HTMLInputElement = document.getElementById(
  "todoinput"
)! as HTMLInputElement;
const taskContainer = document.getElementById("todolist")!;

let todos: ITask[] = retrieveTodos();
loadTodos(todos);

function loadTodos(todos: ITask[]): void {
  taskContainer.innerHTML = "";
  todos.forEach((todo) => createTodoElement(todo));
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function retrieveTodos(): ITask[] {
  return JSON.parse(localStorage.getItem("todos") || "[]");
}

function createTask(text: string): ITask {
  const newTask: ITask = { text, completed: false };
  return newTask;
}

function createTodoElement(task: ITask): void {
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
  taskContainer?.append(li);
}

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  const task: ITask = { text: input.value, completed: false };

  todos.push(task);
  createTodoElement(task);

  saveTodos();

  input.value = "";
});
