window.onload = () => {    // Will wait until the complete website content is loaded before being executed.
    const parrafo = document.getElementById('text')
    parrafo.innerText = "Texto actualizado" // va a reemplazar el valor del parrafo en el HTML.
    parrafo.innerHTML = '<li>elemento 1</li><li>elemento 2</li>' // va a agregar valor HTML al codigo original del HTML
    // console.log(parrafo.innerHTML);   //Will show the element value
}    