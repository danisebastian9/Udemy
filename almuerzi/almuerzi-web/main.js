let mealsState = []
let user = {}
let ruta = "login" // login, register, orders


const stringToHTML = (s) => {                                 // s = string
    const parser = new DOMParser()  
    const doc = parser.parseFromString(s, "text/html")        // Crea un documento HTML completo
    return doc.body.firstChild                                // returna el primer elemento del body en el nuevo HTML creado. 
}

const renderItem = (item) => {
    const element = stringToHTML(`<li data-id="${item._id}">${item.name}</li>`) // le asigna a cada elemento listado del servidor en el HTML su ID y nombre
    
    element.addEventListener("click", () => {                                   // selecciona nuestro elemento con click
        const mealsList = document.getElementById("meals-list")
        Array.from(mealsList.children).forEach(x => x.classList.remove("selected"))  // Le quita el class de selected a los elementos no seleccionados
        element.classList.add("selected")                                       // le agrega una clase de selected al elemento seleccionado. element.classList.add la remueve
        const mealsIdInput = document.getElementById("meals-id")
        mealsIdInput.value = item._id                                           // le asignamos asignando el ID del elemento seleccionado al hidden  input
    })

    return element
}

const renderOrder = (order, meals) => {
    const meal = meals.find(meal => meal._id === order.meal_id)
    const element = stringToHTML(`<li data-id="${order._id}">${meal.name} ${order.user_id}</li>`)
    return element
}

const initializeForm = () => {
    const orderForm = document.getElementById("order")
    orderForm.onsubmit = (evento) => {
        evento.preventDefault()                  // Previene que al darle enviar se refrezque la pagina.
        const submit = document.getElementById("submit")
        submit.setAttribute("disabled", true)
        const mealId = document.getElementById("meals-id")
        const mealIdValue = mealId.value
        const token = localStorage.getItem('token')
        if (!mealIdValue) {
            alert("An option from the menu needs to be selected.")
            submit.removeAttribute("disabled")
            return
        }

        const order = {
            meal_id: mealIdValue,
            user_id: user._id,
        }

        fetch("https://almuerzi-app.vercel.app/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            },
            body: JSON.stringify(order)
        }).then(x => x.json())
          .then(respuesta => {
              const renderedOrder = renderOrder(respuesta, mealsState)
              const ordersList = document.getElementById("orders-list")
              ordersList.appendChild(renderedOrder)
              submit.removeAttribute("disabled")
          })
    }
}

const initializeData = () => {
    fetch("https://almuerzi-app.vercel.app/api/meals")
    .then(response => response.json())
    .then(data => {
        mealsState = data
        const mealsList = document.getElementById("meals-list")
        const submit = document.getElementById("submit")
        const listItems = data.map(renderItem)     // los atributos que vamos a necesitar, en este caso los nombres. 
        mealsList.removeChild(mealsList.firstElementChild)  // remueve el cargando cuando hay contenido. 
        listItems.forEach(element => mealsList.appendChild(element))   // va a agregar cada uno de los elementos a la plantilla. 
        submit.removeAttribute("disabled")  // deshabilitar boton mientras no esta la respuesta del servidor.
        fetch("https://almuerzi-app.vercel.app/api/orders")
            .then(response => response.json())           // trae las ordenes a nuestra app
            .then(ordersData => {         
                const ordersList = document.getElementById("orders-list")
                const listOrders = ordersData.map(orderData => renderOrder(orderData, data))
                
                ordersList.removeChild(ordersList.firstElementChild)
                listOrders.forEach(element => ordersList.appendChild(element))
        })
    })
}
const renderApp = () => {
    const token = localStorage.getItem("token")
    if (token) {
        user = JSON.parse(localStorage.getItem("user"))
        return renderOrders();
    }
    renderLogin()   
}

const renderOrders = () => {
    const ordersView = document.getElementById("orders-view")
    document.getElementById("app").innerHTML = ordersView.innerHTML
    initializeForm()
    initializeData()
}

const renderLogin = () => {
    const loginTemplate = document.getElementById("login-template")
    document.getElementById("app").innerHTML = loginTemplate.innerHTML

    const loginForm = document.getElementById("login-form")
    loginForm.onsubmit = (event) => {
        event.preventDefault()
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
    
        fetch("https://almuerzi-app.vercel.app/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email , password })  // en vez de llamar email: email, solo llamando al primero va a crear el objeto de email con su propiedad email. 
        }).then(x => x.json())
          .then(respuesta => {
              localStorage.setItem("token", respuesta.token) // guardar el token en la cache
              ruta = "orders"
              return respuesta.token
          })
          .then(token => {
              return fetch("https://almuerzi-app.vercel.app/api/auth/me",{
                  method: "GET",
                  headers: {
                      "Content-Type": "application/json",
                      authorization: token,
                  },
              })
          })
          .then(x => x.json())
          .then(fetchedUser => {
              localStorage.setItem("user", JSON.stringify(fetchedUser));
              user = fetchedUser
              renderOrders()
            })
    }
}

window.onload = () => {
    renderApp()

}