const todos = [];


window.onload = () => {
    const form = document.getElementById("todo-form");
    form.onsubmit = (e) => {
        e.preventDefault(); //previene que se refresque la pagina que tiene por default los formularios.
        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = "";  // Valor capturado es asignado a un empty string.
        todos.push(todoText);
        const todoList = document.getElementById("todo-list");
        todoList.innerHTML = ""; // limpia la lista de respuesta para que no tenga duplicados.
        for(let i = 0; i < todos.length; i++) {
            todoList.innerHTML += "<li>" + todos[i] + "</li>"
        }
    }
}