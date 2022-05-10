//MOSTRANDO PRODUCTOS
const container = document.getElementById("contenedor");

fetch("productos.json")
    .then(response => response.json())
    .then(result => {
        let productos = result;
        productos.forEach(producto => {
            container.innerHTML += `            
                            <div class="moto" id="${producto.marca}">                            
                                    <div class="col"> 
                                        <div class="card shadow-sm">
                                            <img src=${producto.img} alt="">
                                            <div class="card-body">                                        
                                                <h3>${producto.marca}</h3>                                            
                                                <p>${producto.nombreMoto}</p>                                           
                                                <label>Precio:</label>
                                                <p>$${producto.precio}</p>                                            

                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="btn-group">
                                                        <button type="button" class="btn btn-sm btn-outline-secondary" id="btn_agregar_carrito">Agregar al carrito</button>
                                                    </div>
                                                </div>
                                            </div>                                         
                                        </div>
                                    </div>                      
                            </div>                         
                `
        })
    })
    .catch(error => console.log(error))






// EVENTO FILTRO
const selectFiltro = document.getElementById("selectFiltro");
selectFiltro.addEventListener("change", () => {

    //ocultando todas las motos con la clase ".moto"
    const moto = document.querySelectorAll(".moto");    
    moto.forEach(el => {
        el.className = "ocultar_tarjeta_moto";
    })

    //ocultando todas las motos mostradas con clase ".mostrar_tarjeta_moto"
    const motoMostradas = document.querySelectorAll(".mostrar_tarjeta_moto");    
    motoMostradas.forEach(el => {
        el.className = "ocultar_tarjeta_moto";
    })

    console.log(selectFiltro.value);

    //mostrando las motos de la marca elegida en el select
    const marca = document.querySelectorAll(`#${selectFiltro.value}`);    
    marca.forEach(e => {
        e.className = "mostrar_tarjeta_moto";
    })

    
    // const moto = document.querySelectorAll(".moto");
    // moto.forEach(el => {
    //     // el.classList.remove("moto");
    //     el.className = "ocultar_tarjeta_moto";
    // })

    // console.log(selectFiltro.value);
    // // filtrar(selectFiltro.value);

    // const marca = document.querySelectorAll(`#${selectFiltro.value}`);    
    // marca.forEach(e => {
    //     e.className = "mostrar_tarjeta_moto";
    // })
})







//EVENTO BOTON AGREGAR AL CARRITO
// const btn_agregar_carrito = document.querySelector("#btn_agregar_carrito");
// btn_agregar_carrito.addEventListener("click", ()=>{
//    btn_agregar_carrito.className = "btn_agregar_carrito";

//    const p_nombreMoto = document.getElementById("nombreMoto");
//    localStorage.setItem("Carrito",p_nombreMoto.innerHTML);
// })
