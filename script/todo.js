const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');
let toDos = [];
const TODOS_KEY = 'todos';

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const deleteTarget = e.target.parentElement;
  deleteTarget.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteTarget.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  const btn = document.createElement('button');
  btn.textContent = '❌';
  btn.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  span.textContent = newTodo.text;
  toDoList.appendChild(li);
}

function toDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;

  toDos.forEach(paintToDo);
}
