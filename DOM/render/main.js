/*
    La funcion render va a llamar a la funcion misma para que se actualize el indice pues 
    previamente solo se borraba el elemento de la lista pero 
    el indice quedaba igual, entonces hay que llamar a la misma
    funcion para que se actualice el indice. 
*/

const todos = [];

const render = () => {
    const todoList = document.getElementById("todo-list");
    const todosTemplate = todos.map(t => "<li>" + t + "</li>");
    todoList.innerHTML = todosTemplate.join(""); 
    const elementos = document.querySelectorAll("#todo-list li") 
    elementos.forEach((elemento, indice) => {  
        elemento.addEventListener("click", () =>{    
            elemento.parentNode.removeChild(elemento)    
            todos.splice(indice, 1)  
            render()
        })
    })
}

window.onload = () => {
    const form = document.getElementById("todo-form");
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = "";
        todos.push(todoText);
        render()
    }
        
}