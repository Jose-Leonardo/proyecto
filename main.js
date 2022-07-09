const clothing = [
    {
        id: 1,
        name: "sudadera",
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
        name: "sudadera2",
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
        <div>
            <p>Nombre : ${element.name}</p>
            <p>Precio : ${element.price}</p>
            <p><small> Cantidad en bodega : ${element.stock}</small></p>
        </div>
        <div class="Carrito">
            <button class="btn" data-id="${element.id}">Agregar</button>
        </div>

        </div>`
    });
    
    armario.innerHTML = html;
    let agregando = [];
    document.addEventListener("click", function (event){
        let aux = event.target.classList.contains("btn");
        let iduser = event.target.getAttribute('data-id')
        if (aux) {
            console.log("esta funcionando este pedo");
            console.log(iduser)
            agregando.push(iduser)
            console.log(agregando)
        }
    })
   
    }

