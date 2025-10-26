var list = document.getElementById("list");
 

function addTodo() {
  var todo = document.getElementById("todo");

  list.innerHTML += `<li>
  <input type='text'  value= '${todo.value}' disabled class="input"/>
   <button onclick ='deleteTodo(event)' class="btn3"> Delete </button>
   <button onclick = 'editTodo(event)' class="btn4"> Edit </button>
   </li>`;

  todo.value = "";
}

function addTodoEnter(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
}

function deleteTodo(event) {
  event.target.parentNode.remove();
}

function editTodo(event) {
  var input = event.target.parentNode.childNodes[1];
  input.setAttribute("class", "focus-input");
  input.disabled = false;
  input.focus();
  event.target.innerHTML = "Update";
  event.target.setAttribute("onclick", "updateTodo(event)");
}

function updateTodo(event) {
  var input = event.target.parentNode.childNodes[1];
  input.setAttribute("class", "");
  input.disabled = true;
  event.target.innerHTML = "Edit";
}

function deleteAll() {
  list.innerHTML = "";
}