// EVENTO FILTRO
const selectFiltro = document.getElementById("selectFiltro");
selectFiltro.addEventListener("change", () => {

    const moto = document.querySelectorAll(".moto");
    moto.forEach(el => {
        // el.classList.remove("moto");
        el.className = "ocultar_tarjeta_moto";
    })

    console.log(selectFiltro.value);
    // filtrar(selectFiltro.value);

    const marca = document.querySelectorAll(`#${selectFiltro.value}`);
    marca.forEach(e => {
        e.className = "mostrar_tarjeta_moto";
    })
})







//EVENTO BOTON AGREGAR AL CARRITO
// const btn_agregar_carrito = document.querySelector("#btn_agregar_carrito");
// btn_agregar_carrito.addEventListener("click", ()=>{
//    btn_agregar_carrito.className = "btn_agregar_carrito";

//    const p_nombreMoto = document.getElementById("nombreMoto");
//    localStorage.setItem("Carrito",p_nombreMoto.innerHTML);
// })
