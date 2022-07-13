const clothing = [
    {
        id: 1,
        name: "Sudadera",
        price: 1000,
        stock: 10,
        img: "./img/featured1.png",
    },
    {
        id: 2,
        name: "camisa",
        price: 800,
        stock: 10,
        img: "./img/featured2.png",
    },
    {
        id: 3,
        name: "Sudadera",
        price: 1000,
        stock: 10,
        img: "./img/featured3.png",
    },
];

document.addEventListener("DOMContentLoaded", function(){

    CarritoDEropa();
})

function CarritoDEropa(){
    const armario = document.querySelector(".inventario");
    let html = "";
    clothing.forEach(element => {
        html += `<div class="ropa">
        <div class="ropa-imagen">
            <img src=${element.img} alt="${element.name}">
        </div>
        <h3 class="texto">
            <font class="precio">US$${element.price}</font>
            <span class="stock" >|Stock: ${element.stock}</span>
        </h3>
        <h3 class="name">${element.name}</h3>
        <button class="btn" data-id="${element.id}">Agregar</button>
        </div>`
    });
    
    armario.innerHTML = html;
    let agregando = [];
    document.addEventListener("click", function (event){
        let aux = event.target.classList.contains("btn");
        let iduser = event.target.getAttribute('data-id')
        let money =  event.target.parentElement.children[1].firstElementChild
        let nombre = event.target.parentElement.children[2]
        let foto = event.target.parentElement.children[0].children[0]
        if (aux) {
            const productoCarrito = {
                img: foto.getAttribute("src"),
                name: nombre.textContent,
                id: iduser,
                cantidad: 1,
                price: money.textContent,
                pricetotal: 1000
            }
            if (agregando.hasOwnProperty(productoCarrito.id)) {
                productoCarrito.cantidad = agregando[productoCarrito.id].cantidad + 1
                productoCarrito.pricetotal = agregando[productoCarrito.id].pricetotal + productoCarrito.pricetotal
            }
            agregando[productoCarrito.id] = {...productoCarrito}
            console.log(iduser)
            console.log(agregando)
        }
        const itearacarrito = document.querySelector(".menu-carrito");
        let html2 = "";
        agregando.forEach(element => {
            html2 += `<div class="ropa">
            <div class="ropa-imagen">
                <img src=${element.img} alt="${element.name}">
            </div>
            <h3 class="texto">
                <font class="precio">${element.price}</font>
                <span class="stock" >|Stock:10 </span>
                <font class="precio">Subtotal: $${element.pricetotal}</font>
                <span class="stock" >${element.cantidad} unidades </span>
            </h3>
            <h3 class="name">${element.name}</h3>
            <button class="btn" data-id="${element.id}">Agregar</button>
            </div>`
        });
        
        itearacarrito.innerHTML = html2;
    })
   
    }

