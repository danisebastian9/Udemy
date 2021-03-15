const todos = [];

window.onload = () => {
    const form = document.getElementById("todo-form");
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = "";
        todos.push(todoText);
        const todoList = document.getElementById("todo-list");
        const todosTemplate = todos.map(t => "<li>" + t + "</li>"); // simplified version
        // const todosTemplate = todos.map(t => {
            // return "<li>" + t + "</li>";
        todoList.innerHTML = todosTemplate.join("");     // va a tomar todos los elementos de un array y juntarlos con su parametro asignado ("") En este caso string vacio.
        const elementos = document.querySelectorAll("#todo-list li")  // QUeremos todos los elementos de un listado con id todo-list y especificando que queremos los valores li de esa lista.
        elementos.forEach((elemento, indice) => {  // iteramos similar a map diferencia de forEach es que el valor retornado no puede ser asignado a const a la izquierda.
            elemento.addEventListener("click", () =>{    //al click va a hacer algo con el elemento seleccionado.
                elemento.parentNode.removeChild(elemento) // parentNode lo transforma en el parent de li, en este caso el ul. Y removeChild(elemento) va a remover el child de ese parent en este caso el li.   
                todos.splice(indice, 1) // splice remueve elementos de un array splice(el objeto a borrar, las veces) 
            })
        })
    }
        
}