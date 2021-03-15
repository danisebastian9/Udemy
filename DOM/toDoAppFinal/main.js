/*
    This is a ToDo list app that will receive data through a 
    form and save it through an unordered list, it also allows the
    data to be deleted by clicking it from the list and also 
    save the listed data in the browser cache.
*/

const todos =  JSON.parse(localStorage.getItem("todos")) || [];

const render = () => {
    const todoList = document.getElementById("todo-list");
    const todosTemplate = todos.map(t => "<li>" + t + "</li>");
    todoList.innerHTML = todosTemplate.join(""); 
    const elementos = document.querySelectorAll("#todo-list li") 
    elementos.forEach((elemento, indice) => {  
        elemento.addEventListener("click", () =>{    
            elemento.parentNode.removeChild(elemento)    
            todos.splice(indice, 1)  
            actualizaTodos(todos)
            render()
        })
    })
}
const actualizaTodos = (todos) => {
    const todoString = JSON.stringify(todos) // convierte todo en string
    localStorage.setItem("todos", todoString)
}

window.onload = () => {
    render()
    const form = document.getElementById("todo-form");
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = "";
        todos.push(todoText);
        actualizaTodos(todos)
        render()
    }       
}